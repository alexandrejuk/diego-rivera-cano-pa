"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let cancelled = false;

    const timeoutId = window.setTimeout(() => {
      if (cancelled) return;

      const elements = Array.from(
        document.querySelectorAll<HTMLElement>(".section-reveal:not(.is-visible)"),
      );

      if (!elements.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.18,
          rootMargin: "0px 0px -8% 0px",
        },
      );

      elements.forEach((element) => observer?.observe(element));
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
