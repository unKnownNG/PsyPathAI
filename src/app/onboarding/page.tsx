"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowRight, User, Brain, Briefcase, BookOpen,
  Sparkles, CheckCircle2, ChevronRight,
} from "lucide-react";
import { mbtiQuestions, hollandOptions, learningStyleOptions, computeMBTI, getPersonalityMapping } from "@/data/quiz";
import DynamicIcon from "@/components/DynamicIcon";
import Link from "next/link";

const steps = [
  { title: "About You", icon: User },
  { title: "Personality", icon: Brain },
  { title: "Work Style", icon: Briefcase },
  { title: "Learning", icon: BookOpen },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [year, setYear] = useState("");
  const [goal, setGoal] = useState("");
  const [hours, setHours] = useState("");
  const [mbtiAnswers, setMbtiAnswers] = useState<Record<string, string>>({});
  const [selectedHolland, setSelectedHolland] = useState<string[]>([]);
  const [learningStyle, setLearningStyle] = useState("");

  const canProceed = () => {
    switch (currentStep) {
      case 0: return year && goal && hours;
      case 1: return Object.keys(mbtiAnswers).length >= mbtiQuestions.length;
      case 2: return selectedHolland.length >= 2;
      case 3: return learningStyle !== "";
      default: return false;
    }
  };

  const handleFinish = () => {
    const mbti = computeMBTI(mbtiAnswers);
    const hollandCode = selectedHolland.slice(0, 3).join("");
    const profile = {
      year, goal, hoursPerWeek: hours,
      mbtiType: mbti, hollandCode, learningStyle,
      recommendedPaths: getPersonalityMapping(mbti).recommendedPaths,
    };
    localStorage.setItem("careerforge-profile", JSON.stringify(profile));
    setShowResults(true);
  };

  const mbtiType = computeMBTI(mbtiAnswers);
  const personality = getPersonalityMapping(mbtiType);

  const btnBase = { padding: "14px 20px", borderRadius: "12px", fontSize: "0.88rem", fontWeight: 500, cursor: "pointer", transition: "all 0.2s", border: "none", textAlign: "left" as const, width: "100%" };
  const btnActive = { ...btnBase, background: "rgba(99,102,241,0.15)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.25)" };
  const btnInactive = { ...btnBase, background: "#111827", color: "#cbd5e1", border: "1px solid rgba(148,163,184,0.12)" };

  /* ── Results ─ */
  if (showResults) {
    return (
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "80px 32px" }}>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}
              style={{ width: "80px", height: "80px", borderRadius: "24px", background: "linear-gradient(135deg, #6366f1, #34d399)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <Sparkles style={{ width: "40px", height: "40px", color: "#fff" }} />
            </motion.div>
            <h1 className="font-bold font-heading" style={{ fontSize: "2rem", marginBottom: "12px" }}>Your Results Are In!</h1>
            <p className="text-muted" style={{ fontSize: "1.05rem" }}>Here&apos;s your personalized career profile</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "32px" }}>
            <div className="glass-card" style={{ padding: "28px", textAlign: "center" }}>
              <p className="text-muted" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>MBTI Type</p>
              <p className="gradient-text font-mono" style={{ fontSize: "2.25rem", fontWeight: 700 }}>{mbtiType}</p>
            </div>
            <div className="glass-card" style={{ padding: "28px", textAlign: "center" }}>
              <p className="text-muted" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Holland Code</p>
              <p className="gradient-text font-mono" style={{ fontSize: "2.25rem", fontWeight: 700 }}>{selectedHolland.slice(0, 3).join("")}</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: "28px", marginBottom: "32px" }}>
            <p className="text-muted" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>{personality.description}</p>
          </div>

          <div className="glass-card" style={{ padding: "28px", marginBottom: "40px" }}>
            <h3 className="font-bold font-heading" style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px", fontSize: "1rem" }}>
              <CheckCircle2 className="text-emerald-400" style={{ width: "20px", height: "20px" }} /> Top Recommended Paths
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {personality.recommendedPaths.map((p, i) => (
                <motion.div key={p} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px", borderRadius: "12px", background: "rgba(17,24,39,0.8)", border: "1px solid rgba(148,163,184,0.1)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(99,102,241,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#818cf8", fontSize: "0.75rem", fontWeight: 700 }}>{i + 1}</span>
                    <span style={{ fontSize: "0.9rem", fontWeight: 500, textTransform: "capitalize" }}>{p.replace(/-/g, " ")}</span>
                  </div>
                  <ChevronRight className="text-muted" style={{ width: "16px", height: "16px" }} />
                </motion.div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/roadmaps" style={{ padding: "14px 28px", borderRadius: "14px", background: "linear-gradient(135deg, #6366f1, #4f46e5)", color: "#fff", fontWeight: 600, textDecoration: "none", textAlign: "center" }}>
              Explore Roadmaps
            </Link>
            <Link href="/bot" style={{ padding: "14px 28px", borderRadius: "14px", border: "1px solid rgba(148,163,184,0.2)", background: "rgba(17,24,39,0.6)", color: "#f1f5f9", fontWeight: 600, textDecoration: "none", textAlign: "center" }}>
              Talk to CareerBot
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  /* ── Quiz Steps ─ */
  return (
    <div style={{ maxWidth: "640px", margin: "0 auto", padding: "64px 32px" }}>
      {/* Progress Stepper */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0px", marginBottom: "48px" }}>
        {steps.map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 700, transition: "all 0.2s",
              ...(i <= currentStep
                ? { background: "rgba(99,102,241,0.15)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.25)" }
                : { background: "#111827", color: "#94a3b8", border: "1px solid rgba(148,163,184,0.12)" })
            }}>
              {i < currentStep ? <CheckCircle2 style={{ width: "16px", height: "16px" }} /> : i + 1}
            </div>
            <span className="hidden sm:block" style={{ fontSize: "0.8rem", fontWeight: 500, color: i <= currentStep ? "#f1f5f9" : "#94a3b8" }}>{step.title}</span>
            {i < steps.length - 1 && (
              <div style={{ width: "36px", height: "2px", borderRadius: "1px", margin: "0 4px", background: i < currentStep ? "#6366f1" : "#1e293b" }} />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div key={currentStep} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }}>

          {currentStep === 0 && (
            <div>
              <h2 className="font-bold font-heading" style={{ fontSize: "1.5rem", marginBottom: "12px" }}>Tell us about yourself</h2>
              <p className="text-muted" style={{ marginBottom: "40px" }}>This helps us personalize your roadmap recommendations.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 500, marginBottom: "12px" }}>What year are you in?</label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
                    {["1st Year", "2nd Year", "3rd Year", "4th Year"].map((y) => (
                      <button key={y} onClick={() => setYear(y)} style={year === y ? btnActive : btnInactive}>{y}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 500, marginBottom: "12px" }}>What&apos;s your primary goal?</label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    {["Get a Job", "Masters/PhD", "Build a Startup", "Explore & Learn"].map((g) => (
                      <button key={g} onClick={() => setGoal(g)} style={goal === g ? btnActive : btnInactive}>{g}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 500, marginBottom: "12px" }}>Hours per week for learning?</label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
                    {["5-10 hrs", "10-15 hrs", "15-20 hrs", "20+ hrs"].map((h) => (
                      <button key={h} onClick={() => setHours(h)} style={hours === h ? btnActive : btnInactive}>{h}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <h2 className="font-bold font-heading" style={{ fontSize: "1.5rem", marginBottom: "12px" }}>Personality Assessment</h2>
              <p className="text-muted" style={{ marginBottom: "40px" }}>Choose the option that feels most natural to you.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {mbtiQuestions.map((q, qi) => (
                  <div key={q.id} className="glass-card" style={{ padding: "24px" }}>
                    <p style={{ fontWeight: 500, fontSize: "0.9rem", marginBottom: "16px" }}>{qi + 1}. {q.question}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {[q.optionA, q.optionB].map((opt) => (
                        <button key={opt.value} onClick={() => setMbtiAnswers((prev) => ({ ...prev, [q.id]: opt.value }))}
                          style={mbtiAnswers[q.id] === opt.value ? btnActive : btnInactive}>{opt.text}</button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="font-bold font-heading" style={{ fontSize: "1.5rem", marginBottom: "12px" }}>Work Style Preferences</h2>
              <p className="text-muted" style={{ marginBottom: "40px" }}>Select 2 or more that describe you best.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {hollandOptions.map((opt) => {
                  const sel = selectedHolland.includes(opt.code);
                  return (
                    <button key={opt.id}
                      onClick={() => setSelectedHolland((prev) => prev.includes(opt.code) ? prev.filter((c) => c !== opt.code) : [...prev, opt.code])}
                      className="glass-card"
                      style={{ padding: "24px", textAlign: "left", cursor: "pointer", transition: "all 0.2s", ...(sel ? { borderColor: "rgba(99,102,241,0.35)", background: "rgba(99,102,241,0.08)" } : {}) }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                        <DynamicIcon name={opt.icon} style={{ width: "20px", height: "20px", color: sel ? "#818cf8" : "#94a3b8" }} />
                        <span className="font-bold font-heading" style={{ fontSize: "0.9rem", color: sel ? "#818cf8" : "#f1f5f9" }}>{opt.label}</span>
                      </div>
                      <p style={{ fontSize: "0.78rem", color: "#94a3b8", lineHeight: 1.6 }}>{opt.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="font-bold font-heading" style={{ fontSize: "1.5rem", marginBottom: "12px" }}>How Do You Learn Best?</h2>
              <p className="text-muted" style={{ marginBottom: "40px" }}>Pick the learning method that works best for you.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {learningStyleOptions.map((opt) => {
                  const sel = learningStyle === opt.style;
                  return (
                    <button key={opt.id} onClick={() => setLearningStyle(opt.style)}
                      className="glass-card"
                      style={{ padding: "24px", textAlign: "left", cursor: "pointer", transition: "all 0.2s", ...(sel ? { borderColor: "rgba(99,102,241,0.35)", background: "rgba(99,102,241,0.08)" } : {}) }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                        <DynamicIcon name={opt.icon} style={{ width: "20px", height: "20px", color: sel ? "#818cf8" : "#94a3b8" }} />
                        <span className="font-bold font-heading" style={{ fontSize: "0.9rem", color: sel ? "#818cf8" : "#f1f5f9" }}>{opt.label}</span>
                      </div>
                      <p style={{ fontSize: "0.78rem", color: "#94a3b8", lineHeight: 1.6 }}>{opt.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "48px" }}>
        <button
          onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
          disabled={currentStep === 0}
          style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", borderRadius: "10px", fontSize: "0.88rem", fontWeight: 500, background: "none", border: "none", color: "#cbd5e1", cursor: "pointer", opacity: currentStep === 0 ? 0.3 : 1 }}
        >
          <ArrowLeft style={{ width: "16px", height: "16px" }} /> Back
        </button>
        {currentStep < steps.length - 1 ? (
          <button
            onClick={() => setCurrentStep((s) => s + 1)}
            disabled={!canProceed()}
            style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 28px", borderRadius: "12px", background: canProceed() ? "linear-gradient(135deg, #6366f1, #4f46e5)" : "#1e293b", color: "#fff", fontSize: "0.9rem", fontWeight: 600, border: "none", cursor: canProceed() ? "pointer" : "not-allowed", opacity: canProceed() ? 1 : 0.4 }}
          >
            Next <ArrowRight style={{ width: "16px", height: "16px" }} />
          </button>
        ) : (
          <button
            onClick={handleFinish}
            disabled={!canProceed()}
            style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 28px", borderRadius: "12px", background: canProceed() ? "linear-gradient(135deg, #10b981, #059669)" : "#1e293b", color: "#fff", fontSize: "0.9rem", fontWeight: 600, border: "none", cursor: canProceed() ? "pointer" : "not-allowed", opacity: canProceed() ? 1 : 0.4 }}
          >
            <Sparkles style={{ width: "16px", height: "16px" }} /> See Results
          </button>
        )}
      </div>
    </div>
  );
}
