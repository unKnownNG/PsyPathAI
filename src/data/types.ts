// Types for the entire application

export interface Resource {
  title: string;
  url: string;
  type: "article" | "video" | "course" | "docs" | "tool";
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  timeEstimate: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  resources: Resource[];
  details: string;
}

export interface Phase {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
}

export interface SubPath {
  id: string;
  slug: string;
  name: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  tags: string[];
  phases: Phase[];
  icon: string;
}

export interface Domain {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  subPaths: SubPath[];
  comingSoon?: boolean;
}

export interface QuizQuestion {
  id: string;
  /** The scenario-based question text (behavioral, not self-descriptive) */
  question: string;
  /** Which MBTI dimension this question measures */
  dimension: "EI" | "SN" | "TF" | "JP";
  /** 
   * Which pole a HIGH score (Strongly Agree) maps to.
   * e.g. direction "E" means Agree → Extraversion, Disagree → Introversion.
   * Used for reverse-coded questions too (direction "I" flips the scoring).
   */
  direction: string;
}

export interface HollandOption {
  id: string;
  label: string;
  description: string;
  code: string;
  icon: string;
}

export interface LearningStyleOption {
  id: string;
  label: string;
  description: string;
  style: string;
  icon: string;
}

export interface PersonalityMapping {
  mbtiType: string;
  hollandCodes: string[];
  recommendedPaths: string[];
  description: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "bot";
  content: string;
  milestones?: string[];
  resources?: Resource[];
  timestamp: string;
}

export interface UserProfile {
  year: string;
  goal: string;
  hoursPerWeek: string;
  mbtiType: string;
  hollandCode: string;
  learningStyle: string;
  recommendedPaths: string[];
}
