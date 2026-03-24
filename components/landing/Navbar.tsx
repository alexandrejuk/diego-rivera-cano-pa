import Link from "next/link";
import { LanguageSwitcher } from "@/components/landing/LanguageSwitcher";
import type { Locale, SiteMessages } from "@/lib/i18n";

type Props = {
  locale: Locale;
  t: SiteMessages;
};

export function Navbar({ locale, t }: Props) {
  return (
    <header className="section-reveal sticky top-0 z-20 border-b border-white/60 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={`/${locale}`}
          className="text-xl font-black tracking-tight text-zinc-900 transition hover:text-amber-900"
        >
          DRC
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
          <Link href={`/${locale}`} className="hover:text-zinc-900">
            {t.nav.home}
          </Link>
          <a href={`/${locale}#services`} className="hover:text-zinc-900">
            {t.nav.services}
          </a>
          <a href={`/${locale}#process`} className="hover:text-zinc-900">
            {t.nav.process}
          </a>
          <a href={`/${locale}#testimonials`} className="hover:text-zinc-900">
            {t.nav.testimonials}
          </a>
          <a href={`/${locale}#contact`} className="hover:text-zinc-900">
            {t.nav.contact}
          </a>
          <Link
            href={`/${locale}/noticias`}
            prefetch={false}
            className="hover:text-zinc-900"
          >
            {t.nav.news}
          </Link>
        </nav>
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}
