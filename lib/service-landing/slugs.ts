export const SERVICE_SLUGS = [
  "real-estate",
  "foreign-investment",
  "corporate-law",
  "contracts",
  "banking-support",
  "regulatory",
  "investor-support",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}

export function serviceIndexFromSlug(slug: ServiceSlug): number {
  return SERVICE_SLUGS.indexOf(slug);
}
