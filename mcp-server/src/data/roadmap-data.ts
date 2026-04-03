/**
 * Simplified roadmap data for the MCP server.
 * Contains domain → subpath → phase → topic structure
 * mirroring the frontend's roadmaps.ts but without React-specific imports.
 */

export interface RoadmapTopic {
  id: string;
  name: string;
  description: string;
  timeEstimate: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export interface RoadmapPhase {
  id: string;
  title: string;
  description: string;
  topics: RoadmapTopic[];
}

export interface RoadmapSubPath {
  slug: string;
  name: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  tags: string[];
  phases: RoadmapPhase[];
}

export interface RoadmapDomain {
  slug: string;
  name: string;
  subPaths: RoadmapSubPath[];
}

export const roadmapData: RoadmapDomain[] = [
  {
    slug: "web-development", name: "Web Development",
    subPaths: [
      {
        slug: "frontend", name: "Frontend Development", difficulty: "Beginner", estimatedTime: "6-8 months", tags: ["React", "TypeScript", "CSS", "UI/UX"],
        phases: [
          { id: "fe-p1", title: "Foundation", description: "Core web technologies", topics: [
            { id: "fe-t1", name: "HTML5 & Semantic Markup", description: "Learn the building blocks of the web", timeEstimate: "2 weeks", difficulty: "Beginner" },
            { id: "fe-t2", name: "CSS3 & Responsive Design", description: "Style and layout mastery", timeEstimate: "3 weeks", difficulty: "Beginner" },
            { id: "fe-t3", name: "JavaScript Fundamentals", description: "Programming the web", timeEstimate: "4 weeks", difficulty: "Beginner" },
          ]},
          { id: "fe-p2", title: "Framework Mastery", description: "Modern frontend frameworks", topics: [
            { id: "fe-t4", name: "React.js", description: "Component-based UI library", timeEstimate: "4 weeks", difficulty: "Intermediate" },
            { id: "fe-t5", name: "TypeScript", description: "Type-safe JavaScript", timeEstimate: "2 weeks", difficulty: "Intermediate" },
            { id: "fe-t6", name: "Next.js", description: "React meta-framework", timeEstimate: "3 weeks", difficulty: "Intermediate" },
          ]},
          { id: "fe-p3", title: "Advanced & Professional", description: "Production-ready skills", topics: [
            { id: "fe-t7", name: "Testing & Quality", description: "Ensure code reliability", timeEstimate: "2 weeks", difficulty: "Advanced" },
            { id: "fe-t8", name: "Performance Optimization", description: "Fast web experiences", timeEstimate: "2 weeks", difficulty: "Advanced" },
          ]},
        ],
      },
      {
        slug: "backend", name: "Backend Development", difficulty: "Intermediate", estimatedTime: "6-9 months", tags: ["Node.js", "APIs", "Databases", "Auth"],
        phases: [
          { id: "be-p1", title: "Foundation", description: "Server-side basics", topics: [
            { id: "be-t1", name: "Node.js & Express", description: "JavaScript on the server", timeEstimate: "3 weeks", difficulty: "Beginner" },
            { id: "be-t2", name: "Databases (SQL & NoSQL)", description: "Data persistence", timeEstimate: "3 weeks", difficulty: "Intermediate" },
            { id: "be-t3", name: "Authentication & Authorization", description: "Secure user systems", timeEstimate: "2 weeks", difficulty: "Intermediate" },
          ]},
          { id: "be-p2", title: "Advanced Backend", description: "Scalable architecture", topics: [
            { id: "be-t4", name: "API Design & GraphQL", description: "Modern API patterns", timeEstimate: "3 weeks", difficulty: "Intermediate" },
            { id: "be-t5", name: "Caching & Message Queues", description: "Performance at scale", timeEstimate: "2 weeks", difficulty: "Advanced" },
          ]},
        ],
      },
      {
        slug: "fullstack", name: "Full Stack Development", difficulty: "Advanced", estimatedTime: "10-14 months", tags: ["React", "Node.js", "Full Stack", "Deployment"],
        phases: [
          { id: "fs-p1", title: "The Full Picture", description: "End-to-end development", topics: [
            { id: "fs-t1", name: "Full Stack Architecture", description: "Connecting all pieces", timeEstimate: "3 weeks", difficulty: "Intermediate" },
            { id: "fs-t2", name: "DevOps for Full Stack", description: "Deployment & CI/CD", timeEstimate: "2 weeks", difficulty: "Advanced" },
          ]},
        ],
      },
    ],
  },
  {
    slug: "app-development", name: "App Development",
    subPaths: [
      { slug: "android", name: "Android (Kotlin)", difficulty: "Intermediate", estimatedTime: "6-8 months", tags: ["Kotlin", "Jetpack", "Material Design"], phases: [
        { id: "an-p1", title: "Kotlin & Android Basics", description: "Getting started with Android", topics: [
          { id: "an-t1", name: "Kotlin Fundamentals", description: "Modern JVM language", timeEstimate: "3 weeks", difficulty: "Beginner" },
          { id: "an-t2", name: "Jetpack Compose", description: "Declarative UI toolkit", timeEstimate: "4 weeks", difficulty: "Intermediate" },
        ]},
      ]},
      { slug: "ios", name: "iOS (Swift)", difficulty: "Intermediate", estimatedTime: "6-8 months", tags: ["Swift", "SwiftUI", "Xcode"], phases: [
        { id: "ios-p1", title: "Swift & iOS Basics", description: "Apple ecosystem development", topics: [
          { id: "ios-t1", name: "Swift Programming", description: "Apple's modern language", timeEstimate: "3 weeks", difficulty: "Beginner" },
          { id: "ios-t2", name: "SwiftUI", description: "Declarative UI framework", timeEstimate: "4 weeks", difficulty: "Intermediate" },
        ]},
      ]},
      { slug: "cross-platform", name: "Cross Platform", difficulty: "Intermediate", estimatedTime: "5-7 months", tags: ["Flutter", "React Native", "Dart"], phases: [
        { id: "cp-p1", title: "Cross-Platform Basics", description: "One codebase, multiple platforms", topics: [
          { id: "cp-t1", name: "Flutter & Dart", description: "Google's UI toolkit", timeEstimate: "4 weeks", difficulty: "Beginner" },
          { id: "cp-t2", name: "React Native", description: "React for mobile", timeEstimate: "3 weeks", difficulty: "Intermediate" },
        ]},
      ]},
    ],
  },
  {
    slug: "ai-machine-learning", name: "AI & Machine Learning",
    subPaths: [
      { slug: "machine-learning", name: "Machine Learning", difficulty: "Intermediate", estimatedTime: "4-6 months", tags: ["Python", "Scikit-learn", "Statistics"], phases: [
        { id: "ml-p1", title: "ML Foundations", description: "Core algorithms", topics: [
          { id: "ml-t1", name: "Python for ML", description: "NumPy, Pandas, Matplotlib", timeEstimate: "2 weeks", difficulty: "Beginner" },
          { id: "ml-t2", name: "Supervised Learning", description: "Regression & Classification", timeEstimate: "4 weeks", difficulty: "Intermediate" },
        ]},
      ]},
      { slug: "deep-learning", name: "Deep Learning", difficulty: "Advanced", estimatedTime: "5-8 months", tags: ["PyTorch", "TensorFlow", "Neural Networks"], phases: [
        { id: "dl-p1", title: "Neural Network Basics", description: "Deep learning foundations", topics: [
          { id: "dl-t1", name: "Neural Networks from Scratch", description: "Understand the math", timeEstimate: "3 weeks", difficulty: "Intermediate" },
        ]},
      ]},
      { slug: "nlp", name: "Natural Language Processing", difficulty: "Advanced", estimatedTime: "5-7 months", tags: ["Transformers", "BERT", "spaCy"], phases: [
        { id: "nlp-p1", title: "NLP Basics", description: "Text processing", topics: [
          { id: "nlp-t1", name: "Text Preprocessing", description: "Tokenization & embeddings", timeEstimate: "2 weeks", difficulty: "Intermediate" },
        ]},
      ]},
      { slug: "computer-vision", name: "Computer Vision", difficulty: "Advanced", estimatedTime: "5-7 months", tags: ["OpenCV", "CNNs", "YOLO"], phases: [
        { id: "cv-p1", title: "Vision Basics", description: "Image processing", topics: [
          { id: "cv-t1", name: "Image Processing with OpenCV", description: "Fundamentals of CV", timeEstimate: "3 weeks", difficulty: "Intermediate" },
        ]},
      ]},
      { slug: "generative-ai", name: "Generative AI & LLMs", difficulty: "Advanced", estimatedTime: "3-5 months", tags: ["GPT", "LangChain", "RAG"], phases: [
        { id: "ga-p1", title: "GenAI Foundations", description: "LLMs and applications", topics: [
          { id: "ga-t1", name: "Prompt Engineering", description: "Effective AI communication", timeEstimate: "1 week", difficulty: "Beginner" },
          { id: "ga-t2", name: "Building with LLM APIs", description: "AI-powered applications", timeEstimate: "3 weeks", difficulty: "Intermediate" },
        ]},
      ]},
    ],
  },
  {
    slug: "data", name: "Data",
    subPaths: [
      { slug: "data-science", name: "Data Science", difficulty: "Intermediate", estimatedTime: "6-8 months", tags: ["Python", "Statistics", "Visualization"], phases: [
        { id: "ds-p1", title: "Data Science Essentials", description: "Analysis foundations", topics: [
          { id: "ds-t1", name: "Statistics & Probability", description: "Mathematical foundations", timeEstimate: "3 weeks", difficulty: "Beginner" },
        ]},
      ]},
      { slug: "data-engineering", name: "Data Engineering", difficulty: "Advanced", estimatedTime: "6-9 months", tags: ["SQL", "Spark", "Airflow"], phases: [
        { id: "de-p1", title: "Data Engineering Basics", description: "Pipeline foundations", topics: [
          { id: "de-t1", name: "SQL Mastery", description: "Advanced SQL skills", timeEstimate: "3 weeks", difficulty: "Intermediate" },
        ]},
      ]},
      { slug: "mlops", name: "MLOps", difficulty: "Advanced", estimatedTime: "4-6 months", tags: ["Docker", "MLflow", "Kubernetes"], phases: [
        { id: "mo-p1", title: "MLOps Fundamentals", description: "ML in production", topics: [
          { id: "mo-t1", name: "Model Deployment", description: "Serving ML models", timeEstimate: "3 weeks", difficulty: "Advanced" },
        ]},
      ]},
    ],
  },
  {
    slug: "cloud-devops", name: "Cloud & DevOps",
    subPaths: [
      { slug: "cloud-computing", name: "Cloud Computing", difficulty: "Intermediate", estimatedTime: "4-6 months", tags: ["AWS", "GCP", "Azure"], phases: [
        { id: "cl-p1", title: "Cloud Foundations", description: "Cloud basics", topics: [
          { id: "cl-t1", name: "Cloud Fundamentals", description: "Core cloud concepts", timeEstimate: "2 weeks", difficulty: "Beginner" },
        ]},
      ]},
      { slug: "devops", name: "DevOps & CI/CD", difficulty: "Intermediate", estimatedTime: "4-6 months", tags: ["GitHub Actions", "Jenkins", "Terraform"], phases: [
        { id: "do-p1", title: "DevOps Essentials", description: "Automation fundamentals", topics: [
          { id: "do-t1", name: "Git & Version Control", description: "Collaboration fundamentals", timeEstimate: "1 week", difficulty: "Beginner" },
        ]},
      ]},
      { slug: "docker-kubernetes", name: "Docker & Kubernetes", difficulty: "Advanced", estimatedTime: "3-5 months", tags: ["Docker", "K8s", "Helm"], phases: [
        { id: "dk-p1", title: "Container Basics", description: "Containerization", topics: [
          { id: "dk-t1", name: "Docker Fundamentals", description: "Container basics", timeEstimate: "2 weeks", difficulty: "Beginner" },
        ]},
      ]},
    ],
  },
  {
    slug: "cybersecurity", name: "Cybersecurity",
    subPaths: [
      { slug: "ethical-hacking", name: "Ethical Hacking", difficulty: "Intermediate", estimatedTime: "5-7 months", tags: ["Kali Linux", "Pentesting", "OWASP"], phases: [
        { id: "eh-p1", title: "Hacking Fundamentals", description: "Security basics", topics: [
          { id: "eh-t1", name: "Linux & Networking", description: "Foundation skills", timeEstimate: "3 weeks", difficulty: "Beginner" },
        ]},
      ]},
      { slug: "application-security", name: "Application Security", difficulty: "Advanced", estimatedTime: "4-6 months", tags: ["OWASP", "SAST", "DAST"], phases: [
        { id: "as-p1", title: "AppSec Basics", description: "Secure coding", topics: [
          { id: "as-t1", name: "OWASP Top 10", description: "Common vulnerabilities", timeEstimate: "2 weeks", difficulty: "Intermediate" },
        ]},
      ]},
      { slug: "network-security", name: "Network Security", difficulty: "Advanced", estimatedTime: "5-7 months", tags: ["Firewalls", "IDS", "VPN"], phases: [
        { id: "ns-p1", title: "Network Defense", description: "Infrastructure security", topics: [
          { id: "ns-t1", name: "Firewall & IDS", description: "Network protection", timeEstimate: "3 weeks", difficulty: "Intermediate" },
        ]},
      ]},
    ],
  },
  {
    slug: "core-cs", name: "Core CS",
    subPaths: [
      { slug: "dsa", name: "DSA & Competitive Programming", difficulty: "Intermediate", estimatedTime: "6-12 months", tags: ["LeetCode", "Codeforces", "Algorithms"], phases: [
        { id: "dsa-p1", title: "DSA Foundations", description: "Core data structures", topics: [
          { id: "dsa-t1", name: "Arrays, Strings & Hashing", description: "Fundamental structures", timeEstimate: "3 weeks", difficulty: "Beginner" },
        ]},
      ]},
      { slug: "system-design", name: "System Design", difficulty: "Advanced", estimatedTime: "3-5 months", tags: ["Scalability", "Distributed Systems", "Architecture"], phases: [
        { id: "sd-p1", title: "System Design Basics", description: "Scalability fundamentals", topics: [
          { id: "sd-t1", name: "Scalability Concepts", description: "Building for scale", timeEstimate: "2 weeks", difficulty: "Intermediate" },
        ]},
      ]},
      { slug: "database-engineering", name: "Database Engineering", difficulty: "Advanced", estimatedTime: "3-5 months", tags: ["SQL", "NoSQL", "Indexing"], phases: [
        { id: "dbe-p1", title: "Database Deep Dive", description: "DB internals", topics: [
          { id: "dbe-t1", name: "Database Internals", description: "How databases work", timeEstimate: "3 weeks", difficulty: "Advanced" },
        ]},
      ]},
      { slug: "os-linux", name: "Operating Systems & Linux", difficulty: "Intermediate", estimatedTime: "3-4 months", tags: ["Linux", "Processes", "Memory"], phases: [
        { id: "os-p1", title: "OS Fundamentals", description: "Operating system concepts", topics: [
          { id: "os-t1", name: "Processes & Threads", description: "CPU management", timeEstimate: "2 weeks", difficulty: "Intermediate" },
        ]},
      ]},
    ],
  },
  {
    slug: "emerging-tech", name: "Emerging Tech",
    subPaths: [
      { slug: "blockchain", name: "Blockchain & Web3", difficulty: "Advanced", estimatedTime: "4-6 months", tags: ["Solidity", "Ethereum", "DeFi"], phases: [
        { id: "bc-p1", title: "Web3 Basics", description: "Blockchain foundations", topics: [
          { id: "bc-t1", name: "Blockchain Fundamentals", description: "How blockchains work", timeEstimate: "2 weeks", difficulty: "Beginner" },
        ]},
      ]},
      { slug: "game-development", name: "Game Development", difficulty: "Intermediate", estimatedTime: "6-10 months", tags: ["Unity", "C#", "Game Design"], phases: [
        { id: "gd-p1", title: "Game Dev Basics", description: "Game development foundations", topics: [
          { id: "gd-t1", name: "Game Engines Overview", description: "Choosing your engine", timeEstimate: "1 week", difficulty: "Beginner" },
        ]},
      ]},
      { slug: "ar-vr", name: "AR / VR", difficulty: "Advanced", estimatedTime: "5-8 months", tags: ["Unity XR", "ARCore", "WebXR"], phases: [
        { id: "ar-p1", title: "XR Basics", description: "Immersive development", topics: [
          { id: "ar-t1", name: "XR Development Basics", description: "AR & VR concepts", timeEstimate: "3 weeks", difficulty: "Intermediate" },
        ]},
      ]},
      { slug: "iot", name: "IoT & Embedded Systems", difficulty: "Intermediate", estimatedTime: "4-6 months", tags: ["Arduino", "Raspberry Pi", "MQTT"], phases: [
        { id: "iot-p1", title: "IoT Basics", description: "Connected devices", topics: [
          { id: "iot-t1", name: "Microcontrollers & Sensors", description: "Hardware programming", timeEstimate: "3 weeks", difficulty: "Beginner" },
        ]},
      ]},
      { slug: "robotics", name: "Robotics", difficulty: "Advanced", estimatedTime: "6-10 months", tags: ["ROS", "Python", "Control Systems"], phases: [
        { id: "rb-p1", title: "Robotics Basics", description: "Robot fundamentals", topics: [
          { id: "rb-t1", name: "ROS Fundamentals", description: "Robot Operating System", timeEstimate: "4 weeks", difficulty: "Intermediate" },
        ]},
      ]},
    ],
  },
  {
    slug: "career-paths", name: "Career & Soft Paths",
    subPaths: [
      { slug: "open-source", name: "Open Source Contribution", difficulty: "Beginner", estimatedTime: "2-4 months", tags: ["Git", "GitHub", "Community"], phases: [
        { id: "oss-p1", title: "Open Source 101", description: "Getting started", topics: [
          { id: "oss-t1", name: "Finding Projects", description: "Where to start", timeEstimate: "1 week", difficulty: "Beginner" },
        ]},
      ]},
      { slug: "research", name: "Research & MS/PhD Path", difficulty: "Advanced", estimatedTime: "6-12 months", tags: ["Research", "Publications", "GRE"], phases: [
        { id: "res-p1", title: "Research Prep", description: "Academic preparation", topics: [
          { id: "res-t1", name: "Research Methodology", description: "How to do research", timeEstimate: "4 weeks", difficulty: "Intermediate" },
        ]},
      ]},
      { slug: "interview-prep", name: "Interview Prep (FAANG/SWE)", difficulty: "Intermediate", estimatedTime: "3-6 months", tags: ["LeetCode", "System Design", "Behavioral"], phases: [
        { id: "int-p1", title: "Interview Strategy", description: "Preparation plan", topics: [
          { id: "int-t1", name: "DSA Problem Patterns", description: "Common interview patterns", timeEstimate: "6 weeks", difficulty: "Intermediate" },
        ]},
      ]},
      { slug: "freelancing", name: "Freelancing & Indie Hacking", difficulty: "Beginner", estimatedTime: "3-5 months", tags: ["Portfolio", "Clients", "SaaS"], phases: [
        { id: "fr-p1", title: "Freelance Foundations", description: "Going independent", topics: [
          { id: "fr-t1", name: "Building Your Portfolio", description: "Showcase your work", timeEstimate: "2 weeks", difficulty: "Beginner" },
        ]},
      ]},
    ],
  },
  {
    slug: "hardware-embedded", name: "Hardware & Embedded",
    subPaths: [
      { slug: "embedded-systems", name: "Embedded Systems & VLSI", difficulty: "Intermediate", estimatedTime: "6-10 months", tags: ["C/C++", "RTOS", "VLSI", "ARM"], phases: [
        { id: "emb-p1", title: "Embedded Foundations", description: "Core embedded concepts", topics: [
          { id: "emb-t1", name: "C/C++ for Embedded", description: "Low-level programming", timeEstimate: "3 weeks", difficulty: "Beginner" },
          { id: "emb-t2", name: "Microcontroller Programming", description: "ARM, AVR, and peripherals", timeEstimate: "4 weeks", difficulty: "Intermediate" },
          { id: "emb-t3", name: "RTOS Concepts", description: "Real-time operating systems", timeEstimate: "3 weeks", difficulty: "Intermediate" },
        ]},
        { id: "emb-p2", title: "Advanced Embedded", description: "Production firmware", topics: [
          { id: "emb-t4", name: "Communication Protocols", description: "I2C, SPI, UART, CAN", timeEstimate: "2 weeks", difficulty: "Intermediate" },
          { id: "emb-t5", name: "VLSI & Digital Design", description: "HDL, FPGA, ASIC basics", timeEstimate: "4 weeks", difficulty: "Advanced" },
          { id: "emb-t6", name: "Embedded Linux", description: "Yocto, Buildroot, drivers", timeEstimate: "3 weeks", difficulty: "Advanced" },
        ]},
      ]},
    ],
  },
  {
    slug: "interdisciplinary", name: "Interdisciplinary & Non-Traditional",
    subPaths: [
      { slug: "product-management", name: "Product Management", difficulty: "Intermediate", estimatedTime: "4-6 months", tags: ["Strategy", "Roadmapping", "Analytics", "Agile"], phases: [
        { id: "pm-p1", title: "PM Foundations", description: "Core product skills", topics: [
          { id: "pm-t1", name: "Product Thinking & Strategy", description: "Identifying problems and defining solutions", timeEstimate: "2 weeks", difficulty: "Beginner" },
          { id: "pm-t2", name: "User Research & Validation", description: "Interviews, surveys, and MVPs", timeEstimate: "3 weeks", difficulty: "Intermediate" },
          { id: "pm-t3", name: "Roadmapping & Prioritization", description: "RICE, MoSCoW, and backlog management", timeEstimate: "2 weeks", difficulty: "Intermediate" },
          { id: "pm-t4", name: "Analytics & Metrics", description: "KPIs, funnels, A/B testing", timeEstimate: "2 weeks", difficulty: "Intermediate" },
        ]},
      ]},
      { slug: "ux-research", name: "UX Research & Design", difficulty: "Beginner", estimatedTime: "4-7 months", tags: ["Figma", "User Research", "Prototyping", "Design Systems"], phases: [
        { id: "ux-p1", title: "UX Foundations", description: "Design thinking and research", topics: [
          { id: "ux-t1", name: "Design Thinking", description: "Empathize, define, ideate, prototype, test", timeEstimate: "2 weeks", difficulty: "Beginner" },
          { id: "ux-t2", name: "User Research Methods", description: "Interviews, usability testing, personas", timeEstimate: "3 weeks", difficulty: "Beginner" },
          { id: "ux-t3", name: "Wireframing & Prototyping", description: "Figma, low-fi and hi-fi mockups", timeEstimate: "3 weeks", difficulty: "Intermediate" },
          { id: "ux-t4", name: "Design Systems", description: "Component libraries and design tokens", timeEstimate: "2 weeks", difficulty: "Intermediate" },
        ]},
      ]},
      { slug: "technical-writing", name: "Technical Writing", difficulty: "Beginner", estimatedTime: "2-4 months", tags: ["Documentation", "API Docs", "Tutorials", "Markdown"], phases: [
        { id: "tw-p1", title: "Writing Foundations", description: "Core technical writing skills", topics: [
          { id: "tw-t1", name: "Writing for Developers", description: "Clarity, structure, and audience", timeEstimate: "2 weeks", difficulty: "Beginner" },
          { id: "tw-t2", name: "API & SDK Documentation", description: "Reference docs, guides, and examples", timeEstimate: "3 weeks", difficulty: "Intermediate" },
          { id: "tw-t3", name: "Tutorials & Blog Posts", description: "Teaching through written content", timeEstimate: "2 weeks", difficulty: "Beginner" },
        ]},
      ]},
      { slug: "developer-advocacy", name: "Developer Advocacy & DevRel", difficulty: "Intermediate", estimatedTime: "3-5 months", tags: ["Public Speaking", "Community", "Content Creation", "Teaching"], phases: [
        { id: "da-p1", title: "DevRel Foundations", description: "Building developer communities", topics: [
          { id: "da-t1", name: "Community Building", description: "Growing and nurturing dev communities", timeEstimate: "2 weeks", difficulty: "Beginner" },
          { id: "da-t2", name: "Technical Content Creation", description: "Blog posts, videos, and demos", timeEstimate: "3 weeks", difficulty: "Intermediate" },
          { id: "da-t3", name: "Public Speaking & Workshops", description: "Conference talks and live coding", timeEstimate: "3 weeks", difficulty: "Intermediate" },
        ]},
      ]},
      { slug: "quant-finance", name: "Quantitative Finance & FinTech", difficulty: "Advanced", estimatedTime: "6-10 months", tags: ["Python", "Statistics", "Trading", "Risk Modeling"], phases: [
        { id: "qf-p1", title: "Quant Foundations", description: "Mathematical finance basics", topics: [
          { id: "qf-t1", name: "Probability & Statistics for Finance", description: "Distributions, hypothesis testing, time series", timeEstimate: "3 weeks", difficulty: "Intermediate" },
          { id: "qf-t2", name: "Financial Markets & Instruments", description: "Equities, derivatives, fixed income", timeEstimate: "2 weeks", difficulty: "Beginner" },
          { id: "qf-t3", name: "Algorithmic Trading", description: "Backtesting, strategies, execution", timeEstimate: "4 weeks", difficulty: "Advanced" },
          { id: "qf-t4", name: "Risk Modeling & Portfolio Theory", description: "VaR, Monte Carlo, optimization", timeEstimate: "3 weeks", difficulty: "Advanced" },
        ]},
      ]},
      { slug: "tech-consulting", name: "Tech Consulting", difficulty: "Intermediate", estimatedTime: "3-5 months", tags: ["Strategy", "Presentations", "Case Studies", "Client Management"], phases: [
        { id: "tc-p1", title: "Consulting Foundations", description: "Tech consulting essentials", topics: [
          { id: "tc-t1", name: "Problem Structuring", description: "Frameworks, MECE, issue trees", timeEstimate: "2 weeks", difficulty: "Beginner" },
          { id: "tc-t2", name: "Tech Strategy & Digital Transformation", description: "Cloud migration, modernization, architecture reviews", timeEstimate: "3 weeks", difficulty: "Intermediate" },
          { id: "tc-t3", name: "Client Communication", description: "Stakeholder management and presentation skills", timeEstimate: "2 weeks", difficulty: "Intermediate" },
        ]},
      ]},
      { slug: "ai-ethics-policy", name: "AI Ethics & Policy", difficulty: "Intermediate", estimatedTime: "3-5 months", tags: ["Ethics", "Regulation", "Fairness", "Governance"], phases: [
        { id: "ae-p1", title: "AI Ethics Foundations", description: "Responsible AI development", topics: [
          { id: "ae-t1", name: "Bias, Fairness & Accountability", description: "Identifying and mitigating AI bias", timeEstimate: "3 weeks", difficulty: "Intermediate" },
          { id: "ae-t2", name: "AI Regulation & Governance", description: "EU AI Act, NIST framework, global landscape", timeEstimate: "2 weeks", difficulty: "Intermediate" },
          { id: "ae-t3", name: "Responsible AI in Practice", description: "Model cards, impact assessments, transparency", timeEstimate: "2 weeks", difficulty: "Intermediate" },
        ]},
      ]},
    ],
  },
];

/**
 * Find a subpath by its slug across all domains.
 */
export function findSubPath(pathSlug: string): { domain: RoadmapDomain; subPath: RoadmapSubPath } | null {
  for (const domain of roadmapData) {
    for (const sp of domain.subPaths) {
      if (sp.slug === pathSlug) {
        return { domain, subPath: sp };
      }
    }
  }
  return null;
}

/**
 * Get all topic IDs for a given subpath.
 */
export function getAllTopicIds(pathSlug: string): string[] {
  const result = findSubPath(pathSlug);
  if (!result) return [];
  return result.subPath.phases.flatMap((p) => p.topics.map((t) => t.id));
}
