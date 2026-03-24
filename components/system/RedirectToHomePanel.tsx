"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

const REDIRECT_SECONDS = 30;

function fillTemplate(template: string, seconds: number) {
  return template.replace(/\{\{seconds\}\}/g, String(seconds));
}

type Props = {
  locale: Locale;
  title: string;
  description: string;
  redirectTemplate: string;
  goNowLabel: string;
  tryAgainLabel?: string;
  onTryAgain?: () => void;
};

export function RedirectToHomePanel({
  locale,
  title,
  description,
  redirectTemplate,
  goNowLabel,
  tryAgainLabel,
  onTryAgain,
}: Props) {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    if (secondsLeft > 0) return;
    router.replace(`/${locale}`);
  }, [secondsLeft, locale, router]);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const id = window.setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => window.clearTimeout(id);
  }, [secondsLeft]);

  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-zinc-200 bg-white px-8 py-10 text-center shadow-lg shadow-zinc-900/5">
      <h2 className="font-serif text-xl font-bold tracking-tight text-zinc-900 md:text-2xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-zinc-600">{description}</p>
      <p className="mt-6 text-sm font-medium text-zinc-800" role="status" aria-live="polite">
        {fillTemplate(redirectTemplate, Math.max(0, secondsLeft))}
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          {goNowLabel}
        </Link>
        {onTryAgain && tryAgainLabel ? (
          <button
            type="button"
            onClick={onTryAgain}
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400"
          >
            {tryAgainLabel}
          </button>
        ) : null}
      </div>
    </div>
  );
}
