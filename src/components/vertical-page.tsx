import Link from "next/link";
import PageHero from "@/components/page-hero";
import Section, { SectionHead } from "@/components/section";
import CallBar from "@/components/call-bar";
import LeadForm from "@/components/lead-form";
import Glyph from "@/components/glyphs";
import Triad from "@/components/triad";
import { demoFor, type VerticalPageData } from "@/data/verticals";
import { SITE } from "@/data/site";
import s from "@/styles/industry.module.css";
import i from "@/styles/inner.module.css";

/* Host shown in the fake browser chrome above the demo preview — derived from
   SITE.url (not hardcoded) so it can never drift from the domain the rest of
   the site claims. See the comment on SITE.url. */
const DEMO_CHROME_HOST = new URL(SITE.url).host;

/**
 * A vertical landing page — a sales page, not documentation.
 *
 * One template, one data row per vertical, and the services and areas shown
 * are read off the live demo the page points at. The whole page is built to
 * move the reader one step: open the demo.
 */
export function VerticalPage({ data }: { data: VerticalPageData }) {
  const demo = demoFor(data);
  const demoHref = `/demo/${demo.slug}`;

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/#solutions-now", label: "Solutions" },
          { label: data.label },
        ]}
        title={data.heroLine}
        lede={data.lede}
        actions={
          <>
            <Link href={demoHref} className="btn btn--primary">
              See the live demo
            </Link>
            <Link href="#review" className="btn btn--ghost">
              Get a free review
            </Link>
          </>
        }
        aside={<Glyph name={data.glyph} size={176} />}
        readouts={[
          { key: "Built for", value: data.audience.replace(/^./, (c) => c.toUpperCase()) },
          { key: "Markets", value: "Worldwide" },
          { key: "Live demo", value: demo.name },
        ]}
      />

      {/* 01 — the demo. Everything above exists to get the reader here. */}
      <Section id="demo" index="01" label="Live demo">
        <SectionHead
          id="demo"
          kicker="See it, don't read about it"
          title="A finished site, in your line of work, that you can click around."
          lede={`${demo.name} is a complete demonstration site we built — every page, every service, every form working. It is a fictional business, so nothing on it is anyone's real trading record. Open it and picture your name on it.`}
        />

        <div className={s.demoBand}>
          <div className={s.demoFrame} data-reveal>
            <div className={s.demoChrome} aria-hidden="true">
              <span className={s.demoDots}>
                <span />
                <span />
                <span />
              </span>
              <span className={s.demoUrl}>{DEMO_CHROME_HOST}{demoHref}</span>
            </div>
            <div className={s.demoBody}>
              <h3 className={s.demoName}>{demo.name}</h3>
              <p className={s.demoTagline}>{demo.tagline}</p>
              <div className={s.demoMeta}>
                <span className={s.demoTag}>{demo.tradeLabel}</span>
                <span className={s.demoTag}>
                  {demo.address.locality}, {demo.address.region}
                </span>
              </div>
              <div className={s.demoStats}>
                <span className={s.demoStat}>
                  <span className={s.demoStatValue}>{demo.services.length}</span>
                  <span className={s.demoStatLabel}>Service pages</span>
                </span>
                <span className={s.demoStat}>
                  <span className={s.demoStatValue}>{demo.areas.length}</span>
                  <span className={s.demoStatLabel}>Area pages</span>
                </span>
                <span className={s.demoStat}>
                  <span className={s.demoStatValue}>{demo.services.length + demo.areas.length + 1}</span>
                  <span className={s.demoStatLabel}>Pages in total</span>
                </span>
              </div>
              <div className={s.demoActions}>
                <Link href={demoHref} className="btn btn--primary">
                  Open the demo
                </Link>
                <Link href="#review" className="btn btn--ghost">
                  Get yours reviewed
                </Link>
              </div>
            </div>
          </div>

          <div data-reveal>
            <h3 className={s.structureTitle}>What to look at first</h3>
            <div className={s.demoPoints}>
              {data.demoHighlights.map((point, n) => (
                <p key={point} className={s.demoPoint}>
                  <span className={s.demoPointNum} aria-hidden="true">
                    {String(n + 1).padStart(2, "0")}
                  </span>
                  <span>{point}</span>
                </p>
              ))}
            </div>
            <p className={s.demoNote}>
              <Triad size={13} lit="gold" style={{ display: "inline-block", verticalAlign: "-1px", marginRight: ".4rem" }} />
              Every demo is a fictional business and is labelled as one on every page. We
              will not put a company that does not exist online without saying so — and we
              will not invent reviews or results for yours either.
            </p>
          </div>
        </div>
      </Section>

      {/* 02 — the problem, named plainly. */}
      <Section id="problem" index="02" label="The problem" invert>
        <SectionHead
          id="problem"
          kicker="Why the site you have isn't working"
          title="Three things that cost you the enquiry."
          lede={`These are what we find on almost every ${data.audience} website we are asked to look at.`}
        />
        <div className={s.pains}>
          {data.painPoints.map((pain) => (
            <article key={pain.title} className={s.pain} data-reveal>
              <h3 className={s.painTitle}>{pain.title}</h3>
              <p className={s.painBody}>{pain.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 03 — the build. */}
      <Section id="included" index="03" label="What you get">
        <SectionHead
          id="included"
          kicker="In every build"
          title="What's actually included."
          lede="One fixed price against a written scope. Everything below is in it — there is no list of extras waiting after you sign."
        />
        <div className={s.services}>
          {data.included.map((item, n) => (
            <article key={item.title} className={s.service} data-reveal>
              <span className={s.serviceIndex}>{String(n + 1).padStart(2, "0")}</span>
              <h3 className={s.serviceTitle}>{item.title}</h3>
              <p className={s.serviceBody}>{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 04 — the structure, read straight off the demo. */}
      <Section id="structure" index="04" label="Structure">
        <SectionHead
          id="structure"
          kicker="One page per thing people search for"
          title="The structure that actually ranks locally."
          lede={`This is the page list from the ${demo.name} demo. Yours is built the same way, with your services and your areas.`}
        />
        <div className={s.structure}>
          <div data-reveal>
            <h3 className={s.structureTitle}>A page per service</h3>
            <p className={s.structureNote}>
              Each one names the job the way a customer says it, answers what it costs, and
              has its own way to get in touch.
            </p>
            <div className={s.pageList}>
              {demo.services.map((service) => (
                <Link key={service.slug} href={`${demoHref}/services/${service.slug}`} className={s.pageRow}>
                  <span>{service.name}</span>
                  <span className={s.pageSlug}>/services/{service.slug}</span>
                </Link>
              ))}
            </div>
          </div>
          <div data-reveal>
            <h3 className={s.structureTitle}>A page per area</h3>
            <p className={s.structureNote}>
              One for every town, suburb or neighbourhood you cover — each with its own copy
              rather than the same paragraph with the name swapped.
            </p>
            <div className={s.pageList}>
              {demo.areas.map((area) => (
                <Link key={area.slug} href={`${demoHref}/areas/${area.slug}`} className={s.pageRow}>
                  <span>{area.name}</span>
                  <span className={s.pageSlug}>/areas/{area.slug}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 05 — what gets reported afterwards. */}
      <Section id="measure" index="05" label="What we report" invert>
        <SectionHead
          id="measure"
          kicker="After it's live"
          title="You get told what it produced."
          lede="A monthly note in plain English. Not a forty-page dashboard nobody opens."
        />
        <div className={s.pains}>
          {data.measures.map((measure) => (
            <article key={measure.title} className={s.pain} data-reveal>
              <h3 className={s.painTitle}>{measure.title}</h3>
              <p className={s.painBody}>{measure.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="faq" index="06" label="Questions">
        <SectionHead id="faq" kicker="Asked before every build" title="The questions we get first." />
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

      <Section id="review" index="07" label="Free review">
        <div className={i.split}>
          <div>
            <SectionHead
              id="review"
              kicker="Free website review"
              title="Get a free review of your own site"
              lede={`Tell us your business and your area. We'll look at how you show up online today and reply with what we'd change first — whether or not you hire us.`}
            />
            <div className={i.prose}>
              <p>
                <Triad size={13} lit="gold" style={{ display: "inline-block", verticalAlign: "-1px", marginRight: "0.4rem" }} />
                No pitch deck, and no discovery call before the useful part. You get a short
                written answer about your search visibility, your enquiry paths and the pages
                you are missing.
              </p>
            </div>
          </div>
          <div data-reveal>
            <LeadForm heading={`${data.label} — free review`} />
          </div>
        </div>
      </Section>

      <CallBar reviewHref="#review" />
    </>
  );
}

export default VerticalPage;
