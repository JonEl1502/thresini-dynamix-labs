import type { DemoSite } from "./types";

/* Demo 05 — UK market, legal. Leeds.
   Professional services rather than a trade, which is the point: the same kit
   renders it. What changes is entirely in the data — the credential a client
   checks is the SRA number, the currency is sterling, the promise is a free
   case review rather than a fixed quote, and the "emergency" strip becomes a
   line about the first consultation costing nothing. */

export const MARLOWEFINCH: DemoSite = {
  slug: "marlowe-finch-solicitors",
  name: "Marlowe & Finch",
  legalName: "Marlowe & Finch Solicitors LLP",
  monogram: "M&F",
  trade: "legal",
  tradeLabel: "Solicitors",
  market: "UK",
  schemaType: "Attorney",
  landing: "/law-firms",
  currency: "£",
  established: "1987",
  tagline: "Leeds solicitors for injury, family, employment and property matters.",

  phoneDisplay: "0113 496 0142",
  email: "enquiries@marlowefinch.co.uk",
  address: {
    street: "Aire House, 14 Wellington Street",
    locality: "Leeds",
    region: "West Yorkshire",
    postcode: "LS1 2DE",
    country: "United Kingdom",
    countryCode: "GB",
  },
  geo: { lat: 53.7956, lng: -1.5501 },
  hours: [
    { days: "Monday – Thursday", hours: "8:30am – 6:00pm" },
    { days: "Friday", hours: "8:30am – 5:00pm" },
    { days: "Saturday", hours: "By appointment" },
    { days: "Sunday", hours: "Closed" },
  ],
  schemaHours: ["Mo-Th 08:30-18:00", "Fr 08:30-17:00"],
  emergencyLine: "Free initial consultation on every matter — in person, by phone or on video.",

  credentials: [
    { label: "Regulated by the SRA", value: "No. 612847 — Solicitors Regulation Authority" },
    { label: "Lexcel accredited", value: "Law Society practice management standard" },
    { label: "Conveyancing Quality Scheme", value: "Law Society CQS accredited" },
    { label: "Resolution member", value: "Constructive approach to family matters" },
  ],
  badges: ["SRA regulated", "Free first consultation", "No win, no fee available", "Established 1987"],

  rating: { score: 4.8, count: 289 },

  hero: {
    eyebrow: "Leeds · Bradford · Wakefield · Harrogate",
    headline: "Straight answers, before you commit to anything.",
    sub: "A Leeds firm handling injury claims, family matters, employment disputes, wills and property. Your first conversation is free, and you will always know what it costs before it starts.",
    points: [
      "Free first consultation, no obligation",
      "A named solicitor — not a case reference",
      "Costs agreed in writing before any work begins",
    ],
    promise:
      "You will speak to the solicitor who would handle your matter, not a call handler reading a script. If we are not the right firm for you, we will say so and point you to who is.",
  },

  stats: [
    { value: "4.8★", label: "289 client reviews" },
    { value: "38 yrs", label: "In Leeds since 1987" },
    { value: "Free", label: "First consultation" },
    { value: "4 hrs", label: "Average reply to an enquiry" },
  ],

  services: [
    {
      slug: "personal-injury-claims",
      name: "Personal injury claims",
      summary: "Road accidents, accidents at work and public liability — no win, no fee.",
      headline: "Personal injury solicitors in Leeds",
      lede: "If you were hurt and it was not your fault, you may be entitled to compensation for the injury, the earnings you lost and the treatment you need. We will tell you honestly whether you have a claim before you commit to anything.",
      signs: [
        "A road traffic accident that was not your fault",
        "An accident at work, or unsafe equipment or training",
        "A slip, trip or fall in a public place or shop",
        "An injury from faulty goods or a defective product",
        "Illness or injury caused by working conditions",
        "An insurer has offered you a figure and you are unsure about it",
      ],
      includes: [
        "Free assessment of whether you have a claim at all",
        "No win, no fee agreement where we take it on",
        "Medical evidence arranged and paid for up front by us",
        "Rehabilitation and treatment organised early, not at the end",
        "Interim payments pursued where you are out of pocket now",
        "A named solicitor you can ring directly",
      ],
      priceNote: "No win, no fee on most injury claims. If we do not win, you pay us nothing.",
      faqs: [
        {
          q: "How long do I have to claim?",
          a: "Generally three years from the accident, or from when you first knew the injury was linked to it. There are important exceptions — children have until their 21st birthday, and different limits apply abroad. If you are anywhere near a deadline, ring us today rather than reading about it.",
        },
        {
          q: "What does 'no win, no fee' actually mean?",
          a: "If the claim does not succeed, you pay us nothing. If it does, our fee comes out of the compensation as a percentage capped by law, and we tell you that percentage in writing before you sign anything. There are no hidden costs and nothing to pay up front.",
        },
        {
          q: "The insurer has already offered me money — should I take it?",
          a: "Speak to someone first. Early offers are frequently made before the full extent of an injury is known, and once you accept, that is the end of it. Reviewing an offer costs you nothing here.",
        },
        {
          q: "Will I have to go to court?",
          a: "Very probably not. The large majority of claims settle by negotiation. Where a case does need issuing, we prepare it properly and you will be told exactly what to expect.",
        },
      ],
      scene: "scales",
      image: "/demo/legal/justice.jpg",
    },
    {
      slug: "family-law",
      name: "Family law & divorce",
      summary: "Divorce, arrangements for children and financial settlements.",
      headline: "Family law solicitors in Leeds",
      lede: "Separation is difficult enough without a solicitor making it worse. We are Resolution members, which means we look for the constructive route first — and we are entirely capable of the other kind when someone leaves us no choice.",
      signs: [
        "You have decided to separate or divorce",
        "You need to agree arrangements for the children",
        "Dividing a house, pensions or a business",
        "A former partner is not keeping to an agreement",
        "You want a prenuptial or cohabitation agreement",
        "You are worried about a child's safety or contact arrangements",
      ],
      includes: [
        "Free first conversation, in person or on video",
        "Clear advice about the likely outcome, early on",
        "Fixed-fee options for straightforward divorces",
        "Mediation and collaborative routes explored first",
        "Financial settlements including pensions and property",
        "Urgent protective applications where they are needed",
      ],
      priceFrom: "£650",
      priceNote: "Fixed fee for an uncontested divorce application, excluding the court fee.",
      faqs: [
        {
          q: "Do we both need our own solicitor?",
          a: "Yes — one firm cannot advise both of you, and any agreement is far more robust when each side has taken independent advice. We can recommend other local firms for your former partner.",
        },
        {
          q: "How long does a divorce take?",
          a: "The process itself has a minimum of about six months. Sorting out the finances is the part that varies, and it is the part that actually matters — anywhere from a few months by agreement to considerably longer if it is contested.",
        },
        {
          q: "What happens with the children?",
          a: "The starting point is whatever you and your former partner agree, and the court will not interfere where sensible arrangements exist. Where you cannot agree, mediation comes first in almost every case, and we will prepare you properly for it.",
        },
      ],
      scene: "family",
      image: "/demo/legal/signing.jpg",
    },
    {
      slug: "employment-law",
      name: "Employment law",
      summary: "Unfair dismissal, settlement agreements, discrimination and grievances.",
      headline: "Employment solicitors for employees, Leeds",
      lede: "We act for employees. If you have been dismissed, handed a settlement agreement, or are being treated in a way you know is not right, the first thing to do is find out where you actually stand — and there is a strict three-month deadline you need to know about.",
      signs: [
        "You have been dismissed or made redundant",
        "You have been given a settlement agreement to sign",
        "Discrimination, harassment or victimisation at work",
        "Unpaid wages, notice or holiday pay",
        "A grievance or disciplinary process under way",
        "You are being pushed towards resigning",
      ],
      includes: [
        "Free assessment of the strength of your position",
        "Settlement agreement advice — usually paid for by your employer",
        "Tribunal claims prepared, issued and represented",
        "ACAS early conciliation handled on your behalf",
        "Negotiation for a better exit than the one on the table",
        "Straight advice about what a claim is realistically worth",
      ],
      priceFrom: "£0",
      priceNote:
        "Settlement agreement advice is normally paid for in full by your employer, so it costs you nothing.",
      faqs: [
        {
          q: "How long do I have to bring a claim?",
          a: "Three months less one day from the dismissal or the act you are complaining about, and you must start ACAS early conciliation before that runs out. It is a genuinely hard deadline and it is why we ask you to call early rather than wait.",
        },
        {
          q: "My employer has offered me a settlement agreement.",
          a: "You are legally required to take independent advice before one is binding, and your employer nearly always pays for that advice. We will tell you whether it is a fair figure — and in a fair number of cases we go back and improve it.",
        },
        {
          q: "Will I have to face my employer in a tribunal?",
          a: "Most claims settle before a hearing. Where one does go ahead, tribunals are considerably less formal than a court, and you will be prepared for exactly what happens on the day.",
        },
      ],
      scene: "consult",
      image: "/demo/legal/boardroom.jpg",
    },
    {
      slug: "wills-trusts-and-probate",
      name: "Wills, trusts & probate",
      summary: "Wills, lasting powers of attorney, and administering an estate.",
      headline: "Wills and probate solicitors in Leeds",
      lede: "The paperwork that spares your family a mess later, and the help to get through it if you are already dealing with one. We do not rush anyone, and we quote a fixed fee for almost all of it.",
      signs: [
        "You have no will, or one written before a marriage, divorce or child",
        "You want a lasting power of attorney in place while you can make one",
        "Someone has died and you do not know where to begin",
        "An estate needs a grant of probate",
        "Concerns about inheritance tax or protecting a share of a home",
        "A will is being disputed within the family",
      ],
      includes: [
        "Fixed-fee wills, single or mirror",
        "Lasting powers of attorney for property and for health",
        "Full probate service, or grant-only if you prefer to do the rest",
        "Inheritance tax planning and trust advice",
        "Home visits for clients who cannot easily get to us",
        "Your will stored in our strongroom at no charge",
      ],
      priceFrom: "£195",
      priceNote: "Single will, fixed fee. Mirror wills for a couple, £320.",
      faqs: [
        {
          q: "Is a cheap online will good enough?",
          a: "Sometimes, for a genuinely simple estate. The trouble is that the situations where it goes wrong — second marriages, children from an earlier relationship, a business, a property abroad — are exactly the ones that look simple to a form. A £195 will drafted properly has saved a great many families far more than that.",
        },
        {
          q: "How long does probate take?",
          a: "A straightforward estate is typically six to nine months. Property to sell, inheritance tax to settle or assets to trace will extend it. We will give you a realistic timetable at the start rather than an optimistic one.",
        },
        {
          q: "What does probate cost?",
          a: "We quote a fixed fee based on the estate rather than a percentage of it, which is how a number of firms charge and is usually a great deal more expensive.",
        },
      ],
      scene: "documents",
      image: "/demo/legal/books.jpg",
    },
    {
      slug: "residential-conveyancing",
      name: "Residential conveyancing",
      summary: "Buying, selling and remortgaging — fixed fees and a named conveyancer.",
      headline: "Conveyancing solicitors in Leeds",
      lede: "Moving is stressful enough without chasing a firm that will not return your calls. You get a named conveyancer with a direct line, a fixed fee quoted up front, and an honest answer about timescales.",
      signs: [
        "You have had an offer accepted, or accepted one",
        "You are remortgaging or taking out equity",
        "A transfer of equity after a separation or a gift",
        "Buying at auction, with a short deadline",
        "A leasehold flat, shared ownership or a new build",
        "Your current conveyancer has gone quiet",
      ],
      includes: [
        "Fixed fee quoted in full up front, disbursements itemised",
        "A named conveyancer with a direct dial and email",
        "Law Society CQS accredited — accepted by all major lenders",
        "All searches ordered on day one, not on week three",
        "Weekly update whether or not there is news",
        "Leasehold, shared ownership and new build all handled in-house",
      ],
      priceFrom: "£795",
      priceNote: "Freehold purchase up to £300,000, plus VAT and disbursements.",
      faqs: [
        {
          q: "How long will it take?",
          a: "Twelve to sixteen weeks is typical for a freehold purchase in a chain. Leasehold takes longer because the management pack sits with a third party. We will tell you where the delay actually is rather than saying 'we're waiting on the other side'.",
        },
        {
          q: "Why is your quote higher than the one I got online?",
          a: "Often it is not, once the extras are added in. Compare the total including searches, bank transfer fees, leasehold supplements and the 'expedition fee' some firms add. Ours is one number with everything itemised beneath it.",
        },
        {
          q: "Will I get the same person throughout?",
          a: "Yes. A named conveyancer with a direct line, and a named assistant who knows your file when they are on leave.",
        },
      ],
      scene: "property",
      image: "/demo/legal/library.jpg",
    },
    {
      slug: "dispute-resolution",
      name: "Dispute resolution",
      summary: "Contract disputes, debt recovery, property and boundary disagreements.",
      headline: "Dispute resolution solicitors, Leeds",
      lede: "Litigation is expensive and slow, so the first thing we do is tell you honestly whether it is worth it. Most disputes are better resolved with a well-drafted letter than a claim form — but we will issue one when that is what is required.",
      signs: [
        "A customer or client has not paid",
        "A contract has been breached and you are out of pocket",
        "A boundary, right of way or neighbour dispute",
        "A dispute with a builder or contractor over work done",
        "A professional has been negligent",
        "You have received a letter before action",
      ],
      includes: [
        "Honest early view on merits, cost and what it is worth",
        "Letter before action drafted properly — often the end of it",
        "Mediation and negotiation before any claim is issued",
        "Court proceedings issued and conducted where necessary",
        "Costs budgeted and reviewed with you at every stage",
        "Enforcement once you have a judgment, which is where many firms stop",
      ],
      priceFrom: "£250",
      priceNote: "Initial review and letter before action, fixed fee. Further work quoted in stages.",
      faqs: [
        {
          q: "Is it worth suing?",
          a: "Frequently not, and we will say so. If the sum is modest, the other side has no money, or the costs would swallow the recovery, you deserve to hear that in the first meeting rather than after three months of fees.",
        },
        {
          q: "How are your costs worked out?",
          a: "In stages, each agreed in writing before we begin it. You will never receive a bill for work you did not know was being done.",
        },
      ],
      scene: "courthouse",
      image: "/demo/legal/courthouse.jpg",
    },
  ],

  areas: [
    {
      slug: "leeds-city-centre",
      name: "Leeds City Centre",
      within: ["Wellington Street", "Holbeck", "The Calls", "Headrow", "Arena Quarter"],
      blurb:
        "Our offices are on Wellington Street, five minutes from the station and the Combined Court Centre. Most of our employment and dispute work involves people who can call in on a lunch break, and we keep early and late appointments for exactly that.",
      responseTime: "Enquiries answered within four working hours",
    },
    {
      slug: "north-leeds",
      name: "North Leeds",
      within: ["Roundhay", "Chapel Allerton", "Moortown", "Alwoodley", "Meanwood", "Headingley"],
      blurb:
        "A large share of our wills, probate and conveyancing clients are in north Leeds, often families we have acted for across two or three generations. Home visits are available throughout, at no additional charge.",
      responseTime: "Enquiries answered within four working hours",
    },
    {
      slug: "south-leeds",
      name: "South Leeds",
      within: ["Beeston", "Morley", "Middleton", "Hunslet", "Rothwell"],
      blurb:
        "Much of our accident-at-work and injury practice comes from south Leeds and the industrial estates around it. No win, no fee means the cost of finding out where you stand is nothing at all.",
      responseTime: "Enquiries answered within four working hours",
    },
    {
      slug: "bradford",
      name: "Bradford",
      within: ["Bradford City", "Shipley", "Bingley", "Idle", "Thornton"],
      blurb:
        "We have acted in Bradford for as long as we have been in Leeds, and appear regularly at the Combined Court there. Video and telephone appointments mean most matters never require a journey.",
      responseTime: "Enquiries answered within four working hours",
    },
    {
      slug: "wakefield",
      name: "Wakefield",
      within: ["Wakefield", "Ossett", "Horbury", "Normanton", "Castleford"],
      blurb:
        "Family and employment matters make up most of our Wakefield caseload. Appointments are available at our Leeds office, by video, or on a Saturday morning where work makes weekdays difficult.",
      responseTime: "Enquiries answered within four working hours",
    },
    {
      slug: "harrogate",
      name: "Harrogate",
      within: ["Harrogate", "Knaresborough", "Wetherby", "Boston Spa", "Pannal"],
      blurb:
        "Predominantly private client work — wills, trusts, estate planning and conveyancing — where a fixed fee and a named solicitor tend to matter more than being the cheapest quote on a comparison site.",
      responseTime: "Enquiries answered within four working hours",
    },
  ],

  reviews: [
    {
      author: "Michael T.",
      place: "Morley",
      stars: 5,
      job: "Personal injury claim",
      when: "2 weeks ago",
      body: "Injured at work and the insurer offered me £2,800 within a fortnight. Marlowe & Finch told me not to touch it, arranged a proper medical report, and settled at a little over five times that. No win no fee meant it cost me nothing to find out.",
    },
    {
      author: "Sarah J.",
      place: "Chapel Allerton",
      stars: 5,
      job: "Family law",
      when: "1 month ago",
      body: "Helen guided us towards mediation rather than straight to court, which I did not expect from a solicitor and which saved us thousands and a great deal of bitterness. Sensible, calm and completely straight with me about what was realistic.",
    },
    {
      author: "Anonymous",
      place: "Leeds City Centre",
      stars: 5,
      job: "Employment law",
      when: "1 month ago",
      body: "Handed a settlement agreement with three days to sign it. They reviewed it same-day, told me the notice figure was wrong, and went back. Ended up with an extra month's pay and a proper reference. My employer paid their fee.",
    },
    {
      author: "The Ellison family",
      place: "Roundhay",
      stars: 5,
      job: "Wills & probate",
      when: "2 months ago",
      body: "Dad died without much in order and we were completely lost. They took over, dealt with HMRC, found an old pension none of us knew about, and never once made us feel like we were asking stupid questions. Fixed fee, exactly as quoted.",
    },
    {
      author: "Raj P.",
      place: "Wetherby",
      stars: 4,
      job: "Residential conveyancing",
      when: "2 months ago",
      body: "Leasehold flat, so it took longer than any of us wanted — but that was the management company, and crucially they told me that plainly instead of going quiet. Weekly updates without fail. Fee was exactly the number quoted at the start.",
    },
    {
      author: "Gwen H.",
      place: "Shipley",
      stars: 5,
      job: "Dispute resolution",
      when: "4 months ago",
      body: "A builder left us with £11,000 of defective work. They told me honestly that court would likely cost more than it recovered, wrote a letter before action instead, and had the money back within six weeks. I appreciated being talked out of the expensive option.",
    },
  ],

  reasons: [
    {
      title: "The first conversation is free",
      body: "A proper conversation with the solicitor who would do the work, not fifteen minutes with someone filling in a form. You will leave it knowing whether you have a case and roughly what it would cost.",
    },
    {
      title: "Costs in writing, before we start",
      body: "Fixed fees wherever the work allows one, staged estimates where it does not, and nothing billed that you did not know about. You will never open an invoice here and be surprised.",
    },
    {
      title: "A named solicitor, with a direct line",
      body: "You get a person and their number, not a case reference and a switchboard. If they are away, the colleague who picks up already knows your file.",
    },
  ],

  work: [
    {
      title: "Accident at work claim",
      place: "South Leeds",
      body: "Insurer's early offer of £2,800 declined. Independent orthopaedic evidence obtained, loss of earnings properly calculated, rehabilitation funded during the claim. Settled at £14,500 without proceedings.",
    },
    {
      title: "Settlement agreement negotiation",
      place: "Leeds City Centre",
      body: "Agreement presented with a 72-hour deadline and an incorrect notice calculation. Reviewed same-day, renegotiated to include an additional month's pay and an agreed reference. Employer paid our fee in full.",
    },
    {
      title: "Contested boundary resolved pre-action",
      place: "Harrogate",
      body: "A twelve-year-old dispute over a right of way. Title investigated, a letter before action drafted, and a mediated agreement reached in six weeks for a fraction of the cost of proceedings.",
    },
  ],

  faqs: [
    {
      q: "Is the first consultation really free?",
      a: "Yes, on every matter we handle — in person at Wellington Street, by telephone or on video. There is no obligation and nothing is charged if you decide not to proceed.",
    },
    {
      q: "How do you charge?",
      a: "Fixed fees wherever the work allows one — wills, conveyancing, uncontested divorces. Where work cannot be fixed, we agree a staged estimate in writing before beginning each stage. Injury claims are no win, no fee.",
    },
    {
      q: "Are you regulated?",
      a: "Marlowe & Finch Solicitors LLP is authorised and regulated by the Solicitors Regulation Authority, number 612847. We are Lexcel accredited and CQS accredited, and you can verify all of it on the SRA and Law Society registers.",
    },
    {
      q: "Do I have to come into the office?",
      a: "Not unless you want to. Most matters run perfectly well by telephone, video and email, and we offer home visits for wills and probate where getting to us is difficult.",
    },
    {
      q: "How quickly will someone get back to me?",
      a: "Enquiries are answered within four working hours, and in practice usually much sooner. If you are near a limitation deadline, say so when you call and we will deal with it that day.",
    },
    {
      q: "What if you can't help me?",
      a: "We will tell you at the first conversation and, where we can, point you to a firm that does that work properly. We would rather do that than take on something outside our competence.",
    },
  ],

  jobTypes: [
    "Accident or injury claim",
    "Divorce or separation",
    "Arrangements for children",
    "Employment issue or dismissal",
    "Settlement agreement review",
    "Will, power of attorney or probate",
    "Buying or selling a property",
    "A dispute or unpaid debt",
    "Something else",
  ],

  cta: {
    action: "Request a free case review",
    short: "Free review",
    formTitle: "Request a free case review",
    formNote:
      "Tell us briefly what has happened. A solicitor — not a call handler — will come back to you within four working hours.",
    jobLabel: "What is it about?",
  },
  expect: [
    "A solicitor replies within four working hours",
    "Your first conversation costs nothing, in person or on video",
    "Costs put in writing before any work begins",
    "If we are not the right firm, we say so and point you onward",
  ],

  pricingNote:
    "Costs are agreed with you in writing before any work begins. Fixed fees wherever the work allows one.",

  photos: {
    hero: "/demo/legal/courthouse.jpg",
    gallery: ["/demo/legal/books.jpg", "/demo/legal/boardroom.jpg", "/demo/legal/signing.jpg", "/demo/legal/library.jpg"],
    feature: "/demo/legal/solicitor.jpg",
  },
  /* Editorial and restrained. No cards at all — rules, columns and a ledger. */
  layout: {
    hero: "editorial",
    services: "ledger",
    reviews: "feature",
    areas: "textColumns",
    booking: "chips",
    order: ["services", "reasons", "reviews", "work", "areas", "stats", "quote", "faq"],
  },

  finance: {
    title: "No win, no fee on injury claims",
    body: "On most personal injury claims there is nothing to pay up front and nothing at all if the claim does not succeed. Our fee, capped by law, is explained in writing before you sign.",
  },
};
