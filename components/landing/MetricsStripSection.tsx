import type { SiteMessages } from "@/lib/i18n";

type Props = {
  t: SiteMessages;
};

export function MetricsStripSection({ t }: Props) {
  return (
    <section className="mb-20 bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 py-5">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-4 px-6">
        {t.metricsStrip.items.map((item) => (
          <article
            key={item.label}
            className="w-full max-w-[240px] rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-center text-white backdrop-blur sm:w-[220px]"
          >
            <p className="text-2xl font-black tracking-tight">{item.value}</p>
            <p className="text-xs font-medium text-white/90">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
