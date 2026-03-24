import type { Locale } from "@/lib/i18n";

const WHATSAPP_NUMBER = "50760700007";

const SITE_ORIGIN = "https://www.diego-rivera-cano-advogado.com";

export function buildServiceWhatsAppUrl(locale: Locale, serviceTitle: string) {
  const messageByLocale: Record<Locale, string> = {
    en: `Hello, I want more information about this legal service: ${serviceTitle}.`,
    es: `Hola, quiero mas informacion sobre este servicio legal: ${serviceTitle}.`,
    pt: `Olá, quero mais informações sobre este serviço jurídico: ${serviceTitle}.`,
  };

  const message = messageByLocale[locale] ?? messageByLocale.es;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Richer message for mid-page CTAs: service name, page headline, and canonical URL. */
export function buildServiceLandingSectionWhatsAppUrl(
  locale: Locale,
  payload: { serviceTitle: string; headline: string; path: string },
) {
  const pageUrl = `${SITE_ORIGIN}${payload.path}`;
  const messageByLocale: Record<Locale, string> = {
    en:
      `Hello, I am contacting you from your website about this practice area:\n\n` +
      `• Service: ${payload.serviceTitle}\n` +
      `• Summary: ${payload.headline}\n` +
      `• Page: ${pageUrl}\n\n` +
      `I would like more information. Thank you.`,
    es:
      `Hola, les escribo desde su sitio web sobre esta area de practica:\n\n` +
      `• Servicio: ${payload.serviceTitle}\n` +
      `• Resumen: ${payload.headline}\n` +
      `• Pagina: ${pageUrl}\n\n` +
      `Quisiera mas informacion. Gracias.`,
    pt:
      `Olá, entro em contato pelo site sobre esta área de atuação:\n\n` +
      `• Serviço: ${payload.serviceTitle}\n` +
      `• Resumo: ${payload.headline}\n` +
      `• Página: ${pageUrl}\n\n` +
      `Gostaria de mais informações. Obrigado.`,
  };
  const message = messageByLocale[locale] ?? messageByLocale.es;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
