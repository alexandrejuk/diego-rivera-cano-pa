import type { SiteMessages } from "@/lib/i18n";
import Image from "next/image";

type Props = {
  t: SiteMessages;
};

export function ContactCtaSection({ t }: Props) {
  const whatsappUrl =
    "https://wa.me/50760700007?text=Hola%2C%20quiero%20agendar%20una%20consulta.";

  return (
    <section id="contact" className="section-reveal mx-auto w-full max-w-6xl px-6 pb-16 md:pb-24 mt-20 flex items-center justify-between">
      <div className="rounded-4xl bg-linear-to-r from-slate-950 via-slate-900 to-slate-800 p-8 text-white shadow-lg md:p-10 flex items-center justify-between flex-1">
        <div className="flex flex-col">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{t.ctaSection.title}</h2>
        <p className="mt-3 max-w-md text-sm text-white/90 md:text-base">
          {t.ctaSection.description}
        </p>
        <div className="mt-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-amber-500 px-6 text-sm font-semibold text-zinc-900 transition hover:bg-amber-400"
          >
            {t.ctaSection.buttonLabel}
          </a>
        </div>
        </div>
        <div className="mt-6 flex items-center justify-end">
          <Image src="/logo-rivera-cano.png" alt="Rivera Cano" width={180} height={180} />
        </div>
      </div>
    </section>
  );
}
