/**
 * Simplified roadmap data for the MCP server.
 * Contains domain → subpath → phase → topic structure
 * mirroring the frontend's roadmaps.ts but without React-specific imports.
 */
export interface RoadmapTopic {
    id: string;
    name: string;
    description: string;
    timeEstimate: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
}
export interface RoadmapPhase {
    id: string;
    title: string;
    description: string;
    topics: RoadmapTopic[];
}
export interface RoadmapSubPath {
    slug: string;
    name: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    estimatedTime: string;
    tags: string[];
    phases: RoadmapPhase[];
}
export interface RoadmapDomain {
    slug: string;
    name: string;
    subPaths: RoadmapSubPath[];
}
export declare const roadmapData: RoadmapDomain[];
/**
 * Find a subpath by its slug across all domains.
 */
export declare function findSubPath(pathSlug: string): {
    domain: RoadmapDomain;
    subPath: RoadmapSubPath;
} | null;
/**
 * Get all topic IDs for a given subpath.
 */
export declare function getAllTopicIds(pathSlug: string): string[];
//# sourceMappingURL=roadmap-data.d.ts.map