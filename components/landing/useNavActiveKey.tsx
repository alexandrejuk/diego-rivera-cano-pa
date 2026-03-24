"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

export type ActiveNavItem = "home" | "services" | "process" | "testimonials" | "contact" | "news";

function normalizePath(path: string) {
  const trimmed = path.replace(/\/$/, "");
  return trimmed === "" ? "/" : trimmed;
}

/** Which main nav item should show as current (pathname + hash on home). */
export function useNavActiveKey(locale: Locale): ActiveNavItem | null {
  const pathname = usePathname() ?? "";
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash.replace(/^#/, ""));
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  const base = normalizePath(pathname);
  const homePath = `/${locale}`;

  if (base.startsWith(`${homePath}/servicos`)) return "services";
  if (base.startsWith(`${homePath}/noticias`)) return "news";

  if (base === homePath) {
    if (hash === "process") return "process";
    if (hash === "testimonials") return "testimonials";
    if (hash === "contact") return "contact";
    return "home";
  }

  return null;
}

export function navDesktopItemClass(active: boolean): string {
  return active
    ? "relative text-amber-900 font-semibold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-amber-500"
    : "text-zinc-600 transition hover:text-zinc-900";
}

export function navMobileItemClass(active: boolean): string {
  const base =
    "block rounded-xl px-4 py-3.5 text-base font-medium transition hover:bg-zinc-100 hover:text-zinc-950";
  return active ? `${base} bg-amber-50 text-amber-950 ring-1 ring-amber-200/80` : `${base} text-zinc-800`;
}
