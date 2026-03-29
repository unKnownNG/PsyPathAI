import { ChatMessage } from "./types";

export const mockChatMessages: ChatMessage[] = [
  {
    id: "m1", role: "bot", timestamp: "10:00 AM",
    content: "Hey there! 👋 I'm CareerBot, your AI career advisor. I see you're interested in tech — let me help you find the perfect path! What area of engineering interests you most?",
  },
  {
    id: "m2", role: "user", timestamp: "10:01 AM",
    content: "I'm a 2nd year CS student. I like building things and I'm curious about AI, but I also enjoy web development. Not sure which path to focus on.",
  },
  {
    id: "m3", role: "bot", timestamp: "10:01 AM",
    content: "Great combo! Since you enjoy both building and AI, you might love **Full Stack AI Development** — combining web dev skills with AI integration. Here's a suggested 6-month milestone plan:",
    milestones: [
      "Month 1-2: Master React & Next.js fundamentals",
      "Month 3: Learn Python basics & ML foundations",
      "Month 4: Build your first AI-powered web app",
      "Month 5: Explore LangChain & RAG pipelines",
      "Month 6: Deploy a portfolio project with AI features",
    ],
    resources: [
      { title: "Full Stack Open", url: "#", type: "course" },
      { title: "Fast.ai Practical ML", url: "#", type: "course" },
      { title: "LangChain Docs", url: "#", type: "docs" },
    ],
  },
  {
    id: "m4", role: "user", timestamp: "10:03 AM",
    content: "That sounds awesome! How should I prepare for internships alongside this?",
  },
  {
    id: "m5", role: "bot", timestamp: "10:03 AM",
    content: "Smart thinking! Here's how to parallel-track internship prep:\n\n🎯 **DSA Practice**: Solve 2-3 LeetCode problems daily (focus on arrays, strings, trees)\n\n📝 **Projects**: Build 2-3 standout projects showcasing both skills\n\n🤝 **Networking**: Contribute to open source and attend meetups\n\n📄 **Resume**: Highlight your unique AI + Web Dev combination",
  },
];

export const suggestedPrompts: string[] = [
  "What career path fits my personality?",
  "Create a 6-month roadmap for AI/ML",
  "How should I prepare for FAANG interviews?",
  "What projects should I build for my portfolio?",
  "Compare frontend vs backend careers",
  "Best resources for learning system design",
];
