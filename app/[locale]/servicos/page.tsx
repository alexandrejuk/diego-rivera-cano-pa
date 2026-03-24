import type { Metadata } from "next";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  FileText,
  Landmark,
  Scale,
  Users,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidLocale, messages, type Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

const WHATSAPP_URL =
  "https://wa.me/50760700007?text=Hola%2C%20quiero%20agendar%20una%20consulta.";

const SERVICE_ICONS = [Building2, Landmark, BriefcaseBusiness, FileText, Wallet, Scale, Users];

function buildServiceWhatsAppUrl(locale: Locale, serviceTitle: string) {
  const messageByLocale: Record<Locale, string> = {
    en: `Hello, I want more information about this legal service: ${serviceTitle}.`,
    es: `Hola, quiero mas informacion sobre este servicio legal: ${serviceTitle}.`,
    pt: `Olá, quero mais informações sobre este serviço jurídico: ${serviceTitle}.`,
  };

  const message = messageByLocale[locale] ?? messageByLocale.es;
  return `https://wa.me/50760700007?text=${encodeURIComponent(message)}`;
}

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

  return (
    <main className="w-full flex-1">
      <section className="border-b border-zinc-200/80 bg-white/90">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            {t.servicesPage.kicker}
          </p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            {t.servicesPage.headline}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 md:text-lg">
            {t.servicesPage.intro}
          </p>
          <div className="mt-8">
            <Link
              href={`/${locale}`}
              className="text-sm font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-amber-500"
            >
              ← {t.servicesPage.backHome}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <div className="rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm md:p-8">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-zinc-900">
            {t.servicesPage.highlightsTitle}
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {t.servicesPage.highlights.map((item) => (
              <article key={item} className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-4">
                <p className="text-sm leading-relaxed text-zinc-700">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-100 py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-6 font-serif text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
            {t.servicesPage.servicesTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {t.serviceSection.items.map((service, index) => {
              const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
              const ctaLabel = getLearnMoreLabel(locale);
              const whatsappServiceUrl = buildServiceWhatsAppUrl(locale, service.title);

              return (
              <article
                key={service.title}
                className="rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm transition hover:border-amber-200 hover:shadow-md"
              >
                <div className="mb-3 flex gap-2.5">
                  <span className="inline-flex h-8 w-8 p-2 items-center justify-center rounded-lg bg-blue-100">
                    <Icon className="h-4 w-4 text-[#182236]" />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="min-h-14 text-sm leading-relaxed text-zinc-600">
                  {service.points[0] ?? ""}
                </p>
                <a
                  href={whatsappServiceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 transition hover:text-amber-500"
                >
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full bg-zinc-900 py-12 text-zinc-100 md:py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-7 space-y-2">
            <h2 className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
              {t.servicesPage.processTitle}
            </h2>
            <p className="max-w-3xl text-sm text-zinc-300 md:text-base">
              {t.servicesPage.processSubtitle}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {t.processSection.steps.map((step) => (
              <article key={step.title} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="rounded-3xl bg-linear-to-r from-slate-950 via-slate-900 to-slate-800 p-8 text-white shadow-lg md:p-10">
          <h2 className="font-serif text-2xl font-bold tracking-tight md:text-3xl">{t.servicesPage.ctaTitle}</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-base">{t.servicesPage.ctaDescription}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-amber-500 px-6 text-sm font-semibold text-zinc-900 transition hover:bg-amber-400"
          >
            {t.servicesPage.ctaButton}
          </a>
        </div>
      </section>
    </main>
  );
}
