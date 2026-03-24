
"use client";

import { useEffect, useRef, useState } from "react";
import type { SiteMessages } from "@/lib/i18n";
import {
  BadgeDollarSign,
  CalendarClock,
  ChevronDown,
  CircleHelp,
  CreditCard,
  FileText,
  MapPin,
  Timer,
} from "lucide-react";

type Props = {
  t: SiteMessages;
};

export function FaqSection({ t }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [contentHeights, setContentHeights] = useState<Record<number, number>>({});
  const contentRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const itemIcons = [
    CalendarClock,
    FileText,
    MapPin,
    BadgeDollarSign,
    CreditCard,
    Timer,
  ];

  useEffect(() => {
    const measureHeights = () => {
      const nextHeights: Record<number, number> = {};
      t.faqSection.items.forEach((_, index) => {
        const el = contentRefs.current[index];
        nextHeights[index] = el?.scrollHeight ?? 0;
      });
      setContentHeights(nextHeights);
    };

    measureHeights();
    window.addEventListener("resize", measureHeights);
    return () => window.removeEventListener("resize", measureHeights);
  }, [t.faqSection.items]);

  return (
    <section className="section-reveal w-full bg-white py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-8 space-y-3">
          <h2 className="flex items-center gap-2 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            {t.faqSection.title}
          </h2>
          <p className="max-w-2xl text-zinc-600">{t.faqSection.subtitle}</p>
        </div>

        <div className="space-y-3">
          {t.faqSection.items.map((item, index) => {
            const Icon = itemIcons[index] ?? CircleHelp;
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 pr-1 text-left text-base font-semibold text-zinc-900"
                >
                  <span className="flex items-center gap-2">
                    <Icon className="h-5 w-5 shrink-0 text-zinc-700" />
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-[height] duration-300 ease-in-out"
                  style={{ height: isOpen ? `${contentHeights[index] ?? 0}px` : "0px" }}
                >
                  <div
                    ref={(el) => {
                      contentRefs.current[index] = el;
                    }}
                  >
                    <p className="pt-3 text-sm leading-7 text-zinc-600">{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
