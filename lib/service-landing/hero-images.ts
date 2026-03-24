import type { ServiceSlug } from "./slugs";

/**
 * Map each service slug to a public path (e.g. "/service-hero/real-estate.jpg").
 * When set, the service landing hero shows this image; otherwise a placeholder is shown.
 */
export const SERVICE_HERO_IMAGES: Partial<Record<ServiceSlug, string>> = {
  // "real-estate": "/service-hero/real-estate.jpg",
  "real-estate": "/service-hero/real-estate.png",
  "foreign-investment": "/service-hero/foreign-investment.png",
  "corporate-law": "/service-hero/corporate-law.png",
  "contracts": "/service-hero/contracts.png",
  "banking-support": "/service-hero/banking-support.png",
  "regulatory": "/service-hero/regulatory.png",
  "investor-support": "/service-hero/investor-support.png",
};
