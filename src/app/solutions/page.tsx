import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import Section, { SectionHead } from "@/components/section";
import CtaBand from "@/components/cta-band";
import OrbitMark from "@/components/orbit-mark";
import Triad from "@/components/triad";
import { PRODUCTS } from "@/data/products";
import { PROCESS } from "@/data/plan";
import s from "./page.module.css";

export const metadata: Metadata = {
  title: "What we build",
  description:
    "Websites, mobile applications and SaaS products for businesses in the USA, UK and Australia. Every project quoted against a written scope.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Home" }, { label: "What we build" }]}
        title="Three kinds of software product"
        lede="A website that brings in customers. A mobile app your team or your customers carry. A SaaS product with accounts, billing and an API behind it. Most engagements are one of the three; some end up being all three."
        actions={
          <>
            <Link href="/contact" className="btn btn--primary">
              Request a quote
            </Link>
            <Link href="/#proof" className="btn btn--ghost">
              See our own products
            </Link>
          </>
        }
        aside={
          <OrbitMark
            variant="full"
            palette="system"
            size={320}
            optical={false}
            animated
            drift
            cycle={60}
          />
        }
        readouts={[
          { key: "Markets", value: "USA · United Kingdom · Australia" },
          { key: "Top solutions", value: "HVAC · Electrical" },
          { key: "Pricing", value: "Fixed price against a written scope" },
        ]}
      />

      <Section id="products" index="01" label="What we build">
        <SectionHead
          id="products"
          kicker="Websites · Mobile · SaaS"
          title="Three things, done properly."
          lede="Each one is a full build: designed, written, shipped, and maintained afterwards by the people who shipped it."
        />

        <div className={s.stack}>
          {PRODUCTS.map((product, i) => (
            <article
              key={product.slug}
              className={s.block}
              style={
                {
                  "--ring": product.color,
                  "--ring-text": product.textOnInk,
                } as CSSProperties
              }
              data-reveal
            >
              <div className={s.plate}>
                <span className={s.plateOuter} aria-hidden="true" />
                <span className={s.plateRing} aria-hidden="true" />
                <Triad lit={product.key} className={s.glyph} color="currentColor" dimensional />
                <span className={s.plateIndex}>{String(i + 1).padStart(2, "0")}</span>
              </div>

              <div className={s.body}>
                <div className={s.topline}>
                  <h3 className={s.name}>{product.name}</h3>
                  <span className={s.category}>{product.category}</span>
                </div>
                <p className={s.summary}>{product.summary}</p>
                {product.detail.map((line) => (
                  <p key={line} className={s.detail}>
                    {line}
                  </p>
                ))}
                <div className={s.actions}>
                  <Link href={product.href} className="btn btn--ghost">
                    Open {product.name.toLowerCase()}
                  </Link>
                  <span className="pill">{product.status}</span>
                </div>
              </div>
              <span className="visually-hidden">{`Offering ${i + 1} of ${PRODUCTS.length}`}</span>
            </article>
          ))}
        </div>
      </Section>

      <Section id="sequence" index="02" label="How it runs">
        <SectionHead
          id="sequence"
          kicker="Talk to support"
          title="The same six steps whichever one you buy."
          lede="You are never more than a week from seeing the thing you are paying for, and the price does not move unless the scope does."
        />
        <div className={s.matrix}>
          {PROCESS.map((step, i) => (
            <div key={step.step} className={s.matrixRow} data-reveal>
              <span className={s.matrixKey}>
                {String(i + 1).padStart(2, "0")} · {step.step}
              </span>
              <span className={s.matrixValue}>{step.body}</span>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        index="03"
        label="Next step"
        title="Not sure which one you need?"
        body="Plenty of people arrive asking for a website and leave with an app, or the other way round. Tell us the problem rather than the format and we will say plainly which is the smaller, cheaper way to solve it."
        primary={{ href: "/contact", label: "Request a quote" }}
      />
    </>
  );
}
