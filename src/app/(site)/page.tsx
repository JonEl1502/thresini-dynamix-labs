import type { CSSProperties } from "react";
import Link from "next/link";
import Section, { SectionHead } from "@/components/section";
import HeroOrbit from "@/components/hero-orbit";
import Tesseract from "@/components/tesseract";
import Triad from "@/components/triad";
import Glyph from "@/components/glyphs";
import LeadsConsole from "@/components/leads-console";
import LeadForm from "@/components/lead-form";
import { LEADS_ROWS, PRODUCTS } from "@/data/products";
import { INDUSTRIES, INDUSTRIES_NOTE } from "@/data/industries";
import {
  OWN_PRODUCTS,
  PROBLEMS,
  PROCESS,
  QUOTE_NOTE,
  QUOTE_STEPS,
  VETERINARY_NOTE,
} from "@/data/plan";
import { SITE } from "@/data/site";
import s from "./page.module.css";

const delay = (seconds: number) => ({ "--reveal-delay": `${seconds}s` }) as CSSProperties;

/* The process track is coloured by cycling the three accents. It is decoration,
   not a taxonomy — no step "belongs" to a product. */
const STEP_ACCENTS = ["var(--gold)", "var(--green)", "var(--violet)"];

export default function Home() {
  const featured = INDUSTRIES.filter((i) => i.featured);
  const others = INDUSTRIES.filter((i) => !i.featured);

  return (
    <>
      {/* ------------------------------------------------------- 01 hero -- */}
      <section className={s.hero} aria-labelledby="hero-title">
        {/* The mark is the hero's ground, not an object beside the headline —
            with a tesseract turning behind it as the deeper construction. */}
        <div className={s.heroBackdrop} aria-hidden="true">
          <Tesseract className={s.heroTesseract} />
          <HeroOrbit />
        </div>

        <div className="shell">
          <div className={s.heroInner}>
            <div className={s.heroCopy}>
              <p className={`eyebrow ${s.heroEyebrow} reveal`} style={delay(2.85)}>
                <span>
                  <Triad size={12} system />
                  {SITE.company}
                </span>
                <span aria-hidden="true">·</span>
                <span>Software product studio</span>
              </p>

              <h1 id="hero-title" className={`${s.heroTitle} reveal`} style={delay(3)}>
                We build websites, mobile applications and SaaS products
              </h1>

              <p className={`lede ${s.heroLede} reveal`} style={delay(3.15)}>
                We design, build and ship software for businesses wherever they
                trade — then keep running it afterwards. Tell us what you need
                built and you get a fixed price against a written scope.
              </p>

              <div className={`${s.heroActions} reveal`} style={delay(3.3)}>
                <Link href="/contact" className="btn btn--primary">
                  Request a quote
                </Link>
                <Link href="/solutions" className="btn btn--ghost">
                  See what we build
                </Link>
              </div>
            </div>
          </div>

          <div className={`${s.key} reveal`} style={delay(3.45)}>
            <div className="tick-rule" />
            <div className={s.keyGrid}>
              {PRODUCTS.map((product) => (
                <Link key={product.slug} href={product.href} className={s.keyItem}>
                  <Triad size={18} lit={product.key} />
                  <span className={s.keyText}>
                    <span className={s.keyName}>{product.name}</span>
                    <span className={s.keyRole}>{product.category}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- 02 problem -- */}
      <Section id="problem" index="02" label="The problem">
        <SectionHead
          id="problem"
          kicker="Why businesses call us"
          title="Software should be an asset, not a project that never lands."
          lede="Almost everyone arrives with one of three problems, and they are the three we build for."
        />
        <div className={s.problems}>
          {PROBLEMS.map((problem, i) => (
            <article
              key={problem.title}
              className={s.problem}
              data-reveal
              style={delay(i * 0.09)}
            >
              <span className={s.problemIndex}>
                {String(i + 1).padStart(2, "0")} / 03
              </span>
              <h3 className={s.problemTitle}>{problem.title}</h3>
              <p className={s.problemBody}>{problem.body}</p>
              <div className={s.problemBar} aria-hidden="true" />
            </article>
          ))}
        </div>
      </Section>

      {/* --------------------------------------------------- 03 what we build */}
      <Section id="build" index="03" label="What we build">
        <SectionHead
          id="build"
          kicker="Three kinds of product"
          title="Websites, mobile applications, SaaS products."
          lede="That is the whole list. We would rather do three things properly than name ten on a page."
        />
        <div className={s.spec}>
          {PRODUCTS.map((product) => (
            <Link
              key={product.slug}
              href={product.href}
              className={s.specRow}
              style={{ ["--ring" as string]: product.color } as CSSProperties}
              data-reveal
            >
              <Triad lit={product.key} className={s.specGlyph} color="currentColor" />
              <span className={s.specMain}>
                <span className={s.specTopline}>
                  <span className={s.specName}>{product.name}</span>
                  <span className={s.specCategory}>{product.category}</span>
                </span>
                <span className={s.specBody}>{product.summary}</span>
              </span>
              <span className={s.specGo} style={{ color: product.textOnInk }}>
                Open
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* -------------------------------------------------- 04 solutions -- */}
      <Section id="solutions-now" index="04" label="Solutions">
        <SectionHead
          id="solutions-now"
          kicker="Where the work is today"
          title="Our top solutions right now."
          lede="Two industries we are actively building for, with pages, apps and follow-up already shaped around how they sell."
        />

        <div className={s.industries}>
          {featured.map((industry) => (
            <Link
              key={industry.name}
              href={industry.href!}
              className={s.industryPrimary}
              data-reveal
            >
              <Glyph name={industry.glyph} className={s.industryGlyph} />
              <h3 className={s.industryName}>{industry.name}</h3>
              <p className={s.industryBody}>{industry.body}</p>
              <span className={s.industryGo}>View {industry.name.toLowerCase()} →</span>
            </Link>
          ))}
        </div>

        <p className={`eyebrow ${s.othersLabel}`}>Also built for</p>
        <ul className={s.industrySecondary} data-reveal>
          {others.map((industry) => (
            <li key={industry.name} className={s.industryChip}>
              <Glyph name={industry.glyph} size={22} />
              {industry.href ? (
                <Link href={industry.href}>{industry.name}</Link>
              ) : (
                industry.name
              )}
            </li>
          ))}
        </ul>

        <p className={s.note}>
          <Triad size={13} />
          {INDUSTRIES_NOTE}
        </p>
      </Section>

      {/* ------------------------------------------------------ 05 proof -- */}
      <Section id="proof" index="05" label="Our products" invert>
        <SectionHead
          id="proof"
          kicker="Evidence, not testimonials"
          title="Software we built for ourselves and still run."
          lede="The strongest thing we can show you is a product we chose to maintain when nobody was paying us to."
        />
        {/* The VetHubCore panel sat here alongside the list. It is held back for
            now; ClinicPanel is still in the repo for when it returns. */}
        <div className={s.proofSingle}>
          <div className={s.proofList}>
            {OWN_PRODUCTS.map((item) => (
              <article key={item.name} className={s.proofItem} data-reveal>
                <div className={s.proofHead}>
                  <h3 className={s.proofName}>{item.name}</h3>
                  <span className={`pill ${item.live ? "pill--live" : ""}`}>
                    {item.status}
                  </span>
                </div>
                <p className={s.proofBody}>{item.body}</p>
              </article>
            ))}
          </div>
          <p className={s.proofAside}>{VETERINARY_NOTE}</p>
        </div>

        {/* Shown rather than described: our own prospecting console, in use. */}
        <div className={s.artefact} data-reveal>
          <p className="eyebrow">ThreSiNi Leads · in use today</p>
          <LeadsConsole rows={LEADS_ROWS.slice(0, 4)} compact />
          <Link href="/products/leads" className="link-arrow">
            Open the full console
          </Link>
        </div>
      </Section>

      {/* ---------------------------------------------------- 06 process -- */}
      <Section id="how" index="06" label="How it works">
        <SectionHead
          id="how"
          kicker="Talk → Support"
          title="Six steps from a first call to software you own."
          lede="Every one of them produces something you keep: a scope, a price, working software, the accounts in your name."
          wide
        />
        <ol className={s.processTrack}>
          {PROCESS.map((step, i) => (
            <li
              key={step.step}
              className={s.step}
              style={
                { ["--step" as string]: STEP_ACCENTS[i % STEP_ACCENTS.length] } as CSSProperties
              }
              data-reveal
            >
              <span className={s.stepNode} aria-hidden="true">
                <span className={s.stepDial}>
                  <span className={s.stepDot} />
                </span>
              </span>
              <span className={s.stepText}>
                <span className={s.stepIndex}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={s.stepName}>{step.step}</h3>
                <span className={s.stepBody}>{step.body}</span>
              </span>
            </li>
          ))}
        </ol>
      </Section>

      {/* ------------------------------------------------------ 07 quote -- */}
      <Section id="quote" index="07" label="Pricing" invert>
        <SectionHead
          id="quote"
          kicker="How we price"
          title="Every project is quoted."
          lede="One written scope, one fixed price, one delivery date. Nothing is billed by the hour and there is no configurator to guess your way through."
        />
        <div className={s.quoteSteps}>
          {QUOTE_STEPS.map((item, i) => (
            <article key={item.title} className={s.quoteStep} data-reveal style={delay(i * 0.09)}>
              <span className={s.quoteIndex}>
                {String(i + 1).padStart(2, "0")} / 03
              </span>
              <h3 className={s.quoteStepTitle}>{item.title}</h3>
              <p className={s.quoteStepBody}>{item.body}</p>
            </article>
          ))}
        </div>

        <div className={s.quoteFoot}>
          <div className={s.quoteNote}>
            <p className={s.quoteLine}>{QUOTE_NOTE}</p>
          </div>
          <Link href="/contact" className="btn btn--primary">
            Request a quote
          </Link>
        </div>
      </Section>

      {/* ---------------------------------------------------- 08 contact -- */}
      <Section id="contact" index="08" label="Contact">
        <div className={s.contactGrid}>
          <div className={s.contactAside}>
            <SectionHead
              id="contact"
              kicker="Start a project"
              title="Start a project"
              lede="Tell us what you're building and what's in the way. We'll tell you honestly whether we're the right studio for it."
            />
            <a href={`mailto:${SITE.email}`} className={s.contactMail}>
              {SITE.email}
            </a>
            <div className={s.contactFacts}>
              <div className={s.contactFact}>
                <span className={s.contactFactKey}>Where we work</span>
                <span>Worldwide, remote by default</span>
              </div>
              <div className={s.contactFact}>
                <span className={s.contactFactKey}>Reply time</span>
                <span>One working day, from a person</span>
              </div>
              <div className={s.contactFact}>
                <span className={s.contactFactKey}>First step</span>
                <span>A 45-minute call, not a questionnaire</span>
              </div>
            </div>
          </div>
          <div data-reveal>
            <LeadForm heading="Tell us what you need" />
          </div>
        </div>
      </Section>
    </>
  );
}
