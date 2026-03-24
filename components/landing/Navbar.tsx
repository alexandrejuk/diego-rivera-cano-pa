import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/landing/LanguageSwitcher";
import { NavbarDesktopNav } from "@/components/landing/NavbarDesktopNav";
import { NavbarMobileNav } from "@/components/landing/NavbarMobileNav";
import type { Locale, SiteMessages } from "@/lib/i18n";

type Props = {
  locale: Locale;
  t: SiteMessages;
};

export function Navbar({ locale, t }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/60 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={`/${locale}`}
          className="flex shrink-0 items-center transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
        >
          <span className="flex w-full h-full items-center justify-center overflow-hidden rounded-full p-1">
            <Image
              src="/logo-rivera-cano.png"
              alt="Rivera Cano"
              width={52}
              height={52}
              className="h-full w-full object-contain"
              sizes="44px"
              priority
            />
          </span>
        </Link>
        <NavbarDesktopNav locale={locale} t={t} />
        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} />
          <NavbarMobileNav locale={locale} t={t} />
        </div>
      </div>
    </header>
  );
}
