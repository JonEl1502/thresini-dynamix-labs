"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * A brand lockup that always takes you home — including when you are already
 * there.
 *
 * A plain <Link> to the current route is a no-op, so clicking the logo from
 * halfway down a long page appeared to do nothing at all. Here the same-route
 * case scrolls back to the top instead, and drops any #hash so the address bar
 * matches where you actually are.
 *
 * Landing at the top is forced in both directions, but they get there
 * differently.
 *
 * Already on the page: the scroll is animated — see springToTop.
 *
 * Coming from another page: a jump, the way a fresh page load behaves. The site
 * sets `scroll-behavior: smooth` globally for the in-page anchors, and the
 * router's own scroll-to-top inherits it, which left you several thousand
 * pixels down while the page animated back. `scroll={false}` hands that job
 * here instead.
 */

/**
 * Take the page home with a little anticipation: it gives downward first, then
 * runs up to the top and settles.
 *
 * Every frame scrolls with `behavior: "instant"`. The site sets
 * `scroll-behavior: smooth` globally, and a plain scrollTo would inherit it —
 * each frame would start its own smooth scroll and fight the next one.
 *
 * Any real input — wheel, touch, a key — abandons the run. Nothing is more
 * irritating than a page that keeps scrolling after you have taken hold of it.
 */
export function springToTop() {
  const start = window.scrollY;
  const jump = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });

  if (start <= 0) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    jump();
    return;
  }

  /* The dip is a gesture, not a journey — a nudge that scales a little with
     the distance so it does not look identical from 300px and from 6000px. */
  const dip = Math.min(56, Math.max(16, start * 0.05));
  const dipShare = 0.22;
  /* Long pages must not take proportionally long: past a few thousand pixels
     this is a blur either way, so it is capped. */
  const duration = Math.min(900, Math.max(440, 260 + start * 0.1));

  const easeOut = (p: number) => 1 - (1 - p) ** 3;
  const easeInOut = (p: number) => (p < 0.5 ? 4 * p ** 3 : 1 - (-2 * p + 2) ** 3 / 2);

  let frame = 0;
  const began = performance.now();

  const stop = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", stop);
  };
  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });
  window.addEventListener("keydown", stop);

  const step = (now: number) => {
    const p = Math.min(1, (now - began) / duration);
    const y =
      p < dipShare
        ? start + dip * easeOut(p / dipShare)
        : (start + dip) * (1 - easeInOut((p - dipShare) / (1 - dipShare)));
    window.scrollTo({ top: y, left: 0, behavior: "instant" });
    if (p < 1) {
      frame = requestAnimationFrame(step);
      return;
    }
    jump();
    stop();
  };
  frame = requestAnimationFrame(step);
}

export function HomeLink({
  href,
  className,
  label,
  children,
}: {
  href: string;
  className?: string;
  label: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    /* Let the browser handle new-tab, download and modified clicks. */
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }
    if (pathname === href) {
      /* Already here: there is nothing to navigate to, so the scroll is the
         whole behaviour rather than an addition to it, and it can be animated. */
      event.preventDefault();
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      springToTop();
      return;
    }
    /* A route change lands at the top immediately — animating a page you are
       about to replace is motion for its own sake. */
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <Link href={href} className={className} aria-label={label} scroll={false} onClick={onClick}>
      {children}
    </Link>
  );
}

export default HomeLink;
