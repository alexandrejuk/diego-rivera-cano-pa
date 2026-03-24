"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { SiteMessages } from "@/lib/i18n";

type Props = {
  t: SiteMessages;
};

type ParsedMetric = {
  prefix: string;
  value: number;
  suffix: string;
  decimals: number;
};

function parseMetric(input: string): ParsedMetric {
  const trimmed = input.trim();
  const match = trimmed.match(/^([^0-9]*)([0-9.,]+)([^0-9]*)$/);

  if (!match) {
    return { prefix: "", value: 0, suffix: trimmed, decimals: 0 };
  }

  const [, prefix, numericPart, suffix] = match;
  const hasDecimal = numericPart.includes(".") && !numericPart.includes(",");
  const normalized = hasDecimal
    ? numericPart.replace(/,/g, "")
    : numericPart.replace(/[.,]/g, "");
  const decimals = hasDecimal ? (numericPart.split(".")[1]?.length ?? 0) : 0;
  const value = Number(normalized);

  return {
    prefix,
    value: Number.isFinite(value) ? value : 0,
    suffix,
    decimals,
  };
}

export function MetricsStripSection({ t }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const parsedItems = useMemo(
    () => t.metricsStrip.items.map((item) => parseMetric(item.value)),
    [t.metricsStrip.items],
  );

  useEffect(() => {
    const current = sectionRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const durationMs = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const ratio = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - ratio, 3);
      setProgress(eased);
      if (ratio < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="section-reveal reveal-delay-2 mb-20 bg-linear-to-r from-slate-950 via-slate-900 to-slate-800 py-5"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-4 px-6">
        {t.metricsStrip.items.map((item, index) => {
          const parsed = parsedItems[index];
          const animatedValue = parsed.value * progress;
          const formattedValue = Number(animatedValue).toLocaleString("en-US", {
            minimumFractionDigits: parsed.decimals,
            maximumFractionDigits: parsed.decimals,
          });

          return (
            <article
              key={item.label}
              className="w-full max-w-[240px] rounded-2xl border border-amber-200/30 bg-white/5 px-4 py-3 text-center text-white backdrop-blur sm:w-[220px]"
            >
              <p className="text-2xl font-black tracking-tight">
                {parsed.prefix}
                {formattedValue}
                {parsed.suffix}
              </p>
              <p className="text-xs font-medium text-white/90">{item.label}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
