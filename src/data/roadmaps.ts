import { Domain, SubPath } from "./types";
import { webDevDomain } from "./roadmaps/web";
import { appDevDomain } from "./roadmaps/app";
import { aiMLDomain } from "./roadmaps/ai";
import { dataDomain, cloudDomain } from "./roadmaps/data-cloud";
import { cyberDomain, coreCsDomain, emergingDomain, careerDomain } from "./roadmaps/other";
import { hardwareDomain } from "./roadmaps/hardware";
import { languagesDomain } from "./roadmaps/languages";

export const domains: Domain[] = [
  webDevDomain,
  appDevDomain,
  aiMLDomain,
  dataDomain,
  cloudDomain,
  cyberDomain,
  coreCsDomain,
  languagesDomain,
  hardwareDomain,
  emergingDomain,
  careerDomain
];

export function getDomainBySlug(slug: string): Domain | undefined {
  return domains.find((d) => d.slug === slug);
}

export function getSubPathBySlug(domainSlug: string, subPathSlug: string): SubPath | undefined {
  const domain = getDomainBySlug(domainSlug);
  return domain?.subPaths.find((sp) => sp.slug === subPathSlug);
}
