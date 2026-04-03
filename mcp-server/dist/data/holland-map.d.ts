export interface HollandType {
    code: string;
    label: string;
    description: string;
    domains: string[];
    traits: string[];
    preferredWorkStyle: string;
}
export declare const hollandTypes: Record<string, HollandType>;
/**
 * Compute a weighted score for how well a Holland code aligns with a set of domain slugs.
 */
export declare function getHollandDomains(hollandCode: string): string[];
/**
 * Describe how a Holland code combination shapes work preferences.
 */
export declare function describeHollandCombo(hollandCode: string): string;
//# sourceMappingURL=holland-map.d.ts.map