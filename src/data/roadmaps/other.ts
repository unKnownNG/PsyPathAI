import { Domain } from "../types";

export const cyberDomain: Domain = {
  id: "cyber", slug: "cybersecurity", name: "Cybersecurity",
  description: "Learn to protect networks, find vulnerabilities, and secure applications.",
  icon: "Shield", color: "#fca5a5",
  subPaths: [
    { 
      id: "ethical-hack", slug: "ethical-hacking", name: "Ethical Hacking", 
      description: "Learn penetration testing and vulnerability assessment techniques.", 
      difficulty: "Intermediate", estimatedTime: "5-7 months", icon: "Bug", 
      tags: ["Kali Linux", "Pentesting", "Nmap"],
      phases: [
        { 
          id: "eh-p1", title: "Cyber Foundations", description: "The hacker toolkit", 
          topics: [
            { 
              id: "eh-t1", name: "Linux & Command Line", description: "Mastering the terminal", timeEstimate: "3 weeks", difficulty: "Beginner", 
              details: "Navigating the Linux filesystem, bash scripting, file permissions, and process management. Familiarization with Kali Linux.", 
              resources: [
                { title: "Linux Journey", url: "https://linuxjourney.com/", type: "docs" },
                { title: "Linux for Hackers", url: "https://www.youtube.com/watch?v=lZAoFs75_cs", type: "video" }
              ] 
            },
            {
              id: "eh-t2", name: "Networking Fundamentals", description: "How computers talk", timeEstimate: "3 weeks", difficulty: "Intermediate",
              details: "TCP/IP suite, OSI Model, subnetting, DNS, HTTP/HTTPS, and Wireshark packet analysis.",
              resources: [
                { title: "Networking for Ethical Hackers", url: "https://www.freecodecamp.org/news/networking-for-ethical-hackers/", type: "article" },
                { title: "Wireshark Tutorial", url: "https://www.wireshark.org/docs/wsug_html_chunked/", type: "docs" }
              ]
            }
          ] 
        },
        { 
          id: "eh-p2", title: "Information Gathering", description: "Recon & Scanning", 
          topics: [
            { 
              id: "eh-t3", name: "Passive Reconnaissance", description: "OSINT techniques", timeEstimate: "2 weeks", difficulty: "Beginner", 
              details: "Open-source intelligence gathering using tools like Maltego, Shodan, and Google Dorks.", 
              resources: [
                { title: "The OSINT Framework", url: "https://osintframework.com/", type: "tool" }
              ] 
            },
            {
              id: "eh-t4", name: "Active Scanning", description: "Finding the doors", timeEstimate: "2 weeks", difficulty: "Intermediate",
              details: "Port scanning with Nmap, vulnerability scanning with Nessus, and basic enumeration.",
              resources: [
                { title: "Nmap Network Scanning", url: "https://nmap.org/book/toc.html", type: "docs" }
              ]
            }
          ] 
        },
        {
          id: "eh-p3", title: "Exploitation", description: "Gaining access",
          topics: [
            {
              id: "eh-t5", name: "Metasploit Framework", description: "Exploit delivery", timeEstimate: "3 weeks", difficulty: "Advanced",
              details: "Understanding exploit modules, payloads, reverse shells, and post-exploitation techniques.",
              resources: [
                { title: "Metasploit Unleashed", url: "https://www.offensive-security.com/metasploit-unleashed/", type: "course" }
              ]
            }
          ]
        }
      ],
    },
    { 
      id: "app-sec", slug: "application-security", name: "Application Security", 
      description: "Secure web and mobile applications against modern attack vectors.", 
      difficulty: "Advanced", estimatedTime: "4-6 months", icon: "Lock", 
      tags: ["OWASP", "Burp Suite", "Web Security"],
      phases: [
        { 
          id: "as-p1", title: "OWASP Top 10", description: "Common vulnerabilities", 
          topics: [
            { 
              id: "as-t1", name: "Injection & XSS", description: "Input validation flaws", timeEstimate: "3 weeks", difficulty: "Intermediate", 
              details: "Understanding SQL/NoSQL injections and Cross-Site Scripting (XSS). How to exploit and how to patch.", 
              resources: [
                { title: "OWASP XSS Guide", url: "https://owasp.org/www-community/attacks/xss/", type: "docs" },
                { title: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security", type: "course" }
              ] 
            },
            {
              id: "as-t2", name: "Authentication & CSRF", description: "Broken access control", timeEstimate: "2 weeks", difficulty: "Intermediate",
              details: "Exploiting broken JWTs, session hijacking, and Cross-Site Request Forgery (CSRF).",
              resources: [
                { title: "JWT Attack Guide", url: "https://portswigger.net/web-security/jwt", type: "article" }
              ]
            }
          ] 
        },
        {
          id: "as-p2", title: "Web Pentesting", description: "Tools of the trade",
          topics: [
            {
              id: "as-t3", name: "Burp Suite Essentials", description: "Web proxying", timeEstimate: "2 weeks", difficulty: "Advanced",
              details: "Intercepting traffic, modifying headers, using Repeater/Intruder to manipulate requests in real-time.",
              resources: [
                { title: "Getting started with Burp Suite", url: "https://portswigger.net/burp/documentation/desktop/getting-started", type: "docs" }
              ]
            }
          ]
        }
      ],
    },
    { 
      id: "net-sec", slug: "network-security", name: "Network Security", 
      description: "Defend networks, manage firewalls, and detect intrusions.", 
      difficulty: "Intermediate", estimatedTime: "5-7 months", icon: "Wifi", 
      tags: ["Firewalls", "IDS/IPS", "Cryptography"],
      phases: [
        { 
          id: "ns-p1", title: "Perimeter Defense", description: "Keeping the bad guys out", 
          topics: [
            { 
              id: "ns-t1", name: "Firewalls & Cryptography", description: "Encryption and rules", timeEstimate: "3 weeks", difficulty: "Intermediate", 
              details: "Configuring stateful/stateless firewalls, understanding symmetric vs asymmetric encryption, and PKI/Certificates.", 
              resources: [
                { title: "Cryptography I (Stanford)", url: "https://www.coursera.org/learn/crypto", type: "course" }
              ] 
            },
            {
              id: "ns-t2", name: "Intrusion Detection", description: "IDS & IPS", timeEstimate: "2 weeks", difficulty: "Advanced",
              details: "Setting up Snort/Suricata rules, analyzing logs, and distinguishing false positives.",
              resources: [
                { title: "Snort User Manual", url: "https://www.snort.org/documents", type: "docs" }
              ]
            }
          ] 
        },
        {
          id: "ns-p2", title: "Incident Response", description: "When things go wrong",
          topics: [
            {
              id: "ns-t3", name: "SIEM & SOC Operations", description: "Security logging", timeEstimate: "3 weeks", difficulty: "Advanced",
              details: "Aggregating logs with Splunk or ELK stack. Creating alerts and responding to security incidents.",
              resources: [
                { title: "Splunk Fundamental Training (Free)", url: "https://www.splunk.com/en_us/training.html", type: "course" }
              ]
            }
          ]
        }
      ],
    },
  ],
};

export const coreCsDomain: Domain = {
  id: "core-cs", slug: "core-cs", name: "Core CS",
  description: "Master computer science fundamentals — DSA, system design, databases, and OS.",
  icon: "Cpu", color: "#a78bfa",
  subPaths: [
    { 
      id: "dsa", slug: "dsa", name: "DSA & Problem Solving", 
      description: "Data structures, algorithms, and technical interview preparation.", 
      difficulty: "Intermediate", estimatedTime: "6-12 months", icon: "Code", 
      tags: ["LeetCode", "Algorithms", "Optimization"],
      phases: [
        { 
          id: "dsa-p1", title: "Data Structures", description: "The building blocks", 
          topics: [
            { 
              id: "dsa-t1", name: "Arrays, Linked Lists, & Hash Tables", description: "Linear structures", timeEstimate: "3 weeks", difficulty: "Beginner", 
              details: "Time/Space complexity (Big O), two pointers, sliding window technique, and hash map implementations.", 
              resources: [
                { title: "NeetCode Roadmap", url: "https://neetcode.io/roadmap", type: "tool" },
                { title: "Harvard CS50: Data Structures", url: "https://www.youtube.com/watch?v=2T-A_GFs-8c", type: "video" }
              ] 
            },
            {
              id: "dsa-t2", name: "Trees & Graphs", description: "Non-linear structures", timeEstimate: "3 weeks", difficulty: "Intermediate",
              details: "Binary Search Trees (BST), Heaps/Priority Queues, Trie, Adjacency Lists, and Traversal algorithms (BFS & DFS).",
              resources: [
                { title: "Graph Algorithms Crash Course", url: "https://www.youtube.com/watch?v=tWVWeAqZ0WU", type: "video" }
              ]
            }
          ] 
        },
        {
          id: "dsa-p2", title: "Algorithms", description: "Solving complexity",
          topics: [
            {
              id: "dsa-t3", name: "Dynamic Programming", description: "Memoization & Tabulation", timeEstimate: "3 weeks", difficulty: "Advanced",
              details: "Top-down vs Bottom-up approaches, breaking down overlapping subproblems, and solving Knapsack variations.",
              resources: [
                { title: "Dynamic Programming Course (FreeCodeCamp)", url: "https://www.youtube.com/watch?v=oBt53YbR9Kk", type: "course" }
              ]
            }
          ]
        }
      ],
    },
    { 
      id: "sys-design", slug: "system-design", name: "System Design", 
      description: "Design scalable distributed systems and massive web applications.", 
      difficulty: "Advanced", estimatedTime: "3-5 months", icon: "Network", 
      tags: ["Scalability", "Microservices", "Architecture"],
      phases: [
        { 
          id: "sd-p1", title: "Scalability 101", description: "Handling growth", 
          topics: [
            { 
              id: "sd-t1", name: "Core Concepts", description: "Load balancing & Caching", timeEstimate: "3 weeks", difficulty: "Intermediate", 
              details: "Vertical vs Horizontal scaling, CAP Theorem, CDN mechanisms, Reverse Proxies, and Redundancy.", 
              resources: [
                { title: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", type: "docs" },
                { title: "ByteByteGo System Design", url: "https://www.youtube.com/c/ByteByteGo", type: "video" }
              ] 
            },
            {
              id: "sd-t2", name: "Data Partitioning", description: "Scaling databases", timeEstimate: "2 weeks", difficulty: "Advanced",
              details: "Sharding strategies, consistent hashing, replication (Leader-Follower), and distributed consensus.",
              resources: [
                { title: "Designing Data-Intensive Applications", url: "https://dataintensive.net/", type: "article" }
              ]
            }
          ] 
        }
      ],
    },
    { 
      id: "db-eng", slug: "database-engineering", name: "Database Engineering", 
      description: "Deep dive into database internals, transaction models, and query optimization.", 
      difficulty: "Advanced", estimatedTime: "3-5 months", icon: "Database", 
      tags: ["SQL", "Internals", "B-Trees"],
      phases: [
        { 
          id: "dbe-p1", title: "Database Internals", description: "Under the hood", 
          topics: [
            { 
              id: "dbe-t1", name: "Storage Engines & Indexes", description: "How data is written", timeEstimate: "3 weeks", difficulty: "Advanced", 
              details: "B-Trees, LSM-Trees, Write-Ahead Logging (WAL), page management, and how indexes actually accelerate lookups.", 
              resources: [
                { title: "Use The Index, Luke", url: "https://use-the-index-luke.com/", type: "docs" },
                { title: "CMU Database Systems Course", url: "https://15445.courses.cs.cmu.edu/fall2022/", type: "course" }
              ] 
            },
            {
              id: "dbe-t2", name: "Concurrency Control", description: "Transactions & ACID", timeEstimate: "2 weeks", difficulty: "Advanced",
              details: "Isolation levels, locks, deadlocks, and Multi-Version Concurrency Control (MVCC) in PostgreSQL.",
              resources: [
                { title: "Database Internals (Book Review)", url: "https://www.databass.dev/", type: "article" }
              ]
            }
          ] 
        }
      ],
    },
    { 
      id: "os-linux", slug: "os-linux", name: "Operating Systems & Linux", 
      description: "Understand OS internals, memory mechanisms, and kernel architecture.", 
      difficulty: "Intermediate", estimatedTime: "3-4 months", icon: "Terminal", 
      tags: ["Linux", "Processes", "Memory"],
      phases: [
        { 
          id: "os-p1", title: "Kernel Operations", description: "How hardware meets software", 
          topics: [
            { 
              id: "os-t1", name: "Processes & Threads", description: "CPU management", timeEstimate: "3 weeks", difficulty: "Intermediate", 
              details: "Process lifecycle, context switching, CPU scheduling algorithms, POSIX threads, and synchronization primitives (Mutexes, Semaphores).", 
              resources: [
                { title: "OSTEP Book (Free)", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/", type: "docs" }
              ] 
            },
            {
              id: "os-t2", name: "Memory Management", description: "RAM virtualization", timeEstimate: "2 weeks", difficulty: "Intermediate",
              details: "Paging, segmentation, TLBs, virtual memory, demand paging, and page replacement algorithms.",
              resources: [
                { title: "MIT 6.S081: Operating System Engineering", url: "https://pdos.csail.mit.edu/6.S081/", type: "course" }
              ]
            }
          ] 
        }
      ],
    },
  ],
};

export const emergingDomain: Domain = {
  id: "emerging", slug: "emerging-tech", name: "Emerging Tech",
  description: "Explore cutting-edge technologies — blockchain, game dev, AR/VR, and IoT.",
  icon: "Rocket", color: "#fb923c",
  subPaths: [
    { 
      id: "blockchain", slug: "blockchain", name: "Blockchain & Web3", 
      description: "Decentralized apps, smart contracts, and cryptography.", 
      difficulty: "Advanced", estimatedTime: "4-6 months", icon: "Link", 
      tags: ["Solidity", "Ethereum", "DeFi"],
      phases: [
        { 
          id: "bc-p1", title: "Web3 Basics", description: "Blockchain foundations", 
          topics: [
            { 
              id: "bc-t1", name: "Blockchain Fundamentals", description: "How blockchains work", timeEstimate: "2 weeks", difficulty: "Beginner", 
              details: "Consensus mechanisms (PoW, PoS), hashing, public/private keys, wallets, and transactions.", 
              resources: [
                { title: "Blockchain Demo", url: "https://andersbrownworth.com/blockchain/", type: "tool" },
                { title: "Ethereum Docs: Introduction", url: "https://ethereum.org/en/developers/docs/intro-to-ethereum/", type: "docs" }
              ] 
            },
            {
              id: "bc-t2", name: "Smart Contracts", description: "Programming the chain", timeEstimate: "3 weeks", difficulty: "Intermediate",
              details: "Writing Solidity contracts, compilation, deployment using Hardhat/Foundry, and interacting with Web3.js / Ethers.js.",
              resources: [
                { title: "CryptoZombies (Learn Solidity)", url: "https://cryptozombies.io/", type: "course" }
              ]
            }
          ] 
        }
      ],
    },
    { 
      id: "game-dev", slug: "game-development", name: "Game Development", 
      description: "Create interactive 2D and 3D games with Unity, Unreal, or Godot.", 
      difficulty: "Intermediate", estimatedTime: "6-10 months", icon: "Gamepad2", 
      tags: ["Unity", "C#", "Game Design"],
      phases: [
        { 
          id: "gd-p1", title: "Engine & Prototyping", description: "Getting something on screen", 
          topics: [
            { 
              id: "gd-t1", name: "Unity & C# Scripting", description: "The industry standard", timeEstimate: "4 weeks", difficulty: "Beginner", 
              details: "Navigating the Unity editor, GameObjects, Prefabs, physics components, and writing C# behavior scripts.", 
              resources: [
                { title: "Unity Learn Pathway", url: "https://learn.unity.com/pathway/unity-essentials", type: "course" },
                { title: "Brackeys: How to make a game", url: "https://www.youtube.com/watch?v=IlKaB1etrik", type: "video" }
              ] 
            },
            {
              id: "gd-t2", name: "Game Mathematics", description: "Moving objects", timeEstimate: "2 weeks", difficulty: "Intermediate",
              details: "Vectors, quaternions for rotation, raycasting, and collision detection math.",
              resources: [
                { title: "Math for Game Devs", url: "https://www.youtube.com/watch?v=mHnFf7ZusJ8&list=PLW3Zl3wyJwWOpdhYedlD-yCB7WQoHf-My", type: "video" }
              ]
            }
          ] 
        }
      ],
    },
    { 
      id: "ar-vr", slug: "ar-vr", name: "AR / VR", 
      description: "Build immersive augmented and virtual reality experiences.", 
      difficulty: "Advanced", estimatedTime: "5-8 months", icon: "Glasses", 
      tags: ["Unity XR", "Spatial Computing"],
      phases: [
        { 
          id: "ar-p1", title: "XR Basics", description: "Immersive development", 
          topics: [
            { 
              id: "ar-t1", name: "Spatial Computing", description: "Interacting in 3D", timeEstimate: "3 weeks", difficulty: "Intermediate", 
              details: "Head tracking, controllers, hand tracking, locomotion (teleportation vs continuous), and UI in world space.", 
              resources: [
                { title: "Unity XR Interaction Toolkit", url: "https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.0/manual/index.html", type: "docs" },
                { title: "Valem XR Tutorials", url: "https://www.youtube.com/c/valem", type: "video" }
              ] 
            }
          ] 
        }
      ],
    }
  ],
};

export const careerDomain: Domain = {
  id: "career", slug: "career-paths", name: "Career & Soft Skills",
  description: "Guides on breaking in, acing interviews, open source, and freelancing.",
  icon: "Briefcase", color: "#e879f9",
  subPaths: [
    { 
      id: "opensource", slug: "open-source", name: "Open Source Contribution", 
      description: "Learn how to contribute to massive open source projects effectively.", 
      difficulty: "Beginner", estimatedTime: "1-3 months", icon: "GitPullRequest", 
      tags: ["Git", "Community", "Portfolio"],
      phases: [
        { 
          id: "oss-p1", title: "Getting Started", description: "Your first PR", 
          topics: [
            { 
              id: "oss-t1", name: "Finding & Evaluating Projects", description: "Where to start", timeEstimate: "1 week", difficulty: "Beginner", 
              details: "Searching for 'good first issues', understanding CONTRIBUTING.md files, and communicating with maintainers.", 
              resources: [
                { title: "First Contributions Repository", url: "https://github.com/firstcontributions/first-contributions", type: "tool" },
                { title: "Open Source Guide", url: "https://opensource.guide/how-to-contribute/", type: "article" }
              ] 
            }
          ] 
        }
      ],
    },
    { 
      id: "interview", slug: "interview-prep", name: "Interview Prep (FAANG)", 
      description: "Crack the grueling coding and behavioral interviews at top tech companies.", 
      difficulty: "Intermediate", estimatedTime: "3-6 months", icon: "Target", 
      tags: ["Problem Solving", "STAR Method"],
      phases: [
        { 
          id: "int-p1", title: "Interview Strategy", description: "The game plan", 
          topics: [
            { 
              id: "int-t1", name: "Algorithmic Patterns", description: "Don't memorize, internalize", timeEstimate: "6 weeks", difficulty: "Intermediate", 
              details: "Mastering the 15 core patterns (Sliding Window, Two Pointers, Fast & Slow pointers, Merge Intervals).", 
              resources: [
                { title: "Grokking the Coding Interview", url: "https://www.designgurus.io/course/grokking-the-coding-interview", type: "course" },
                { title: "NeetCode 150", url: "https://neetcode.io/practice", type: "tool" }
              ] 
            },
            {
              id: "int-t2", name: "Behavioral Interviews", description: "The STAR format", timeEstimate: "1 week", difficulty: "Beginner",
              details: "Situation, Task, Action, Result. Formulating stories about conflict, failure, and leadership.",
              resources: [
                { title: "Amazon Leadership Principles", url: "https://www.amazon.jobs/content/en/our-workplace/leadership-principles", type: "article" }
              ]
            }
          ] 
        }
      ],
    },
    { 
      id: "freelance", slug: "freelancing", name: "Freelancing & Contract Work", 
      description: "Build a career as an independent developer or digital nomad.", 
      difficulty: "Beginner", estimatedTime: "2-4 months", icon: "Laptop", 
      tags: ["Portfolio", "Clients", "Business"],
      phases: [
        { 
          id: "fr-p1", title: "Independent Business", description: "Becoming a solo dev", 
          topics: [
            { 
              id: "fr-t1", name: "Positioning & Portfolio", description: "Getting clients", timeEstimate: "2 weeks", difficulty: "Beginner", 
              details: "Finding a niche, building case studies instead of toy projects, outreach, and writing proposals. Setting up LLCs and invoicing.", 
              resources: [
                { title: "Freelance Developer Guide", url: "https://daily.dev/blog/the-ultimate-guide-to-freelance-software-development", type: "article" },
                { title: "Pricing Frameworks", url: "https://medium.com/@swizec/hourly-billing-is-a-bad-idea-2d6db0ef6998", type: "article" }
              ] 
            }
          ] 
        }
      ],
    }
  ],
};
