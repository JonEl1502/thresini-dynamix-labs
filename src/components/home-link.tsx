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
 * Landing at the top is forced in both directions, and instantly.
 *
 * The site sets `scroll-behavior: smooth` globally for the in-page anchors, and
 * the router's own scroll-to-top inherits it — so arriving from a service page
 * left you several thousand pixels down while the page animated back, or did
 * not move at all. `scroll={false}` hands that job to us, and we do it as a
 * jump: following a link to another page should land at the top immediately,
 * the way a fresh page load does. It sidesteps reduced-motion too.
 */
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
      /* Already here: there is nothing to navigate to, so this is the whole
         behaviour rather than an addition to it. */
      event.preventDefault();
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <Link href={href} className={className} aria-label={label} scroll={false} onClick={onClick}>
      {children}
    </Link>
  );
}

export default HomeLink;
