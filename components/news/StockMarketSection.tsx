import type { SiteMessages } from "@/lib/i18n";

type Props = {
  t: SiteMessages;
};

const MARKET_INDICES = [
  {
    name: "S&P 500",
    symbol: "^GSPC",
    market: "US",
    href: "https://finance.yahoo.com/quote/%5EGSPC/",
  },
  {
    name: "Dow Jones",
    symbol: "^DJI",
    market: "US",
    href: "https://finance.yahoo.com/quote/%5EDJI/",
  },
  {
    name: "Nasdaq Composite",
    symbol: "^IXIC",
    market: "US",
    href: "https://finance.yahoo.com/quote/%5EIXIC/",
  },
  {
    name: "IBEX 35",
    symbol: "^IBEX",
    market: "ES",
    href: "https://finance.yahoo.com/quote/%5EIBEX/",
  },
  {
    name: "Bovespa",
    symbol: "^BVSP",
    market: "BR",
    href: "https://finance.yahoo.com/quote/%5EBVSP/",
  },
  {
    name: "Euro Stoxx 50",
    symbol: "^STOXX50E",
    market: "EU",
    href: "https://finance.yahoo.com/quote/%5ESTOXX50E/",
  },
];

export function StockMarketSection({ t }: Props) {
  const s = t.newsPage.marketSection;

  return (
    <section className="section-reveal is-visible mt-14 md:mt-16">
      <div className="mb-6 space-y-2 md:mb-7">
        <h2 className="font-serif text-2xl font-bold tracking-tight text-zinc-900">{s.title}</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-600 md:text-base">{s.subtitle}</p>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {MARKET_INDICES.map((index) => (
          <article
            key={index.symbol}
            className="group rounded-xl border border-zinc-200/90 bg-white p-4 shadow-xs ring-1 ring-zinc-950/2 transition hover:border-zinc-300 hover:shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                  {index.market}
                </p>
                <h3 className="mt-1 text-[15px] font-semibold leading-snug text-zinc-900">{index.name}</h3>
              </div>
              <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-zinc-600">
                {index.symbol}
              </span>
            </div>
            <a
              href={index.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-700 transition group-hover:border-amber-300/60 group-hover:bg-amber-50/40 group-hover:text-amber-900"
            >
              {s.followLabel}
              <span aria-hidden>↗</span>
            </a>
          </article>
        ))}
      </div>

      <p className="mt-5 text-xs text-zinc-500">{s.note}</p>
    </section>
  );
}
