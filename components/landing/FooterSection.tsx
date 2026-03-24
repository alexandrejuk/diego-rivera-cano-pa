import type { SiteMessages } from "@/lib/i18n";

type Props = {
  t: SiteMessages;
};

const socialItems = ["fb", "ig", "in"];

export function FooterSection({ t }: Props) {
  return (
    <footer className="mt-auto bg-linear-to-r from-fuchsia-400 via-violet-400 to-purple-500 text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black tracking-tight">{t.footer.brandTitle}</h3>
            <p className="mt-3 text-sm leading-6 text-white/90">{t.footer.brandDescription}</p>
            <div className="mt-5 flex gap-2">
              {socialItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/35 text-xs font-semibold uppercase text-white/95 transition hover:bg-white/20"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

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
            <h4 className="text-lg font-bold">{t.footer.sections.support.title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              {t.footer.sections.support.links.map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold">{t.footer.sections.links.title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              {t.footer.sections.links.links.map((item) => (
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
                href="tel:+50760700007"
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

        <div className="mt-8 border-t border-white/25 pt-5 text-xs text-white/85">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
