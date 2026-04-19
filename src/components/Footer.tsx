"use client";
import Link from "next/link";
import { useState } from "react";
import { Flame, Mail, Globe, ExternalLink, Heart, X } from "lucide-react";

export default function Footer() {
  const [showSeniorMessage, setShowSeniorMessage] = useState(false);

  return (
    <>
      <footer style={{ borderTop: "1px solid rgba(148,163,184,0.12)", background: "rgba(2,6,23,0.5)", backdropFilter: "blur(8px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "48px" }}>
            {/* Brand */}
            <div>
              <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: "linear-gradient(135deg, #6366f1, #34d399)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Flame style={{ width: "16px", height: "16px", color: "#fff" }} />
                </div>
                <span className="font-bold font-heading" style={{ fontSize: "1.1rem", color: "#f1f5f9" }}>
                  PsyPath<span className="gradient-text">AI</span>
                </span>
              </Link>
              <p className="text-muted" style={{ fontSize: "0.88rem", maxWidth: "340px", lineHeight: 1.7, marginBottom: "20px" }}>
                Your personalized career compass for navigating the world of engineering and technology. Built for students, by students.
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                {[Mail, ExternalLink, Globe].map((Icon, i) => (
                  <a key={i} href="#" style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#111827", border: "1px solid rgba(148,163,184,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#cbd5e1", textDecoration: "none" }}>
                    <Icon style={{ width: "16px", height: "16px" }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div>
              <h4 style={{ fontSize: "0.9rem", fontWeight: 600, color: "#f1f5f9", marginBottom: "16px" }}>Explore</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[{ href: "/roadmaps", label: "Roadmaps" }, { href: "/onboarding", label: "Career Quiz" }, { href: "/bot", label: "CareerBot" }].map((link) => (
                  <Link key={link.href} href={link.href} className="text-muted" style={{ fontSize: "0.88rem", textDecoration: "none" }}>{link.label}</Link>
                ))}
              </div>
            </div>

            {/* Domains */}
            <div>
              <h4 style={{ fontSize: "0.9rem", fontWeight: 600, color: "#f1f5f9", marginBottom: "16px" }}>Domains</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["Web Development", "AI & ML", "Cybersecurity", "Cloud & DevOps"].map((d) => (
                  <span key={d} className="text-muted" style={{ fontSize: "0.88rem", cursor: "pointer" }}>{d}</span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(148,163,184,0.1)", marginTop: "40px", paddingTop: "28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <p className="text-muted-dark" style={{ fontSize: "0.78rem" }}>© 2026 PsyPathAI. All rights reserved.</p>
            <p className="text-muted-dark" style={{ fontSize: "0.78rem", display: "flex", alignItems: "center", gap: "4px" }}>
              Made with 
              <button 
                onClick={() => setShowSeniorMessage(true)}
                style={{ background: "transparent", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", transition: "transform 0.2s" }}
                title="Message from Senior"
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <Heart style={{ width: "14px", height: "14px", color: "#ef4444", fill: "#ef4444" }} />
              </button> 
              for engineering students
            </p>
          </div>
        </div>
      </footer>

      {/* Message Modal */}
      {showSeniorMessage && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%", 
          background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)",
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999,
          padding: "20px"
        }} onClick={() => setShowSeniorMessage(false)}>
          <div style={{
            background: "#0f172a", border: "1px solid rgba(148,163,184,0.2)",
            borderRadius: "16px", padding: "40px", maxWidth: "550px", width: "100%",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 40px rgba(239,68,68,0.1)", 
            position: "relative"
          }} onClick={e => e.stopPropagation()}>
            {/* Top decorative gradient line */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #6366f1, #ef4444, #34d399)", borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }} />
            
            <button 
              onClick={() => setShowSeniorMessage(false)}
              style={{ position: "absolute", top: "20px", right: "20px", background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "50%", transition: "background 0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              <X size={20} />
            </button>
            <h3 style={{ fontSize: "1.4rem", color: "#f8fafc", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px", fontWeight: 700 }}>
              <Heart fill="#ef4444" color="#ef4444" size={24} />
              Message from Senior
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ color: "#cbd5e1", lineHeight: 1.7, fontSize: "1.05rem" }}>
                Hey Juniors! Welcome to your career journey in tech. The path ahead might seem challenging at times, but remember that every expert was once a beginner. Keep learning, stay curious, and never be afraid to ask for help or make mistakes — that's how you grow. 
              </p>
              <p style={{ color: "#cbd5e1", lineHeight: 1.7, fontSize: "1.05rem" }}>
                Wishing you all the absolute best for your career and future endeavors!
              </p>
              <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "0.95rem", fontStyle: "italic", marginTop: "8px", borderLeft: "3px solid rgba(239,68,68,0.5)", paddingLeft: "16px" }}>
                A huge thank you to everyone who supported the creation of this website. Your insights, guidance, and feedback were instrumental in bringing this platform to life for our engineering community.
              </p>
            </div>
            <div style={{ textAlign: "right", marginTop: "28px" }}>
              <span className="gradient-text font-bold" style={{ fontSize: "1.1rem" }}>unKnownNG</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
