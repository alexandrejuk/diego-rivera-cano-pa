import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidLocale, locales, messages, type Locale } from "@/lib/i18n";
import { SERVICE_HERO_IMAGES } from "@/lib/service-landing/hero-images";
import { recommendedServiceIndices } from "@/lib/service-landing/recommended-services";
import {
  SERVICE_SLUGS,
  isServiceSlug,
  serviceIndexFromSlug,
  type ServiceSlug,
} from "@/lib/service-landing";
import { buildServiceWhatsAppUrl } from "@/lib/whatsapp-contact";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const RECOMMENDED_CARD_BACKDROPS = [
  "from-violet-200/90 via-violet-100/80 to-violet-50",
  "from-sky-200/90 via-sky-100/80 to-sky-50",
  "from-amber-200/90 via-amber-100/80 to-amber-50",
  "from-emerald-200/90 via-emerald-100/80 to-emerald-50",
] as const;

const RECOMMENDED_BADGE_STYLES = [
  "bg-violet-600/95 text-white",
  "bg-sky-600/95 text-white",
  "bg-amber-600/95 text-white",
  "bg-emerald-700/95 text-white",
] as const;

export function generateStaticParams() {
  return locales.flatMap((locale) => SERVICE_SLUGS.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam) || !isServiceSlug(slug)) {
    return { title: "Service" };
  }
  const locale = localeParam as Locale;
  const landing = messages[locale].serviceLandings[slug];
  return {
    title: landing.pageTitle,
    description: landing.metaDescription,
  };
}

