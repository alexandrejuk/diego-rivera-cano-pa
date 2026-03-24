import Link from "next/link";
import Image from "next/image";
import { type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: Props) {
  const displayOrder: Locale[] = ["es", "en", "pt"];

  const flagByLocale: Record<Locale, { src: string; alt: string }> = {
    es: { src: "/flags/panama.png", alt: "Espanol de Panama" },
    en: { src: "/flags/us.png", alt: "English" },
    pt: { src: "/flags/brazil.png", alt: "Portugues" },
  };

  return (
    <div className="flex gap-2">
      {displayOrder.map((language) => (
        <Link
          key={language}
          href={`/${language}`}
          className={`inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border-2 transition ${
            language === locale
              ? "border-zinc-900 ring-2 ring-zinc-300"
              : "border-zinc-200 hover:border-zinc-400"
          }`}
          aria-label={flagByLocale[language].alt}
        >
          <Image
            src={flagByLocale[language].src}
            alt={flagByLocale[language].alt}
            width={24}
            height={24}
            className="h-full w-full object-cover"
          />
        </Link>
      ))}
    </div>
  );
}
