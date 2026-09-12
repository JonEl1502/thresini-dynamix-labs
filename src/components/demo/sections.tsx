import type { ReactNode } from "react";
import Link from "next/link";
import Photo from "./photo";
import { telHref } from "@/data/demos";
import { ArrowRight, Check, Clock, Pin, ServiceIcon, Star } from "./icons";
import type { DemoArea, DemoReview, DemoService, DemoSite } from "@/data/demos";
import s from "./demo.module.css";

/* --------------------------------------------------------------------------
   The demo section kit.

   Every section here takes data and nothing else. A veterinary practice and an
   electrical contractor render through the same <ServicesGrid/>; what differs
   is the row of data passed in and the theme tokens above it. Adding a vertical
   means adding a data file, not a component.
   -------------------------------------------------------------------------- */

export function Band({
  id,
  tone = "plain",
  children,
  className,
}: {
  id?: string;
  tone?: "plain" | "tint" | "panel";
  children: ReactNode;
  className?: string;
}) {
  const toneClass = tone === "tint" ? s.tint : tone === "panel" ? "panel" : "";
  return (
    <section id={id} className={["band", toneClass, className].filter(Boolean).join(" ")}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function Head({
  eyebrow,
  title,
  lede,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  center?: boolean;
}) {
  return (
    <header className={`${s.head} ${center ? s.center : ""}`}>
      {eyebrow ? <p className={`eyebrow ${s.headEyebrow}`}>{eyebrow}</p> : null}
      <h2 className={s.headTitle}>{title}</h2>
      {lede ? <p className="lede">{lede}</p> : null}
    </header>
  );
}

export function Stars({ count = 5, size = 15 }: { count?: number; size?: number }) {
  return (
    <span className={s.stars}>
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} size={size} />
      ))}
    </span>
  );
}

/* ---------- trust strip ---------- */

