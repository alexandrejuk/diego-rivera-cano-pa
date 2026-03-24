import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidLocale, messages, type Locale } from "@/lib/i18n";
import { SERVICE_HERO_IMAGES } from "@/lib/service-landing/hero-images";
import { SERVICE_SLUGS, type ServiceSlug } from "@/lib/service-landing";

type Props = {
  params: Promise<{ locale: string }>;
};

const WHATSAPP_URL =
  "https://wa.me/50760700007?text=Hola%2C%20quiero%20agendar%20una%20consulta.";

const HERO_BENTO_SLICES: ServiceSlug[] = [
  "real-estate",
  "foreign-investment",
  "corporate-law",
  "contracts",
];

const PRACTICE_CARD_BACKDROPS = [
  "from-violet-200/90 via-violet-100/80 to-violet-50",
  "from-sky-200/90 via-sky-100/80 to-sky-50",
  "from-amber-200/90 via-amber-100/80 to-amber-50",
  "from-emerald-200/90 via-emerald-100/80 to-emerald-50",
  "from-rose-200/90 via-rose-100/80 to-rose-50",
  "from-indigo-200/90 via-indigo-100/80 to-indigo-50",
  "from-teal-200/90 via-teal-100/80 to-teal-50",
] as const;

const PRACTICE_BADGE_STYLES = [
  "bg-violet-600/95 text-white",
  "bg-sky-600/95 text-white",
  "bg-amber-600/95 text-white",
  "bg-emerald-700/95 text-white",
  "bg-rose-600/95 text-white",
  "bg-indigo-600/95 text-white",
  "bg-teal-700/95 text-white",
] as const;

function getLearnMoreLabel(locale: Locale) {
  if (locale === "en") return "Learn more";
  if (locale === "pt") return "Saiba mais";
  return "Saber mas";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) {
    return { title: "Services" };
  }
  const t = messages[localeParam as Locale];
  return {
    title: t.servicesPage.pageTitle,
    description: t.servicesPage.intro,
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const t = messages[locale];
  const ctaLabel = getLearnMoreLabel(locale);

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
              {t.servicesPage.kicker}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-slate-900 md:text-5xl md:leading-[1.08]">
              {t.servicesPage.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              {t.servicesPage.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-7 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800"
              >
                {t.servicesPage.ctaButton}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </a>
              <a
                href="#areas"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                {t.servicesPage.explorePracticeAreas}
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              <Link
                href={`/${locale}`}
                className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:decoration-amber-500"
              >
                ← {t.servicesPage.backHome}
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
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {HERO_BENTO_SLICES.map((slug, i) => {
                  const src = SERVICE_HERO_IMAGES[slug];
                  const item = t.serviceSection.items[SERVICE_SLUGS.indexOf(slug)]!;
                  return (
                    <div
                      key={slug}
                      className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-lg shadow-slate-900/8 ring-1 ring-slate-900/5"
                    >
                      {src ? (
                        <Image
                          src={src}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 45vw, 220px"
                          priority={i < 2}
                        />
                      ) : (
                        <div
                          className={`flex h-full min-h-[120px] items-end bg-linear-to-br p-3 ${PRACTICE_CARD_BACKDROPS[i % PRACTICE_CARD_BACKDROPS.length]}`}
                        >
                          <span
                            className={`rounded-md px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${PRACTICE_BADGE_STYLES[i % PRACTICE_BADGE_STYLES.length]}`}
                          >
                            {t.serviceLandings[slug].kicker}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="absolute -bottom-3 left-1/2 w-[min(100%,18rem)] -translate-x-1/2 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 text-center shadow-lg backdrop-blur-sm md:-bottom-4 md:left-6 md:w-auto md:min-w-48 md:translate-x-0 md:text-left">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {t.servicesPage.kicker}
                </p>
                <p className="mt-0.5 text-sm font-semibold leading-snug text-slate-900">
                  {t.servicesPage.servicesTitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <h2 className="font-serif text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
          {t.servicesPage.highlightsTitle}
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {t.servicesPage.highlights.map((item) => (
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

      <section id="areas" className="scroll-mt-24 bg-slate-100 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 max-w-2xl space-y-2">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
              {t.servicesPage.servicesTitle}
            </h2>
            <p className="text-sm text-zinc-600 md:text-base">{t.serviceSection.subtitle}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {t.serviceSection.items.map((service, index) => {
              const slug = SERVICE_SLUGS[index]!;
              const recHero = SERVICE_HERO_IMAGES[slug];
              const landingKicker = t.serviceLandings[slug].kicker;
              const backdrop = PRACTICE_CARD_BACKDROPS[index % PRACTICE_CARD_BACKDROPS.length];
              const badgeClass = PRACTICE_BADGE_STYLES[index % PRACTICE_BADGE_STYLES.length];

              return (
                <article
                  key={service.title}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className={`relative h-44 bg-linear-to-br ${backdrop}`}>
                    {recHero ? (
                      <Image
                        src={recHero}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    ) : null}
                    <span
                      className={`absolute left-3 top-3 rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm ${badgeClass}`}
                    >
                      {landingKicker}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-serif text-lg font-bold leading-snug text-zinc-900">{service.title}</h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-600">
                      {service.points[0] ?? ""}
                    </p>
                    <Link
                      href={`/${locale}/servicos/${slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-700 transition group-hover:text-amber-600"
                    >
                      {ctaLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="mb-8 space-y-2">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
            {t.servicesPage.processTitle}
          </h2>
          <p className="max-w-3xl text-sm text-zinc-600 md:text-base">{t.servicesPage.processSubtitle}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {t.processSection.steps.map((step, i) => (
            <article
              key={step.title}
              className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 p-6 shadow-sm"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <div className="mb-7 space-y-2">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
            {t.servicesPage.faqTitle}
          </h2>
          <p className="max-w-3xl text-sm text-zinc-600 md:text-base">{t.servicesPage.faqSubtitle}</p>
        </div>
        <div className="space-y-3">
          {t.servicesPage.faqItems.map((item) => (
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

      <section
        id="services-contact"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-16 md:pb-20"
      >
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-slate-950 via-slate-900 to-slate-800 p-8 text-white shadow-xl md:p-10">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl"
            aria-hidden
          />
          <h2 className="relative font-serif text-2xl font-bold tracking-tight md:text-3xl">
            {t.servicesPage.ctaTitle}
          </h2>
          <p className="relative mt-3 max-w-2xl text-sm text-white/90 md:text-base">
            {t.servicesPage.ctaDescription}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-amber-500 px-6 text-sm font-semibold text-zinc-900 transition hover:bg-amber-400"
          >
            {t.servicesPage.ctaButton}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </section>
    </main>
  );
}
