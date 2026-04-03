import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getCareerAlignment } from "../data/career-matrix.js";
import { findSubPath } from "../data/roadmap-data.js";

/**
 * Register career tools on the MCP server.
 */
export function registerCareerTools(server: McpServer): void {
  // ── get_career_alignment ──────────────────────────────────
  server.tool(
    "get_career_alignment",
    "Returns the top 5 ranked career paths for a student based on their MBTI type, Holland code, career goal, and personal interests/hobbies. Each recommendation includes an alignment score (0-100) and detailed reasoning. Covers 38 career paths including non-CS fields like product management, UX research, technical writing, quant finance, embedded systems, robotics, and AI ethics.",
    {
      mbtiType: z.string().length(4).describe("Four-letter MBTI type, e.g. 'INTJ'"),
      hollandCode: z.string().min(1).max(6).describe("Holland code string, e.g. 'IRC'"),
      goal: z.string().describe("Student's primary goal: 'Get a Job', 'Masters/PhD', 'Build a Startup', or 'Explore & Learn'"),
      interests: z.array(z.string()).optional().describe("Array of interests/hobbies, e.g. ['competitive-coding', 'robotics', 'finance', 'design']. Supported: gaming, hacking, robotics, electronics, 3d-modeling, ai-chatbots, web-design, mobile-apps, competitive-coding, open-source, blogging, crypto, writing, teaching, public-speaking, business, finance, psychology, design, music, photography, math, physics, biology, law-policy, mechanical, electrical, automotive, sustainability, healthcare"),
    },
    async ({ mbtiType, hollandCode, goal, interests = [] }) => {
      const recommendations = getCareerAlignment(
        mbtiType.toUpperCase(),
        hollandCode.toUpperCase(),
        goal,
        interests
      );

      const result = {
        mbtiType: mbtiType.toUpperCase(),
        hollandCode: hollandCode.toUpperCase(),
        goal,
        interests,
        topRecommendations: recommendations,
        summary: `Based on your ${mbtiType.toUpperCase()} personality, ${hollandCode.toUpperCase()} work style${interests.length > 0 ? `, and interests in ${interests.join(", ")}` : ""}, your top career path is **${recommendations[0]?.pathName ?? "N/A"}** with a ${recommendations[0]?.score ?? 0}% alignment score.`,
      };

      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    }
  );

  // ── get_milestone_plan ────────────────────────────────────
  server.tool(
    "get_milestone_plan",
    "Generates a week-by-week milestone plan for a specific career path, adjusted to the student's available hours per week. Includes phases, topics, estimated durations, and checkpoint goals.",
    {
      pathSlug: z.string().describe("The sub-path slug, e.g. 'frontend', 'machine-learning', 'ethical-hacking', 'embedded-systems', 'quant-finance'"),
      hoursPerWeek: z.string().describe("Student's available hours: '5-10 hrs', '10-15 hrs', '15-20 hrs', or '20+ hrs'"),
      currentPhase: z.string().optional().describe("Phase ID the student is currently on, e.g. 'fe-p2'. If omitted, starts from the beginning."),
    },
    async ({ pathSlug, hoursPerWeek, currentPhase }) => {
      const found = findSubPath(pathSlug);
      if (!found) {
        return {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify({ error: `Unknown path slug: ${pathSlug}. Try 'frontend', 'backend', 'machine-learning', 'embedded-systems', 'quant-finance', etc.` }),
            },
          ],
        };
      }

      const { subPath } = found;

      const parseWeeks = (est: string): number => {
        const match = est.match(/(\d+)/);
        return match ? parseInt(match[1], 10) : 2;
      };

      const speedMultiplier: Record<string, number> = {
        "5-10 hrs": 1.5,
        "10-15 hrs": 1.0,
        "15-20 hrs": 0.75,
        "20+ hrs": 0.6,
      };
      const multiplier = speedMultiplier[hoursPerWeek] ?? 1.0;

      let phases = subPath.phases;
      if (currentPhase) {
        const idx = phases.findIndex((p) => p.id === currentPhase);
        if (idx >= 0) {
          phases = phases.slice(idx);
        }
      }

      let cumulativeWeeks = 0;
      const milestones = phases.map((phase) => {
        const topics = phase.topics.map((topic) => {
          const baseWeeks = parseWeeks(topic.timeEstimate);
          const adjustedWeeks = Math.max(1, Math.round(baseWeeks * multiplier));
          const startWeek = cumulativeWeeks + 1;
          cumulativeWeeks += adjustedWeeks;

          return {
            topicId: topic.id,
            name: topic.name,
            description: topic.description,
            difficulty: topic.difficulty,
            startWeek,
            endWeek: cumulativeWeeks,
            adjustedDuration: `${adjustedWeeks} week${adjustedWeeks > 1 ? "s" : ""}`,
            originalDuration: topic.timeEstimate,
          };
        });

        return {
          phaseId: phase.id,
          phaseTitle: phase.title,
          phaseDescription: phase.description,
          topics,
        };
      });

      const result = {
        pathSlug,
        pathName: subPath.name,
        difficulty: subPath.difficulty,
        hoursPerWeek,
        totalEstimatedWeeks: cumulativeWeeks,
        totalEstimatedMonths: Math.round(cumulativeWeeks / 4.33 * 10) / 10,
        milestones,
        summary: `${subPath.name} roadmap: ${milestones.length} phase${milestones.length > 1 ? "s" : ""}, ${cumulativeWeeks} weeks at ${hoursPerWeek}. Start with "${milestones[0]?.topics[0]?.name ?? "N/A"}".`,
      };

      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    }
  );
}
