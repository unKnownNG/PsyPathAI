export interface MBTIProfile {
    type: string;
    nickname: string;
    cognitiveStack: string[];
    strengths: string[];
    blindSpots: string[];
    idealWorkEnvironment: string;
    communicationStyle: string;
    motivationalTriggers: string[];
    stressResponse: string;
    careerValues: string[];
    pairingWithHolland: Record<string, string>;
}
export declare const mbtiProfiles: Record<string, MBTIProfile>;
//# sourceMappingURL=mbti-profiles.d.ts.map