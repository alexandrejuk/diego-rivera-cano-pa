import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FooterSection } from "@/components/landing/FooterSection";
import { FloatingWhatsAppButton } from "@/components/landing/FloatingWhatsAppButton";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollRevealObserver } from "@/components/landing/ScrollRevealObserver";
import { isValidLocale, messages, type Locale } from "@/lib/i18n";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const SITE_URL = "https://www.diego-rivera-cano-advogado.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};

  const locale = localeParam as Locale;

  const descriptionByLocale: Record<Locale, string> = {
    en: "Legal advisory in Panama for real estate transactions, foreign investment, corporate law, contracts, and regulatory processes.",
    es: "Asesoria legal en Panama para operaciones inmobiliarias, inversion extranjera, derecho societario, contratos y tramites regulatorios.",
    pt: "Assessoria juridica no Panama para operacoes imobiliarias, investimento estrangeiro, direito societario, contratos e processos regulatorios.",
  };

  const titleByLocale: Record<Locale, string> = {
    en: "Diego Rivera Cano | Law Firm in Panama",
    es: "Diego Rivera Cano | Abogado en Panama",
    pt: "Diego Rivera Cano | Advocacia no Panama",
  };

  const keywordsByLocale: Record<Locale, string[]> = {
    en: [
      "law firm in Panama",
      "real estate lawyer Panama",
      "foreign investment lawyer Panama",
      "corporate lawyer Panama",
      "contract lawyer Panama",
      "legal advisory Panama",
    ],
    es: [
      "abogado en Panama",
      "abogado inmobiliario Panama",
      "inversion extranjera Panama",
      "derecho societario Panama",
      "contratos comerciales Panama",
      "asesoria legal Panama",
    ],
    pt: [
      "advogado no Panamá",
      "advocacia imobiliária no Panamá",
      "investimento estrangeiro no Panamá",
      "direito societário no Panamá",
      "contratos comerciais no Panamá",
      "assessoria jurídica no Panamá",
    ],
  };

  const openGraphLocaleByLocale: Record<Locale, string> = {
    en: "en_US",
    es: "es_PA",
    pt: "pt_BR",
  };

  return {
    title: titleByLocale[locale],
    description: descriptionByLocale[locale],
    keywords: keywordsByLocale[locale],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        es: "/es",
        pt: "/pt",
      },
    },
    openGraph: {
      title: titleByLocale[locale],
      description: descriptionByLocale[locale],
      url: `${SITE_URL}/${locale}`,
      siteName: "Diego Rivera Cano",
      locale: openGraphLocaleByLocale[locale],
      type: "website",
      images: [{ url: "/logo-rivera-cano.png", width: 1200, height: 1200, alt: "Diego Rivera Cano" }],
    },
    twitter: {
      card: "summary_large_image",
      title: titleByLocale[locale],
      description: descriptionByLocale[locale],
      images: ["/logo-rivera-cano.png"],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const t = messages[locale];

  return (
    <div className="flex min-h-screen flex-col bg-[#f6f5f3]">
      <ScrollRevealObserver />
      <Navbar locale={locale} t={t} />
      <div className="flex flex-1 flex-col">{children}</div>
      <FloatingWhatsAppButton locale={locale} t={t} />
      <FooterSection t={t} locale={locale} />
    </div>
  );
}
