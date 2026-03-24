import Link from "next/link";
import { locales, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: Props) {
  return (
    <div className="flex gap-2 text-xs font-semibold">
      {locales.map((language) => (
        <Link
          key={language}
          href={`/${language}`}
          className={`rounded-full px-3 py-1.5 transition ${
            language === locale
              ? "bg-zinc-900 text-white"
              : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
          }`}
        >
          {language.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
