import type { Metadata } from "next";
import OfferingPage from "@/components/offering-page";
import { PRODUCT_BY_SLUG, WEBSITE_FEATURES, WEBSITE_INCLUDED } from "@/data/products";

const product = PRODUCT_BY_SLUG.websites;

export const metadata: Metadata = {
  title: "Websites",
  description:
    "Fast, mobile-first websites that turn searches into calls, quote requests and orders. Built for businesses worldwide. Request a quote.",
};

export default function WebsitesPage() {
  return (
    <OfferingPage
      product={product}
      copy={{
        whatKicker: "What a working site does",
        whatTitle: "Three things every business site needs and most are missing.",
        features: WEBSITE_FEATURES,
        includedTitle: "What comes with it.",
        includedLede:
          "These are not add-ons. They are what a working site needs to stay working.",
        included: WEBSITE_INCLUDED,
        note: {
          title: "What it costs",
          body: "A five-page site and a fifty-page multi-location build are different jobs, so the site is quoted rather than priced from a list. One call, one written scope, one fixed number.",
        },
        ctaTitle: "Get a free website review",
        ctaBody:
          "Tell us your business and where you trade. We will look at how you show up online today and reply with what we would change first, whether or not you hire us.",
      }}
    />
  );
}
