import type { SiteMessages } from "@/lib/i18n";
import Image from "next/image";

type Props = {
  t: SiteMessages;
};

export function BenefitsSection({ t }: Props) {
  return (
    <section className="section-reveal reveal-delay-3 mx-auto mt-10 grid w-full max-w-6xl gap-10 px-6 pb-10 md:grid-cols-2 md:pb-16">
      <div className="overflow-hidden rounded-4xl p-2">
        <Image
          src="/benefits-team.png"
          alt="Equipe de profissionais em destaque"
          width={760}
          height={760}
          className="h-full w-full rounded-3xl object-cover"
        />
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
