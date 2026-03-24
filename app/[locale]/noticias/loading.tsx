import { NewsLoadingSkeleton } from "./news-loading-skeleton";

/** Server Component — sem `params` (Next não passa em loading); skeleton usa locale default só no aria. */
export default function Loading() {
  return <NewsLoadingSkeleton />;
}
