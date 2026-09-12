import type { DemoSite } from "./types";

/* Demo 01 — US market, electrical. Phoenix, Arizona.
   Voice: American. "Panel," not "consumer unit." Licence body is the Arizona
   ROC. Heat is the local hook — in Phoenix the electrical emergency people
   actually search for is the one that took the AC out. */

export const BRIGHTWIRE: DemoSite = {
  slug: "brightwire-electric",
  name: "Brightwire Electric",
  legalName: "Brightwire Electric LLC",
  monogram: "BW",
  trade: "electrical",
  tradeLabel: "Electrician",
  market: "US",
  schemaType: "Electrician",
  landing: "/electricians",
  currency: "$",
  established: "2011",
  tagline: "Licensed Phoenix electricians. Same-day service.",

  phoneDisplay: "(602) 555-0142",
  email: "dispatch@brightwireelectric.com",
  address: {
    street: "4417 N Kearny Ave, Suite 3",
    locality: "Phoenix",
    region: "AZ",
    postcode: "85017",
    country: "United States",
    countryCode: "US",
  },
  geo: { lat: 33.5012, lng: -112.1483 },
  hours: [
    { days: "Monday – Friday", hours: "7:00 AM – 6:00 PM" },
    { days: "Saturday", hours: "8:00 AM – 2:00 PM" },
    { days: "Sunday", hours: "Emergency calls only" },
    { days: "Emergency line", hours: "24 hours" },
  ],
  schemaHours: ["Mo-Fr 07:00-18:00", "Sa 08:00-14:00"],
  emergencyLine: "24/7 emergency electricians — no overtime charge nights or weekends.",

  credentials: [
    { label: "Arizona ROC license", value: "ROC #331507 · C-11 Electrical" },
    { label: "Insurance", value: "$2M general liability, bonded" },
    { label: "Workers' comp", value: "Carried on every technician" },
    { label: "Background checks", value: "Every tech, renewed annually" },
  ],
  badges: ["Licensed & bonded", "Same-day service", "Upfront flat pricing", "Family owned since 2011"],

  rating: { score: 4.9, count: 214 },

  hero: {
    eyebrow: "Phoenix · Scottsdale · East Valley",
    headline: "Power out? We can be there today.",
    sub: "Licensed, bonded Phoenix electricians for emergency repairs, panel upgrades and EV chargers. You get a flat price before we start — never an hourly surprise.",
    points: [
      "Answered by a person, 24 hours a day",
      "Flat-rate quote before any work begins",
      "Most jobs finished the same visit",
    ],
    promise: "If we quote it, that's the price. No hourly billing, no trip charge on completed work.",
  },

  stats: [
    { value: "4.9★", label: "214 Google reviews" },
    { value: "90 min", label: "Average emergency arrival" },
    { value: "14 yrs", label: "Serving the Valley" },
    { value: "$0", label: "Trip fee on completed work" },
  ],

  services: [
    {
      slug: "emergency-electrical-repair",
      name: "Emergency electrical repair",
      summary: "Lost power, burning smell, sparking outlet — 24/7, answered by a person.",
      headline: "24/7 emergency electricians in Phoenix",
      lede: "Something has gone wrong and it cannot wait until Monday. Call the line below and a licensed technician is dispatched — nights, weekends and holidays, at the same rate as a Tuesday morning.",
      signs: [
        "Half the house has lost power",
        "A breaker trips again the moment you reset it",
        "Burning or fishy smell near an outlet or the panel",
        "Sparks, buzzing or scorch marks on a switch",
        "An outlet or switch plate is hot to the touch",
        "Water has reached wiring or the panel",
      ],
      includes: [
        "Licensed technician dispatched 24/7",
        "Full diagnostic of the circuit and panel",
        "Flat-rate repair price quoted before work starts",
        "Made safe on the first visit, every time",
        "Written report of what failed and why",
      ],
      priceFrom: "$149",
      priceNote: "Emergency diagnostic, credited in full against the repair.",
      faqs: [
        {
          q: "Do you really charge the same at 2 AM?",
          a: "Yes. No overtime multiplier on nights, weekends or holidays. The flat rate you are quoted on the phone is the rate on the invoice.",
        },
        {
          q: "How fast can you get here?",
          a: "Across Phoenix and the East Valley our average arrival on an emergency call is about 90 minutes. Dispatch will give you a window on the call, and text you when the truck is en route.",
        },
        {
          q: "Should I turn the power off myself?",
          a: "If you can reach the main breaker safely and there is smoke, a burning smell or water, shut it off and then call. If reaching the panel means touching anything wet or hot, leave it and call from outside.",
        },
      ],
      scene: "panel",
      image: "/demo/electrical/sparks.jpg",
    },
    {
      slug: "electrical-panel-upgrades",
      name: "Panel upgrades & replacement",
      summary: "100A to 200A service upgrades, Federal Pacific and Zinsco replacements.",
      headline: "Electrical panel upgrades in Phoenix, AZ",
      lede: "A panel installed for a 1970s house is running a 2020s load: two AC units, an induction range, a car in the driveway. We upsize the service, pull the permit and get it inspected.",
      signs: [
        "You have a Federal Pacific Stab-Lok or Zinsco panel",
        "Breakers trip when the AC and the dryer run together",
        "Lights dim when a large appliance kicks on",
        "The panel has no space left for a new circuit",
        "You are adding an EV charger, pool pump or casita",
        "Your insurer has asked about the panel",
      ],
      includes: [
        "Load calculation for the whole property",
        "New 200A panel, meter combo and grounding",
        "City of Phoenix permit pulled and inspection scheduled",
        "Utility disconnect and reconnect coordinated with APS or SRP",
        "Whole-home surge protection fitted as standard",
        "Labelled directory, photographed and emailed to you",
      ],
      priceFrom: "$2,450",
      priceNote: "Typical 100A → 200A residential upgrade, permit and inspection included.",
      faqs: [
        {
          q: "How long will my power be off?",
          a: "Four to six hours on a standard changeout. We schedule the utility disconnect first thing so the house is back on the same day.",
        },
        {
          q: "Do I need a permit?",
          a: "Yes, and we pull it. A panel replaced without a permit and inspection is a problem when you sell, and some insurers will not cover it.",
        },
        {
          q: "Is a Federal Pacific panel really dangerous?",
          a: "Stab-Lok breakers have a documented history of failing to trip under load. We will not add circuits to one — we replace it.",
        },
      ],
      scene: "panel",
      image: "/demo/electrical/substation.jpg",
    },
    {
      slug: "ev-charger-installation",
      name: "EV charger installation",
      summary: "Tesla, ChargePoint, Emporia and universal Level 2 — permitted and inspected.",
      headline: "EV charger installation in Phoenix and Scottsdale",
      lede: "A Level 2 charger turns an overnight into a full battery. The work is a dedicated 240V circuit, done to code, permitted and sized so the panel can actually carry it.",
      signs: [
        "You are taking delivery of an EV in the next month",
        "Charging on a standard outlet takes all night for 40 miles",
        "You want the charger in the garage, not on the driveway",
        "A second EV is joining the household",
        "Your builder left a stub but never finished the circuit",
      ],
      includes: [
        "Load calculation to confirm the panel can carry it",
        "Dedicated 240V circuit, up to 60A",
        "Hardwired or NEMA 14-50, your choice",
        "Permit and city inspection included",
        "Charger mounted, commissioned and tested with your car",
        "Utility rebate paperwork prepared for you",
      ],
      priceFrom: "$895",
      priceNote: "Standard garage install within 25 ft of the panel, permit included.",
      faqs: [
        {
          q: "Do I need a panel upgrade first?",
          a: "Sometimes. We run a load calculation before quoting. Where the panel is tight, a load-management device is often cheaper than a full upgrade and we will price both.",
        },
        {
          q: "Which chargers do you install?",
          a: "Any of them. Tesla Wall Connector, ChargePoint, Emporia, Grizzl-E, Autel. Supply it yourself or we will supply it at cost plus fitting.",
        },
        {
          q: "Are there rebates in Arizona?",
          a: "APS and SRP both run residential charger rebates and they change year to year. We fill the paperwork out with you at handover.",
        },
      ],
      scene: "ev",
      image: "/demo/electrical/worker.jpg",
    },
    {
      slug: "house-rewiring",
      name: "Rewiring & circuit work",
      summary: "Aluminum branch wiring, cloth wiring, new circuits and dedicated runs.",
      headline: "House rewiring and new circuits, Phoenix AZ",
      lede: "Aluminum branch wiring and 1960s cloth insulation are the two we are called out to most in the Valley. Whole-house or one problem circuit — we scope it properly and stage it so you keep living in the house.",
      signs: [
        "The house was built between 1965 and 1973 (aluminum wiring)",
        "Two-prong outlets with no ground",
        "Cloth-insulated wiring visible in the attic",
        "Flickering that moves around the house",
        "Warm outlet covers or discoloured receptacles",
        "An inspection report flagged the wiring on sale",
      ],
      includes: [
        "Full circuit-by-circuit survey before any price is given",
        "Staged plan so the house stays liveable",
        "AlumiConn or COPALUM repair where a full rewire is not needed",
        "Grounded receptacles and AFCI/GFCI protection to current code",
        "Drywall patched and ready for paint",
        "Permit, inspection and an updated panel directory",
      ],
      priceFrom: "$3,900",
      priceNote: "Partial rewires start here. Whole-house is quoted after the survey, never before.",
      faqs: [
        {
          q: "Do we have to move out?",
          a: "Almost never. We work room by room and leave you with power every night.",
        },
        {
          q: "Is aluminum wiring always a full rewire?",
          a: "No — and anyone who tells you it is on the phone has not looked. Approved connector repairs at every device cost a fraction of a rewire and satisfy most insurers.",
        },
        {
          q: "Will you patch the drywall?",
          a: "We patch and texture ready for paint. Matching your existing paint is the one thing we leave to you or your painter.",
        },
      ],
      scene: "wiring",
      image: "/demo/electrical/tools.jpg",
    },
    {
      slug: "lighting-and-ceiling-fans",
      name: "Lighting & ceiling fans",
      summary: "Recessed lighting, landscape lighting, fan installs and smart switches.",
      headline: "Lighting and ceiling fan installation in the Valley",
      lede: "The jobs that keep a house comfortable and a truck busy. Recessed cans, kitchen retrofits, patio fans that survive a Phoenix summer, and switches that finally do what you expect.",
      signs: [
        "A room that has never had enough light",
        "A fan that wobbles, hums or has stopped",
        "You want a fan on a patio and there is no box",
        "Kitchen lighting that leaves the counters dark",
        "Smart switches that will not talk to each other",
        "Landscape lighting that stopped after the monsoon",
      ],
      includes: [
        "Layout planned with you before anything is cut",
        "Fan-rated boxes and bracing — never a lighting box",
        "Dimmers matched to the fixtures so nothing buzzes",
        "Damp and wet-rated fixtures for patios and baths",
        "Old fixtures hauled away",
        "Everything tested with you before we leave",
      ],
      priceFrom: "$185",
      priceNote: "Single fan or fixture replacement with existing wiring in place.",
      faqs: [
        {
          q: "Can you put a fan where there's only a light?",
          a: "Yes — but the box has to be swapped for a fan-rated one with bracing. A standard lighting box will not hold a moving load, whatever the box on the shelf says.",
        },
        {
          q: "Why do my LEDs flicker on the dimmer?",
          a: "Almost always a dimmer built for incandescent bulbs. Swapping to a matched LED dimmer fixes it and takes twenty minutes.",
        },
      ],
      scene: "lighting",
      image: "/demo/electrical/site.jpg",
    },
    {
      slug: "commercial-electrical",
      name: "Commercial & tenant improvement",
      summary: "Restaurants, retail fit-outs, offices — after-hours work, one point of contact.",
      headline: "Commercial electrical contractors, Phoenix metro",
      lede: "Fit-outs, service work and scheduled maintenance for businesses across the Valley. We work nights so you trade days, and you get one project manager rather than a different number each time.",
      signs: [
        "A tenant improvement on a deadline",
        "A landlord or GC needs a licensed sub on the schedule",
        "Kitchen equipment tripping the house on a service",
        "Lighting retrofit for an energy rebate",
        "Recurring faults nobody has traced to a cause",
        "An inspection you need to pass this week",
      ],
      includes: [
        "Licensed, bonded and insured to $2M — COI on request same day",
        "After-hours and weekend scheduling at no premium",
        "One project manager, one number, one invoice",
        "Permits and inspections handled end to end",
        "Panel schedules and as-builts handed over at close",
        "Planned maintenance agreements available",
      ],
      priceNote: "Commercial work is quoted per project against a written scope.",
      faqs: [
        {
          q: "Can you work outside our trading hours?",
          a: "That is how most of our commercial work runs. Nights, early mornings and Sundays, at the same rate.",
        },
        {
          q: "Can you provide a certificate of insurance?",
          a: "Same day, made out to whichever entity your landlord or GC requires.",
        },
      ],
      scene: "commercial",
      image: "/demo/electrical/substation.jpg",
    },
  ],

  areas: [
    {
      slug: "phoenix",
      name: "Phoenix",
      within: ["Arcadia", "Encanto", "Maryvale", "Ahwatukee", "Deer Valley", "Laveen"],
      blurb:
        "Our shop is off I-17 near Kearny, so central and north Phoenix are the fastest calls we run. A lot of our panel work is in the post-war neighbourhoods around Encanto and Maryvale, where 100-amp services are still carrying two AC units.",
      responseTime: "Typically 45–75 minutes on an emergency call",
    },
    {
      slug: "scottsdale",
      name: "Scottsdale",
      within: ["Old Town", "McCormick Ranch", "North Scottsdale", "DC Ranch", "Gainey Ranch"],
      blurb:
        "Scottsdale is where most of our EV charger and landscape lighting work happens, along with panel upgrades on the larger North Scottsdale properties where the original service was never sized for a casita and a pool.",
      responseTime: "Typically 60–90 minutes on an emergency call",
    },
    {
      slug: "mesa",
      name: "Mesa",
      within: ["Dobson Ranch", "Red Mountain", "Eastmark", "Downtown Mesa", "Superstition Springs"],
      blurb:
        "We run two trucks out to the East Valley every day. Mesa's older central neighbourhoods bring us a steady stream of aluminum branch wiring repairs, and Eastmark brings us EV chargers.",
      responseTime: "Typically 60–90 minutes on an emergency call",
    },
    {
      slug: "tempe",
      name: "Tempe",
      within: ["Downtown Tempe", "Maple-Ash", "Warner Ranch", "The Lakes", "Escalante"],
      blurb:
        "Rental turnover keeps us busy in Tempe — GFCI and AFCI compliance, panel labelling and the fixes that come out of a pre-sale inspection. We work with several local property managers on standing agreements.",
      responseTime: "Typically 50–80 minutes on an emergency call",
    },
    {
      slug: "chandler",
      name: "Chandler",
      within: ["Ocotillo", "Downtown Chandler", "Fulton Ranch", "Andersen Springs"],
      blurb:
        "Chandler is newer stock, so less rewiring and more capacity: chargers, pool equipment, workshop sub-panels and whole-home surge protection after a monsoon season.",
      responseTime: "Typically 70–100 minutes on an emergency call",
    },
    {
      slug: "glendale",
      name: "Glendale",
      within: ["Arrowhead Ranch", "Historic Catlin Court", "Westgate", "Sahuaro Ranch"],
      blurb:
        "West Valley calls run out of the same Kearny shop. Catlin Court's historic homes are knob-and-tube and cloth-wiring territory, and we handle those with the city's historic district rules in mind.",
      responseTime: "Typically 55–85 minutes on an emergency call",
    },
  ],

  reviews: [
    {
      author: "Danielle R.",
      place: "Arcadia, Phoenix",
      stars: 5,
      job: "Emergency electrical repair",
      when: "2 weeks ago",
      body: "Lost power to half the house at 9pm on a Sunday with a newborn in the house. A real person answered, gave me a price on the phone, and Marcus was here in an hour. Found a failed breaker and a scorched neutral. Fixed it that night for exactly what he quoted.",
    },
    {
      author: "Kevin O.",
      place: "North Scottsdale",
      stars: 5,
      job: "EV charger installation",
      when: "1 month ago",
      body: "Three companies quoted the charger. Two said I needed a full panel upgrade for another $3k. Brightwire ran the load calc, showed me the numbers, and fitted a load-management device instead. Saved me most of the cost and told me exactly why.",
    },
    {
      author: "Teresa M.",
      place: "Dobson Ranch, Mesa",
      stars: 5,
      job: "Panel upgrade",
      when: "1 month ago",
      body: "Federal Pacific panel flagged on our home inspection two days before closing. They pulled the permit, did the changeout, and got the inspection signed off inside a week. Power was back on before dinner.",
    },
    {
      author: "Sam H.",
      place: "Tempe",
      stars: 4,
      job: "Lighting & ceiling fans",
      when: "2 months ago",
      body: "Recessed lighting through the whole living room plus two patio fans. Clean work, good layout advice, patched the drywall properly. Knocked a star off only because the first visit ran late — they called ahead though.",
    },
    {
      author: "Priya N.",
      place: "Ocotillo, Chandler",
      stars: 5,
      job: "Surge protection",
      when: "3 months ago",
      body: "Lost a TV and the pool pump controller to a monsoon surge last year. Had them fit whole-home surge protection before this season. Straightforward, well explained, and they labelled the entire panel while they were in there.",
    },
    {
      author: "Marcus B.",
      place: "Old Town Scottsdale",
      stars: 5,
      job: "Commercial tenant improvement",
      when: "3 months ago",
      body: "Restaurant fit-out on a hard opening date. They worked nights so our build-out kept moving, handled the permit, and passed inspection first time. COI in my inbox the morning I asked for it.",
    },
  ],

  reasons: [
    {
      title: "You know the price before we start",
      body: "Flat-rate quoting on every residential job. We diagnose, we price the repair, you approve it — then we work. Nobody watches a clock run.",
    },
    {
      title: "A person answers the phone",
      body: "Not a call centre in another state. Dispatch is in the shop on Kearny, 24 hours, and they can tell you where the nearest truck actually is.",
    },
    {
      title: "Permitted and inspected",
      body: "Panels, rewires and chargers get a city permit and a signed inspection. It costs a little more and it is the difference between work that passes at closing and work that does not.",
    },
  ],

  work: [
    {
      title: "200A service upgrade + EV charger",
      place: "Arcadia, Phoenix",
      body: "1958 ranch running a 100A service, two AC units and a new Model Y. Upsized to 200A with a meter combo, fitted a Tesla Wall Connector on a 60A circuit, permitted and inspected in nine days.",
    },
    {
      title: "Aluminum branch wiring remediation",
      place: "Dobson Ranch, Mesa",
      body: "1971 build flagged by the buyer's insurer. AlumiConn connectors at 94 devices over three days, GFCI protection added to kitchen and baths, letter issued for the insurer.",
    },
    {
      title: "Restaurant kitchen fit-out",
      place: "Old Town Scottsdale",
      body: "New 400A three-phase service for a 2,800 sq ft restaurant. Hood controls, walk-in, and a dedicated panel for the line. Nights only for three weeks, passed inspection first time.",
    },
  ],

  faqs: [
    {
      q: "Are you licensed and insured?",
      a: "Arizona ROC #331507, C-11 Electrical, bonded, and carrying $2M general liability with workers' comp on every technician. We will send the certificate before we arrive if you ask.",
    },
    {
      q: "How does your pricing work?",
      a: "Flat rate. We diagnose the problem, quote the repair as one number, and you approve it before anything starts. We do not bill by the hour on residential work, so a job that takes longer than expected costs you nothing extra.",
    },
    {
      q: "Do you charge a trip fee?",
      a: "There is a $79 diagnostic on a standard call and $149 on an emergency call, and both are credited in full against the work if you go ahead. If we cannot help, you pay the diagnostic and nothing else.",
    },
    {
      q: "How soon can you get here?",
      a: "Most standard calls are booked same or next day. Emergencies are dispatched immediately — our average arrival across the Valley is about 90 minutes.",
    },
    {
      q: "Do you guarantee the work?",
      a: "Two years on labour, and the manufacturer's warranty on parts. If something we touched fails inside that, we come back at no charge.",
    },
    {
      q: "Do you offer financing?",
      a: "Yes, on jobs over $1,000. Approval takes a few minutes on a phone, and there are 0% plans over 12 months for qualified applicants.",
    },
  ],

  jobTypes: [
    "Emergency — no power / burning smell",
    "Panel upgrade or replacement",
    "EV charger installation",
    "Rewiring or new circuits",
    "Lighting or ceiling fans",
    "Commercial / tenant improvement",
    "Something else",
  ],

  cta: {
    action: "Request a callback",
    short: "Get a quote",
    formTitle: "Get a free quote",
    formNote: "Tell us what's going on and we'll call you straight back — usually within the hour during working hours.",
    jobLabel: "What do you need?",
  },
  expect: [
    "Dispatch calls you back, usually within the hour",
    "A flat price agreed before anyone starts work",
    "Licence and insurance certificate sent if you ask",
    "Text when the truck is en route, with the tech's name",
  ],

  pricingNote:
    "Flat-rate pricing. The number you approve before we start is the number on the invoice.",

  photos: {
    hero: "/demo/electrical/worker.jpg",
    gallery: ["/demo/electrical/substation.jpg", "/demo/electrical/sparks.jpg", "/demo/electrical/tools.jpg", "/demo/electrical/site.jpg"],
    feature: "/demo/electrical/sparks.jpg",
  },
  /* Dark, technical, full-bleed. Services read as a numbered works schedule. */
  layout: {
    hero: "cinematic",
    services: "numbered",
    reviews: "strip",
    areas: "chips",
    booking: "steps",
    order: ["services", "stats", "reasons", "work", "reviews", "areas", "quote", "faq"],
  },

  finance: {
    title: "Financing on jobs over $1,000",
    body: "Panel upgrades and rewires do not always land at a convenient moment. Approval takes a few minutes from your phone, and qualified applicants get 0% over 12 months.",
  },
};
