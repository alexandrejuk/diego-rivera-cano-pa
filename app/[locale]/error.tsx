"use client";

import { useParams } from "next/navigation";
import { RedirectToHomePanel } from "@/components/system/RedirectToHomePanel";
import { defaultLocale, isValidLocale, messages, type Locale } from "@/lib/i18n";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function LocaleError({ error, reset }: Props) {
  const params = useParams();
  const raw = params?.locale;
  const locale: Locale =
    typeof raw === "string" && isValidLocale(raw) ? raw : defaultLocale;
  const t = messages[locale];

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-6 py-16 md:py-24">
      <p className="mb-2 font-mono text-5xl font-black text-amber-600/90">
        {t.systemPages.error500.code}
      </p>
      <RedirectToHomePanel
        locale={locale}
        title={t.systemPages.error500.title}
        description={t.systemPages.error500.description}
        redirectTemplate={t.systemPages.error500.redirect}
        goNowLabel={t.systemPages.error500.goNow}
        tryAgainLabel={t.systemPages.error500.tryAgain}
        onTryAgain={reset}
      />
      {process.env.NODE_ENV === "development" ? (
        <p className="mt-8 max-w-lg text-center font-mono text-xs text-red-700/90">{error.message}</p>
      ) : null}
    </main>
  );
}
