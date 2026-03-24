import Image from "next/image";
import Link from "next/link";
import { SERVICE_SLUGS } from "@/lib/service-landing";
import type { Locale, SiteMessages } from "@/lib/i18n";

type Props = {
  t: SiteMessages;
  locale: Locale;
};

export function ServicesSection({ t, locale }: Props) {
  const s = t.serviceSection;

  return (
    <section
      id="services"
      className="section-reveal w-full bg-slate-100 py-14 md:py-20"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 space-y-8 lg:order-1">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
              {s.headlinePrefix}{" "}
              <span className="bg-linear-to-r from-amber-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                {s.headlineAccent}
              </span>{" "}
              {s.headlineSuffix}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg">
              {s.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-900 md:text-xl">
              {s.listHeading}
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3">
              {s.items.map((service, index) => {
                const slug = SERVICE_SLUGS[index];
                if (!slug) return null;

                return (
                  <li key={service.title}>
                    <Link
                      href={`/${locale}/servicos/${slug}`}
                      className="group flex gap-2.5 no-underline decoration-transparent"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
                        aria-hidden
                      />
                      <span className="text-sm font-semibold leading-snug text-zinc-900 transition-colors group-hover:text-amber-700 md:text-base">
                        {service.title}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <Link
            href={`/${locale}/servicos`}
            className="inline-flex h-12 items-center justify-center rounded-full bg-linear-to-r from-amber-600 to-orange-500 px-8 text-sm font-semibold text-white shadow-sm transition hover:from-amber-500 hover:to-orange-400"
          >
            {s.ctaLabel}
          </Link>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative w-full max-w-[min(100%,22rem)] sm:max-w-sm lg:max-w-md">
            <div
              className="border-3 border-dashed border-[#AA8341]/55 p-2 shadow-sm"
              style={{
                borderRadius: "1.75rem 1.75rem 45% 45% / 1.75rem 1.75rem 38% 38%",
              }}
            >
              <div
                className="overflow-hidden bg-linear-to-br"
                style={{
                  borderRadius: "1.35rem 1.35rem 42% 42% / 1.35rem 1.35rem 35% 35%",
                }}
              >
                <Image
                  src="/law.png"
                  alt={s.imageAlt}
                  width={540}
                  height={720}
                  className="aspect-4/5 w-full object-cover"
                  sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 18rem"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
