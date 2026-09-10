import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Section, { SectionHead } from "@/components/section";
import CtaBand from "@/components/cta-band";
import OrbitMark from "@/components/orbit-mark";
import { OWN_PRODUCTS, VETERINARY_NOTE } from "@/data/plan";
import { SITE } from "@/data/site";
import i from "@/styles/inner.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "ThreSiNi Dynamix Labs builds websites, mobile applications and SaaS products for businesses in the USA, UK and Australia.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
        title="We ship software, then keep it running"
        lede="We build websites, mobile applications and SaaS products for businesses in the USA, the United Kingdom and Australia — and we keep running them after launch, which is the part that decides whether software was worth building."
        aside={
          <OrbitMark
            variant="full"
            palette="system"
            size={300}
            optical={false}
            animated
            drift
            cycle={60}
          />
        }
        readouts={[
          { key: "Markets", value: "USA · United Kingdom · Australia" },
          { key: "We build", value: "Websites · Mobile apps · SaaS" },
          { key: "In production", value: "Client software, maintained since launch" },
        ]}
      />

      <Section id="who" index="01" label="Who we are">
        <SectionHead
          id="who"
          kicker="Plainly"
          title="Where we work, and where we work from."
        />
        <div className={i.prose}>
          <p>
            <strong>{SITE.company}</strong> is a software studio working from Nairobi
            for clients in the USA, the United Kingdom and Australia. We build three
            kinds of thing — websites, mobile applications and SaaS products — and we
            would rather do those three properly than list ten on a page.
          </p>
          <p>
            It matters for one practical reason: software we run for Kenyan veterinary
            practices has been in production long enough to be boring. That is real
            operating evidence — uptime, billing, records, support tickets — not a
            portfolio slide. It is the reason we are comfortable telling a business in
            Tampa or Leeds that the thing will still be running in two years.
          </p>
          <p>
            HVAC and electrical contractors are where most of our current work sits,
            and veterinary practices run on software we own outright. Those are
            markets, not identity. What we actually sell is the ability to design,
            ship and operate a software product.
          </p>
        </div>
      </Section>

      <Section id="built" index="02" label="What we run" invert>
        <SectionHead
          id="built"
          kicker="Evidence, not testimonials"
          title="What we've built for ourselves"
          lede="The strongest thing we can show you is software we chose to maintain when nobody was paying us to."
        />
        <div className={i.prose}>
          {OWN_PRODUCTS.map((item) => (
            <p key={item.name}>
              <strong>{item.name}</strong> — {item.body}{" "}
              <span className={`pill ${item.live ? "pill--live" : ""}`}>
                {item.status}
              </span>
            </p>
          ))}
          <p>{VETERINARY_NOTE}</p>
        </div>
      </Section>

      <Section id="how" index="03" label="How we work">
        <SectionHead
          id="how"
          kicker="Four commitments"
          title="How an engagement actually runs."
        />
        <ul className={i.included}>
          {[
            "Every project is quoted against a written scope, with a fixed price and a date. Nothing is billed by the hour.",
            "You own the domain, the code, the app store accounts and an export of everything, always.",
            "Analytics arrive monthly as a plain-English summary, not a dashboard login you never open.",
            "If we are not the right studio for the job, we say so in the first reply.",
          ].map((line, n) => (
            <li key={line} className={i.includedItem} data-reveal>
              <span className={i.includedKey}>{String(n + 1).padStart(2, "0")}</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand index="04" label="Next step" secondary={{ href: "/solutions", label: "What we build" }} />
    </>
  );
}
