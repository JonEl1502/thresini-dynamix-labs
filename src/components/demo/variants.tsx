import Link from "next/link";
import Photo from "./photo";
import { Stars } from "./sections";
import { ArrowRight, Check, Clock, Phone, Pin, ServiceIcon, Shield } from "./icons";
import { telHref } from "@/data/demos";
import type { DemoArea, DemoReview, DemoSite } from "@/data/demos";
import s from "./demo.module.css";

/* --------------------------------------------------------------------------
   Section layout variants.

   Each demo names one variant per section in its `layout` block. The copy,
   data and behaviour are identical across variants — only the arrangement
   changes — so a vertical still costs a data row, but five demos no longer
   read as one template with the colours swapped.
   -------------------------------------------------------------------------- */

/* ============================ HERO ============================ */

export function HeroVariant({ site }: { site: DemoSite }) {
  switch (site.layout.hero) {
    case "cinematic":
      return <HeroCinematic site={site} />;
    case "editorial":
      return <HeroEditorial site={site} />;
    case "magazine":
      return <HeroMagazine site={site} />;
    case "stack":
      return <HeroStack site={site} />;
    default:
      return <HeroSplit site={site} />;
  }
}

function Actions({ site, ghostClass = "btn btn--ghost" }: { site: DemoSite; ghostClass?: string }) {
  return (
    <div className={s.heroActions}>
      <a className="btn btn--primary" href={telHref(site.phoneDisplay)}>
        <Phone size={19} />
        Call {site.phoneDisplay}
      </a>
      <a className={ghostClass} href="#quote">
        {site.cta.action}
      </a>
    </div>
  );
}

