"use client";

import {
  BriefcaseBusiness,
  Home,
  ListOrdered,
  Mail,
  Menu,
  MessageCircle,
  MessagesSquare,
  Newspaper,
  X,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import {
  navMobileIconClass,
  navMobileItemClass,
  useNavActiveKey,
} from "@/components/landing/useNavActiveKey";
import type { Locale, SiteMessages } from "@/lib/i18n";

type Props = {
  locale: Locale;
  t: SiteMessages;
};

export function NavbarMobileNav({ locale, t }: Props) {
  const active = useNavActiveKey(locale);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelId = useId();
  const whatsappUrl = "https://wa.me/50760700007?text=Hola%2C%20quiero%20agendar%20una%20consulta.";

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.dataset.mobileMenuOpen = open ? "true" : "false";
    window.dispatchEvent(new CustomEvent("mobile-menu-state", { detail: { open } }));

    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      document.body.dataset.mobileMenuOpen = "false";
      window.dispatchEvent(new CustomEvent("mobile-menu-state", { detail: { open: false } }));
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-800 transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X className="h-6 w-6" strokeWidth={2} /> : <Menu className="h-6 w-6" strokeWidth={2} />}
      </button>

      {mounted && open
        ? createPortal(
            <div
              id={panelId}
              role="dialog"
              aria-modal="true"
              aria-label={t.nav.menuTitle}
              className="fixed inset-0 z-200 flex flex-col bg-white"
            >
              <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4">
                <p className="text-lg font-semibold text-zinc-900">{t.nav.menuTitle}</p>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-800 transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                  aria-label={t.nav.menuClose}
                  onClick={close}
                >
                  <X className="h-6 w-6" strokeWidth={2} />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-4 sm:px-4">
                <Link
                  href={`/${locale}`}
                  className={navMobileItemClass(active === "home")}
                  aria-current={active === "home" ? "page" : undefined}
                  onClick={close}
                >
                  <Home
                    className={`h-5 w-5 shrink-0 ${navMobileIconClass(active === "home")}`}
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span>{t.nav.home}</span>
                </Link>
                <Link
                  href={`/${locale}/servicos`}
                  className={navMobileItemClass(active === "services")}
                  aria-current={active === "services" ? "page" : undefined}
                  onClick={close}
                >
                  <BriefcaseBusiness
                    className={`h-5 w-5 shrink-0 ${navMobileIconClass(active === "services")}`}
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span>{t.nav.services}</span>
                </Link>
                <a
                  href={`/${locale}#process`}
                  className={navMobileItemClass(active === "process")}
                  aria-current={active === "process" ? "true" : undefined}
                  onClick={close}
                >
                  <ListOrdered
                    className={`h-5 w-5 shrink-0 ${navMobileIconClass(active === "process")}`}
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span>{t.nav.process}</span>
                </a>
                <a
                  href={`/${locale}#testimonials`}
                  className={navMobileItemClass(active === "testimonials")}
                  aria-current={active === "testimonials" ? "true" : undefined}
                  onClick={close}
                >
                  <MessagesSquare
                    className={`h-5 w-5 shrink-0 ${navMobileIconClass(active === "testimonials")}`}
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span>{t.nav.testimonials}</span>
                </a>
                <a
                  href={`/${locale}#contact`}
                  className={navMobileItemClass(active === "contact")}
                  aria-current={active === "contact" ? "true" : undefined}
                  onClick={close}
                >
                  <Mail
                    className={`h-5 w-5 shrink-0 ${navMobileIconClass(active === "contact")}`}
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span>{t.nav.contact}</span>
                </a>
                <Link
                  href={`/${locale}/noticias`}
                  prefetch={false}
                  className={navMobileItemClass(active === "news")}
                  aria-current={active === "news" ? "page" : undefined}
                  onClick={close}
                >
                  <Newspaper
                    className={`h-5 w-5 shrink-0 ${navMobileIconClass(active === "news")}`}
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span>{t.nav.news}</span>
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 text-sm font-semibold text-white transition hover:bg-emerald-600"
                  onClick={close}
                >
                  <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />
                  {t.whatsappStrip.buttonLabel}
                </a>
              </nav>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
