import { z } from "zod";
import { mbtiProfiles } from "../data/mbti-profiles.js";
import { describeHollandCombo } from "../data/holland-map.js";
/**
 * Register personality tools on the MCP server.
 */
export function registerPersonalityTools(server) {
    // ── get_personality_profile ───────────────────────────────
    server.tool("get_personality_profile", "Returns a comprehensive psychological profile for a given MBTI type and Holland code, including cognitive function stack, strengths, blind spots, ideal work environment, communication style, motivational triggers, stress response, career values, and how the Holland code modifies the profile.", {
        mbtiType: z.string().length(4).describe("Four-letter MBTI type, e.g. 'INTJ'"),
        hollandCode: z.string().min(1).max(6).describe("Holland code string, e.g. 'IRC'"),
    }, async ({ mbtiType, hollandCode }) => {
        const profile = mbtiProfiles[mbtiType.toUpperCase()];
        if (!profile) {
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify({ error: `Unknown MBTI type: ${mbtiType}. Valid types: ${Object.keys(mbtiProfiles).join(", ")}` }),
                    },
                ],
            };
        }
        // Get Holland interaction for primary code
        const primaryHolland = hollandCode.charAt(0).toUpperCase();
        const hollandInteraction = profile.pairingWithHolland[primaryHolland] ?? "No specific interaction data available.";
        const hollandDescription = describeHollandCombo(hollandCode.toUpperCase());
        const result = {
            mbtiType: profile.type,
            nickname: profile.nickname,
            cognitiveStack: profile.cognitiveStack,
            strengths: profile.strengths,
            blindSpots: profile.blindSpots,
            idealWorkEnvironment: profile.idealWorkEnvironment,
            communicationStyle: profile.communicationStyle,
            motivationalTriggers: profile.motivationalTriggers,
            stressResponse: profile.stressResponse,
            careerValues: profile.careerValues,
            hollandCode: hollandCode.toUpperCase(),
            hollandDescription,
            hollandInteraction,
        };
        return {
            content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        };
    });
    // ── get_psychological_nudge ───────────────────────────────
    server.tool("get_psychological_nudge", "Returns communication framing advice for how to phrase career guidance to a student with a specific MBTI type. Includes the personality's communication style, motivational triggers, things to avoid, and a sample framing for the given context.", {
        mbtiType: z.string().length(4).describe("Four-letter MBTI type, e.g. 'INTJ'"),
        context: z.string().describe("What the student is asking about or the topic being discussed, e.g. 'choosing between frontend and backend'"),
    }, async ({ mbtiType, context }) => {
        const profile = mbtiProfiles[mbtiType.toUpperCase()];
        if (!profile) {
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify({ error: `Unknown MBTI type: ${mbtiType}` }),
                    },
                ],
            };
        }
        // Generate framing advice
        const advice = {
            mbtiType: profile.type,
            nickname: profile.nickname,
            communicationStyle: profile.communicationStyle,
            motivationalTriggers: profile.motivationalTriggers,
            stressResponse: profile.stressResponse,
            framingGuidelines: [
                `Lead with: ${profile.motivationalTriggers[0]}`,
                `Avoid triggering stress pattern: ${profile.stressResponse.split(".")[0]}`,
                `Frame career advice as: ${profile.careerValues.slice(0, 3).join(", ")}-oriented`,
            ],
            sampleFraming: generateSampleFraming(profile, context),
        };
        return {
            content: [{ type: "text", text: JSON.stringify(advice, null, 2) }],
        };
    });
}
function generateSampleFraming(profile, context) {
    const type = profile.type;
    const value = profile.careerValues[0] ?? "growth";
    const framings = {
        INTJ: `Think of ${context} as a system architecture decision. Analyze the long-term strategic value, efficiency, and depth of mastery each option offers.`,
        INTP: `Here's an interesting problem to explore: ${context}. Consider the underlying principles — what makes each option elegant, and which lets you go deepest?`,
        ENTJ: `Let's set a clear goal for ${context}. Here are the measurable outcomes and timelines for each option, so you can decide and execute efficiently.`,
        ENTP: `What if you approached ${context} from a completely different angle? Here are some unconventional possibilities and emerging opportunities to consider.`,
        INFJ: `Consider how ${context} connects to your larger purpose. Which option lets you make the most meaningful impact and aligns with your vision?`,
        INFP: `${context} is a chance to express your unique perspective. Which path feels most authentic to you and lets you create something meaningful?`,
        ENFJ: `Think about how ${context} positions you to help and inspire others. Which option builds your ability to lead and grow a community?`,
        ENFP: `${context} is full of exciting possibilities! Let's explore which path gives you the most creative freedom and variety while building something amazing.`,
        ISTJ: `Here's a proven, step-by-step approach to ${context}. Each option has clear benchmarks, established best practices, and predictable outcomes.`,
        ISFJ: `Consider how ${context} helps you build secure, high-quality skills that others will value. Which path lets you create something reliable and helpful?`,
        ESTJ: `Let's be practical about ${context}. Here are the concrete action items, deadlines, and measurable milestones for each option.`,
        ESFJ: `Think about how ${context} fits into your team and community. Which option lets you collaborate, help others, and build something people appreciate?`,
        ISTP: `Skip the theory — here's how to get hands-on with ${context} right now. Which option gives you real problems to solve and tools to master?`,
        ISFP: `${context} is an opportunity to craft something beautiful and personally meaningful. Which option lets you express your creativity at your own pace?`,
        ESTP: `Let's move fast on ${context}. Which path gives you the quickest wins, the most exciting challenges, and immediate results you can show off?`,
        ESFP: `${context} can be a lot of fun! Which option lets you interact with people, create engaging experiences, and build something you're proud of?`,
    };
    return framings[type] ?? `Consider how ${context} aligns with your core value of ${value} and supports your natural strengths.`;
}
//# sourceMappingURL=personality.js.map