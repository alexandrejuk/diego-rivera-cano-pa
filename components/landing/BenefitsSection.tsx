import type { SiteMessages } from "@/lib/i18n";

type Props = {
  t: SiteMessages;
};

const gradientTiles = [
  "from-slate-700 to-slate-900",
  "from-slate-600 to-slate-800",
  "from-amber-200 to-amber-400",
  "from-stone-500 to-stone-700",
];

export function BenefitsSection({ t }: Props) {
  return (
    <section className="section-reveal reveal-delay-3 mx-auto mt-10 grid w-full max-w-6xl gap-10 px-6 pb-10 md:grid-cols-2 md:pb-16">
      <div className="grid grid-cols-2 gap-3 rounded-4xl border-2 border-dashed border-amber-300 bg-white p-3">
        {gradientTiles.map((tileClass, index) => (
          <div
            key={tileClass}
            className={`flex aspect-square items-end rounded-3xl bg-linear-to-br p-4 ${tileClass}`}
          >
            <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-zinc-700">
              {`0${index + 1}`}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-5">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
          {t.benefitsSection.title}
        </h2>
        <ul className="space-y-4">
          {t.benefitsSection.items.map((benefit) => (
            <li key={benefit.title} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-800">
                +
              </span>
              <div>
                <p className="font-semibold text-zinc-900">{benefit.title}</p>
                <p className="text-sm leading-7 text-zinc-600">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
