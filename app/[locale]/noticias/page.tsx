import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NewsFeedLoader } from "@/components/news/NewsFeedLoader";
import { isValidLocale, messages, type Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

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

export default async function NewsPage({ params }: Props) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const t = messages[locale];

  const labels = {
    dateLocale: t.dateLocale,
    featuredLabel: t.newsPage.featuredLabel,
    excerptFallback: t.newsPage.excerptFallback,
    readOnSource: t.newsPage.readOnSource,
    latestSectionTitle: t.newsPage.latestSectionTitle,
    featuredBlockHeading: t.newsPage.featuredBlockHeading,
    emptyState: t.newsPage.emptyState,
  };

  const loadErrorCopy = {
    title: t.newsPage.loadErrorTitle,
    description: t.newsPage.loadErrorDescription,
    redirectTemplate: t.newsPage.loadErrorRedirect,
    goNowLabel: t.newsPage.loadErrorGoNow,
  };

  return (
    <main className="w-full flex-1">
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

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <NewsFeedLoader locale={locale} labels={labels} loadErrorCopy={loadErrorCopy} />
      </div>
    </main>
  );
}
