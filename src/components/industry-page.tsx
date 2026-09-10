import Link from "next/link";
import PageHero from "@/components/page-hero";
import Section, { SectionHead } from "@/components/section";
import CallBar from "@/components/call-bar";
import LeadForm from "@/components/lead-form";
import Glyph from "@/components/glyphs";
import Triad from "@/components/triad";
import type { IndustryPageData } from "@/data/industries";
import s from "@/styles/industry.module.css";
import i from "@/styles/inner.module.css";

/**
 * The industry landing pages share about eighty per cent of their structure, so
 * there is one template and one data table: hero, services, service areas,
 * reviews and projects, FAQ, lead form, and the sticky mobile call bar.
 */
export function IndustryPage({ data }: { data: IndustryPageData }) {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/#solutions-now", label: "Solutions" },
          { label: data.trade },
        ]}
        title={data.heroLine}
        lede={data.lede}
        actions={
          <>
            <Link href="#review" className="btn btn--primary">
              Get a free website review
            </Link>
            <Link href="/contact" className="btn btn--ghost">
              Request a quote
            </Link>
          </>
        }
        aside={<Glyph name={data.glyph} size={176} />}
        readouts={[
          { key: "Trade", value: data.trade },
          { key: "Markets", value: "USA · United Kingdom · Australia" },
          { key: "Built with", value: "Website · App · Automation" },
        ]}
      />

      <Section id="services" index="01" label="Services">
        <SectionHead
          id="services"
          kicker="One page per service"
          title="A page for every job you actually take."
          lede="This is the structure that ranks locally, and it is the part most trade sites are missing. Each one gets its own quote path."
        />
        <div className={s.services}>
          {data.services.map((service, n) => (
            <article key={service.title} className={s.service} data-reveal>
              <span className={s.serviceIndex}>
                {String(n + 1).padStart(2, "0")}
              </span>
              <h3 className={s.serviceTitle}>{service.title}</h3>
              <p className={s.serviceBody}>{service.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="areas" index="02" label="Service areas">
        <SectionHead
          id="areas"
          kicker="One page per town"
          title="Where you work, written down."
          lede="Location pages are how a local search finds you. We build one per suburb or town you cover, in whichever of the three markets you trade in."
        />
        <div className={s.areas}>
          {data.areas.map((area) => (
            <div key={area.region} className={s.area} data-reveal>
              <span className={s.areaRegion}>{area.region}</span>
              <div className={s.areaList}>
                {area.examples.map((example, n) => (
                  <span key={example} className={s.areaItem}>
                    <span className={s.areaTick}>{String(n + 1).padStart(2, "0")}</span>
                    <span>{example}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className={s.areaNote}>
          Example build-out, not a client list. Your own areas replace these — how
          many you cover is one of the things we count when we quote.
        </p>
      </Section>

      <Section id="proof" index="03" label="Reviews and work" invert>
        <SectionHead
          id="proof"
          kicker="Your proof, not ours"
          title="Reviews and projects, pulled from your own record."
          lede="We do not publish borrowed reviews on our site and we will not invent any for yours. These modules show your real ones."
        />
        <div className={s.modules}>
          <article className={s.module} data-reveal>
            <span className={s.moduleKey}>Module · Reviews</span>
            <h3 className={s.moduleTitle}>Google reviews, live</h3>
            <p className={s.moduleBody}>
              Your Google Business Profile feeds the page directly. Nothing is typed
              in by hand, so nothing can drift from what customers actually wrote.
            </p>
            <div className={s.reviewCard} aria-hidden="true">
              <span className={s.reviewStars}>
                {Array.from({ length: 5 }, (_, n) => (
                  <Star key={n} />
                ))}
              </span>
              <span className={s.reviewLines}>
                <span className={s.reviewLine} />
                <span className={s.reviewLine} style={{ width: "82%" }} />
                <span className={s.reviewLine} style={{ width: "64%" }} />
              </span>
              <span className={s.reviewTag}>Component preview · your reviews here</span>
            </div>
          </article>

          {data.projects.map((project) => (
            <article key={project.title} className={s.module} data-reveal>
              <span className={s.moduleKey}>Module · {project.title}</span>
              <h3 className={s.moduleTitle}>{project.title}</h3>
              <p className={s.moduleBody}>{project.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="faq" index="04" label="Questions">
        <SectionHead
          id="faq"
          kicker="Asked before every build"
          title="The questions we get first."
        />
        <div className={i.faq}>
          {data.faqs.map((faq) => (
            <details key={faq.q} className={i.faqItem} data-reveal>
              <summary className={i.faqSummary}>
                {faq.q}
                <span className={i.faqMark} aria-hidden="true" />
              </summary>
              <p className={i.faqBody}>{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="review" index="05" label="Free review">
        <div className={i.split}>
          <div>
            <SectionHead
              id="review"
              kicker="Free website review"
              title="Get a free website review"
              lede="Tell us your trade and your area. We will look at how you show up online today and reply with what we would change first, whether or not you hire us."
            />
            <div className={i.prose}>
              <p>
                <Triad size={13} lit="gold" style={{ display: "inline-block", verticalAlign: "-1px", marginRight: "0.4rem" }} />
                No pitch deck, and no discovery call before the useful part. You get a
                short written answer about your search visibility, your call paths and
                the pages you are missing.
              </p>
            </div>
          </div>
          <div data-reveal>
            <LeadForm heading={`${data.trade} — free review`} />
          </div>
        </div>
      </Section>

      <CallBar reviewHref="#review" />
    </>
  );
}

function Star() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
    </svg>
  );
}

export default IndustryPage;
