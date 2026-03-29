"use client";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Signal, ChevronRight, Users } from "lucide-react";
import { getDomainBySlug } from "@/data/roadmaps";
import DynamicIcon from "@/components/DynamicIcon";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};

export default function DomainPage({ params }: { params: Promise<{ domain: string }> }) {
  const { domain: domainSlug } = use(params);
  const domain = getDomainBySlug(domainSlug);
  if (!domain) return notFound();

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "64px 32px" }}>
      {/* Breadcrumb */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginBottom: "40px" }}>
        <Link href="/roadmaps" className="text-muted" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.9rem" }}>
          <ArrowLeft style={{ width: "16px", height: "16px" }} /> Back to Roadmaps
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: "56px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "18px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: `${domain.color}12`, boxShadow: `0 0 0 1px ${domain.color}25` }}>
            <DynamicIcon name={domain.icon} style={{ width: "32px", height: "32px", color: domain.color }} />
          </div>
          <div>
            <h1 className="font-bold font-heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>{domain.name}</h1>
            <p className="text-muted" style={{ fontSize: "0.9rem", marginTop: "6px" }}>{domain.subPaths.length} learning paths available</p>
          </div>
        </div>
        <p className="text-muted" style={{ fontSize: "1.05rem", maxWidth: "600px", lineHeight: 1.7 }}>{domain.description}</p>
      </motion.div>

      {/* Who is this for */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="glass-card" style={{ padding: "32px", marginBottom: "48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <Users className="text-indigo-400" style={{ width: "20px", height: "20px" }} />
          <h2 className="font-bold font-heading" style={{ fontSize: "1rem" }}>Who is this for?</h2>
        </div>
        <p className="text-muted" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
          This domain is ideal for engineering students who are passionate about {domain.name.toLowerCase()} and want to build a career in this field.
          Whether you&apos;re a beginner exploring your options or an intermediate learner looking to specialize, there&apos;s a path for you.
        </p>
      </motion.div>

      {/* Sub-Path Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
        {domain.subPaths.map((sp, i) => (
          <motion.div key={sp.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
            <Link href={`/roadmaps/${domainSlug}/${sp.slug}`} className="glass-card" style={{ padding: "28px", display: "flex", flexDirection: "column", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, backgroundColor: `${domain.color}12`, boxShadow: `0 0 0 1px ${domain.color}25` }}>
                  <DynamicIcon name={sp.icon} style={{ width: "22px", height: "22px", color: domain.color }} />
                </div>
                <h3 className="font-bold font-heading" style={{ fontSize: "1rem" }}>{sp.name}</h3>
              </div>

              <p className="text-muted" style={{ fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "20px", flex: 1 }}>{sp.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                {sp.tags.map((tag) => (
                  <span key={tag} className="text-muted" style={{ padding: "4px 10px", borderRadius: "8px", background: "rgba(17,24,39,0.8)", fontSize: "0.75rem", border: "1px solid rgba(148,163,184,0.1)" }}>{tag}</span>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "16px", borderTop: "1px solid rgba(148,163,184,0.1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "0.75rem" }} className="text-muted">
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Signal style={{ width: "12px", height: "12px" }} />
                    <span style={{ color: sp.difficulty === "Beginner" ? "#34d399" : sp.difficulty === "Intermediate" ? "#fbbf24" : "#f87171" }}>{sp.difficulty}</span>
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><Clock style={{ width: "12px", height: "12px" }} /> {sp.estimatedTime}</span>
                </div>
                <ChevronRight className="text-muted" style={{ width: "16px", height: "16px" }} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
