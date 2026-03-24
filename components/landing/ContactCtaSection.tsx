import type { SiteMessages } from "@/lib/i18n";

type Props = {
  t: SiteMessages;
};

export function ContactCtaSection({ t }: Props) {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 pb-16 md:pb-24">
      <div className="rounded-[2rem] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-400 p-8 text-white shadow-lg md:p-10">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{t.ctaSection.title}</h2>
        <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-base">
          {t.ctaSection.description}
        </p>
        <form className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder={t.ctaSection.inputPlaceholder}
            className="h-12 w-full rounded-full border border-white/25 bg-white px-5 text-sm text-zinc-900 outline-none ring-0 placeholder:text-zinc-400"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            {t.ctaSection.buttonLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
