"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Play, FileText, GraduationCap, Wrench,
  Clock, ChevronDown, ExternalLink, Trophy,
} from "lucide-react";
import type { Phase, Topic } from "@/data/types";

const DIFF_COLORS: Record<string, string> = {
  Beginner: "#34d399",
  Intermediate: "#fbbf24",
  Advanced: "#f87171",
};

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

interface Props {
  phases: Phase[];
  accentColor: string;
}

export default function RoadmapFlow({ phases, accentColor }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const spineX = isMobile ? "28px" : "50%";
  let topicIndex = 0;

  return (
    <div style={{ position: "relative", padding: "0 0 64px" }}>
      {/* Central spine — solid */}
      <div style={{
        position: "absolute", left: spineX, transform: "translateX(-50%)",
        top: 0, bottom: 0, width: "3px",
        background: `linear-gradient(to bottom, ${accentColor}, #34d399)`,
        opacity: 0.35, zIndex: 0,
      }} />
      {/* Central spine — glow */}
      <div style={{
        position: "absolute", left: spineX, transform: "translateX(-50%)",
        top: 0, bottom: 0, width: "3px",
        background: `linear-gradient(to bottom, ${accentColor}, #34d399)`,
        filter: "blur(8px)", opacity: 0.2, zIndex: 0,
      }} />

      {/* Phases & topics */}
      {phases.map((phase, phaseIdx) => (
        <div key={phase.id}>
          {/* ── Phase Header ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            style={{
              display: "flex",
              justifyContent: isMobile ? "flex-start" : "center",
              padding: isMobile ? "32px 0 24px 60px" : "40px 0 28px",
              position: "relative",
            }}
          >
            {/* Big dot on spine for phase */}
            <div style={{
              position: "absolute", left: spineX, top: "50%",
              transform: "translate(-50%, -50%)",
              width: "22px", height: "22px", borderRadius: "50%",
              background: accentColor, border: "4px solid #0a0f1a",
              boxShadow: `0 0 18px ${accentColor}50`, zIndex: 3,
            }} />

            {/* Mobile connector from spine to badge */}
            {isMobile && (
              <div style={{
                position: "absolute", left: "39px", top: "50%",
                width: "18px", height: "2px",
                background: `${accentColor}40`, zIndex: 1,
              }} />
            )}

            {/* Phase badge */}
            <div style={{
              padding: "14px 28px", borderRadius: "14px",
              background: `${accentColor}12`, border: `1px solid ${accentColor}25`,
              textAlign: isMobile ? "left" : "center", zIndex: 4,
            }}>
              <p style={{ fontSize: "0.65rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "4px", fontWeight: 600 }}>
                Phase {phaseIdx + 1}
              </p>
              <h3 className="font-bold font-heading" style={{ fontSize: "1.05rem", color: accentColor }}>
                {phase.title}
              </h3>
              <p style={{ fontSize: "0.78rem", color: "#94a3b8", marginTop: "4px" }}>{phase.description}</p>
            </div>
          </motion.div>

          {/* ── Topic Nodes ── */}
          {phase.topics.map((topic) => {
            const isLeft = !isMobile && topicIndex % 2 === 0;
            topicIndex++;
            const isExpanded = expandedId === topic.id;
            const diffColor = DIFF_COLORS[topic.difficulty] || "#94a3b8";

            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, x: isMobile ? 20 : isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  position: "relative",
                  padding: isMobile ? "10px 0 10px 60px" : "12px 0",
                  display: "flex",
                  justifyContent: isMobile ? "flex-start" : isLeft ? "flex-start" : "flex-end",
                }}
              >
                {/* Junction dot on spine */}
                <div style={{
                  position: "absolute", left: spineX, top: "30px",
                  transform: "translate(-50%, 0)",
                  width: "12px", height: "12px", borderRadius: "50%",
                  background: diffColor, border: "3px solid #0a0f1a",
                  boxShadow: `0 0 10px ${diffColor}40`, zIndex: 3,
                  transition: "box-shadow 0.3s",
                }} />

                {/* Horizontal connector — desktop */}
                {!isMobile && (
                  <div style={{
                    position: "absolute", top: "35px", height: "2px", zIndex: 1,
                    background: `linear-gradient(${isLeft ? "to left" : "to right"}, ${diffColor}70, ${diffColor}10)`,
                    ...(isLeft
                      ? { left: "44%", width: "5.5%" }
                      : { left: "50.5%", width: "5.5%" }),
                  }} />
                )}

                {/* Horizontal connector — mobile */}
                {isMobile && (
                  <div style={{
                    position: "absolute", left: "34px", top: "35px",
                    width: "22px", height: "2px",
                    background: `${diffColor}50`, zIndex: 1,
                  }} />
                )}

                {/* Card */}
                <div
                  onClick={() => setExpandedId((p) => (p === topic.id ? null : topic.id))}
                  style={{ width: isMobile ? "100%" : "44%", cursor: "pointer" }}
                >
                  <div style={{
                    padding: "20px 24px", borderRadius: "16px",
                    background: isExpanded ? "rgba(15,23,42,0.85)" : "rgba(15,23,42,0.5)",
                    border: isExpanded ? `1px solid ${diffColor}30` : "1px solid rgba(148,163,184,0.1)",
                    backdropFilter: "blur(12px)", transition: "all 0.3s ease",
                  }}>
                    {/* Title row */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", marginBottom: "8px" }}>
                      <h4 className="font-bold" style={{ fontSize: "0.95rem", flex: 1 }}>{topic.name}</h4>
                      <span style={{
                        padding: "3px 10px", borderRadius: "8px", fontSize: "0.65rem", fontWeight: 600,
                        background: `${diffColor}15`, color: diffColor, border: `1px solid ${diffColor}25`,
                        whiteSpace: "nowrap",
                      }}>{topic.difficulty}</span>
                      <ChevronDown style={{
                        width: "14px", height: "14px", color: "#64748b", flexShrink: 0,
                        transition: "transform 0.3s",
                        transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
                      }} />
                    </div>

                    <p style={{ fontSize: "0.82rem", color: "#94a3b8", marginBottom: "8px", lineHeight: 1.5 }}>
                      {topic.description}
                    </p>

                    <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.72rem", color: "#64748b" }}>
                      <Clock style={{ width: "12px", height: "12px" }} />
                      {topic.timeEstimate}
                    </div>

                    {/* Expanded: details + resources */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: "hidden" }}
                        >
                          <div style={{ paddingTop: "16px", marginTop: "16px", borderTop: "1px solid rgba(148,163,184,0.1)" }}>
                            <p style={{ fontSize: "0.85rem", color: "#cbd5e1", lineHeight: 1.7, marginBottom: "16px" }}>
                              {topic.details}
                            </p>

                            {topic.resources.length > 0 && (
                              <div>
                                <p style={{ fontSize: "0.68rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px", fontWeight: 600 }}>
                                  📚 Resources
                                </p>
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                  {topic.resources.map((res, ri) => {
                                    const ResIcon = RES_ICONS[res.type] || FileText;
                                    const resColor = RES_COLORS[res.type] || "#94a3b8";
                                    return (
                                      <a
                                        key={ri}
                                        href={res.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        style={{
                                          display: "flex", alignItems: "center", gap: "10px",
                                          padding: "10px 14px", borderRadius: "10px",
                                          background: "rgba(17,24,39,0.6)",
                                          border: "1px solid rgba(148,163,184,0.08)",
                                          textDecoration: "none", transition: "all 0.2s",
                                        }}
                                      >
                                        <ResIcon style={{ width: "14px", height: "14px", color: resColor, flexShrink: 0 }} />
                                        <span style={{ flex: 1, color: "#e2e8f0", fontSize: "0.82rem" }}>{res.title}</span>
                                        <span style={{
                                          padding: "2px 8px", borderRadius: "6px", fontSize: "0.62rem",
                                          background: `${resColor}15`, color: resColor, fontWeight: 500,
                                        }}>{res.type}</span>
                                        <ExternalLink style={{ width: "11px", height: "11px", color: "#475569" }} />
                                      </a>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ))}

      {/* ── End marker ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{
          display: "flex",
          justifyContent: isMobile ? "flex-start" : "center",
          paddingTop: "32px",
          paddingLeft: isMobile ? "60px" : "0",
          position: "relative",
        }}
      >
        <div style={{
          position: "absolute", left: spineX, top: "50%",
          transform: "translate(-50%, -50%)",
          width: "28px", height: "28px", borderRadius: "50%",
          background: `linear-gradient(135deg, ${accentColor}, #34d399)`,
          border: "4px solid #0a0f1a",
          boxShadow: `0 0 24px ${accentColor}40`,
          zIndex: 3,
        }} />
        {isMobile && (
          <div style={{
            position: "absolute", left: "42px", top: "50%",
            width: "14px", height: "2px",
            background: `${accentColor}30`, zIndex: 1,
          }} />
        )}
        <div style={{
          padding: "14px 24px", borderRadius: "14px",
          background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)",
          display: "flex", alignItems: "center", gap: "10px", zIndex: 2,
        }}>
          <Trophy style={{ width: "18px", height: "18px", color: "#34d399" }} />
          <span className="font-bold" style={{ fontSize: "0.9rem", color: "#34d399" }}>Path Complete!</span>
        </div>
      </motion.div>
    </div>
  );
}
