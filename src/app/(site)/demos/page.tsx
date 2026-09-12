import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import Section, { SectionHead } from "@/components/section";
import CtaBand from "@/components/cta-band";
import Glyph from "@/components/glyphs";
import OrbitMark from "@/components/orbit-mark";
import { DEMOS, MARKET_LABELS } from "@/data/demos";
import { VERTICAL_PAGES } from "@/data/verticals";
import s from "@/styles/industry.module.css";

export const metadata: Metadata = {
  title: "Live demo sites",
  description:
    "Five finished demonstration websites — electrical, veterinary, legal, HVAC and plumbing — that you can click around before commissioning your own.",
};

/** The page we send a prospect when they ask "what does one look like?" */
export default function DemosPage() {
  const byDemo = new Map(VERTICAL_PAGES.map((page) => [page.demoSlug, page]));

  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "Live demos" }]}
        title="Five finished sites you can click around."
        lede="Rather than describe what we would build, here is what we build. Each of these is a complete, working website for a business in a different line of work — every service page, every area page, every form. They are fictional companies, and each one says so on every page."
        actions={
          <>
            <Link href="/contact" className="btn btn--primary">
              Request a quote
            </Link>
            <Link href="/solutions" className="btn btn--ghost">
              What we build
            </Link>
          </>
        }
        aside={<OrbitMark size={168} variant="full" palette="system" animated drift />}
        readouts={[
          { key: "Demos", value: `${DEMOS.length} industries` },
          {
            key: "Demos set in",
            value: [...new Set(DEMOS.map((d) => d.market))].join(" · "),
          },
          { key: "Pages", value: `${DEMOS.reduce((n, d) => n + d.services.length + d.areas.length + 1, 0)} in total` },
        ]}
      />

      <Section id="demos" index="01" label="The demos">
        <SectionHead
          id="demos"
          kicker="Open any of them"
          title="One component kit, five different businesses."
          lede="These sites share their components — a services section, a reviews section, an enquiry form. What makes each one look and read like its own business is the data behind it and the design tokens on top. That is why a new industry takes days."
        />

        <div className={s.services}>
          {DEMOS.map((demo) => {
            const vertical = byDemo.get(demo.slug);
            return (
              <article key={demo.slug} className={s.service} data-reveal>
                <span className={s.serviceIndex} aria-hidden="true">
                  <Glyph name={vertical?.glyph ?? "more"} size={30} />
                </span>
                <h3 className={s.serviceTitle}>{demo.name}</h3>
                <p className={s.serviceBody}>{demo.tagline}</p>
                <div className={s.demoMeta} style={{ marginBlock: "0.9rem 0.25rem" }}>
                  <span className={s.demoTag}>{demo.tradeLabel}</span>
                  <span className={s.demoTag}>{MARKET_LABELS[demo.market]}</span>
                  <span className={s.demoTag}>
                    {demo.services.length + demo.areas.length + 1} pages
                  </span>
                </div>
                <div className={s.demoActions}>
                  <Link href={`/demo/${demo.slug}`} className="btn btn--primary">
                    Open the demo
                  </Link>
                  {vertical ? (
                    <Link href={`/${vertical.slug}`} className="btn btn--ghost">
                      {vertical.label}
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <p className={s.areaNote}>
          Every demo is a fictional business, invented for the purpose, and is labelled as a
          demonstration on every page. The telephone numbers come from the ranges each
          regulator reserves for fiction, so they cannot reach anyone. We will not put a
          company that does not exist online without saying so.
        </p>
      </Section>

      <Section id="how" index="02" label="How they work" invert>
        <SectionHead
          id="how"
          kicker="Why this matters to you"
          title="Your site is not a template of one of these."
          lede="It shares their parts, the way two houses share bricks. Your services, your areas, your prices, your reviews, your colours and your type — all of it yours, on a structure that has already been built and tested five times over."
        />
        <div className={s.pains}>
          <article className={s.pain} data-reveal>
            <h3 className={s.painTitle}>Faster, because the parts exist</h3>
            <p className={s.painBody}>
              We are not designing a reviews section from nothing for the sixth time. Most of
              a build is now your content and your design direction, which is the part that
              should take the time.
            </p>
          </article>
          <article className={s.pain} data-reveal>
            <h3 className={s.painTitle}>Better, because they are already proven</h3>
            <p className={s.painBody}>
              Accessibility, mobile behaviour, the sticky call bar, the structured data that
              puts your rating into a search result — all of it fixed once, everywhere.
            </p>
          </article>
          <article className={s.pain} data-reveal>
            <h3 className={s.painTitle}>Yours, not rented</h3>
            <p className={s.painBody}>
              The domain stays in your name, the content is yours, and you can take an export
              of the whole site whenever you like. Nothing here is designed to trap you.
            </p>
          </article>
        </div>
      </Section>

      <CtaBand
        index="03"
        title="Want one of these with your name on it?"
        body="Tell us your industry and the areas you cover. We'll come back with a fixed price against a written scope, and a free review of how you show up online today."
        secondary={{ href: "/solutions", label: "What we build" }}
      />
    </>
  );
}
