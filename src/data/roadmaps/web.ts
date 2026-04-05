import { Domain } from "../types";

export const webDevDomain: Domain = {
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
            { id: "fe-t1", name: "HTML5 & Semantic Markup", description: "Learn the building blocks of the web", timeEstimate: "2 weeks", difficulty: "Beginner", details: "Master semantic HTML5 elements, forms, accessibility attributes, and SEO-friendly markup patterns.", resources: [{ title: "MDN HTML Guide", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML", type: "docs" }, { title: "HTML Crash Course", url: "https://www.youtube.com/watch?v=UB1O30fR-EE", type: "video" }] },
            { id: "fe-t2", name: "CSS3 & Responsive Design", description: "Style and layout mastery", timeEstimate: "3 weeks", difficulty: "Beginner", details: "Flexbox, Grid, animations, media queries, and mobile-first design principles.", resources: [{ title: "CSS Tricks: Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/", type: "article" }, { title: "Kevin Powell CSS", url: "https://www.youtube.com/watch?v=srvUrASNj0s", type: "video" }] },
            { id: "fe-t3", name: "JavaScript Fundamentals", description: "Programming the web", timeEstimate: "4 weeks", difficulty: "Beginner", details: "Variables, functions, DOM manipulation, events, async/await, and ES6+ features.", resources: [{ title: "JavaScript.info", url: "https://javascript.info/", type: "docs" }, { title: "JS Crash Course", url: "https://www.youtube.com/watch?v=hdI2bqOjy3c", type: "video" }] },
          ],
        },
        {
          id: "fe-p2", title: "Framework Mastery", description: "Modern frontend frameworks",
          topics: [
            { id: "fe-t4", name: "React.js", description: "Component-based UI library", timeEstimate: "4 weeks", difficulty: "Intermediate", details: "Components, hooks, state management, routing, and the React ecosystem.", resources: [{ title: "React Docs", url: "https://react.dev/", type: "docs" }, { title: "Full React Course", url: "https://www.youtube.com/watch?v=bMknfKXIFA8", type: "video" }] },
            { id: "fe-t5", name: "TypeScript", description: "Type-safe JavaScript", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Type system, interfaces, generics, and integration with React.", resources: [{ title: "Total TypeScript", url: "https://www.totaltypescript.com/", type: "course" }, { title: "TS for React", url: "https://www.youtube.com/watch?v=TPACABQTHvM", type: "video" }] },
            { id: "fe-t6", name: "Next.js", description: "React meta-framework", timeEstimate: "3 weeks", difficulty: "Intermediate", details: "SSR, SSG, API routes, App Router, and full-stack React development.", resources: [{ title: "Next.js Docs", url: "https://nextjs.org/docs", type: "docs" }, { title: "Learn Next.js", url: "https://nextjs.org/learn", type: "course" }] },
          ],
        },
        {
          id: "fe-p3", title: "Advanced & Professional", description: "Production-ready skills",
          topics: [
            { id: "fe-t7", name: "Testing & Quality", description: "Ensure code reliability", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Jest, React Testing Library, Cypress, and CI/CD integration.", resources: [{ title: "Testing Library Docs", url: "https://testing-library.com/docs/", type: "docs" }] },
            { id: "fe-t8", name: "Performance Optimization", description: "Fast web experiences", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Code splitting, lazy loading, Web Vitals, and profiling tools.", resources: [{ title: "Web.dev Performance", url: "https://web.dev/performance/", type: "article" }] },
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
          id: "be-p1", title: "Internet & OS Fundamentals", description: "How the web and servers work",
          topics: [
            { id: "be-t1", name: "How the Internet Works", description: "DNS, HTTP/HTTPS, TCP/IP", timeEstimate: "1 week", difficulty: "Beginner", details: "Understand how browsers communicate with servers via DNS and HTTP protocols.", resources: [{ title: "How the Web Works", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works", type: "article" }] },
            { id: "be-t2", name: "OS & General Knowledge", description: "Terminal, Process Management, Threads", timeEstimate: "2 weeks", difficulty: "Beginner", details: "Basics of Linux filesystem, process management, memory limits, and concurrent threading.", resources: [{ title: "Linux Command Line Basics", url: "https://ubuntu.com/tutorials/command-line-for-beginners", type: "docs" }] },
            { id: "be-t3", name: "Version Control Systems", description: "Git, GitHub, CI/CD basics", timeEstimate: "1 week", difficulty: "Beginner", details: "Git branching, rebasing, pull requests, and resolving merge conflicts.", resources: [{ title: "Git Handbook", url: "https://docs.github.com/en/get-started/using-git/about-git", type: "docs" }] },
          ],
        },
        {
          id: "be-p2", title: "Core Server Development", description: "Building robust APIs",
          topics: [
            { id: "be-t4", name: "Backend Language Mastery", description: "JavaScript/TypeScript, Python, or Go", timeEstimate: "4 weeks", difficulty: "Intermediate", details: "Building HTTP servers, working with file systems, and core standard libraries.", resources: [{ title: "Node.js Guide", url: "https://nodejs.org/en/docs/guides/", type: "docs" }, { title: "Go by Example", url: "https://gobyexample.com/", type: "course" }] },
            { id: "be-t5", name: "Relational Databases", description: "PostgreSQL, MySQL, Database Design", timeEstimate: "3 weeks", difficulty: "Intermediate", details: "ACID properties, normal forms, indexing, JOINs, and complex aggregations.", resources: [{ title: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/", type: "docs" }, { title: "SQLBolt", url: "https://sqlbolt.com/", type: "course" }] },
            { id: "be-t6", name: "RESTful APIs & GraphQL", description: "API architectures and standards", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Designing RESTful resources, state transfers, GraphQL schema stitching, and mutations.", resources: [{ title: "How to GraphQL", url: "https://www.howtographql.com/", type: "course" }] },
            { id: "be-t7", name: "Authentication & Security", description: "JWT, OAuth, Cookies, CORS, Hashing", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Securely storing passwords, issuing sessions/JWTs, and mitigating XSS/CSRF.", resources: [{ title: "JWT Introduction", url: "https://jwt.io/introduction", type: "docs" }] },
          ],
        },
        {
          id: "be-p3", title: "Advanced Architecture", description: "Scaling and modern backend systems",
          topics: [
            { id: "be-t8", name: "NoSQL & Caching", description: "MongoDB, Redis, Memcached", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Understanding document stores, KV pairs, and caching strategies (write-through, LRU).", resources: [{ title: "Redis University", url: "https://university.redis.com/", type: "course" }] },
            { id: "be-t9", name: "Message Brokers", description: "RabbitMQ, Kafka, Async processing", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Event-driven architecture, Pub/Sub, queues, and handling background workers.", resources: [{ title: "RabbitMQ Tutorials", url: "https://www.rabbitmq.com/getstarted.html", type: "docs" }] },
            { id: "be-t10", name: "Docker & Containerization", description: "Containerizing backend apps", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Writing Dockerfiles, docker-compose, image optimization, and orchestration basics.", resources: [{ title: "Docker 101", url: "https://docs.docker.com/get-started/", type: "docs" }] },
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
          id: "fs-p1", title: "Frontend & UI Synergy", description: "Mastering the user interface",
          topics: [
            { id: "fs-t1", name: "Advanced React & State", description: "Redux, Zustand, Context API", timeEstimate: "3 weeks", difficulty: "Intermediate", details: "Managing complex global UI state, caching network requests, and prop drilling.", resources: [{ title: "Zustand Docs", url: "https://docs.pmnd.rs/zustand", type: "docs" }] },
            { id: "fs-t2", name: "UI Components & Styling", description: "Tailwind, Radix UI, Framer Motion", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Building reusable component systems using headless UI tools and unified design tokens.", resources: [{ title: "Tailwind CSS", url: "https://tailwindcss.com/docs", type: "docs" }] },
          ],
        },
        {
          id: "fs-p2", title: "Backend Integration", description: "Connecting front & back ends",
          topics: [
            { id: "fs-t3", name: "API Consumption", description: "React Query, Axios, fetch", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Polling, optimistic UI updates, data mutation, and cache invalidation.", resources: [{ title: "React Query Docs", url: "https://tanstack.com/query/latest", type: "docs" }] },
            { id: "fs-t4", name: "Next.js / SvelteKit", description: "SSR, SSG, Server Actions", timeEstimate: "4 weeks", difficulty: "Advanced", details: "Server side rendering, SEO optimization, and secure server-to-db connections.", resources: [{ title: "Next.js Architecture", url: "https://nextjs.org/docs/app/building-your-application/rendering", type: "docs" }] },
            { id: "fs-t5", name: "Database ORMs", description: "Prisma, Drizzle, TypeORM", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Type-safe database querying, schema migrations, and relational relationships.", resources: [{ title: "Prisma Docs", url: "https://www.prisma.io/docs", type: "docs" }] },
          ],
        },
        {
          id: "fs-p3", title: "DevOps & Cloud", description: "Shipping fullstack apps",
          topics: [
            { id: "fs-t6", name: "Cloud Deployment", description: "Vercel, AWS EC2, DigitalOcean", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Setting up Linux VPS, reverse proxies (Nginx), and Platform-as-a-Service hosting.", resources: [{ title: "Vercel Deployment", url: "https://vercel.com/docs", type: "docs" }] },
            { id: "fs-t7", name: "CI/CD Pipelines", description: "GitHub Actions automation", timeEstimate: "1 week", difficulty: "Advanced", details: "Automated linting, testing, and production deployment upon merging code.", resources: [{ title: "GitHub Actions Tutorial", url: "https://docs.github.com/en/actions", type: "docs" }] },
          ],
        },
      ],
    },
  ],
};
