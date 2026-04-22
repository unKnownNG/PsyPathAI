import { Domain } from "../types";

export const languagesDomain: Domain = {
  id: "languages",
  slug: "programming-languages",
  name: "Programming Languages",
  description: "Master foundational and modern programming languages from beginner concepts to advanced paradigms.",
  icon: "Code2",
  color: "#3b82f6",
  subPaths: [
    {
      id: "python",
      slug: "python",
      name: "Python",
      description: "Learn Python from basic syntax to advanced topics like OOP, decorators, and generators.",
      difficulty: "Beginner",
      estimatedTime: "2-3 Months",
      tags: ["Scripting", "Data Science", "Backend", "AI"],
      icon: "file-code-2",
      resources: [
        { title: "Python Full Course for Beginners – Mosh", url: "https://www.youtube.com/watch?v=kqtD5dpn9C8", type: "video" },
        { title: "Official Python Documentation", url: "https://docs.python.org/3/tutorial/", type: "docs" },
        { title: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/", type: "course" },
        { title: "Corey Schafer – Python Tutorials", url: "https://www.youtube.com/@coreyms", type: "course" },
        { title: "Python Full Course Tamil", url: "https://www.youtube.com/results?search_query=python+full+course+tamil+beginners", type: "video" },
      ],
      phases: [
        {
          id: "py-phase-1",
          title: "Foundations",
          description: "Core concepts to get started with Python.",
          topics: [
            {
              id: "py-p1-t1",
              name: "Variables, Data Types, Type Casting",
              description: "Basic syntax and primitive types.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Learn how to store and manipulate different data types in Python.",
              resources: [
                { title: "Python for Beginners – Mosh", url: "https://www.youtube.com/watch?v=kqtD5dpn9C8", type: "video" },
                { title: "Python Types (Docs)", url: "https://docs.python.org/3/library/stdtypes.html", type: "docs" }
              ]
            },
            {
              id: "py-p1-t2",
              name: "Conditionals and Loops",
              description: "Control flow with if-else and loops.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Understand how to control the execution path of your code.",
              resources: [
                { title: "Python If...Else (W3Schools)", url: "https://www.w3schools.com/python/python_conditions.asp", type: "article" },
                { title: "For & While Loops", url: "https://www.youtube.com/watch?v=6iF8Xb7Z3wQ", type: "video" }
              ]
            },
            {
              id: "py-p1-t3",
              name: "Functions and Recursion",
              description: "Reusability and self-calling functions.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Write reusable blocks of code and understand recursion.",
              resources: [
                { title: "Defining Functions (RealPython)", url: "https://realpython.com/defining-your-own-python-function/", type: "article" },
                { title: "Recursion in Python", url: "https://www.youtube.com/watch?v=wMNrSM5RFMc", type: "video" }
              ]
            },
            {
              id: "py-p1-t4",
              name: "Lists, Tuples, Sets, Dictionaries",
              description: "Python's core data structures.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Learn the characteristics and use cases for each collection.",
              resources: [
                { title: "Python Data Structures", url: "https://docs.python.org/3/tutorial/datastructures.html", type: "docs" },
                { title: "Lists & Tuples Tutorial", url: "https://www.youtube.com/watch?v=W8KRlNvNUM0", type: "video" }
              ]
            },
            {
              id: "py-p1-t5",
              name: "String Methods",
              description: "Manipulating and formatting text.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Understand string manipulation and formatting.",
              resources: [
                { title: "String Methods (W3Schools)", url: "https://www.w3schools.com/python/python_ref_string.asp", type: "article" },
                { title: "String Formatting Guide", url: "https://realpython.com/python-string-formatting/", type: "article" }
              ]
            },
            {
              id: "py-p1-t6",
              name: "File I/O",
              description: "Reading and writing to files.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Learn to handle files on the operating system.",
              resources: [
                { title: "File Handling Guide", url: "https://www.geeksforgeeks.org/file-handling-in-python/", type: "article" },
                { title: "Automate the Boring Stuff - Files", url: "https://automatetheboringstuff.com/2e/chapter9/", type: "docs" }
              ]
            },
            {
              id: "py-p1-t7",
              name: "Exception Handling",
              description: "try, except, finally blocks.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Gracefully recover from runtime errors.",
              resources: [
                { title: "Python Exceptions (RealPython)", url: "https://realpython.com/python-exceptions/", type: "article" },
                { title: "Corey Schafer Try/Except", url: "https://www.youtube.com/watch?v=NIWwJbo-9_8", type: "video" }
              ]
            },
            {
              id: "py-p1-t8",
              name: "Modules and pip",
              description: "Importing and installing packages.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Use external packages and organize your code into modules.",
              resources: [
                { title: "Python Modules Basics", url: "https://docs.python.org/3/tutorial/modules.html", type: "docs" },
                { title: "How to use Pip", url: "https://www.w3schools.com/python/python_pip.asp", type: "article" },
                { title: "Snakify – Interactive Practice", url: "https://snakify.org/", type: "tool" }
              ]
            }
          ]
        },
        {
          id: "py-phase-2",
          title: "Intermediate",
          description: "Object Oriented Programming and Intermediate concepts.",
          topics: [
            {
              id: "py-p2-t1",
              name: "OOP – Classes, Inheritance, Polymorphism",
              description: "Object-oriented programming principles.",
              timeEstimate: "1-2 Weeks",
              difficulty: "Intermediate",
              details: "Design applications by grouping related behaviors into classes.",
              resources: [
                { title: "Intermediate Python – Patrick Loeber", url: "https://www.youtube.com/watch?v=HGOBQPFzWKo", type: "video" },
                { title: "Object-Oriented Programming (RealPython)", url: "https://realpython.com/python3-object-oriented-programming/", type: "article" }
              ]
            },
            {
              id: "py-p2-t2",
              name: "Decorators and Closures",
              description: "Function wrapping.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Write highly modular code using decorators.",
              resources: [
                { title: "Primer on Decorators", url: "https://realpython.com/primer-on-python-decorators/", type: "article" },
                { title: "Decorators Tutorial Video", url: "https://www.youtube.com/watch?v=FsAPt_9Bf3U", type: "video" }
              ]
            },
            {
              id: "py-p2-t3",
              name: "Generators and Iterators",
              description: "Memory efficient loops.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Use yield statements for lazy evaluation.",
              resources: [
                { title: "Generators Explained", url: "https://realpython.com/introduction-to-python-generators/", type: "article" },
                { title: "Corey Schafer Generators", url: "https://www.youtube.com/watch?v=bD05uGo_sVI", type: "video" }
              ]
            },
            {
              id: "py-p2-t4",
              name: "Lambda, map, filter",
              description: "Functional programming concepts.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Apply functional patterns to collections.",
              resources: [
                { title: "Functional Programming in Python", url: "https://realpython.com/python-functional-programming/", type: "article" }
              ]
            },
            {
              id: "py-p2-t5",
              name: "Regular Expressions",
              description: "Pattern matching in strings.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Parse and match text efficiently.",
              resources: [
                { title: "Regex101 Interpreter", url: "https://regex101.com/", type: "tool" },
                { title: "Python re Module Demo", url: "https://www.youtube.com/watch?v=K8L6KVGG-7o", type: "video" }
              ]
            },
            {
              id: "py-p2-t6",
              name: "Working with APIs (requests library)",
              description: "HTTP networking.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Make external API requests and parse JSON.",
              resources: [
                { title: "Python Requests Tutorial", url: "https://realpython.com/python-requests/", type: "article" },
                { title: "JSON & APIs", url: "https://www.youtube.com/watch?v=9N6a-vlIG44", type: "video" }
              ]
            },
            {
              id: "py-p2-t7",
              name: "Virtual Environments",
              description: "Project dependency isolation.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Keep projects and their dependencies safely separate.",
              resources: [
                { title: "Virtual Environments Primer", url: "https://realpython.com/python-virtual-environments-a-primer/", type: "article" }
              ]
            },
            {
              id: "py-p2-t8",
              name: "Intro to NumPy and Pandas",
              description: "Data science basics.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Work with array matrices and data frames.",
              resources: [
                { title: "NumPy Tutorial", url: "https://www.youtube.com/watch?v=QUT1VHiLmmI", type: "video" },
                { title: "Pandas DataFrames", url: "https://pandas.pydata.org/docs/user_guide/10min.html", type: "docs" },
                { title: "Exercism Python Track", url: "https://exercism.org/tracks/python", type: "tool" }
              ]
            }
          ]
        },
        {
          id: "py-phase-3",
          title: "Advanced",
          description: "Advanced async, architectures and frameworks.",
          topics: [
            {
              id: "py-p3-t1",
              name: "asyncio and Async Patterns",
              description: "Asynchronous I/O execution.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Write concurrent code using async/await syntax.",
              resources: [
                { title: "Async IO in Python", url: "https://realpython.com/async-io-python/", type: "article" },
                { title: "Async Explained", url: "https://www.youtube.com/watch?v=t5Bo1Je9EmE", type: "video" }
              ]
            },
            {
              id: "py-p3-t2",
              name: "Design Patterns in Python",
              description: "Standard architecture patterns.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Implement common software design patterns.",
              resources: [
                { title: "Refactoring Guru - Python Patterns", url: "https://refactoring.guru/design-patterns/python", type: "docs" }
              ]
            },
            {
              id: "py-p3-t3",
              name: "FastAPI / Flask / Django",
              description: "Backend web frameworks.",
              timeEstimate: "2 Weeks",
              difficulty: "Advanced",
              details: "Build APIs and full-stack web applications.",
              resources: [
                { title: "FastAPI Full Course", url: "https://www.youtube.com/watch?v=0sOvCWFmrtA", type: "video" },
                { title: "Django Tutorial", url: "https://www.youtube.com/watch?v=F5mRW0jo-U4", type: "video" },
                { title: "FastAPI Docs", url: "https://fastapi.tiangolo.com/", type: "docs" }
              ]
            },
            {
              id: "py-p3-t4",
              name: "Database ORM – SQLAlchemy",
              description: "Object-relational mapping.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Interact with SQL databases using Python classes.",
              resources: [
                { title: "SQLAlchemy Tutorial", url: "https://auth0.com/blog/sqlalchemy-orm-tutorial-for-python-developers/", type: "article" }
              ]
            },
            {
              id: "py-p3-t5",
              name: "Docker + Python",
              description: "Containerization.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Ship python apps using Docker.",
              resources: [
                { title: "Dockerizing Python Apps", url: "https://docs.docker.com/language/python/", type: "docs" }
              ]
            },
            {
              id: "py-p3-t6",
              name: "Unit Testing with pytest",
              description: "Automated testing.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Ensure code quality with thorough unit tests.",
              resources: [
                { title: "Effective Python Testing", url: "https://realpython.com/pytest-python-testing/", type: "article" }
              ]
            },
            {
              id: "py-p3-t7",
              name: "Intro to scikit-learn / ML",
              description: "Machine learning fundamentals.",
              timeEstimate: "2 Weeks",
              difficulty: "Advanced",
              details: "Basic models and data training.",
              resources: [
                { title: "Scikit-Learn Crash Course", url: "https://www.youtube.com/watch?v=0B5eIE_1vpU", type: "video" }
              ]
            },
            {
              id: "py-p3-t8",
              name: "CI/CD with GitHub Actions",
              description: "Automated deployments.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Automate code testing and delivery pipelines.",
              resources: [
                { title: "Python CI with Actions", url: "https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-python", type: "docs" },
                { title: "LeetCode Python Practice", url: "https://leetcode.com/", type: "tool" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "cpp-c",
      slug: "cpp-c",
      name: "C / C++",
      description: "Low-level system languages with ultimate control over memory and performance.",
      difficulty: "Advanced",
      estimatedTime: "4-6 Months",
      tags: ["Systems", "Game Dev", "High Performance", "Embedded"],
      icon: "cpu",
      resources: [
        { title: "C Programming Full Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0", type: "video" },
        { title: "C++ Full Course – The Cherno", url: "https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb", type: "course" },
        { title: "learncpp.com – Free C++ Tutorial", url: "https://www.learncpp.com/", type: "docs" },
        { title: "CS50 Harvard – Intro to C", url: "https://cs50.harvard.edu/x/", type: "course" },
        { title: "C / C++ Full Course Tamil", url: "https://www.youtube.com/results?search_query=c+c%2B%2B+programming+full+course+tamil+beginners", type: "video" },
      ],
      phases: [
        {
          id: "cpp-phase-1",
          title: "Foundations (C)",
          description: "Core C programming principles.",
          topics: [
            {
              id: "cpp-p1-t1",
              name: "Variables, Data Types, Operators",
              description: "Basic syntax.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Learn the foundational syntax of C.",
              resources: [
                { title: "C Programming Full Course", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0", type: "video" },
                { title: "C Types Reference", url: "https://en.cppreference.com/w/c/language/types", type: "docs" }
              ]
            },
            {
              id: "cpp-p1-t2",
              name: "Conditionals and Loops",
              description: "Control flow.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Control the execution flow of the application.",
              resources: [
                { title: "C Control Flow", url: "https://www.learn-c.org/en/Conditions", type: "article" }
              ]
            },
            {
              id: "cpp-p1-t3",
              name: "Functions and Recursion",
              description: "Modular code.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Divide code into re-usable functions.",
              resources: [
                { title: "Functions in C", url: "https://www.learn-c.org/en/Functions", type: "article" }
              ]
            },
            {
              id: "cpp-p1-t4",
              name: "Arrays and Strings (char arrays)",
              description: "Memory collections.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Manage contiguous memory blocks and strings.",
              resources: [
                { title: "C Strings", url: "https://www.geeksforgeeks.org/strings-in-c/", type: "article" }
              ]
            },
            {
              id: "cpp-p1-t5",
              name: "Pointers and Pointer Arithmetic",
              description: "Memory addressing.",
              timeEstimate: "2 Weeks",
              difficulty: "Beginner",
              details: "Access and manipulate memory addresses directly.",
              resources: [
                { title: "Pointers deeply explained", url: "https://www.youtube.com/watch?v=zuegQmMdy8M", type: "video" },
                { title: "Beej's Guide to C Pointers", url: "https://beej.us/guide/bgc/", type: "docs" }
              ]
            },
            {
              id: "cpp-p1-t6",
              name: "Structures and Unions",
              description: "Custom data types.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Group variables under a single name.",
              resources: [
                { title: "C Structs", url: "https://www.learn-c.org/en/Structures", type: "article" }
              ]
            },
            {
              id: "cpp-p1-t7",
              name: "Dynamic Memory – malloc/free",
              description: "Heap allocation.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Allocate memory at runtime securely.",
              resources: [
                { title: "Dynamic Memory Allocation", url: "https://www.geeksforgeeks.org/dynamic-memory-allocation-in-c-using-malloc-calloc-free-and-realloc/", type: "article" }
              ]
            },
            {
              id: "cpp-p1-t8",
              name: "File I/O in C",
              description: "File handling.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Read from and write to the filesystem.",
              resources: [
                { title: "C File I/O", url: "https://www.tutorialspoint.com/cprogramming/c_file_io.htm", type: "article" },
                { title: "CS50 Harvard", url: "https://cs50.harvard.edu/x/", type: "course" }
              ]
            }
          ]
        },
        {
          id: "cpp-phase-2",
          title: "Intermediate (C++)",
          description: "Transitioning to C++ and Object-Oriented design.",
          topics: [
            {
              id: "cpp-p2-t1",
              name: "Classes, Constructors, Destructors",
              description: "C++ OOP basics.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Understand classes, instantiation, and object lifecycles.",
              resources: [
                { title: "The Cherno C++ Classes", url: "https://www.youtube.com/watch?v=2BP8PpTvcE0", type: "video" },
                { title: "learncpp.com - Classes", url: "https://www.learncpp.com/cpp-tutorial/classes-and-class-members/", type: "docs" }
              ]
            },
            {
              id: "cpp-p2-t2",
              name: "Inheritance, Polymorphism, Virtual Functions",
              description: "Class hierarchies.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Utilize polymorphism with virtual tables.",
              resources: [
                { title: "C++ Polymorphism", url: "https://www.geeksforgeeks.org/cpp-polymorphism/", type: "article" }
              ]
            },
            {
              id: "cpp-p2-t3",
              name: "RAII and Rule of 3/5",
              description: "Resource management.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Bind resource lifecycles to object lifecycles intrinsically.",
              resources: [
                { title: "RAII Pattern", url: "https://en.cppreference.com/w/cpp/language/raii", type: "docs" }
              ]
            },
            {
              id: "cpp-p2-t4",
              name: "Copy and Move Semantics",
              description: "Memory efficiency.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Transfer ownership without copying data.",
              resources: [
                { title: "Move Semantics Video", url: "https://www.youtube.com/watch?v=OWNeCTd7yQE", type: "video" }
              ]
            },
            {
              id: "cpp-p2-t5",
              name: "Templates and Generics",
              description: "Type-agnostic code.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Write functions and classes that operate on multiple data types.",
              resources: [
                { title: "C++ Templates Tutorial", url: "https://www.cplusplus.com/doc/oldtutorial/templates/", type: "docs" }
              ]
            },
            {
              id: "cpp-p2-t6",
              name: "STL – vector, map, set, queue, priority_queue",
              description: "Standard Template Library collections.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Leverage standard data containers.",
              resources: [
                { title: "STL Vectors & Maps", url: "https://www.youtube.com/watch?v=PocJ5jXv8No", type: "video" }
              ]
            },
            {
              id: "cpp-p2-t7",
              name: "STL Algorithms – sort, lower_bound",
              description: "Standard algorithms.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Use built-in optimized algorithms.",
              resources: [
                { title: "STL Algorithms Reference", url: "https://en.cppreference.com/w/cpp/algorithm", type: "docs" }
              ]
            },
            {
              id: "cpp-p2-t8",
              name: "Smart Pointers – unique_ptr, shared_ptr",
              description: "Safe memory management.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Prevent memory leaks with smart pointers.",
              resources: [
                { title: "Smart Pointers in C++", url: "https://www.youtube.com/watch?v=UOB7-B2MfwA", type: "video" }
              ]
            },
            {
              id: "cpp-p2-t9",
              name: "Lambda Expressions",
              description: "Anonymous functions.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Write concise inline function objects.",
              resources: [
                { title: "Learn C++ Lambdas", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-lambdas-anonymous-functions/", type: "docs" }
              ]
            }
          ]
        },
        {
          id: "cpp-phase-3",
          title: "Advanced",
          description: "Modern C++ features and expert-level optimizations.",
          topics: [
            {
              id: "cpp-p3-t1",
              name: "Modern C++17/20 – structured bindings, concepts",
              description: "Latest language features.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Adopt the newest paradigms introduced in C++ standards.",
              resources: [
                { title: "C++20 Features overview", url: "https://en.cppreference.com/w/cpp/20", type: "docs" },
                { title: "CppCon Talks", url: "https://www.youtube.com/@CppCon", type: "video" }
              ]
            },
            {
              id: "cpp-p3-t2",
              name: "Multithreading – thread, mutex, atomic",
              description: "Concurrency.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Write fast, safe concurrent programs.",
              resources: [
                { title: "C++ Multithreading Guide", url: "https://www.geeksforgeeks.org/multithreading-in-cpp/", type: "article" }
              ]
            },
            {
              id: "cpp-p3-t3",
              name: "Move Semantics Deep Dive",
              description: "r-values and perfect forwarding.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Optimize performance heavily via deep move semantics.",
              resources: [
                { title: "CppCon: Perfect Forwarding", url: "https://www.youtube.com/watch?v=t1wwk4hWpU8", type: "video" }
              ]
            },
            {
              id: "cpp-p3-t4",
              name: "Memory Model and Cache Optimization",
              description: "Hardware-level efficiency.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Optimize Data-oriented design for L1/L2 caches.",
              resources: [
                { title: "Low Level Learning", url: "https://www.youtube.com/@LowLevelLearning", type: "video" }
              ]
            },
            {
              id: "cpp-p3-t5",
              name: "CMake Build System",
              description: "Project building.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Configure complex multi-platform builds.",
              resources: [
                { title: "CMake Tutorial", url: "https://cmake.org/cmake/help/latest/guide/tutorial/index.html", type: "docs" }
              ]
            },
            {
              id: "cpp-p3-t6",
              name: "Compiler Optimizations (-O2/-O3)",
              description: "Compiler flags.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Leverage compiler capabilities for maximum speed.",
              resources: [
                { title: "Compiler Explorer (Godbolt)", url: "https://godbolt.org/", type: "tool" }
              ]
            },
            {
              id: "cpp-p3-t7",
              name: "Sanitizers – AddressSanitizer, UBSan",
              description: "Bug catching tools.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Detect memory errors and undefined behaviors early.",
              resources: [
                { title: "Clang Sanitizer Guide", url: "https://clang.llvm.org/docs/AddressSanitizer.html", type: "docs" }
              ]
            },
            {
              id: "cpp-p3-t8",
              name: "Profiling with perf / Valgrind",
              description: "Performance analysis.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Identify bottlenecks in your applications.",
              resources: [
                { title: "Valgrind Quick Start", url: "https://valgrind.org/docs/manual/quick-start.html", type: "docs" },
                { title: "CSES Problem Set", url: "https://cses.fi/problemset/", type: "tool" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "java",
      slug: "java",
      name: "Java",
      description: "Master Java, from JVM basics to advanced enterprise architectures.",
      difficulty: "Intermediate",
      estimatedTime: "3-4 Months",
      tags: ["Enterprise", "Backend", "Android", "OOP"],
      icon: "coffee",
      resources: [
        { title: "Java Full Course for Beginners – Mosh", url: "https://www.youtube.com/watch?v=eIrMbAQSU34", type: "video" },
        { title: "Official Java Tutorials – Oracle", url: "https://docs.oracle.com/javase/tutorial/", type: "docs" },
        { title: "Amigoscode – Java Tutorials", url: "https://www.youtube.com/@amigoscode", type: "course" },
        { title: "Spring Boot Full Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=9SGDpanrc8U", type: "video" },
        { title: "Java Full Course Tamil", url: "https://www.youtube.com/results?search_query=java+programming+full+course+tamil+beginners", type: "video" },
      ],
      phases: [
        {
          id: "java-phase-1",
          title: "Foundations",
          description: "Core Java syntax and mechanics.",
          topics: [
            {
              id: "java-p1-t1",
              name: "JVM, JDK, JRE – How Java runs",
              description: "Java execution model.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Understand the Java Virtual Machine architecture.",
              resources: [
                { title: "Java Full Course – Mosh", url: "https://www.youtube.com/watch?v=eIrMbAQSU34", type: "video" },
                { title: "Oracle Java Architecture", url: "https://docs.oracle.com/javase/tutorial/getStarted/intro/definition.html", type: "docs" }
              ]
            },
            {
              id: "java-p1-t2",
              name: "Variables, Data Types, Operators",
              description: "Basic syntax.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Primitive and reference types in context.",
              resources: [
                { title: "Java Primitives", url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html", type: "docs" }
              ]
            },
            {
              id: "java-p1-t3",
              name: "Conditionals and Loops",
              description: "Control structures.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Control the program flow smoothly.",
              resources: [
                { title: "Java Control Flow", url: "https://www.geeksforgeeks.org/loops-in-java/", type: "article" }
              ]
            },
            {
              id: "java-p1-t4",
              name: "Arrays and Methods",
              description: "Grouping logic and data.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Functions and statically sized arrays.",
              resources: [
                { title: "Java Arrays", url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html", type: "docs" }
              ]
            },
            {
              id: "java-p1-t5",
              name: "OOP – Classes, Objects, Constructors",
              description: "OOP essentials.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Classes, objects, and initialization.",
              resources: [
                { title: "Classes & Objects", url: "https://docs.oracle.com/javase/tutorial/java/javaOO/classes.html", type: "docs" }
              ]
            },
            {
              id: "java-p1-t6",
              name: "Inheritance and Polymorphism",
              description: "Extending classes.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Reuse code through strong class hierarchies.",
              resources: [
                { title: "Inheritance Tutorial", url: "https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html", type: "docs" }
              ]
            },
            {
              id: "java-p1-t7",
              name: "Interfaces and Abstract Classes",
              description: "Contracts.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Enforce architectures using abstract designs.",
              resources: [
                { title: "Abstract Classes vs Interfaces", url: "https://www.baeldung.com/java-interface-vs-abstract-class", type: "article" }
              ]
            },
            {
              id: "java-p1-t8",
              name: "Exception Handling",
              description: "Error states.",
              timeEstimate: "1 Week",
              difficulty: "Beginner",
              details: "Use try/catch/finally and custom exceptions.",
              resources: [
                { title: "CodingBat Java Practice", url: "https://codingbat.com/java", type: "tool" },
                { title: "Exceptions Guide", url: "https://www.youtube.com/watch?v=1XAfapkBQjk", type: "video" }
              ]
            }
          ]
        },
        {
          id: "java-phase-2",
          title: "Intermediate",
          description: "Collections, APIs and Concurrency.",
          topics: [
            {
              id: "java-p2-t1",
              name: "Collections – List, Set, Map, Queue",
              description: "Data collections framework.",
              timeEstimate: "1-2 Weeks",
              difficulty: "Intermediate",
              details: "Effectively use the Java Collections API.",
              resources: [
                { title: "Java Collections – Amigoscode", url: "https://www.youtube.com/watch?v=GdAon80-0KA", type: "video" },
                { title: "Collections Ref (Baeldung)", url: "https://www.baeldung.com/java-collections", type: "article" }
              ]
            },
            {
              id: "java-p2-t2",
              name: "Generics and Wildcards",
              description: "Type safety.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Write reusable and type-safe collections/functions.",
              resources: [
                { title: "Java Generics Tutorial", url: "https://www.tutorialspoint.com/java/java_generics.htm", type: "article" }
              ]
            },
            {
              id: "java-p2-t3",
              name: "Functional Interfaces, Lambdas",
              description: "Functional features.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Introduce functional paradigms introduced in Java 8.",
              resources: [
                { title: "Java 8 Lambdas", url: "https://www.youtube.com/watch?v=tj5sLSFjVj4", type: "video" }
              ]
            },
            {
              id: "java-p2-t4",
              name: "Stream API – filter, map, reduce",
              description: "Declarative collections.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Process sequences of elements in parallel gracefully.",
              resources: [
                { title: "Java Streams Intro", url: "https://www.baeldung.com/java-8-streams", type: "article" }
              ]
            },
            {
              id: "java-p2-t5",
              name: "Multithreading and Concurrency",
              description: "Parallel processing.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Use the Thread class, Runnable interface and Executors.",
              resources: [
                { title: "Definitive Guide to Java Concurrency", url: "https://www.baeldung.com/java-concurrency", type: "article" }
              ]
            },
            {
              id: "java-p2-t6",
              name: "JUnit 5 – Unit Testing",
              description: "Testing frameworks.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Test your application code thoroughly.",
              resources: [
                { title: "JUnit 5 Tutorial", url: "https://www.baeldung.com/junit-5", type: "article" }
              ]
            },
            {
              id: "java-p2-t7",
              name: "Maven / Gradle",
              description: "Build tools.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Manage dependencies and build lifecycles.",
              resources: [
                { title: "Maven in 15 Minutes", url: "https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html", type: "docs" }
              ]
            },
            {
              id: "java-p2-t8",
              name: "Design Patterns – Singleton, Builder, Factory",
              description: "Common OOP patterns.",
              timeEstimate: "1 Week",
              difficulty: "Intermediate",
              details: "Apply standard architectural patterns.",
              resources: [
                { title: "Exercism Java Track", url: "https://exercism.org/tracks/java", type: "tool" },
                { title: "Java Design Patterns", url: "https://java-design-patterns.com/", type: "article" }
              ]
            }
          ]
        },
        {
          id: "java-phase-3",
          title: "Advanced",
          description: "Enterprise level tools and architectures.",
          topics: [
            {
              id: "java-p3-t1",
              name: "Spring Boot – REST APIs, Dependency Injection",
              description: "Web framework.",
              timeEstimate: "2 Weeks",
              difficulty: "Advanced",
              details: "Build standalone production-ready Spring applications.",
              resources: [
                { title: "Spring Boot Full Course – Amigoscode", url: "https://www.youtube.com/watch?v=9SGDpanrc8U", type: "video" },
                { title: "Spring Boot Tamil", url: "https://www.youtube.com/results?search_query=spring+boot+full+course+tamil", type: "video" }
              ]
            },
            {
              id: "java-p3-t2",
              name: "Spring Data JPA + Hibernate",
              description: "Database mapping.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Connect to relational databases intuitively.",
              resources: [
                { title: "Spring Data JPA Tutorial", url: "https://spring.io/guides/gs/accessing-data-jpa/", type: "docs" }
              ]
            },
            {
              id: "java-p3-t3",
              name: "Spring Security – JWT Auth",
              description: "Application security.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Protect endpoints and handle identity securely.",
              resources: [
                { title: "Spring Security Architecture", url: "https://spring.io/guides/topicals/spring-security-architecture", type: "docs" }
              ]
            },
            {
              id: "java-p3-t4",
              name: "Microservices Architecture",
              description: "Systems design.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Scale large applications into independent services.",
              resources: [
                { title: "Spring Cloud Fundamentals", url: "https://spring.io/microservices", type: "docs" }
              ]
            },
            {
              id: "java-p3-t5",
              name: "Docker for Java Apps",
              description: "Containerization.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Package your Java apps in neat Docker images.",
              resources: [
                { title: "Spring Boot with Docker", url: "https://spring.io/guides/gs/spring-boot-docker/", type: "docs" }
              ]
            },
            {
              id: "java-p3-t6",
              name: "JVM Internals – GC, JIT, Heap",
              description: "Deep performance tuning.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Optimize Garbage Collection and JIT Compilation.",
              resources: [
                { title: "Understanding JVM Architecture", url: "https://www.geeksforgeeks.org/jvm-works-jvm-architecture/", type: "article" }
              ]
            },
            {
              id: "java-p3-t7",
              name: "Kafka Basics with Java",
              description: "Event streaming.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Integrate with high-throughput message brokers.",
              resources: [
                { title: "Kafka Crash Course", url: "https://www.youtube.com/watch?v=JmBwA0g8DkA", type: "video" }
              ]
            },
            {
              id: "java-p3-t8",
              name: "System Design Fundamentals",
              description: "High level designs.",
              timeEstimate: "1 Week",
              difficulty: "Advanced",
              details: "Design large-scale distributed enterprise systems.",
              resources: [
                { title: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", type: "article" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
