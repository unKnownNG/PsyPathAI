"use client";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, MessageCircle, Construction } from "lucide-react";
import { getDomainBySlug, getSubPathBySlug } from "@/data/roadmaps";
import DynamicIcon from "@/components/DynamicIcon";

export default function SubPathPage({ params }: { params: Promise<{ domain: string; subpath: string }> }) {
  const { domain: domainSlug, subpath: subpathSlug } = use(params);
  const domain = getDomainBySlug(domainSlug);
  const subpath = getSubPathBySlug(domainSlug, subpathSlug);
  if (!domain || !subpath) return notFound();

  const relatedPaths = domain.subPaths.filter((sp) => sp.id !== subpath.id).slice(0, 3);

  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "64px 32px" }}>
      {/* Breadcrumb */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginBottom: "40px" }}>
        <div className="text-muted" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem" }}>
          <Link href="/roadmaps" className="text-muted" style={{ textDecoration: "none" }}>Roadmaps</Link>
          <ChevronRight style={{ width: "12px", height: "12px" }} />
          <Link href={`/roadmaps/${domainSlug}`} className="text-muted" style={{ textDecoration: "none" }}>{domain.name}</Link>
          <ChevronRight style={{ width: "12px", height: "12px" }} />
          <span style={{ color: "#f1f5f9" }}>{subpath.name}</span>
        </div>
      </motion.div>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: "48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "18px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: `${domain.color}12`, boxShadow: `0 0 0 1px ${domain.color}25` }}>
            <DynamicIcon name={subpath.icon} style={{ width: "32px", height: "32px", color: domain.color }} />
          </div>
          <div>
            <h1 className="font-bold font-heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>{subpath.name}</h1>
            <p className="text-muted" style={{ fontSize: "0.9rem", marginTop: "6px" }}>{subpath.difficulty} · {subpath.estimatedTime}</p>
          </div>
        </div>
        <p className="text-muted" style={{ fontSize: "1.05rem", maxWidth: "600px", lineHeight: 1.7 }}>{subpath.description}</p>
      </motion.div>

      {/* Placeholder */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        className="glass-card" style={{ padding: "64px 48px", textAlign: "center", marginBottom: "48px" }}>
        <div style={{ width: "80px", height: "80px", borderRadius: "24px", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
          <Construction className="text-indigo-400" style={{ width: "40px", height: "40px" }} />
        </div>
        <h2 className="font-bold font-heading" style={{ fontSize: "1.75rem", marginBottom: "16px" }}>
          Roadmap <span className="gradient-text">Coming Soon</span>
        </h2>
        <p className="text-muted" style={{ maxWidth: "440px", margin: "0 auto 32px", lineHeight: 1.7, fontSize: "1rem" }}>
          We&apos;re building a detailed, step-by-step roadmap for {subpath.name}. Check back soon for curated phases, topics, and resources.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
          {subpath.tags.map((tag) => (
            <span key={tag} className="text-muted" style={{ padding: "6px 14px", borderRadius: "8px", background: "rgba(17,24,39,0.8)", fontSize: "0.8rem", border: "1px solid rgba(148,163,184,0.1)" }}>{tag}</span>
          ))}
        </div>
      </motion.div>

      {/* Bottom Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
        {relatedPaths.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="glass-card" style={{ padding: "28px" }}>
            <h3 className="font-bold font-heading" style={{ fontSize: "0.95rem", marginBottom: "20px" }}>Related Paths</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {relatedPaths.map((rp) => (
                <Link key={rp.id} href={`/roadmaps/${domainSlug}/${rp.slug}`}
                  style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px", borderRadius: "12px", textDecoration: "none", transition: "background 0.2s" }}>
                  <DynamicIcon name={rp.icon} className="text-muted" style={{ width: "16px", height: "16px" }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "0.9rem", fontWeight: 500, color: "#f1f5f9" }}>{rp.name}</p>
                    <p className="text-muted" style={{ fontSize: "0.75rem", marginTop: "2px" }}>{rp.estimatedTime}</p>
                  </div>
                  <ChevronRight className="text-muted" style={{ width: "14px", height: "14px" }} />
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Link href="/bot" className="glass-card glow-hover" style={{ padding: "28px", display: "flex", alignItems: "center", gap: "16px", height: "100%", textDecoration: "none" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, #6366f1, #34d399)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <MessageCircle style={{ width: "24px", height: "24px", color: "#fff" }} />
            </div>
            <div>
              <p className="font-bold font-heading" style={{ fontSize: "1rem" }}>Ask CareerBot</p>
              <p className="text-muted" style={{ fontSize: "0.85rem", marginTop: "4px" }}>Get personalized advice for this path</p>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Back */}
      <div style={{ marginTop: "48px" }}>
        <Link href={`/roadmaps/${domainSlug}`} className="text-muted" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", textDecoration: "none" }}>
          <ArrowLeft style={{ width: "16px", height: "16px" }} /> Back to {domain.name}
        </Link>
      </div>
    </div>
  );
}
