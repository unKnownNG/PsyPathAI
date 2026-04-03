/**
 * Career alignment matrix.
 *
 * ALL 38 career path slugs:
 *   system-design, machine-learning, backend, cloud-computing, deep-learning,
 *   devops, dsa, nlp, generative-ai, computer-vision, fullstack, blockchain,
 *   docker-kubernetes, freelancing, frontend, open-source, data-science,
 *   game-development, ar-vr, cross-platform, interview-prep, ethical-hacking,
 *   iot, database-engineering, network-security, application-security, robotics,
 *   android, ios, mlops, embedded-systems, research, product-management,
 *   ux-research, technical-writing, developer-advocacy, quant-finance,
 *   tech-consulting, ai-ethics-policy
 */
export interface CareerRecommendation {
    pathSlug: string;
    pathName: string;
    score: number;
    reasoning: string;
}
export declare function getCareerAlignment(mbtiType: string, hollandCode: string, goal: string, interests?: string[]): CareerRecommendation[];
//# sourceMappingURL=career-matrix.d.ts.map