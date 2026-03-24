import { notFound } from "next/navigation";
import { FooterSection } from "@/components/landing/FooterSection";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollRevealObserver } from "@/components/landing/ScrollRevealObserver";
import { isValidLocale, messages, type Locale } from "@/lib/i18n";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

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
      <FooterSection t={t} locale={locale} />
    </div>
  );
}
