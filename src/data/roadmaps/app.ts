import { Domain } from "../types";

export const appDevDomain: Domain = {
  id: "app-dev", slug: "app-development", name: "App Development",
  description: "Create native and cross-platform mobile applications for iOS and Android.",
  icon: "Smartphone", color: "#34d399",
  subPaths: [
    {
      id: "android", slug: "android", name: "Android Development",
      description: "Build native applications for the world's most popular mobile OS using Kotlin.",
      difficulty: "Intermediate", estimatedTime: "6-8 months", icon: "Code",
      tags: ["Kotlin", "Jetpack Compose", "Android Studio"],
      phases: [
        {
          id: "an-p1", title: "Kotlin & Android Basics", description: "Getting started with Android",
          topics: [
            {
              id: "an-t1", name: "Kotlin Fundamentals", description: "Modern JVM language", timeEstimate: "3 weeks", difficulty: "Beginner",
              details: "Learn variables, control flow, functions, null safety, OOP, and collections in Kotlin.",
              resources: [
                { title: "Kotlin Bootcamp for Programmers", url: "https://developer.android.com/courses/kotlin-bootcamp/overview", type: "course" },
                { title: "Kotlin Docs", url: "https://kotlinlang.org/docs/home.html", type: "docs" },
                { title: "Kotlin Crash Course", url: "https://www.youtube.com/watch?v=F9UC9DY-vIU", type: "video" }
              ]
            },
            {
              id: "an-t2", name: "Android Studio & Tools", description: "The dev environment", timeEstimate: "1 week", difficulty: "Beginner",
              details: "Navigating Android Studio, configuring Gradle, and using the Android Emulator.",
              resources: [
                { title: "Meet Android Studio", url: "https://developer.android.com/studio/intro", type: "docs" },
                { title: "Gradle for Android", url: "https://developer.android.com/studio/build", type: "docs" }
              ]
            }
          ],
        },
        {
          id: "an-p2", title: "Building the UI", description: "Modern declarative interfaces",
          topics: [
            {
              id: "an-t3", name: "Jetpack Compose Basics", description: "Declarative UI toolkit", timeEstimate: "3 weeks", difficulty: "Intermediate",
              details: "Building composable functions, state management, modifiers, and layouts.",
              resources: [
                { title: "Compose Pathway", url: "https://developer.android.com/courses/pathways/compose", type: "course" },
                { title: "Compose Tutorial", url: "https://developer.android.com/jetpack/compose/tutorial", type: "docs" }
              ]
            },
            {
              id: "an-t4", name: "Navigation & Architecture", description: "App structure", timeEstimate: "2 weeks", difficulty: "Intermediate",
              details: "Navigation Compose, ViewModels, and UI State modeling.",
              resources: [
                { title: "Navigation with Compose", url: "https://developer.android.com/jetpack/compose/nav-adaptive", type: "docs" },
                { title: "Guide to App Architecture", url: "https://developer.android.com/topic/architecture", type: "docs" }
              ]
            }
          ],
        },
        {
          id: "an-p3", title: "Data & Background Tasks", description: "Production readiness",
          topics: [
            {
              id: "an-t5", name: "Room Database & DataStore", description: "Local data persistence", timeEstimate: "2 weeks", difficulty: "Advanced",
              details: "Setting up Room, writing DAOs, and migrating from SharedPreferences to DataStore.",
              resources: [
                { title: "Save data in a local database", url: "https://developer.android.com/training/data-storage/room", type: "docs" }
              ]
            },
            {
              id: "an-t6", name: "Coroutines & Networking", description: "Async operations", timeEstimate: "3 weeks", difficulty: "Advanced",
              details: "Kotlin Coroutines, Flows, Retrofit for REST APIs, and serialization.",
              resources: [
                { title: "Kotlin Coroutines on Android", url: "https://developer.android.com/kotlin/coroutines", type: "docs" },
                { title: "Retrofit Network API", url: "https://square.github.io/retrofit/", type: "tool" }
              ]
            }
          ]
        }
      ],
    },
    {
      id: "ios", slug: "ios", name: "iOS Development",
      description: "Build premium experiences for the Apple ecosystem using Swift and SwiftUI.",
      difficulty: "Intermediate", estimatedTime: "6-8 months", icon: "Apple",
      tags: ["Swift", "SwiftUI", "Xcode"],
      phases: [
        {
          id: "ios-p1", title: "Swift & Xcode Basics", description: "Apple ecosystem development",
          topics: [
            {
              id: "ios-t1", name: "Swift Programming", description: "Apple's modern language", timeEstimate: "3 weeks", difficulty: "Beginner",
              details: "Optionals, structs, classes, protocols, closures, and Swift concurrency.",
              resources: [
                { title: "100 Days of Swift", url: "https://www.hackingwithswift.com/100", type: "course" },
                { title: "The Swift Programming Language", url: "https://docs.swift.org/swift-book/", type: "docs" }
              ]
            },
            {
              id: "ios-t2", name: "Xcode Environment", description: "The iOS IDE", timeEstimate: "1 week", difficulty: "Beginner",
              details: "Navigating Xcode, Simulator, debugging, and project configuration.",
              resources: [
                { title: "Xcode Basics", url: "https://developer.apple.com/xcode/", type: "docs" }
              ]
            }
          ],
        },
        {
          id: "ios-p2", title: "Building the UI", description: "Declarative interfaces",
          topics: [
            {
              id: "ios-t3", name: "SwiftUI Fundamentals", description: "Declarative UI framework", timeEstimate: "4 weeks", difficulty: "Intermediate",
              details: "Views, modifiers, state (@State, @Binding), stacks, and lists.",
              resources: [
                { title: "SwiftUI Tutorials by Apple", url: "https://developer.apple.com/tutorials/swiftui", type: "course" },
                { title: "100 Days of SwiftUI", url: "https://www.hackingwithswift.com/100/swiftui", type: "course" }
              ]
            },
            {
              id: "ios-t4", name: "Navigation & Architecture", description: "App flow", timeEstimate: "2 weeks", difficulty: "Intermediate",
              details: "NavigationStack, MVVM architecture, and data flow.",
              resources: [
                { title: "SwiftUI Navigation", url: "https://developer.apple.com/documentation/swiftui/navigation", type: "docs" }
              ]
            }
          ],
        },
        {
          id: "ios-p3", title: "Data & Networking", description: "Making apps dynamic",
          topics: [
            {
              id: "ios-t5", name: "Networking (URLSession)", description: "Fetching API data", timeEstimate: "2 weeks", difficulty: "Advanced",
              details: "URLSession, async/await, and JSON parsing with Codable.",
              resources: [
                { title: "Fetching Network Data", url: "https://developer.apple.com/documentation/foundation/urlsession", type: "docs" }
              ]
            },
            {
              id: "ios-t6", name: "Data Persistence", description: "SwiftData & CoreData", timeEstimate: "2 weeks", difficulty: "Advanced",
              details: "Local storage using the new SwiftData framework or legacy CoreData.",
              resources: [
                { title: "Introduction to SwiftData", url: "https://developer.apple.com/xcode/swiftdata/", type: "article" }
              ]
            }
          ]
        }
      ],
    },
    {
      id: "cross-platform", slug: "cross-platform", name: "Cross Platform",
      description: "Build apps for both iOS and Android simultaneously using a single codebase.",
      difficulty: "Intermediate", estimatedTime: "5-7 months", icon: "Layers",
      tags: ["React Native", "Flutter", "Mobile"],
      phases: [
        {
          id: "cp-p1", title: "Choosing a Framework", description: "The foundations",
          topics: [
            {
              id: "cp-t1", name: "Flutter & Dart", description: "Google's UI toolkit", timeEstimate: "3 weeks", difficulty: "Beginner",
              details: "Learning Dart syntax, Flutter widgets, layouts, and state management (Provider/Riverpod).",
              resources: [
                { title: "Flutter Documentation", url: "https://docs.flutter.dev/", type: "docs" },
                { title: "Dart Basics", url: "https://dart.dev/guides", type: "article" }
              ]
            },
            {
              id: "cp-t2", name: "React Native & Expo", description: "React for mobile", timeEstimate: "3 weeks", difficulty: "Beginner",
              details: "Using React inside mobile, Expo Go, core components, and styling.",
              resources: [
                { title: "React Native Docs", url: "https://reactnative.dev/docs/getting-started", type: "docs" },
                { title: "Expo Documentation", url: "https://docs.expo.dev/", type: "tool" }
              ]
            }
          ],
        },
        {
          id: "cp-p2", title: "Native Features", description: "Device capabilities",
          topics: [
            {
              id: "cp-t3", name: "Device APIs", description: "Camera, Location, Sensors", timeEstimate: "3 weeks", difficulty: "Intermediate",
              details: "Requesting permissions and accessing native device hardware via plugins/libraries.",
              resources: [
                { title: "Expo Camera", url: "https://docs.expo.dev/versions/latest/sdk/camera/", type: "docs" },
                { title: "Flutter Camera", url: "https://pub.dev/packages/camera", type: "tool" }
              ]
            },
            {
              id: "cp-t4", name: "Navigation & UI Polish", description: "Smooth interactions", timeEstimate: "2 weeks", difficulty: "Intermediate",
              details: "React Navigation or Flutter Navigator 2.0, animations, and gestures.",
              resources: [
                { title: "React Navigation", url: "https://reactnavigation.org/", type: "docs" }
              ]
            }
          ],
        },
        {
          id: "cp-p3", title: "Deployment", description: "Releasing to stores",
          topics: [
            {
              id: "cp-t5", name: "App Store Publishing", description: "Google Play & Apple App Store", timeEstimate: "2 weeks", difficulty: "Advanced",
              details: "App signing, provisioning profiles, EAS Build (Expo), and fastlane.",
              resources: [
                { title: "Expo Application Services (EAS)", url: "https://docs.expo.dev/eas/", type: "tool" },
                { title: "Publishing a Flutter App", url: "https://docs.flutter.dev/deployment/android", type: "docs" }
              ]
            }
          ]
        }
      ],
    }
  ]
};
