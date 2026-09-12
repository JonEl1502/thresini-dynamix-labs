import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import Section, { SectionHead } from "@/components/section";
import CtaBand from "@/components/cta-band";
import LeadsConsole from "@/components/leads-console";
import Triad from "@/components/triad";
import { LEADS_PIPELINE, PRODUCTS } from "@/data/products";
import s from "@/styles/inner.module.css";

export const metadata: Metadata = {
  title: "ThreSiNi Leads",
  description:
    "ThreSiNi Leads — the prospecting product we built for ourselves: discovery, online-presence scoring and a pipeline, running on our own sales work.",
};

export default function LeadsPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/#proof", label: "Our products" },
          { label: "Leads" },
        ]}
        title="ThreSiNi Leads"
        lede="One of two products we built for ourselves. It finds businesses, scores how they show up online, and puts them in a queue with the reasons attached — and it runs on our own sales pipeline every day."
        accent="var(--green)"
        actions={
          <>
            <Link href="/contact" className="btn btn--primary">
              Request a quote
            </Link>
            <Link href="/solutions" className="btn btn--ghost">
              See what we build
            </Link>
          </>
        }
        aside={<Triad size={260} lit="green" dimensional />}
        readouts={[
          { key: "Built by", value: "Us, for us" },
          { key: "Delivers", value: "Lead generation" },
          { key: "Status", value: "Internal — in use on our own pipeline" },
        ]}
      />

      {/* The centrepiece: the working console, rebuilt in this site's own
          surface rather than screenshotted. */}
      <Section id="console" index="01" label="The console">
        <SectionHead
          id="console"
          kicker="Running today"
          title="This is the screen, not a mock-up of one."
          lede="Leads has been running inside our own admin for months. The layout below is the real thing rebuilt in this site's palette; every business, address and number in it is invented."
          wide
        />
        <div data-reveal>
          <LeadsConsole />
        </div>
      </Section>

      <Section id="pipeline" index="02" label="Pipeline" invert>
        <SectionHead
          id="pipeline"
          kicker="Discovery → Analysis → Pipeline"
          title="Three moves, and a reason attached to every score."
          lede="A score with no explanation is a guess. Each prospect carries the signals that produced its number."
        />
        <div className={s.pipeline}>
          {LEADS_PIPELINE.map((step, i) => (
            <article
              key={step.title}
              className={s.pipelineStep}
              style={{ borderLeftColor: "var(--green-deep)" }}
              data-reveal
            >
              <span className={s.pipelineIndex} style={{ color: "var(--green-deep)" }}>
                {String(i + 1).padStart(2, "0")} / 03
              </span>
              <h3 className={s.pipelineTitle}>{step.title}</h3>
              <p className={s.pipelineBody}>{step.body}</p>
            </article>
          ))}
        </div>

        <div className={s.statusNote} style={{ borderLeftColor: "var(--green-deep)" }}>
          <span className={s.statusNoteTitle}>Status</span>
          <p>
            Leads is in internal use now and opens to customers once it has earned its
            keep on our own pipeline.
          </p>
        </div>
      </Section>

      <Section id="next" index="03" label="Then what">
        <SectionHead
          id="next"
          kicker="What we build for clients"
          title="A scored prospect still needs somewhere to land."
          lede="Leads is our own tooling. The work we sell is the software itself — sites, apps and platforms."
        />
        <div className={s.related}>
          {PRODUCTS.map((other) => (
            <Link
              key={other.slug}
              href={other.href}
              className={s.relatedCard}
              style={{ borderLeft: `2px solid ${other.color}` }}
              data-reveal
            >
              <span className={s.relatedTop}>
                <Triad size={18} lit={other.key} />
                <h3 className={s.relatedName}>{other.name}</h3>
              </span>
              <p className={s.relatedBody}>{other.summary}</p>
              <span className="link-arrow" style={{ color: other.textOnInk }}>
                Open {other.name.toLowerCase()}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        index="04"
        label="Next step"
        title="Want something like this built?"
        body="Leads is the kind of internal tool we build for other people too. Tell us the manual process you want replaced and we will quote it against a written scope."
        primary={{ href: "/contact", label: "Request a quote" }}
        secondary={{ href: "/solutions", label: "What we build" }}
      />
    </>
  );
}
