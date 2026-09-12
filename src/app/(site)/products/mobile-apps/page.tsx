import type { Metadata } from "next";
import OfferingPage from "@/components/offering-page";
import { MOBILE_FEATURES, MOBILE_INCLUDED, PRODUCT_BY_SLUG } from "@/data/products";

const product = PRODUCT_BY_SLUG["mobile-apps"];

export const metadata: Metadata = {
  title: "Mobile applications",
  description:
    "iOS and Android applications from one codebase, with offline handling, push notifications and store submission. Request a quote.",
};

export default function MobileAppsPage() {
  return (
    <OfferingPage
      product={product}
      copy={{
        whatKicker: "What we build into every app",
        whatTitle: "An app is only finished when it is in both stores and stays there.",
        features: MOBILE_FEATURES,
        includedTitle: "What comes with it.",
        includedLede:
          "The parts teams usually discover late, budgeted from the start instead.",
        included: MOBILE_INCLUDED,
        note: {
          title: "What it costs",
          body: "Apps are quoted by scope: the screens, the integrations and whether it has to work offline. You get one fixed number against a scope document you keep.",
        },
        ctaTitle: "Have an app in mind?",
        ctaBody:
          "Tell us who uses it and what they are doing when they open it. We will come back with a scope, a price and an honest view of whether a mobile app is even the right answer.",
      }}
    />
  );
}