export function TrustStrip({ badges }: { badges: string[] }) {
  return (
    <div className={s.trust}>
      <div className="wrap">
        <ul className={s.trustRow}>
          {badges.map((badge) => (
            <li key={badge} className={s.trustItem}>
              <Check size={17} />
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------- stats ---------- */

export function StatBand({ stats }: { stats: DemoSite["stats"] }) {
  return (
    <dl className={s.stats}>
      {stats.map((stat) => (
        <div key={stat.label} className={s.stat}>
          <dt className="sr">{stat.label}</dt>
          <dd>
            <span className={s.statValue}>{stat.value}</span>
            <span className={s.statLabel}>{stat.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------- services ---------- */

export function ServicesGrid({
  site,
  services,
  showPrice = true,
}: {
  site: DemoSite;
  services: DemoService[];
  showPrice?: boolean;
}) {
  return (
    <div className={s.services}>
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/demo/${site.slug}/services/${service.slug}`}
          className={s.service}
        >
          <span className={s.serviceIcon}>
            <ServiceIcon name={service.scene} />
          </span>
          <h3 className={s.serviceName}>{service.name}</h3>
          <p className={s.serviceSummary}>{service.summary}</p>
          {showPrice && service.priceFrom ? (
            <span className={s.servicePrice}>From {service.priceFrom}</span>
          ) : null}
          <span className={s.serviceMore}>
            Read more <ArrowRight size={17} />
          </span>
        </Link>
      ))}
    </div>
  );
}

/* ---------- reasons ---------- */

export function Reasons({ reasons }: { reasons: DemoSite["reasons"] }) {
  return (
    <div className={s.reasons}>
      {reasons.map((reason, i) => (
        <div key={reason.title} className={s.reason}>
          <span className={s.reasonNum} aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3>{reason.title}</h3>
          <p className={s.reasonBody}>{reason.body}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- reviews ---------- */

export function Reviews({
  rating,
  reviews,
  limit,
}: {
  rating: DemoSite["rating"];
  reviews: DemoReview[];
  limit?: number;
}) {
  const shown = limit ? reviews.slice(0, limit) : reviews;
  return (
    <>
      <div className={s.reviewSummary}>
        <span className={s.reviewScore}>
          <span className={s.reviewScoreNum}>{rating.score}</span>
          <span>
            <Stars size={18} />
            <span className={s.reviewCount}>
              Based on {rating.count} reviews
            </span>
          </span>
        </span>
      </div>
      <div className={s.reviews}>
        {shown.map((review) => (
          <figure key={review.author + review.when} className={s.review}>
            <div className={s.reviewTop}>
              <Stars count={review.stars} size={16} />
              <span className={s.reviewWhen}>{review.when}</span>
            </div>
            <blockquote className={s.reviewBody}>{review.body}</blockquote>
            <figcaption className={s.reviewMeta}>
              <span className={s.reviewJob}>{review.job}</span>
              <span className={s.reviewAuthor}>{review.author}</span>
              <span className={s.reviewPlace}>· {review.place}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

/* ---------- areas ---------- */

export function Areas({ site, areas }: { site: DemoSite; areas: DemoArea[] }) {
  return (
    <div className={s.areas}>
      {areas.map((area) => (
        <Link key={area.slug} href={`/demo/${site.slug}/areas/${area.slug}`} className={s.area}>
          <h3 className={s.areaName}>{area.name}</h3>
          <div className={s.areaWithin}>
            {area.within.slice(0, 5).map((place) => (
              <span key={place} className={s.areaChip}>
                {place}
              </span>
            ))}
          </div>
          <span className={s.areaTime}>
            <Clock size={15} /> {area.responseTime}
          </span>
        </Link>
      ))}
    </div>
  );
}

/* ---------- recent work ---------- */

export function Work({ site }: { site: DemoSite }) {
  const shots = site.photos.gallery.length ? site.photos.gallery : [site.photos.hero];
  return (
    <div className={s.work}>
      {site.work.map((item, i) => (
        <article key={item.title} className={s.workItem}>
          <div className={s.workArt} style={{ aspectRatio: "16 / 10" }}>
            <Photo src={shots[i % shots.length]} alt="" sizes="(max-width:760px) 100vw, 33vw" />
          </div>
          <div className={s.workText}>
            <span className={s.workPlace}>
              <Pin size={13} /> {item.place}
            </span>
            <h3 className={s.workTitle}>{item.title}</h3>
            <p className={s.workBody}>{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ---------- faq ---------- */

export function Faqs({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className={s.faq}>
      {faqs.map((faq) => (
        <details key={faq.q} className={s.faqItem}>
          <summary className={s.faqSummary}>
            {faq.q}
            <span className={s.faqMark} aria-hidden="true" />
          </summary>
          <p className={s.faqBody}>{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ---------- closing call-to-action ---------- */

export function CtaBand({ site, title, body }: { site: DemoSite; title: string; body: string }) {
  return (
    <div className={s.cta}>
      <div className={s.ctaCopy}>
        <h2 className={s.ctaTitle}>{title}</h2>
        <p className="lede">{body}</p>
      </div>
      <div className={s.ctaActions}>
        <a className={s.ctaPhone} href={telHref(site.phoneDisplay)}>
          <span className={s.ctaPhoneLabel}>Call us now</span>
          <span className={s.ctaPhoneNumber}>{site.phoneDisplay}</span>
        </a>
        <a className="btn btn--primary" href="#quote">
          {site.cta.action}
        </a>
      </div>
    </div>
  );
}

/* ---------- small shared bits used by the inner pages ---------- */

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className={s.checks}>
      {items.map((item) => (
        <li key={item} className={s.check}>
          <Check size={19} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function SignsGrid({ items }: { items: string[] }) {
  return (
    <ul className={s.signs}>
      {items.map((item) => (
        <li key={item} className={s.sign}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function PriceBox({ from, note, assurance }: { from?: string; note?: string; assurance: string }) {
  if (!from) {
    return note ? (
      <div className={s.priceBox}>
        <span className={s.priceLabel}>Pricing</span>
        <p className={s.priceNote}>{note}</p>
      </div>
    ) : null;
  }
  return (
    <div className={s.priceBox}>
      <span className={s.priceLabel}>From</span>
      <span className={s.priceValue}>{from}</span>
      {note ? <p className={s.priceNote}>{note}</p> : null}
      <p className={s.priceNote}>{assurance}</p>
    </div>
  );
}

export function RelatedLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <div className={s.related}>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={s.relatedLink}>
          {link.label}
          <ArrowRight size={16} />
        </Link>
      ))}
    </div>
  );
}

export function Crumbs({ trail }: { trail: { href?: string; label: string }[] }) {
  return (
    <nav className={s.crumbs} aria-label="Breadcrumb">
      {trail.map((crumb, i) => (
        <span key={crumb.label}>
          {i > 0 ? <span aria-hidden="true"> / </span> : null}
          {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
        </span>
      ))}
    </nav>
  );
}
