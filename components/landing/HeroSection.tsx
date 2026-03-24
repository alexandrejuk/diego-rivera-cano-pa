import type { SiteMessages } from "@/lib/i18n";

type Props = {
  t: SiteMessages;
  renderedAt: string;
};

export function HeroSection({ t, renderedAt }: Props) {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
      <div className="space-y-6">
        <span className="inline-flex rounded-full bg-fuchsia-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-fuchsia-700">
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
            href="tel:+50760700007"
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400"
          >
            {t.hero.secondaryCta}
          </a>
        </div>
        <p className="text-xs text-zinc-500">
          {t.hero.renderLabel} {renderedAt}
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-400 p-8 text-white shadow-xl">
        <div className="space-y-5">
          {t.hero.stats.map((stat) => (
            <div
              key={stat}
              className="rounded-2xl border border-white/25 bg-white/15 p-4 text-sm font-medium backdrop-blur"
            >
              {stat}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute -bottom-20 -right-16 h-52 w-52 rounded-full bg-white/20 blur-2xl" />
      </div>
    </section>
  );
}
