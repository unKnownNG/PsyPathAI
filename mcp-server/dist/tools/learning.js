import { z } from "zod";
import { findSubPath } from "../data/roadmap-data.js";
/**
 * Learning style → resource type mapping with curated recommendations.
 */
const styleResources = {
    visual: {
        preferredTypes: ["Video tutorials", "Animated explainers", "Diagram-heavy courses", "YouTube channels"],
        avoidTypes: ["Dense text-only documentation", "Long written articles"],
        advice: "You learn best through visual demonstrations. Seek out video courses with screen recordings, animated explanations, and visual diagrams. Platforms like YouTube, Fireship, and interactive visualizations will accelerate your learning.",
    },
    reading: {
        preferredTypes: ["Official documentation", "Technical books", "Blog posts", "Written tutorials"],
        avoidTypes: ["Fast-paced video lectures", "Hands-on-only workshops without written guides"],
        advice: "You learn best by reading and referencing documentation. Start with official docs, supplement with technical books, and keep a personal knowledge base. MDN, dev.to articles, and O'Reilly books are your best friends.",
    },
    kinesthetic: {
        preferredTypes: ["Project-based learning", "Coding challenges", "Hackathons", "Build-from-scratch tutorials"],
        avoidTypes: ["Passive lecture videos", "Theory-heavy courses without exercises"],
        advice: "You learn by doing. Skip lengthy theory upfront — jump into building real projects immediately. Use tutorial projects as starting points, then customize and extend them. LeetCode, personal projects, and contributing to open source are ideal.",
    },
    interactive: {
        preferredTypes: ["Structured courses with exercises", "Interactive platforms", "Quizzes and assessments", "Guided labs"],
        avoidTypes: ["Unstructured self-study", "Open-ended projects without guidance"],
        advice: "You learn best with structured, interactive courses that include exercises, quizzes, and feedback loops. Platforms like freeCodeCamp, Codecademy, Coursera, and interactive coding environments work well for you.",
    },
};
/**
 * Register learning tools on the MCP server.
 */
export function registerLearningTools(server) {
    server.tool("get_learning_recommendation", "Returns personalized resource and learning approach recommendations based on the student's learning style, the specific career path they're pursuing, and their current difficulty level. Includes preferred resource types, specific platform suggestions, and study strategy advice.", {
        learningStyle: z.enum(["visual", "reading", "kinesthetic", "interactive"]).describe("Student's learning style from the quiz"),
        pathSlug: z.string().describe("The sub-path slug, e.g. 'frontend', 'machine-learning'"),
        difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]).describe("Student's current level"),
    }, async ({ learningStyle, pathSlug, difficulty }) => {
        const styleInfo = styleResources[learningStyle];
        if (!styleInfo) {
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify({ error: `Unknown learning style: ${learningStyle}` }),
                    },
                ],
            };
        }
        const found = findSubPath(pathSlug);
        const pathName = found?.subPath.name ?? pathSlug;
        const pathTags = found?.subPath.tags ?? [];
        // Generate path-specific resource recommendations
        const recommendations = [
            {
                category: "Primary Resources",
                recommendations: styleInfo.preferredTypes.map((t) => `${t} focused on ${pathName}`),
                reasoning: `Your ${learningStyle} learning style responds best to ${styleInfo.preferredTypes[0]?.toLowerCase() ?? "structured content"}.`,
            },
            {
                category: "Technologies to Focus On",
                recommendations: pathTags.map((tag) => `${tag} — ${getLearningApproach(learningStyle, tag)}`),
                reasoning: `Key technologies for ${pathName}, each with a ${learningStyle}-optimized approach.`,
            },
            {
                category: "Study Strategy",
                recommendations: getStudyStrategy(learningStyle, difficulty),
                reasoning: `Adjusted for your ${difficulty.toLowerCase()} level and ${learningStyle} preference.`,
            },
        ];
        const result = {
            learningStyle,
            pathSlug,
            pathName,
            difficulty,
            generalAdvice: styleInfo.advice,
            preferredResourceTypes: styleInfo.preferredTypes,
            avoidResourceTypes: styleInfo.avoidTypes,
            recommendations,
        };
        return {
            content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        };
    });
}
function getLearningApproach(style, tech) {
    const approaches = {
        visual: `Watch a crash course video on ${tech}, then follow along with a visual tutorial`,
        reading: `Read the official ${tech} documentation, then summarize key concepts in your own notes`,
        kinesthetic: `Build a small project using ${tech} right away, learning concepts as you need them`,
        interactive: `Take a structured ${tech} course with quizzes and hands-on exercises`,
    };
    return approaches[style] ?? `Study ${tech} using your preferred method`;
}
function getStudyStrategy(style, difficulty) {
    const base = {
        visual: [
            "Watch 1-2 tutorial videos per topic before coding",
            "Create mind maps or diagrams for complex concepts",
            "Use screen recording to review your own coding sessions",
            "Follow visual learners' channels (Fireship, 3Blue1Brown, The Coding Train)",
        ],
        reading: [
            "Read documentation before watching any videos",
            "Keep a personal wiki or Notion database of concepts",
            "Write blog posts to solidify understanding",
            "Compare multiple written sources for different perspectives",
        ],
        kinesthetic: [
            "Start with a 'hello world' project within 30 minutes of any new topic",
            "Modify tutorial code — don't just copy",
            "Build increasingly complex projects as you learn",
            "Contribute to open source for real-world practice",
        ],
        interactive: [
            "Complete structured courses with certificates for motivation",
            "Do coding challenges daily (LeetCode, HackerRank)",
            "Join study groups or coding bootcamps",
            "Use spaced repetition for memorizing syntax and patterns",
        ],
    };
    const strategies = base[style] ?? base["interactive"];
    if (difficulty === "Beginner") {
        strategies.push("Focus on fundamentals — don't rush to advanced topics");
    }
    else if (difficulty === "Advanced") {
        strategies.push("Seek out advanced deep-dives, conference talks, and research papers");
    }
    return strategies;
}
//# sourceMappingURL=learning.js.map