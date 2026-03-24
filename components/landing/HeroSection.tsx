import Image from "next/image";
import type { SiteMessages } from "@/lib/i18n";

type Props = {
  t: SiteMessages;
  renderedAt: string;
};

export function HeroSection({ t, renderedAt }: Props) {
  const whatsappUrl =
    "https://wa.me/50760700007?text=Hola%2C%20quiero%20agendar%20una%20consulta.";
  return (
    <section className="section-reveal reveal-delay-1 mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
      <div className="space-y-6">
        <span className="inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800">
          {t.hero.badge}
        </span>
        <h1 className="text-4xl font-black tracking-tight text-zinc-900 md:text-6xl">
          {t.hero.title}
        </h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600">{t.hero.description}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            {t.hero.primaryCta}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400"
          >
            {t.hero.secondaryCta}
          </a>
        </div>
        <p className="text-xs text-zinc-500">
          {t.hero.renderLabel} {renderedAt}
        </p>
      </div>

      <div className="rounded-4xl">
        <Image
          src="/hero-lawyer.png"
          alt="Advogado em destaque com metricas de atendimento"
          width={900}
          height={900}
          className="h-full w-full rounded-3xl object-contain"
        />
      </div>
    </section>
  );
}
