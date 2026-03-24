"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { Locale, SiteMessages } from "@/lib/i18n";

type Props = {
  locale: Locale;
  t: SiteMessages;
};

function whatsappMessage(locale: Locale): string {
  if (locale === "en") return "Hello, I need legal guidance.";
  if (locale === "pt") return "Olá, preciso de orientação jurídica.";
  return "Hola, necesito orientación jurídica.";
}

export function FloatingWhatsAppButton({ locale, t }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const href = useMemo(
    () => `https://wa.me/50760700007?text=${encodeURIComponent(whatsappMessage(locale))}`,
    [locale],
  );

  useEffect(() => {
    const syncFromBody = () => {
      setIsMobileMenuOpen(document.body.dataset.mobileMenuOpen === "true");
    };

    const onMenuState = (event: Event) => {
      const custom = event as CustomEvent<{ open?: boolean }>;
      setIsMobileMenuOpen(Boolean(custom.detail?.open));
    };

    syncFromBody();
    window.addEventListener("mobile-menu-state", onMenuState as EventListener);
    return () => window.removeEventListener("mobile-menu-state", onMenuState as EventListener);
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappStrip.buttonLabel}
      className={`fixed right-4 bottom-4 z-150 inline-flex h-16 w-16 items-center justify-center rounded-full transition hover:scale-[1.03] md:right-6 md:bottom-6 ${
        isMobileMenuOpen ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <Image
        src="/whatsapp-logo.png"
        alt="WhatsApp"
        width={52}
        height={52}
        className="h-[52px] w-[52px] rounded-full object-cover"
      />
    </a>
  );
}
