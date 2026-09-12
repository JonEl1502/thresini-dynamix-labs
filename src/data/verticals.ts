import type { GlyphKey } from "./industries";
import { DEMO_BY_SLUG } from "./demos";
import type { DemoSite } from "./demos";

/* --------------------------------------------------------------------------
   Vertical landing pages.

   These are sales pages, not documentation. Each one exists to do one thing:
   get a contractor, a practice owner or a partner to open the live demo for
   their own trade and think "I want that." So the demo is the centrepiece of
   the page, not a footnote at the bottom.

   The services and service areas shown on each page are read straight off the
   demo site it points at, so the pitch and the proof cannot drift apart — and
   adding a vertical means adding a demo plus one row here.
   -------------------------------------------------------------------------- */

export interface VerticalPageData {
  slug: string;
  /** How the vertical is named in navigation and breadcrumbs. */
  label: string;
  /** Plural noun for the customer, used in running copy. */
  audience: string;
  glyph: GlyphKey;
  demoSlug: string;

  metaTitle: string;
  metaDescription: string;
  heroLine: string;
  lede: string;

  /** What it costs them today. Named plainly, no hedging. */
  painPoints: { title: string; body: string }[];
  /** What to actually click on in the demo. */
  demoHighlights: string[];
  /** What a build includes. */
  included: { title: string; body: string }[];
  /** What we report on afterwards. */
  measures: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
}

const SHARED_FAQS = [
  {
    q: "What does it cost?",
    a: "Every build is quoted against a written scope, so the number matches the job rather than a bracket on a price list. Tell us your services and the areas you cover and you get one fixed price with a delivery date — not an hourly estimate.",
  },
  {
    q: "Do I own the site?",
    a: "Yes. The domain stays in your name, the content is yours, and you can take an export of the whole site at any point. Nothing here is designed to trap you.",
  },
  {
    q: "What do you need from me?",
    a: "One 45-minute call. We write the content with you on that call rather than sending a 40-page questionnaire, then come back with pages for you to correct.",
  },
];

