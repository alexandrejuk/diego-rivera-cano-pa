"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import type { Locale, SiteMessages } from "@/lib/i18n";

type Props = {
  locale: Locale;
  t: SiteMessages;
};

export function NavbarMobileNav({ locale, t }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
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

  const linkClass =
    "block rounded-xl px-4 py-3.5 text-base font-medium text-zinc-800 transition hover:bg-zinc-100 hover:text-zinc-950";

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
              <nav className="flex flex-1 flex-col overflow-y-auto px-4 py-4">
                <Link href={`/${locale}`} className={linkClass} onClick={close}>
                  {t.nav.home}
                </Link>
                <a href={`/${locale}#services`} className={linkClass} onClick={close}>
                  {t.nav.services}
                </a>
                <a href={`/${locale}#process`} className={linkClass} onClick={close}>
                  {t.nav.process}
                </a>
                <a href={`/${locale}#testimonials`} className={linkClass} onClick={close}>
                  {t.nav.testimonials}
                </a>
                <a href={`/${locale}#contact`} className={linkClass} onClick={close}>
                  {t.nav.contact}
                </a>
                <Link
                  href={`/${locale}/noticias`}
                  prefetch={false}
                  className={linkClass}
                  onClick={close}
                >
                  {t.nav.news}
                </Link>
              </nav>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
