import type { NewsItem } from "@/lib/news";

export type NewsFeedLabels = {
  dateLocale: string;
  featuredLabel: string;
  excerptFallback: string;
  readOnSource: string;
  latestSectionTitle: string;
  featuredBlockHeading: string;
  emptyState: string;
};

function NewsThumb({
  item,
  className,
  sizesHint,
}: {
  item: NewsItem;
  className?: string;
  sizesHint?: string;
}) {
  if (!item.imageUrl) {
    return (
      <div
        className={`flex items-center justify-center bg-linear-to-br from-slate-100 via-zinc-100 to-amber-50/40 ${className ?? ""}`}
        aria-hidden
      >
        <span className="text-4xl font-black tracking-tighter text-zinc-300/90">DRC</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- RSS domains vary
    <img
      src={item.imageUrl}
      alt=""
      className={`object-cover ${className ?? ""}`}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      sizes={sizesHint}
    />
  );
}

export function FeaturedNewsArticle({
  item,
  labels,
}: {
  item: NewsItem;
  labels: NewsFeedLabels;
}) {
  return (
    <article className="section-reveal is-visible overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-md shadow-zinc-900/[0.04] ring-1 ring-black/[0.03] transition hover:shadow-lg hover:shadow-zinc-900/[0.06] md:flex md:min-h-[300px]">
      <div className="relative md:w-[52%]">
        <NewsThumb
          item={item}
          className="h-56 w-full min-h-[14rem] md:absolute md:inset-0 md:h-full"
          sizesHint="(min-width: 768px) 50vw, 100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-900/25 to-transparent md:bg-linear-to-r" />
      </div>
      <div className="flex flex-1 flex-col justify-center p-8 md:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-amber-500/15 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-amber-900">
            {labels.featuredLabel}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            {item.source}
          </span>
        </div>
        <h3 className="mt-4 font-serif text-2xl font-bold leading-snug tracking-tight text-zinc-900 md:text-3xl">
          {item.title}
        </h3>
        <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-zinc-600 md:text-base">
          {item.description || labels.excerptFallback}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-100 pt-6">
          <time className="text-xs text-zinc-500" dateTime={new Date(item.timestamp).toISOString()}>
            {new Date(item.timestamp).toLocaleString(labels.dateLocale, {
              dateStyle: "long",
              timeStyle: "short",
            })}
          </time>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 underline decoration-amber-500 underline-offset-4 transition hover:text-amber-900"
          >
            {labels.readOnSource}
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function CompactNewsCard({ item, labels }: { item: NewsItem; labels: NewsFeedLabels }) {
  return (
    <article className="section-reveal is-visible group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-sm shadow-zinc-900/[0.03] ring-1 ring-black/[0.02] transition hover:border-amber-200/60 hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
        <NewsThumb
          item={item}
          className="h-full w-full transition duration-300 group-hover:scale-[1.02]"
          sizesHint="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800/90">{item.source}</p>
        <h3 className="mt-2 line-clamp-3 font-serif text-lg font-bold leading-snug text-zinc-900">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-600">
          {item.description || labels.excerptFallback}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-zinc-100 pt-4">
          <time
            className="text-[11px] text-zinc-500"
            dateTime={new Date(item.timestamp).toISOString()}
          >
            {new Date(item.timestamp).toLocaleDateString(labels.dateLocale, {
              dateStyle: "medium",
            })}
          </time>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-semibold text-zinc-900 underline decoration-amber-500 underline-offset-4"
          >
            {labels.readOnSource}
          </a>
        </div>
      </div>
    </article>
  );
}

export function chunkNewsItems(items: NewsItem[], size: number): NewsItem[][] {
  const chunks: NewsItem[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}
