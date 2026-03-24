import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidLocale, locales, messages, type Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalizedHome({ params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const t = messages[locale as Locale];
  const today = new Intl.DateTimeFormat(t.dateLocale, {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/Panama",
  }).format(new Date());

  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-16 font-sans">
      <main className="w-full max-w-4xl rounded-3xl bg-white p-10 shadow-sm ring-1 ring-zinc-100 md:p-14">
        <div className="mb-6 flex gap-2 text-sm">
          {locales.map((language) => (
            <Link
              key={language}
              href={`/${language}`}
              className={`rounded-full px-3 py-1 transition ${
                language === locale
                  ? "bg-zinc-900 text-white"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
              }`}
            >
              {language.toUpperCase()}
            </Link>
          ))}
        </div>

        <p className="mb-4 text-sm font-medium uppercase tracking-wide text-zinc-500">
          {t.siteLabel}
        </p>
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            {t.heading}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-700">
            {t.description}
          </p>
          <p className="text-sm text-zinc-500">
            {t.ssrLabel} {today}
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-white transition hover:bg-zinc-700"
            href="#contact"
          >
            {t.primaryCta}
          </a>
          <a
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-50"
            href="tel:+50700000000"
          >
            {t.secondaryCta}
          </a>
        </div>
      </main>
    </div>
  );
}
