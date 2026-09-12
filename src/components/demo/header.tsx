"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeLink from "@/components/home-link";
import { Clock, Phone, Pin } from "./icons";
import { telHref } from "@/data/demos";
import type { DemoSite } from "@/data/demos";
import s from "./demo.module.css";

/** Header for every demo site. The nav is generated from the site's own data. */
export function DemoHeader({ site }: { site: DemoSite }) {
  const pathname = usePathname();
  /* Tie the open state to the path so a route change closes the drawer without
     an effect reaching in to reset it. The drawer is almost all hash links,
     which never change the pathname, so each one also closes it on click. */
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  const home = `/demo/${site.slug}`;
  /* Four items is what the bar can carry beside a long trading name, a phone
     number and a button. The rest live in the drawer and the footer. */
  const nav = [
    { href: `${home}#services`, label: "Services" },
    { href: `${home}#areas`, label: "Areas we cover" },
    { href: `${home}#reviews`, label: "Reviews" },
    { href: `${home}#faq`, label: "FAQs" },
  ];
  const drawerExtra = [{ href: `${home}#work`, label: "Recent work" }];

  return (
    <header className={s.header}>
      <div className={s.headerTop}>
        <div className="wrap">
          <div className={s.headerTopRow}>
            <span className={s.headerTopNote}>
              <Clock size={15} />
              {site.emergencyLine}
            </span>
            <span className={s.headerTopLinks}>
              <span className={s.headerTopNote}>
                <Pin size={15} />
                {site.address.locality}, {site.address.region}
              </span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </span>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className={s.bar}>
          <HomeLink href={home} className={s.brand} label={`${site.name} — home`}>
            <span className={s.mono} aria-hidden="true">
              {site.monogram}
            </span>
            <span className={s.brandText}>
              <span className={s.brandName}>{site.name}</span>
              <span className={s.brandSub}>{site.tradeLabel}</span>
            </span>
          </HomeLink>

          <nav className={s.nav} aria-label="Primary">
            <ul className={s.navList}>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={s.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={s.headerCall}>
            <span className={s.headerCallLabel}>Call us today</span>
            <a className={s.headerCallNumber} href={telHref(site.phoneDisplay)}>
              {site.phoneDisplay}
            </a>
          </div>

          <Link href={`${home}#quote`} className={`btn btn--primary ${s.headerCta}`}>
            {site.cta.action}
          </Link>

          <button
            type="button"
            className={s.burger}
            aria-expanded={open}
            aria-controls="demo-menu"
            onClick={() => setOpenOn(open ? null : pathname)}
          >
            <span className={s.burgerBars} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div className={s.drawer} id="demo-menu">
          <div className="wrap">
            <ul className={s.drawerList}>
              {[...nav, ...drawerExtra].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={s.drawerLink}
                    onClick={() => setOpenOn(null)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {site.services.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`${home}/services/${service.slug}`}
                    className={s.drawerLink}
                    onClick={() => setOpenOn(null)}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              className={`btn btn--primary ${s.drawerCta}`}
              href={telHref(site.phoneDisplay)}
              onClick={() => setOpenOn(null)}
            >
              <Phone size={18} />
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default DemoHeader;
