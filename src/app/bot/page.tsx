"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Brain, Target, BookOpen, Sparkles, ExternalLink, User, Bot } from "lucide-react";
import { mockChatMessages, suggestedPrompts } from "@/data/chat";
import { ChatMessage, UserProfile, Resource } from "@/data/types";

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
      <div style={{ maxWidth: "75%", ...(isUser ? { textAlign: "right" as const } : {}) }}>
        <div style={{
          padding: "14px 20px", borderRadius: "16px", fontSize: "0.9rem", lineHeight: 1.7,
          ...(isUser
            ? { background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.25)", borderBottomRightRadius: "6px" }
            : { background: "#111827", border: "1px solid rgba(148,163,184,0.1)", borderBottomLeftRadius: "6px" })
        }}>
          <p style={{ whiteSpace: "pre-wrap" }}>{message.content}</p>
        </div>

        {message.milestones && message.milestones.length > 0 && (
          <div style={{ marginTop: "10px", padding: "16px", borderRadius: "12px", background: "rgba(17,24,39,0.5)", border: "1px solid rgba(148,163,184,0.1)", textAlign: "left" }}>
            <p style={{ fontSize: "0.75rem", color: "#818cf8", fontWeight: 600, marginBottom: "10px", display: "flex", alignItems: "center", gap: "4px" }}>
              <Target style={{ width: "12px", height: "12px" }} /> Milestone Plan
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {message.milestones.map((m, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.78rem", color: "#94a3b8" }}>
                  <span style={{ width: "20px", height: "20px", borderRadius: "6px", background: "rgba(99,102,241,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.65rem", color: "#818cf8", fontWeight: 700, marginTop: "2px" }}>{i + 1}</span>
                  {m}
                </div>
              ))}
            </div>
          </div>
        )}

        {message.resources && message.resources.length > 0 && (
          <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {message.resources.map((r: Resource, i: number) => (
              <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "8px", background: "#111827", border: "1px solid rgba(148,163,184,0.1)", fontSize: "0.75rem", color: "#cbd5e1", textDecoration: "none" }}>
                <BookOpen style={{ width: "12px", height: "12px" }} /> {r.title} <ExternalLink style={{ width: "10px", height: "10px" }} />
              </a>
            ))}
          </div>
        )}

        <p style={{ fontSize: "0.65rem", color: "#64748b", marginTop: "6px", padding: "0 4px" }}>{message.timestamp}</p>
      </div>
    </motion.div>
  );
}

export default function BotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(mockChatMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("careerforge-profile");
    if (stored) setProfile(JSON.parse(stored));
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;
    const userMsg: ChatMessage = { id: `u-${Date.now()}`, role: "user", content: msg, timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`, role: "bot",
        content: `That's a great question! Based on ${profile ? `your ${profile.mbtiType} personality type and interest in ${profile.goal}` : "your interests"}, I'd recommend focusing on building practical projects alongside your learning path.\n\nWould you like me to suggest specific projects or dive deeper into any particular area?`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div style={{ height: "calc(100vh - 68px)", display: "flex" }}>
      {/* Sidebar */}
      <div className="hidden lg:flex" style={{ width: "280px", flexShrink: 0, flexDirection: "column", borderRight: "1px solid rgba(148,163,184,0.1)", background: "rgba(2,6,23,0.4)", padding: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, #6366f1, #34d399)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Sparkles style={{ width: "20px", height: "20px", color: "#fff" }} />
          </div>
          <div>
            <h2 className="font-bold font-heading" style={{ fontSize: "0.95rem" }}>CareerBot</h2>
            <p style={{ fontSize: "0.65rem", color: "#34d399", fontWeight: 500 }}>Online</p>
          </div>
        </div>

        {profile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="glass-card" style={{ padding: "20px" }}>
              <h3 className="text-muted" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>Your Profile</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[{ label: "MBTI", value: profile.mbtiType }, { label: "Holland", value: profile.hollandCode }, { label: "Goal", value: profile.goal }, { label: "Year", value: profile.year }].map((item) => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
                    <span className="text-muted">{item.label}</span>
                    <span className="font-mono text-indigo-400" style={{ fontWeight: 600, fontSize: "0.78rem" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card" style={{ padding: "20px" }}>
              <h3 className="text-muted" style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>Top Suggestions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {profile.recommendedPaths.map((p) => (
                  <div key={p} className="text-muted" style={{ padding: "10px 12px", borderRadius: "10px", background: "rgba(17,24,39,0.6)", fontSize: "0.8rem", textTransform: "capitalize" }}>{p.replace(/-/g, " ")}</div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="glass-card" style={{ padding: "24px", textAlign: "center" }}>
            <Brain className="text-muted" style={{ width: "32px", height: "32px", margin: "0 auto 12px" }} />
            <p className="text-muted" style={{ fontSize: "0.88rem", marginBottom: "16px" }}>Take the quiz to see your profile here</p>
            <a href="/onboarding" className="text-indigo-400" style={{ fontSize: "0.8rem", fontWeight: 500, textDecoration: "none" }}>Take Quiz →</a>
          </div>
        )}
      </div>

      {/* Chat */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <AnimatePresence>
            {messages.map((msg) => <MessageBubble key={msg.id} message={msg} />)}
          </AnimatePresence>
          {isTyping && <TypingIndicator />}
          <div ref={chatEndRef} />
        </div>

        {messages.length <= mockChatMessages.length && (
          <div style={{ padding: "0 32px 12px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {suggestedPrompts.slice(0, 4).map((prompt) => (
                <button key={prompt} onClick={() => handleSend(prompt)}
                  style={{ padding: "8px 16px", borderRadius: "10px", background: "rgba(17,24,39,0.6)", border: "1px solid rgba(148,163,184,0.1)", fontSize: "0.78rem", color: "#cbd5e1", cursor: "pointer" }}>
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        <div style={{ padding: "20px 32px", borderTop: "1px solid rgba(148,163,184,0.1)", background: "rgba(5,10,21,0.85)", backdropFilter: "blur(24px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", maxWidth: "720px", margin: "0 auto" }}>
            <input
              type="text" value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask CareerBot anything..."
              style={{ flex: 1, padding: "14px 20px", borderRadius: "14px", background: "#111827", border: "1px solid rgba(148,163,184,0.12)", color: "#f1f5f9", fontSize: "0.9rem", outline: "none" }}
            />
            <button onClick={() => handleSend()} disabled={!input.trim()}
              style={{ width: "48px", height: "48px", borderRadius: "14px", background: input.trim() ? "linear-gradient(135deg, #6366f1, #4f46e5)" : "#1e293b", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", border: "none", cursor: input.trim() ? "pointer" : "not-allowed", flexShrink: 0, opacity: input.trim() ? 1 : 0.4 }}>
              <Send style={{ width: "16px", height: "16px" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
