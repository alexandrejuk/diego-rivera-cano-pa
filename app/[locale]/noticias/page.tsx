import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAggregatedNewsDetailed, type NewsItem } from "@/lib/news";
import { isValidLocale, messages, type Locale, type SiteMessages } from "@/lib/i18n";
import { NewsLoadFailure } from "@/components/system/NewsLoadFailure";

type Props = {
  params: Promise<{ locale: string }>;
};

const NEWS_BLOCK_SIZE = 6;

/** Evita shell estático / cache de RSC que impede os feeds em navegação client-side */
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) {
    return { title: "News" };
  }
  const t = messages[localeParam as Locale];
  return {
    title: t.newsPage.pageTitle,
    description: t.newsPage.intro,
  };
}

function chunkNewsItems(items: NewsItem[], size: number): NewsItem[][] {
  const chunks: NewsItem[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

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
    // eslint-disable-next-line @next/next/no-img-element -- RSS domains vary; remotePatterns would be brittle
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

function FeaturedNewsArticle({
  item,
  t,
  dateLocale,
}: {
  item: NewsItem;
  t: SiteMessages;
  dateLocale: string;
}) {
  return (
    <article className="section-reveal overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-md shadow-zinc-900/[0.04] ring-1 ring-black/[0.03] transition hover:shadow-lg hover:shadow-zinc-900/[0.06] md:flex md:min-h-[300px]">
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
            {t.newsPage.featuredLabel}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            {item.source}
          </span>
        </div>
        <h3 className="mt-4 font-serif text-2xl font-bold leading-snug tracking-tight text-zinc-900 md:text-3xl">
          {item.title}
        </h3>
        <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-zinc-600 md:text-base">
          {item.description || t.newsPage.excerptFallback}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-100 pt-6">
          <time className="text-xs text-zinc-500" dateTime={new Date(item.timestamp).toISOString()}>
            {new Date(item.timestamp).toLocaleString(dateLocale, {
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
            {t.newsPage.readOnSource}
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function CompactNewsCard({
  item,
  t,
  dateLocale,
}: {
  item: NewsItem;
  t: SiteMessages;
  dateLocale: string;
}) {
  return (
    <article className="section-reveal group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-sm shadow-zinc-900/[0.03] ring-1 ring-black/[0.02] transition hover:border-amber-200/60 hover:shadow-md">
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
          {item.description || t.newsPage.excerptFallback}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-zinc-100 pt-4">
          <time
            className="text-[11px] text-zinc-500"
            dateTime={new Date(item.timestamp).toISOString()}
          >
            {new Date(item.timestamp).toLocaleDateString(dateLocale, {
              dateStyle: "medium",
            })}
          </time>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-semibold text-zinc-900 underline decoration-amber-500 underline-offset-4"
          >
            {t.newsPage.readOnSource}
          </a>
        </div>
      </div>
    </article>
  );
}

export default async function NewsPage({ params }: Props) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const t = messages[locale];
  const { items: news, allSourcesFailed } = await getAggregatedNewsDetailed(30);
  const blocks = chunkNewsItems(news, NEWS_BLOCK_SIZE);

  const loadFailure =
    allSourcesFailed && news.length === 0 ? (
      <NewsLoadFailure
        locale={locale}
        title={t.newsPage.loadErrorTitle}
        description={t.newsPage.loadErrorDescription}
        redirectTemplate={t.newsPage.loadErrorRedirect}
        goNowLabel={t.newsPage.loadErrorGoNow}
      />
    ) : null;

  return (
    <main className="w-full flex-1">
      {!loadFailure ? (
        <div className="border-b border-zinc-200/80 bg-white/90">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              {t.newsPage.kicker}
            </p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
              {t.newsPage.headline}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
              {t.newsPage.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
              <Link
                href={`/${locale}`}
                className="font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-amber-500"
              >
                ← {t.newsPage.backHome}
              </Link>
              <span className="hidden sm:inline" aria-hidden>
                ·
              </span>
              <span>{t.newsPage.lastUpdatedLabel}:</span>
              <time dateTime={new Date().toISOString()}>
                {new Intl.DateTimeFormat(t.dateLocale, {
                  dateStyle: "medium",
                  timeStyle: "short",
                  timeZone: "America/Panama",
                }).format(new Date())}
              </time>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        {loadFailure}
        {!loadFailure && news.length === 0 ? (
          <div className="section-reveal rounded-2xl border border-zinc-200 bg-white px-8 py-14 text-center text-zinc-600 shadow-sm">
            {t.newsPage.emptyState}
          </div>
        ) : null}
        {!loadFailure && news.length > 0 ? (
          <div className="space-y-12 md:space-y-14">
            <h2 className="section-reveal font-serif text-xl font-bold text-zinc-900 md:text-2xl">
              {t.newsPage.latestSectionTitle}
            </h2>

            {blocks.map((block, blockIndex) => {
              const [featured, ...restInBlock] = block;
              const blockNumber = blockIndex + 1;
              const blockHeading =
                blockIndex > 0
                  ? t.newsPage.featuredBlockHeading.replace(/\{\{n\}\}/g, String(blockNumber))
                  : null;

              return (
                <div key={featured.link} className="space-y-8 md:space-y-10">
                  {blockHeading ? (
                    <h3 className="section-reveal border-b border-zinc-200/90 pb-3 font-serif text-lg font-bold tracking-tight text-zinc-800 md:text-xl">
                      {blockHeading}
                    </h3>
                  ) : null}
                  <section aria-labelledby={`featured-block-${blockIndex}`}>
                    <h3 id={`featured-block-${blockIndex}`} className="sr-only">
                      {t.newsPage.featuredLabel} — {blockIndex + 1}
                    </h3>
                    <FeaturedNewsArticle item={featured} t={t} dateLocale={t.dateLocale} />
                  </section>

                  {restInBlock.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {restInBlock.map((item) => (
                        <CompactNewsCard
                          key={item.link}
                          item={item}
                          t={t}
                          dateLocale={t.dateLocale}
                        />
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </main>
  );
}
