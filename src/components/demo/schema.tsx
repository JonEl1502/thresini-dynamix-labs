import type { DemoService, DemoSite } from "@/data/demos";
import { SITE } from "@/data/site";

/* --------------------------------------------------------------------------
   Structured data.

   This is the part of a local site that does real work and that almost no
   trade site has: LocalBusiness with proper NAP, hours, geo and rating, plus
   FAQPage on anything with questions on it. It is also the most legible thing
   to show a prospect — "view source on your current site and look for this."

   Generated from the same data row as the visible page, so the two can never
   drift apart.
   -------------------------------------------------------------------------- */

/* Sourced from SITE.url so this can never point at a domain the footer and
   metadata don't also point at — see the comment on SITE.url for why it's
   the live Vercel URL rather than thresini.com. */
const ORIGIN = SITE.url;

function json(data: unknown) {
  return (
    <script
      type="application/ld+json"
      /* Schema payload is built here from our own data, never from user input. */
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

function business(site: DemoSite) {
  const url = `${ORIGIN}/demo/${site.slug}`;
  return {
    "@type": site.schemaType,
    "@id": `${url}#business`,
    name: site.name,
    legalName: site.legalName,
    description: site.tagline,
    url,
    telephone: site.phoneDisplay,
    email: site.email,
    foundingDate: site.established,
    priceRange: site.market === "UK" ? "££" : "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postcode,
      addressCountry: site.address.countryCode,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHours: site.schemaHours,
    areaServed: site.areas.map((area) => ({ "@type": "Place", name: area.name })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.score,
      reviewCount: site.rating.count,
      bestRating: 5,
    },
    makesOffer: site.services.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.name, description: service.summary },
      ...(service.priceFrom
        ? { priceSpecification: { "@type": "PriceSpecification", minPrice: service.priceFrom } }
        : {}),
    })),
  };
}

function faqPage(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

function crumbs(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${ORIGIN}${item.path}`,
    })),
  };
}

/** Home page: the business, its reviews and its FAQs. */
export function HomeSchema({ site }: { site: DemoSite }) {
  return json({
    "@context": "https://schema.org",
    "@graph": [
      {
        ...business(site),
        review: site.reviews.map((review) => ({
          "@type": "Review",
          author: { "@type": "Person", name: review.author },
          reviewRating: { "@type": "Rating", ratingValue: review.stars, bestRating: 5 },
          reviewBody: review.body,
        })),
      },
      faqPage(site.faqs),
    ],
  });
}

/** Service page: the service, who provides it, and the questions it answers. */
export function ServiceSchema({ site, service }: { site: DemoSite; service: DemoService }) {
  const home = `/demo/${site.slug}`;
  return json({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.name,
        description: service.summary,
        serviceType: service.name,
        provider: business(site),
        areaServed: site.areas.map((area) => ({ "@type": "Place", name: area.name })),
        ...(service.priceFrom
          ? {
              offers: {
                "@type": "Offer",
                priceSpecification: { "@type": "PriceSpecification", minPrice: service.priceFrom },
              },
            }
          : {}),
      },
      faqPage(service.faqs),
      crumbs([
        { name: site.name, path: home },
        { name: "Services", path: `${home}#services` },
        { name: service.name, path: `${home}/services/${service.slug}` },
      ]),
    ],
  });
}

/** Area page: the business, scoped to the place it serves. */
export function AreaSchema({ site, areaName, areaSlug }: { site: DemoSite; areaName: string; areaSlug: string }) {
  const home = `/demo/${site.slug}`;
  return json({
    "@context": "https://schema.org",
    "@graph": [
      { ...business(site), areaServed: { "@type": "Place", name: areaName } },
      crumbs([
        { name: site.name, path: home },
        { name: "Areas we cover", path: `${home}#areas` },
        { name: areaName, path: `${home}/areas/${areaSlug}` },
      ]),
    ],
  });
}
