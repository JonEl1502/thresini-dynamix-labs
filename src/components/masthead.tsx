"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import OrbitMark from "@/components/orbit-mark";
import { NAV, SITE } from "@/data/site";
import s from "./masthead.module.css";

export function Masthead() {
  const pathname = usePathname();
  /* The menu is open only for the route it was opened on, so navigating closes
     it without an effect reaching in to reset state. */
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const gaugeRef = useRef<HTMLDivElement>(null);

  /* Read progress drives the masthead graduation strip. Written straight to a
     custom property so no React state churns on scroll. */
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const span = doc.scrollHeight - doc.clientHeight;
      const ratio = span > 0 ? Math.min(1, Math.max(0, doc.scrollTop / span)) : 0;
      gaugeRef.current?.style.setProperty("--progress", ratio.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const isCurrent = (href: string) =>
    href.startsWith("/#") ? false : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={s.masthead}>
      <div className="shell">
        <div className={s.bar}>
          <Link href="/" className={s.brand} aria-label={`${SITE.company} — home`}>
            {/* 28px keeps the full mark, on the optical node bump. Drift puts it
                straight into the slow loop — one realignment every 30s. */}
            <OrbitMark
              size={28}
              variant="full"
              palette="system"
              optical
              animated
              drift
              cycle={30}
            />
            <span className={s.wordmark}>{SITE.wordmark}</span>
            <span className={s.suffix}>Dynamix Labs</span>
          </Link>

          <nav className={s.nav} aria-label="Primary">
            <ul className={s.navList}>
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={s.navLink}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/contact" className={`btn btn--primary ${s.cta}`}>
            Request a quote
          </Link>

          <button
            type="button"
            className={`${s.menuButton} ${open ? s.open : ""}`}
            aria-expanded={open}
            aria-controls="masthead-menu"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <span className={s.bars} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div className={s.gauge} ref={gaugeRef} aria-hidden="true">
        <div className={s.gaugeFill} />
      </div>

      {open ? (
        <div className={s.panel} id="masthead-menu">
          <div className="shell">
            <ul className={s.panelList}>
              {NAV.map((item, i) => (
                <li key={item.href}>
                  <Link href={item.href} className={s.panelLink}>
                    {item.label}
                    <span className={s.panelIndex}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className={`btn btn--primary ${s.panelCta}`}>
              Request a quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Masthead;
