import { SERVICE_SLUGS } from "./slugs";

/** Next services in circular order after `currentIndex`, for “recommended” cards. */
export function recommendedServiceIndices(currentIndex: number, limit = 4): number[] {
  const n = SERVICE_SLUGS.length;
  const indices: number[] = [];
  for (let i = 1; i < n && indices.length < limit; i++) {
    indices.push((currentIndex + i) % n);
  }
  return indices;
}
