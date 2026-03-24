import type { Locale } from "@/lib/i18n";

const WHATSAPP_NUMBER = "50760700007";

export function buildServiceWhatsAppUrl(locale: Locale, serviceTitle: string) {
  const messageByLocale: Record<Locale, string> = {
    en: `Hello, I want more information about this legal service: ${serviceTitle}.`,
    es: `Hola, quiero mas informacion sobre este servicio legal: ${serviceTitle}.`,
    pt: `Olá, quero mais informações sobre este serviço jurídico: ${serviceTitle}.`,
  };

  const message = messageByLocale[locale] ?? messageByLocale.es;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
