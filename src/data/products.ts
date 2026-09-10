import type { TriadRing } from "@/components/triad";

export interface Product {
  slug: "websites" | "mobile-apps" | "saas";
  /** Colour key only. The mark is a mark; it is not a story about the work. */
  key: TriadRing;
  name: string;
  category: string;
  href: string;
  /** Accent hue for graphics. Never use this for small text on --paper. */
  color: string;
  /** AA-safe text colour on --ink. */
  textOnInk: string;
  /** AA-safe text colour on --paper. */
  textOnPaper: string;
  summary: string;
  detail: string[];
  status: string;
  /** Three capabilities, verbatim from the service pages. */
  capabilities: string[];
}

/** The core of the business: three kinds of software product, nothing else. */
export const PRODUCTS: Product[] = [
  {
    slug: "websites",
    key: "gold",
    name: "Websites",
    category: "Marketing and commerce sites",
    href: "/products/websites",
    color: "var(--gold)",
    textOnInk: "var(--gold)",
    textOnPaper: "var(--gold-deep)",
    summary:
      "Fast, mobile-first sites that turn searches into calls, quote requests and orders. Service pages, location pages, reviews, click-to-call.",
    detail: [
      "Built mobile-first, because that is where the customer is when they decide. The pages search engines expect, the buttons customers actually press, and a content management setup your own team can run.",
    ],
    status: "Available",
    capabilities: [
      "Marketing and service sites",
      "Search and content structure",
      "Quote, call and checkout paths",
    ],
  },
  {
    slug: "mobile-apps",
    key: "green",
    name: "Mobile applications",
    category: "iOS and Android",
    href: "/products/mobile-apps",
    color: "var(--green)",
    textOnInk: "var(--green)",
    textOnPaper: "var(--green-deep)",
    summary:
      "Native-feeling apps for iOS and Android from one codebase, with offline handling, push notifications and a release process that does not stall in review.",
    detail: [
      "One codebase, both stores, shipped through your own developer accounts so the app stays yours. Offline-first where the work happens away from signal, and an over-the-air update path for the fixes that should not wait a week.",
    ],
    status: "Available",
    capabilities: [
      "iOS and Android from one codebase",
      "Offline, sync and push",
      "Store submission and releases",
    ],
  },
  {
    slug: "saas",
    key: "violet",
    name: "SaaS applications",
    category: "Multi-tenant platforms",
    href: "/products/saas",
    color: "var(--violet)",
    textOnInk: "var(--violet-lift)",
    textOnPaper: "var(--violet-deep)",
    summary:
      "Multi-tenant products with accounts, roles, billing, dashboards and an API — built to be operated for years, not demoed once.",
    detail: [
      "We run one of these ourselves, in production, for paying customers. Tenancy, permissions, billing, audit trails, backups and the boring operational work are the parts that decide whether a SaaS survives its second year.",
    ],
    status: "Available",
    capabilities: [
      "Accounts, roles and tenancy",
      "Billing and subscriptions",
      "Dashboards, reporting and API",
    ],
  },
];

export const PRODUCT_BY_SLUG = Object.fromEntries(
  PRODUCTS.map((p) => [p.slug, p]),
) as Record<Product["slug"], Product>;

export const WEBSITE_FEATURES = [
  {
    title: "Pages built to be found",
    body: "One page per service, one per place you trade in. This is what ranks locally, and it is what most small-business websites are missing.",
  },
  {
    title: "Quote and call paths",
    body: "Click-to-call, WhatsApp, and a quote form that reaches you in under a minute. Every page has one of them above the fold.",
  },
  {
    title: "Proof where it counts",
    body: "Google reviews pulled in live, project photos, licences and insurance shown where a cautious customer looks for them.",
  },
];

export const WEBSITE_INCLUDED = [
  "Hosting, SSL and monthly maintenance",
  "Search setup: Google Business Profile, sitemap, schema, local SEO basics",
  "Analytics with a monthly summary in plain English",
  "Content written with you in a 45-minute call, not a 40-page questionnaire",
  "Automated follow-ups: quote chasers, reminders and review requests by email, SMS or WhatsApp",
];

export const MOBILE_FEATURES = [
  {
    title: "One codebase, both stores",
    body: "iOS and Android built together, so a change ships to both instead of being budgeted twice.",
  },
  {
    title: "Works without signal",
    body: "Local storage and sync for the jobs that happen in a basement, a plant room or a paddock. Nothing is lost when the bars are.",
  },
  {
    title: "Shipped, not just built",
    body: "Store listings, review submission, crash reporting and an over-the-air update path for the fixes that should not wait.",
  },
];

export const MOBILE_INCLUDED = [
  "Published under your own Apple and Google developer accounts",
  "Push notifications and deep links",
  "Crash and usage reporting from day one",
  "A shared backend with your website or SaaS, not a second source of truth",
];

