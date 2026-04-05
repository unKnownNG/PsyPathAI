import { QuizQuestion, HollandOption, LearningStyleOption, PersonalityMapping } from "./types";

/**
 * 12 scenario-based MBTI questions using a 5-point Likert scale.
 * 
 * Design principles (anti-bias):
 * 1. Questions describe BEHAVIORS in concrete scenarios, not self-labels.
 * 2. Neither "Agree" nor "Disagree" sounds socially superior.
 * 3. Some questions are reverse-coded (direction = second letter) to catch
 *    acquiescence bias (people who tend to always agree).
 * 4. Scenarios are relatable to engineering students specifically.
 */
export const mbtiQuestions: QuizQuestion[] = [
  // ─── E / I  (3 questions) ───────────────────────────────────────
  {
    id: "q1",
    question: "After a long day of classes, you find yourself wanting to hang out with friends or attend a campus event rather than heading home.",
    dimension: "EI",
    direction: "E",
  },
  {
    id: "q2",
    question: "When you're stuck on a tough assignment, your first instinct is to work through it alone before asking anyone for help.",
    dimension: "EI",
    direction: "I", // Agree → Introversion (reverse-coded)
  },
  {
    id: "q3",
    question: "In group discussions, you tend to speak up early and think through ideas by talking them out rather than reflecting silently first.",
    dimension: "EI",
    direction: "E",
  },

  // ─── S / N  (3 questions) ───────────────────────────────────────
  {
    id: "q4",
    question: "When starting a new project, you prefer to dive into a working prototype immediately rather than mapping out an overall design first.",
    dimension: "SN",
    direction: "S",
  },
  {
    id: "q5",
    question: "You often catch yourself thinking about how current technology trends might change the world five or ten years from now.",
    dimension: "SN",
    direction: "N",
  },
  {
    id: "q6",
    question: "You tend to trust tried-and-tested solutions over experimental approaches, even if the new approach might be more elegant.",
    dimension: "SN",
    direction: "S",
  },

  // ─── T / F  (3 questions) ───────────────────────────────────────
  {
    id: "q7",
    question: "When two teammates disagree on an approach, you focus on which argument is logically stronger rather than how each person feels about it.",
    dimension: "TF",
    direction: "T",
  },
  {
    id: "q8",
    question: "You find it hard to give critical feedback to a peer if you think it might hurt their feelings, even when the feedback is objectively necessary.",
    dimension: "TF",
    direction: "F", // Agree → Feeling
  },
  {
    id: "q9",
    question: "When choosing a tech stack for a team project, you lean toward whichever option the team members seem most excited and motivated about.",
    dimension: "TF",
    direction: "F",
  },

  // ─── J / P  (3 questions) ───────────────────────────────────────
  {
    id: "q10",
    question: "You usually create a detailed plan or schedule before starting any multi-day task, and feel uneasy without one.",
    dimension: "JP",
    direction: "J",
  },
  {
    id: "q11",
    question: "You'd rather keep your options open and explore different technologies than commit to one stack early on in a project.",
    dimension: "JP",
    direction: "P", // Agree → Perceiving
  },
  {
    id: "q12",
    question: "You prefer to finish one task completely before starting the next, rather than juggling several tasks at once.",
    dimension: "JP",
    direction: "J",
  },
];

/** The 5-point Likert scale options */
export const likertOptions = [
  { label: "Strongly Disagree", value: 1 },
  { label: "Disagree", value: 2 },
  { label: "Neutral", value: 3 },
  { label: "Agree", value: 4 },
  { label: "Strongly Agree", value: 5 },
] as const;

export const hollandOptions: HollandOption[] = [
  { id: "h1", label: "Builder", description: "I enjoy working with tools, machines, or physical materials", code: "R", icon: "Wrench" },
  { id: "h2", label: "Thinker", description: "I love solving complex problems and understanding how things work", code: "I", icon: "Brain" },
  { id: "h3", label: "Creator", description: "I express myself through design, writing, or creative projects", code: "A", icon: "Palette" },
  { id: "h4", label: "Helper", description: "I enjoy teaching, mentoring, or working closely with people", code: "S", icon: "Heart" },
  { id: "h5", label: "Leader", description: "I like taking charge, managing projects, and persuading others", code: "E", icon: "Crown" },
  { id: "h6", label: "Organizer", description: "I prefer structured tasks, data analysis, and systematic workflows", code: "C", icon: "LayoutGrid" },
];

export const learningStyleOptions: LearningStyleOption[] = [
  { id: "ls1", label: "Video Tutorials", description: "I learn best by watching step-by-step video walkthroughs", style: "visual", icon: "Play" },
  { id: "ls2", label: "Reading Documentation", description: "I prefer official docs, articles, and written guides", style: "reading", icon: "BookOpen" },
  { id: "ls3", label: "Hands-On Projects", description: "I learn by building real projects from scratch", style: "kinesthetic", icon: "Hammer" },
  { id: "ls4", label: "Interactive Courses", description: "I like structured courses with exercises and quizzes", style: "interactive", icon: "GraduationCap" },
];

