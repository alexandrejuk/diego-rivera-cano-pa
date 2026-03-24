import { notFound } from "next/navigation";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { ContactCtaSection } from "@/components/landing/ContactCtaSection";
import { FooterSection } from "@/components/landing/FooterSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { MetricsStripSection } from "@/components/landing/MetricsStripSection";
import { Navbar } from "@/components/landing/Navbar";
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
    <div className="flex min-h-screen flex-col bg-[#faf7ff]">
      <Navbar locale={locale} t={t} />
      <HeroSection t={t} renderedAt={today} />
      <MetricsStripSection t={t} />
      <BenefitsSection t={t} />
      <ServicesSection t={t} />
      <ProcessSection t={t} />
      <TestimonialsSection t={t} />
      <ContactCtaSection t={t} />
      <FooterSection t={t} />
    </div>
  );
}
