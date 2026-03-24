import { isValidLocale, type Locale } from "@/lib/i18n";

/** Same path as `pathname` but with the first segment replaced by `targetLocale`. */
export function localizedPath(pathname: string | null, targetLocale: Locale): string {
  if (!pathname || pathname === "/") {
    return `/${targetLocale}`;
  }
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return `/${targetLocale}`;
  }
  if (isValidLocale(segments[0]!)) {
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  }
  return `/${targetLocale}`;
}
