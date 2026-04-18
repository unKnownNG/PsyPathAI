/**
 * LLM integration using Pollinations API.
 * Uses secret API key from .env.local for better rate limits.
 */

export interface ChatMessageForLLM {
  role: "system" | "user" | "assistant";
  content: string;
}

const POLLINATIONS_URL = "https://gen.pollinations.ai/v1/chat/completions";

function getApiKey(): string {
  const key = process.env.POLLINATIONS_API_KEY;
  if (!key) throw new Error("POLLINATIONS_API_KEY is not set in .env.local");
  return key;
}

function getHeaders(): Record<string, string> {
  return {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getApiKey()}`,
  };
}

/**
 * Stream a chat completion from Pollinations API.
 * Returns a ReadableStream that yields text chunks.
 */
export async function streamChatCompletion(
  messages: ChatMessageForLLM[]
): Promise<ReadableStream<Uint8Array>> {
  const response = await fetch(POLLINATIONS_URL, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({
      model: "openai",
      messages,
      stream: true,
      temperature: 0.7,
      max_tokens: 1500,
    }),
  });

  if (!response.ok) {
    throw new Error(`Pollinations API error: ${response.status} ${response.statusText}`);
  }

  if (!response.body) {
    throw new Error("No response body from Pollinations API");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  return new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      let buffer = ""; // Buffer for incomplete lines across chunks

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          controller.close();
          break;
        }

        // Append new data to buffer, then split into complete lines
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");

        // The last element may be an incomplete line — keep it in the buffer
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed) continue;

          if (trimmed.startsWith("data: ")) {
            const data = trimmed.slice(6).trim();
            if (data === "[DONE]") {
              controller.close();
              return;
            }

            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                controller.enqueue(encoder.encode(content));
              }
            } catch {
              // Genuinely malformed JSON (not a split issue since we buffer)
            }
          }
        }
      }
    },
  });
}

/**
 * Non-streaming: get a full chat completion (for fallback / simple cases).
 */
export async function getChatCompletion(
  messages: ChatMessageForLLM[]
): Promise<string> {
  const response = await fetch(POLLINATIONS_URL, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({
      model: "openai",
      messages,
      stream: false,
      temperature: 0.7,
      max_tokens: 1500,
    }),
  });

  if (!response.ok) {
    throw new Error(`Pollinations API error: ${response.status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content ?? "I couldn't generate a response. Please try again.";
}

/**
 * Build the system prompt for CareerBot, injecting MCP-provided context.
 */
export function buildSystemPrompt(mcpContext: {
  personalityProfile?: Record<string, unknown>;
  nudgeAdvice?: Record<string, unknown>;
  careerAlignment?: Record<string, unknown>;
}): string {
  let contextBlock = "";

  if (mcpContext.personalityProfile) {
    const p = mcpContext.personalityProfile as Record<string, string | string[]>;
    contextBlock += `\n## Student's Personality Profile
- MBTI Type: ${p.mbtiType} ("${p.nickname}")
- Cognitive Stack: ${Array.isArray(p.cognitiveStack) ? (p.cognitiveStack as string[]).join(" → ") : p.cognitiveStack}
- Strengths: ${Array.isArray(p.strengths) ? (p.strengths as string[]).join(", ") : p.strengths}
- Blind Spots: ${Array.isArray(p.blindSpots) ? (p.blindSpots as string[]).join(", ") : p.blindSpots}
- Communication Style: ${p.communicationStyle}
- Motivational Triggers: ${Array.isArray(p.motivationalTriggers) ? (p.motivationalTriggers as string[]).join(", ") : p.motivationalTriggers}
- Stress Response: ${p.stressResponse}
- Holland Code: ${p.hollandCode}
- Holland Description: ${p.hollandDescription}
`;
  }

  if (mcpContext.nudgeAdvice) {
    const n = mcpContext.nudgeAdvice as Record<string, string | string[]>;
    contextBlock += `\n## Communication Framing
- ${Array.isArray(n.framingGuidelines) ? (n.framingGuidelines as string[]).join("\n- ") : n.framingGuidelines}
- Sample framing: ${n.sampleFraming}
`;
  }

  if (mcpContext.careerAlignment) {
    const c = mcpContext.careerAlignment as Record<string, unknown>;
    const recs = c.topRecommendations as { pathName: string; score: number; reasoning: string }[] | undefined;
    if (recs) {
      contextBlock += `\n## Top Career Recommendations
${recs.map((r, i) => `${i + 1}. **${r.pathName}** (${r.score}%): ${r.reasoning}`).join("\n")}
`;
    }
  }

  return `You are CareerBot, an AI career advisor for engineering college students on the PsyPathAI platform.

## Your Role
- Provide personalized, psychology-aware career guidance
- Help students choose career paths, plan milestones, and find learning resources
- Use the student's personality profile to frame advice in a way that resonates with them
- Be encouraging, specific, and actionable

## Rules
1. Always consider the student's personality type when framing advice
2. Be concise — students are busy. Use bullet points and clear structure.
3. When recommending paths, explain WHY it fits their personality
4. If asked about topics outside career guidance, gently redirect
5. Use emoji sparingly for warmth (1-2 per message max)
6. Never invent facts about job markets or salaries
7. If you don't know something, say so honestly
${contextBlock}

## Response Format
- Use markdown formatting (bold, lists, headers)
- Keep responses under 300 words unless the student asks for detail
- End with a follow-up question to keep the conversation going`;
}