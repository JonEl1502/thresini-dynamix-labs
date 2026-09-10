export type GlyphKey =
  | "electrical"
  | "hvac"
  | "plumbing"
  | "construction"
  | "agriculture"
  | "veterinary"
  | "home"
  | "more";

export interface IndustryCard {
  name: string;
  glyph: GlyphKey;
  href?: string;
  body?: string;
  /** Featured cards lead the section; the rest are listed underneath. */
  featured?: boolean;
}

/** Top solutions right now, then everywhere else the same software goes. */
export const INDUSTRIES: IndustryCard[] = [
  {
    name: "HVAC",
    glyph: "hvac",
    href: "/hvac",
    featured: true,
    body: "AC installation, heating, HVAC repair and commercial contractors — sites and apps built for demand that arrives in spikes.",
  },
  {
    name: "Electrical",
    glyph: "electrical",
    href: "/electricians",
    featured: true,
    body: "Electricians, electrical contractors, emergency and commercial electrical, EV and solar installers.",
  },
  { name: "Veterinary", glyph: "veterinary" },
  { name: "Plumbing", glyph: "plumbing", href: "/plumbers" },
  { name: "Construction", glyph: "construction" },
  { name: "Agriculture", glyph: "agriculture" },
  { name: "Home services", glyph: "home" },
  { name: "More industries", glyph: "more" },
];

export const INDUSTRIES_NOTE =
  "We also build veterinary websites and practice software — booking, records and reminders for clinics. Whatever the industry, the software underneath is the same.";
/* --------------------------------------------------------------------------
   Solution landing pages. All three share ~80% of their structure,
   so they are one template rendered from this table.
   -------------------------------------------------------------------------- */

export interface IndustryFaq {
  q: string;
  a: string;
}

export interface IndustryPageData {
  slug: "electricians" | "hvac" | "plumbers";
  /** The industry card name this page belongs to. */
  trade: string;
  glyph: GlyphKey;
  heroLine: string;
  lede: string;
  metaTitle: string;
  metaDescription: string;
  services: { title: string; body: string }[];
  areas: { region: string; examples: string[] }[];
  projects: { title: string; body: string }[];
  faqs: IndustryFaq[];
}

const SHARED_AREAS = [
  {
    region: "United States",
    examples: ["Dallas, TX", "Phoenix, AZ", "Atlanta, GA", "Denver, CO", "Tampa, FL"],
  },
  {
    region: "United Kingdom",
    examples: ["Manchester", "Leeds", "Birmingham", "Bristol", "Glasgow"],
  },
  {
    region: "Australia",
    examples: ["Brisbane", "Perth", "Adelaide", "Newcastle", "Geelong"],
  },
];

const SHARED_FAQ_TAIL: IndustryFaq[] = [
  {
    q: "What does it cost?",
    a: "Every build is quoted against a written scope, so the number matches the job rather than a bracket on a price list. Tell us the services and areas you cover and you get one fixed price with a delivery date — not an hourly estimate.",
  },
  {
    q: "Do I own the site?",
    a: "Yes. The domain stays in your name, the content is yours, and you can take an export of the whole site at any point. Nothing here is designed to trap you.",
  },
  {
    q: "What do you need from me?",
    a: "One 45-minute call. We write the content with you on that call rather than sending a 40-page questionnaire, then come back with pages to correct.",
  },
];

