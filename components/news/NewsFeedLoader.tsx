"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { AggregatedNewsResult } from "@/lib/news";
import { NewsLoadFailure } from "@/components/system/NewsLoadFailure";
import {
  chunkNewsItems,
  CompactNewsCard,
  FeaturedNewsArticle,
  type NewsFeedLabels,
} from "@/components/news/NewsArticleCards";
import { NewsFeedBodySkeleton } from "@/components/news/NewsFeedBodySkeleton";

const NEWS_BLOCK_SIZE = 6;

type LoadErrorCopy = {
  title: string;
  description: string;
  redirectTemplate: string;
  goNowLabel: string;
};

type Props = {
  locale: Locale;
  labels: NewsFeedLabels;
  loadErrorCopy: LoadErrorCopy;
};

export function NewsFeedLoader({ locale, labels, loadErrorCopy }: Props) {
  const [data, setData] = useState<AggregatedNewsResult | null>(null);
  const [fetchFailed, setFetchFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(`/api/news?limit=30`, { cache: "no-store" });
        if (cancelled) return;
        if (!res.ok) {
          setFetchFailed(true);
          return;
        }
        const json = (await res.json()) as unknown;
        if (cancelled) return;
        if (
          !json ||
          typeof json !== "object" ||
          !("items" in json) ||
          !Array.isArray((json as AggregatedNewsResult).items)
        ) {
          setFetchFailed(true);
          return;
        }
        const parsed = json as AggregatedNewsResult;
        setData({
          items: parsed.items,
          allSourcesFailed:
            typeof parsed.allSourcesFailed === "boolean" ? parsed.allSourcesFailed : false,
        });
      } catch {
        if (!cancelled) {
          setFetchFailed(true);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [locale]);

  if (data === null && !fetchFailed) {
    return <NewsFeedBodySkeleton />;
  }

  if (fetchFailed || !data) {
    return (
      <NewsLoadFailure
        locale={locale}
        title={loadErrorCopy.title}
        description={loadErrorCopy.description}
        redirectTemplate={loadErrorCopy.redirectTemplate}
        goNowLabel={loadErrorCopy.goNowLabel}
      />
    );
  }

  const { items: news, allSourcesFailed } = data;

  if (allSourcesFailed && news.length === 0) {
    return (
      <NewsLoadFailure
        locale={locale}
        title={loadErrorCopy.title}
        description={loadErrorCopy.description}
        redirectTemplate={loadErrorCopy.redirectTemplate}
        goNowLabel={loadErrorCopy.goNowLabel}
      />
    );
  }

  if (news.length === 0) {
    return (
      <div className="section-reveal is-visible rounded-2xl border border-zinc-200 bg-white px-8 py-14 text-center text-zinc-600 shadow-sm">
        {labels.emptyState}
      </div>
    );
  }

  const blocks = chunkNewsItems(news, NEWS_BLOCK_SIZE);

  return (
    <div className="space-y-12 md:space-y-14">
      <h2 className="section-reveal is-visible font-serif text-xl font-bold text-zinc-900 md:text-2xl">
        {labels.latestSectionTitle}
      </h2>

      {blocks.map((block, blockIndex) => {
        const [featured, ...restInBlock] = block;
        const blockNumber = blockIndex + 1;
        const blockHeading =
          blockIndex > 0
            ? labels.featuredBlockHeading.replace(/\{\{n\}\}/g, String(blockNumber))
            : null;

        return (
          <div key={featured.link} className="space-y-8 md:space-y-10">
            {blockHeading ? (
              <h3 className="section-reveal is-visible border-b border-zinc-200/90 pb-3 font-serif text-lg font-bold tracking-tight text-zinc-800 md:text-xl">
                {blockHeading}
              </h3>
            ) : null}
            <section aria-labelledby={`featured-block-${blockIndex}`}>
              <h3 id={`featured-block-${blockIndex}`} className="sr-only">
                {labels.featuredLabel} — {blockIndex + 1}
              </h3>
              <FeaturedNewsArticle item={featured} labels={labels} />
            </section>

            {restInBlock.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {restInBlock.map((item) => (
                  <CompactNewsCard key={item.link} item={item} labels={labels} />
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
