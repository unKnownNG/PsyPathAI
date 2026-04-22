import { Domain } from "../types";

export const appDevDomain: Domain = {
  id: "app-dev", slug: "app-development", name: "App Development",
  description: "Create native and cross-platform mobile applications for iOS and Android.",
  icon: "Smartphone", color: "#34d399",
  subPaths: [
    {
      id: "android", slug: "android", name: "Android Development",
      description: "Build native apps for the world's most used mobile OS.",
      difficulty: "Intermediate", estimatedTime: "6-8 months", icon: "Code",
      tags: ["Kotlin", "Jetpack Compose", "Android Studio"],
      resources: [
        { title: "Android Development Full Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=fis26HvJ3V0", type: "video" },
        { title: "Kotlin Full Course for Beginners", url: "https://www.youtube.com/watch?v=F9UC9DY-vIU", type: "video" },
        { title: "Android Developers – Official Documentation", url: "https://developer.android.com/docs", type: "docs" },
        { title: "Philipp Lackner – Android Dev Channel", url: "https://www.youtube.com/@PhilippLackner", type: "course" },
        { title: "Android Codelabs – Hands-on Tutorials", url: "https://developer.android.com/codelabs", type: "docs" },
      ],
      phases: [
        {
          id: "an-p1", title: "Foundations", description: "Kotlin basics and UI essentials",
          topics: [
            {
              id: "an-p1-t1", name: "Kotlin Basics", description: "Variables, functions, null safety", timeEstimate: "1 week", difficulty: "Beginner", details: "Kotlin basics – variables, functions, null safety, data classes",
              resources: [
                { title: "Kotlin Full Course", url: "https://www.youtube.com/watch?v=F9UC9DY-vIU", type: "video" },
                { title: "Android Development for Beginners", url: "https://www.youtube.com/watch?v=EExSSotojVI", type: "video" }
              ]
            },
            {
              id: "an-p1-t2", name: "Android Studio & Project Structure", description: "The developer environment", timeEstimate: "1 week", difficulty: "Beginner", details: "Android Studio setup and project structure",
              resources: [
                { title: "Android Developers – Official Docs", url: "https://developer.android.com/docs", type: "docs" }
              ]
            },
            {
              id: "an-p1-t3", name: "Activities & Lifecycle", description: "The building blocks", timeEstimate: "1 week", difficulty: "Beginner", details: "Activities and the Activity Lifecycle",
              resources: [
                { title: "Android Tamil Tutorial", url: "https://www.youtube.com/results?search_query=android+development+tamil+tutorial+beginners", type: "video" }
              ]
            },
            {
              id: "an-p1-t4", name: "Layouts & XML", description: "ConstraintLayout, LinearLayout", timeEstimate: "1 week", difficulty: "Beginner", details: "Layouts – XML, ConstraintLayout, LinearLayout",
              resources: [
                { title: "Android Layouts Tutorial", url: "https://www.youtube.com/results?search_query=Android+Layouts+XML+tutorial", type: "video" }
              ]
            },
            {
              id: "an-p1-t5", name: "Views", description: "TextView, Button, ImageView", timeEstimate: "1 week", difficulty: "Beginner", details: "Views – TextView, Button, EditText, ImageView",
              resources: [
                { title: "Android Views Tutorial", url: "https://www.youtube.com/results?search_query=Android+Views+TextView+Button", type: "video" }
              ]
            },
            {
              id: "an-p1-t6", name: "Intents", description: "Explicit and implicit", timeEstimate: "1 week", difficulty: "Intermediate", details: "Intents – explicit and implicit",
              resources: [
                { title: "Android Intents Tutorial", url: "https://www.youtube.com/results?search_query=Android+Intents+implicit+explicit", type: "video" }
              ]
            },
            {
              id: "an-p1-t7", name: "RecyclerView & Adapters", description: "Scrollable lists", timeEstimate: "1 week", difficulty: "Intermediate", details: "RecyclerView and Adapters",
              resources: [
                { title: "RecyclerView Tutorial", url: "https://www.youtube.com/results?search_query=Android+RecyclerView+Adapter+tutorial", type: "video" }
              ]
            },
            {
              id: "an-p1-t8", name: "Fragments", description: "Fragment lifecycle", timeEstimate: "1 week", difficulty: "Intermediate", details: "Fragments and Fragment lifecycle",
              resources: [
                { title: "Android Fragments Tutorial", url: "https://www.youtube.com/results?search_query=Android+Fragments+tutorial", type: "video" }
              ]
            }
          ]
        },
        {
          id: "an-p2", title: "Intermediate", description: "Jetpack Compose and architecture",
          topics: [
            {
              id: "an-p2-t1", name: "Jetpack Compose", description: "Declarative UI basics", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Jetpack Compose – declarative UI basics",
              resources: [
                { title: "Jetpack Compose – Official Codelabs", url: "https://developer.android.com/codelabs/jetpack-compose-basics", type: "docs" },
                { title: "Jetpack Compose Tamil", url: "https://www.youtube.com/results?search_query=jetpack+compose+android+tamil+tutorial", type: "video" }
              ]
            },
            {
              id: "an-p2-t2", name: "ViewModel and LiveData", description: "State management", timeEstimate: "1 week", difficulty: "Intermediate", details: "ViewModel and LiveData",
              resources: [
                { title: "ViewModel & LiveData", url: "https://www.youtube.com/results?search_query=Android+ViewModel+LiveData", type: "video" }
              ]
            },
            {
              id: "an-p2-t3", name: "Navigation Component", description: "App routing", timeEstimate: "1 week", difficulty: "Intermediate", details: "Navigation Component",
              resources: [
                { title: "Android Navigation Component", url: "https://www.youtube.com/results?search_query=Android+Navigation+Component+tutorial", type: "video" }
              ]
            },
            {
              id: "an-p2-t4", name: "Room Database", description: "Local storage with ORM", timeEstimate: "1 week", difficulty: "Intermediate", details: "Room Database – local storage with ORM",
              resources: [
                { title: "Room Database Tutorial", url: "https://www.youtube.com/results?search_query=Android+Room+Database+tutorial", type: "video" }
              ]
            },
            {
              id: "an-p2-t5", name: "Retrofit & Networking", description: "REST API calls", timeEstimate: "1 week", difficulty: "Advanced", details: "Retrofit – REST API calls",
              resources: [
                { title: "Retrofit + Coroutines Tutorial", url: "https://www.youtube.com/results?search_query=retrofit+coroutines+android+tutorial", type: "video" }
              ]
            },
            {
              id: "an-p2-t6", name: "Coroutines", description: "Async programming in Kotlin", timeEstimate: "1 week", difficulty: "Advanced", details: "Coroutines – async programming in Kotlin",
              resources: [
                { title: "Android MVVM Full Project", url: "https://www.youtube.com/@PhilippLackner", type: "video" }
              ]
            },
            {
              id: "an-p2-t7", name: "Dependency Injection with Hilt", description: "DI principles", timeEstimate: "1 week", difficulty: "Advanced", details: "Dependency Injection with Hilt",
              resources: [
                { title: "Hilt DI Tutorial", url: "https://www.youtube.com/results?search_query=Android+Hilt+Dependency+Injection", type: "video" }
              ]
            },
            {
              id: "an-p2-t8", name: "MVVM Architecture pattern", description: "Clean architecture", timeEstimate: "1 week", difficulty: "Advanced", details: "MVVM Architecture pattern",
              resources: [
                { title: "MVVM Pattern Tutorial", url: "https://www.youtube.com/results?search_query=Android+MVVM+Architecture", type: "video" }
              ]
            }
          ]
        },
        {
          id: "an-p3", title: "Advanced & Production", description: "Firebase, testing, and deployment",
          topics: [
            {
              id: "an-p3-t1", name: "Firebase Foundations", description: "Auth, Firestore", timeEstimate: "1 week", difficulty: "Advanced", details: "Firebase – Auth, Firestore, Cloud Messaging",
              resources: [
                { title: "Firebase Android Full Course", url: "https://www.youtube.com/watch?v=jbHfJpoOzkI", type: "video" },
                { title: "Android Advanced Tamil", url: "https://www.youtube.com/results?search_query=android+development+advanced+firebase+tamil", type: "video" }
              ]
            },
            {
              id: "an-p3-t2", name: "WorkManager", description: "Background tasks", timeEstimate: "1 week", difficulty: "Advanced", details: "WorkManager for background tasks",
              resources: [
                { title: "WorkManager Tutorial", url: "https://www.youtube.com/results?search_query=Android+WorkManager+tutorial", type: "video" }
              ]
            },
            {
              id: "an-p3-t3", name: "App Performance", description: "Profiling, memory leaks", timeEstimate: "1 week", difficulty: "Advanced", details: "App performance – profiling, memory leaks",
              resources: [
                { title: "Android Performance Guide", url: "https://developer.android.com/topic/performance", type: "docs" }
              ]
            },
            {
              id: "an-p3-t4", name: "ProGuard & Security", description: "Code obfuscation", timeEstimate: "1 week", difficulty: "Advanced", details: "ProGuard and code obfuscation",
              resources: [
                { title: "ProGuard Tutorial", url: "https://www.youtube.com/results?search_query=Android+ProGuard+obfuscation", type: "video" }
              ]
            },
            {
              id: "an-p3-t5", name: "Play Store Publishing", description: "App bundle, signing", timeEstimate: "1 week", difficulty: "Advanced", details: "Play Store publishing – signing, app bundle",
              resources: [
                { title: "Play Store Publishing", url: "https://www.youtube.com/results?search_query=Android+Play+Store+Publishing", type: "video" }
              ]
            },
            {
              id: "an-p3-t6", name: "Push Notifications", description: "Cloud Messaging", timeEstimate: "1 week", difficulty: "Advanced", details: "Push notifications",
              resources: [
                { title: "Push Notifications Android", url: "https://www.youtube.com/results?search_query=Android+Push+Notifications+Firebase", type: "video" }
              ]
            },
            {
              id: "an-p3-t7", name: "Testing", description: "Unit testing and UI testing", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Unit testing and UI testing with Espresso",
              resources: [
                { title: "Espresso Testing Tutorial", url: "https://www.youtube.com/results?search_query=Android+Espresso+UI+testing", type: "video" }
              ]
            },
            {
              id: "an-p3-t8", name: "CI/CD & Actions", description: "Automated pipelines", timeEstimate: "1 week", difficulty: "Advanced", details: "CI/CD with GitHub Actions for Android",
              resources: [
                { title: "GitHub Actions for Android", url: "https://www.youtube.com/results?search_query=Android+GitHub+Actions+CI+CD", type: "video" },
                { title: "Philipp Lackner – Full App Projects", url: "https://www.youtube.com/@PhilippLackner", type: "video" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "ios", slug: "ios", name: "iOS Development",
      description: "Build polished apps for iPhone and iPad with Swift.",
      difficulty: "Intermediate", estimatedTime: "6-8 months", icon: "Apple",
      tags: ["Swift", "SwiftUI", "Xcode"],
      resources: [
        { title: "iOS Development Full Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q", type: "video" },
        { title: "100 Days of SwiftUI – Hacking with Swift", url: "https://www.hackingwithswift.com/100/swiftui", type: "course" },
        { title: "Apple Developer Documentation", url: "https://developer.apple.com/documentation/", type: "docs" },
        { title: "Sean Allen – iOS Dev Channel", url: "https://www.youtube.com/@seanallen", type: "course" },
        { title: "iOS Development Tamil Tutorial", url: "https://www.youtube.com/results?search_query=ios+development+swift+tamil+tutorial+beginners", type: "video" },
      ],
      phases: [
        {
          id: "ios-p1", title: "Foundations", description: "Swift basics and UIKit fundamentals",
          topics: [
            {
              id: "ios-p1-t1", name: "Swift Basics", description: "Variables, optionals, arrays", timeEstimate: "1 week", difficulty: "Beginner", details: "Swift basics – variables, optionals, closures, structs vs classes",
              resources: [
                { title: "Swift Full Course", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q", type: "video" },
                { title: "Swift.org – Official Docs", url: "https://www.swift.org/documentation/", type: "docs" }
              ]
            },
            {
              id: "ios-p1-t2", name: "Xcode Setup", description: "Project structure, IDE", timeEstimate: "1 week", difficulty: "Beginner", details: "Xcode setup and iOS project structure",
              resources: [
                { title: "Xcode Basics", url: "https://www.youtube.com/results?search_query=Xcode+tutorial+for+beginners", type: "video" }
              ]
            },
            {
              id: "ios-p1-t3", name: "UIKit Basics", description: "UIViewController, UIView", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "UIKit basics – UIViewController, UIView",
              resources: [
                { title: "UIKit Tutorial", url: "https://www.youtube.com/results?search_query=UIKit+tutorial+iOS+Swift", type: "video" },
                { title: "iOS Development for Beginners", url: "https://www.youtube.com/@seanallen", type: "video" }
              ]
            },
            {
              id: "ios-p1-t4", name: "Storyboards & Auto Layout", description: "Building UIs visually", timeEstimate: "1 week", difficulty: "Intermediate", details: "Storyboards and Auto Layout",
              resources: [
                { title: "Auto Layout Tutorial", url: "https://www.youtube.com/results?search_query=iOS+Auto+Layout+tutorial", type: "video" }
              ]
            },
            {
              id: "ios-p1-t5", name: "Table & Collection Views", description: "Lists and grids", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "UITableView and UICollectionView",
              resources: [
                { title: "UITableView Tutorial", url: "https://www.youtube.com/results?search_query=UITableView+UICollectionView+Swift", type: "video" }
              ]
            },
            {
              id: "ios-p1-t6", name: "Navigation", description: "UINavigationController", timeEstimate: "1 week", difficulty: "Intermediate", details: "Navigation – UINavigationController, segues",
              resources: [
                { title: "iOS Navigation", url: "https://www.youtube.com/results?search_query=iOS+Navigation+segues+Swift", type: "video" }
              ]
            },
            {
              id: "ios-p1-t7", name: "Error Handling", description: "do, try, catch", timeEstimate: "1 week", difficulty: "Intermediate", details: "Swift error handling – do/try/catch",
              resources: [
                { title: "Error Handling Swift", url: "https://www.youtube.com/results?search_query=Swift+Error+Handling+do+try+catch", type: "video" }
              ]
            },
            {
              id: "ios-p1-t8", name: "App Lifecycle", description: "App states", timeEstimate: "1 week", difficulty: "Intermediate", details: "iOS app lifecycle",
              resources: [
                { title: "iOS App Lifecycle", url: "https://www.youtube.com/results?search_query=iOS+app+lifecycle", type: "video" },
                { title: "iOS Tamil Tutorial", url: "https://www.youtube.com/results?search_query=ios+development+swift+tamil+tutorial", type: "video" }
              ]
            }
          ]
        },
        {
          id: "ios-p2", title: "Intermediate", description: "SwiftUI and Architecture",
          topics: [
            {
              id: "ios-p2-t1", name: "SwiftUI", description: "Declarative UI", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "SwiftUI – declarative UI with state management",
              resources: [
                { title: "SwiftUI Tutorials", url: "https://developer.apple.com/tutorials/swiftui", type: "docs" },
                { title: "SwiftUI Full Course (Hacking with Swift)", url: "https://www.hackingwithswift.com/100/swiftui", type: "course" }
              ]
            },
            {
              id: "ios-p2-t2", name: "State Management", description: "@State, @Binding", timeEstimate: "1 week", difficulty: "Intermediate", details: "@State, @Binding, @ObservedObject, @EnvironmentObject",
              resources: [
                { title: "SwiftUI State Management", url: "https://www.youtube.com/results?search_query=SwiftUI+State+Binding+ObservedObject", type: "video" },
                { title: "SwiftUI Tamil Tutorial", url: "https://www.youtube.com/results?search_query=swiftui+tutorial+tamil", type: "video" }
              ]
            },
            {
              id: "ios-p2-t3", name: "Combine Framework", description: "Reactive programming", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Combine framework – reactive programming",
              resources: [
                { title: "Combine Tutorial", url: "https://www.youtube.com/results?search_query=Combine+framework+Swift+tutorial", type: "video" }
              ]
            },
            {
              id: "ios-p2-t4", name: "URLSession", description: "Networking, APIs", timeEstimate: "1 week", difficulty: "Advanced", details: "URLSession – networking and REST API calls",
              resources: [
                { title: "URLSession Tutorial", url: "https://www.youtube.com/results?search_query=URLSession+Swift+API+calls", type: "video" }
              ]
            },
            {
              id: "ios-p2-t5", name: "Core Data", description: "Local persistence", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Core Data – local persistence",
              resources: [
                { title: "Core Data Swift", url: "https://www.youtube.com/results?search_query=Core+Data+Swift+tutorial", type: "video" }
              ]
            },
            {
              id: "ios-p2-t6", name: "MVVM Architecture", description: "Clean architecture models", timeEstimate: "1 week", difficulty: "Advanced", details: "MVVM architecture in iOS",
              resources: [
                { title: "MVVM iOS Tutorial", url: "https://www.youtube.com/results?search_query=MVVM+architecture+iOS+Swift", type: "video" }
              ]
            },
            {
              id: "ios-p2-t7", name: "Swift Concurrency", description: "Async, await, actors", timeEstimate: "1 week", difficulty: "Advanced", details: "Swift Concurrency – async/await, actors",
              resources: [
                { title: "Swift Concurrency", url: "https://www.youtube.com/results?search_query=Swift+Concurrency+async+await", type: "video" }
              ]
            },
            {
              id: "ios-p2-t8", name: "Animations", description: "SwiftUI Animations", timeEstimate: "1 week", difficulty: "Intermediate", details: "Animations in SwiftUI",
              resources: [
                { title: "SwiftUI Animations", url: "https://www.youtube.com/results?search_query=SwiftUI+Animations+tutorial", type: "video" }
              ]
            }
          ]
        },
        {
          id: "ios-p3", title: "Advanced & Production", description: "App Store, Testing, Firebase",
          topics: [
            {
              id: "ios-p3-t1", name: "Firebase on iOS", description: "Auth, Firestore", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Firebase on iOS – Auth, Firestore",
              resources: [
                { title: "iOS Firebase Project", url: "https://www.youtube.com/watch?v=x0uinJvhNxI", type: "video" }
              ]
            },
            {
              id: "ios-p3-t2", name: "Push Notifications", description: "APNs", timeEstimate: "1 week", difficulty: "Advanced", details: "Push Notifications with APNs",
              resources: [
                { title: "APNs iOS Tutorial", url: "https://www.youtube.com/results?search_query=iOS+Push+Notifications+APNs", type: "video" }
              ]
            },
            {
              id: "ios-p3-t3", name: "Core Location & MapKit", description: "Maps & GPS", timeEstimate: "1 week", difficulty: "Intermediate", details: "Core Location and MapKit",
              resources: [
                { title: "MapKit Swift", url: "https://www.youtube.com/results?search_query=Core+Location+MapKit+Swift", type: "video" }
              ]
            },
            {
              id: "ios-p3-t4", name: "In-App Purchases", description: "StoreKit", timeEstimate: "1 week", difficulty: "Advanced", details: "In-App Purchases and StoreKit",
              resources: [
                { title: "StoreKit Tutorial", url: "https://www.youtube.com/results?search_query=iOS+In-App+Purchases+StoreKit", type: "video" }
              ]
            },
            {
              id: "ios-p3-t5", name: "App Performance", description: "Instruments profiling", timeEstimate: "1 week", difficulty: "Advanced", details: "App performance – Instruments profiling",
              resources: [
                { title: "Apple Human Interface Guidelines", url: "https://developer.apple.com/design/human-interface-guidelines/", type: "docs" }
              ]
            },
            {
              id: "ios-p3-t6", name: "XCTest", description: "Unit and UI testing", timeEstimate: "2 weeks", difficulty: "Advanced", details: "XCTest – unit and UI testing",
              resources: [
                { title: "XCTest Tutorial", url: "https://www.youtube.com/results?search_query=iOS+XCTest+Unit+Testing", type: "video" }
              ]
            },
            {
              id: "ios-p3-t7", name: "App Store Submission", description: "Provisioning maps", timeEstimate: "1 week", difficulty: "Advanced", details: "App Store submission – signing, provisioning profiles",
              resources: [
                { title: "App Store Publishing Tamil", url: "https://www.youtube.com/results?search_query=ios+app+store+publishing+tamil+tutorial", type: "video" }
              ]
            },
            {
              id: "ios-p3-t8", name: "CI/CD & Fastlane", description: "Automated pipelines", timeEstimate: "1 week", difficulty: "Advanced", details: "CI/CD with Fastlane",
              resources: [
                { title: "Fastlane iOS Deployment", url: "https://www.youtube.com/results?search_query=iOS+CI+CD+Fastlane+tutorial", type: "video" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "cross-platform", slug: "cross-platform", name: "Cross-Platform Development",
      description: "One codebase. Android and iOS. Ship faster.",
      difficulty: "Intermediate", estimatedTime: "5-7 months", icon: "Layers",
      tags: ["Flutter", "React Native", "Dart"],
      resources: [
        { title: "Flutter Full Course for Beginners – freeCodeCamp", url: "https://www.youtube.com/watch?v=VPvVD8t02U8", type: "video" },
        { title: "React Native Full Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=0-S5a0eXPoc", type: "video" },
        { title: "Flutter Official Documentation", url: "https://docs.flutter.dev/", type: "docs" },
        { title: "Reso Coder – Flutter Tutorials", url: "https://www.youtube.com/@ResoCoder", type: "course" },
        { title: "Flutter Tamil Tutorial – Beginners", url: "https://www.youtube.com/results?search_query=flutter+tutorial+tamil+beginners+full+course", type: "video" },
      ],
      phases: [
        {
          id: "cp-p1", title: "Foundations", description: "Frameworks overview and Core UI",
          topics: [
            {
              id: "cp-p1-t1", name: "Flutter vs React Native", description: "Tradeoffs", timeEstimate: "1 week", difficulty: "Beginner", details: "Flutter vs React Native – tradeoffs and when to pick each",
              resources: [
                { title: "Flutter vs React Native", url: "https://www.youtube.com/results?search_query=Flutter+vs+React+Native+comparison", type: "video" }
              ]
            },
            {
              id: "cp-p1-t2", name: "Dart Basics", description: "Variables, functions, classes", timeEstimate: "1 week", difficulty: "Beginner", details: "Dart basics (Flutter) – variables, functions, classes, async/await",
              resources: [
                { title: "Flutter Full Course", url: "https://www.youtube.com/watch?v=VPvVD8t02U8", type: "video" },
                { title: "Flutter Tamil Tutorial", url: "https://www.youtube.com/results?search_query=flutter+tutorial+tamil+beginners", type: "video" }
              ]
            },
            {
              id: "cp-p1-t3", name: "React Native Basics", description: "JavaScript / React", timeEstimate: "1 week", difficulty: "Beginner", details: "React Native Full Course – freeCodeCamp",
              resources: [
                { title: "React Native Full Course", url: "https://www.youtube.com/watch?v=0-S5a0eXPoc", type: "video" }
              ]
            },
            {
              id: "cp-p1-t4", name: "Widget Tree", description: "Flutter structure", timeEstimate: "1 week", difficulty: "Intermediate", details: "Flutter project structure and widget tree",
              resources: [
                { title: "Flutter Official Docs", url: "https://docs.flutter.dev/", type: "docs" }
              ]
            },
            {
              id: "cp-p1-t5", name: "State in Widgets", description: "Stateless vs Stateful", timeEstimate: "1 week", difficulty: "Beginner", details: "Stateless vs Stateful Widgets",
              resources: [
                { title: "Stateful vs Stateless", url: "https://www.youtube.com/results?search_query=Flutter+Stateful+vs+Stateless", type: "video" }
              ]
            },
            {
              id: "cp-p1-t6", name: "Core Widgets & Styling", description: "Layouts, colors, themes", timeEstimate: "2 weeks", difficulty: "Beginner", details: "Core widgets – Text, Container, Column, Row, Stack / Styling – ThemeData, colors, fonts",
              resources: [
                { title: "Flutter UI Tutorial", url: "https://www.youtube.com/results?search_query=Flutter+UI+Widgets+theme", type: "video" }
              ]
            },
            {
              id: "cp-p1-t7", name: "Navigation", description: "Navigator, GoRouter", timeEstimate: "1 week", difficulty: "Intermediate", details: "Navigation – Navigator, named routes, GoRouter",
              resources: [
                { title: "Flutter Navigation", url: "https://www.youtube.com/results?search_query=Flutter+Navigation+GoRouter", type: "video" }
              ]
            },
            {
              id: "cp-p1-t8", name: "Lists & Grids", description: "ListView, GridView", timeEstimate: "1 week", difficulty: "Intermediate", details: "ListView and GridView",
              resources: [
                { title: "ListView GridView Flutter", url: "https://www.youtube.com/results?search_query=Flutter+ListView+GridView", type: "video" }
              ]
            }
          ]
        },
        {
          id: "cp-p2", title: "Intermediate", description: "State, APIs, and Data",
          topics: [
            {
              id: "cp-p2-t1", name: "State Management", description: "Provider, Riverpod, Bloc", timeEstimate: "2 weeks", difficulty: "Advanced", details: "State management – Provider, Riverpod, or Bloc",
              resources: [
                { title: "Flutter Riverpod Tutorial", url: "https://www.youtube.com/@ResoCoder", type: "video" },
                { title: "Flutter State Management Tamil", url: "https://www.youtube.com/results?search_query=flutter+state+management+riverpod+tamil", type: "video" }
              ]
            },
            {
              id: "cp-p2-t2", name: "REST APIs", description: "http / dio package", timeEstimate: "1 week", difficulty: "Intermediate", details: "REST API integration with http / dio package",
              resources: [
                { title: "Flutter API Integration", url: "https://www.youtube.com/results?search_query=Flutter+REST+API+http+dio", type: "video" }
              ]
            },
            {
              id: "cp-p2-t3", name: "Local Storage", description: "SharedPreferences, Hive", timeEstimate: "1 week", difficulty: "Intermediate", details: "Local storage – SharedPreferences, Hive, SQLite",
              resources: [
                { title: "Flutter Local Storage", url: "https://www.youtube.com/results?search_query=Flutter+SharedPreferences+Hive+SQLite", type: "video" }
              ]
            },
            {
              id: "cp-p2-t4", name: "Forms & Validation", description: "Handling data input", timeEstimate: "1 week", difficulty: "Intermediate", details: "Form handling and validation",
              resources: [
                { title: "Flutter Forms Validation", url: "https://www.youtube.com/results?search_query=Flutter+Forms+Validation", type: "video" }
              ]
            },
            {
              id: "cp-p2-t5", name: "Custom Widgets", description: "Reusable components", timeEstimate: "1 week", difficulty: "Intermediate", details: "Custom widgets and reusable components",
              resources: [
                { title: "Flutter & Dart Guide", url: "https://www.youtube.com/results?search_query=flutter+complete+course+academind", type: "video" }
              ]
            },
            {
              id: "cp-p2-t6", name: "Animations", description: "Hero, AnimatedContainer", timeEstimate: "1 week", difficulty: "Advanced", details: "Animations – AnimatedContainer, Hero animations",
              resources: [
                { title: "Flutter Animations Tutorial", url: "https://www.youtube.com/results?search_query=Flutter+Animations+Hero", type: "video" }
              ]
            },
            {
              id: "cp-p2-t7", name: "Platform Code", description: "MethodChannels", timeEstimate: "1 week", difficulty: "Advanced", details: "Platform-specific code – MethodChannel",
              resources: [
                { title: "MethodChannel Flutter", url: "https://www.youtube.com/results?search_query=Flutter+MethodChannel+tutorial", type: "video" }
              ]
            },
            {
              id: "cp-p2-t8", name: "Responsive Layouts", description: "Handling screen sizes", timeEstimate: "1 week", difficulty: "Intermediate", details: "Responsive layouts for different screen sizes",
              resources: [
                { title: "Flutter Responsive Design", url: "https://www.youtube.com/results?search_query=Flutter+Responsive+Layouts", type: "video" }
              ]
            }
          ]
        },
        {
          id: "cp-p3", title: "Advanced & Production", description: "Firebase, Testing, and CI/CD",
          topics: [
            {
              id: "cp-p3-t1", name: "Firebase Backend", description: "Auth, Firestore, Storage", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Firebase – Auth, Firestore, Storage, Cloud Messaging",
              resources: [
                { title: "Flutter Firebase Full App", url: "https://www.youtube.com/results?search_query=flutter+firebase+full+app+tutorial", type: "video" }
              ]
            },
            {
              id: "cp-p3-t2", name: "Deep Linking", description: "Dynamic links", timeEstimate: "1 week", difficulty: "Advanced", details: "Deep linking and dynamic links",
              resources: [
                { title: "Flutter Deep Linking", url: "https://www.youtube.com/results?search_query=Flutter+Deep+Linking+Dynamic+Links", type: "video" }
              ]
            },
            {
              id: "cp-p3-t3", name: "Push Notifications", description: "FCM", timeEstimate: "1 week", difficulty: "Advanced", details: "Push notifications via Firebase Cloud Messaging",
              resources: [
                { title: "Flutter Push Notifications", url: "https://www.youtube.com/results?search_query=Flutter+Push+Notifications+FCM", type: "video" }
              ]
            },
            {
              id: "cp-p3-t4", name: "App Flavors", description: "Dev/Staging/Prod setups", timeEstimate: "1 week", difficulty: "Advanced", details: "App flavor setup – dev/staging/production environments",
              resources: [
                { title: "Flutter App Flavors", url: "https://www.youtube.com/results?search_query=Flutter+App+Flavors+Environments", type: "video" }
              ]
            },
            {
              id: "cp-p3-t5", name: "Optimization", description: "Const widgets, lazy loading", timeEstimate: "1 week", difficulty: "Intermediate", details: "Performance optimization – const widgets, lazy loading",
              resources: [
                { title: "Performance Optimization", url: "https://www.youtube.com/results?search_query=Flutter+Performance+Optimization", type: "video" }
              ]
            },
            {
              id: "cp-p3-t6", name: "Testing", description: "Unit, widget, integration", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Unit, widget, and integration testing",
              resources: [
                { title: "Flutter Testing Guide", url: "https://docs.flutter.dev/testing", type: "docs" }
              ]
            },
            {
              id: "cp-p3-t7", name: "App Publishing", description: "Play Store, App Store", timeEstimate: "1 week", difficulty: "Advanced", details: "Publishing to Play Store and App Store",
              resources: [
                { title: "Flutter Play Store Tamil", url: "https://www.youtube.com/results?search_query=flutter+app+publish+play+store+tamil", type: "video" }
              ]
            },
            {
              id: "cp-p3-t8", name: "CI/CD Deployment", description: "Codemagic, Github Actions", timeEstimate: "1 week", difficulty: "Advanced", details: "CI/CD with Codemagic or GitHub Actions",
              resources: [
                { title: "Codemagic Start", url: "https://codemagic.io/start/", type: "tool" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
