export interface HollandType {
  code: string;
  label: string;
  description: string;
  domains: string[];
  traits: string[];
  preferredWorkStyle: string;
}

export const hollandTypes: Record<string, HollandType> = {
  R: {
    code: "R",
    label: "Realistic (Builder)",
    description: "Prefers hands-on, practical work with tools, machines, or physical materials.",
    domains: [
      "embedded-systems", "iot", "robotics", "devops", "backend", "docker-kubernetes",
      "ethical-hacking", "network-security", "android", "ios",
    ],
    traits: ["practical", "mechanical", "hands-on", "physical", "tool-oriented"],
    preferredWorkStyle: "Working with tangible systems, debugging hardware/software interfaces, building infrastructure, and hands-on engineering.",
  },
  I: {
    code: "I",
    label: "Investigative (Thinker)",
    description: "Enjoys research, analysis, and understanding how things work at a fundamental level.",
    domains: [
      "machine-learning", "deep-learning", "data-science", "dsa", "system-design",
      "nlp", "computer-vision", "research", "ai-ethics-policy", "quant-finance",
      "mlops", "database-engineering",
    ],
    traits: ["analytical", "curious", "theoretical", "research-oriented", "systematic"],
    preferredWorkStyle: "Deep research, algorithm design, data analysis, quantitative modeling, and solving intellectually challenging problems.",
  },
  A: {
    code: "A",
    label: "Artistic (Creator)",
    description: "Values creative expression, design, and building aesthetically pleasing experiences.",
    domains: [
      "frontend", "game-development", "ar-vr", "cross-platform", "generative-ai",
      "ux-research", "technical-writing",
    ],
    traits: ["creative", "expressive", "design-oriented", "imaginative", "aesthetic"],
    preferredWorkStyle: "UI/UX design, creative coding, game development, writing, and building visually engaging experiences.",
  },
  S: {
    code: "S",
    label: "Social (Helper)",
    description: "Enjoys teaching, mentoring, and working closely with people to solve problems.",
    domains: [
      "frontend", "open-source", "cross-platform", "interview-prep",
      "developer-advocacy", "technical-writing", "ux-research", "product-management",
    ],
    traits: ["empathetic", "collaborative", "mentoring", "community-driven", "supportive"],
    preferredWorkStyle: "Community building, pair programming, teaching, DevRel, user research, and user-centric development.",
  },
  E: {
    code: "E",
    label: "Enterprising (Leader)",
    description: "Thrives in leadership, management, and entrepreneurial roles.",
    domains: [
      "fullstack", "cloud-computing", "devops", "freelancing", "system-design",
      "product-management", "tech-consulting", "blockchain", "developer-advocacy",
    ],
    traits: ["ambitious", "persuasive", "competitive", "leadership", "strategic"],
    preferredWorkStyle: "Leading teams, managing products, building businesses, consulting, and driving strategic outcomes.",
  },
  C: {
    code: "C",
    label: "Conventional (Organizer)",
    description: "Prefers structured, systematic work with clear processes and standards.",
    domains: [
      "backend", "database-engineering", "devops", "application-security",
      "network-security", "ethical-hacking", "mlops", "quant-finance",
      "tech-consulting",
    ],
    traits: ["organized", "detail-oriented", "systematic", "process-driven", "reliable"],
    preferredWorkStyle: "Quality assurance, security auditing, database administration, compliance, and process optimization.",
  },
};

/**
 * Compute a weighted score for how well a Holland code aligns with a set of domain slugs.
 */
export function getHollandDomains(hollandCode: string): string[] {
  const allDomains: string[] = [];
  for (const char of hollandCode) {
    const ht = hollandTypes[char.toUpperCase()];
    if (ht) {
      allDomains.push(...ht.domains);
    }
  }
  return [...new Set(allDomains)];
}

/**
 * Describe how a Holland code combination shapes work preferences.
 */
export function describeHollandCombo(hollandCode: string): string {
  const chars = hollandCode.split("");
  const labels = chars.map((c) => hollandTypes[c]?.label ?? c).join(" + ");
  const traits = chars.flatMap((c) => hollandTypes[c]?.traits ?? []);
  const uniqueTraits = [...new Set(traits)].slice(0, 6);
  return `${labels}: characterized by being ${uniqueTraits.join(", ")}. This combination suggests a preference for roles that blend ${chars.map((c) => hollandTypes[c]?.preferredWorkStyle ?? "").filter(Boolean).join(" with ")}.`;
}
