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
 * The jump is instant rather than smooth. Following a link to another page
 * lands you at the top immediately, and this should feel the same; a smooth
 * scroll from the footer of a long demo is several seconds of watching the
 * page fly past. It also sidesteps reduced-motion entirely.
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
    if (pathname !== href) return;
    event.preventDefault();
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <Link href={href} className={className} aria-label={label} onClick={onClick}>
      {children}
    </Link>
  );
}

export default HomeLink;
