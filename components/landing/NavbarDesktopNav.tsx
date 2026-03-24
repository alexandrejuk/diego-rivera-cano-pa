"use client";

import Link from "next/link";
import type { Locale, SiteMessages } from "@/lib/i18n";
import { navDesktopItemClass, useNavActiveKey } from "@/components/landing/useNavActiveKey";

type Props = {
  locale: Locale;
  t: SiteMessages;
};

export function NavbarDesktopNav({ locale, t }: Props) {
  const active = useNavActiveKey(locale);

  return (
    <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
      <Link
        href={`/${locale}`}
        className={navDesktopItemClass(active === "home")}
        aria-current={active === "home" ? "page" : undefined}
      >
        {t.nav.home}
      </Link>
      <Link
        href={`/${locale}/servicos`}
        className={navDesktopItemClass(active === "services")}
        aria-current={active === "services" ? "page" : undefined}
      >
        {t.nav.services}
      </Link>
      <a
        href={`/${locale}#process`}
        className={navDesktopItemClass(active === "process")}
        aria-current={active === "process" ? "true" : undefined}
      >
        {t.nav.process}
      </a>
      <a
        href={`/${locale}#testimonials`}
        className={navDesktopItemClass(active === "testimonials")}
        aria-current={active === "testimonials" ? "true" : undefined}
      >
        {t.nav.testimonials}
      </a>
      <a
        href={`/${locale}#contact`}
        className={navDesktopItemClass(active === "contact")}
        aria-current={active === "contact" ? "true" : undefined}
      >
        {t.nav.contact}
      </a>
      <Link
        href={`/${locale}/noticias`}
        prefetch={false}
        className={navDesktopItemClass(active === "news")}
        aria-current={active === "news" ? "page" : undefined}
      >
        {t.nav.news}
      </Link>
    </nav>
  );
}
