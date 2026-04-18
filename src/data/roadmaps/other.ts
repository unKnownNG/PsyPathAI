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
      id: "dsa", slug: "dsa", name: "Data Structures & Algorithms", 
      description: "Interview-focused. Follow this order strictly — each phase builds on the previous.", 
      difficulty: "Intermediate", estimatedTime: "6-12 months", icon: "Code", 
      tags: ["LeetCode", "Two Pointers", "Sliding Window", "Dynamic Programming"],
      phases: [
        { 
          id: "dsa-p1", title: "Foundations", description: "Core data structures and complexity analysis", 
          topics: [
            { 
              id: "dsa-p1-t1", name: "Time & Space Complexity", description: "Big O, Omega, Theta notation", timeEstimate: "1 week", difficulty: "Beginner", 
              details: "Best / Average / Worst case, Analyzing loops and recursion, Space complexity and auxiliary space", 
              resources: [
                { title: "Striver's A2Z DSA Sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course/", type: "tool" },
                { title: "DSA in Tamil – Placement Series (YouTube Search)", url: "https://www.youtube.com/results?search_query=DSA+tamil+placement+series", type: "video" }
              ] 
            },
            { 
              id: "dsa-p1-t2", name: "Arrays", description: "Traversal, insertion, deletion", timeEstimate: "2 weeks", difficulty: "Beginner", 
              details: "Prefix sums, Sliding window technique, Two pointer technique, Kadane's algorithm (max subarray)", 
              resources: [
                { title: "NeetCode 150", url: "https://neetcode.io/practice", type: "tool" },
                { title: "CS Fundamentals Visualizer", url: "https://visualgo.net/en", type: "tool" }
              ] 
            },
            { id: "dsa-p1-t3", name: "Strings", description: "String manipulation", timeEstimate: "1 week", difficulty: "Beginner", details: "Palindrome checks, Anagram detection, Pattern matching basics", resources: [{ title: "Strings Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Strings+tutorial+interview", type: "video" }] },
            { id: "dsa-p1-t4", name: "Linked Lists", description: "Singly and Doubly linked list", timeEstimate: "1 week", difficulty: "Beginner", details: "Reverse a linked list, Floyd's cycle detection, Merge two sorted lists, Find middle of linked list", resources: [{ title: "Linked Lists Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Linked+Lists+tutorial+interview", type: "video" }] },
            { id: "dsa-p1-t5", name: "Stacks", description: "Array and linked list implementation", timeEstimate: "1 week", difficulty: "Intermediate", details: "Valid parentheses, Next Greater Element, Min Stack, Monotonic Stack pattern", resources: [{ title: "Stacks Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Stacks+tutorial+interview", type: "video" }] },
            { id: "dsa-p1-t6", name: "Queues", description: "Queue implementation", timeEstimate: "1 week", difficulty: "Intermediate", details: "Circular queue, Deque (double-ended queue), Sliding window maximum using deque", resources: [{ title: "Queues Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Queues+tutorial+interview", type: "video" }] },
            { id: "dsa-p1-t7", name: "Hashing", description: "HashMap and HashSet usage", timeEstimate: "1 week", difficulty: "Intermediate", details: "Collision handling concepts, Two Sum pattern, Frequency counting, Subarray sum equals K", resources: [{ title: "Hashing Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Hashing+tutorial+interview", type: "video" }] },
            { id: "dsa-p1-t8", name: "Recursion & Backtracking", description: "Recursion tree visualization", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Memoization intro, Subsets and permutations, N-Queens, Sudoku solver", resources: [{ title: "Recursion & Backtracking Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Recursion+%26+Backtracking+tutorial+interview", type: "video" }] }
          ] 
        },
        { 
          id: "dsa-p2", title: "Core DSA", description: "Trees, Graphs, and Sorting — the heart of interviews", 
          topics: [
            { 
              id: "dsa-p2-t1", name: "Binary Trees", description: "Inorder, Preorder, Postorder traversal", timeEstimate: "2 weeks", difficulty: "Intermediate", 
              details: "Height and diameter of tree, Lowest Common Ancestor (LCA), Level order traversal (BFS), Zigzag traversal, Symmetric tree, Path sum problems", 
              resources: [
                { title: "Striver's Graph Series (YouTube)", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn", type: "video" },
                { title: "Graph Theory Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=graph+theory+DSA+tamil+tutorial", type: "video" }
              ] 
            },
            { id: "dsa-p2-t2", name: "Binary Search Trees (BST)", description: "Insert, delete, search in BST", timeEstimate: "1 week", difficulty: "Intermediate", details: "Validate a BST, Kth smallest/largest, Inorder successor and predecessor, Convert sorted array to BST", resources: [{ title: "Binary Search Trees (BST) Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Binary+Search+Trees+(BST)+tutorial+interview", type: "video" }] },
            { id: "dsa-p2-t3", name: "Heaps & Priority Queue", description: "Min-heap and Max-heap", timeEstimate: "1 week", difficulty: "Intermediate", details: "Heap sort, Kth largest element, Merge K sorted lists, Top K frequent elements, Median from data stream", resources: [{ title: "Heaps & Priority Queue Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Heaps+%26+Priority+Queue+tutorial+interview", type: "video" }] },
            { id: "dsa-p2-t4", name: "Binary Search", description: "Classic binary search", timeEstimate: "1 week", difficulty: "Intermediate", details: "Search in rotated sorted array, Find first and last position, Binary search on answer, Aggressive cows", resources: [{ title: "Binary Search Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Binary+Search+tutorial+interview", type: "video" }] },
            { id: "dsa-p2-t5", name: "Sorting Algorithms", description: "Bubble, Selection, Insertion sort", timeEstimate: "1 week", difficulty: "Intermediate", details: "Merge Sort, Quick Sort and partitioning, Counting sort / Radix sort, Sort colors", resources: [{ title: "Sorting Algorithms Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Sorting+Algorithms+tutorial+interview", type: "video" }] },
            { id: "dsa-p2-t6", name: "Graphs – Basics", description: "Adjacency list vs matrix", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "BFS and DFS traversal, Detect cycle, Bipartite graph check, Topological sort", resources: [{ title: "Graphs – Basics Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Graphs+%E2%80%93+Basics+tutorial+interview", type: "video" }] },
            { id: "dsa-p2-t7", name: "Graphs – Shortest Path", description: "Dijkstra's algorithm", timeEstimate: "1 week", difficulty: "Advanced", details: "Bellman-Ford algorithm, Floyd-Warshall, 0/1 BFS", resources: [{ title: "Graphs – Shortest Path Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Graphs+%E2%80%93+Shortest+Path+tutorial+interview", type: "video" }] },
            { id: "dsa-p2-t8", name: "Graphs – Advanced", description: "Disjoint Set Union (DSU)", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Minimum Spanning Tree, Strongly Connected Components, Bridges and Articulation Points", resources: [{ title: "Graphs – Advanced Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Graphs+%E2%80%93+Advanced+tutorial+interview", type: "video" }] }
          ] 
        },
        { 
          id: "dsa-p3", title: "Dynamic Programming & Advanced", description: "DP patterns + advanced topics", 
          topics: [
            { 
              id: "dsa-p3-t1", name: "Dynamic Programming – 1D", description: "Fibonacci and climbing stairs", timeEstimate: "2 weeks", difficulty: "Advanced", 
              details: "House robber I and II, Coin change (min coins), Longest Increasing Subsequence (LIS), Word break problem", 
              resources: [
                { title: "Striver's DP Series (YouTube)", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY", type: "video" },
                { title: "Dynamic Programming Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=dynamic+programming+tamil+tutorial+placement", type: "video" },
                { title: "LeetCode DP Study Plan", url: "https://leetcode.com/study-plan/dynamic-programming/", type: "tool" },
                { title: "CSES Problem Set – DP Section", url: "https://cses.fi/problemset/list/", type: "tool" }
              ] 
            },
            { id: "dsa-p3-t2", name: "Dynamic Programming – 2D", description: "0/1 Knapsack", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Subset sum, Longest Common Subsequence (LCS), Edit distance, Matrix chain multiplication, Unique paths in grid", resources: [{ title: "Dynamic Programming – 2D Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Dynamic+Programming+%E2%80%93+2D+tutorial+interview", type: "video" }] },
            { id: "dsa-p3-t3", name: "DP on Trees and Graphs", description: "Diameter of tree using DP", timeEstimate: "1 week", difficulty: "Advanced", details: "Maximum path sum in binary tree, DP on DAGs", resources: [{ title: "DP on Trees and Graphs Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=DP+on+Trees+and+Graphs+tutorial+interview", type: "video" }] },
            { id: "dsa-p3-t4", name: "Tries", description: "Trie insert, search, startsWith", timeEstimate: "1 week", difficulty: "Advanced", details: "Longest common prefix, Word search II, XOR problems using Trie", resources: [{ title: "Tries Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Tries+tutorial+interview", type: "video" }] },
            { id: "dsa-p3-t5", name: "Segment Trees & Fenwick Trees", description: "Range sum query", timeEstimate: "1 week", difficulty: "Advanced", details: "Range minimum query, Point updates, BIT for prefix sums", resources: [{ title: "Segment Trees & Fenwick Trees Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Segment+Trees+%26+Fenwick+Trees+tutorial+interview", type: "video" }] },
            { id: "dsa-p3-t6", name: "Greedy Algorithms", description: "Activity selection", timeEstimate: "1 week", difficulty: "Advanced", details: "Jump Game, Minimum platforms, Fractional Knapsack, Huffman encoding", resources: [{ title: "Greedy Algorithms Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Greedy+Algorithms+tutorial+interview", type: "video" }] },
            { id: "dsa-p3-t7", name: "Bit Manipulation", description: "AND, OR, XOR, NOT, shifts", timeEstimate: "1 week", difficulty: "Intermediate", details: "Check power of 2, Count set bits, Single number, Bitmask DP intro", resources: [{ title: "Bit Manipulation Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Bit+Manipulation+tutorial+interview", type: "video" }] },
            { id: "dsa-p3-t8", name: "Math & Number Theory", description: "GCD and LCM", timeEstimate: "1 week", difficulty: "Intermediate", details: "Prime sieve, Modular arithmetic, Combinatorics basics", resources: [{ title: "Math & Number Theory Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Math+%26+Number+Theory+tutorial+interview", type: "video" }] }
          ] 
        }
      ],
    },
    { 
      id: "sys-design", slug: "system-design", name: "System Design", 
      description: "Understand concepts and apply them to real-world design scenarios. Focus on being able to talk through trade-offs.", 
      difficulty: "Advanced", estimatedTime: "3-5 months", icon: "Network", 
      tags: ["Scalability", "Microservices", "Architecture", "Distributed Systems"],
      phases: [
        { 
          id: "sd-p1", title: "Fundamentals", description: "Client-Server Architecture and networking basics", 
          topics: [
            { 
              id: "sd-p1-t1", name: "Client-Server Architecture", description: "IP, DNS, HTTP/HTTPS basics", timeEstimate: "1 week", difficulty: "Intermediate", 
              details: "Understand the core request-response model and basic networking protocols.", 
              resources: [
                { title: "System Design Primer (GitHub)", url: "https://github.com/donnemartin/system-design-primer", type: "docs" },
                { title: "System Design Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=system+design+tamil+interview+2024", type: "video" }
              ] 
            },
            { id: "sd-p1-t2", name: "REST vs GraphQL", description: "API Paradigms", timeEstimate: "1 week", difficulty: "Intermediate", details: "Tradeoffs between REST and GraphQL.", resources: [{ title: "REST vs GraphQL Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=REST+vs+GraphQL+tutorial+interview", type: "video" }] },
            { id: "sd-p1-t3", name: "System Metrics", description: "Latency, Throughput, Availability", timeEstimate: "1 week", difficulty: "Intermediate", details: "Latency, Throughput, Availability, Consistency.", resources: [{ title: "System Metrics Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=System+Metrics+tutorial+interview", type: "video" }] },
            { id: "sd-p1-t4", name: "Scaling", description: "Horizontal vs Vertical Scaling", timeEstimate: "1 week", difficulty: "Intermediate", details: "Understand how to add more power vs more machines.", resources: [{ title: "Scaling Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Scaling+tutorial+interview", type: "video" }] },
            { id: "sd-p1-t5", name: "Load Balancers", description: "Distributing traffic", timeEstimate: "1 week", difficulty: "Intermediate", details: "Hardware and software load balancers, algorithms like Round Robin.", resources: [{ title: "Load Balancers Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Load+Balancers+tutorial+interview", type: "video" }] },
            { id: "sd-p1-t6", name: "CDN", description: "Content Delivery Networks", timeEstimate: "1 week", difficulty: "Intermediate", details: "Edge locations and pushing static content closer to users.", resources: [{ title: "CDN Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=CDN+tutorial+interview", type: "video" }] },
            { id: "sd-p1-t7", name: "Caching", description: "Caching strategies", timeEstimate: "1 week", difficulty: "Intermediate", details: "Caching types, TTL, eviction policies (LRU), Write-through/Write-back.", resources: [{ title: "ByteByteGo – System Design Basics", url: "https://www.youtube.com/@ByteByteGo", type: "video" }] }
          ] 
        },
        { 
          id: "sd-p2", title: "Core Concepts", description: "Data persistence and distributed patterns", 
          topics: [
            { 
              id: "sd-p2-t1", name: "Databases", description: "SQL vs NoSQL", timeEstimate: "1 week", difficulty: "Advanced", 
              details: "Databases – SQL vs NoSQL, when to use what.", 
              resources: [
                { title: "Gaurav Sen – System Design", url: "https://www.youtube.com/@gkcs", type: "video" },
                { title: "System Design Interview Book (Alex Xu)", url: "https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF", type: "docs" }
              ] 
            },
            { id: "sd-p2-t2", name: "Database Scaling", description: "Replication and Sharding", timeEstimate: "1 week", difficulty: "Advanced", details: "Database Replication and Sharding techniques.", resources: [{ title: "Database Scaling Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Database+Scaling+tutorial+interview", type: "video" }] },
            { id: "sd-p2-t3", name: "Indexes", description: "Query Optimization", timeEstimate: "1 week", difficulty: "Advanced", details: "Indexes and Query Optimization strategies.", resources: [{ title: "Indexes Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Indexes+tutorial+interview", type: "video" }] },
            { id: "sd-p2-t4", name: "Message Queues", description: "Kafka, RabbitMQ", timeEstimate: "1 week", difficulty: "Advanced", details: "Asynchronous communication and pub/sub patterns.", resources: [{ title: "Message Queues Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Message+Queues+tutorial+interview", type: "video" }] },
            { id: "sd-p2-t5", name: "Consistent Hashing", description: "Distributed caching", timeEstimate: "1 week", difficulty: "Advanced", details: "Distributed hashing without massive key remapping.", resources: [{ title: "System Design Course Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=system+design+concepts+tamil", type: "video" }] },
            { id: "sd-p2-t6", name: "CAP Theorem", description: "Consistency, Availability, Partition Tolerance", timeEstimate: "1 week", difficulty: "Advanced", details: "The tradeoffs of distributed data stores.", resources: [{ title: "CAP Theorem Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=CAP+Theorem+tutorial+interview", type: "video" }] },
            { id: "sd-p2-t7", name: "Rate Limiting & Gateways", description: "API Gateway and Microservices basics", timeEstimate: "1 week", difficulty: "Advanced", details: "Token bucket, leaky bucket algorithms.", resources: [{ title: "Rate Limiting & Gateways Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Rate+Limiting+%26+Gateways+tutorial+interview", type: "video" }] },
            { id: "sd-p2-t8", name: "Blob Storage", description: "S3 style object storage", timeEstimate: "1 week", difficulty: "Advanced", details: "Storing massive unstructured data efficiently.", resources: [{ title: "Blob Storage Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Blob+Storage+tutorial+interview", type: "video" }] }
          ] 
        },
        { 
          id: "sd-p3", title: "Design Practice", description: "Real-world system design interviews", 
          topics: [
            { 
              id: "sd-p3-t1", name: "Design URL Shortener (Bitly)", description: "Practice classic problem", timeEstimate: "1 week", difficulty: "Advanced", 
              details: "Handling generating short links, databases for massive read arrays, analytics.", 
              resources: [
                { title: "ByteByteGo – Real System Designs", url: "https://www.youtube.com/@ByteByteGo", type: "video" },
                { title: "Exponent System Design Interview", url: "https://www.youtube.com/c/ExponentTV", type: "video" }
              ] 
            },
            { id: "sd-p3-t2", name: "Design Pastebin", description: "Data storage focus", timeEstimate: "1 week", difficulty: "Advanced", details: "Handling strings of data and expiration.", resources: [{ title: "Design Pastebin Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Design+Pastebin+tutorial+interview", type: "video" }] },
            { id: "sd-p3-t3", name: "Design a Notification System", description: "Message delivery", timeEstimate: "1 week", difficulty: "Advanced", details: "Push notifications, SMS, async queues.", resources: [{ title: "Design a Notification System Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Design+a+Notification+System+tutorial+interview", type: "video" }] },
            { id: "sd-p3-t4", name: "Design Twitter/Instagram Feed", description: "Timeline generation", timeEstimate: "1 week", difficulty: "Advanced", details: "Fanout on write vs fanout on read.", resources: [{ title: "Design Twitter/Instagram Feed Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Design+Twitter%2FInstagram+Feed+tutorial+interview", type: "video" }] },
            { id: "sd-p3-t5", name: "Design a Rate Limiter", description: "API Defenses", timeEstimate: "1 week", difficulty: "Advanced", details: "Redis techniques for rate limits.", resources: [{ title: "Design a Rate Limiter Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Design+a+Rate+Limiter+tutorial+interview", type: "video" }] },
            { id: "sd-p3-t6", name: "Design Netflix", description: "Video streaming", timeEstimate: "1 week", difficulty: "Advanced", details: "CDN heavily, blob storage, transcoder services.", resources: [{ title: "Design Netflix Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Design+Netflix+tutorial+interview", type: "video" }] },
            { id: "sd-p3-t7", name: "Design Uber", description: "Location + matching", timeEstimate: "1 week", difficulty: "Advanced", details: "Geospatial queries and quadtrees.", resources: [{ title: "Design Uber Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Design+Uber+tutorial+interview", type: "video" }] },
            { id: "sd-p3-t8", name: "Design WhatsApp", description: "Chat + real-time", timeEstimate: "1 week", difficulty: "Advanced", details: "Websockets, presence service, end to end encryption.", resources: [{ title: "System Design Interview Prep Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=system+design+interview+questions+tamil", type: "video" }] }
          ] 
        }
      ],
    },
    { 
      id: "databases", slug: "databases", name: "Databases", 
      description: "Focus on SQL fundamentals and relational design. NoSQL and advanced topics are secondary for most student interviews.", 
      difficulty: "Intermediate", estimatedTime: "2-4 months", icon: "Database", 
      tags: ["SQL", "Relational", "NoSQL", "Optimization"],
      phases: [
        { 
          id: "db-p1", title: "SQL Fundamentals", description: "Core SQL querying", 
          topics: [
            { 
              id: "db-p1-t1", name: "What is a RDBMS", description: "Tables, rows, columns", timeEstimate: "1 week", difficulty: "Beginner", 
              details: "Understand relational DB structure.", 
              resources: [
                { title: "SQL Full Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY", type: "video" },
                { title: "SQL Tamil Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=sql+tutorial+tamil+beginners", type: "video" }
              ] 
            },
            { id: "db-p1-t2", name: "CRUD Operations", description: "CREATE, INSERT, UPDATE, DELETE", timeEstimate: "1 week", difficulty: "Beginner", details: "Data manipulation language.", resources: [{ title: "CRUD Operations Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=CRUD+Operations+tutorial+interview", type: "video" }] },
            { id: "db-p1-t3", name: "Filters", description: "SELECT with WHERE, ORDER BY, LIMIT", timeEstimate: "1 week", difficulty: "Beginner", details: "Querying specific data.", resources: [{ title: "Filters Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Filters+tutorial+interview", type: "video" }] },
            { id: "db-p1-t4", name: "Aggregate functions", description: "COUNT, SUM, AVG, MIN, MAX", timeEstimate: "1 week", difficulty: "Beginner", details: "Aggregating rows.", resources: [{ title: "SQLZoo – Interactive Practice", url: "https://sqlzoo.net/", type: "tool" }] },
            { id: "db-p1-t5", name: "Grouping", description: "GROUP BY and HAVING", timeEstimate: "1 week", difficulty: "Intermediate", details: "Filtering grouped data.", resources: [{ title: "Grouping Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Grouping+tutorial+interview", type: "video" }] },
            { id: "db-p1-t6", name: "JOINs", description: "INNER, LEFT, RIGHT, FULL OUTER", timeEstimate: "1 week", difficulty: "Intermediate", details: "Combining tables.", resources: [{ title: "JOINs Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=JOINs+tutorial+interview", type: "video" }] },
            { id: "db-p1-t7", name: "Subqueries", description: "Nested SELECT", timeEstimate: "1 week", difficulty: "Intermediate", details: "Queries inside queries.", resources: [{ title: "Subqueries Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Subqueries+tutorial+interview", type: "video" }] },
            { id: "db-p1-t8", name: "Constraints", description: "Primary Key, Foreign Key, Unique, NOT NULL", timeEstimate: "1 week", difficulty: "Intermediate", details: "Enforcing data integrity.", resources: [{ title: "W3Schools SQL", url: "https://www.w3schools.com/sql/", type: "docs" }] }
          ] 
        },
        { 
          id: "db-p2", title: "Database Design & Optimization", description: "Designing efficient schemas", 
          topics: [
            { 
              id: "db-p2-t1", name: "ER Diagrams", description: "Entity-Relationship Diagrams", timeEstimate: "1 week", difficulty: "Intermediate", 
              details: "Visualizing database architecture.", 
              resources: [
                { title: "Database Design Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=ztHopE5Wnpc", type: "video" },
                { title: "DBMS Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=database+management+system+tamil+tutorial", type: "video" }
              ] 
            },
            { id: "db-p2-t2", name: "Normalization", description: "1NF, 2NF, 3NF, BCNF", timeEstimate: "1 week", difficulty: "Intermediate", details: "Reducing data redundancy.", resources: [{ title: "Normalization Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Normalization+tutorial+interview", type: "video" }] },
            { id: "db-p2-t3", name: "Indexing", description: "B-Tree, clustered vs non-clustered", timeEstimate: "1 week", difficulty: "Advanced", details: "Speeding up queries.", resources: [{ title: "Indexing Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Indexing+tutorial+interview", type: "video" }] },
            { id: "db-p2-t4", name: "Transactions", description: "ACID properties", timeEstimate: "1 week", difficulty: "Advanced", details: "Atomicity, Consistency, Isolation, Durability.", resources: [{ title: "Transactions Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Transactions+tutorial+interview", type: "video" }] },
            { id: "db-p2-t5", name: "Isolation levels", description: "Read Uncommitted to Serializable", timeEstimate: "1 week", difficulty: "Advanced", details: "Handling concurrency issues.", resources: [{ title: "Isolation levels Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Isolation+levels+tutorial+interview", type: "video" }] },
            { id: "db-p2-t6", name: "Views, Procedures, Triggers", description: "Database logic", timeEstimate: "1 week", difficulty: "Advanced", details: "Stored SQL logic.", resources: [{ title: "Views, Procedures, Triggers Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Views%2C+Procedures%2C+Triggers+tutorial+interview", type: "video" }] },
            { id: "db-p2-t7", name: "Query optimization", description: "EXPLAIN ANALYZE", timeEstimate: "1 week", difficulty: "Advanced", details: "Reading query plans.", resources: [{ title: "Use The Index Luke (Indexing Guide)", url: "https://use-the-index-luke.com/", type: "docs" }] },
            { id: "db-p2-t8", name: "Connection pooling", description: "Managing DB connections", timeEstimate: "1 week", difficulty: "Advanced", details: "Reusing persistent connections.", resources: [{ title: "Connection pooling Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Connection+pooling+tutorial+interview", type: "video" }] }
          ] 
        },
        { 
          id: "db-p3", title: "NoSQL & Real-World Usage", description: "Non-relational concepts", 
          topics: [
            { 
              id: "db-p3-t1", name: "NoSQL types", description: "Document, Key-Value, Column, Graph", timeEstimate: "1 week", difficulty: "Intermediate", 
              details: "Different architectures for unstructured data.", 
              resources: [
                { title: "MongoDB Crash Course", url: "https://www.youtube.com/watch?v=ofme2o29ngU", type: "video" },
                { title: "NoSQL Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=nosql+mongodb+tamil+tutorial", type: "video" }
              ] 
            },
            { id: "db-p3-t2", name: "MongoDB basics", description: "Documents, collections, CRUD", timeEstimate: "1 week", difficulty: "Intermediate", details: "JSON-like document store.", resources: [{ title: "MongoDB basics Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=MongoDB+basics+tutorial+interview", type: "video" }] },
            { id: "db-p3-t3", name: "Redis", description: "Caching, pub/sub, data structures", timeEstimate: "1 week", difficulty: "Advanced", details: "In-memory datastore.", resources: [{ title: "Redis Explained", url: "https://www.youtube.com/watch?v=G1rOthIU-uo", type: "video" }] },
            { id: "db-p3-t4", name: "SQL vs NoSQL", description: "When to choose what", timeEstimate: "1 week", difficulty: "Intermediate", details: "Tradeoffs.", resources: [{ title: "SQL vs NoSQL Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=SQL+vs+NoSQL+tutorial+interview", type: "video" }] },
            { id: "db-p3-t5", name: "Database sharding", description: "Partitioning data", timeEstimate: "1 week", difficulty: "Advanced", details: "Splitting data across nodes.", resources: [{ title: "Database sharding Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Database+sharding+tutorial+interview", type: "video" }] },
            { id: "db-p3-t6", name: "Connecting DB to backend", description: "ORM vs raw queries", timeEstimate: "1 week", difficulty: "Intermediate", details: "Application layer integration.", resources: [{ title: "Connecting DB to backend Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Connecting+DB+to+backend+tutorial+interview", type: "video" }] },
            { id: "db-p3-t7", name: "Migrations", description: "Schema versioning", timeEstimate: "1 week", difficulty: "Advanced", details: "Updating DB structures without losing data.", resources: [{ title: "LeetCode SQL 50", url: "https://leetcode.com/studyplan/top-sql-50/", type: "tool" }] }
          ] 
        }
      ],
    },
    { 
      id: "os", slug: "operating-systems", name: "Operating Systems", 
      description: "Essential for systems roles and core CS interviews. Concepts > implementation at this level.", 
      difficulty: "Intermediate", estimatedTime: "2-4 months", icon: "Monitor", 
      tags: ["Linux", "Processes", "Memory", "Concurrency"],
      phases: [
        { 
          id: "os-p1", title: "Foundations", description: "OS Roles and Processes", 
          topics: [
            { 
              id: "os-p1-t1", name: "What is an OS", description: "Role and components", timeEstimate: "1 week", difficulty: "Beginner", 
              details: "Understand the kernel vs user space.", 
              resources: [
                { title: "OS Concepts – Neso Academy", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O", type: "video" },
                { title: "Operating Systems Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=operating+systems+tamil+tutorial+full+course", type: "video" }
              ] 
            },
            { id: "os-p1-t2", name: "Process vs Thread", description: "Creation and lifecycle", timeEstimate: "1 week", difficulty: "Beginner", details: "Concurrency basics.", resources: [{ title: "Process vs Thread Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Process+vs+Thread+tutorial+interview", type: "video" }] },
            { id: "os-p1-t3", name: "Process states", description: "Ready, running, waiting, terminated", timeEstimate: "1 week", difficulty: "Beginner", details: "Lifecycle models.", resources: [{ title: "Process states Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Process+states+tutorial+interview", type: "video" }] },
            { id: "os-p1-t4", name: "CPU Scheduling", description: "FCFS, SJF, Round Robin, Priority", timeEstimate: "1 week", difficulty: "Intermediate", details: "How OS allocates CPU time.", resources: [{ title: "CPU Scheduling Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=CPU+Scheduling+tutorial+interview", type: "video" }] },
            { id: "os-p1-t5", name: "Context Switching", description: "Overhead of multiprocessing", timeEstimate: "1 week", difficulty: "Intermediate", details: "Saving and restoring state.", resources: [{ title: "Context Switching Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Context+Switching+tutorial+interview", type: "video" }] },
            { id: "os-p1-t6", name: "System calls", description: "fork, exec, wait", timeEstimate: "1 week", difficulty: "Intermediate", details: "Interfacing with the kernel.", resources: [{ title: "OS Three Easy Pieces (Free Book)", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/", type: "docs" }] },
            { id: "os-p1-t7", name: "IPC", description: "Pipes, shared memory, message queues", timeEstimate: "1 week", difficulty: "Advanced", details: "Inter-Process Communication.", resources: [{ title: "IPC Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=IPC+tutorial+interview", type: "video" }] }
          ] 
        },
        { 
          id: "os-p2", title: "Memory & Synchronization", description: "Managing resources concurrently", 
          topics: [
            { 
              id: "os-p2-t1", name: "Memory layout", description: "Stack, heap, code, data segments", timeEstimate: "1 week", difficulty: "Intermediate", 
              details: "Where a program's data lives in RAM.", 
              resources: [
                { title: "Deadlock & Synchronization – Gate Smashers", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p", type: "video" },
                { title: "Memory Management Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=memory+management+operating+system+tamil", type: "video" }
              ] 
            },
            { id: "os-p2-t2", name: "Virtual Memory", description: "Paging", timeEstimate: "1 week", difficulty: "Intermediate", details: "Abstracting memory addresses.", resources: [{ title: "Virtual Memory Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Virtual+Memory+tutorial+interview", type: "video" }] },
            { id: "os-p2-t3", name: "Page replacement", description: "LRU, FIFO, Optimal", timeEstimate: "1 week", difficulty: "Intermediate", details: "Algorithms for swap space.", resources: [{ title: "Page replacement Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Page+replacement+tutorial+interview", type: "video" }] },
            { id: "os-p2-t4", name: "Thrashing", description: "Constant page faults", timeEstimate: "1 week", difficulty: "Intermediate", details: "When memory gets too full.", resources: [{ title: "Thrashing Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Thrashing+tutorial+interview", type: "video" }] },
            { id: "os-p2-t5", name: "Locks", description: "Mutex, Semaphores, Monitors", timeEstimate: "1 week", difficulty: "Advanced", details: "Synchronization constructs.", resources: [{ title: "Locks Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Locks+tutorial+interview", type: "video" }] },
            { id: "os-p2-t6", name: "Deadlock", description: "Conditions, prevention, detection", timeEstimate: "1 week", difficulty: "Advanced", details: "Handling halting conditions.", resources: [{ title: "Deadlock Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Deadlock+tutorial+interview", type: "video" }] },
            { id: "os-p2-t7", name: "Crises in Concurrency", description: "Race Conditions, Producer-Consumer", timeEstimate: "1 week", difficulty: "Advanced", details: "Critical sections and Classic PC problem / Readers-Writers problem.", resources: [{ title: "OS Three Easy Pieces – Concurrency Chapter", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf", type: "docs" }] }
          ] 
        },
        { 
          id: "os-p3", title: "File Systems & I/O", description: "Permanent storage", 
          topics: [
            { 
              id: "os-p3-t1", name: "File system structure", description: "Inodes, blocks, directories", timeEstimate: "1 week", difficulty: "Intermediate", 
              details: "How files are structurally represented.", 
              resources: [
                { title: "File Systems – Hussein Nasser", url: "https://www.youtube.com/watch?v=KN8YgJnShPM", type: "video" },
                { title: "Linux Internals Tamil (YouTube Search)", url: "https://www.youtube.com/results?search_query=linux+internals+tamil+tutorial", type: "video" }
              ] 
            },
            { id: "os-p3-t2", name: "FAT vs ext4 vs NTFS", description: "FS implementations", timeEstimate: "1 week", difficulty: "Intermediate", details: "Common file systems.", resources: [{ title: "FAT vs ext4 vs NTFS Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=FAT+vs+ext4+vs+NTFS+tutorial+interview", type: "video" }] },
            { id: "os-p3-t3", name: "Disk scheduling", description: "SCAN, SSTF", timeEstimate: "1 week", difficulty: "Advanced", details: "Disk read algorithms.", resources: [{ title: "Disk scheduling Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Disk+scheduling+tutorial+interview", type: "video" }] },
            { id: "os-p3-t4", name: "I/O buffering", description: "Caching and buffers", timeEstimate: "1 week", difficulty: "Advanced", details: "I/O interfaces.", resources: [{ title: "I/O buffering Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=I%2FO+buffering+tutorial+interview", type: "video" }] },
            { id: "os-p3-t5", name: "Interrupts and DMA", description: "Hardware I/O processing", timeEstimate: "1 week", difficulty: "Advanced", details: "Direct Memory Access basics.", resources: [{ title: "Interrupts and DMA Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Interrupts+and+DMA+tutorial+interview", type: "video" }] },
            { id: "os-p3-t6", name: "Kernel vs User space", description: "Privilege rings", timeEstimate: "1 week", difficulty: "Advanced", details: "Security isolation.", resources: [{ title: "Kernel vs User space Tutorial (YouTube Search)", url: "https://www.youtube.com/results?search_query=Kernel+vs+User+space+tutorial+interview", type: "video" }] },
            { id: "os-p3-t7", name: "Linux internals basics", description: "/proc, signals", timeEstimate: "1 week", difficulty: "Advanced", details: "Practical linux mechanisms.", resources: [{ title: "Linux Command Line (Free Book)", url: "https://linuxcommand.org/tlcl.php", type: "docs" }] }
          ] 
        }
      ]
    }
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
