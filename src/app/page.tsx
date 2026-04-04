"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Sparkles, MessageCircle, Brain, Map, Zap,
  ChevronRight, CheckCircle2,
} from "lucide-react";
import { domains } from "@/data/roadmaps";
import DynamicIcon from "@/components/DynamicIcon";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

/* ── Animated Node-Graph Hero Background ── */
function NodeGraph() {
  const nodes = [
    { x: 150, y: 120 }, { x: 380, y: 60 }, { x: 600, y: 180 },
    { x: 820, y: 90 }, { x: 1020, y: 160 }, { x: 250, y: 320 },
    { x: 500, y: 380 }, { x: 740, y: 300 }, { x: 960, y: 360 },
    { x: 120, y: 440 }, { x: 420, y: 480 }, { x: 680, y: 460 },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 1200 560" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="ng" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </radialGradient>
        </defs>
        {nodes.map((n, i) => (
          <g key={i}>
            {i > 0 && (
              <motion.line
                x1={nodes[i - 1].x} y1={nodes[i - 1].y}
                x2={n.x} y2={n.y}
                stroke="#818cf8" strokeWidth="0.5" strokeOpacity="0.25"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ delay: i * 0.18, duration: 1 }}
              />
            )}
            <motion.circle
              cx={n.x} cy={n.y} r="3.5" fill="#818cf8"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.4, 1], opacity: [0, 0.7, 0.45] }}
              transition={{ delay: i * 0.14, duration: 0.7 }}
            />
            <circle cx={n.x} cy={n.y} r="14" fill="url(#ng)" />
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ── Page ─────────────────────────────────── */
export default function HomePage() {
  const steps = [
    { icon: Brain, title: "Take the Quiz", desc: "Discover your MBTI type & Holland Code through a quick personality assessment." },
    { icon: Map, title: "Get Matched", desc: "Receive personalized career path recommendations tailored to your profile." },
    { icon: Zap, title: "Follow Your Path", desc: "Progress through curated roadmaps packed with resources and milestones." },
  ];

  const chatPreview = [
    { role: "user", text: "What career path suits an INTJ who loves problem-solving?" },
    { role: "bot", text: "Based on your INTJ profile, I'd recommend System Design or ML Engineering — your strategic thinking shines there! 🚀" },
  ];

  return (
    <div className="relative">
      {/* ─── HERO ─────────────────────────── */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "92vh" }}>
        <NodeGraph />
        <div className="relative z-10 w-full text-center" style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 24px" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400" style={{ padding: "8px 20px", borderRadius: "999px", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", marginBottom: "32px", display: "inline-flex" }}>
              <Sparkles className="w-4 h-4" />
              AI-Powered Career Guidance for Engineers
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-bold font-heading"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1, marginTop: "32px", marginBottom: "28px" }}
          >
            Forge Your{" "}
            <span className="gradient-text">Engineering</span>
            <br className="hidden sm:block" />
            {" "}Career Path
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted"
            style={{ fontSize: "1.15rem", maxWidth: "600px", margin: "0 auto 48px", lineHeight: 1.7 }}
          >
            Personalized roadmaps powered by your personality, goals, and learning style.
            Navigate from college to career with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/roadmaps"
              style={{ padding: "16px 32px", borderRadius: "16px", background: "linear-gradient(135deg, #6366f1, #4f46e5)", color: "#fff", fontWeight: 600, fontSize: "1.1rem", display: "inline-flex", alignItems: "center", gap: "8px", transition: "all 0.3s" }}
            >
              Explore Roadmaps <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/bot"
              style={{ padding: "16px 32px", borderRadius: "16px", border: "1px solid rgba(148,163,184,0.2)", background: "rgba(17,24,39,0.6)", color: "#f1f5f9", fontWeight: 600, fontSize: "1.1rem", display: "inline-flex", alignItems: "center", gap: "8px", transition: "all 0.3s" }}
            >
              <MessageCircle className="w-5 h-5" /> Talk to CareerBot
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0" style={{ height: "160px", background: "linear-gradient(to top, #050a15, transparent)" }} />
      </section>

      {/* ─── HOW IT WORKS ─────────────────── */}
      <section style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "64px" }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-bold font-heading" style={{ fontSize: "2rem", marginBottom: "16px" }}>
              How It <span className="gradient-text">Works</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted" style={{ fontSize: "1.05rem", maxWidth: "480px", margin: "0 auto" }}>
              Three simple steps to your personalized career roadmap
            </motion.p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
            {steps.map((step, i) => (
              <motion.div
                key={i} initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp} custom={i + 2}
                className="glass-card"
                style={{ padding: "40px 32px", textAlign: "center", position: "relative" }}
              >
                <span className="font-heading" style={{ position: "absolute", top: "20px", right: "24px", fontSize: "3.5rem", fontWeight: 700, color: "rgba(99,102,241,0.07)" }}>
                  {i + 1}
                </span>
                <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(99,102,241,0.05))", border: "1px solid rgba(99,102,241,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <step.icon className="text-indigo-400" style={{ width: "28px", height: "28px" }} />
                </div>
                <h3 className="font-bold font-heading" style={{ fontSize: "1.15rem", marginBottom: "12px" }}>{step.title}</h3>
                <p className="text-muted" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── divider ── */}
      <div className="section-divider" style={{ maxWidth: "900px", margin: "0 auto" }} />

      {/* ─── FEATURED DOMAINS ─────────────── */}
      <section style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "64px" }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-bold font-heading" style={{ fontSize: "2rem", marginBottom: "16px" }}>
              Explore <span className="gradient-text">Domains</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted" style={{ fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto" }}>
              Choose from 9 engineering domains, each with specialized learning paths
            </motion.p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {domains.slice(0, 6).map((domain, i) => (
              <motion.div key={domain.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Link href={`/roadmaps/${domain.slug}`} className="glass-card" style={{ padding: "28px", display: "block", height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, backgroundColor: `${domain.color}12`, boxShadow: `0 0 0 1px ${domain.color}25` }}>
                      <DynamicIcon name={domain.icon} style={{ width: "24px", height: "24px", color: domain.color }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 className="font-bold font-heading" style={{ marginBottom: "6px", fontSize: "1rem" }}>{domain.name}</h3>
                      <p className="text-muted" style={{ fontSize: "0.85rem", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{domain.description}</p>
                      <span className="text-indigo-400" style={{ fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "4px", marginTop: "12px", opacity: 0.7 }}>
                        Explore paths <ChevronRight style={{ width: "12px", height: "12px" }} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={7} style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/roadmaps" className="text-indigo-400" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: 500 }}>
              View all domains <ArrowRight style={{ width: "16px", height: "16px" }} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── divider ── */}
      <div className="section-divider" style={{ maxWidth: "900px", margin: "0 auto" }} />

      {/* ─── CAREERBOT TEASER ─────────────── */}
      <section style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="glass-card md-two-col" style={{ padding: "clamp(28px, 5vw, 56px) clamp(20px, 4vw, 48px)", display: "grid", gap: "32px", alignItems: "center" }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.span variants={fadeUp} custom={0}
                className="text-emerald-400"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "999px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", fontSize: "0.75rem", fontWeight: 500, marginBottom: "20px" }}
              >
                <MessageCircle style={{ width: "14px", height: "14px" }} /> AI Career Assistant
              </motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="font-bold font-heading" style={{ fontSize: "2rem", marginBottom: "20px", marginTop: "20px" }}>
                Meet <span className="gradient-text">CareerBot</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted" style={{ lineHeight: 1.7, marginBottom: "32px", fontSize: "0.95rem" }}>
                Your personal AI career advisor that understands your personality, goals, and learning style.
                Get customised milestone plans, resource recommendations, and career advice.
              </motion.p>
              <motion.div variants={fadeUp} custom={3}>
                <Link href="/bot" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "14px", background: "linear-gradient(135deg, #10b981, #059669)", color: "#fff", fontWeight: 600, fontSize: "0.95rem" }}>
                  Start Chatting <ArrowRight style={{ width: "16px", height: "16px" }} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.25, duration: 0.6 }}
              style={{ background: "rgba(2,6,23,0.8)", borderRadius: "16px", border: "1px solid rgba(148,163,184,0.12)", padding: "24px" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {chatPreview.map((msg, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                    <div style={{
                      maxWidth: "88%", padding: "14px 18px", borderRadius: "16px", fontSize: "0.85rem", lineHeight: 1.6,
                      ...(msg.role === "user"
                        ? { background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.25)", borderBottomRightRadius: "6px" }
                        : { background: "rgba(17,24,39,0.9)", border: "1px solid rgba(148,163,184,0.1)", borderBottomLeftRadius: "6px" })
                    }}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "6px", padding: "8px 4px 0" }}>
                {[0, 1, 2].map((i) => (
                  <motion.div key={i}
                    style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#818cf8" }}
                    animate={{ scale: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── divider ── */}
      <div className="section-divider" style={{ maxWidth: "900px", margin: "0 auto" }} />

      {/* ─── QUIZ TEASER ──────────────────── */}
      <section style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-bold font-heading" style={{ fontSize: "2rem", marginBottom: "20px" }}>
              Discover Your <span className="gradient-text">Engineer Type</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted" style={{ fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.7 }}>
              Take our personality quiz to find which engineering paths match your natural strengths.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginBottom: "48px" }}>
              {["MBTI Personality Type", "Holland Career Code", "Learning Style", "Top 3 Path Matches"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", borderRadius: "999px", background: "rgba(17,24,39,0.8)", border: "1px solid rgba(148,163,184,0.12)", fontSize: "0.85rem" }} className="text-muted">
                  <CheckCircle2 className="text-emerald-400" style={{ width: "16px", height: "16px" }} /> {item}
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} custom={3}>
              <Link href="/onboarding" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "16px 36px", borderRadius: "16px", background: "linear-gradient(135deg, #6366f1, #4f46e5)", color: "#fff", fontWeight: 600, fontSize: "1.1rem" }}>
                Take the Quiz <ArrowRight style={{ width: "20px", height: "20px" }} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
