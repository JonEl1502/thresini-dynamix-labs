import Link from "next/link";
import PageHero from "@/components/page-hero";
import Section, { SectionHead } from "@/components/section";
import CtaBand from "@/components/cta-band";
import Triad from "@/components/triad";
import { PRODUCTS, type Product } from "@/data/products";
import s from "@/styles/inner.module.css";

export interface OfferingCopy {
  /** Heading for the three-feature section. */
  whatTitle: string;
  whatKicker: string;
  features: { title: string; body: string }[];
  includedTitle: string;
  includedLede: string;
  included: string[];
  /** The closing note under the included list. */
  note: { title: string; body: string };
  ctaTitle: string;
  ctaBody: string;
}

/**
 * The three offering pages — websites, mobile applications, SaaS — share their
 * whole structure, so there is one template and three data blocks.
 */
export function OfferingPage({
  product,
  copy,
}: {
  product: Product;
  copy: OfferingCopy;
}) {
  const others = PRODUCTS.filter((p) => p.slug !== product.slug);

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/solutions", label: "What we build" },
          { label: product.name },
        ]}
        title={product.name}
        lede={product.detail[0]}
        accent={product.color}
        actions={
          <>
            <Link href="/contact" className="btn btn--primary">
              Request a quote
            </Link>
            <Link href="/solutions" className="btn btn--ghost">
              See what else we build
            </Link>
          </>
        }
        aside={<Triad size={260} lit={product.key} dimensional />}
        readouts={[
          { key: "Builds", value: product.category },
          { key: "Markets", value: "USA · UK · Australia" },
          { key: "Pricing", value: "Quoted against a written scope" },
        ]}
      />

      <Section id="what" index="01" label="What it is">
        <SectionHead id="what" kicker={copy.whatKicker} title={copy.whatTitle} />
        <div className={s.features}>
          {copy.features.map((feature, i) => (
            <article key={feature.title} className={s.feature} data-reveal>
              <span className={s.featureIndex} style={{ color: product.textOnInk }}>
                {String(i + 1).padStart(2, "0")} / 03
              </span>
              <h3 className={s.featureTitle}>{feature.title}</h3>
              <p className={s.featureBody}>{feature.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="included" index="02" label="Included" invert>
        <SectionHead
          id="included"
          kicker="No line-item surprises"
          title={copy.includedTitle}
          lede={copy.includedLede}
        />
        <ul className={s.included}>
          {copy.included.map((item, i) => (
            <li key={item} className={s.includedItem} data-reveal>
              <span className={s.includedKey}>{String(i + 1).padStart(2, "0")}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className={s.statusNote} style={{ borderLeftColor: "var(--gold-deep)" }}>
          <span className={s.statusNoteTitle}>{copy.note.title}</span>
          <p>{copy.note.body}</p>
        </div>
      </Section>

      <Section id="next" index="03" label="Then what">
        <SectionHead
          id="next"
          kicker="The other two"
          title="Most builds don't stop at one."
          lede="A site sends people to an app; an app needs a platform behind it. Whatever the mix, it is one team and one quote."
        />
        <div className={s.related}>
          {others.map((other) => (
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
        title={copy.ctaTitle}
        body={copy.ctaBody}
        primary={{ href: "/contact", label: "Request a quote" }}
        secondary={{ href: "/solutions", label: "What we build" }}
      />
    </>
  );
}

export default OfferingPage;
