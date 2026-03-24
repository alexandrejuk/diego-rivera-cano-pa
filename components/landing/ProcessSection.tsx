import type { SiteMessages } from "@/lib/i18n";

type Props = {
  t: SiteMessages;
};

export function ProcessSection({ t }: Props) {
  return (
    <section id="process" className="bg-zinc-900 py-14 text-zinc-100 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-8 space-y-3">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t.processSection.title}
          </h2>
          <p className="max-w-2xl text-zinc-300">{t.processSection.subtitle}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {t.processSection.steps.map((step) => (
            <article
              key={step.title}
              className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="mb-3 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm leading-7 text-zinc-300">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
