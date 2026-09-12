import type { Metadata } from "next";
import { notFound } from "next/navigation";
import QuoteForm from "@/components/demo/quote-form";
import Photo from "@/components/demo/photo";
import { AreaSchema } from "@/components/demo/schema";
import { Clock, Phone, Pin } from "@/components/demo/icons";
import {
  Band,
  Crumbs,
  CtaBand,
  Faqs,
  Head,
  RelatedLinks,
  TrustStrip,
} from "@/components/demo/sections";
import { ReviewsVariant, ServicesVariant } from "@/components/demo/variants";
import { DEMOS, DEMO_BY_SLUG, telHref } from "@/data/demos";
import s from "@/components/demo/demo.module.css";

type Params = Promise<{ site: string; area: string }>;

export function generateStaticParams() {
  return DEMOS.flatMap((demo) => demo.areas.map((area) => ({ site: demo.slug, area: area.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { site: siteSlug, area: areaSlug } = await params;
  const site = DEMO_BY_SLUG[siteSlug];
  const area = site?.areas.find((item) => item.slug === areaSlug);
  if (!site || !area) return {};
  return {
    title: `${site.tradeLabel} in ${area.name}`,
    description: `${site.name} — ${site.tagline} Serving ${area.name} and ${area.within.slice(0, 3).join(", ")}.`,
  };
}

/**
 * The area page. One per place served, each with its own copy, its own
 * response time and its own reviews — which is what makes a local search find
 * a business, and what a single "areas we cover" list never does.
 */
export default async function AreaPage({ params }: { params: Params }) {
  const { site: siteSlug, area: areaSlug } = await params;
  const site = DEMO_BY_SLUG[siteSlug];
  const area = site?.areas.find((item) => item.slug === areaSlug);
  if (!site || !area) notFound();

  const home = `/demo/${site.slug}`;
  const local = site.reviews.filter((review) =>
    area.within.some((place) => review.place.includes(place)) || review.place.includes(area.name),
  );
  const shown = local.length >= 2 ? local : site.reviews.slice(0, 3);
  const others = site.areas.filter((item) => item.slug !== area.slug);

  return (
    <>
      <AreaSchema site={site} areaName={area.name} areaSlug={area.slug} />

      <section className={s.pageHero}>
        <div className="wrap">
          <Crumbs
            trail={[
              { href: home, label: "Home" },
              { href: `${home}#areas`, label: "Areas we cover" },
              { label: area.name },
            ]}
          />
          <div className={s.pageHeroGrid}>
            <div>
              <p className={`eyebrow ${s.heroEyebrow}`}>
                <Pin size={14} /> {area.name}, {site.address.region}
              </p>
              <h1 className={s.heroTitle}>
                {site.tradeLabel} in {area.name}
              </h1>
              <p className={`lede ${s.heroSub}`}>{area.blurb}</p>
              <p className={s.heroPromise}>
                <Clock size={20} />
                <span>{area.responseTime}</span>
              </p>
              <div className={s.heroActions} style={{ marginTop: "1.4rem" }}>
                <a className="btn btn--primary" href={telHref(site.phoneDisplay)}>
                  <Phone size={19} />
                  Call {site.phoneDisplay}
                </a>
                <a className="btn btn--ghost" href="#quote">
                  {site.cta.action}
                </a>
              </div>
            </div>
            <div className={s.heroArt}>
              <div className={s.heroFrame} style={{ aspectRatio: "4 / 3" }}>
                <Photo
                  src={site.photos.gallery[0] ?? site.photos.hero}
                  alt=""
                  priority
                  sizes="(max-width:900px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip badges={site.badges} />

      <Band tone="tint">
        <Head
          eyebrow={`Covering ${area.name}`}
          title={`Neighbourhoods we cover in ${area.name}`}
          lede="If you are just outside this list, call us anyway — we almost certainly still come to you."
        />
        <div className={s.areaWithin}>
          {area.within.map((place) => (
            <span key={place} className={s.areaChip} style={{ fontSize: "0.95rem", padding: "0.45rem 0.9rem" }}>
              {place}
            </span>
          ))}
        </div>
      </Band>

      <Band>
        <Head
          eyebrow="Services"
          title={`What we do in ${area.name}`}
          lede={`Every service below is available across ${area.name} and the surrounding area.`}
        />
        <ServicesVariant site={site} />
      </Band>

      <Band tone="panel">
        <Head eyebrow="Reviews" title={`Customers near ${area.name}`} />
        <ReviewsVariant site={site} reviews={shown.slice(0, 3)} />
      </Band>

      <Band id="quote">
        <div className={s.split}>
          <div>
            <Head
              eyebrow="Get in touch"
              title={`${site.cta.formTitle} in ${area.name}`}
              lede={site.hero.promise}
            />
            <Head eyebrow="Nearby areas" title="We also cover" />
            <RelatedLinks
              links={others.map((item) => ({ href: `${home}/areas/${item.slug}`, label: item.name }))}
            />
          </div>
          <div>
            <QuoteForm site={site} />
          </div>
        </div>
      </Band>

      <Band tone="tint">
        <Head eyebrow="Questions" title="Frequently asked questions" />
        <Faqs faqs={site.faqs} />
      </Band>

      <Band>
        <CtaBand
          site={site}
          title={`Need ${site.tradeLabel.toLowerCase()} in ${area.name}?`}
          body={area.responseTime + ". " + site.emergencyLine}
        />
      </Band>
    </>
  );
}
