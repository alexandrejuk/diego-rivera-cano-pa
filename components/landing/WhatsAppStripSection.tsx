import type { SiteMessages } from "@/lib/i18n";

type Props = {
  t: SiteMessages;
};

export function WhatsAppStripSection({ t }: Props) {
  const whatsappUrl =
    "https://wa.me/50760700007?text=Hola%2C%20quiero%20agendar%20una%20consulta.";

  return (
    <section className="section-reveal mx-auto w-full max-w-6xl px-6 pb-12">
      <div className="rounded-4xl border border-amber-300/60 bg-linear-to-r from-slate-950 via-slate-900 to-slate-800 px-6 py-8 text-center text-white shadow-lg md:px-10">
        <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
          {t.whatsappStrip.title}
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-white/85 md:text-base">
          {t.whatsappStrip.description}
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-amber-500 px-8 text-sm font-semibold text-zinc-900 transition hover:bg-amber-400"
          >
            {t.whatsappStrip.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
