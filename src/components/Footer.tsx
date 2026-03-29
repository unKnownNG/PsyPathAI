"use client";
import Link from "next/link";
import { Flame, Mail, Globe, ExternalLink, Heart } from "lucide-react";

export default function Footer() {
  return (
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
                Career<span className="gradient-text">Forge</span>
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
          <p className="text-muted-dark" style={{ fontSize: "0.78rem" }}>© 2025 CareerForge. All rights reserved.</p>
          <p className="text-muted-dark" style={{ fontSize: "0.78rem", display: "flex", alignItems: "center", gap: "4px" }}>
            Made with <Heart style={{ width: "12px", height: "12px", color: "#ef4444", fill: "#ef4444" }} /> for engineering students
          </p>
        </div>
      </div>
    </footer>
  );
}