export const VERTICAL_PAGES: VerticalPageData[] = [
  {
    slug: "electricians",
    label: "Electrical",
    audience: "electrical contractors",
    glyph: "electrical",
    demoSlug: "brightwire-electric",
    metaTitle: "Websites for electricians that bring in calls",
    metaDescription:
      "We build websites for electrical contractors worldwide. See a live demo site, then get a free review of your own.",
    heroLine: "A site that turns electrical searches into ringing phones.",
    lede:
      "Most people look for an electrician on a phone, at the moment something has stopped working, and they call one of the first three results. We build the site that gets into those three and makes calling it the easiest thing on the screen.",
    painPoints: [
      {
        title: "One page for six trades",
        body: "A single 'Services' page listing everything you do ranks for none of it. Someone searching 'panel upgrade' lands on a generic page, does not see their problem named, and goes back.",
      },
      {
        title: "The number is at the bottom",
        body: "An emergency call is made in under a minute. If a thumb has to scroll to find your number, the call goes to whoever put theirs at the top.",
      },
      {
        title: "Nothing proves you are real",
        body: "Licence number, insurance, how long you have been trading and what other customers said. Missing all four is why a nervous homeowner rings the next result instead.",
      },
    ],
    demoHighlights: [
      "Tap the number in the header — it dials, from any page",
      "Open a service page and see how one job gets one page",
      "Open an area page and see how one town gets one page",
      "Fill the quote form in — it works, and nothing is stored",
    ],
    included: [
      { title: "A page for every service", body: "Emergency, panel upgrades, EV chargers, rewiring — each with its own page, its own copy and its own quote path." },
      { title: "A page for every area", body: "One per town or suburb you cover. This is the structure that ranks locally and it is what most trade sites are missing." },
      { title: "Click-to-call everywhere", body: "In the header, in a sticky mobile bar, and beside every price. Never more than a thumb-reach away." },
      { title: "A quote form that works", body: "Short, on every page, and wired to your inbox or your CRM. No fourteen-field questionnaire." },
      { title: "Your licence and insurance, visible", body: "Shown where a cautious customer looks for them, not buried in a footer." },
      { title: "Google Business Profile and schema", body: "Set up properly, with the structured data that puts your rating and hours into the search result itself." },
      { title: "Your real reviews, live", body: "Pulled from your Google profile so they cannot drift from what customers actually wrote." },
      { title: "Hosting, SSL and changes", body: "Included. You ring us when a price changes; you do not learn a content system." },
    ],
    measures: [
      { title: "Calls from the site", body: "Every click-to-call is tracked, so you know what the site actually produced rather than guessing." },
      { title: "Quote requests", body: "Counted per service and per area, so you can see which pages earn their keep." },
      { title: "Where you rank", body: "For your services in your towns, reported monthly in plain English. No one honest promises a position." },
    ],
    faqs: [
      {
        q: "How long does it take?",
        a: "Two to four weeks for a small build, longer where there are many service areas to cover. The content call happens in week one, so the rest is production rather than waiting on you.",
      },
      {
        q: "Will it rank for my town?",
        a: "One page per service and one per area is what ranks locally, and it is what most trade sites are missing. We build that structure, set up your Google Business Profile and schema, and report on it monthly. Nobody honest guarantees a position.",
      },
      ...SHARED_FAQS,
    ],
  },
  {
    slug: "veterinary",
    label: "Veterinary",
    audience: "veterinary practices",
    glyph: "veterinary",
    demoSlug: "willow-creek-vet",
    metaTitle: "Websites for veterinary practices that fill the diary",
    metaDescription:
      "Websites and practice software for veterinary clinics worldwide. See a live demo clinic site, then get a free review of your own.",
    heroLine: "A clinic site that fills tomorrow's appointment book.",
    lede:
      "Pet owners choose a practice on trust, and they decide in about eight seconds. We build the site that answers what they are actually anxious about — cost, waiting, whether their animal will be frightened — and makes booking the obvious next step.",
    painPoints: [
      {
        title: "No prices anywhere",
        body: "The first question every new client has is what a consultation costs. Practices that answer it convert; practices that make people ring to find out lose them to the one that published a number.",
      },
      {
        title: "Booking means phoning at 9am",
        body: "The front desk is the busiest phone in the building at exactly the hour everyone is told to ring. Every engaged tone is a client trying the practice down the road.",
      },
      {
        title: "The anxiety is never addressed",
        body: "Nervous dog, a cat that hates the carrier, a bill they are dreading. Say how you handle those and you win the client before they arrive.",
      },
    ],
    demoHighlights: [
      "Read the service pages — every one names what it costs",
      "Look at how the dental page answers the anaesthesia fear directly",
      "Open an area page and see how one neighbourhood gets one page",
      "Use the appointment form — it works, and nothing is stored",
    ],
    included: [
      { title: "A page for every service", body: "Wellness, dental, surgery, urgent care, senior care — each answering the questions owners actually ask before they ring." },
      { title: "Prices where people look", body: "A published consultation fee and a from-price on each service. It is the single biggest difference between a site that converts and one that does not." },
      { title: "Online booking or a request form", body: "Wired into your practice management system where it supports it, and a short request form where it does not." },
      { title: "New client registration", body: "Done before they arrive, so the first visit starts on time and the front desk is not taking details at the counter." },
      { title: "Your team, properly introduced", body: "People choose a vet, not a building. Photographs, names and what each of them is known for." },
      { title: "Accreditations shown", body: "AAHA, Fear Free, Cat Friendly, RCVS — whichever apply, displayed where a cautious owner looks." },
      { title: "Emergency and out-of-hours", body: "Answered clearly on every page, because that is the search someone makes at 11pm." },
      { title: "Hosting, SSL and changes", body: "Included. You ring us when a price or a team member changes." },
    ],
    measures: [
      { title: "Appointments booked", body: "From the site, by service, so you know which pages fill the diary." },
      { title: "New client registrations", body: "Counted and attributed, so growth is a number rather than a feeling." },
      { title: "Where you rank", body: "For your services in your neighbourhoods, reported monthly in plain English." },
    ],
    faqs: [
      {
        q: "Can it connect to our practice management system?",
        a: "Usually. We have built against the common ones and we will tell you honestly at the scoping call what your system will and will not let a website do. Where live booking is not possible we build a request form that lands with the front desk.",
      },
      {
        q: "Should we really publish our prices?",
        a: "For the consultation fee and a from-price per service, yes — and the practices that do it consistently report better-qualified enquiries, not worse. What people cannot find out, they assume the worst about.",
      },
      {
        q: "Do you build practice software as well as sites?",
        a: "We do. Appointments, records, reminders and billing — we have built and still run veterinary software in production. If the website is the first step and the system is the second, we can do both, and we will tell you if you only need the first.",
      },
      ...SHARED_FAQS,
    ],
  },
  {
    slug: "law-firms",
    label: "Legal",
    audience: "law firms",
    glyph: "legal",
    demoSlug: "marlowe-finch-solicitors",
    metaTitle: "Websites for law firms that generate enquiries",
    metaDescription:
      "Websites for solicitors and law firms worldwide. See a live demo firm site, then get a free review of your own.",
    heroLine: "A firm's site that turns a worried search into an enquiry.",
    lede:
      "People contacting a solicitor are usually frightened of two things: what it will cost, and being treated like a file number. A site that answers both plainly gets the enquiry. Most firm websites answer neither.",
    painPoints: [
      {
        title: "Written for other lawyers",
        body: "Practice-area pages full of statute references and the firm's own history. The person reading it wants to know whether you can help with the thing that happened to them last Tuesday.",
      },
      {
        title: "No indication of cost",
        body: "'Contact us for a quote' is the reason someone leaves for the firm that published a fixed fee or said the first conversation is free.",
      },
      {
        title: "Nothing about deadlines",
        body: "Three years for an injury claim, three months for a tribunal. Firms that say this plainly get the call today instead of in six weeks.",
      },
    ],
    demoHighlights: [
      "Read a practice-area page — written for the client, not the profession",
      "See how each one names a fee, a free consultation or no-win-no-fee",
      "Look at how the employment page leads with the three-month deadline",
      "Use the case review form — it works, and nothing is stored",
    ],
    included: [
      { title: "A page per practice area", body: "Injury, family, employment, wills, property, disputes — each written for the person with the problem, not for the profession." },
      { title: "Costs answered honestly", body: "Fixed fees where the work allows one, free first consultation, or no win no fee — stated on the page rather than hidden behind a contact form." },
      { title: "Deadlines stated plainly", body: "Limitation periods named on the page that needs them. It is the most useful thing a firm's website can tell someone, and almost none of them do." },
      { title: "Your solicitors, introduced", body: "Named, with their area and their direct line. Clients instruct people." },
      { title: "Regulatory details shown", body: "SRA or bar number, accreditations and complaints procedure, where a client can actually find them." },
      { title: "An enquiry form that works", body: "Short, on every page, routed to the right team rather than a general inbox." },
      { title: "Local search set up", body: "Google Business Profile and structured data, so the firm shows up for the searches made in your city." },
      { title: "Hosting, SSL and changes", body: "Included. You ring us when a fee or a team member changes." },
    ],
    measures: [
      { title: "Enquiries by practice area", body: "So you can see which areas the site actually feeds, and which need work." },
      { title: "Calls from the site", body: "Tracked per page, so marketing spend stops being guesswork." },
      { title: "Where you rank", body: "For your practice areas in your city, reported monthly in plain English." },
    ],
    faqs: [
      {
        q: "Will it meet our regulator's requirements?",
        a: "We build to the disclosure rules that apply to you — SRA transparency rules in England and Wales, and the equivalent bar and state rules elsewhere. You and your compliance officer approve every page before it goes live.",
      },
      {
        q: "Do we have to publish prices?",
        a: "In some jurisdictions and for some work, you already must. Where it is optional, firms that publish a fixed fee or say clearly that the first conversation is free consistently get better-qualified enquiries.",
      },
      {
        q: "Can you handle several offices or practice areas?",
        a: "Yes. Multi-office builds get a page per office with its own details and its own local search setup. It is more pages, so it is a bigger scope, and the quote says so up front.",
      },
      ...SHARED_FAQS,
    ],
  },
  {
    slug: "hvac",
    label: "HVAC",
    audience: "HVAC contractors",
    glyph: "hvac",
    demoSlug: "coastline-air",
    metaTitle: "Websites for HVAC contractors that bring in jobs",
    metaDescription:
      "We build websites for HVAC and air conditioning contractors worldwide. See a live demo site, then get a free review of your own.",
    heroLine: "Be ready before the first hot week, not during it.",
    lede:
      "HVAC demand arrives in spikes — the first heatwave, the first cold snap. The contractors who win those weeks had the site, the pages and the booking path in place a month earlier. The ones who did not spent the spike answering a phone that was not ringing.",
    painPoints: [
      {
        title: "Built during the spike, not before it",
        body: "By the time it is 38 degrees, the search results are already decided. A site started in November does not rank in December.",
      },
      {
        title: "Maintenance plans sold only by phone",
        body: "The highest-value, most predictable revenue an HVAC business has, and on most sites it does not even have a page." },
      {
        title: "No sizing help anywhere",
        body: "The question every customer has is what size unit they need. Answer it on the page and you get the enquiry; leave it out and they keep looking.",
      },
    ],
    demoHighlights: [
      "Open the split system page — sizing is answered before the price",
      "See how the repair page catches the search made from a hot room",
      "Open an area page and see how one suburb gets one page",
      "Use the free quote form — it works, and nothing is stored",
    ],
    included: [
      { title: "A page for every service", body: "Installation, ducted, repairs, servicing, commercial — each with its own page and its own quote path." },
      { title: "A page for every area", body: "One per suburb or town you cover. This is what a local search actually finds." },
      { title: "A maintenance plan page", body: "Usually the highest-value page on an HVAC site: its own page, its own sign-up path and its own follow-up." },
      { title: "Click-to-call everywhere", body: "Header, sticky mobile bar, and beside every price." },
      { title: "Sizing answered up front", body: "The question every customer has, answered on the page instead of held back for the call." },
      { title: "Built for the spike", body: "Static-fast pages, hosting and SSL included, so a heatwave week does not take the site down." },
      { title: "Your real reviews, live", body: "Straight from your Google profile, so nothing drifts from what customers wrote." },
      { title: "Hosting, SSL and changes", body: "Included. You ring us when a price changes." },
    ],
    measures: [
      { title: "Calls and quote requests", body: "Tracked per service and per area, so you know which pages earned the season." },
      { title: "Maintenance plan sign-ups", body: "Counted separately, because it is the number that smooths out your year." },
      { title: "Where you rank", body: "For your services in your suburbs, reported monthly in plain English." },
    ],
    faqs: [
      {
        q: "Can the site handle a seasonal spike?",
        a: "Yes. Hosting, SSL and maintenance are included, the pages are static-fast, and the quote form and click-to-call are the two things we load first.",
      },
      {
        q: "Can I promote maintenance plans?",
        a: "That is usually the highest-value page on an HVAC site. It gets its own page, its own quote path and its own automated follow-up sequence.",
      },
      ...SHARED_FAQS,
    ],
  },
  {
    slug: "plumbers",
    label: "Plumbing",
    audience: "plumbing contractors",
    glyph: "plumbing",
    demoSlug: "halden-plumbing",
    metaTitle: "Websites for plumbers that bring in calls",
    metaDescription:
      "We build websites for plumbing and heating contractors worldwide. See a live demo site, then get a free review of your own.",
    heroLine: "Be the plumber they can ring in four seconds.",
    lede:
      "Most plumbing searches are urgent, local and made on a phone while something is going wrong. The site's only job is to be legible immediately and put your number under a thumb. Almost everything else is decoration.",
    painPoints: [
      {
        title: "Too slow to load, too slow to read",
        body: "Someone standing in water gives a site about four seconds. A slideshow and a stock photo of a smiling engineer costs you the call.",
      },
      {
        title: "A call-out charge nobody mentions",
        body: "The single biggest hesitation before ringing a plumber is not knowing what picking up the phone will cost. Say it and you get the call.",
      },
      {
        title: "No proof of registration",
        body: "Gas Safe, trade registration, public liability. Missing them is why a customer rings the next result instead of yours.",
      },
    ],
    demoHighlights: [
      "Tap the number in the header — it dials, from any page",
      "See how the emergency page tells you where your stopcock is first",
      "Open an area page and see how one town gets one page",
      "Use the callback form — it works, and nothing is stored",
    ],
    included: [
      { title: "A page for every service", body: "Emergency, boilers, bathrooms, drains, landlord certificates — each with its own page and its own call path." },
      { title: "A page for every area", body: "One per town or suburb you cover. It is what ranks locally and it is what most plumbing sites lack." },
      { title: "Click-to-call everywhere", body: "Header, sticky mobile bar, and beside every price. That one element does most of the work." },
      { title: "Your charges stated", body: "Call-out fee or the absence of one, and a from-price per job. It is the hesitation that stops people ringing." },
      { title: "Registration shown", body: "Gas Safe or local equivalent, and public liability, displayed next to the call button." },
      { title: "Built to load instantly", body: "Static-fast pages, because four seconds is the whole budget." },
      { title: "Your real reviews, live", body: "Straight from your Google profile." },
      { title: "Hosting, SSL and changes", body: "Included. You ring us when something changes." },
    ],
    measures: [
      { title: "Calls from the site", body: "Every click-to-call tracked, per page, so you know what the site produced." },
      { title: "Callback requests", body: "Counted per service and per area." },
      { title: "Where you rank", body: "For your services in your towns, reported monthly in plain English." },
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
      ...SHARED_FAQS,
    ],
  },
];

export const VERTICAL_BY_SLUG = Object.fromEntries(
  VERTICAL_PAGES.map((page) => [page.slug, page]),
) as Record<string, VerticalPageData | undefined>;

/** The demo each vertical page is the pitch for. */
export function demoFor(page: VerticalPageData): DemoSite {
  const demo = DEMO_BY_SLUG[page.demoSlug];
  if (!demo) throw new Error(`Vertical "${page.slug}" points at a demo that does not exist.`);
  return demo;
}
