export * from "./slugs";
export type { ServiceLandingEntry } from "./types";
import { serviceLandingEn } from "./copy-en";
import { serviceLandingEs } from "./copy-es";
import { serviceLandingPt } from "./copy-pt";

export const serviceLandingByLocale = {
  en: serviceLandingEn,
  es: serviceLandingEs,
  pt: serviceLandingPt,
} as const;
