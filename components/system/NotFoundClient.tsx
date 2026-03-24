"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPathname, messages, type Locale } from "@/lib/i18n";

export function NotFoundClient() {
  const pathname = usePathname();
  const locale: Locale = localeFromPathname(pathname);
  const t = messages[locale];

  return (
    <main className="flex min-h-[70vh] flex-1 flex-col items-center justify-center bg-[#f6f5f3] px-6 py-16">
      <div className="max-w-md text-center">
        <p className="font-mono text-6xl font-black tracking-tighter text-amber-600/90">
          {t.systemPages.notFound.code}
        </p>
        <h1 className="mt-4 font-serif text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
          {t.systemPages.notFound.title}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600">{t.systemPages.notFound.description}</p>
        <Link
          href={`/${locale}`}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          {t.systemPages.notFound.cta}
        </Link>
        <p className="mt-6 text-xs text-zinc-500">
          <Link href="/es" className="underline decoration-zinc-300 underline-offset-2">
            Español
          </Link>
          {" · "}
          <Link href="/en" className="underline decoration-zinc-300 underline-offset-2">
            English
          </Link>
          {" · "}
          <Link href="/pt" className="underline decoration-zinc-300 underline-offset-2">
            Português
          </Link>
        </p>
      </div>
    </main>
  );
}
