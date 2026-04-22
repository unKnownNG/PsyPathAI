"use client";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft, ChevronRight, MessageCircle, Construction,
  BookOpen, Play, FileText, GraduationCap, Wrench, ExternalLink,
} from "lucide-react";
import { getDomainBySlug, getSubPathBySlug } from "@/data/roadmaps";
import DynamicIcon from "@/components/DynamicIcon";
import RoadmapFlow from "@/components/RoadmapFlow";

const RES_ICONS: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  docs: BookOpen,
  video: Play,
  article: FileText,
  course: GraduationCap,
  tool: Wrench,
};

const RES_COLORS: Record<string, string> = {
  docs: "#60a5fa",
  video: "#f87171",
  article: "#34d399",
  course: "#a78bfa",
  tool: "#fbbf24",
};

const hasRoadmapData = (phases: { topics: unknown[] }[]) =>
  phases.length > 0 && phases.some((p) => p.topics.length > 0);

export default function SubPathPage({ params }: { params: Promise<{ domain: string; subpath: string }> }) {
  const { domain: domainSlug, subpath: subpathSlug } = use(params);
  const domain = getDomainBySlug(domainSlug);
  const subpath = getSubPathBySlug(domainSlug, subpathSlug);
  if (!domain || !subpath) return notFound();

  const relatedPaths = domain.subPaths.filter((sp) => sp.id !== subpath.id).slice(0, 3);

  return (
    <div style={{ maxWidth: hasRoadmapData(subpath.phases) ? "1100px" : "960px", margin: "0 auto", padding: "64px 32px" }}>
      {/* Breadcrumb */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginBottom: "40px" }}>
        <div className="text-muted" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", flexWrap: "wrap" }}>
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

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}>
          {subpath.tags.map((tag) => (
            <span key={tag} className="text-muted" style={{ padding: "5px 12px", borderRadius: "8px", background: "rgba(17,24,39,0.8)", fontSize: "0.75rem", border: "1px solid rgba(148,163,184,0.1)" }}>{tag}</span>
          ))}
        </div>
      </motion.div>

      {/* Path-level Resources */}
      {subpath.resources && subpath.resources.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card"
          style={{ padding: "28px", marginBottom: "48px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "10px",
              background: `linear-gradient(135deg, ${domain.color}20, ${domain.color}08)`,
              border: `1px solid ${domain.color}25`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <BookOpen style={{ width: "18px", height: "18px", color: domain.color }} />
            </div>
            <div>
              <h2 className="font-bold font-heading" style={{ fontSize: "1rem" }}>Recommended Resources</h2>
              <p className="text-muted" style={{ fontSize: "0.75rem", marginTop: "2px" }}>Full courses, docs & channels for this path</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "10px" }}>
            {subpath.resources.map((res, ri) => {
              const ResIcon = RES_ICONS[res.type] || FileText;
              const resColor = RES_COLORS[res.type] || "#94a3b8";
              return (
                <a
                  key={ri}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    padding: "14px 16px", borderRadius: "12px",
                    background: "rgba(17,24,39,0.6)",
                    border: "1px solid rgba(148,163,184,0.08)",
                    textDecoration: "none", transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(17,24,39,0.9)";
                    (e.currentTarget as HTMLElement).style.borderColor = `${resColor}30`;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(17,24,39,0.6)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(148,163,184,0.08)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "8px",
                    background: `${resColor}12`, border: `1px solid ${resColor}20`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <ResIcon style={{ width: "15px", height: "15px", color: resColor }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "0.85rem", color: "#e2e8f0", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{res.title}</p>
                    <span style={{ fontSize: "0.68rem", color: resColor, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{res.type}</span>
                  </div>
                  <ExternalLink style={{ width: "13px", height: "13px", color: "#475569", flexShrink: 0 }} />
                </a>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Roadmap or Coming Soon */}
      {hasRoadmapData(subpath.phases) ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
          style={{ marginBottom: "48px" }}>
          <RoadmapFlow phases={subpath.phases} accentColor={domain.color} />
        </motion.div>
      ) : (
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
        </motion.div>
      )}

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
