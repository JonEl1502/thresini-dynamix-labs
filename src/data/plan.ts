/** How an engagement actually runs, rendered as a sequence rather than a list. */
export const PROCESS = [
  { step: "Talk", body: "One call. What you're building, who it's for, and what happens if it doesn't exist." },
  { step: "Scope", body: "We write down the screens, the integrations and what is explicitly out. You keep the document." },
  { step: "Quote", body: "A fixed price against that scope, with a delivery date. No hourly guesswork." },
  { step: "Build", body: "You see working software every week, on a real URL or a real device, not a slide." },
  { step: "Launch", body: "Domains, stores, analytics and handover. The accounts are in your name." },
  { step: "Support", body: "Hosting, monitoring and monthly changes. We stay on the things we ship." },
] as const;

/** The quote is the offer. Say how it works, then get out of the way. */
export const QUOTE_STEPS = [
  {
    title: "Tell us what you need",
    body: "A website, an app, a SaaS product, or you're not sure yet. Two paragraphs is plenty to start.",
  },
  {
    title: "We scope it with you",
    body: "One 45-minute call. We write the scope down and send it back, whether or not you go ahead.",
  },
  {
    title: "You get a fixed number",
    body: "One price against one written scope, with a delivery date beside it. Nothing is billed by the hour.",
  },
] as const;

export const QUOTE_NOTE =
  "We don't publish price lists. A five-page site and a multi-tenant platform are not the same job, and a range wide enough to cover both tells you nothing useful.";

/** Why businesses come to us. */
export const PROBLEMS = [
  { title: "Launch", body: "There's a product to build and no team to build it." },
  { title: "Replace", body: "The business runs on spreadsheets, paper and WhatsApp threads." },
  { title: "Grow", body: "The website exists, but it isn't bringing in customers." },
] as const;

/** Software we built for ourselves and still maintain. */
export const OWN_PRODUCTS = [
  /* VetHubCore is held back for now — veterinary is presented as work we take
     on (see VETERINARY_NOTE) rather than as a product of ours on the shelf.
     Uncomment to put the card back on the home page and /about.
  {
    name: "VetHubCore",
    status: "Live",
    live: true,
    body: "A SaaS product for veterinary practices: appointments, patients, records, billing and marketing in one system. In production with paying clinics.",
  },
  */
  /* ThreSiNi Leads is held back too. Uncomment this entry AND the "What we
     run" sections on the home page and /about, which are commented out because
     with both products held back they had nothing left to show.
  {
    name: "ThreSiNi Leads",
    status: "Internal",
    live: false,
    body: "Our own prospecting engine — discovery, scoring and a pipeline — run internally on our own sales work before it is offered to anyone else.",
  },
  */
] as const;

/** Veterinary reads as a market we build for, not a product we sell. */
export const VETERINARY_NOTE =
  "We also build veterinary websites and practice software — booking, records and reminders for clinics.";

export const NEED_OPTIONS = [
  "Website",
  "Mobile application",
  "SaaS product",
  "Redesign or rebuild",
  "Integration or automation",
  "Not sure yet",
  "Other",
] as const;
