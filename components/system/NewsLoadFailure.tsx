"use client";

import type { Locale } from "@/lib/i18n";
import { RedirectToHomePanel } from "@/components/system/RedirectToHomePanel";

type Props = {
  locale: Locale;
  title: string;
  description: string;
  redirectTemplate: string;
  goNowLabel: string;
};

export function NewsLoadFailure({ locale, title, description, redirectTemplate, goNowLabel }: Props) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <RedirectToHomePanel
        locale={locale}
        title={title}
        description={description}
        redirectTemplate={redirectTemplate}
        goNowLabel={goNowLabel}
      />
    </div>
  );
}
