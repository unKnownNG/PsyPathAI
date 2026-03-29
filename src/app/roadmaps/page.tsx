"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Clock, Signal, Bell, ChevronRight } from "lucide-react";
import { domains } from "@/data/roadmaps";
import DynamicIcon from "@/components/DynamicIcon";

const categories = ["All", "Software", "AI / Data", "DevOps", "Security", "Core CS", "Emerging", "Career"];
const categoryMap: Record<string, string[]> = {
  Software: ["web-dev", "app-dev"],
  "AI / Data": ["ai-ml", "data"],
  DevOps: ["cloud-devops"],
  Security: ["cybersecurity"],
  "Core CS": ["core-cs"],
  Emerging: ["emerging"],
  Career: ["career"],
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.45 } }),
};

export default function RoadmapsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDomains = useMemo(() => {
    let result = domains;
    if (activeCategory !== "All") {
      const ids = categoryMap[activeCategory] || [];
      result = result.filter((d) => ids.includes(d.id));
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.subPaths.some((sp) => sp.name.toLowerCase().includes(q) || sp.tags.some((t) => t.toLowerCase().includes(q)))
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "64px 32px" }}>
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: "center", marginBottom: "56px" }}>
        <h1 className="font-bold font-heading" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "16px" }}>
          Career <span className="gradient-text">Roadmaps</span>
        </h1>
        <p className="text-muted" style={{ fontSize: "1.05rem", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
          Browse all engineering domains and find the perfect learning path for your career goals.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ marginBottom: "48px" }}>
        {/* Search */}
        <div style={{ maxWidth: "460px", margin: "0 auto 24px", position: "relative" }}>
          <Search className="text-muted" style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", width: "16px", height: "16px" }} />
          <input
            type="text"
            placeholder="Search domains, paths, or technologies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: "100%", paddingLeft: "44px", paddingRight: "16px", paddingTop: "14px", paddingBottom: "14px", borderRadius: "14px", background: "#111827", border: "1px solid rgba(148,163,184,0.15)", color: "#f1f5f9", fontSize: "0.9rem", outline: "none" }}
          />
        </div>

        {/* Category Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 18px", borderRadius: "12px", fontSize: "0.85rem", fontWeight: 500, cursor: "pointer", transition: "all 0.2s",
                ...(activeCategory === cat
                  ? { background: "rgba(99,102,241,0.15)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.25)" }
                  : { background: "transparent", color: "#cbd5e1", border: "1px solid transparent" })
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Domain Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
        {filteredDomains.map((domain, i) => (
          <motion.div key={domain.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
            <Link href={`/roadmaps/${domain.slug}`} className="glass-card" style={{ padding: "28px", display: "block", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, backgroundColor: `${domain.color}12`, boxShadow: `0 0 0 1px ${domain.color}25` }}>
                  <DynamicIcon name={domain.icon} style={{ width: "22px", height: "22px", color: domain.color }} />
                </div>
                <div>
                  <h3 className="font-bold font-heading" style={{ fontSize: "1rem" }}>{domain.name}</h3>
                  <p className="text-muted-dark" style={{ fontSize: "0.75rem", marginTop: "2px" }}>{domain.subPaths.length} paths</p>
                </div>
              </div>

              <p className="text-muted" style={{ fontSize: "0.88rem", marginBottom: "20px", lineHeight: 1.65, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{domain.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                {domain.subPaths.slice(0, 3).map((sp) => (
                  <span key={sp.id} style={{ padding: "4px 10px", borderRadius: "8px", background: "rgba(17,24,39,0.8)", fontSize: "0.75rem", border: "1px solid rgba(148,163,184,0.1)" }} className="text-muted">{sp.name}</span>
                ))}
                {domain.subPaths.length > 3 && (
                  <span style={{ padding: "4px 10px", borderRadius: "8px", background: "rgba(17,24,39,0.8)", fontSize: "0.75rem", border: "1px solid rgba(148,163,184,0.1)" }} className="text-muted-dark">+{domain.subPaths.length - 3} more</span>
                )}
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "16px", borderTop: "1px solid rgba(148,163,184,0.1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "0.75rem" }} className="text-muted">
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><Signal style={{ width: "12px", height: "12px" }} /> Mixed</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><Clock style={{ width: "12px", height: "12px" }} /> Varies</span>
                </div>
                <ChevronRight className="text-muted" style={{ width: "16px", height: "16px" }} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon */}
      <div style={{ marginTop: "72px" }}>
        <h2 className="font-bold font-heading text-muted" style={{ textAlign: "center", fontSize: "1.25rem", marginBottom: "32px" }}>Coming Soon</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
          {["Quantum Computing", "Edge Computing", "Digital Marketing Tech"].map((name) => (
            <div key={name} className="glass-card" style={{ padding: "28px", opacity: 0.5 }}>
              <h3 className="font-bold font-heading text-muted" style={{ marginBottom: "8px" }}>{name}</h3>
              <p className="text-muted-dark" style={{ fontSize: "0.8rem", marginBottom: "20px", lineHeight: 1.6 }}>This roadmap is currently being developed.</p>
              <button style={{ padding: "10px 18px", borderRadius: "12px", background: "#111827", border: "1px solid rgba(148,163,184,0.12)", fontSize: "0.78rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", color: "#cbd5e1" }}>
                <Bell style={{ width: "12px", height: "12px" }} /> Notify Me
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
