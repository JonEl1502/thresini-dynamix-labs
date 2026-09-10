import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Section from "@/components/section";
import LeadForm from "@/components/lead-form";
import Triad from "@/components/triad";
import { SITE } from "@/data/site";
import i from "@/styles/inner.module.css";
import h from "../page.module.css";

export const metadata: Metadata = {
  title: "Request a quote",
  description:
    "Request a quote from ThreSiNi Dynamix Labs. Websites, mobile applications and SaaS products for businesses in the USA, UK and Australia.",
};

const FACTS = [
  { key: "Territories", value: "USA · United Kingdom · Australia" },
  { key: "Reply time", value: "One working day, from a person" },
  { key: "First step", value: "A 45-minute call, not a questionnaire" },
  { key: "Not a fit?", value: "We say so in the first reply" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
        title="Request a quote"
        lede="Tell us what you're building and what's in the way. You get a written scope and a fixed price — and an honest answer if we're not the right studio for it."
        aside={<Triad size={220} system dimensional />}
        readouts={[
          { key: "Email", value: SITE.email },
          { key: "Markets", value: "USA · UK · Australia" },
          { key: "Quote", value: "Fixed price against a written scope" },
        ]}
      />

      <Section id="form" index="01" label="Lead form">
        <h2 id="form-title" className="visually-hidden">
          Send us a message
        </h2>
        <div className={h.contactGrid}>
          <div className={h.contactAside}>
            <div className={i.prose}>
              <p>
                One of us reads every message. If your job is outside what we do well
                we will point you somewhere better rather than take it on.
              </p>
            </div>
            <a href={`mailto:${SITE.email}`} className={h.contactMail}>
              {SITE.email}
            </a>
            <div className={h.contactFacts}>
              {FACTS.map((fact) => (
                <div key={fact.key} className={h.contactFact}>
                  <span className={h.contactFactKey}>{fact.key}</span>
                  <span>{fact.value}</span>
                </div>
              ))}
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
