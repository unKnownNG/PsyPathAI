"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Send, Brain, Sparkles, User, Bot, Plus, MessageSquare, AlertTriangle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

interface ChatMessage {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: string;
}

interface ChatSession {
  id: string;
  title: string;
  created_at: string;
}

interface UserProfile {
  mbtiType: string;
  hollandCode: string;
  goal: string;
  year: string;
  recommendedPaths: string[];
  learningStyle: string;
  interests: string[];
}

const suggestedPrompts = [
  "What career path suits my personality?",
  "Help me create a 6-month learning plan",
  "Should I focus on frontend or backend?",
  "How do I prepare for FAANG interviews?",
];

function TypingIndicator() {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
      <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #6366f1, #34d399)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Bot style={{ width: "16px", height: "16px", color: "#fff" }} />
      </div>
      <div style={{ padding: "14px 20px", borderRadius: "16px", borderBottomLeftRadius: "6px", background: "#111827", border: "1px solid rgba(148,163,184,0.1)" }}>
        <div style={{ display: "flex", gap: "6px" }}>
          {[0, 1, 2].map((i) => (
            <motion.div key={i} style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#818cf8" }}
              animate={{ scale: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Markdown-aware message bubble ── */
function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
      style={{ display: "flex", alignItems: "flex-start", gap: "12px", ...(isUser ? { flexDirection: "row-reverse" } : {}) }}>
      <div style={{
        width: "36px", height: "36px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        ...(isUser ? { background: "#1e293b", border: "1px solid rgba(148,163,184,0.12)" } : { background: "linear-gradient(135deg, #6366f1, #34d399)" })
      }}>
        {isUser ? <User style={{ width: "16px", height: "16px", color: "#94a3b8" }} /> : <Bot style={{ width: "16px", height: "16px", color: "#fff" }} />}
      </div>
      <div style={{ maxWidth: "min(75%, calc(100vw - 100px))", ...(isUser ? { textAlign: "right" as const } : {}) }}>
        <div style={{
          padding: "14px 20px", borderRadius: "16px", fontSize: "0.9rem", lineHeight: 1.7,
          ...(isUser
            ? { background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.25)", borderBottomRightRadius: "6px" }
            : { background: "#111827", border: "1px solid rgba(148,163,184,0.1)", borderBottomLeftRadius: "6px" })
        }}>
          {isUser ? (
            <p style={{ whiteSpace: "pre-wrap" }}>{message.content}</p>
          ) : (
            <div className="bot-markdown">
              <ReactMarkdown>{message.content || "thinking..."}</ReactMarkdown>
            </div>
          )}
        </div>
        <p style={{ fontSize: "0.65rem", color: "#64748b", marginTop: "6px", padding: "0 4px" }}>{message.timestamp}</p>
      </div>
    </motion.div>
  );
}

export default function BotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);

  // This ref prevents the "load session messages" useEffect from
  // overwriting in-flight streaming messages when a NEW session is created.
  const isNewSessionRef = useRef(false);

  const supabase = createClient();

  // Check auth and load profile
  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setIsAuthenticated(!!user);

      let profileLoaded = false;
      if (user) {
        try {
          const res = await fetch("/api/profile");
          if (res.ok) {
            const data = await res.json();
            if (data.profile) {
              setProfile({
                mbtiType: data.profile.mbti_type || "",
                hollandCode: data.profile.holland_code || "",
                goal: data.profile.goal || "",
                year: data.profile.year || "",
                recommendedPaths: data.profile.recommended_paths || [],
                learningStyle: data.profile.learning_style || "",
                interests: data.profile.interests || [],
              });
              profileLoaded = true;
            }
          }
        } catch { /* fallback below */ }

        try {
          const res = await fetch("/api/chat/sessions");
          if (res.ok) {
            const data = await res.json();
            setSessions(data.sessions || []);
          }
        } catch { /* ignore */ }
      }

      if (!profileLoaded) {
        const stored = localStorage.getItem("careerforge-profile");
        if (stored) {
          try { setProfile(JSON.parse(stored)); } catch { /* ignore */ }
        }
      }
    };
    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Load messages when user clicks an EXISTING session.
  // Skips if the session was just created (isNewSessionRef).
  useEffect(() => {
    if (!activeSessionId) return;

    // If we just created this session during handleSend, the messages
    // are already in state from streaming. Don't overwrite them.
    if (isNewSessionRef.current) {
      isNewSessionRef.current = false;
      return;
    }

    const loadMessages = async () => {
      try {
        const res = await fetch(`/api/chat/messages?sessionId=${activeSessionId}`);
        if (res.ok) {
          const data = await res.json();
          const loaded: ChatMessage[] = (data.messages || []).map((m: { id: string; role: string; content: string; created_at: string }) => ({
            id: m.id,
            role: m.role as "user" | "bot",
            content: m.content,
            timestamp: new Date(m.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          }));
          setMessages(loaded);
        }
      } catch { /* ignore */ }
    };
    loadMessages();
  }, [activeSessionId]);

  // ── NO auto-scroll at all. The user controls their own scroll position. ──

  const handleSend = useCallback(async (text?: string) => {
    const msg = text || input.trim();
    if (!msg || isTyping) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      content: msg,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    if (isAuthenticated) {
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: msg,
            sessionId: activeSessionId,
          }),
        });

        // Get session ID from header
        const newSessionId = res.headers.get("X-Session-Id");
        if (newSessionId && !activeSessionId) {
          // Mark as new session so the useEffect doesn't overwrite messages
          isNewSessionRef.current = true;
          setActiveSessionId(newSessionId);
          // Refresh sessions list
          try {
            const sessRes = await fetch("/api/chat/sessions");
            if (sessRes.ok) {
              const sessData = await sessRes.json();
              setSessions(sessData.sessions || []);
            }
          } catch { /* ignore */ }
        }

        const contentType = res.headers.get("Content-Type") || "";

        if (contentType.includes("text/plain") && res.body) {
          // ── Streaming response ──
          const reader = res.body.getReader();
          const decoder = new TextDecoder();
          const botId = `b-${Date.now()}`;

          // Add bot message placeholder — keep isTyping true until first chunk
          setMessages((prev) => [...prev, {
            id: botId,
            role: "bot",
            content: "",
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          }]);

          // Read the stream — accumulate text serially
          let accumulated = "";
          let firstChunk = true;
          // eslint-disable-next-line no-constant-condition
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            accumulated += decoder.decode(value, { stream: true });

            // Hide typing indicator after first chunk arrives
            if (firstChunk) {
              setIsTyping(false);
              firstChunk = false;
            }

            const snapshot = accumulated;
            setMessages((prev) => prev.map((m) =>
              m.id === botId ? { ...m, content: snapshot } : m
            ));
          }

          // If stream ended without any chunks, still clear typing
          if (firstChunk) setIsTyping(false);

        } else {
          // ── Non-streaming JSON response ──
          const data = await res.json();
          setMessages((prev) => [...prev, {
            id: `b-${Date.now()}`,
            role: "bot",
            content: data.message || data.error || "Something went wrong.",
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          }]);
          setIsTyping(false);
        }
      } catch (err) {
        console.error("Chat error:", err);
        setMessages((prev) => [...prev, {
          id: `b-${Date.now()}`,
          role: "bot",
          content: "Sorry, I couldn't connect to the server. Please try again.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }]);
        setIsTyping(false);
      }
    } else {
      setTimeout(() => {
        setMessages((prev) => [...prev, {
          id: `b-${Date.now()}`,
          role: "bot",
          content: "Great question! To give you personalized, psychology-aware career advice, I need to know your personality profile.\n\n**Sign in** (top right) and take the quiz first — then I can:\n- Analyze your MBTI type & Holland code\n- Recommend career paths tailored to YOUR personality\n- Create custom milestone plans\n- Frame advice in a way that resonates with how you think\n\nOnce you're signed in, I'll have access to 6 specialized psychology tools to help guide your career! 🚀",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }]);
        setIsTyping(false);
      }, 800);
    }
  }, [input, isTyping, isAuthenticated, activeSessionId]);

  const handleNewChat = () => {
    setMessages([]);
    setActiveSessionId(null);
  };

  const handleSelectSession = (session: ChatSession) => {
    setActiveSessionId(session.id);
  };

  return (
    <div style={{ height: "calc(100vh - 68px)", display: "flex" }}>
      {/* Sidebar */}
      <div className="hidden lg:flex" style={{ width: "280px", flexShrink: 0, flexDirection: "column", borderRight: "1px solid rgba(148,163,184,0.1)", background: "rgba(2,6,23,0.4)", padding: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #6366f1, #34d399)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Sparkles style={{ width: "20px", height: "20px", color: "#fff" }} />
          </div>
          <div>
            <h2 className="font-bold font-heading" style={{ fontSize: "0.95rem" }}>CareerBot</h2>
            <p style={{ fontSize: "0.65rem", color: "#34d399", fontWeight: 500 }}>Online</p>
          </div>
        </div>

        <button onClick={handleNewChat}
          style={{ width: "100%", display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", borderRadius: "10px", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", color: "#818cf8", fontSize: "0.85rem", fontWeight: 500, cursor: "pointer", marginBottom: "16px" }}>
          <Plus style={{ width: "14px", height: "14px" }} /> New Chat
        </button>

        {sessions.length > 0 && (
          <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "4px", marginBottom: "16px" }}>
            <p className="text-muted" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Recent Chats</p>
            {sessions.map((s) => (
              <button key={s.id} onClick={() => handleSelectSession(s)}
                style={{
                  width: "100%", display: "flex", alignItems: "center", gap: "8px", padding: "10px 12px", borderRadius: "8px",
                  background: activeSessionId === s.id ? "rgba(99,102,241,0.1)" : "transparent",
                  border: activeSessionId === s.id ? "1px solid rgba(99,102,241,0.2)" : "1px solid transparent",
                  color: "#cbd5e1", fontSize: "0.8rem", cursor: "pointer", textAlign: "left", transition: "all 0.15s",
                }}>
                <MessageSquare style={{ width: "13px", height: "13px", flexShrink: 0, color: "#64748b" }} />
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.title}</span>
              </button>
            ))}
          </div>
        )}

        {profile && profile.mbtiType ? (
          <div className="glass-card" style={{ padding: "20px", marginTop: "auto" }}>
            <h3 className="text-muted" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>Your Profile</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "MBTI", value: profile.mbtiType },
                { label: "Holland", value: profile.hollandCode },
                { label: "Goal", value: profile.goal },
                { label: "Year", value: profile.year },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
                  <span className="text-muted">{item.label}</span>
                  <span className="font-mono text-indigo-400" style={{ fontWeight: 600, fontSize: "0.78rem" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="glass-card" style={{ padding: "24px", textAlign: "center", marginTop: "auto" }}>
            <Brain className="text-muted" style={{ width: "32px", height: "32px", margin: "0 auto 12px" }} />
            <p className="text-muted" style={{ fontSize: "0.88rem", marginBottom: "16px" }}>Take the quiz to see your profile here</p>
            <a href="/onboarding" className="text-indigo-400" style={{ fontSize: "0.8rem", fontWeight: 500, textDecoration: "none" }}>Take Quiz →</a>
          </div>
        )}
      </div>

      {/* Chat area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Inline quiz nudge banner for authenticated users without profile */}
        {isAuthenticated && (!profile || !profile.mbtiType) && (
          <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px clamp(12px, 3vw, 32px)", background: "rgba(251,191,36,0.08)", borderBottom: "1px solid rgba(251,191,36,0.15)" }}>
            <AlertTriangle style={{ width: "18px", height: "18px", color: "#fbbf24", flexShrink: 0 }} />
            <p style={{ fontSize: "0.82rem", color: "#fde68a", flex: 1, lineHeight: 1.5 }}>
              Take the personality quiz for <strong>much more personalized</strong> career advice!
            </p>
            <Link href="/onboarding" style={{ padding: "6px 14px", borderRadius: "8px", background: "rgba(251,191,36,0.15)", border: "1px solid rgba(251,191,36,0.25)", color: "#fbbf24", fontSize: "0.78rem", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>
              Take Quiz →
            </Link>
          </div>
        )}

        <div style={{ flex: 1, overflowY: "auto", padding: "24px clamp(12px, 3vw, 32px)", display: "flex", flexDirection: "column", gap: "24px" }}>
          {messages.length === 0 && (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "24px", opacity: 0.8 }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "20px", background: "linear-gradient(135deg, #6366f1, #34d399)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Sparkles style={{ width: "32px", height: "32px", color: "#fff" }} />
              </div>
              <div style={{ textAlign: "center" }}>
                <h3 className="font-heading font-bold" style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Welcome to CareerBot</h3>
                <p className="text-muted" style={{ fontSize: "0.88rem" }}>Your AI career advisor powered by psychology</p>
              </div>
            </div>
          )}
          <AnimatePresence>
            {messages.map((msg) => <MessageBubble key={msg.id} message={msg} />)}
          </AnimatePresence>
          {isTyping && <TypingIndicator />}
        </div>

        {messages.length === 0 && (
          <div style={{ padding: "0 clamp(12px, 3vw, 32px) 12px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
              {suggestedPrompts.map((prompt) => (
                <button key={prompt} onClick={() => handleSend(prompt)}
                  style={{ padding: "8px 16px", borderRadius: "10px", background: "rgba(17,24,39,0.6)", border: "1px solid rgba(148,163,184,0.1)", fontSize: "0.78rem", color: "#cbd5e1", cursor: "pointer" }}>
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        <div style={{ padding: "14px clamp(12px, 3vw, 32px)", borderTop: "1px solid rgba(148,163,184,0.1)", background: "rgba(5,10,21,0.85)", backdropFilter: "blur(24px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", maxWidth: "720px", margin: "0 auto" }}>
            <input
              type="text" value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={isAuthenticated ? "Ask CareerBot anything..." : "Sign in to chat with CareerBot..."}
              style={{ flex: 1, padding: "14px 20px", borderRadius: "14px", background: "#111827", border: "1px solid rgba(148,163,184,0.12)", color: "#f1f5f9", fontSize: "0.9rem", outline: "none" }}
            />
            <button onClick={() => handleSend()} disabled={!input.trim() || isTyping}
              style={{ width: "48px", height: "48px", borderRadius: "14px", background: input.trim() && !isTyping ? "linear-gradient(135deg, #6366f1, #4f46e5)" : "#1e293b", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", border: "none", cursor: input.trim() && !isTyping ? "pointer" : "not-allowed", flexShrink: 0, opacity: input.trim() && !isTyping ? 1 : 0.4 }}>
              <Send style={{ width: "16px", height: "16px" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
