import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { findSubPath, getAllTopicIds } from "../data/roadmap-data.js";

/**
 * Register progress tools on the MCP server.
 */
export function registerProgressTools(server: McpServer): void {
  server.tool(
    "get_progress_context",
    "Returns a progress summary for a student on a specific career path. Shows completed vs remaining topics, current phase, percentage completion, and estimated time to finish. Until a database is connected, it accepts completed topic IDs directly as input.",
    {
      pathSlug: z.string().describe("The sub-path slug, e.g. 'frontend', 'machine-learning'"),
      completedTopicIds: z.array(z.string()).optional().describe("Array of topic IDs the student has completed, e.g. ['fe-t1', 'fe-t2']. Pass empty array or omit if no progress yet."),
    },
    async ({ pathSlug, completedTopicIds = [] }) => {
      const found = findSubPath(pathSlug);
      if (!found) {
        return {
          content: [
            {
              type: "text" as const,
              text: JSON.stringify({ error: `Unknown path slug: ${pathSlug}` }),
            },
          ],
        };
      }

      const { subPath } = found;
      const allTopicIds = getAllTopicIds(pathSlug);
      const completedSet = new Set(completedTopicIds);

      const totalTopics = allTopicIds.length;
      const completedCount = allTopicIds.filter((id) => completedSet.has(id)).length;
      const remainingCount = totalTopics - completedCount;
      const percentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

      // Determine current phase
      let currentPhase = subPath.phases[0];
      for (const phase of subPath.phases) {
        const phaseTopicIds = phase.topics.map((t) => t.id);
        const phaseCompleted = phaseTopicIds.filter((id) => completedSet.has(id)).length;
        if (phaseCompleted < phaseTopicIds.length) {
          currentPhase = phase;
          break;
        }
      }

      // Calculate remaining time estimate
      const parseWeeks = (est: string): number => {
        const match = est.match(/(\d+)/);
        return match ? parseInt(match[1], 10) : 2;
      };

      let remainingWeeks = 0;
      for (const phase of subPath.phases) {
        for (const topic of phase.topics) {
          if (!completedSet.has(topic.id)) {
            remainingWeeks += parseWeeks(topic.timeEstimate);
          }
        }
      }

      // Phase-level breakdown
      const phaseBreakdown = subPath.phases.map((phase) => {
        const phaseTopics = phase.topics.map((t) => t.id);
        const phaseCompleted = phaseTopics.filter((id) => completedSet.has(id)).length;
        return {
          phaseId: phase.id,
          phaseTitle: phase.title,
          totalTopics: phaseTopics.length,
          completedTopics: phaseCompleted,
          status: phaseCompleted === 0 ? "not_started" : phaseCompleted === phaseTopics.length ? "completed" : "in_progress",
        };
      });

      // Next uncompleted topic
      let nextTopic = null;
      for (const phase of subPath.phases) {
        for (const topic of phase.topics) {
          if (!completedSet.has(topic.id)) {
            nextTopic = {
              topicId: topic.id,
              name: topic.name,
              description: topic.description,
              timeEstimate: topic.timeEstimate,
              difficulty: topic.difficulty,
              phaseTitle: phase.title,
            };
            break;
          }
        }
        if (nextTopic) break;
      }

      const result = {
        pathSlug,
        pathName: subPath.name,
        totalTopics,
        completedTopics: completedCount,
        remainingTopics: remainingCount,
        completionPercentage: percentage,
        currentPhase: currentPhase
          ? { id: currentPhase.id, title: currentPhase.title }
          : null,
        estimatedRemainingWeeks: remainingWeeks,
        estimatedRemainingMonths: Math.round(remainingWeeks / 4.33 * 10) / 10,
        phaseBreakdown,
        nextTopic,
        summary: completedCount === 0
          ? `You haven't started ${subPath.name} yet. Begin with "${nextTopic?.name ?? "the first topic"}" (estimated ${nextTopic?.timeEstimate ?? "2 weeks"}).`
          : completedCount === totalTopics
            ? `🎉 Congratulations! You've completed all ${totalTopics} topics in ${subPath.name}!`
            : `You're ${percentage}% through ${subPath.name} (${completedCount}/${totalTopics} topics). Currently on "${currentPhase?.title ?? "unknown"}". Next up: "${nextTopic?.name ?? "N/A"}" (~${nextTopic?.timeEstimate ?? "2 weeks"}).`,
      };

      return {
        content: [{ type: "text" as const, text: JSON.stringify(result, null, 2) }],
      };
    }
  );
}
