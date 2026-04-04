import { Domain, SubPath } from "./types";

export const domains: Domain[] = [
  {
    id: "web-dev", slug: "web-development", name: "Web Development",
    description: "Build modern websites and web applications with cutting-edge frameworks and tools.",
    icon: "Globe", color: "#818cf8",
    subPaths: [
      {
        id: "frontend", slug: "frontend", name: "Frontend Development",
        description: "Master HTML, CSS, JavaScript and modern frameworks to build stunning user interfaces.",
        difficulty: "Beginner", estimatedTime: "6-8 months", icon: "Layout",
        tags: ["React", "TypeScript", "CSS", "UI/UX"],
        phases: [
          {
            id: "fe-p1", title: "Foundation", description: "Core web technologies",
            topics: [
              { id: "fe-t1", name: "HTML5 & Semantic Markup", description: "Learn the building blocks of the web", timeEstimate: "2 weeks", difficulty: "Beginner", details: "Master semantic HTML5 elements, forms, accessibility attributes, and SEO-friendly markup patterns.", resources: [{ title: "MDN HTML Guide", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML", type: "docs" }, { title: "HTML Crash Course — freeCodeCamp", url: "https://www.youtube.com/watch?v=UB1O30fR-EE", type: "video" }, { title: "W3Schools HTML Tutorial", url: "https://www.w3schools.com/html/", type: "course" }] },
              { id: "fe-t2", name: "CSS3 & Responsive Design", description: "Style and layout mastery", timeEstimate: "3 weeks", difficulty: "Beginner", details: "Flexbox, Grid, animations, media queries, and mobile-first design principles.", resources: [{ title: "A Complete Guide to Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/", type: "article" }, { title: "Kevin Powell — Responsive CSS", url: "https://www.youtube.com/watch?v=srvUrASNj0s", type: "video" }, { title: "CSS Grid Garden", url: "https://cssgridgarden.com/", type: "tool" }] },
              { id: "fe-t3", name: "JavaScript Fundamentals", description: "Programming the web", timeEstimate: "4 weeks", difficulty: "Beginner", details: "Variables, functions, DOM manipulation, events, async/await, and ES6+ features.", resources: [{ title: "The Modern JavaScript Tutorial", url: "https://javascript.info/", type: "docs" }, { title: "JS Crash Course — Traversy Media", url: "https://www.youtube.com/watch?v=hdI2bqOjy3c", type: "video" }, { title: "Eloquent JavaScript (free book)", url: "https://eloquentjavascript.net/", type: "article" }] },
            ],
          },
          {
            id: "fe-p2", title: "Framework Mastery", description: "Modern frontend frameworks",
            topics: [
              { id: "fe-t4", name: "React.js", description: "Component-based UI library", timeEstimate: "4 weeks", difficulty: "Intermediate", details: "Components, hooks, state management, routing, and the React ecosystem.", resources: [{ title: "Official React Docs", url: "https://react.dev/", type: "docs" }, { title: "Full React Course — freeCodeCamp", url: "https://www.youtube.com/watch?v=bMknfKXIFA8", type: "video" }, { title: "React Tutorial — Scrimba", url: "https://scrimba.com/learn/learnreact", type: "course" }] },
              { id: "fe-t5", name: "TypeScript", description: "Type-safe JavaScript", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Type system, interfaces, generics, and integration with React.", resources: [{ title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/", type: "docs" }, { title: "TypeScript for React — Jack Herrington", url: "https://www.youtube.com/watch?v=TPACABQTHvM", type: "video" }, { title: "Total TypeScript (free)", url: "https://www.totaltypescript.com/", type: "course" }] },
              { id: "fe-t6", name: "Next.js", description: "React meta-framework", timeEstimate: "3 weeks", difficulty: "Intermediate", details: "SSR, SSG, API routes, App Router, and full-stack React development.", resources: [{ title: "Next.js Official Docs", url: "https://nextjs.org/docs", type: "docs" }, { title: "Learn Next.js (Interactive)", url: "https://nextjs.org/learn", type: "course" }, { title: "Next.js Crash Course — Traversy", url: "https://www.youtube.com/watch?v=mTz0GXj8NN0", type: "video" }] },
            ],
          },
          {
            id: "fe-p3", title: "Advanced & Professional", description: "Production-ready skills",
            topics: [
              { id: "fe-t7", name: "Testing & Quality", description: "Ensure code reliability", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Jest, React Testing Library, Cypress, and CI/CD integration.", resources: [{ title: "Testing Library Docs", url: "https://testing-library.com/docs/", type: "docs" }, { title: "Testing React — Kent C. Dodds", url: "https://www.youtube.com/watch?v=OVNjsIto9xM", type: "video" }, { title: "Cypress Docs", url: "https://docs.cypress.io/", type: "docs" }] },
              { id: "fe-t8", name: "Performance Optimization", description: "Fast web experiences", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Code splitting, lazy loading, Web Vitals, and profiling tools.", resources: [{ title: "Web.dev Performance Guide", url: "https://web.dev/performance/", type: "article" }, { title: "Chrome DevTools Performance", url: "https://developer.chrome.com/docs/devtools/performance/", type: "docs" }, { title: "React Performance — Jack Herrington", url: "https://www.youtube.com/watch?v=5fLW5Q5ODiE", type: "video" }] },
            ],
          },
        ],
      },
      {
        id: "backend", slug: "backend", name: "Backend Development",
        description: "Build robust server-side applications, APIs, and database systems.",
        difficulty: "Intermediate", estimatedTime: "6-9 months", icon: "Server",
        tags: ["Node.js", "APIs", "Databases", "Auth"],
        phases: [
          {
            id: "be-p1", title: "Foundation", description: "Server-side basics",
            topics: [
              { id: "be-t1", name: "Node.js & Express", description: "JavaScript on the server", timeEstimate: "3 weeks", difficulty: "Beginner", details: "HTTP servers, middleware, routing, and REST API design with Express.js.", resources: [{ title: "Node.js Official Guides", url: "https://nodejs.org/en/docs/guides", type: "docs" }, { title: "Node.js Crash Course — Traversy", url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4", type: "video" }, { title: "Express.js Docs", url: "https://expressjs.com/en/starter/installing.html", type: "docs" }] },
              { id: "be-t2", name: "Databases (SQL & NoSQL)", description: "Data persistence", timeEstimate: "3 weeks", difficulty: "Intermediate", details: "PostgreSQL, MongoDB, ORMs, query optimization, and data modeling.", resources: [{ title: "SQLBolt — Interactive SQL", url: "https://sqlbolt.com/", type: "course" }, { title: "MongoDB University (Free)", url: "https://university.mongodb.com/", type: "course" }, { title: "Prisma ORM Quickstart", url: "https://www.prisma.io/docs/getting-started/quickstart", type: "docs" }] },
              { id: "be-t3", name: "Authentication & Authorization", description: "Secure user systems", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "JWT, OAuth2, session management, and role-based access control.", resources: [{ title: "Supabase Auth Docs", url: "https://supabase.com/docs/guides/auth", type: "docs" }, { title: "JWT Explained — Fireship", url: "https://www.youtube.com/watch?v=7Q17ubqLfaM", type: "video" }, { title: "OWASP Auth Cheatsheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html", type: "article" }] },
            ],
          },
          {
            id: "be-p2", title: "Advanced Backend", description: "Scalable architecture",
            topics: [
              { id: "be-t4", name: "API Design & GraphQL", description: "Modern API patterns", timeEstimate: "3 weeks", difficulty: "Intermediate", details: "REST best practices, GraphQL schemas, resolvers, and API versioning.", resources: [{ title: "GraphQL Official Tutorial", url: "https://graphql.org/learn/", type: "docs" }, { title: "How to GraphQL (Free)", url: "https://www.howtographql.com/", type: "course" }, { title: "REST API Design Best Practices", url: "https://blog.postman.com/rest-api-examples/", type: "article" }] },
              { id: "be-t5", name: "Caching & Message Queues", description: "Performance at scale", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Redis, RabbitMQ, pub/sub patterns, and distributed caching strategies.", resources: [{ title: "Redis University (Free)", url: "https://university.redis.com/", type: "course" }, { title: "Message Queues Explained — Fireship", url: "https://www.youtube.com/watch?v=5-Rq4-PZlew", type: "video" }, { title: "System Design Primer (GitHub)", url: "https://github.com/donnemartin/system-design-primer", type: "article" }] },
            ],
          },
        ],
      },
      {
        id: "fullstack", slug: "fullstack", name: "Full Stack Development",
        description: "Master both frontend and backend to build complete web applications.",
        difficulty: "Advanced", estimatedTime: "10-14 months", icon: "Layers",
        tags: ["React", "Node.js", "Full Stack", "Deployment"],
        phases: [
          {
            id: "fs-p1", title: "The Full Picture", description: "End-to-end development",
            topics: [
              { id: "fs-t1", name: "Full Stack Architecture", description: "Connecting all pieces", timeEstimate: "3 weeks", difficulty: "Intermediate", details: "Monorepo setup, API integration, state management across the stack.", resources: [{ title: "Full Stack Open (Free University Course)", url: "https://fullstackopen.com/en/", type: "course" }, { title: "Monorepo Architecture — Fireship", url: "https://www.youtube.com/watch?v=9iU_IE6vnJ8", type: "video" }, { title: "T3 Stack Tutorial", url: "https://create.t3.gg/", type: "docs" }] },
              { id: "fs-t2", name: "DevOps for Full Stack", description: "Deployment & CI/CD", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Docker, Vercel/AWS deployment, GitHub Actions, and monitoring.", resources: [{ title: "Docker Getting Started", url: "https://docs.docker.com/get-started/", type: "docs" }, { title: "GitHub Actions Docs", url: "https://docs.github.com/en/actions", type: "docs" }, { title: "CI/CD Pipeline — TechWorld with Nana", url: "https://www.youtube.com/watch?v=R8_veQiYBjI", type: "video" }] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "app-dev", slug: "app-development", name: "App Development",
    description: "Create mobile applications for Android, iOS, and cross-platform.",
    icon: "Smartphone", color: "#34d399",
    subPaths: [
      {
        id: "android", slug: "android", name: "Android (Kotlin)",
        description: "Build native Android apps using Kotlin and Jetpack Compose.",
        difficulty: "Intermediate", estimatedTime: "6-8 months", icon: "Smartphone",
        tags: ["Kotlin", "Jetpack", "Material Design"],
        phases: [{ id: "an-p1", title: "Kotlin & Android Basics", description: "Getting started with Android", topics: [
          { id: "an-t1", name: "Kotlin Fundamentals", description: "Modern JVM language", timeEstimate: "3 weeks", difficulty: "Beginner", details: "Syntax, null safety, coroutines, and functional programming in Kotlin.", resources: [{ title: "Kotlin Docs", url: "#", type: "docs" }, { title: "Kotlin Course", url: "#", type: "course" }] },
          { id: "an-t2", name: "Jetpack Compose", description: "Declarative UI toolkit", timeEstimate: "4 weeks", difficulty: "Intermediate", details: "Composables, state, navigation, and Material Design 3.", resources: [{ title: "Compose Docs", url: "#", type: "docs" }, { title: "Compose Tutorial", url: "#", type: "video" }] },
        ] }],
      },
      {
        id: "ios", slug: "ios", name: "iOS (Swift)",
        description: "Build beautiful iOS apps with Swift and SwiftUI.",
        difficulty: "Intermediate", estimatedTime: "6-8 months", icon: "Tablet",
        tags: ["Swift", "SwiftUI", "Xcode"],
        phases: [{ id: "ios-p1", title: "Swift & iOS Basics", description: "Apple ecosystem development", topics: [
          { id: "ios-t1", name: "Swift Programming", description: "Apple's modern language", timeEstimate: "3 weeks", difficulty: "Beginner", details: "Optionals, protocols, closures, and Swift concurrency.", resources: [{ title: "Swift.org", url: "#", type: "docs" }, { title: "Swift Course", url: "#", type: "course" }] },
          { id: "ios-t2", name: "SwiftUI", description: "Declarative UI framework", timeEstimate: "4 weeks", difficulty: "Intermediate", details: "Views, modifiers, state management, and animations.", resources: [{ title: "SwiftUI Tutorials", url: "#", type: "docs" }, { title: "SwiftUI Masterclass", url: "#", type: "course" }] },
        ] }],
      },
      {
        id: "cross-platform", slug: "cross-platform", name: "Cross Platform (Flutter / React Native)",
        description: "Build apps for both platforms from a single codebase.",
        difficulty: "Intermediate", estimatedTime: "5-7 months", icon: "Repeat",
        tags: ["Flutter", "React Native", "Dart"],
        phases: [{ id: "cp-p1", title: "Cross-Platform Basics", description: "One codebase, multiple platforms", topics: [
          { id: "cp-t1", name: "Flutter & Dart", description: "Google's UI toolkit", timeEstimate: "4 weeks", difficulty: "Beginner", details: "Widgets, state management, navigation, and platform channels.", resources: [{ title: "Flutter Docs", url: "#", type: "docs" }, { title: "Flutter Course", url: "#", type: "course" }] },
          { id: "cp-t2", name: "React Native", description: "React for mobile", timeEstimate: "3 weeks", difficulty: "Intermediate", details: "Components, navigation, native modules, and Expo.", resources: [{ title: "RN Docs", url: "#", type: "docs" }, { title: "RN Tutorial", url: "#", type: "video" }] },
        ] }],
      },
    ],
  },
  {
    id: "ai-ml", slug: "ai-machine-learning", name: "AI & Machine Learning",
    description: "Explore artificial intelligence, deep learning, NLP, computer vision, and generative AI.",
    icon: "Brain", color: "#f472b6",
    subPaths: [
      { id: "ml", slug: "machine-learning", name: "Machine Learning", description: "Learn classical ML algorithms and model building.", difficulty: "Intermediate", estimatedTime: "4-6 months", icon: "TrendingUp", tags: ["Python", "Scikit-learn", "Statistics"],
        phases: [{ id: "ml-p1", title: "ML Foundations", description: "Core algorithms", topics: [
          { id: "ml-t1", name: "Python for ML", description: "NumPy, Pandas, Matplotlib", timeEstimate: "2 weeks", difficulty: "Beginner", details: "Data manipulation, visualization, and scientific computing.", resources: [{ title: "Python ML Setup", url: "#", type: "article" }, { title: "NumPy Tutorial", url: "#", type: "video" }] },
          { id: "ml-t2", name: "Supervised Learning", description: "Regression & Classification", timeEstimate: "4 weeks", difficulty: "Intermediate", details: "Linear regression, decision trees, SVM, ensemble methods.", resources: [{ title: "Scikit-learn Docs", url: "#", type: "docs" }, { title: "ML Course", url: "#", type: "course" }] },
        ] }],
      },
      { id: "dl", slug: "deep-learning", name: "Deep Learning", description: "Neural networks, CNNs, RNNs, and advanced architectures.", difficulty: "Advanced", estimatedTime: "5-8 months", icon: "Zap", tags: ["PyTorch", "TensorFlow", "Neural Networks"],
        phases: [{ id: "dl-p1", title: "Neural Network Basics", description: "Deep learning foundations", topics: [
          { id: "dl-t1", name: "Neural Networks from Scratch", description: "Understand the math", timeEstimate: "3 weeks", difficulty: "Intermediate", details: "Perceptrons, backpropagation, activation functions, loss functions.", resources: [{ title: "3Blue1Brown NN", url: "#", type: "video" }, { title: "Deep Learning Book", url: "#", type: "docs" }] },
        ] }],
      },
      { id: "nlp", slug: "nlp", name: "Natural Language Processing", description: "Text analysis, language models, and conversational AI.", difficulty: "Advanced", estimatedTime: "5-7 months", icon: "MessageSquare", tags: ["Transformers", "BERT", "spaCy"],
        phases: [{ id: "nlp-p1", title: "NLP Basics", description: "Text processing", topics: [
          { id: "nlp-t1", name: "Text Preprocessing", description: "Tokenization & embeddings", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Tokenization, stemming, word embeddings, and TF-IDF.", resources: [{ title: "spaCy Docs", url: "#", type: "docs" }, { title: "NLP Course", url: "#", type: "course" }] },
        ] }],
      },
      { id: "cv", slug: "computer-vision", name: "Computer Vision", description: "Image recognition, object detection, and visual AI.", difficulty: "Advanced", estimatedTime: "5-7 months", icon: "Eye", tags: ["OpenCV", "CNNs", "YOLO"],
        phases: [{ id: "cv-p1", title: "Vision Basics", description: "Image processing", topics: [
          { id: "cv-t1", name: "Image Processing with OpenCV", description: "Fundamentals of CV", timeEstimate: "3 weeks", difficulty: "Intermediate", details: "Filters, transformations, edge detection, and feature extraction.", resources: [{ title: "OpenCV Docs", url: "#", type: "docs" }, { title: "CV Course", url: "#", type: "course" }] },
        ] }],
      },
      { id: "genai", slug: "generative-ai", name: "Generative AI & LLMs", description: "Large language models, prompt engineering, and AI applications.", difficulty: "Advanced", estimatedTime: "3-5 months", icon: "Sparkles", tags: ["GPT", "LangChain", "RAG"],
        phases: [{ id: "ga-p1", title: "GenAI Foundations", description: "LLMs and applications", topics: [
          { id: "ga-t1", name: "Prompt Engineering", description: "Effective AI communication", timeEstimate: "1 week", difficulty: "Beginner", details: "Prompt patterns, chain-of-thought, few-shot learning, and system prompts.", resources: [{ title: "Prompt Engineering Guide", url: "#", type: "article" }, { title: "OpenAI Cookbook", url: "#", type: "docs" }] },
          { id: "ga-t2", name: "Building with LLM APIs", description: "AI-powered applications", timeEstimate: "3 weeks", difficulty: "Intermediate", details: "OpenAI API, LangChain, RAG pipelines, and vector databases.", resources: [{ title: "LangChain Docs", url: "#", type: "docs" }, { title: "RAG Tutorial", url: "#", type: "video" }] },
        ] }],
      },
    ],
  },
  {
    id: "data", slug: "data", name: "Data",
    description: "Data science, data engineering, and MLOps for building data-driven systems.",
    icon: "Database", color: "#facc15",
    subPaths: [
      { id: "data-sci", slug: "data-science", name: "Data Science", description: "Extract insights from data using statistics and ML.", difficulty: "Intermediate", estimatedTime: "6-8 months", icon: "BarChart3", tags: ["Python", "Statistics", "Visualization"],
        phases: [{ id: "ds-p1", title: "Data Science Essentials", description: "Analysis foundations", topics: [
          { id: "ds-t1", name: "Statistics & Probability", description: "Mathematical foundations", timeEstimate: "3 weeks", difficulty: "Beginner", details: "Distributions, hypothesis testing, Bayesian thinking, and A/B tests.", resources: [{ title: "Khan Academy Stats", url: "#", type: "course" }, { title: "Statistics Guide", url: "#", type: "article" }] },
        ] }],
      },
      { id: "data-eng", slug: "data-engineering", name: "Data Engineering", description: "Build data pipelines and infrastructure at scale.", difficulty: "Advanced", estimatedTime: "6-9 months", icon: "Workflow", tags: ["SQL", "Spark", "Airflow"],
        phases: [{ id: "de-p1", title: "Data Engineering Basics", description: "Pipeline foundations", topics: [
          { id: "de-t1", name: "SQL Mastery", description: "Advanced SQL skills", timeEstimate: "3 weeks", difficulty: "Intermediate", details: "Window functions, CTEs, query optimization, and database design.", resources: [{ title: "SQL Tutorial", url: "#", type: "course" }, { title: "Advanced SQL", url: "#", type: "video" }] },
        ] }],
      },
      { id: "mlops", slug: "mlops", name: "MLOps", description: "Deploy and manage ML models in production.", difficulty: "Advanced", estimatedTime: "4-6 months", icon: "Settings", tags: ["Docker", "MLflow", "Kubernetes"],
        phases: [{ id: "mo-p1", title: "MLOps Fundamentals", description: "ML in production", topics: [
          { id: "mo-t1", name: "Model Deployment", description: "Serving ML models", timeEstimate: "3 weeks", difficulty: "Advanced", details: "FastAPI, Docker, model registries, and A/B testing for models.", resources: [{ title: "MLflow Docs", url: "#", type: "docs" }, { title: "MLOps Course", url: "#", type: "course" }] },
        ] }],
      },
    ],
  },
  {
    id: "cloud-devops", slug: "cloud-devops", name: "Cloud & DevOps",
    description: "Master cloud platforms, CI/CD, and container orchestration.",
    icon: "Cloud", color: "#38bdf8",
    subPaths: [
      { id: "cloud", slug: "cloud-computing", name: "Cloud Computing (AWS / GCP / Azure)", description: "Deploy and manage applications on cloud platforms.", difficulty: "Intermediate", estimatedTime: "4-6 months", icon: "Cloud", tags: ["AWS", "GCP", "Azure"],
        phases: [{ id: "cl-p1", title: "Cloud Foundations", description: "Cloud basics", topics: [
          { id: "cl-t1", name: "Cloud Fundamentals", description: "Core cloud concepts", timeEstimate: "2 weeks", difficulty: "Beginner", details: "IaaS, PaaS, SaaS, regions, availability zones, and pricing models.", resources: [{ title: "AWS Cloud Practitioner", url: "#", type: "course" }, { title: "Cloud Concepts", url: "#", type: "video" }] },
        ] }],
      },
      { id: "devops-cicd", slug: "devops", name: "DevOps & CI/CD", description: "Automate development workflows and deployment pipelines.", difficulty: "Intermediate", estimatedTime: "4-6 months", icon: "GitBranch", tags: ["GitHub Actions", "Jenkins", "Terraform"],
        phases: [{ id: "do-p1", title: "DevOps Essentials", description: "Automation fundamentals", topics: [
          { id: "do-t1", name: "Git & Version Control", description: "Collaboration fundamentals", timeEstimate: "1 week", difficulty: "Beginner", details: "Branching strategies, rebasing, cherry-picking, and code review.", resources: [{ title: "Pro Git Book", url: "#", type: "docs" }, { title: "Git Tutorial", url: "#", type: "video" }] },
        ] }],
      },
      { id: "docker-k8s", slug: "docker-kubernetes", name: "Docker & Kubernetes", description: "Containerize and orchestrate applications at scale.", difficulty: "Advanced", estimatedTime: "3-5 months", icon: "Container", tags: ["Docker", "K8s", "Helm"],
        phases: [{ id: "dk-p1", title: "Container Basics", description: "Containerization", topics: [
          { id: "dk-t1", name: "Docker Fundamentals", description: "Container basics", timeEstimate: "2 weeks", difficulty: "Beginner", details: "Images, containers, Dockerfiles, volumes, and networking.", resources: [{ title: "Docker Docs", url: "#", type: "docs" }, { title: "Docker Course", url: "#", type: "course" }] },
        ] }],
      },
    ],
  },
  {
    id: "cybersecurity", slug: "cybersecurity", name: "Cybersecurity",
    description: "Protect systems and data through ethical hacking, app security, and network defense.",
    icon: "Shield", color: "#ef4444",
    subPaths: [
      { id: "ethical-hack", slug: "ethical-hacking", name: "Ethical Hacking", description: "Learn penetration testing and vulnerability assessment.", difficulty: "Intermediate", estimatedTime: "5-7 months", icon: "Bug", tags: ["Kali Linux", "Pentesting", "OWASP"],
        phases: [{ id: "eh-p1", title: "Hacking Fundamentals", description: "Security basics", topics: [
          { id: "eh-t1", name: "Linux & Networking", description: "Foundation skills", timeEstimate: "3 weeks", difficulty: "Beginner", details: "Linux commands, TCP/IP, DNS, HTTP, and network scanning.", resources: [{ title: "Linux Journey", url: "#", type: "docs" }, { title: "Networking Basics", url: "#", type: "video" }] },
        ] }],
      },
      { id: "app-sec", slug: "application-security", name: "Application Security", description: "Secure web and mobile applications.", difficulty: "Advanced", estimatedTime: "4-6 months", icon: "Lock", tags: ["OWASP", "SAST", "DAST"],
        phases: [{ id: "as-p1", title: "AppSec Basics", description: "Secure coding", topics: [
          { id: "as-t1", name: "OWASP Top 10", description: "Common vulnerabilities", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "XSS, CSRF, SQL injection, and security headers.", resources: [{ title: "OWASP Guide", url: "#", type: "docs" }, { title: "Web Security", url: "#", type: "course" }] },
        ] }],
      },
      { id: "net-sec", slug: "network-security", name: "Network Security", description: "Defend networks and infrastructure.", difficulty: "Advanced", estimatedTime: "5-7 months", icon: "Wifi", tags: ["Firewalls", "IDS", "VPN"],
        phases: [{ id: "ns-p1", title: "Network Defense", description: "Infrastructure security", topics: [
          { id: "ns-t1", name: "Firewall & IDS", description: "Network protection", timeEstimate: "3 weeks", difficulty: "Intermediate", details: "Firewall rules, intrusion detection, SIEM, and incident response.", resources: [{ title: "Network Security Guide", url: "#", type: "article" }, { title: "Security+", url: "#", type: "course" }] },
        ] }],
      },
    ],
  },
  {
    id: "core-cs", slug: "core-cs", name: "Core CS",
    description: "Master computer science fundamentals — DSA, system design, databases, and OS.",
    icon: "Cpu", color: "#a78bfa",
    subPaths: [
      { id: "dsa", slug: "dsa", name: "DSA & Competitive Programming", description: "Data structures, algorithms, and competitive coding.", difficulty: "Intermediate", estimatedTime: "6-12 months", icon: "Code", tags: ["LeetCode", "Codeforces", "Algorithms"],
        phases: [{ id: "dsa-p1", title: "DSA Foundations", description: "Core data structures", topics: [
          { id: "dsa-t1", name: "Arrays, Strings & Hashing", description: "Fundamental structures", timeEstimate: "3 weeks", difficulty: "Beginner", details: "Two pointers, sliding window, hash maps, and prefix sums.", resources: [{ title: "NeetCode Roadmap", url: "#", type: "article" }, { title: "DSA Course", url: "#", type: "course" }] },
        ] }],
      },
      { id: "sys-design", slug: "system-design", name: "System Design", description: "Design scalable distributed systems.", difficulty: "Advanced", estimatedTime: "3-5 months", icon: "Network", tags: ["Scalability", "Distributed Systems", "Architecture"],
        phases: [{ id: "sd-p1", title: "System Design Basics", description: "Scalability fundamentals", topics: [
          { id: "sd-t1", name: "Scalability Concepts", description: "Building for scale", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Load balancing, caching, sharding, and CAP theorem.", resources: [{ title: "System Design Primer", url: "#", type: "article" }, { title: "Designing Data-Intensive Apps", url: "#", type: "docs" }] },
        ] }],
      },
      { id: "db-eng", slug: "database-engineering", name: "Database Engineering", description: "Deep dive into database internals and optimization.", difficulty: "Advanced", estimatedTime: "3-5 months", icon: "Database", tags: ["SQL", "NoSQL", "Indexing"],
        phases: [{ id: "dbe-p1", title: "Database Deep Dive", description: "DB internals", topics: [
          { id: "dbe-t1", name: "Database Internals", description: "How databases work", timeEstimate: "3 weeks", difficulty: "Advanced", details: "B-trees, indexing strategies, query planners, and ACID properties.", resources: [{ title: "Use The Index Luke", url: "#", type: "article" }, { title: "DB Internals Book", url: "#", type: "docs" }] },
        ] }],
      },
      { id: "os-linux", slug: "os-linux", name: "Operating Systems & Linux", description: "Understand OS concepts and become proficient in Linux.", difficulty: "Intermediate", estimatedTime: "3-4 months", icon: "Terminal", tags: ["Linux", "Processes", "Memory"],
        phases: [{ id: "os-p1", title: "OS Fundamentals", description: "Operating system concepts", topics: [
          { id: "os-t1", name: "Processes & Threads", description: "CPU management", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Process lifecycle, scheduling, threading models, and synchronization.", resources: [{ title: "OSTEP Book", url: "#", type: "docs" }, { title: "OS Course", url: "#", type: "course" }] },
        ] }],
      },
    ],
  },
  {
    id: "emerging", slug: "emerging-tech", name: "Emerging Tech",
    description: "Explore cutting-edge technologies — blockchain, game dev, AR/VR, IoT, and robotics.",
    icon: "Rocket", color: "#fb923c",
    subPaths: [
      { id: "blockchain", slug: "blockchain", name: "Blockchain & Web3", description: "Decentralized apps, smart contracts, and crypto.", difficulty: "Advanced", estimatedTime: "4-6 months", icon: "Link", tags: ["Solidity", "Ethereum", "DeFi"],
        phases: [{ id: "bc-p1", title: "Web3 Basics", description: "Blockchain foundations", topics: [
          { id: "bc-t1", name: "Blockchain Fundamentals", description: "How blockchains work", timeEstimate: "2 weeks", difficulty: "Beginner", details: "Consensus mechanisms, cryptography, wallets, and transactions.", resources: [{ title: "Blockchain.com Learn", url: "#", type: "article" }, { title: "Web3 Course", url: "#", type: "course" }] },
        ] }],
      },
      { id: "game-dev", slug: "game-development", name: "Game Development", description: "Create games with Unity, Unreal, or Godot.", difficulty: "Intermediate", estimatedTime: "6-10 months", icon: "Gamepad2", tags: ["Unity", "C#", "Game Design"],
        phases: [{ id: "gd-p1", title: "Game Dev Basics", description: "Game development foundations", topics: [
          { id: "gd-t1", name: "Game Engines Overview", description: "Choosing your engine", timeEstimate: "1 week", difficulty: "Beginner", details: "Unity vs Unreal vs Godot, 2D vs 3D, and getting started.", resources: [{ title: "Unity Learn", url: "#", type: "course" }, { title: "Godot Docs", url: "#", type: "docs" }] },
        ] }],
      },
      { id: "ar-vr", slug: "ar-vr", name: "AR / VR", description: "Build immersive augmented and virtual reality experiences.", difficulty: "Advanced", estimatedTime: "5-8 months", icon: "Glasses", tags: ["Unity XR", "ARCore", "WebXR"],
        phases: [{ id: "ar-p1", title: "XR Basics", description: "Immersive development", topics: [
          { id: "ar-t1", name: "XR Development Basics", description: "AR & VR concepts", timeEstimate: "3 weeks", difficulty: "Intermediate", details: "Spatial computing, 3D interaction, tracking, and XR design patterns.", resources: [{ title: "Unity XR Docs", url: "#", type: "docs" }, { title: "WebXR Tutorial", url: "#", type: "video" }] },
        ] }],
      },
      { id: "iot", slug: "iot", name: "IoT & Embedded Systems", description: "Program microcontrollers and connected devices.", difficulty: "Intermediate", estimatedTime: "4-6 months", icon: "Cpu", tags: ["Arduino", "Raspberry Pi", "MQTT"],
        phases: [{ id: "iot-p1", title: "IoT Basics", description: "Connected devices", topics: [
          { id: "iot-t1", name: "Microcontrollers & Sensors", description: "Hardware programming", timeEstimate: "3 weeks", difficulty: "Beginner", details: "Arduino, GPIO, sensors, actuators, and serial communication.", resources: [{ title: "Arduino Docs", url: "#", type: "docs" }, { title: "IoT Course", url: "#", type: "course" }] },
        ] }],
      },
      { id: "robotics", slug: "robotics", name: "Robotics", description: "Build and program robots with ROS and embedded systems.", difficulty: "Advanced", estimatedTime: "6-10 months", icon: "Bot", tags: ["ROS", "Python", "Control Systems"],
        phases: [{ id: "rb-p1", title: "Robotics Basics", description: "Robot fundamentals", topics: [
          { id: "rb-t1", name: "ROS Fundamentals", description: "Robot Operating System", timeEstimate: "4 weeks", difficulty: "Intermediate", details: "Nodes, topics, services, RViz, and Gazebo simulation.", resources: [{ title: "ROS Wiki", url: "#", type: "docs" }, { title: "ROS Course", url: "#", type: "course" }] },
        ] }],
      },
    ],
  },
  {
    id: "career", slug: "career-paths", name: "Career & Soft Paths",
    description: "Open source, research, interview prep, and freelancing guides.",
    icon: "Briefcase", color: "#e879f9",
    subPaths: [
      { id: "opensource", slug: "open-source", name: "Open Source Contribution", description: "Learn how to contribute to open source projects effectively.", difficulty: "Beginner", estimatedTime: "2-4 months", icon: "GitPullRequest", tags: ["Git", "GitHub", "Community"],
        phases: [{ id: "oss-p1", title: "Open Source 101", description: "Getting started", topics: [
          { id: "oss-t1", name: "Finding Projects", description: "Where to start", timeEstimate: "1 week", difficulty: "Beginner", details: "Good first issues, project evaluation, and community guidelines.", resources: [{ title: "First Contributions", url: "#", type: "article" }, { title: "Open Source Guide", url: "#", type: "docs" }] },
        ] }],
      },
      { id: "research", slug: "research", name: "Research & MS/PhD Path", description: "Prepare for graduate school and academic research.", difficulty: "Advanced", estimatedTime: "6-12 months", icon: "GraduationCap", tags: ["Research", "Publications", "GRE"],
        phases: [{ id: "res-p1", title: "Research Prep", description: "Academic preparation", topics: [
          { id: "res-t1", name: "Research Methodology", description: "How to do research", timeEstimate: "4 weeks", difficulty: "Intermediate", details: "Literature review, hypothesis formation, experiment design, and paper writing.", resources: [{ title: "How to Read a Paper", url: "#", type: "article" }, { title: "Research Methods", url: "#", type: "course" }] },
        ] }],
      },
      { id: "interview", slug: "interview-prep", name: "Interview Prep (FAANG/SWE)", description: "Crack coding interviews at top tech companies.", difficulty: "Intermediate", estimatedTime: "3-6 months", icon: "Target", tags: ["LeetCode", "System Design", "Behavioral"],
        phases: [{ id: "int-p1", title: "Interview Strategy", description: "Preparation plan", topics: [
          { id: "int-t1", name: "DSA Problem Patterns", description: "Common interview patterns", timeEstimate: "6 weeks", difficulty: "Intermediate", details: "Blind 75, sliding window, backtracking, dynamic programming, and graph algorithms.", resources: [{ title: "NeetCode 150", url: "#", type: "article" }, { title: "Interview Handbook", url: "#", type: "docs" }] },
        ] }],
      },
      { id: "freelance", slug: "freelancing", name: "Freelancing & Indie Hacking", description: "Build a career as an independent developer or creator.", difficulty: "Beginner", estimatedTime: "3-5 months", icon: "Laptop", tags: ["Portfolio", "Clients", "SaaS"],
        phases: [{ id: "fr-p1", title: "Freelance Foundations", description: "Going independent", topics: [
          { id: "fr-t1", name: "Building Your Portfolio", description: "Showcase your work", timeEstimate: "2 weeks", difficulty: "Beginner", details: "Portfolio design, case studies, client testimonials, and personal branding.", resources: [{ title: "Portfolio Guide", url: "#", type: "article" }, { title: "Freelancing 101", url: "#", type: "video" }] },
        ] }],
      },
    ],
  },
];

export function getDomainBySlug(slug: string): Domain | undefined {
  return domains.find((d) => d.slug === slug);
}

export function getSubPathBySlug(domainSlug: string, subPathSlug: string): SubPath | undefined {
  const domain = getDomainBySlug(domainSlug);
  return domain?.subPaths.find((sp) => sp.slug === subPathSlug);
}
