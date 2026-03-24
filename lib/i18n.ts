export const locales = ["en", "es", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const messages: Record<
  Locale,
  {
    siteLabel: string;
    heading: string;
    description: string;
    ssrLabel: string;
    primaryCta: string;
    secondaryCta: string;
    dateLocale: string;
  }
> = {
  en: {
    siteLabel: "Official website",
    heading: "Diego Rivera Cano Attorney",
    description:
      "Personalized legal advisory for individuals and businesses, focused on civil, family, and consumer law.",
    ssrLabel: "Server-rendered page (SSR). Last update:",
    primaryCta: "Schedule consultation",
    secondaryCta: "Call now",
    dateLocale: "en-US",
  },
  es: {
    siteLabel: "Sitio oficial",
    heading: "Diego Rivera Cano Abogado",
    description:
      "Asesoria legal personalizada para personas y empresas, con enfoque en derecho civil, familia y consumidor.",
    ssrLabel: "Pagina renderizada en el servidor (SSR). Ultima actualizacion:",
    primaryCta: "Agendar consulta",
    secondaryCta: "Llamar ahora",
    dateLocale: "es-PA",
  },
  pt: {
    siteLabel: "Site oficial",
    heading: "Diego Rivera Cano Advogado",
    description:
      "Assessoria juridica personalizada para pessoas e empresas, com foco em direito civil, familia e consumidor.",
    ssrLabel: "Pagina renderizada no servidor (SSR). Ultima atualizacao:",
    primaryCta: "Agendar consulta",
    secondaryCta: "Ligar agora",
    dateLocale: "pt-BR",
  },
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
