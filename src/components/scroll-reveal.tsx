"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Arms the [data-reveal] hidden state only once this has mounted, so a
 * no-JS render shows every section. Respects prefers-reduced-motion by never
 * arming at all.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    root.classList.add("js-reveal");
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("is-in");
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    for (const el of targets) {
      // Anything already on screen at mount reveals immediately.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
        el.classList.add("is-in");
      } else {
        observer.observe(el);
      }
    }

    return () => {
      observer.disconnect();
      root.classList.remove("js-reveal");
    };
  }, [pathname]);

  return null;
}

export default ScrollReveal;
