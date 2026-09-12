import { notFound } from "next/navigation";
import Photo from "@/components/demo/photo";
import QuoteForm from "@/components/demo/quote-form";
import { HomeSchema } from "@/components/demo/schema";
import { Band, CtaBand, Faqs, Head, Reasons, StatBand, TrustStrip, Work } from "@/components/demo/sections";
import { AreasVariant, GalleryBand, HeroVariant, ReviewsVariant, ServicesVariant } from "@/components/demo/variants";
import { Shield } from "@/components/demo/icons";
import { DEMOS, DEMO_BY_SLUG } from "@/data/demos";
import type { DemoSite, SectionKey } from "@/data/demos";
import s from "@/components/demo/demo.module.css";

export function generateStaticParams() {
  return DEMOS.map((demo) => ({ site: demo.slug }));
}

/* Each demo declares its own section order, so the tone rhythm falls
   differently down every site without anyone hand-placing it. */
function toneFor(index: number, key: SectionKey) {
  if (key === "quote") return "plain" as const;
  const cycle = index % 3;
  return cycle === 2 ? ("panel" as const) : cycle === 1 ? ("tint" as const) : ("plain" as const);
}

/**
 * The home page of every demo. It renders that demo's `layout.order`, and each
 * section picks the arrangement the demo asked for — so a Denver veterinary
 * clinic and a Phoenix electrician share this file without looking remotely
 * alike.
 */
export default async function DemoHome({ params }: { params: Promise<{ site: string }> }) {
  const site = DEMO_BY_SLUG[(await params).site];
  if (!site) notFound();

  return (
    <>
      <HomeSchema site={site} />
      <HeroVariant site={site} />
      <TrustStrip badges={site.badges} />

      {site.layout.order.map((key, i) => (
        <Band key={key} id={key === "quote" ? "quote" : key} tone={toneFor(i, key)}>
          {renderSection(key, site)}
        </Band>
      ))}

      <Band tone="tint">
        <CtaBand
          site={site}
          title={site.hero.headline}
          body={`${site.emergencyLine} Serving ${site.areas.map((a) => a.name).slice(0, 3).join(", ")} and the surrounding area.`}
        />
      </Band>
    </>
  );
}

function renderSection(key: SectionKey, site: DemoSite) {
  switch (key) {
    case "services":
      return (
        <>
          <Head
            eyebrow="What we do"
            title={`${site.tradeLabel} services in ${site.address.locality}`}
            lede="Every service has its own page, with what it covers, what it costs and the questions we get asked about it most."
          />
          <ServicesVariant site={site} />
        </>
      );

    case "stats":
      return <StatBand stats={site.stats} />;

    case "reasons": {
      const withPhoto = site.photos.feature && (site.layout.reviews === "soft" || site.layout.reviews === "quilt");
      const head = (
        <Head eyebrow="Why us" title={`Why ${site.address.locality} chooses ${site.name}`} />
      );
      if (!withPhoto) {
        return (
          <>
            {head}
            <Reasons reasons={site.reasons} />
          </>
        );
      }
      return (
        <div className={s.featureSplit}>
          <div className={s.featureShot}>
            <Photo src={site.photos.feature!} alt="" sizes="(max-width:900px) 100vw, 50vw" />
          </div>
          <div>
            {head}
            <div className={s.checks}>
              {site.reasons.map((reason) => (
                <div key={reason.title} className={s.check}>
                  <Shield size={20} />
                  <span>
                    <strong>{reason.title}</strong>
                    <br />
                    <span style={{ color: "var(--muted)" }}>{reason.body}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    case "reviews":
      return (
        <>
          <Head
            eyebrow="Reviews"
            title="What our customers say"
            lede={`${site.rating.score} out of 5 from ${site.rating.count} reviews. These come straight from our Google Business Profile — we don't write them and we can't edit them.`}
          />
          <ReviewsVariant site={site} reviews={site.reviews} />
        </>
      );

    case "areas":
      return (
        <>
          <Head
            eyebrow="Areas we cover"
            title="Where we work"
            lede="One page for every area we serve, with the response times you can actually expect from us there."
          />
          <AreasVariant site={site} areas={site.areas} />
        </>
      );

    case "gallery":
      return (
        <>
          <Head
            eyebrow="Inside the practice"
            title="Some of the faces we see"
            lede="Every patient in these photographs belongs to a client of ours."
          />
          <GalleryBand site={site} />
        </>
      );

    case "work":
      return (
        <>
          <Head eyebrow="Recent work" title="Jobs we've finished lately" />
          <Work site={site} />
        </>
      );

    case "faq":
      return (
        <>
          <Head eyebrow="Questions" title="Frequently asked questions" />
          <Faqs faqs={site.faqs} />
        </>
      );

    case "quote":
      return (
        <div className={s.split}>
          <div>
            <Head eyebrow="Get in touch" title={site.cta.formTitle} lede={site.hero.promise} />
            <div className={s.priceBox} style={{ marginBottom: "1.5rem" }}>
              <span className={s.priceLabel}>{site.finance.title}</span>
              <p className={s.priceNote}>{site.finance.body}</p>
            </div>
            <div className={s.creds}>
              {site.credentials.map((cred) => (
                <div key={cred.label} className={s.check}>
                  <Shield size={19} />
                  <span>
                    <strong>{cred.label}</strong>
                    <br />
                    <span style={{ color: "var(--muted)" }}>{cred.value}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <QuoteForm site={site} />
          </div>
        </div>
      );
  }
}
