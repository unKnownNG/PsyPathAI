"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/roadmaps", label: "Roadmaps" },
  { href: "/onboarding", label: "Quiz" },
  { href: "/bot", label: "CareerBot" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{ position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid rgba(148,163,184,0.12)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", background: "rgba(5,10,21,0.85)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #6366f1, #34d399)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Flame style={{ width: "20px", height: "20px", color: "#fff" }} />
            </div>
            <span className="font-bold font-heading" style={{ fontSize: "1.25rem", color: "#f1f5f9" }}>
              Career<span className="gradient-text">Forge</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "4px" }}>
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link key={link.href} href={link.href}
                  style={{
                    padding: "8px 18px", borderRadius: "10px", fontSize: "0.9rem", fontWeight: 500, textDecoration: "none", transition: "all 0.2s",
                    ...(isActive
                      ? { color: "#818cf8", background: "rgba(99,102,241,0.1)" }
                      : { color: "#cbd5e1" })
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/onboarding"
              style={{ padding: "10px 22px", borderRadius: "10px", background: "linear-gradient(135deg, #6366f1, #4f46e5)", color: "#fff", fontSize: "0.88rem", fontWeight: 600, textDecoration: "none" }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden" style={{ padding: "8px", color: "#cbd5e1", background: "none", border: "none", cursor: "pointer" }}>
            {mobileOpen ? <X style={{ width: "20px", height: "20px" }} /> : <Menu style={{ width: "20px", height: "20px" }} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
            style={{ borderTop: "1px solid rgba(148,163,184,0.1)", background: "rgba(5,10,21,0.95)", backdropFilter: "blur(24px)", overflow: "hidden" }}
          >
            <div style={{ padding: "16px 32px", display: "flex", flexDirection: "column", gap: "4px" }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                  style={{ display: "block", padding: "12px 16px", borderRadius: "10px", fontSize: "0.9rem", fontWeight: 500, color: pathname === link.href ? "#818cf8" : "#cbd5e1", textDecoration: "none", background: pathname === link.href ? "rgba(99,102,241,0.1)" : "transparent" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/onboarding" onClick={() => setMobileOpen(false)}
                style={{ display: "block", padding: "12px 16px", borderRadius: "10px", background: "linear-gradient(135deg, #6366f1, #4f46e5)", color: "#fff", fontSize: "0.88rem", fontWeight: 600, textAlign: "center", marginTop: "8px", textDecoration: "none" }}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
