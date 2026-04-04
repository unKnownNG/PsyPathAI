import { mbtiProfiles } from "./mcp-logic/data/mbti-profiles";
import { describeHollandCombo } from "./mcp-logic/data/holland-map";
import { getCareerAlignment } from "./mcp-logic/data/career-matrix";

// Re-implement the framing sample logic from personality.ts locally
function generateSampleFraming(profile: typeof mbtiProfiles[string], context: string): string {
  const type = profile.type;
  const value = profile.careerValues[0] ?? "growth";

  const framings: Record<string, string> = {
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

/**
 * Direct function calls to replace the child_process.spawn MCP Server.
 * This runs natively in the Next.js API route making it fast and Vercel-compatible.
 */
export async function callMcpTools(
  toolCalls: { name: string; arguments: any }[]
): Promise<any[]> {
  const results = [];

  for (const call of toolCalls) {
    try {
      if (call.name === "get_personality_profile") {
        const { mbtiType, hollandCode } = call.arguments;
        const profile = mbtiProfiles[mbtiType.toUpperCase()];
        if (!profile) {
          results.push({ content: [{ text: JSON.stringify({ error: `Unknown MBTI type: ${mbtiType}` }) }] });
          continue;
        }

        const primaryHolland = (hollandCode || "X").charAt(0).toUpperCase();
        const hollandInteraction = profile.pairingWithHolland[primaryHolland] ?? "No specific interaction data available.";
        const hollandDescription = describeHollandCombo(hollandCode?.toUpperCase() || "I");

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
          hollandCode: hollandCode?.toUpperCase(),
          hollandDescription,
          hollandInteraction,
        };

        // We wrap in content: [{text: ...}] to match exactly what route.ts expects from the old parsed JSON RPC
        results.push({ content: [{ text: JSON.stringify(result, null, 2) }] });

      } else if (call.name === "get_psychological_nudge") {
        const { mbtiType, context } = call.arguments;
        const profile = mbtiProfiles[mbtiType.toUpperCase()];
        if (!profile) {
          results.push({ content: [{ text: JSON.stringify({ error: `Unknown MBTI type: ${mbtiType}` }) }] });
          continue;
        }

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

        results.push({ content: [{ text: JSON.stringify(advice, null, 2) }] });

      } else if (call.name === "get_career_alignment") {
        const { mbtiType, hollandCode, goal, interests = [] } = call.arguments;
        
        const recommendations = getCareerAlignment(
          mbtiType?.toUpperCase() || "INTJ",
          hollandCode?.toUpperCase() || "I",
          goal || "Explore & Learn",
          interests
        );

        const result = {
          mbtiType: mbtiType?.toUpperCase(),
          hollandCode: hollandCode?.toUpperCase(),
          goal,
          interests,
          topRecommendations: recommendations,
          summary: `Based on your ${mbtiType?.toUpperCase()} personality, ${hollandCode?.toUpperCase()} work style, your top career path is **${recommendations[0]?.pathName ?? "N/A"}** with a ${recommendations[0]?.score ?? 0}% alignment score.`,
        };

        results.push({ content: [{ text: JSON.stringify(result, null, 2) }] });

      } else {
        results.push({ error: `Tool ${call.name} not natively implemented yet` });
      }
    } catch (err: any) {
      results.push({ error: err.message });
    }
  }

  return results;
}

/**
 * Convenience: call a single MCP tool and return its result.
 */
export async function callMcpTool(name: string, args: Record<string, unknown>) {
  const results = await callMcpTools([{ name, arguments: args }]);
  return results[0] ?? {};
}