export default async function ServiceLandingPage({ params }: Props) {
  const { locale: localeParam, slug: slugParam } = await params;

  if (!isValidLocale(localeParam) || !isServiceSlug(slugParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const slug = slugParam as ServiceSlug;
  const t = messages[locale];
  const landing = t.serviceLandings[slug];
  const serviceIndex = serviceIndexFromSlug(slug);
  const serviceItem = t.serviceSection.items[serviceIndex];
  const whatsappUrl = buildServiceWhatsAppUrl(locale, serviceItem.title);
  const heroImageSrc = SERVICE_HERO_IMAGES[slug];
  const recommendedIdxs = recommendedServiceIndices(serviceIndex, 4);

  return (
    <main className="w-full flex-1 bg-white">
      <section className="relative overflow-hidden border-b border-zinc-200/80 bg-zinc-50">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 25%, rgba(245, 158, 11, 0.12), transparent 42%), radial-gradient(circle at 85% 20%, rgba(14, 116, 144, 0.1), transparent 38%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2 md:items-center md:gap-12 md:py-16 lg:py-20">
          <div className="order-2 md:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
              {landing.kicker}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-slate-900 md:text-5xl md:leading-[1.08]">
              {landing.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              {landing.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-7 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800"
              >
                {landing.ctaButton}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </a>
              <Link
                href={`/${locale}/servicos`}
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                {t.servicesPage.backToServices}
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              <Link
                href={`/${locale}`}
                className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:decoration-amber-500"
              >
                {t.servicesPage.backHome}
              </Link>
            </p>
          </div>

          <div className="relative order-1 md:order-2">
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-full border-2 border-dashed border-amber-400/40 md:h-48 md:w-48"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-4 left-8 h-24 w-24 rounded-full bg-amber-400/25 blur-2xl md:left-12"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute right-12 top-1/2 h-3 w-3 rounded-full bg-cyan-500/80 md:right-16"
              aria-hidden
            />

            <div className="relative mx-auto w-full max-w-md md:ml-auto md:mr-0">
              <div className="relative overflow-hidden rounded-4xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5">
                <div className="relative aspect-4/5 w-full sm:aspect-5/6">
                  {heroImageSrc ? (
                    <Image
                      src={heroImageSrc}
                      alt={serviceItem.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  ) : (
                    <div className="flex h-full min-h-[280px] flex-col items-center justify-center bg-linear-to-br from-slate-100 via-slate-50 to-white px-8 text-center">
                      <span className="rounded-full bg-slate-900/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-slate-500">
                        {landing.kicker}
                      </span>
                      <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-slate-500">
                        {t.servicesPage.heroImagePlaceholder}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute -bottom-4 left-4 max-w-56 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-lg backdrop-blur-sm md:-bottom-5 md:left-6 md:max-w-64 md:p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {t.servicesPage.kicker}
                </p>
                <p className="mt-1 text-sm font-semibold leading-snug text-slate-900">{serviceItem.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <p className="max-w-3xl text-base leading-relaxed text-zinc-700 md:text-lg">
          {landing.bodyParagraph}
        </p>
        <h2 className="mt-12 font-serif text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
          {landing.highlightsTitle}
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {landing.highlights.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-zinc-200/90 bg-linear-to-b from-white to-zinc-50/80 p-6 shadow-sm"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-600" aria-hidden />
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full bg-slate-100 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
            {t.serviceSection.listHeading}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 md:text-base">{serviceItem.title}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {serviceItem.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 rounded-xl border border-zinc-200/80 bg-white px-4 py-3 text-sm leading-relaxed text-zinc-700 shadow-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
              {t.servicesPage.recommendedServicesTitle}
            </h2>
            <p className="max-w-2xl text-sm text-zinc-600 md:text-base">
              {t.servicesPage.recommendedServicesSubtitle}
            </p>
          </div>
          <Link
            href={`/${locale}/servicos`}
            className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-zinc-400"
          >
            {t.servicesPage.recommendedViewAll}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recommendedIdxs.map((idx, cardIndex) => {
            const recSlug = SERVICE_SLUGS[idx]!;
            const recItem = t.serviceSection.items[idx]!;
            const recLanding = t.serviceLandings[recSlug];
            const recHero = SERVICE_HERO_IMAGES[recSlug];
            const backdrop = RECOMMENDED_CARD_BACKDROPS[cardIndex % RECOMMENDED_CARD_BACKDROPS.length];
            const badgeClass = RECOMMENDED_BADGE_STYLES[cardIndex % RECOMMENDED_BADGE_STYLES.length];

            return (
              <article
                key={recSlug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className={`relative h-40 bg-linear-to-br ${backdrop}`}>
                  {recHero ? (
                    <Image
                      src={recHero}
                      alt={recItem.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-end justify-start p-4">
                      <span
                        className={`rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${badgeClass}`}
                      >
                        {recLanding.kicker}
                      </span>
                    </div>
                  )}
                  {recHero ? (
                    <span
                      className={`absolute left-3 top-3 rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm ${badgeClass}`}
                    >
                      {recLanding.kicker}
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-lg font-bold leading-snug text-zinc-900">{recItem.title}</h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-zinc-600">
                    {recItem.points[0] ?? ""}
                  </p>
                  <Link
                    href={`/${locale}/servicos/${recSlug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-700 transition group-hover:text-amber-600"
                  >
                    {t.servicesPage.recommendedViewDetails}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="mb-8 space-y-2">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
            {landing.faqTitle}
          </h2>
          <p className="max-w-3xl text-sm text-zinc-600 md:text-base">{landing.faqSubtitle}</p>
        </div>
        <div className="space-y-3">
          {landing.faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm open:shadow-md"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-zinc-900">
                <span className="inline-flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden />
                  <span>{item.question}</span>
                </span>
              </summary>
              <p className="pt-3 text-sm leading-relaxed text-zinc-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-slate-950 via-slate-900 to-slate-800 p-8 text-white shadow-xl md:p-10">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl"
            aria-hidden
          />
          <h2 className="relative font-serif text-2xl font-bold tracking-tight md:text-3xl">
            {landing.ctaTitle}
          </h2>
          <p className="relative mt-3 max-w-2xl text-sm text-white/90 md:text-base">
            {landing.ctaDescription}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-amber-500 px-6 text-sm font-semibold text-zinc-900 transition hover:bg-amber-400"
          >
            {landing.ctaButton}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </section>
    </main>
  );
}
