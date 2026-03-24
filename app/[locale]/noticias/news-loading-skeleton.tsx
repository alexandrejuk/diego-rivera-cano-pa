import { defaultLocale, messages } from "@/lib/i18n";

function SkeletonPulse({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-zinc-200/80 ${className ?? ""}`} />;
}

/** Server-only skeleton; avoids segment `loading.tsx` + client nav bugs in Next 16. */
export function NewsLoadingSkeleton() {
  const t = messages[defaultLocale];

  return (
    <main className="w-full flex-1" aria-busy="true" aria-label={t.newsPage.loadingAria}>
      <div className="border-b border-zinc-200/80 bg-white/90">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <SkeletonPulse className="h-3 w-40" />
          <SkeletonPulse className="mt-4 h-10 w-full max-w-xl md:h-12" />
          <SkeletonPulse className="mt-4 h-4 w-full max-w-2xl" />
          <SkeletonPulse className="mt-2 h-4 w-full max-w-xl" />
          <div className="mt-8 flex gap-4">
            <SkeletonPulse className="h-4 w-32" />
            <SkeletonPulse className="h-4 w-48" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <SkeletonPulse className="mb-10 h-7 w-48 md:h-8" />

        <div className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-sm md:flex md:min-h-[300px]">
          <SkeletonPulse className="h-56 w-full shrink-0 md:h-auto md:w-[52%] md:min-h-[280px]" />
          <div className="flex flex-1 flex-col justify-center space-y-4 p-8 md:p-10">
            <div className="flex gap-2">
              <SkeletonPulse className="h-6 w-24 rounded-full" />
              <SkeletonPulse className="h-6 w-28 rounded-full" />
            </div>
            <SkeletonPulse className="h-8 w-full" />
            <SkeletonPulse className="h-8 w-4/5" />
            <SkeletonPulse className="h-4 w-full" />
            <SkeletonPulse className="h-4 w-full" />
            <SkeletonPulse className="h-4 w-2/3" />
            <div className="flex justify-between border-t border-transparent pt-6">
              <SkeletonPulse className="h-4 w-40" />
              <SkeletonPulse className="h-4 w-28" />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-sm"
            >
              <SkeletonPulse className="aspect-[16/10] w-full rounded-none" />
              <div className="space-y-3 p-5">
                <SkeletonPulse className="h-3 w-24" />
                <SkeletonPulse className="h-5 w-full" />
                <SkeletonPulse className="h-5 w-5/6" />
                <SkeletonPulse className="h-3 w-full" />
                <SkeletonPulse className="h-3 w-full" />
                <div className="flex justify-between pt-4">
                  <SkeletonPulse className="h-3 w-20" />
                  <SkeletonPulse className="h-3 w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
