import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { callMcpTools } from "@/lib/mcp-client";
import { buildSystemPrompt, streamChatCompletion, getChatCompletion, type ChatMessageForLLM } from "@/lib/llm";

export const maxDuration = 60; // Vercel timeout

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { message, sessionId } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // ── 1. Fetch user profile ───────────────────────────────
    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    // Resolve the user's display name once, used for chat_messages.name
    const userName = profile?.display_name || user.user_metadata?.full_name || user.email?.split("@")[0] || "User";
    const botName = `${userName}'s Bot`;

    // ── 2. Get or create session ────────────────────────────
    let activeSessionId = sessionId;
    if (!activeSessionId) {
      const { data: session, error: sessionError } = await supabase
        .from("chat_sessions")
        .insert({
          user_id: user.id,
          title: message.slice(0, 60),
          name: userName,
        })
        .select("id")
        .single();

      if (sessionError) {
        return NextResponse.json({ error: sessionError.message }, { status: 500 });
      }
      activeSessionId = session.id;
    }

    // ── 3. Save user message ────────────────────────────────
    await supabase.from("chat_messages").insert({
      session_id: activeSessionId,
      role: "user",
      content: message,
      name: userName,
    });

    // ── 4. Call MCP tools for psychological context ─────────
    let mcpContext: {
      personalityProfile?: Record<string, unknown>;
      nudgeAdvice?: Record<string, unknown>;
      careerAlignment?: Record<string, unknown>;
    } = {};

    if (profile?.mbti_type && profile?.holland_code) {
      try {
        const mcpResults = await callMcpTools([
          {
            name: "get_personality_profile",
            arguments: {
              mbtiType: profile.mbti_type,
              hollandCode: profile.holland_code,
            },
          },
          {
            name: "get_psychological_nudge",
            arguments: {
              mbtiType: profile.mbti_type,
              context: message,
            },
          },
          {
            name: "get_career_alignment",
            arguments: {
              mbtiType: profile.mbti_type,
              hollandCode: profile.holland_code,
              goal: profile.goal || "Explore & Learn",
              interests: profile.interests || [],
            },
          },
        ]);

        mcpContext = {
          personalityProfile: mcpResults[0],
          nudgeAdvice: mcpResults[1],
          careerAlignment: mcpResults[2],
        };
      } catch (mcpError) {
        // MCP failure is non-fatal — continue without psychological context
        console.error("[Chat API] MCP error:", mcpError);
      }
    }

    // ── 5. Build messages for LLM ───────────────────────────
    const systemPrompt = buildSystemPrompt(mcpContext);

    // Get recent chat history (last 10 messages)
    const { data: history } = await supabase
      .from("chat_messages")
      .select("role, content")
      .eq("session_id", activeSessionId)
      .order("created_at", { ascending: true })
      .limit(10);

    const llmMessages: ChatMessageForLLM[] = [
      { role: "system", content: systemPrompt },
    ];

    // Add profile context as a system note
    if (profile) {
      if (profile.mbti_type && profile.holland_code) {
        llmMessages.push({
          role: "system",
          content: `Student info: MBTI=${profile.mbti_type}, Holland=${profile.holland_code}, Year=${profile.year || "unknown"}, Goal="${profile.goal || "unknown"}", Hours/week=${profile.hours_per_week || "unknown"}, Learning style=${profile.learning_style || "unknown"}, Interests=${(profile.interests || []).join(", ") || "none specified"}. The student HAS completed the personality quiz.`,
        });
      } else {
        llmMessages.push({
          role: "system",
          content: `The student has NOT completed the personality quiz yet. Their profile data is incomplete (no MBTI type or Holland code). Do NOT claim they have taken the quiz. Gently suggest they take the quiz at /onboarding for more personalized advice, but still answer their question helpfully.`,
        });
      }
    } else {
      llmMessages.push({
        role: "system",
        content: `No student profile found. The student has NOT taken the personality quiz. Gently recommend they take it at /onboarding for personalized advice, but still help them with their question.`,
      });
    }

    // Add chat history
    if (history) {
      for (const msg of history) {
        llmMessages.push({
          role: msg.role === "user" ? "user" : "assistant",
          content: msg.content,
        });
      }
    }

    // ── 6. Get LLM response ────────────────────────────────
    // Try streaming first, fall back to non-streaming
    try {
      const stream = await streamChatCompletion(llmMessages);

      // Collect full response for DB save while streaming
      const [streamForClient, streamForSave] = stream.tee();

      // Save bot response in background after stream completes
      const saveResponse = async () => {
        const reader = streamForSave.getReader();
        const chunks: string[] = [];
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(decoder.decode(value, { stream: true }));
        }

        const fullResponse = chunks.join("");
        if (fullResponse) {
          await supabase.from("chat_messages").insert({
            session_id: activeSessionId,
            role: "bot",
            content: fullResponse,
            name: botName,
          });
        }
      };

      // Don't await — let it save in background
      saveResponse().catch((err) => console.error("[Chat API] Save error:", err));

      return new Response(streamForClient, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "X-Session-Id": activeSessionId,
          "Cache-Control": "no-cache",
        },
      });
    } catch (streamError) {
      // Fallback to non-streaming
      console.error("[Chat API] Stream error, falling back:", streamError);

      const response = await getChatCompletion(llmMessages);

      // Save bot message
      await supabase.from("chat_messages").insert({
        session_id: activeSessionId,
        role: "bot",
        content: response,
        name: botName,
      });

      return NextResponse.json({
        message: response,
        sessionId: activeSessionId,
      });
    }
  } catch (error) {
    console.error("[Chat API] Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
