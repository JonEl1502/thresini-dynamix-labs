import Link from "next/link";
import HomeLink from "@/components/home-link";
import { Phone } from "./icons";
import { telHref } from "@/data/demos";

/** The one place the demo chrome points back into the ThreSiNi site. */
const ROUTES = { demos: "/demos" } as const;
import type { DemoSite } from "@/data/demos";
import s from "./demo.module.css";

/**
 * The strip above every demo.
 *
 * Deliberately painted in ThreSiNi's own indigo rather than the demo's palette:
 * it is our chrome sitting on top of someone else's site, and it should read
 * that way instead of looking like part of the business. It carries the way
 * back to the rest of the demos, which is the thing a prospect wants next when
 * this one is not their trade.
 */
export function DemoTopBar({ site }: { site: DemoSite }) {
  return (
    <div className={s.topBar}>
      <div className="wrap">
        <div className={s.topBarRow}>
          <Link href={ROUTES.demos} className={s.topBarBack}>
            <span aria-hidden="true">←</span>
            <span>
              Back to <span className={s.topBarFull}>more </span>demos
            </span>
          </Link>
          <span className={s.topBarNote}>
            <span className={s.ribbonDot} aria-hidden="true" />
            <span className={s.topBarFull}>Demonstration site by </span>
            <Link href={site.landing} className={s.topBarLink}>
              ThreSiNi
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

/** Footer, generated from the site's own NAP, hours, credentials and pages. */
export function DemoFooter({ site }: { site: DemoSite }) {
  const home = `/demo/${site.slug}`;
  return (
    <footer className={s.footer}>
      <div className="wrap">
        <div className={s.footerGrid}>
          <div className={s.footerCol}>
            <HomeLink href={home} className={s.footerBrand} label={`${site.name} — home`}>
              <span className={s.mono} aria-hidden="true">
                {site.monogram}
              </span>
              <span className={s.brandName}>{site.name}</span>
            </HomeLink>
            <p className={s.footerAddress}>{site.tagline}</p>
            <a className={s.footerPhone} href={telHref(site.phoneDisplay)}>
              {site.phoneDisplay}
            </a>
            <address className={s.footerAddress}>
              {site.address.street}
              <br />
              {site.address.locality}, {site.address.region} {site.address.postcode}
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </address>
          </div>

          <div className={s.footerCol}>
            <span className={s.footerTitle}>Services</span>
            <nav className={s.footerLinks}>
              {site.services.map((service) => (
                <Link key={service.slug} href={`${home}/services/${service.slug}`}>
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className={s.footerCol}>
            <span className={s.footerTitle}>Areas we cover</span>
            <nav className={s.footerLinks}>
              {site.areas.map((area) => (
                <Link key={area.slug} href={`${home}/areas/${area.slug}`}>
                  {area.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className={s.footerCol}>
            <span className={s.footerTitle}>Opening hours</span>
            <div className={s.hours}>
              {site.hours.map((row) => (
                <div key={row.days} className={s.hoursRow}>
                  <span className={s.hoursDays}>{row.days}</span>
                  <span>{row.hours}</span>
                </div>
              ))}
            </div>
            <span className={s.footerTitle} style={{ marginTop: "1rem" }}>
              Licensed &amp; insured
            </span>
            <div className={s.creds}>
              {site.credentials.map((cred) => (
                <div key={cred.label} className={s.cred}>
                  <span className={s.credLabel}>{cred.label}</span>
                  <span className={s.credValue}>{cred.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={s.footerBase}>
          <span>
            © {new Date().getFullYear()} {site.legalName}. Established {site.established}.
          </span>
          <span>
            Demonstration website built by{" "}
            <Link href="/" style={{ fontWeight: 700 }}>
              ThreSiNi Dynamix Labs
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

/** Sticky mobile call bar — the single most valuable element on a trade site. */
export function DemoCallBar({ site }: { site: DemoSite }) {
  return (
    <>
      <div className={s.callSpacer} aria-hidden="true" />
      <div className={s.callBar}>
        <a className={`${s.callAction} ${s.callPrimary}`} href={telHref(site.phoneDisplay)}>
          <Phone size={19} />
          Call now
        </a>
        <a className={`${s.callAction} ${s.callSecondary}`} href="#quote">
          {site.cta.short}
        </a>
      </div>
    </>
  );
}

/**
 * Honesty marker. These companies do not exist, and a demo that a prospect
 * could mistake for a real trading business is not something we are willing to
 * put online — so every page carries this, and it doubles as the route back to
 * us when a prospect forwards the link to a partner.
 */
export function DemoRibbon({ site }: { site: DemoSite }) {
  return (
    <Link className={s.ribbon} href={site.landing}>
      <span className={s.ribbonDot} aria-hidden="true" />
      <span className={s.ribbonText}>
        Demo by <span className={s.ribbonStrong}>ThreSiNi</span>
        {/* The full disclosure needs more room than a phone has beside the call
            bar. It is dropped below 560px, where the footer and the enquiry
            form both still carry it in full. */}
        <span className={s.ribbonTail}> · {site.name} is not a real company</span>
      </span>
    </Link>
  );
}
