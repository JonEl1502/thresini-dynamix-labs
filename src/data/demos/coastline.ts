import type { DemoSite } from "./types";

/* Demo 02 — AU market, HVAC. Brisbane, Queensland.
   Voice: Australian. "Aircon," "split system," "ducted," "reverse cycle."
   Licensing is ARCtick (refrigerant handling) plus QBCC (building work in
   Queensland) — naming both is the detail an Australian customer checks.
   The seasonal hook is the November build-up, not a northern-hemisphere
   summer. */

export const COASTLINE: DemoSite = {
  slug: "coastline-air",
  name: "Coastline Air",
  legalName: "Coastline Air Conditioning Pty Ltd",
  monogram: "CA",
  trade: "hvac",
  tradeLabel: "Air conditioning",
  market: "AU",
  schemaType: "HVACBusiness",
  landing: "/hvac",
  currency: "$",
  established: "2009",
  tagline: "Brisbane air conditioning, installed and serviced properly.",

  phoneDisplay: "(07) 3010 0142",
  email: "bookings@coastlineair.com.au",
  address: {
    street: "Unit 4, 118 Balaclava Street",
    locality: "Woolloongabba",
    region: "QLD",
    postcode: "4102",
    country: "Australia",
    countryCode: "AU",
  },
  geo: { lat: -27.4909, lng: 153.0334 },
  hours: [
    { days: "Monday – Friday", hours: "6:30am – 5:00pm" },
    { days: "Saturday", hours: "7:00am – 1:00pm" },
    { days: "Sunday", hours: "Breakdowns only" },
    { days: "Breakdown line", hours: "7 days, until 9pm" },
  ],
  schemaHours: ["Mo-Fr 06:30-17:00", "Sa 07:00-13:00"],
  emergencyLine: "Breakdown line open 7 days until 9pm through the summer.",

  credentials: [
    { label: "ARCtick licence", value: "AU41882 — refrigerant handling" },
    { label: "QBCC licence", value: "15084417 — mechanical services" },
    { label: "Electrical contractor", value: "QLD EC 78421" },
    { label: "Public liability", value: "$20M, certificate on request" },
  ],
  badges: ["ARCtick licensed", "QBCC licensed", "5-year installation warranty", "Brisbane owned since 2009"],

  rating: { score: 4.8, count: 386 },

  hero: {
    eyebrow: "Brisbane · Northside · Southside · Bayside",
    headline: "Aircon that's ready before the build-up hits.",
    sub: "Split system and ducted installation, repairs and servicing across Brisbane. Fixed quotes, licensed installers, and a five-year warranty on every install we do.",
    points: [
      "Free in-home quote, no obligation",
      "Fixed price — sizing and install included",
      "5-year workmanship warranty",
    ],
    promise: "We size the system to your room before we quote it. An undersized unit is the single most common reason a Brisbane aircon never keeps up.",
  },

  stats: [
    { value: "4.8★", label: "386 Google reviews" },
    { value: "5 yr", label: "Workmanship warranty" },
    { value: "2,900+", label: "Systems installed" },
    { value: "16 yrs", label: "Brisbane owned" },
  ],

  services: [
    {
      slug: "split-system-installation",
      name: "Split system installation",
      summary: "Single rooms and whole homes. Sized properly, installed same week.",
      headline: "Split system air conditioning installation, Brisbane",
      lede: "The workhorse of a Queensland home. We size the unit to the room — its orientation, its glass, its insulation — quote a fixed price, and install it, usually within the week.",
      signs: [
        "A bedroom nobody can sleep in from November to March",
        "A unit that runs all day and never quite gets there",
        "A system over ten years old on R22 refrigerant",
        "You are renovating and adding a room",
        "Power bills climbing while comfort drops",
        "A rental that needs cooling before the next tenant",
      ],
      includes: [
        "In-home sizing assessment — room, aspect, glazing and insulation",
        "Fixed written quote, valid 60 days",
        "Daikin, Mitsubishi Electric, Fujitsu or ActronAir",
        "Indoor and outdoor units, brackets, piping and drainage",
        "Electrical work by our own licensed electricians",
        "Old unit decommissioned, degassed and removed",
        "5-year workmanship warranty on top of the manufacturer's",
      ],
      priceFrom: "$2,190",
      priceNote: "Supplied and installed, 2.5kW reverse cycle, standard back-to-back install.",
      faqs: [
        {
          q: "What size do I actually need?",
          a: "It depends on far more than floor area — which way the room faces, how much glass it has, whether the roof space is insulated, how many people are in it. We measure it in person. A unit that is 1kW short will run flat out and never catch up, and a unit that is oversized short-cycles and leaves the room humid.",
        },
        {
          q: "How long does installation take?",
          a: "A standard back-to-back split is half a day. Longer pipe runs, upper-storey work or a unit going in on a scaffold take a full day.",
        },
        {
          q: "Can you install in a unit or apartment?",
          a: "Yes, and we deal with body corporate approval regularly. Get us the by-laws and we will prepare the application with the drawings they ask for.",
        },
      ],
      scene: "split",
      image: "/demo/hvac/louvres.jpg",
    },
    {
      slug: "ducted-air-conditioning",
      name: "Ducted air conditioning",
      summary: "Whole-home ducted and zoned systems, retrofitted or in a new build.",
      headline: "Ducted air conditioning installation in Brisbane",
      lede: "One system, every room, one controller. We design the zoning around how your household actually uses the house, so you are not paying to cool four empty bedrooms at 3pm.",
      signs: [
        "Three or more splits already on the walls",
        "You are building or doing a major renovation",
        "You want the outdoor units and wall boxes gone",
        "Bedrooms and living areas need different temperatures",
        "An existing ducted system is 15+ years old",
        "Resale — ducted adds more than it costs in most Brisbane suburbs",
      ],
      includes: [
        "Full heat-load calculation, room by room",
        "Zoning designed around your household's routine",
        "ActronAir or Daikin inverter ducted system",
        "Insulated ducting, grilles and a wall controller",
        "Roof-space access and structural checks before we quote",
        "All electrical and switchboard work included",
        "5-year workmanship warranty",
      ],
      priceFrom: "$9,800",
      priceNote: "Typical 4-bedroom Brisbane home, 4-zone inverter ducted, supplied and installed.",
      faqs: [
        {
          q: "Can it be retrofitted into an existing Queenslander?",
          a: "Usually yes, and it is some of our favourite work. The constraint is roof space and access, so we get up there and look before we quote rather than after.",
        },
        {
          q: "How many zones should I have?",
          a: "Most four-bedroom homes work well on four: living, master, bedrooms, and a fourth for a study or media room. More zones cost more and only help if the household actually uses them differently.",
        },
        {
          q: "Is ducted more expensive to run than splits?",
          a: "Not if it is zoned properly. A zoned inverter system cooling two zones draws less than three separate splits doing the same job.",
        },
      ],
      scene: "ducted",
      image: "/demo/hvac/house.jpg",
    },
    {
      slug: "air-conditioning-repairs",
      name: "Aircon repairs",
      summary: "Not cooling, leaking water, error codes, ice on the pipes — 7 days.",
      headline: "Air conditioning repairs across Brisbane",
      lede: "It has stopped, or it has stopped keeping up, and it is 34 degrees. Our breakdown line runs seven days until 9pm through the summer, and most faults are diagnosed and fixed on the first visit.",
      signs: [
        "Running but blowing warm",
        "Water dripping from the indoor unit onto the floor",
        "An error code on the wall controller or flashing lights",
        "Ice forming on the pipework or the indoor coil",
        "Rattling, grinding or a new vibration",
        "A musty smell every time it starts",
        "Outdoor unit running but the indoor fan is not",
      ],
      includes: [
        "Licensed technician, fully stocked van",
        "Full diagnostic — electrical, refrigerant and airflow",
        "Fixed repair price quoted before we start",
        "Common parts carried on the van for a same-visit fix",
        "Leak testing and regassing where refrigerant is low",
        "Written report on what failed and what it will take to keep it going",
      ],
      priceFrom: "$139",
      priceNote: "Diagnostic callout, credited against the repair if you go ahead.",
      faqs: [
        {
          q: "Why is water dripping from the indoor unit?",
          a: "Nine times in ten it is a blocked condensate drain — mould and dust build up in the line over a wet Brisbane summer. It is a quick fix, but left alone it will get into your ceiling.",
        },
        {
          q: "It just needs a regas, can you quote that over the phone?",
          a: "Honestly, no — and be careful with anyone who will. A sealed system does not consume refrigerant. If it is low there is a leak, and regassing without finding the leak means paying for the same gas twice.",
        },
        {
          q: "Is my old system worth repairing?",
          a: "We will tell you straight. Past about twelve years, or on R22 refrigerant, a major component failure usually costs more than it is worth. We quote the repair and the replacement and let you choose.",
        },
      ],
      scene: "repair",
      image: "/demo/hvac/louvres.jpg",
    },
    {
      slug: "air-conditioning-servicing",
      name: "Servicing & maintenance",
      summary: "Annual clean and service, plus maintenance plans for homes and offices.",
      headline: "Air conditioning servicing in Brisbane",
      lede: "Brisbane's humidity is hard on a system. An annual clean keeps the airflow up, the power bill down and the mould out — and it is the condition most manufacturer warranties are written around.",
      signs: [
        "It has not been serviced in over twelve months",
        "A musty smell when it starts up",
        "Airflow noticeably weaker than last summer",
        "Bills up without the usage changing",
        "Someone in the house has asthma or allergies",
        "Your warranty requires documented servicing",
      ],
      includes: [
        "Indoor coil, barrel fan and filter deep clean",
        "Condensate drain flushed and treated",
        "Outdoor coil washed and the unit checked for corrosion",
        "Refrigerant pressures and electrical connections tested",
        "Thermostat and controller calibration",
        "Written service record for your warranty file",
      ],
      priceFrom: "$189",
      priceNote: "Single split system. Multi-system and ducted priced per visit.",
      faqs: [
        {
          q: "How often should it be serviced?",
          a: "Once a year for a home, twice for an office or anywhere near the bay — salt air is hard on an outdoor coil. We will book it for early spring so it is ready before you need it.",
        },
        {
          q: "Is a service the same as a filter clean?",
          a: "No. Rinsing the filters is something you can do yourself every month. A service pulls the barrel fan and the coil, which is where the mould actually grows.",
        },
      ],
      scene: "service",
      image: "/demo/hvac/bedroom.jpg",
    },
    {
      slug: "multi-head-systems",
      name: "Multi-head systems",
      summary: "Several rooms, one outdoor unit — for homes where space or rules are tight.",
      headline: "Multi-head split systems, Brisbane",
      lede: "Up to five indoor units running from a single outdoor condenser. The answer when you need three rooms cooled and there is only one place — or one permission — for an outdoor unit.",
      signs: [
        "A townhouse or unit with one approved condenser location",
        "Body corporate rules limiting outdoor units",
        "A narrow side setback with no room for three condensers",
        "Ducted is not viable — no roof space or a flat roof",
        "You want the look of fewer boxes on the wall",
      ],
      includes: [
        "Design across all rooms before anything is quoted",
        "One outdoor unit serving 2–5 indoor heads",
        "Individual control per room",
        "Concealed pipe runs wherever the building allows",
        "Body corporate application prepared for you",
        "5-year workmanship warranty",
      ],
      priceFrom: "$5,400",
      priceNote: "Three-head system, supplied and installed, standard pipe runs.",
      faqs: [
        {
          q: "Is a multi-head better than separate splits?",
          a: "Only when something forces it — space, rules or looks. Where you can fit separate condensers, separate splits are cheaper to buy, cheaper to repair, and a failure only takes out one room.",
        },
        {
          q: "Can each room be set differently?",
          a: "Each head has its own controller and its own temperature. They do share a mode, so you cannot heat one room while cooling another on the same system.",
        },
      ],
      scene: "split",
      image: "/demo/hvac/bedroom.jpg",
    },
    {
      slug: "commercial-air-conditioning",
      name: "Commercial air conditioning",
      summary: "Offices, cafés, childcare and retail — installs, service contracts, after-hours.",
      headline: "Commercial air conditioning, Brisbane and surrounds",
      lede: "Packaged units, VRF and cassettes for businesses across Brisbane, plus planned maintenance so a failure is something we spot in a report rather than something you find out from a customer.",
      signs: [
        "A fit-out or refurbishment on a programme",
        "A system failing repeatedly in a trading space",
        "Compliance or food-safety temperature requirements",
        "A landlord requiring documented maintenance",
        "Running costs out of line with the floor area",
        "Nobody has been up on your roof in two years",
      ],
      includes: [
        "Site assessment and heat-load design",
        "VRF, packaged and cassette systems",
        "After-hours and weekend installation at no premium",
        "Planned maintenance agreements with written reports",
        "Priority breakdown response for contract clients",
        "$20M public liability, certificate same day",
      ],
      priceNote: "Commercial work is quoted per site against a written scope.",
      faqs: [
        {
          q: "Can you work outside our trading hours?",
          a: "Most of our commercial installs run overnight or on a Sunday. There is no after-hours premium for contracted work.",
        },
        {
          q: "What does a maintenance agreement cover?",
          a: "Scheduled visits, a written condition report after each one, priority breakdown response, and labour at contract rates. Most clients run two or four visits a year depending on the site.",
        },
      ],
      scene: "commercial",
      image: "/demo/hvac/house.jpg",
    },
  ],

  areas: [
    {
      slug: "inner-south-brisbane",
      name: "Inner South Brisbane",
      within: ["Woolloongabba", "East Brisbane", "Coorparoo", "Greenslopes", "Annerley", "Highgate Hill"],
      blurb:
        "Our workshop is on Balaclava Street, so the inner south is our home patch. A lot of it is pre-war timber — Queenslanders and workers' cottages where the roof space decides whether ducted is possible, and where we do a great deal of multi-head work instead.",
      responseTime: "Same-day breakdown response in most cases",
    },
    {
      slug: "new-farm-and-inner-north",
      name: "New Farm & Inner North",
      within: ["New Farm", "Teneriffe", "Newstead", "Fortitude Valley", "Bowen Hills", "Windsor"],
      blurb:
        "Apartment territory, which means body corporate approvals, restricted condenser locations and a lot of multi-head design work. We prepare the body corporate application as part of the quote — it is usually the slowest part of the job, so we start it first.",
      responseTime: "Same-day breakdown response in most cases",
    },
    {
      slug: "north-brisbane",
      name: "North Brisbane",
      within: ["Chermside", "Aspley", "Everton Park", "Stafford", "Kedron", "Bridgeman Downs"],
      blurb:
        "Post-war brick and tile with generous roof space, which makes the northside our busiest area for retrofitted ducted systems. Two vans run north every day through the summer.",
      responseTime: "Same or next day in most cases",
    },
    {
      slug: "western-suburbs",
      name: "Western Suburbs",
      within: ["Indooroopilly", "Kenmore", "Toowong", "Chapel Hill", "Graceville", "Sherwood"],
      blurb:
        "Larger blocks and larger homes out west, so bigger ducted systems and more zoning. The riverside pockets around Graceville and Sherwood also bring us flood-related replacements, which we handle with the insurer directly.",
      responseTime: "Same or next day in most cases",
    },
    {
      slug: "eastern-suburbs",
      name: "Eastern Suburbs",
      within: ["Carindale", "Camp Hill", "Cannon Hill", "Bulimba", "Morningside", "Wynnum"],
      blurb:
        "Bayside salt air is hard on outdoor units — we fit coated coils as standard from Wynnum eastward and recommend six-monthly servicing rather than annual. It genuinely doubles the life of a condenser out there.",
      responseTime: "Same or next day in most cases",
    },
    {
      slug: "logan-and-southside",
      name: "Logan & Southside",
      within: ["Springwood", "Underwood", "Sunnybank", "Rochedale", "Mount Gravatt", "Calamvale"],
      blurb:
        "Newer estates through Rochedale and Calamvale are mostly ducted from the builder, so our southside work is heavily weighted to servicing, warranty work and replacing the entry-level systems developers fit.",
      responseTime: "Same or next day in most cases",
    },
  ],

  reviews: [
    {
      author: "Rachel T.",
      place: "Coorparoo",
      stars: 5,
      job: "Ducted installation",
      when: "3 weeks ago",
      body: "Four quotes for ducted in a 1930s Queenslander. Coastline were the only ones who went up into the roof before quoting, and the only ones who explained why the zoning should be four and not seven. Installed over two days, spotless, and the house is a different place in February.",
    },
    {
      author: "Dan K.",
      place: "Wynnum",
      stars: 5,
      job: "Aircon repair",
      when: "1 month ago",
      body: "Unit died on the hottest weekend of the year. Rang at 7pm on a Saturday expecting a message bank, got a technician on site Sunday morning. Blocked drain and a failed capacitor, fixed on the spot, and he showed me how to flush the drain myself.",
    },
    {
      author: "Hien P.",
      place: "Sunnybank",
      stars: 5,
      job: "Split system installation",
      when: "1 month ago",
      body: "Another company quoted a 5kW for my bedroom. Coastline measured it, said 3.5kW was right, and quoted $600 less. It's been perfect all summer. Appreciated not being upsold.",
    },
    {
      author: "Megan S.",
      place: "Teneriffe",
      stars: 4,
      job: "Multi-head system",
      when: "2 months ago",
      body: "Apartment install with a very fussy body corporate. They did all the paperwork and drawings, which saved me weeks. Took longer than first estimated because of the approval, but they kept me posted the whole way.",
    },
    {
      author: "Tony M.",
      place: "Camp Hill",
      stars: 5,
      job: "Annual service",
      when: "2 months ago",
      body: "Been using them for the service on three splits for six years now. Same two blokes most years, always on time, always leave a written report. The musty smell we used to get every November is just gone.",
    },
    {
      author: "Priya S.",
      place: "Fortitude Valley",
      stars: 5,
      job: "Commercial maintenance",
      when: "4 months ago",
      body: "We run a café and a failure in January would cost us the week. They service the cassettes twice a year and picked up a failing fan motor in the report before it ever went down. That's the whole value right there.",
    },
  ],

  reasons: [
    {
      title: "We size it before we quote it",
      body: "Every install starts with someone in your house measuring the room, the glass and the insulation. Quoting a kilowatt rating off a floor plan is how people end up with a unit that runs all day and never catches up.",
    },
    {
      title: "Licensed for all of it",
      body: "ARCtick for the refrigerant, QBCC for the building work, and our own electrical licence for the switchboard. No subcontracting the electrical to whoever is free that week.",
    },
    {
      title: "Five years on our workmanship",
      body: "On top of the manufacturer's warranty on the equipment. Most installation faults show up in the first two summers — ours are covered for five.",
    },
  ],

  work: [
    {
      title: "4-zone ducted retrofit, 1930s Queenslander",
      place: "Coorparoo",
      body: "Tight roof space and no existing ducting. Designed around a central return, four zones, and a condenser tucked under the back deck to keep it off the street frontage. Two days on site.",
    },
    {
      title: "Five-head system, riverside apartment",
      place: "Teneriffe",
      body: "Body corporate permitted exactly one condenser position. Five heads off a single outdoor unit with concealed runs through the ceiling void. Approval documentation prepared and lodged by us.",
    },
    {
      title: "Café cassette replacement, overnight",
      place: "Fortitude Valley",
      body: "Two failing cassettes in a trading café. Replaced overnight on a Tuesday, tested and handed back at 5am. The café did not lose a single trading hour.",
    },
  ],

  faqs: [
    {
      q: "Are you licensed?",
      a: "ARCtick AU41882 for refrigerant handling, QBCC 15084417 for the mechanical services work, and QLD electrical contractor licence EC 78421. All three matter in Queensland and we hold all three in-house.",
    },
    {
      q: "Is the quote really fixed?",
      a: "Yes. We quote after seeing the job, in writing, valid 60 days. The only thing that changes a fixed quote is you changing the scope — and we would put that in writing too.",
    },
    {
      q: "How quickly can you install?",
      a: "Usually within the week outside peak season. From late November the lead time stretches, which is exactly why we tell people to book in September.",
    },
    {
      q: "Which brands do you install?",
      a: "Daikin, Mitsubishi Electric, Fujitsu, Panasonic and ActronAir. We are not tied to one manufacturer, so the recommendation is about your room rather than our stock.",
    },
    {
      q: "Do you take away the old unit?",
      a: "Yes — decommissioned, degassed to regulation and removed, included in the price. Refrigerant cannot legally be vented and we hold the licence to recover it properly.",
    },
    {
      q: "Do you offer payment plans?",
      a: "Interest-free terms are available on installations over $2,000. Application is online and takes a few minutes.",
    },
  ],

  jobTypes: [
    "New split system installation",
    "Ducted air conditioning",
    "Multi-head system",
    "Repair / not cooling",
    "Service or maintenance",
    "Commercial site",
    "Something else",
  ],

  cta: {
    action: "Book a free quote",
    short: "Free quote",
    formTitle: "Book your free quote",
    formNote: "Tell us a bit about the job and we'll call you back to arrange a time that suits.",
    jobLabel: "What do you need?",
  },
  expect: [
    "We call back to arrange a time that suits you",
    "In-home sizing assessment before anything is quoted",
    "A fixed written quote, valid 60 days",
    "Install usually within the week outside peak season",
  ],

  pricingNote:
    "All quotes are fixed and in writing, valid 60 days. Prices include GST, supply and installation.",

  photos: {
    hero: "/demo/hvac/house.jpg",
    gallery: ["/demo/hvac/louvres.jpg", "/demo/hvac/bedroom.jpg", "/demo/hvac/house.jpg"],
    feature: "/demo/hvac/bedroom.jpg",
  },
  /* Bright and magazine-like. Services alternate image and copy down the page. */
  layout: {
    hero: "magazine",
    services: "alternating",
    reviews: "columns",
    areas: "tiles",
    booking: "tabs",
    order: ["stats", "services", "reasons", "reviews", "areas", "work", "quote", "faq"],
  },

  finance: {
    title: "Interest-free terms over $2,000",
    body: "Ducted and multi-head systems are a real outlay. Interest-free payment plans are available on installations over $2,000, applied for online in a few minutes.",
  },
};
