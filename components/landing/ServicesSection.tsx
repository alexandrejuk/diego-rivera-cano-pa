import type { SiteMessages } from "@/lib/i18n";

type Props = {
  t: SiteMessages;
};

export function ServicesSection({ t }: Props) {
  return (
    <section id="services" className="section-reveal mx-auto w-full max-w-6xl px-6 py-14 md:py-20">
      <div className="mb-8 space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
          {t.serviceSection.title}
        </h2>
        <p className="max-w-2xl text-zinc-600">{t.serviceSection.subtitle}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {t.serviceSection.items.map((service) => (
          <article
            key={service.title}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="mb-3 text-lg font-semibold text-zinc-900">{service.title}</h3>
            <p className="text-sm leading-7 text-zinc-600">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
