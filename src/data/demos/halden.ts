import type { DemoSite } from "./types";

/* Demo 03 — UK market, plumbing & heating. Manchester.
   Voice: British. "Boiler," "combi," "radiator," "stopcock," "power flush."
   Gas Safe registration is the credential a British customer actually checks,
   and quoting the number is standard practice on a real plumber's site. The
   seasonal hook is the first cold snap, when boiler failures spike. */

export const HALDEN: DemoSite = {
  slug: "halden-plumbing",
  name: "Halden & Sons",
  legalName: "Halden & Sons Plumbing & Heating Ltd",
  monogram: "H&S",
  trade: "plumbing",
  tradeLabel: "Plumbing & heating",
  market: "UK",
  schemaType: "Plumber",
  landing: "/plumbers",
  currency: "£",
  established: "1994",
  tagline: "Manchester plumbers and Gas Safe heating engineers since 1994.",

  phoneDisplay: "0161 496 0142",
  email: "office@haldenandsons.co.uk",
  address: {
    street: "Unit 7, Ardwick Green Works, Higher Ardwick",
    locality: "Manchester",
    region: "Greater Manchester",
    postcode: "M12 6DH",
    country: "United Kingdom",
    countryCode: "GB",
  },
  geo: { lat: 53.4703, lng: -2.2229 },
  hours: [
    { days: "Monday – Friday", hours: "8:00am – 5:30pm" },
    { days: "Saturday", hours: "8:00am – 1:00pm" },
    { days: "Sunday", hours: "Emergencies only" },
    { days: "Emergency line", hours: "24 hours, 365 days" },
  ],
  schemaHours: ["Mo-Fr 08:00-17:30", "Sa 08:00-13:00"],
  emergencyLine: "24-hour emergency plumbers across Greater Manchester.",

  credentials: [
    { label: "Gas Safe Register", value: "No. 512874 — check us on the register" },
    { label: "CIPHE", value: "Chartered Institute of Plumbing & Heating Engineering" },
    { label: "WaterSafe approved", value: "Water Regulations compliant" },
    { label: "Public liability", value: "£5,000,000" },
  ],
  badges: ["Gas Safe registered", "Second generation, since 1994", "No call-out charge", "12-month guarantee"],

  rating: { score: 4.9, count: 471 },

  hero: {
    eyebrow: "Manchester · Salford · Stockport · Trafford",
    headline: "A plumber who turns up when they said they would.",
    sub: "Emergency plumbing, boiler repairs and installations across Greater Manchester. Gas Safe registered, family run since 1994, and no call-out charge — you pay for the work, not the drive.",
    points: [
      "No call-out charge, ever",
      "Fixed price agreed before we start",
      "Gas Safe registered engineers",
    ],
    promise: "We give you a two-hour arrival window and we ring when we set off. If we are going to be late, you hear it from us first.",
  },

  stats: [
    { value: "4.9★", label: "471 Google reviews" },
    { value: "30 yrs", label: "Family run since 1994" },
    { value: "£0", label: "Call-out charge" },
    { value: "2 hr", label: "Arrival window, not all day" },
  ],

  services: [
    {
      slug: "emergency-plumber",
      name: "Emergency plumbing",
      summary: "Burst pipes, leaks, no water — 24 hours, across Greater Manchester.",
      headline: "24-hour emergency plumbers in Manchester",
      lede: "Water where it should not be. Find your stopcock, turn it clockwise, then ring the number below — someone answers at any hour, and we will tell you honestly how long we will be.",
      signs: [
        "A burst pipe or water coming through a ceiling",
        "No water at any tap in the house",
        "A leak you cannot stop at the isolation valve",
        "An overflowing toilet or waste backing up",
        "Water near an electrical fitting or consumer unit",
        "A radiator or valve leaking onto a floor",
      ],
      includes: [
        "Gas Safe engineer dispatched 24 hours a day",
        "Leak traced and made safe on the first visit",
        "Fixed repair price agreed before any work starts",
        "No call-out charge, day or night",
        "Temporary repair the same visit where a part is needed",
        "Written report for your insurer if you need one",
      ],
      priceFrom: "£95",
      priceNote: "First hour on an emergency call-out. No separate call-out fee.",
      faqs: [
        {
          q: "Where is my stopcock?",
          a: "Usually under the kitchen sink, sometimes in a downstairs loo or an airing cupboard. Turn it clockwise to shut the water off. If you cannot find it, ring us and we will talk you through it while an engineer is on the way.",
        },
        {
          q: "Do you charge more at night or weekends?",
          a: "There is an out-of-hours rate after 6pm and on Sundays, and we tell you what it is on the phone before you commit to anything. There is never a call-out charge on top.",
        },
        {
          q: "Can you deal with my insurer?",
          a: "Yes. We provide a written report with photographs and an itemised invoice, which is what most home insurers ask for on an escape-of-water claim.",
        },
      ],
      scene: "leak",
      image: "/demo/plumbing/pipework.jpg",
    },
    {
      slug: "boiler-installation",
      name: "Boiler installation",
      summary: "New combi and system boilers, fitted in a day, with up to 10 years' warranty.",
      headline: "New boiler installation in Manchester",
      lede: "A new boiler is the biggest thing most households buy for the house that year. We survey it properly, quote one fixed price with the warranty on the paperwork, and fit it in a day.",
      signs: [
        "Your boiler is over twelve years old",
        "Repairs are becoming a yearly event",
        "Rooms take an age to warm up",
        "The pressure drops and needs topping up constantly",
        "Heating bills climbing without the usage changing",
        "A Worcester, Vaillant or Ideal you cannot get parts for",
        "You are converting from a conventional system to a combi",
      ],
      includes: [
        "Home survey — we look at the radiators and the pipework, not just the boiler",
        "Worcester Bosch, Vaillant, Ideal or Baxi",
        "Fixed price quote in writing, no pressure-selling on the doorstep",
        "System chemical flush and a magnetic filter fitted as standard",
        "Fitted in a day in most cases, heating back on that evening",
        "Building Regulations notification and Gas Safe certificate",
        "Manufacturer's warranty up to 10 years, registered by us",
      ],
      priceFrom: "£1,995",
      priceNote: "Straight combi-for-combi swap, supplied, fitted, flushed and certified.",
      faqs: [
        {
          q: "Will it be done in one day?",
          a: "A like-for-like combi swap, yes — you will have heating and hot water the same evening. A conventional-to-combi conversion, or a boiler moving to a different wall, is usually two days and we will say so in the quote.",
        },
        {
          q: "Which boiler should I get?",
          a: "It depends on how many bathrooms you have and how many people want hot water at once, far more than the badge. We will recommend an output in kilowatts and give you two or three options at different prices.",
        },
        {
          q: "Do you offer finance?",
          a: "Yes — interest-free over 24 months, or longer terms with interest. Applied for online, decision usually in minutes.",
        },
        {
          q: "Is the warranty really ten years?",
          a: "On certain Worcester Bosch and Vaillant models, when installed by an accredited installer and serviced annually. We are accredited and we register it for you on the day — it is not something you have to remember to do.",
        },
      ],
      scene: "boiler",
      image: "/demo/plumbing/insulation.jpg",
    },
    {
      slug: "boiler-repair-and-servicing",
      name: "Boiler repair & servicing",
      summary: "No heating, no hot water, fault codes — and the annual service that prevents them.",
      headline: "Boiler repairs and servicing, Greater Manchester",
      lede: "Most boiler failures happen in the first fortnight of proper cold, and most of them were visible at the last service. We fix the ones that break and service the ones that have not yet.",
      signs: [
        "No heating or no hot water",
        "A fault code on the display",
        "The boiler locks out and needs resetting constantly",
        "Pressure dropping below 1 bar repeatedly",
        "Banging, kettling or gurgling from the boiler",
        "Radiators cold at the bottom or top",
        "A landlord certificate due",
      ],
      includes: [
        "Gas Safe engineer, common parts carried on the van",
        "Full diagnostic and a fixed repair price before we start",
        "Flue gas analysis and combustion check",
        "Gas pressure, seals and safety devices tested",
        "Condensate and magnetic filter cleared",
        "Service record completed for your warranty",
      ],
      priceFrom: "£79",
      priceNote: "Annual boiler service. Repairs quoted fixed-price after diagnosis.",
      faqs: [
        {
          q: "My pressure keeps dropping — is that serious?",
          a: "It means water is leaving the system somewhere. Sometimes it is the expansion vessel, sometimes a pinhole in a radiator or a pipe under a floor. Topping it up weekly is treating the symptom, and the fresh water each time brings in oxygen that corrodes the system from the inside.",
        },
        {
          q: "Is an annual service actually necessary?",
          a: "For safety, yes — it is the only time anyone checks combustion and the flue. For your wallet, it is usually the difference between a £79 visit and a £400 one in January. And nearly every manufacturer's warranty is void without it.",
        },
        {
          q: "Will you have the part on the van?",
          a: "For the common failures — pumps, diverter valves, PCBs, thermistors on the main brands — usually yes. If we have to order, we fit a temporary solution where we safely can and come back the next working day.",
        },
      ],
      scene: "boiler",
      image: "/demo/plumbing/pipework.jpg",
    },
    {
      slug: "bathroom-installation",
      name: "Bathroom installation",
      summary: "Full bathrooms, en-suites and wet rooms — one team, start to finish.",
      headline: "Bathroom fitting in Manchester",
      lede: "The considered job rather than the emergency. One team does the lot — strip-out, plumbing, tiling, electrics and making good — so you are not project-managing four trades from your office.",
      signs: [
        "A bathroom that has not changed since the nineties",
        "Converting a bath to a walk-in shower",
        "Adding an en-suite or a downstairs loo",
        "A wet room for accessibility",
        "Poor pressure or a shower that never runs hot",
        "Damp, failing grout or a floor you no longer trust",
      ],
      includes: [
        "Design and full written quote before anything is ordered",
        "Strip-out and disposal of the old suite",
        "All plumbing, waste and pressure work",
        "Tiling, flooring and tanking for wet rooms",
        "Part P registered electrical work for lighting and extraction",
        "Plastering and making good, ready for decoration",
        "Typically 5–10 working days, dates agreed in advance",
      ],
      priceFrom: "£4,200",
      priceNote: "Full bathroom refit, labour and materials. Suite and tiles to your choice.",
      faqs: [
        {
          q: "How long will we be without a bathroom?",
          a: "A standard refit is five to ten working days. If it is your only bathroom we plan the order of work so you have a usable toilet every night but one.",
        },
        {
          q: "Do we buy the suite or do you?",
          a: "Either. We have trade accounts and pass the discount on, but plenty of customers enjoy choosing their own. We will tell you honestly if something you have picked will be a problem to fit.",
        },
        {
          q: "Can you do the tiling and electrics too?",
          a: "Yes. Our own tiler and our own Part P registered electrician. One quote, one team, one person to ring.",
        },
      ],
      scene: "bathroom",
      image: "/demo/plumbing/bathroom.jpg",
    },
    {
      slug: "blocked-drains",
      name: "Blocked drains",
      summary: "Sinks, toilets and outside drains cleared, with a CCTV survey if it keeps returning.",
      headline: "Blocked drain clearance, Manchester",
      lede: "Cleared same day in most cases. If it is the third time this year, the blockage is not the problem — we will put a camera down and tell you what actually is.",
      signs: [
        "A toilet that rises before it drains",
        "Gurgling from a sink or bath when the loo is flushed",
        "Standing water in an outside gully",
        "A smell from a drain outside the kitchen",
        "Slow drainage across several fittings at once",
        "The same blockage returning every few months",
      ],
      includes: [
        "Same-day clearance in most cases",
        "High-pressure jetting and electro-mechanical clearing",
        "CCTV drain survey where a blockage keeps coming back",
        "Survey footage and a written report you can keep",
        "Root cutting and patch lining where needed",
        "Advice on whether it is your responsibility or United Utilities'",
      ],
      priceFrom: "£110",
      priceNote: "Standard clearance. CCTV survey £180, credited against any repair.",
      faqs: [
        {
          q: "Is the drain my responsibility or the water company's?",
          a: "Broadly, pipework inside your boundary is yours; shared or public sewers beyond it are United Utilities'. It is not always obvious, and a CCTV survey settles it. We will tell you when it is not your bill to pay.",
        },
        {
          q: "Why does it keep blocking?",
          a: "Recurring blockages usually mean a collapsed section, a root intrusion or a bad fall on the pipe. Clearing it again will work for a few months and then you are back where you started.",
        },
      ],
      scene: "drain",
      image: "/demo/plumbing/pipework.jpg",
    },
    {
      slug: "landlord-gas-safety-certificates",
      name: "Landlord gas safety (CP12)",
      summary: "Annual CP12 certificates for landlords and agents, booked around your tenants.",
      headline: "Landlord gas safety certificates in Manchester",
      lede: "A legal requirement every twelve months on every let property with a gas appliance. We book direct with your tenants, email the certificate the same day, and remind you before it expires next year.",
      signs: [
        "A certificate expiring in the next month",
        "A new tenancy starting",
        "An agent or a council asking for a current CP12",
        "A portfolio with renewal dates in a dozen places",
        "You have never been reminded before it lapsed",
      ],
      includes: [
        "Full gas safety inspection of every appliance",
        "CP12 certificate emailed the same day",
        "Appointments arranged directly with your tenants",
        "Portfolio pricing for multiple properties",
        "Automatic reminder 45 days before expiry",
        "Boiler service bundled at a reduced rate",
      ],
      priceFrom: "£65",
      priceNote: "Single appliance CP12. Portfolio rates on request.",
      faqs: [
        {
          q: "How quickly can you get out?",
          a: "Usually within three working days, and we work directly with your tenants to arrange access so you are not in the middle of it.",
        },
        {
          q: "Do you manage renewals for landlords?",
          a: "Yes. Once you are on our system we chase the renewal 45 days out. Most of our landlord clients have never had one lapse since.",
        },
      ],
      scene: "leak",
      image: "/demo/plumbing/insulation.jpg",
    },
  ],

  areas: [
    {
      slug: "manchester-city-centre",
      name: "Manchester City Centre",
      within: ["Ancoats", "Northern Quarter", "Deansgate", "Castlefield", "Ardwick", "Hulme"],
      blurb:
        "Our yard is at Ardwick Green, so the city centre is ten minutes away. A great deal of it is converted mills and new-build apartments, which means pressurised systems, communal risers and concierge access — all of which we are used to arranging.",
      responseTime: "Emergency response typically within the hour",
    },
    {
      slug: "south-manchester",
      name: "South Manchester",
      within: ["Didsbury", "Chorlton", "Withington", "Levenshulme", "Burnage", "Fallowfield"],
      blurb:
        "Victorian and Edwardian terraces through Didsbury and Chorlton, which is where most of our boiler conversions and bathroom refits happen. Older pipework and single-glazed bay windows make radiator sizing matter more than people expect.",
      responseTime: "Emergency response typically within the hour",
    },
    {
      slug: "salford",
      name: "Salford",
      within: ["Salford Quays", "Eccles", "Swinton", "Worsley", "Monton", "Pendleton"],
      blurb:
        "The Quays are almost entirely apartments with communal heating, while Eccles and Swinton are traditional housing stock. Two very different jobs in the same postcode, and we run vans that handle both.",
      responseTime: "Emergency response typically within 60–90 minutes",
    },
    {
      slug: "stockport",
      name: "Stockport",
      within: ["Heaton Moor", "Cheadle", "Bramhall", "Marple", "Romiley", "Reddish"],
      blurb:
        "Larger properties out towards Bramhall and Marple often run conventional systems with cylinders rather than combis — which is the right answer when three showers might run at once, whatever the boiler advert says.",
      responseTime: "Emergency response typically within 60–90 minutes",
    },
    {
      slug: "trafford",
      name: "Trafford",
      within: ["Altrincham", "Sale", "Urmston", "Stretford", "Hale", "Timperley"],
      blurb:
        "Altrincham and Hale bring us most of our bathroom and wet-room work, and Urmston and Stretford a steady run of boiler replacements in nineties semis that are all reaching the same age at once.",
      responseTime: "Emergency response typically within 60–90 minutes",
    },
    {
      slug: "bury-and-north-manchester",
      name: "Bury & North Manchester",
      within: ["Prestwich", "Whitefield", "Radcliffe", "Middleton", "Crumpsall", "Heaton Park"],
      blurb:
        "A large share of our landlord work is up this way — CP12 certificates and turnaround repairs between tenancies, usually booked in batches around a letting agent's calendar.",
      responseTime: "Emergency response typically within 60–90 minutes",
    },
  ],

  reviews: [
    {
      author: "Joanne W.",
      place: "Didsbury",
      stars: 5,
      job: "Emergency plumbing",
      when: "1 week ago",
      body: "Ceiling came down in the hallway at half eleven at night. Rang Halden's, a real person answered, talked me through finding the stopcock, and had someone here in forty minutes. Made it safe that night and came back to do it properly on the Monday. Cannot fault them.",
    },
    {
      author: "Imran S.",
      place: "Sale",
      stars: 5,
      job: "Boiler installation",
      when: "3 weeks ago",
      body: "Three quotes. Two firms sent salesmen who did the whole 'discount if you sign today' routine. Halden's sent an engineer who looked at the radiators, explained why 30kW was overkill for our house, and quoted less. Fitted in a day, heating back on by six.",
    },
    {
      author: "Margaret H.",
      place: "Heaton Moor, Stockport",
      stars: 5,
      job: "Boiler repair",
      when: "1 month ago",
      body: "No heating, first properly cold week, and I'm 78 and on my own. They moved me up the list, had the part on the van, and the young lad who came was patient enough to write down what he'd done so I could tell my son. £140 all in.",
    },
    {
      author: "Chris D.",
      place: "Ancoats",
      stars: 4,
      job: "Bathroom installation",
      when: "2 months ago",
      body: "Full bathroom in an apartment with awkward access and a fussy building manager. Nine days as quoted, tidy every evening, proper job on the tiling. Marked down one only because the first delivery of tiles was wrong — sorted within two days though.",
    },
    {
      author: "Beth A.",
      place: "Prestwich",
      stars: 5,
      job: "Landlord gas safety",
      when: "2 months ago",
      body: "Six properties and I used to spend January chasing certificates. They arrange access with the tenants themselves and email me the CP12 the same day. Reminder comes 45 days out. Worth it for that alone.",
    },
    {
      author: "Paul G.",
      place: "Urmston",
      stars: 5,
      job: "Blocked drains",
      when: "3 months ago",
      body: "Third blockage in a year. Instead of just jetting it again they put a camera down and found a collapsed section under the drive. Showed me the footage, patch lined it, and it hasn't blocked since. Should have called them the first time.",
    },
  ],

  reasons: [
    {
      title: "No call-out charge",
      body: "You pay for the work, not for the drive. If we look at it and cannot help, you pay nothing at all.",
    },
    {
      title: "A two-hour window, and a phone call",
      body: "Not 'sometime between eight and six.' You get a two-hour window and a ring when the engineer sets off. If we are running late you hear it from us before you have to chase.",
    },
    {
      title: "The same family since 1994",
      body: "Ray Halden started it; his daughter runs it now. Every engineer is employed, not subcontracted, and most have been here over five years.",
    },
  ],

  work: [
    {
      title: "Conventional to combi conversion",
      place: "Chorlton",
      body: "1908 terrace with a cylinder in the airing cupboard and a tank in the loft. Converted to a 30kW combi, cupboard back to the household, all pipework upgraded and the system flushed. Two days.",
    },
    {
      title: "Escape of water reinstatement",
      place: "Salford Quays",
      body: "Failed flexi-hose that took out a kitchen ceiling in a sixth-floor apartment. Made safe the same night, full written report and photographs for the insurer, reinstated once the claim settled.",
    },
    {
      title: "Wet room for accessibility",
      place: "Timperley",
      body: "Converted a first-floor bathroom to a level-access wet room, fully tanked, with a thermostatic valve and grab rails to spec. Coordinated with the occupational therapist's drawings. Eight working days.",
    },
  ],

  faqs: [
    {
      q: "Are you Gas Safe registered?",
      a: "Yes — registration number 512874. You can and should check any engineer on the Gas Safe Register before they touch a gas appliance. Ours carry their ID cards and will show them without being asked.",
    },
    {
      q: "Do you charge a call-out fee?",
      a: "No. You are quoted for the work, in advance, and that is what you pay. If we cannot help, there is no charge at all.",
    },
    {
      q: "How long will you be?",
      a: "We give a two-hour arrival window rather than a day, and the engineer rings when they set off. On an emergency across Greater Manchester it is usually inside the hour.",
    },
    {
      q: "Is the work guaranteed?",
      a: "Twelve months on our workmanship, and the manufacturer's warranty on parts — up to ten years on an accredited boiler installation, which we register for you on the day.",
    },
    {
      q: "Can you help with an insurance claim?",
      a: "Yes. Escape-of-water claims need a written report with photographs and an itemised invoice, and we produce that as a matter of course on any emergency job.",
    },
    {
      q: "Do you offer finance on a new boiler?",
      a: "Interest-free over 24 months, or longer terms with interest. The application is online and the decision usually comes back in minutes.",
    },
  ],

  jobTypes: [
    "Emergency — leak or no water",
    "New boiler",
    "Boiler repair or service",
    "Bathroom installation",
    "Blocked drain",
    "Landlord gas safety (CP12)",
    "Something else",
  ],

  cta: {
    action: "Request a callback",
    short: "Get a quote",
    formTitle: "Request a callback",
    formNote: "Tell us what's happened and we'll ring you back — usually within the hour during working hours.",
    jobLabel: "What do you need?",
  },
  expect: [
    "We ring you back, usually within the hour",
    "A two-hour arrival window, not a whole day",
    "No call-out charge — you pay for the work",
    "The price agreed with you before we start",
  ],

  pricingNote:
    "No call-out charge. The price is agreed with you before any work starts, and includes VAT.",

  photos: {
    hero: "/demo/plumbing/pipework.jpg",
    gallery: ["/demo/plumbing/bathroom.jpg", "/demo/plumbing/bathtub.jpg", "/demo/plumbing/insulation.jpg"],
    feature: "/demo/plumbing/bathroom.jpg",
  },
  /* Heritage. A banded hero with the copy card overlapping, and an icon grid. */
  layout: {
    hero: "stack",
    services: "iconGrid",
    reviews: "quilt",
    areas: "textColumns",
    booking: "split",
    order: ["reasons", "services", "reviews", "work", "stats", "areas", "quote", "faq"],
  },

  finance: {
    title: "Interest-free boiler finance",
    body: "A boiler rarely fails at a convenient moment. Interest-free over 24 months, or longer terms with interest — applied for online, decision usually in minutes.",
  },
};
