"use client";

import { RedirectToHomePanel } from "@/components/system/RedirectToHomePanel";
import { defaultLocale, messages } from "@/lib/i18n";
import "./globals.css";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const t = messages[defaultLocale];

export default function GlobalError({ error, reset }: Props) {
  return (
    <html lang={defaultLocale === "es" ? "es-PA" : defaultLocale}>
      <body className="min-h-screen bg-[#f6f5f3] antialiased">
        <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
          <p className="mb-2 font-mono text-5xl font-black text-amber-600/90">
            {t.systemPages.error500.code}
          </p>
          <RedirectToHomePanel
            locale={defaultLocale}
            title={t.systemPages.error500.title}
            description={t.systemPages.error500.description}
            redirectTemplate={t.systemPages.error500.redirect}
            goNowLabel={t.systemPages.error500.goNow}
            tryAgainLabel={t.systemPages.error500.tryAgain}
            onTryAgain={reset}
          />
          {process.env.NODE_ENV === "development" ? (
            <p className="mt-8 max-w-lg text-center font-mono text-xs text-red-800">{error.message}</p>
          ) : null}
        </main>
      </body>
    </html>
  );
}
