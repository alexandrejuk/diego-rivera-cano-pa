import { LanguageSwitcher } from "@/components/landing/LanguageSwitcher";
import type { Locale, SiteMessages } from "@/lib/i18n";

type Props = {
  locale: Locale;
  t: SiteMessages;
};

export function Navbar({ locale, t }: Props) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/60 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-xl font-black tracking-tight text-zinc-900">DRC</div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
          <a href="#services" className="hover:text-zinc-900">
            {t.nav.services}
          </a>
          <a href="#process" className="hover:text-zinc-900">
            {t.nav.process}
          </a>
          <a href="#testimonials" className="hover:text-zinc-900">
            {t.nav.testimonials}
          </a>
          <a href="#contact" className="hover:text-zinc-900">
            {t.nav.contact}
          </a>
        </nav>
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}
