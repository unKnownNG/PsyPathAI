/**
 * Career alignment matrix.
 *
 * ALL 38 career path slugs:
 *   system-design, machine-learning, backend, cloud-computing, deep-learning,
 *   devops, dsa, nlp, generative-ai, computer-vision, fullstack, blockchain,
 *   docker-kubernetes, freelancing, frontend, open-source, data-science,
 *   game-development, ar-vr, cross-platform, interview-prep, ethical-hacking,
 *   iot, database-engineering, network-security, application-security, robotics,
 *   android, ios, mlops, embedded-systems, research, product-management,
 *   ux-research, technical-writing, developer-advocacy, quant-finance,
 *   tech-consulting, ai-ethics-policy
 */
// ── Slug → human-readable name map ──────────────────────────
const pathNames = {
    "system-design": "System Design",
    "machine-learning": "Machine Learning",
    "backend": "Backend Development",
    "cloud-computing": "Cloud Computing",
    "deep-learning": "Deep Learning",
    "devops": "DevOps & CI/CD",
    "dsa": "DSA & Competitive Programming",
    "nlp": "Natural Language Processing",
    "generative-ai": "Generative AI & LLMs",
    "computer-vision": "Computer Vision",
    "fullstack": "Full Stack Development",
    "blockchain": "Blockchain & Web3",
    "docker-kubernetes": "Docker & Kubernetes",
    "freelancing": "Freelancing & Indie Hacking",
    "frontend": "Frontend Development",
    "open-source": "Open Source Contribution",
    "data-science": "Data Science",
    "game-development": "Game Development",
    "ar-vr": "AR / VR",
    "cross-platform": "Cross Platform (Flutter/RN)",
    "interview-prep": "Interview Prep (FAANG/SWE)",
    "ethical-hacking": "Ethical Hacking",
    "iot": "IoT & Embedded Systems",
    "database-engineering": "Database Engineering",
    "network-security": "Network Security",
    "application-security": "Application Security",
    "robotics": "Robotics",
    "android": "Android (Kotlin)",
    "ios": "iOS (Swift)",
    "mlops": "MLOps",
    "embedded-systems": "Embedded Systems & VLSI",
    "research": "Research & MS/PhD Path",
    "product-management": "Product Management",
    "ux-research": "UX Research & Design",
    "technical-writing": "Technical Writing",
    "developer-advocacy": "Developer Advocacy & DevRel",
    "quant-finance": "Quantitative Finance & FinTech",
    "tech-consulting": "Tech Consulting",
    "ai-ethics-policy": "AI Ethics & Policy",
};
// ── MBTI → path affinities (expanded to cover all 38 slugs) ─
const mbtiPathAffinity = {
    INTJ: [
        { slug: "system-design", weight: 95 },
        { slug: "machine-learning", weight: 92 },
        { slug: "backend", weight: 88 },
        { slug: "cloud-computing", weight: 84 },
        { slug: "deep-learning", weight: 82 },
        { slug: "devops", weight: 78 },
        { slug: "dsa", weight: 80 },
        { slug: "quant-finance", weight: 85 },
        { slug: "research", weight: 80 },
        { slug: "ai-ethics-policy", weight: 72 },
        { slug: "tech-consulting", weight: 76 },
        { slug: "database-engineering", weight: 74 },
        { slug: "docker-kubernetes", weight: 72 },
        { slug: "embedded-systems", weight: 68 },
        { slug: "mlops", weight: 70 },
    ],
    INTP: [
        { slug: "machine-learning", weight: 95 },
        { slug: "dsa", weight: 92 },
        { slug: "deep-learning", weight: 90 },
        { slug: "nlp", weight: 88 },
        { slug: "generative-ai", weight: 85 },
        { slug: "computer-vision", weight: 82 },
        { slug: "research", weight: 90 },
        { slug: "quant-finance", weight: 82 },
        { slug: "ai-ethics-policy", weight: 75 },
        { slug: "data-science", weight: 78 },
        { slug: "system-design", weight: 76 },
        { slug: "backend", weight: 72 },
        { slug: "embedded-systems", weight: 70 },
        { slug: "robotics", weight: 68 },
        { slug: "blockchain", weight: 72 },
    ],
    ENTJ: [
        { slug: "fullstack", weight: 92 },
        { slug: "cloud-computing", weight: 90 },
        { slug: "devops", weight: 88 },
        { slug: "system-design", weight: 86 },
        { slug: "product-management", weight: 90 },
        { slug: "tech-consulting", weight: 88 },
        { slug: "freelancing", weight: 78 },
        { slug: "docker-kubernetes", weight: 76 },
        { slug: "dsa", weight: 75 },
        { slug: "backend", weight: 80 },
        { slug: "developer-advocacy", weight: 74 },
        { slug: "blockchain", weight: 72 },
        { slug: "interview-prep", weight: 78 },
    ],
    ENTP: [
        { slug: "generative-ai", weight: 95 },
        { slug: "blockchain", weight: 90 },
        { slug: "fullstack", weight: 85 },
        { slug: "cross-platform", weight: 82 },
        { slug: "ar-vr", weight: 80 },
        { slug: "freelancing", weight: 78 },
        { slug: "product-management", weight: 82 },
        { slug: "developer-advocacy", weight: 80 },
        { slug: "tech-consulting", weight: 76 },
        { slug: "dsa", weight: 72 },
        { slug: "ai-ethics-policy", weight: 74 },
        { slug: "game-development", weight: 70 },
        { slug: "robotics", weight: 68 },
        { slug: "iot", weight: 66 },
    ],
    INFJ: [
        { slug: "frontend", weight: 92 },
        { slug: "nlp", weight: 88 },
        { slug: "open-source", weight: 86 },
        { slug: "ux-research", weight: 90 },
        { slug: "ai-ethics-policy", weight: 88 },
        { slug: "technical-writing", weight: 85 },
        { slug: "data-science", weight: 78 },
        { slug: "generative-ai", weight: 76 },
        { slug: "fullstack", weight: 72 },
        { slug: "product-management", weight: 76 },
        { slug: "developer-advocacy", weight: 74 },
        { slug: "research", weight: 78 },
        { slug: "dsa", weight: 65 },
        { slug: "cross-platform", weight: 68 },
    ],
    INFP: [
        { slug: "frontend", weight: 95 },
        { slug: "game-development", weight: 92 },
        { slug: "ar-vr", weight: 88 },
        { slug: "ux-research", weight: 90 },
        { slug: "technical-writing", weight: 86 },
        { slug: "generative-ai", weight: 82 },
        { slug: "cross-platform", weight: 78 },
        { slug: "open-source", weight: 76 },
        { slug: "ai-ethics-policy", weight: 78 },
        { slug: "developer-advocacy", weight: 72 },
        { slug: "freelancing", weight: 74 },
        { slug: "dsa", weight: 60 },
        { slug: "android", weight: 68 },
    ],
    ENFJ: [
        { slug: "frontend", weight: 90 },
        { slug: "open-source", weight: 88 },
        { slug: "developer-advocacy", weight: 92 },
        { slug: "product-management", weight: 90 },
        { slug: "ux-research", weight: 86 },
        { slug: "technical-writing", weight: 82 },
        { slug: "interview-prep", weight: 85 },
        { slug: "fullstack", weight: 80 },
        { slug: "cross-platform", weight: 78 },
        { slug: "freelancing", weight: 72 },
        { slug: "tech-consulting", weight: 78 },
        { slug: "ai-ethics-policy", weight: 74 },
        { slug: "dsa", weight: 68 },
    ],
    ENFP: [
        { slug: "cross-platform", weight: 92 },
        { slug: "generative-ai", weight: 90 },
        { slug: "freelancing", weight: 88 },
        { slug: "game-development", weight: 86 },
        { slug: "frontend", weight: 84 },
        { slug: "ar-vr", weight: 82 },
        { slug: "developer-advocacy", weight: 88 },
        { slug: "product-management", weight: 80 },
        { slug: "ux-research", weight: 80 },
        { slug: "technical-writing", weight: 72 },
        { slug: "open-source", weight: 74 },
        { slug: "dsa", weight: 62 },
        { slug: "blockchain", weight: 70 },
    ],
    ISTJ: [
        { slug: "backend", weight: 95 },
        { slug: "database-engineering", weight: 92 },
        { slug: "devops", weight: 90 },
        { slug: "docker-kubernetes", weight: 88 },
        { slug: "dsa", weight: 86 },
        { slug: "network-security", weight: 82 },
        { slug: "application-security", weight: 80 },
        { slug: "embedded-systems", weight: 84 },
        { slug: "mlops", weight: 78 },
        { slug: "system-design", weight: 76 },
        { slug: "interview-prep", weight: 82 },
        { slug: "quant-finance", weight: 74 },
        { slug: "cloud-computing", weight: 75 },
        { slug: "tech-consulting", weight: 72 },
    ],
    ISFJ: [
        { slug: "frontend", weight: 90 },
        { slug: "application-security", weight: 88 },
        { slug: "data-science", weight: 85 },
        { slug: "ux-research", weight: 86 },
        { slug: "technical-writing", weight: 84 },
        { slug: "backend", weight: 80 },
        { slug: "open-source", weight: 78 },
        { slug: "database-engineering", weight: 76 },
        { slug: "dsa", weight: 72 },
        { slug: "cross-platform", weight: 70 },
        { slug: "product-management", weight: 72 },
        { slug: "embedded-systems", weight: 68 },
        { slug: "interview-prep", weight: 74 },
    ],
    ESTJ: [
        { slug: "devops", weight: 95 },
        { slug: "cloud-computing", weight: 92 },
        { slug: "system-design", weight: 88 },
        { slug: "docker-kubernetes", weight: 86 },
        { slug: "backend", weight: 84 },
        { slug: "database-engineering", weight: 80 },
        { slug: "product-management", weight: 86 },
        { slug: "tech-consulting", weight: 84 },
        { slug: "dsa", weight: 80 },
        { slug: "interview-prep", weight: 82 },
        { slug: "mlops", weight: 76 },
        { slug: "embedded-systems", weight: 72 },
        { slug: "network-security", weight: 74 },
    ],
    ESFJ: [
        { slug: "frontend", weight: 92 },
        { slug: "cross-platform", weight: 88 },
        { slug: "open-source", weight: 86 },
        { slug: "developer-advocacy", weight: 88 },
        { slug: "product-management", weight: 84 },
        { slug: "ux-research", weight: 86 },
        { slug: "technical-writing", weight: 80 },
        { slug: "fullstack", weight: 78 },
        { slug: "interview-prep", weight: 76 },
        { slug: "freelancing", weight: 72 },
        { slug: "dsa", weight: 66 },
        { slug: "android", weight: 70 },
        { slug: "ai-ethics-policy", weight: 68 },
    ],
    ISTP: [
        { slug: "ethical-hacking", weight: 95 },
        { slug: "iot", weight: 92 },
        { slug: "embedded-systems", weight: 92 },
        { slug: "docker-kubernetes", weight: 88 },
        { slug: "robotics", weight: 90 },
        { slug: "devops", weight: 85 },
        { slug: "backend", weight: 82 },
        { slug: "dsa", weight: 78 },
        { slug: "network-security", weight: 80 },
        { slug: "application-security", weight: 76 },
        { slug: "android", weight: 72 },
        { slug: "cloud-computing", weight: 70 },
        { slug: "interview-prep", weight: 72 },
    ],
    ISFP: [
        { slug: "frontend", weight: 95 },
        { slug: "game-development", weight: 92 },
        { slug: "ux-research", weight: 90 },
        { slug: "android", weight: 86 },
        { slug: "cross-platform", weight: 84 },
        { slug: "ar-vr", weight: 82 },
        { slug: "ios", weight: 80 },
        { slug: "technical-writing", weight: 74 },
        { slug: "freelancing", weight: 72 },
        { slug: "generative-ai", weight: 70 },
        { slug: "open-source", weight: 68 },
        { slug: "dsa", weight: 58 },
    ],
    ESTP: [
        { slug: "fullstack", weight: 92 },
        { slug: "ethical-hacking", weight: 90 },
        { slug: "freelancing", weight: 88 },
        { slug: "devops", weight: 84 },
        { slug: "cloud-computing", weight: 80 },
        { slug: "blockchain", weight: 78 },
        { slug: "dsa", weight: 76 },
        { slug: "embedded-systems", weight: 74 },
        { slug: "iot", weight: 72 },
        { slug: "product-management", weight: 76 },
        { slug: "interview-prep", weight: 78 },
        { slug: "tech-consulting", weight: 74 },
        { slug: "robotics", weight: 68 },
    ],
    ESFP: [
        { slug: "frontend", weight: 92 },
        { slug: "cross-platform", weight: 90 },
        { slug: "game-development", weight: 88 },
        { slug: "developer-advocacy", weight: 88 },
        { slug: "ar-vr", weight: 84 },
        { slug: "ux-research", weight: 82 },
        { slug: "freelancing", weight: 80 },
        { slug: "android", weight: 76 },
        { slug: "product-management", weight: 74 },
        { slug: "open-source", weight: 70 },
        { slug: "dsa", weight: 58 },
        { slug: "technical-writing", weight: 66 },
    ],
};
// ── Holland code → slug boost (STRONGER: +15 per match) ─────
const hollandBoost = {
    R: ["embedded-systems", "iot", "robotics", "docker-kubernetes", "devops", "backend", "ethical-hacking", "network-security", "android", "ios"],
    I: ["machine-learning", "deep-learning", "data-science", "dsa", "system-design", "nlp", "computer-vision", "research", "quant-finance", "ai-ethics-policy", "mlops", "database-engineering"],
    A: ["frontend", "game-development", "ar-vr", "cross-platform", "generative-ai", "ux-research", "technical-writing"],
    S: ["frontend", "open-source", "cross-platform", "interview-prep", "developer-advocacy", "technical-writing", "ux-research", "product-management"],
    E: ["fullstack", "cloud-computing", "devops", "freelancing", "system-design", "product-management", "tech-consulting", "blockchain", "developer-advocacy"],
    C: ["backend", "database-engineering", "devops", "application-security", "network-security", "ethical-hacking", "mlops", "quant-finance", "tech-consulting", "embedded-systems"],
};
// ── Interest/hobby → path mapping ─────────────────────────
const interestBoost = {
    // Tech interests
    "gaming": ["game-development", "ar-vr", "frontend", "cross-platform"],
    "hacking": ["ethical-hacking", "network-security", "application-security", "backend"],
    "robotics": ["robotics", "iot", "embedded-systems", "machine-learning"],
    "electronics": ["embedded-systems", "iot", "robotics"],
    "3d-modeling": ["ar-vr", "game-development", "frontend"],
    "ai-chatbots": ["generative-ai", "nlp", "machine-learning", "deep-learning"],
    "web-design": ["frontend", "ux-research", "cross-platform"],
    "mobile-apps": ["android", "ios", "cross-platform", "frontend"],
    "competitive-coding": ["dsa", "interview-prep", "quant-finance", "machine-learning"],
    "open-source": ["open-source", "backend", "devops", "fullstack"],
    "blogging": ["technical-writing", "developer-advocacy", "freelancing"],
    "crypto": ["blockchain", "quant-finance", "fullstack"],
    // Non-tech / broader interests
    "writing": ["technical-writing", "developer-advocacy", "ai-ethics-policy", "product-management"],
    "teaching": ["developer-advocacy", "open-source", "technical-writing"],
    "public-speaking": ["developer-advocacy", "product-management", "tech-consulting"],
    "business": ["product-management", "freelancing", "tech-consulting", "fullstack"],
    "finance": ["quant-finance", "data-science", "machine-learning", "blockchain"],
    "psychology": ["ux-research", "ai-ethics-policy", "product-management"],
    "design": ["ux-research", "frontend", "game-development", "ar-vr"],
    "music": ["game-development", "generative-ai", "ar-vr"],
    "photography": ["computer-vision", "ar-vr", "frontend"],
    "math": ["dsa", "machine-learning", "deep-learning", "quant-finance", "research"],
    "physics": ["robotics", "embedded-systems", "ar-vr", "research", "iot"],
    "biology": ["data-science", "research", "ai-ethics-policy", "machine-learning"],
    "law-policy": ["ai-ethics-policy", "tech-consulting", "product-management"],
    "mechanical": ["robotics", "embedded-systems", "iot", "3d-modeling"],
    "electrical": ["embedded-systems", "iot", "robotics", "network-security"],
    "automotive": ["embedded-systems", "iot", "robotics"],
    "sustainability": ["ai-ethics-policy", "data-science", "iot", "research"],
    "healthcare": ["data-science", "machine-learning", "ux-research", "ai-ethics-policy"],
};
// ── Goal modifiers ──────────────────────────────────────────
const goalBoost = {
    "Get a Job": {
        slugs: ["dsa", "interview-prep", "fullstack", "backend", "frontend", "system-design", "devops", "cloud-computing"],
        weight: 12,
    },
    "Masters/PhD": {
        slugs: ["research", "machine-learning", "deep-learning", "nlp", "computer-vision", "data-science", "ai-ethics-policy", "quant-finance"],
        weight: 10,
    },
    "Build a Startup": {
        slugs: ["fullstack", "freelancing", "cross-platform", "generative-ai", "blockchain", "cloud-computing", "product-management"],
        weight: 10,
    },
    "Explore & Learn": {
        slugs: ["generative-ai", "ar-vr", "game-development", "robotics", "blockchain", "iot", "embedded-systems", "open-source"],
        weight: 8,
    },
};
export function getCareerAlignment(mbtiType, hollandCode, goal, interests = []) {
    const baseAffinities = mbtiPathAffinity[mbtiType.toUpperCase()] ?? mbtiPathAffinity["INTJ"];
    const scored = new Map();
    // 1) Start with MBTI base weights
    for (const aff of baseAffinities) {
        scored.set(aff.slug, {
            score: aff.weight,
            reasons: [`${mbtiType} cognitive alignment (${aff.weight})`],
        });
    }
    // Helper: ensure a slug exists in the map
    const ensureSlug = (slug) => {
        if (!scored.has(slug)) {
            scored.set(slug, { score: 40, reasons: ["Base score (40)"] });
        }
    };
    // 2) Holland code boosts — STRONG (+15 per matching code letter)
    for (const char of hollandCode.toUpperCase()) {
        const boostedSlugs = hollandBoost[char] ?? [];
        for (const slug of boostedSlugs) {
            ensureSlug(slug);
            const entry = scored.get(slug);
            entry.score += 15;
            entry.reasons.push(`Holland '${char}' boost (+15)`);
        }
    }
    // 3) Interest-based boosts — +10 per matching interest
    for (const interest of interests) {
        const key = interest.toLowerCase().replace(/\s+/g, "-");
        const boostedSlugs = interestBoost[key] ?? [];
        for (const slug of boostedSlugs) {
            ensureSlug(slug);
            const entry = scored.get(slug);
            entry.score += 10;
            entry.reasons.push(`Interest "${interest}" boost (+10)`);
        }
    }
    // 4) Goal boosts
    const goalInfo = goalBoost[goal];
    if (goalInfo) {
        for (const slug of goalInfo.slugs) {
            ensureSlug(slug);
            const entry = scored.get(slug);
            entry.score += goalInfo.weight;
            entry.reasons.push(`Goal "${goal}" boost (+${goalInfo.weight})`);
        }
    }
    // 5) DSA universal boost for placement-focused goals
    if (goal === "Get a Job") {
        ensureSlug("dsa");
        const dsaEntry = scored.get("dsa");
        dsaEntry.score += 8;
        dsaEntry.reasons.push("DSA is critical for placements (+8 extra)");
        ensureSlug("interview-prep");
        const ipEntry = scored.get("interview-prep");
        ipEntry.score += 8;
        ipEntry.reasons.push("Interview prep essential for job readiness (+8 extra)");
    }
    // Sort by score descending, take top 5, cap at 100
    const sorted = [...scored.entries()]
        .sort(([, a], [, b]) => b.score - a.score)
        .slice(0, 5);
    return sorted.map(([slug, data]) => ({
        pathSlug: slug,
        pathName: pathNames[slug] ?? slug,
        score: Math.min(data.score, 100),
        reasoning: data.reasons.join("; "),
    }));
}
//# sourceMappingURL=career-matrix.js.map