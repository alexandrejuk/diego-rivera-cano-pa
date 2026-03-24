import { LanguageSwitcher } from "@/components/landing/LanguageSwitcher";
import type { SiteMessages } from "@/lib/i18n";

type Props = {
  t: SiteMessages;
  locale: "en" | "es" | "pt";
};

export function FooterSection({ t, locale }: Props) {
  return (
    <footer className="section-reveal mt-auto bg-linear-to-r from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black tracking-tight">{t.footer.brandTitle}</h3>
            <p className="mt-3 text-sm leading-6 text-white/90">{t.footer.brandDescription}</p>
            <div className="mt-5">
              <LanguageSwitcher locale={locale} />
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:justify-self-end">
            <div>
              <h4 className="text-lg font-bold">{t.footer.sections.company.title}</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/90">
                {t.footer.sections.company.links.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold">{t.footer.sections.contact.title}</h4>
              <div className="mt-3 space-y-2 text-sm text-white/90">
                <a
                  href="https://wa.me/50760700007?text=Hola%2C%20quiero%20informacion%20sobre%20sus%20servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition hover:text-white"
                >
                  {t.footer.sections.contact.phoneLabel}
                </a>
                <a
                  href={`mailto:${t.footer.sections.contact.emailLabel}`}
                  className="block transition hover:text-white"
                >
                  {t.footer.sections.contact.emailLabel}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/25 pt-5 text-xs text-white/85">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
