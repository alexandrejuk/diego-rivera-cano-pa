import { notFound } from "next/navigation";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { ContactCtaSection } from "@/components/landing/ContactCtaSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { MetricsStripSection } from "@/components/landing/MetricsStripSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
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
    <>
      <HeroSection t={t} renderedAt={today} />
      <MetricsStripSection t={t} />
      <BenefitsSection t={t} />
      <ServicesSection t={t} locale={locale as Locale} />
      <ProcessSection t={t} />
      <TestimonialsSection t={t} />
      <FaqSection t={t} />
      <ContactCtaSection t={t} />
    </>
  );
}
