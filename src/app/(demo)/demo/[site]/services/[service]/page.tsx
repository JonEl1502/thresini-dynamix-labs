import type { Metadata } from "next";
import { notFound } from "next/navigation";
import QuoteForm from "@/components/demo/quote-form";
import Photo from "@/components/demo/photo";
import { ServiceSchema } from "@/components/demo/schema";
import { Phone } from "@/components/demo/icons";
import {
  Band,
  CheckList,
  Crumbs,
  CtaBand,
  Faqs,
  Head,
  PriceBox,
  RelatedLinks,
  SignsGrid,
  TrustStrip,
} from "@/components/demo/sections";
import { AreasVariant, ReviewsVariant } from "@/components/demo/variants";
import { DEMOS, DEMO_BY_SLUG, telHref } from "@/data/demos";
import s from "@/components/demo/demo.module.css";

type Params = Promise<{ site: string; service: string }>;

export function generateStaticParams() {
  return DEMOS.flatMap((demo) =>
    demo.services.map((service) => ({ site: demo.slug, service: service.slug })),
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { site: siteSlug, service: serviceSlug } = await params;
  const site = DEMO_BY_SLUG[siteSlug];
  const service = site?.services.find((item) => item.slug === serviceSlug);
  if (!site || !service) return {};
  return { title: service.headline, description: service.summary };
}

/**
 * The service page. One per service is the structure that actually ranks for
 * local search, and it is the single thing most sites in these verticals are
 * missing — so it is the page a prospect should be shown first.
 */
export default async function ServicePage({ params }: { params: Params }) {
  const { site: siteSlug, service: serviceSlug } = await params;
  const site = DEMO_BY_SLUG[siteSlug];
  const service = site?.services.find((item) => item.slug === serviceSlug);
  if (!site || !service) notFound();

  const home = `/demo/${site.slug}`;
  const others = site.services.filter((item) => item.slug !== service.slug).slice(0, 4);

  return (
    <>
      <ServiceSchema site={site} service={service} />

      <section className={s.pageHero}>
        <div className="wrap">
          <Crumbs
            trail={[
              { href: home, label: "Home" },
              { href: `${home}#services`, label: "Services" },
              { label: service.name },
            ]}
          />
          <div className={s.pageHeroGrid}>
            <div>
              <p className={`eyebrow ${s.heroEyebrow}`}>{site.tradeLabel}</p>
              <h1 className={s.heroTitle}>{service.headline}</h1>
              <p className={`lede ${s.heroSub}`}>{service.lede}</p>
              <div className={s.heroActions}>
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
                <Photo src={service.image} alt="" priority sizes="(max-width:900px) 100vw, 45vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip badges={site.badges} />

      <Band tone="tint">
        <Head
          eyebrow="When to call us"
          title="Does this sound familiar?"
          lede="If any of these apply, this is the service you want — and the sooner we look, the smaller the job usually is."
        />
        <SignsGrid items={service.signs} />
      </Band>

      <Band>
        <div className={s.split}>
          <div>
            <Head eyebrow="What's included" title={`What ${service.name.toLowerCase()} covers`} />
            <CheckList items={service.includes} />
          </div>
          <div>
            <PriceBox from={service.priceFrom} note={service.priceNote} assurance={site.pricingNote} />
          </div>
        </div>
      </Band>

      <Band tone="panel">
        <Head eyebrow="Questions" title={`${service.name} — your questions answered`} />
        <Faqs faqs={service.faqs} />
      </Band>

      <Band id="quote">
        <div className={s.split}>
          <div>
            <Head eyebrow="Get in touch" title={site.cta.formTitle} lede={site.hero.promise} />
            <Head eyebrow="Other services" title="We can help with these too" />
            <RelatedLinks
              links={others.map((item) => ({
                href: `${home}/services/${item.slug}`,
                label: item.name,
              }))}
            />
          </div>
          <div>
            <QuoteForm site={site} />
          </div>
        </div>
      </Band>

      <Band tone="tint">
        <Head eyebrow="Reviews" title={`What people say about our ${service.name.toLowerCase()}`} />
        <ReviewsVariant site={site} reviews={site.reviews.slice(0, 3)} />
      </Band>

      <Band>
        <Head eyebrow="Areas we cover" title={`${service.name} across ${site.address.region}`} />
        <AreasVariant site={site} areas={site.areas} />
      </Band>

      <Band tone="panel">
        <CtaBand site={site} title={service.headline} body={site.emergencyLine} />
      </Band>
    </>
  );
}
