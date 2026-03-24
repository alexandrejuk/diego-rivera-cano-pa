import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/lib/service-landing";

const SITE_URL = "https://www.diego-rivera-cano-advogado.com";
const LOCALES = ["en", "es", "pt"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const localizedPages = LOCALES.flatMap((locale) => {
    const hrefLangs = {
      en: `${SITE_URL}/en`,
      es: `${SITE_URL}/es`,
      pt: `${SITE_URL}/pt`,
    };

    const serviceLandingEntries = SERVICE_SLUGS.map((slug) => ({
      url: `${SITE_URL}/${locale}/servicos/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85 as const,
      alternates: { languages: hrefLangs },
    }));

    return [
      {
        url: `${SITE_URL}/${locale}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 1,
        alternates: { languages: hrefLangs },
      },
      {
        url: `${SITE_URL}/${locale}/servicos`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.9,
        alternates: { languages: hrefLangs },
      },
      ...serviceLandingEntries,
      {
        url: `${SITE_URL}/${locale}/noticias`,
        lastModified: now,
        changeFrequency: "daily" as const,
        priority: 0.8,
        alternates: { languages: hrefLangs },
      },
    ];
  });

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...localizedPages,
  ];
}
