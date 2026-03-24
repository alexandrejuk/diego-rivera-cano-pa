import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isValidLocale, type Locale } from "@/lib/i18n";

function detectLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language");

  if (!acceptLanguage) {
    return defaultLocale;
  }

  const preferredLanguage = acceptLanguage.split(",")[0]?.split("-")[0]?.trim();

  if (preferredLanguage && isValidLocale(preferredLanguage)) {
    return preferredLanguage;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = pathname
    .split("/")
    .filter(Boolean)
    .some((segment) => isValidLocale(segment));

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
