import { QuizQuestion, HollandOption, LearningStyleOption, PersonalityMapping } from "./types";

export const mbtiQuestions: QuizQuestion[] = [
  { id: "q1", question: "When working on a group project, you prefer to...", optionA: { text: "Lead the discussion and brainstorm ideas out loud with the team", value: "E" }, optionB: { text: "Research independently and share your findings when ready", value: "I" } },
  { id: "q2", question: "When learning a new programming concept, you find it easier to...", optionA: { text: "Understand the big picture and theoretical framework first", value: "N" }, optionB: { text: "Start with concrete examples and hands-on practice", value: "S" } },
  { id: "q3", question: "When choosing between two tech stacks for a project, you decide based on...", optionA: { text: "Logical analysis of performance, scalability, and community support", value: "T" }, optionB: { text: "Which one the team is more excited about and would enjoy using", value: "F" } },
  { id: "q4", question: "Your ideal project timeline looks like...", optionA: { text: "A detailed plan with milestones, deadlines, and clear deliverables", value: "J" }, optionB: { text: "A flexible roadmap that allows for pivoting and exploration", value: "P" } },
  { id: "q5", question: "At a tech conference or hackathon, you typically...", optionA: { text: "Network actively and attend various sessions and workshops", value: "E" }, optionB: { text: "Focus deeply on one track and connect with a few people meaningfully", value: "I" } },
  { id: "q6", question: "When debugging a complex issue, your first instinct is to...", optionA: { text: "Follow your intuition and look for patterns in the behavior", value: "N" }, optionB: { text: "Systematically check logs, add breakpoints, and trace the execution", value: "S" } },
];

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
  { mbtiType: "ISTP", hollandCodes: ["R", "I"], recommendedPaths: ["ethical-hacking", "iot", "docker-kubernetes"], description: "The Virtuoso — Your hands-on problem-solving makes you a natural hacker, tinkerer, and systems engineer." },
  { mbtiType: "ISFP", hollandCodes: ["A", "R"], recommendedPaths: ["frontend", "game-development", "android"], description: "The Adventurer — Your aesthetic sense and practical skills make you great at crafting beautiful apps and games." },
  { mbtiType: "ESTP", hollandCodes: ["R", "E"], recommendedPaths: ["fullstack", "ethical-hacking", "freelancing"], description: "The Entrepreneur — Your boldness and practical thinking make you excel at rapid prototyping and security testing." },
  { mbtiType: "ESFP", hollandCodes: ["A", "S"], recommendedPaths: ["frontend", "cross-platform", "game-development"], description: "The Entertainer — Your energy and creativity drive you toward engaging user experiences and interactive applications." },
];

export function computeMBTI(answers: Record<string, string>): string {
  const counts: Record<string, number> = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  Object.values(answers).forEach((v) => { counts[v] = (counts[v] || 0) + 1; });
  const ei = counts["E"] >= counts["I"] ? "E" : "I";
  const sn = counts["S"] >= counts["N"] ? "S" : "N";
  const tf = counts["T"] >= counts["F"] ? "T" : "F";
  const jp = counts["J"] >= counts["P"] ? "J" : "P";
  return `${ei}${sn}${tf}${jp}`;
}

export function getPersonalityMapping(mbtiType: string): PersonalityMapping {
  return personalityMappings.find((p) => p.mbtiType === mbtiType) || personalityMappings[0];
}