export const SAAS_FEATURES = [
  {
    title: "Tenancy and permissions",
    body: "Accounts, organisations, roles and invitations designed once, at the start, where they are cheap to get right.",
  },
  {
    title: "Billing that reconciles",
    body: "Plans, trials, upgrades, invoices and failed payments — wired to Stripe or your processor of choice and tested against real edge cases.",
  },
  {
    title: "Operable for years",
    body: "Audit trails, backups, monitoring and a deployment path a small team can run without a platform engineer on call.",
  },
];

export const SAAS_INCLUDED = [
  "Multi-tenant data model with per-tenant isolation",
  "Admin console for your own support team",
  "Reporting, exports and a documented API",
  "Staging and production environments with a repeatable deploy",
];

export const LEADS_PIPELINE = [
  {
    title: "Discovery",
    body: "Businesses are found from public listings and directories across an industry and territory.",
  },
  {
    title: "Analysis and scoring",
    body: "Website, search visibility, reviews and social presence are checked and turned into one opportunity score.",
  },
  {
    title: "Pipeline",
    body: "Scored prospects land in a queue with the reason they scored, so outreach starts from evidence.",
  },
];

/* --------------------------------------------------------------------------
   ThreSiNi Leads — the shipped console, rebuilt natively in this site's dark
   instrument style rather than screenshotted.

   The STRUCTURE below is the real screen: two tabs, five status filters, the
   PRACTICE / WHERE / CONTACT / SCORE / STATUS columns, and the amber
   "NO EMAIL YET" state that a working prospecting queue always carries.

   Every ROW is invented. The live screen holds real businesses' emails and
   phone numbers and is never reproduced here.
   -------------------------------------------------------------------------- */

export const LEADS_TABS = [
  { label: "Demo requests", count: 3, active: false },
  { label: "Potential clients", count: 53, active: true },
];

export const LEADS_FILTERS = [
  { label: "All", count: null as number | null, active: false },
  { label: "New", count: 53, active: true },
  { label: "Contacted", count: null as number | null, active: false },
  { label: "Converted", count: null as number | null, active: false },
  { label: "Dismissed", count: null as number | null, active: false },
];

export const LEADS_STRAPLINE =
  "Researched practices we are going after — call them, record that you did, create the account";

/** Truthful caption. The 53 live prospects are veterinary, not trades. */
export const LEADS_CAPTION =
  "ThreSiNi Leads, running today. The same engine currently works our own veterinary pipeline; the view below is illustrative.";

export type LeadBand = "HIGH" | "MEDIUM";

export interface LeadRow {
  id: string;
  practice: string;
  type: string;
  town: string;
  country: string;
  email: string | null;
  phone: string;
  score: number;
  band: LeadBand;
  status: string;
}

export const LEADS_ROWS: LeadRow[] = [
  {
    id: "CL-0023",
    practice: "Harrow Lane Electrical",
    type: "Electrical contractor",
    town: "Leeds",
    country: "UK",
    email: null,
    phone: "+44 113 496 0182",
    score: 87,
    band: "HIGH",
    status: "NEW",
  },
  {
    id: "CL-0024",
    practice: "Bayline Heating & Air",
    type: "HVAC contractor",
    town: "Tampa, FL",
    country: "US",
    email: "office@baylineheating.example",
    phone: "+1 813 555 0164",
    score: 85,
    band: "HIGH",
    status: "NEW",
  },
  {
    id: "CL-0025",
    practice: "Southbank Plumbing Co.",
    type: "Plumbing contractor",
    town: "Brisbane, QLD",
    country: "AU",
    email: null,
    phone: "+61 7 5550 3318",
    score: 84,
    band: "HIGH",
    status: "NEW",
  },
  {
    id: "CL-0026",
    practice: "Marek & Sons Electric",
    type: "Emergency electrical",
    town: "Denver, CO",
    country: "US",
    email: "dispatch@mareksons.example",
    phone: "+1 720 555 0107",
    score: 72,
    band: "MEDIUM",
    status: "NEW",
  },
  {
    id: "CL-0027",
    practice: "Kestrel Climate Control",
    type: "Commercial HVAC",
    town: "Manchester",
    country: "UK",
    email: "hello@kestrelclimate.example",
    phone: "+44 161 496 0344",
    score: 71,
    band: "MEDIUM",
    status: "NEW",
  },
  {
    id: "CL-0028",
    practice: "Redgum Drainage",
    type: "Drain cleaning",
    town: "Adelaide, SA",
    country: "AU",
    email: null,
    phone: "+61 8 5550 7729",
    score: 70,
    band: "MEDIUM",
    status: "NEW",
  },
  {
    id: "CL-0029",
    practice: "Fairweather Solar & Electric",
    type: "Solar installer",
    town: "Phoenix, AZ",
    country: "US",
    email: "team@fairweathersolar.example",
    phone: "+1 602 555 0192",
    score: 69,
    band: "MEDIUM",
    status: "NEW",
  },
  {
    id: "CL-0030",
    practice: "Pennine Pipeworks",
    type: "Plumbing contractor",
    town: "Bristol",
    country: "UK",
    email: "admin@penninepipeworks.example",
    phone: "+44 117 496 0255",
    score: 68,
    band: "MEDIUM",
    status: "NEW",
  },
];
