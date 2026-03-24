import type { SiteMessages } from "@/lib/i18n";

type Props = {
  t: SiteMessages;
};

type TickerItem = {
  name: string;
  value: string;
  change: string;
  positive: boolean;
};

const TICKER_ITEMS: TickerItem[] = [
  { name: "S&P 500", value: "5,893.02", change: "+0.35%", positive: true },
  { name: "Dow 30", value: "46,315.95", change: "+0.23%", positive: true },
  { name: "Nasdaq", value: "18,732.02", change: "-0.34%", positive: false },
  { name: "Russell 2000", value: "2,502.06", change: "-0.15%", positive: false },
  { name: "VIX", value: "16.31", change: "+0.11%", positive: true },
  { name: "Gold", value: "4,405.30", change: "-0.05%", positive: false },
  { name: "Bitcoin USD", value: "89,391.86", change: "-2.00%", positive: false },
  { name: "CBOE 10Y", value: "4.3780", change: "+1.02%", positive: true },
];

export function MarketTickerBar({ t }: Props) {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section
      className="w-full overflow-hidden border-y border-zinc-800 bg-zinc-950 text-zinc-100"
      aria-label={t.newsPage.marketTicker.label}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center">
        <div className="hidden shrink-0 border-r border-zinc-800 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-emerald-400 sm:block">
          {t.newsPage.marketTicker.label}
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="market-ticker-track flex min-w-max items-center gap-6 px-4 py-3 sm:gap-8">
            {items.map((item, index) => (
              <article key={`${item.name}-${index}`} className="flex items-center gap-2 text-xs sm:text-sm">
                <p className="font-semibold text-zinc-300">{item.name}</p>
                <p className="font-semibold text-zinc-100">{item.value}</p>
                <p className={item.positive ? "font-semibold text-emerald-400" : "font-semibold text-rose-400"}>
                  {item.change}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="hidden shrink-0 border-l border-zinc-800 px-4 py-3 text-[11px] text-zinc-400 lg:block">
          {t.newsPage.marketTicker.delayedLabel}
        </div>
      </div>
    </section>
  );
}