export const INDUSTRY_PAGES: IndustryPageData[] = [
  {
    slug: "electricians",
    trade: "Electrical",
    glyph: "electrical",
    heroLine: "Turn more searches into electrical jobs.",
    lede: "A website built for the way people actually look for an electrician: on a phone, at the moment something has stopped working, choosing between the first three results.",
    metaTitle: "Websites and software for electricians",
    metaDescription:
      "Websites, mobile apps and software for electrical contractors in the USA, UK and Australia. Request a quote.",
    services: [
      { title: "Emergency electrical", body: "The page that has to load fast and put a call button under a thumb." },
      { title: "Rewiring and upgrades", body: "Consumer units, panel upgrades, older-property rewires." },
      { title: "Commercial electrical", body: "Fit-outs, maintenance contracts, compliance and testing." },
      { title: "EV charger installation", body: "A page per charger type, because that is how people search." },
      { title: "Solar and battery", body: "Install, retrofit, and the questions homeowners ask before they call." },
      { title: "Lighting and fault-finding", body: "The smaller jobs that keep a van busy between the big ones." },
    ],
    areas: SHARED_AREAS,
    projects: [
      { title: "Project galleries", body: "Before-and-after photographs from your own jobs, laid out per service." },
      { title: "Licences and insurance", body: "Shown where a nervous customer looks for them, not buried in a footer." },
    ],
    faqs: [
      {
        q: "How long does an electrical site take to build?",
        a: "Two to four weeks for a small build, longer where there are many service areas to cover. The content call happens in week one so the rest is production, not waiting.",
      },
      {
        q: "Will it rank for my town?",
        a: "One page per service and one per area is what ranks locally, and it is what most trade sites are missing. We build that structure, set up your Google Business Profile and schema, and report on it monthly in plain English. No one honest promises a position.",
      },
      ...SHARED_FAQ_TAIL,
    ],
  },
  {
    slug: "hvac",
    trade: "HVAC",
    glyph: "hvac",
    heroLine: "Get found when customers need HVAC help.",
    lede: "HVAC demand arrives in spikes — the first hot week, the first cold snap. The site has to be ready before the spike, not built during it.",
    metaTitle: "Websites and software for HVAC contractors",
    metaDescription:
      "Websites, mobile apps and software for HVAC contractors in the USA, UK and Australia. Request a quote.",
    services: [
      { title: "AC installation", body: "Split, ducted and multi-head, with the sizing questions answered up front." },
      { title: "Heating and furnaces", body: "Install, service and the emergency no-heat call." },
      { title: "HVAC repair", body: "The page that catches the search made from a hot room." },
      { title: "Maintenance plans", body: "Recurring revenue, sold on a page instead of over the phone." },
      { title: "Commercial HVAC", body: "Rooftop units, plant rooms, planned maintenance contracts." },
      { title: "Indoor air quality", body: "Filtration, humidity and ventilation upgrades." },
    ],
    areas: SHARED_AREAS,
    projects: [
      { title: "Installation galleries", body: "Plant rooms and finished installs, tagged by system type." },
      { title: "Certifications", body: "Manufacturer accreditations and refrigerant handling shown on the service page itself." },
    ],
    faqs: [
      {
        q: "Can the site handle a seasonal spike?",
        a: "Yes. Hosting, SSL and maintenance are included, pages are static-fast, and the quote form and click-to-call are the two things we load first.",
      },
      {
        q: "Can I promote maintenance plans?",
        a: "That is usually the highest-value page on an HVAC site. It gets its own page, its own quote path, and its own automated follow-up sequence.",
      },
      ...SHARED_FAQ_TAIL,
    ],
  },
  {
    slug: "plumbers",
    trade: "Plumbing",
    glyph: "plumbing",
    heroLine: "Turn plumbing searches into paying jobs.",
    lede: "Most plumbing searches are urgent and local. The job of the site is to be legible in four seconds and put a phone number under a thumb.",
    metaTitle: "Websites and software for plumbers",
    metaDescription:
      "Websites, mobile apps and software for plumbing contractors in the USA, UK and Australia. Request a quote.",
    services: [
      { title: "Emergency plumbing", body: "24-hour callout, priced honestly, with a call button above the fold." },
      { title: "Drain cleaning", body: "Blockages, CCTV surveys and the jobs that repeat." },
      { title: "Leak detection and repair", body: "The search made while someone is standing in water." },
      { title: "Bathroom installation", body: "The considered job, with a gallery and a quote path." },
      { title: "Hot water systems", body: "Replacement, repair and the size question customers always ask." },
      { title: "Commercial plumbing", body: "Maintenance contracts and compliance for property managers." },
    ],
    areas: SHARED_AREAS,
    projects: [
      { title: "Job galleries", body: "Bathrooms, pipework and repairs, grouped by the service that sold them." },
      { title: "Licences and insurance", body: "Trade registration and public liability, shown next to the call button." },
    ],
    faqs: [
      {
        q: "Do people really book plumbers from a website?",
        a: "They call from one. Emergency plumbing traffic is overwhelmingly mobile, and the site's only job is to be the shortest path from a search result to a ringing phone.",
      },
      {
        q: "Can you handle several trading names or areas?",
        a: "Yes. Multi-location builds get one page per area with its own reviews and contact details. It is more pages, so it is a bigger scope, and the quote says so up front.",
      },
      ...SHARED_FAQ_TAIL,
    ],
  },
];

export const INDUSTRY_BY_SLUG = Object.fromEntries(
  INDUSTRY_PAGES.map((p) => [p.slug, p]),
) as Record<IndustryPageData["slug"], IndustryPageData>;