/** Brightwire — the photograph is the page. Copy sits in the dark of it. */
function HeroCinematic({ site }: { site: DemoSite }) {
  return (
    <section className={s.heroCine}>
      <div className={s.heroCineBg}>
        <Photo src={site.photos.hero} alt="" priority sizes="100vw" />
      </div>
      <div className={s.heroCineVeil} aria-hidden="true" />
      <div className="wrap">
        <div className={s.heroCineInner}>
          <p className="eyebrow" style={{ color: "var(--brand)" }}>
            {site.hero.eyebrow}
          </p>
          <h1 className={s.heroCineTitle}>{site.hero.headline}</h1>
          <p className="lede">{site.hero.sub}</p>
          <Actions site={site} />
          <dl className={s.heroCineStrip}>
            {site.stats.map((stat) => (
              <div key={stat.label} className={s.heroCineStat}>
                <dt className="sr">{stat.label}</dt>
                <dd>
                  <span className={s.heroCineStatV}>{stat.value}</span>
                  <span className={s.heroCineStatL}>{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/** Willow Creek — copy beside a collage, warm and photographic. */
function HeroSplit({ site }: { site: DemoSite }) {
  const [a, b] = site.photos.gallery;
  return (
    <section className={s.heroSplit}>
      <div className="wrap">
        <div className={s.heroGrid}>
          <div>
            <p className={`eyebrow ${s.heroEyebrow}`}>{site.hero.eyebrow}</p>
            <h1 className={s.heroTitle}>{site.hero.headline}</h1>
            <p className={`lede ${s.heroSub}`}>{site.hero.sub}</p>
            <ul className={s.heroPoints}>
              {site.hero.points.map((point) => (
                <li key={point} className={s.heroPoint}>
                  <Check size={19} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Actions site={site} />
            <p className={s.heroPromise}>
              <Shield size={20} />
              <span>{site.hero.promise}</span>
            </p>
          </div>

          <div className={s.heroArt}>
            <div className={s.collage}>
              <div className={s.collageMain}>
                <Photo src={site.photos.hero} alt="" priority sizes="(max-width:900px) 60vw, 30vw" />
              </div>
              <div className={s.collageSide}>
                <Photo src={a} alt="" sizes="(max-width:900px) 40vw, 20vw" />
              </div>
              <div className={s.collageSide}>
                <Photo src={b} alt="" sizes="(max-width:900px) 40vw, 20vw" />
              </div>
            </div>
            <div className={s.heroRating}>
              <span className={s.heroRatingScore}>{site.rating.score}</span>
              <span>
                <Stars />
                <span className={s.heroRatingText}>{site.rating.count} reviews</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Marlowe & Finch — centred, ruled, restrained. A muted band beneath. */
function HeroEditorial({ site }: { site: DemoSite }) {
  return (
    <>
      <section className={s.heroEd}>
        <div className="wrap">
          <div className={s.heroEdInner}>
            <div className={s.heroEdRule} aria-hidden="true" />
            <p className="eyebrow">{site.hero.eyebrow}</p>
            <h1 className={s.heroEdTitle}>{site.hero.headline}</h1>
            <p className={`lede ${s.heroEdSub}`}>{site.hero.sub}</p>
            <ul className={s.heroEdPoints}>
              {site.hero.points.map((point) => (
                <li key={point} className={s.heroEdPoint}>
                  <Check size={17} />
                  {point}
                </li>
              ))}
            </ul>
            <div className={s.heroEdActions}>
              <a className="btn btn--primary" href={telHref(site.phoneDisplay)}>
                <Phone size={19} />
                Call {site.phoneDisplay}
              </a>
              <a className="btn btn--ghost" href="#quote">
                {site.cta.action}
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className={s.heroEdBand}>
        <Photo src={site.photos.hero} alt="" priority sizes="100vw" />
      </div>
    </>
  );
}

/** Coastline — an asymmetric card with chips floating off its corners. */
function HeroMagazine({ site }: { site: DemoSite }) {
  return (
    <section className={s.heroMag}>
      <div className="wrap">
        <div className={s.heroMagGrid}>
          <div>
            <p className={`eyebrow ${s.heroEyebrow}`}>{site.hero.eyebrow}</p>
            <h1 className={s.heroTitle}>{site.hero.headline}</h1>
            <p className={`lede ${s.heroSub}`}>{site.hero.sub}</p>
            <ul className={s.heroPoints}>
              {site.hero.points.map((point) => (
                <li key={point} className={s.heroPoint}>
                  <Check size={19} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Actions site={site} />
          </div>
          <div className={s.heroMagArt}>
            <div className={s.heroMagShot}>
              <Photo src={site.photos.hero} alt="" priority sizes="(max-width:980px) 100vw, 52vw" />
            </div>
            <span className={`${s.heroMagChip} ${s.heroMagChipA}`}>
              <span className={s.heroRatingScore} style={{ fontSize: "1.6rem" }}>
                {site.rating.score}
              </span>
              <span>
                <Stars size={13} />
                <span className={s.heroRatingText}>{site.rating.count} reviews</span>
              </span>
            </span>
            <span className={`${s.heroMagChip} ${s.heroMagChipB}`}>
              <Shield size={20} />
              <span>{site.badges[2] ?? site.badges[0]}</span>
            </span>
          </div>
        </div>
        <p className={s.heroPromise} style={{ marginTop: "clamp(1.5rem,3vw,2.25rem)" }}>
          <Shield size={20} />
          <span>{site.hero.promise}</span>
        </p>
      </div>
    </section>
  );
}

/** Halden — a photographic band with the headline over it, card overlapping. */
function HeroStack({ site }: { site: DemoSite }) {
  return (
    <section className={s.heroStack}>
      <div className={s.heroStackBand}>
        <Photo src={site.photos.hero} alt="" priority sizes="100vw" />
        <div className={s.heroStackOver}>
          <div className="wrap">
            <p className={`eyebrow ${s.heroStackKicker}`}>{site.hero.eyebrow}</p>
            <h1 className={s.heroStackTitle}>{site.hero.headline}</h1>
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className={s.heroStackCard}>
          <div>
            <p className="lede" style={{ marginBottom: "1.1rem" }}>
              {site.hero.sub}
            </p>
            <ul className={s.heroPoints}>
              {site.hero.points.map((point) => (
                <li key={point} className={s.heroPoint}>
                  <Check size={19} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Actions site={site} />
          </div>
          <div>
            <p className={s.heroPromise}>
              <Shield size={20} />
              <span>{site.hero.promise}</span>
            </p>
            <div className={s.heroRating} style={{ position: "static", marginTop: "1rem", display: "inline-flex" }}>
              <span className={s.heroRatingScore}>{site.rating.score}</span>
              <span>
                <Stars />
                <span className={s.heroRatingText}>{site.rating.count} reviews</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ SERVICES ============================ */

export function ServicesVariant({ site }: { site: DemoSite }) {
  const href = (slug: string) => `/demo/${site.slug}/services/${slug}`;

  switch (site.layout.services) {
    case "numbered":
      return (
        <div className={s.svcNum}>
          {site.services.map((service, n) => (
            <Link key={service.slug} href={href(service.slug)} className={s.svcNumRow}>
              <span className={s.svcNumIdx}>{String(n + 1).padStart(2, "0")}</span>
              <span className={s.svcNumBody}>
                <h3 className={s.svcNumTitle}>{service.name}</h3>
                <p className={s.svcNumText}>{service.summary}</p>
              </span>
              <span className={s.svcNumPrice}>
                {service.priceFrom ? `From ${service.priceFrom}` : "Quoted per job"}
              </span>
              <span className={s.svcNumGo}>
                <ArrowRight size={20} />
              </span>
            </Link>
          ))}
        </div>
      );

    case "photoTiles":
      return (
        <div className={s.svcTiles}>
          {site.services.map((service) => (
            <Link key={service.slug} href={href(service.slug)} className={s.svcTile}>
              <span className={s.svcTileShot}>
                <Photo src={service.image} alt="" sizes="(max-width:760px) 100vw, 33vw" />
              </span>
              <span className={s.svcTileBody}>
                <h3 className={s.svcTileTitle}>{service.name}</h3>
                <span className={s.svcTileText}>{service.summary}</span>
                <span className={s.svcTileFoot}>
                  {service.priceFrom ? (
                    <span className={s.servicePrice}>From {service.priceFrom}</span>
                  ) : (
                    <span className={s.servicePrice}>Ask us</span>
                  )}
                  <span className={s.serviceMore}>
                    Read more <ArrowRight size={16} />
                  </span>
                </span>
              </span>
            </Link>
          ))}
        </div>
      );

    case "ledger":
      return (
        <div className={s.svcLedger}>
          {site.services.map((service) => (
            <Link key={service.slug} href={href(service.slug)} className={s.svcLedgerRow}>
              <span className={s.svcLedgerTop}>
                <h3 className={s.svcLedgerTitle}>{service.name}</h3>
                <span className={s.svcLedgerLead} aria-hidden="true" />
                <span className={s.svcLedgerPrice}>
                  {service.priceFrom ? `from ${service.priceFrom}` : "on enquiry"}
                </span>
              </span>
              <span className={s.svcLedgerText}>{service.summary}</span>
            </Link>
          ))}
        </div>
      );

    case "alternating":
      return (
        <div className={s.svcAlt}>
          {site.services.map((service, n) => (
            <div key={service.slug} className={s.svcAltRow}>
              <div className={s.svcAltShot}>
                <Photo src={service.image} alt="" sizes="(max-width:880px) 100vw, 50vw" />
              </div>
              <div className={s.svcAltBody}>
                <span className={s.svcAltIdx}>
                  {String(n + 1).padStart(2, "0")} · {site.tradeLabel}
                </span>
                <h3 className={s.svcAltTitle}>{service.name}</h3>
                <p className={s.svcAltText}>{service.summary}</p>
                {service.priceFrom ? (
                  <span className={s.servicePrice}>From {service.priceFrom}</span>
                ) : null}
                <Link href={href(service.slug)} className="btn btn--ghost">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      );

    default:
      return (
        <div className={s.svcIcons}>
          {site.services.map((service) => (
            <Link key={service.slug} href={href(service.slug)} className={s.svcIcon}>
              <span className={s.svcIconTile}>
                <ServiceIcon name={service.scene} size={26} />
              </span>
              <h3 className={s.svcIconTitle}>{service.name}</h3>
              <span className={s.svcIconText}>{service.summary}</span>
              {service.priceFrom ? (
                <span className={s.servicePrice}>From {service.priceFrom}</span>
              ) : null}
              <span className={s.serviceMore}>
                Read more <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      );
  }
}

/* ============================ REVIEWS ============================ */

function Meta({ review }: { review: DemoReview }) {
  return (
    <span className={s.reviewMeta}>
      <span className={s.reviewJob}>{review.job}</span>
      <span className={s.reviewAuthor}>{review.author}</span>
      <span className={s.reviewPlace}>· {review.place}</span>
      <span className={s.reviewWhen}>{review.when}</span>
    </span>
  );
}

export function ReviewsVariant({ site, reviews }: { site: DemoSite; reviews: DemoReview[] }) {
  switch (site.layout.reviews) {
    case "strip":
      return (
        <div className={s.revStrip}>
          {reviews.map((review) => (
            <figure key={review.author + review.when} className={s.revStripCard}>
              <Stars count={review.stars} size={16} />
              <blockquote className={s.reviewBody}>{review.body}</blockquote>
              <figcaption>
                <Meta review={review} />
              </figcaption>
            </figure>
          ))}
        </div>
      );

    case "soft":
      return (
        <div className={s.revSoft}>
          {reviews.map((review) => (
            <figure key={review.author + review.when} className={s.revSoftCard}>
              <Stars count={review.stars} size={17} />
              <blockquote className={s.reviewBody}>{review.body}</blockquote>
              <figcaption className={s.revSoftWho}>
                <span className={s.revAvatar} aria-hidden="true">
                  {review.author.charAt(0)}
                </span>
                <span>
                  <span className={s.reviewAuthor}>{review.author}</span>
                  <br />
                  <span className={s.reviewPlace}>
                    {review.place} · {review.job}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      );

    case "feature": {
      const [lead, ...rest] = reviews;
      return (
        <>
          <figure className={s.revFeature}>
            <Stars count={lead.stars} size={18} />
            <blockquote className={s.revFeatureQuote}>&ldquo;{lead.body}&rdquo;</blockquote>
            <figcaption className={s.revFeatureWho}>
              <strong>{lead.author}</strong>
              <span>{lead.place}</span>
              <span>· {lead.job}</span>
            </figcaption>
          </figure>
          <div className={s.revSmall}>
            {rest.slice(0, 3).map((review) => (
              <figure key={review.author + review.when} className={s.revSmallItem}>
                <Stars count={review.stars} size={14} />
                <blockquote className={s.revSmallBody}>{review.body}</blockquote>
                <figcaption className={s.revFeatureWho}>
                  <strong>{review.author}</strong>
                  <span>{review.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </>
      );
    }

    case "columns":
      return (
        <div className={s.revCols}>
          {reviews.map((review) => (
            <figure key={review.author + review.when} className={s.revColsItem}>
              <Stars count={review.stars} size={16} />
              <blockquote className={s.reviewBody}>{review.body}</blockquote>
              <figcaption>
                <Meta review={review} />
              </figcaption>
            </figure>
          ))}
        </div>
      );

    default:
      return (
        <div className={s.revQuilt}>
          {reviews.map((review) => (
            <figure key={review.author + review.when} className={s.revQuiltCard}>
              <Stars count={review.stars} size={16} />
              <blockquote className={s.reviewBody}>{review.body}</blockquote>
              <figcaption>
                <Meta review={review} />
              </figcaption>
            </figure>
          ))}
        </div>
      );
  }
}

/* ============================ AREAS ============================ */

export function AreasVariant({ site, areas }: { site: DemoSite; areas: DemoArea[] }) {
  const href = (slug: string) => `/demo/${site.slug}/areas/${slug}`;

  switch (site.layout.areas) {
    case "photoList":
      return (
        <div className={s.areaPhotoList}>
          {areas.map((area, n) => (
            <Link key={area.slug} href={href(area.slug)} className={s.areaPhotoRow}>
              <span className={s.areaThumb}>
                <Photo
                  src={site.photos.gallery[n % site.photos.gallery.length]}
                  alt=""
                  sizes="90px"
                />
              </span>
              <span className={s.areaPhotoBody}>
                <h3 className={s.areaPhotoName}>{area.name}</h3>
                <span className={s.areaPhotoWithin}>{area.within.slice(0, 4).join(" · ")}</span>
              </span>
            </Link>
          ))}
        </div>
      );

    case "textColumns":
      return (
        <div className={s.areaTextCols}>
          {areas.map((area) => (
            <div key={area.slug} className={s.areaTextItem}>
              <Link href={href(area.slug)} className={s.areaTextName}>
                {area.name}
              </Link>
              <span className={s.areaTextWithin}>{area.within.join(", ")}</span>
            </div>
          ))}
        </div>
      );

    case "tiles":
      return (
        <div className={s.areaTiles}>
          {areas.map((area) => (
            <Link key={area.slug} href={href(area.slug)} className={s.areaTile}>
              <h3 className={s.areaName}>{area.name}</h3>
              <span className={s.areaPhotoWithin}>{area.within.slice(0, 3).join(" · ")}</span>
              <span className={s.areaTime}>
                <Clock size={14} /> {area.responseTime}
              </span>
            </Link>
          ))}
        </div>
      );

    default:
      return (
        <div className={s.areaChips}>
          {areas.map((area) => (
            <Link key={area.slug} href={href(area.slug)} className={s.areaChipLink}>
              <Pin size={16} />
              {area.name}
              <span className={s.areaChipCount}>{area.within.length} areas</span>
            </Link>
          ))}
        </div>
      );
  }
}

/* ============================ GALLERY ============================ */

export function GalleryBand({ site }: { site: DemoSite }) {
  return (
    <div className={s.gallery}>
      {site.photos.gallery.slice(0, 5).map((src, n) => (
        <div key={src + n} className={s.galleryItem}>
          <Photo src={src} alt="" sizes="(max-width:760px) 50vw, 25vw" />
        </div>
      ))}
    </div>
  );
}
