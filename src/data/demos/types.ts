/* --------------------------------------------------------------------------
   Demo sites.

   These are FICTIONAL trade businesses. They exist so a prospect can look at a
   finished site in their own trade, in their own market, and picture their name
   on it — which is a very different sales object from a page describing what we
   would build. Every one of them is labelled as a demo in the chrome.

   Rules that keep them believable, and that any new demo must follow:
     · Phone numbers come from the ranges each regulator reserves for fiction
       (US 555-01xx, Ofcom drama blocks, ACMA drama blocks), so a tel: link can
       never reach a real person.
     · Addresses, licence numbers and registration numbers are invented.
     · Spelling, currency, terminology and statutory bodies follow the market:
       a Brisbane site says "aircon" and "ARCtick", a Manchester site says
       "boiler" and "Gas Safe". Getting this wrong is the tell that a prospect
       notices first.
   -------------------------------------------------------------------------- */

export type Trade = "electrical" | "hvac" | "plumbing" | "veterinary" | "legal";

/* The markets our demo BUSINESSES trade in — not a list of who we will work
   for. We work remotely and take clients anywhere; add a country here when a
   demo is set in one. */
export type Market = "US" | "UK" | "AU";

export interface DemoReview {
  author: string;
  place: string;
  stars: 4 | 5;
  body: string;
  /** The job it came off the back of — ties reviews to services, as a real feed would. */
  job: string;
  when: string;
}

export interface DemoService {
  slug: string;
  name: string;
  /** One line, used on the home grid. */
  summary: string;
  /** Search-intent headline for the service page itself. */
  headline: string;
  lede: string;
  /** "Call us if…" — the symptoms a customer recognises before they know the trade word. */
  signs: string[];
  /** What the visit actually includes. */
  includes: string[];
  /** Price guidance. Trade sites that publish a floor convert better than ones that don't. */
  priceFrom?: string;
  priceNote?: string;
  faqs: { q: string; a: string }[];
  /** Which scene illustration the page leads with. */
  scene: string;
  /** Photograph for the service page and the services grid. */
  image: string;
}

/* --------------------------------------------------------------------------
   Section layout variants.

   Theming alone was not enough — five sites on one section order still read as
   one template recoloured. So each section has real structural variants and a
   demo picks one per section, plus its own section order. The components stay
   shared; what differs is which arrangement a demo asks for.
   -------------------------------------------------------------------------- */

export type HeroLayout = "cinematic" | "split" | "editorial" | "magazine" | "stack";
export type ServicesLayout = "numbered" | "photoTiles" | "ledger" | "alternating" | "iconGrid";
export type ReviewsLayout = "strip" | "soft" | "feature" | "columns" | "quilt";
export type AreasLayout = "chips" | "photoList" | "textColumns" | "tiles";

/* How a visitor gets into the enquiry form. Borrowed from the collapsible
   "Book an appointment" bar on Westlands Paws — a form that sits shut at the
   foot of the page and opens when someone actually asks to book, rather than a
   full screen of fields everyone scrolls past. Each demo gets a different way
   in, because the decision each one is asking for is different: an emergency
   electrician triages, a solicitor asks what the matter is, an HVAC firm asks
   which job. */
export type BookingLayout = "collapse" | "steps" | "chips" | "tabs" | "split";

export type SectionKey =
  | "services" | "reasons" | "reviews" | "areas" | "work" | "quote" | "faq" | "gallery" | "stats";

export interface DemoLayout {
  hero: HeroLayout;
  services: ServicesLayout;
  reviews: ReviewsLayout;
  areas: AreasLayout;
  booking: BookingLayout;
  /** Section order down the home page. */
  order: SectionKey[];
}

export interface DemoArea {
  slug: string;
  name: string;
  /** Neighbourhoods, suburbs or districts inside it. */
  within: string[];
  blurb: string;
  responseTime: string;
}

export interface DemoSite {
  slug: string;
  name: string;
  /** Shown in the footer and the schema, the way a real company files it. */
  legalName: string;
  monogram: string;
  trade: Trade;
  tradeLabel: string;
  market: Market;
  /** schema.org type for this line of work — Electrician, Plumber, VeterinaryCare… */
  schemaType: string;
  /** The ThreSiNi landing page this demo is the proof for. */
  landing: string;
  currency: string;
  established: string;
  tagline: string;

  phoneDisplay: string;
  email: string;
  address: {
    street: string;
    locality: string;
    region: string;
    postcode: string;
    country: string;
    countryCode: string;
  };
  geo: { lat: number; lng: number };
  hours: { days: string; hours: string }[];
  /** Schema.org openingHours strings. */
  schemaHours: string[];
  emergencyLine: string;

  /** Licence, registration and insurance — where a nervous customer looks. */
  credentials: { label: string; value: string }[];
  /** Short badges for the trust strip under the hero. */
  badges: string[];

  rating: { score: number; count: number };

  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    points: string[];
    /** The one promise the whole page is built around. */
    promise: string;
  };

  stats: { value: string; label: string }[];
  services: DemoService[];
  areas: DemoArea[];
  reviews: DemoReview[];
  /** "Why us" — the three objections this trade hears most. */
  reasons: { title: string; body: string }[];
  /** Recent jobs, the way a real site lists them. */
  work: { title: string; place: string; body: string }[];
  faqs: { q: string; a: string }[];
  /** Options in the enquiry form's job-type select. */
  jobTypes: string[];
  /* What the site asks visitors to DO. A plumber asks for a callback and a vet
     asks for an appointment; the kit renders whichever this says, so no
     component carries trade-specific wording. */
  cta: {
    /** Full button label — "Request a callback", "Book an appointment". */
    action: string;
    /** Short label for the sticky mobile bar. */
    short: string;
    formTitle: string;
    formNote: string;
    /** Label above the job-type select. */
    jobLabel: string;
  };
  /** The reassurance line printed under every price. */
  pricingNote: string;

  /** What happens after the form is sent — shown beside it. */
  expect: string[];

  /** Photography. Paths under /public/demo/<vertical>/. */
  photos: {
    /** Lead image for the hero. */
    hero: string;
    /** Supporting images — used by the hero collage and the gallery band. */
    gallery: string[];
    /** Optional second feature image for the reasons/quote bands. */
    feature?: string;
  };

  layout: DemoLayout;
  /** Payment / finance line — trades sell on this constantly. */
  finance: { title: string; body: string };
}

/** Tel: href — strip everything a dialler cannot use. */
export function telHref(display: string): string {
  return `tel:${display.replace(/[^\d+]/g, "")}`;
}
