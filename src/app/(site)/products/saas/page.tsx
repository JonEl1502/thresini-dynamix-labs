import type { Metadata } from "next";
import OfferingPage from "@/components/offering-page";
import { PRODUCT_BY_SLUG, SAAS_FEATURES, SAAS_INCLUDED } from "@/data/products";

const product = PRODUCT_BY_SLUG.saas;

export const metadata: Metadata = {
  title: "SaaS applications",
  description:
    "Multi-tenant SaaS products with accounts, roles, billing, dashboards and an API — built by a team that runs one in production. Request a quote.",
};

export default function SaasPage() {
  return (
    <OfferingPage
      product={product}
      copy={{
        whatKicker: "What decides whether a SaaS survives",
        whatTitle: "The demo is the easy part.",
        features: SAAS_FEATURES,
        includedTitle: "What comes with it.",
        includedLede:
          "We run a multi-tenant product of our own in production, so this list is what we learned we needed rather than what sounds thorough.",
        included: SAAS_INCLUDED,
        note: {
          title: "What it costs",
          body: "A SaaS build is quoted in stages: a scoped first release with a fixed price, then a monthly rate for the work after launch. Nothing is billed by the hour.",
        },
        ctaTitle: "Building a product?",
        ctaBody:
          "Tell us who pays for it and what they are replacing. We will scope a first release small enough to launch and honest enough to charge for.",
      }}
    />
  );
}