export const personalityMappings: PersonalityMapping[] = [
  { mbtiType: "INTJ", hollandCodes: ["I", "C"], recommendedPaths: ["system-design", "machine-learning", "backend"], description: "The Architect — You excel at building complex systems and strategic planning. Your analytical mind and vision make you perfect for system design and ML." },
  { mbtiType: "INTP", hollandCodes: ["I", "A"], recommendedPaths: ["machine-learning", "dsa", "deep-learning"], description: "The Logician — Your love for abstract thinking and problem-solving makes you a natural for algorithms, ML theory, and research." },
  { mbtiType: "ENTJ", hollandCodes: ["E", "I"], recommendedPaths: ["fullstack", "cloud-computing", "devops"], description: "The Commander — You're a natural leader who thrives in full-stack and DevOps roles where you can architect and ship complete systems." },
  { mbtiType: "ENTP", hollandCodes: ["I", "E"], recommendedPaths: ["generative-ai", "blockchain", "fullstack"], description: "The Debater — Your innovative thinking and love for new ideas make you perfect for emerging tech and full-stack experimentation." },
  { mbtiType: "INFJ", hollandCodes: ["S", "A"], recommendedPaths: ["frontend", "nlp", "open-source"], description: "The Advocate — Your empathy and vision make you great at building user-centric interfaces and contributing to meaningful open-source projects." },
  { mbtiType: "INFP", hollandCodes: ["A", "S"], recommendedPaths: ["frontend", "game-development", "ar-vr"], description: "The Mediator — Your creativity and idealism drive you toward beautiful interfaces, game worlds, and immersive experiences." },
  { mbtiType: "ENFJ", hollandCodes: ["S", "E"], recommendedPaths: ["frontend", "open-source", "interview-prep"], description: "The Protagonist — Your charisma and people skills make you excel in community-driven development and leadership roles." },
  { mbtiType: "ENFP", hollandCodes: ["A", "E"], recommendedPaths: ["cross-platform", "generative-ai", "freelancing"], description: "The Campaigner — Your enthusiasm and creativity make you great at cross-platform development and indie projects." },
  { mbtiType: "ISTJ", hollandCodes: ["C", "R"], recommendedPaths: ["backend", "database-engineering", "devops"], description: "The Logistician — Your reliability and attention to detail make you excel in backend systems, databases, and DevOps pipelines." },
  { mbtiType: "ISFJ", hollandCodes: ["S", "C"], recommendedPaths: ["frontend", "application-security", "data-science"], description: "The Defender — Your dedication to quality and helping others makes you great at secure, user-friendly applications." },
  { mbtiType: "ESTJ", hollandCodes: ["E", "C"], recommendedPaths: ["devops", "cloud-computing", "system-design"], description: "The Executive — Your organizational skills and decisiveness make you a natural DevOps engineer and cloud architect." },
  { mbtiType: "ESFJ", hollandCodes: ["S", "E"], recommendedPaths: ["frontend", "cross-platform", "open-source"], description: "The Consul — Your sociability and desire to help make you great at building applications that serve communities." },
  { mbtiType: "ISTP", hollandCodes: ["R", "I"], recommendedPaths: ["ethical-hacking", "embedded-systems", "docker-kubernetes"], description: "The Virtuoso — Your hands-on problem-solving makes you a natural hacker, tinkerer, and systems engineer." },
  { mbtiType: "ISFP", hollandCodes: ["A", "R"], recommendedPaths: ["frontend", "game-development", "android"], description: "The Adventurer — Your aesthetic sense and practical skills make you great at crafting beautiful apps and games." },
  { mbtiType: "ESTP", hollandCodes: ["R", "E"], recommendedPaths: ["fullstack", "ethical-hacking", "freelancing"], description: "The Entrepreneur — Your boldness and practical thinking make you excel at rapid prototyping and security testing." },
  { mbtiType: "ESFP", hollandCodes: ["A", "S"], recommendedPaths: ["frontend", "cross-platform", "game-development"], description: "The Entertainer — Your energy and creativity drive you toward engaging user experiences and interactive applications." },
];

/**
 * Compute MBTI type from Likert-scale answers.
 * 
 * Each answer is a value 1-5 (Strongly Disagree to Strongly Agree).
 * We convert to a signed score: 1→-2, 2→-1, 3→0, 4→+1, 5→+2.
 * If the question's `direction` matches the FIRST letter of the dimension (E, S, T, J),
 * a positive score counts toward that letter. If `direction` matches the SECOND letter
 * (I, N, F, P), we flip the sign so Agree counts toward the second letter.
 * 
 * Sum per dimension → positive = first letter, negative = second letter, 0 = first.
 */
export function computeMBTI(answers: Record<string, number>): string {
  const dimensions: Record<string, number> = { EI: 0, SN: 0, TF: 0, JP: 0 };
  const firstLetter: Record<string, string> = { EI: "E", SN: "S", TF: "T", JP: "J" };
  const secondLetter: Record<string, string> = { EI: "I", SN: "N", TF: "F", JP: "P" };

  for (const q of mbtiQuestions) {
    const raw = answers[q.id];
    if (raw === undefined) continue;

    // Convert 1-5 to -2 to +2
    const signed = raw - 3;

    // If the question's direction matches the first letter (E, S, T, J),
    // positive signed means "toward first letter". If direction matches second
    // letter (I, N, F, P), flip so agree → second letter.
    if (q.direction === firstLetter[q.dimension]) {
      dimensions[q.dimension] += signed;
    } else {
      dimensions[q.dimension] -= signed;
    }
  }

  const ei = dimensions.EI >= 0 ? "E" : "I";
  const sn = dimensions.SN >= 0 ? "S" : "N";
  const tf = dimensions.TF >= 0 ? "T" : "F";
  const jp = dimensions.JP >= 0 ? "J" : "P";
  return `${ei}${sn}${tf}${jp}`;
}

export function getPersonalityMapping(mbtiType: string): PersonalityMapping {
  return personalityMappings.find((p) => p.mbtiType === mbtiType) || personalityMappings[0];
}
