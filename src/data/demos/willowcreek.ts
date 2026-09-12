import type { DemoSite } from "./types";

/* Demo 04 — US market, veterinary. Denver, Colorado.
   The vertical ThreSiNi already knows from VetHubCore. Note how little of the
   kit changes: a practice does not sell "quotes", it sells appointments, so
   the cta block below swaps every call to action on the site. Credentials are
   AAHA and Fear Free, which are the two a US pet owner actually recognises. */

export const WILLOWCREEK: DemoSite = {
  slug: "willow-creek-vet",
  name: "Willow Creek Veterinary",
  legalName: "Willow Creek Veterinary Clinic PC",
  monogram: "WC",
  trade: "veterinary",
  tradeLabel: "Veterinary clinic",
  market: "US",
  schemaType: "VeterinaryCare",
  landing: "/veterinary",
  currency: "$",
  established: "2004",
  tagline: "A calm, AAHA-accredited veterinary clinic in south Denver.",

  phoneDisplay: "(303) 555-0168",
  email: "front.desk@willowcreekvet.com",
  address: {
    street: "3840 E Evans Avenue",
    locality: "Denver",
    region: "CO",
    postcode: "80210",
    country: "United States",
    countryCode: "US",
  },
  geo: { lat: 39.6782, lng: -104.9436 },
  hours: [
    { days: "Monday – Friday", hours: "7:30 AM – 6:00 PM" },
    { days: "Saturday", hours: "8:00 AM – 2:00 PM" },
    { days: "Sunday", hours: "Closed" },
    { days: "Same-day sick visits", hours: "Held open daily" },
  ],
  schemaHours: ["Mo-Fr 07:30-18:00", "Sa 08:00-14:00"],
  emergencyLine: "Same-day sick appointments held open every weekday morning.",

  credentials: [
    { label: "AAHA accredited", value: "American Animal Hospital Association" },
    { label: "Fear Free certified", value: "Whole practice, all staff" },
    { label: "Cat Friendly Practice", value: "AAFP Gold certified" },
    { label: "AVMA member", value: "Four doctors, board-eligible surgery" },
  ],
  badges: ["AAHA accredited", "Fear Free certified", "Same-day sick visits", "Independent since 2004"],

  rating: { score: 4.9, count: 612 },

  hero: {
    eyebrow: "South Denver · University Park · Cherry Creek",
    headline: "The kind of vet visit your pet doesn't dread.",
    sub: "A Fear Free certified, AAHA-accredited clinic in south Denver. Unhurried appointments, itemised estimates before treatment, and the same doctor seeing your pet each time.",
    points: [
      "Same-day sick appointments, every weekday",
      "Written estimate before any treatment",
      "Fear Free handling — no forced restraint",
    ],
    promise:
      "You will always be shown a written estimate, and told what is urgent, what can wait and what is optional, before anything is agreed.",
  },

  stats: [
    { value: "4.9★", label: "612 Google reviews" },
    { value: "30 min", label: "Standard appointment length" },
    { value: "4", label: "Veterinarians on staff" },
    { value: "21 yrs", label: "Independently owned" },
  ],

  services: [
    {
      slug: "wellness-exams-and-vaccinations",
      name: "Wellness exams & vaccines",
      summary: "Annual and semi-annual check-ups, vaccines and parasite prevention.",
      headline: "Wellness exams and vaccinations in Denver",
      lede: "The visit that catches things early. A full nose-to-tail examination, the vaccines your pet's lifestyle actually calls for, and a plan for the year — not a rushed ten minutes and a bill.",
      signs: [
        "It has been more than a year since the last exam",
        "You have just adopted or brought home a puppy or kitten",
        "Vaccines are due or you are not sure what is due",
        "A boarding facility, groomer or daycare needs records",
        "Weight has changed without the food changing",
        "You are moving to Colorado and need a new clinic",
      ],
      includes: [
        "Full 30-minute physical examination, nose to tail",
        "Vaccines tailored to lifestyle — not a blanket schedule",
        "Intestinal parasite screening and heartworm testing",
        "Weight, body condition and nutrition review",
        "Dental assessment and a plan if one is needed",
        "Written summary emailed to you the same day",
      ],
      priceFrom: "$68",
      priceNote: "Comprehensive wellness examination. Vaccines and testing quoted separately.",
      faqs: [
        {
          q: "How often should my pet be seen?",
          a: "Once a year for a healthy adult, twice a year from about seven years old, and more often for puppies, kittens and anyone managing a chronic condition. Pets age faster than we do, and a year between visits is a long time to miss something.",
        },
        {
          q: "Does my indoor cat really need vaccines?",
          a: "Some of them, yes — rabies is required by Colorado law, and indoor cats still get out. But we will not give a vaccine your cat has no exposure risk for. We go through the list with you rather than defaulting to everything.",
        },
        {
          q: "Can we see the same veterinarian each time?",
          a: "Yes, and we encourage it. Continuity is genuinely better medicine, and most of our clients request a doctor by name when they book.",
        },
      ],
      scene: "checkup",
      image: "/demo/veterinary/vet-woman.jpg",
    },
    {
      slug: "dental-care",
      name: "Dental care",
      summary: "Cleanings, extractions and dental X-rays under monitored anaesthesia.",
      headline: "Pet dental cleanings and oral surgery, Denver",
      lede: "By three years old most dogs and cats already have periodontal disease, and it is painful long before it is visible. We do full-mouth dental X-rays on every patient, because half of what matters is under the gumline.",
      signs: [
        "Bad breath that has got worse",
        "Chewing on one side, or dropping food",
        "Red, receding or bleeding gums",
        "Visible tartar or a discoloured tooth",
        "Pawing at the mouth or face rubbing",
        "Suddenly reluctant to take hard treats",
      ],
      includes: [
        "Pre-anaesthetic bloodwork and an individualised protocol",
        "Full-mouth dental radiographs, every patient",
        "Ultrasonic scaling, polishing and subgingival cleaning",
        "Extractions with local nerve blocks where needed",
        "Dedicated nurse monitoring throughout and in recovery",
        "Take-home pain relief and a written home-care plan",
      ],
      priceFrom: "$495",
      priceNote: "Routine cleaning with X-rays and anaesthesia. Extractions estimated after imaging.",
      faqs: [
        {
          q: "Is anaesthesia safe for my older pet?",
          a: "Age is not a disease. We run bloodwork first, tailor the protocol to the patient, place an IV catheter and have a nurse whose only job is monitoring. For most senior pets the risk of leaving painful dental disease untreated is considerably higher.",
        },
        {
          q: "What about anaesthesia-free cleaning?",
          a: "It scrapes the visible surface and nothing else. It cannot clean below the gumline, cannot take X-rays, and cannot find the painful tooth. Both the AVMA and AAHA advise against it, and we do not offer it.",
        },
        {
          q: "Why do you X-ray every time?",
          a: "Because around sixty per cent of significant dental disease is invisible above the gumline. Cleaning without imaging means polishing teeth over an abscess.",
        },
      ],
      scene: "dental",
      image: "/demo/veterinary/nurse.jpg",
    },
    {
      slug: "surgery",
      name: "Surgery",
      summary: "Spays, neuters, soft tissue and mass removals with overnight follow-up.",
      headline: "Veterinary surgery in south Denver",
      lede: "Routine and soft-tissue surgery in our own theatre, with a dedicated anaesthesia nurse on every procedure and a phone call from the surgeon the same evening.",
      signs: [
        "A spay or neuter is due",
        "A lump that has changed size, shape or colour",
        "A torn nail, bite wound or laceration",
        "Suspected foreign body — something swallowed",
        "Bladder stones or a urinary blockage",
        "A referral suggested elective surgery you would rather have done locally",
      ],
      includes: [
        "Pre-surgical examination and bloodwork",
        "IV catheter, fluids and dedicated anaesthesia monitoring",
        "Multi-modal pain relief before, during and after",
        "Warm recovery with a nurse present throughout",
        "A call from the surgeon the same evening",
        "Free suture check at ten days",
      ],
      priceFrom: "$385",
      priceNote: "Routine spay or neuter, including anaesthesia, monitoring and take-home pain relief.",
      faqs: [
        {
          q: "Will my pet stay overnight?",
          a: "For routine procedures, no — they go home the same afternoon, which is almost always where they recover best. Anything that needs overnight monitoring is transferred to a 24-hour facility and we arrange it directly.",
        },
        {
          q: "Can you tell me the cost beforehand?",
          a: "Yes. You get a written, itemised estimate with a high and a low, and we call you during the procedure if anything would take it past the high end.",
        },
      ],
      scene: "surgery",
      image: "/demo/veterinary/theatre.jpg",
    },
    {
      slug: "urgent-care",
      name: "Same-day urgent care",
      summary: "Sick or injured today? We hold appointments open every weekday morning.",
      headline: "Same-day sick appointments, Denver",
      lede: "Emergency rooms are expensive and slow for problems that are urgent but not critical. We keep appointments open every weekday for exactly those — and we will tell you honestly when a case really does belong in an ER.",
      signs: [
        "Vomiting or diarrhoea lasting more than a day",
        "Not eating for 24 hours",
        "Limping, or suddenly reluctant to jump",
        "An ear, eye or skin problem that appeared quickly",
        "Straining to urinate — always call immediately",
        "A wound, bite or torn nail",
        "Something swallowed that should not have been",
      ],
      includes: [
        "Same-day appointment, held open each weekday",
        "Examination and immediate diagnostics in-house",
        "In-house bloodwork with results inside 20 minutes",
        "Digital X-ray and ultrasound on site",
        "Honest triage — we will send you to an ER if that is right",
        "Follow-up call the next day, every time",
      ],
      priceFrom: "$95",
      priceNote: "Same-day urgent examination. Diagnostics estimated and agreed before they are run.",
      faqs: [
        {
          q: "When should I go straight to an emergency hospital?",
          a: "Difficulty breathing, collapse, seizures, a male cat straining to urinate, a suspected bloat, uncontrolled bleeding, or anything after our hours. Call us and we will tell you plainly — and if it is an ER case we will phone ahead for you.",
        },
        {
          q: "Do you charge an emergency fee?",
          a: "No. A same-day sick visit is $95, the same as any other weekday appointment slot.",
        },
      ],
      scene: "clinic",
      image: "/demo/veterinary/vet-man.jpg",
    },
    {
      slug: "diagnostics-and-imaging",
      name: "Diagnostics & imaging",
      summary: "In-house bloodwork, digital X-ray and ultrasound — answers the same visit.",
      headline: "In-house diagnostics and imaging",
      lede: "Our laboratory, X-ray and ultrasound are all in the building, so a worrying morning usually ends with an answer that afternoon rather than a wait until Thursday.",
      signs: [
        "Unexplained weight loss or a change in thirst",
        "Ongoing vomiting, diarrhoea or lethargy",
        "A pre-anaesthetic work-up before a procedure",
        "Chronic condition monitoring — kidney, thyroid, diabetes",
        "A senior wellness screen",
        "A limp that needs imaging rather than guesswork",
      ],
      includes: [
        "In-house chemistry, haematology and urinalysis",
        "Results in about twenty minutes, discussed the same visit",
        "Digital radiography with specialist review when needed",
        "Abdominal and cardiac ultrasound on site",
        "Cytology read in-house, biopsies sent to a reference lab",
        "Every result explained in plain English, with a copy for you",
      ],
      priceFrom: "$140",
      priceNote: "Full in-house blood panel with same-visit results.",
      faqs: [
        {
          q: "How quickly will we know?",
          a: "Bloodwork is usually back before you have left the building. X-rays are immediate. Anything sent to an external lab is typically two to three days, and we call you either way.",
        },
        {
          q: "Do you send X-rays to a specialist?",
          a: "When the finding is not clear-cut, yes — to a board-certified radiologist, usually back the same day. There is no extra charge for that second read.",
        },
      ],
      scene: "imaging",
      image: "/demo/veterinary/theatre.jpg",
    },
    {
      slug: "senior-pet-care",
      name: "Senior pet care",
      summary: "Twice-yearly screening, arthritis management and honest quality-of-life advice.",
      headline: "Senior pet care in Denver",
      lede: "From about seven years old, six months is a long time. Twice-yearly screening catches kidney disease, thyroid changes and arthritis while there is still a great deal we can do — and when the time comes, we will talk to you honestly about it.",
      signs: [
        "Slower on the stairs, or no longer jumping onto the bed",
        "Drinking or urinating more than they used to",
        "Weight changing without the diet changing",
        "Sleeping more, or restless at night",
        "Cloudy eyes, or bumping into things",
        "Any new lump on an older pet",
      ],
      includes: [
        "Semi-annual examination and senior blood panel",
        "Blood pressure and urine concentration testing",
        "Mobility and pain scoring, with a written plan",
        "Arthritis management including monoclonal antibody therapy",
        "Nutrition and cognitive support advice",
        "Unhurried quality-of-life conversations, whenever you want one",
      ],
      priceFrom: "$186",
      priceNote: "Senior wellness package — examination, full blood panel, urinalysis and blood pressure.",
      faqs: [
        {
          q: "When is a pet 'senior'?",
          a: "Around seven for most dogs and cats, earlier for giant breeds. It is not an age to dread — it is the age where twice-yearly screening starts genuinely changing outcomes.",
        },
        {
          q: "My dog is just slowing down with age, isn't he?",
          a: "Very often that is arthritis, and arthritis is treatable. 'Slowing down' is the single most under-treated thing we see in older dogs, and the change after a month on the right plan surprises most owners.",
        },
        {
          q: "Will you tell us when it's time?",
          a: "We will, honestly and without pressure, and we will give you the quality-of-life framework we use so it is a decision you make with information rather than in a fog. We also offer home visits for euthanasia.",
        },
      ],
      scene: "senior",
      image: "/demo/veterinary/ginger-cat.jpg",
    },
  ],

  areas: [
    {
      slug: "university-park",
      name: "University Park & DU",
      within: ["University Park", "Observatory Park", "Wellshire", "Rosedale", "Platt Park"],
      blurb:
        "We are on East Evans, so this is our immediate neighbourhood and most of our clients walk in. A lot of DU faculty households and a great many long-standing families who have brought us three generations of dogs.",
      responseTime: "Same-day sick appointments held open daily",
    },
    {
      slug: "washington-park",
      name: "Washington Park",
      within: ["Wash Park West", "Wash Park East", "Bonnie Brae", "Cory-Merrill", "Belcaro"],
      blurb:
        "Denver's most dog-heavy square mile. We see a lot of the injuries that come with an active life — torn nails, cruciate strains and the occasional foxtail — and we keep same-day slots specifically for them.",
      responseTime: "Same-day sick appointments held open daily",
    },
    {
      slug: "cherry-creek",
      name: "Cherry Creek",
      within: ["Cherry Creek North", "Country Club", "Hilltop", "Crestmoor", "Glendale"],
      blurb:
        "Ten minutes up University. Cherry Creek brings us a high proportion of cats, which is part of why we pursued AAFP Cat Friendly certification and keep a separate feline waiting area and exam room.",
      responseTime: "Same-day sick appointments held open daily",
    },
    {
      slug: "englewood",
      name: "Englewood",
      within: ["Englewood", "Cherry Hills Village", "Sheridan", "Greenwood Village"],
      blurb:
        "Just south of us over Hampden. Convenient for clients who want an independent clinic rather than a corporate group, and close enough that our senior patients are not enduring a long drive twice a year.",
      responseTime: "Same-day sick appointments held open daily",
    },
    {
      slug: "littleton",
      name: "Littleton",
      within: ["Downtown Littleton", "Ken Caryl", "Columbine", "Bow Mar", "Southglenn"],
      blurb:
        "A twenty-minute drive, and worth it for a lot of our Littleton clients who came to us for the Fear Free handling after a difficult experience elsewhere. We book longer slots for anxious patients as standard.",
      responseTime: "Same-day sick appointments held open daily",
    },
    {
      slug: "highlands-and-west-denver",
      name: "Highlands & West Denver",
      within: ["LoHi", "Berkeley", "Sloan's Lake", "Sunnyside", "Edgewater"],
      blurb:
        "Across town, but a steady stream of clients who found us through the dental service — full-mouth radiographs on every patient is still not the norm, and it is what most of our west-side referrals come for.",
      responseTime: "Same-day sick appointments held open daily",
    },
  ],

  reviews: [
    {
      author: "Alison K.",
      place: "Washington Park",
      stars: 5,
      job: "Same-day urgent care",
      when: "1 week ago",
      body: "Our lab stopped eating on a Tuesday and I fully expected to be told the next opening was in ten days. They saw him that morning, ran bloodwork while we waited, and had an answer before lunch. Dr. Nwosu called the next day to check on him. That call is why we stay.",
    },
    {
      author: "Rafael M.",
      place: "Cherry Creek",
      stars: 5,
      job: "Dental care",
      when: "3 weeks ago",
      body: "Our 13-year-old cat needed a dental and two other clinics had refused on her age. Willow Creek ran the bloodwork, explained the protocol, and did it. Four extractions. She's eating like a kitten again and I honestly regret waiting two years.",
    },
    {
      author: "Jenna P.",
      place: "University Park",
      stars: 5,
      job: "Wellness exam",
      when: "1 month ago",
      body: "Thirty-minute appointments are not a gimmick here — nobody has ever rushed us. They go through what each vaccine is actually for and why our indoor cat doesn't need all of them. First vet I've had that talks me out of things.",
    },
    {
      author: "Tom & Sarah B.",
      place: "Littleton",
      stars: 5,
      job: "Senior pet care",
      when: "1 month ago",
      body: "We drove past three closer clinics because of the Fear Free training. Our rescue greyhound used to shake for an hour before a visit. He now walks in on his own. They let him set the pace and it changed everything for him.",
    },
    {
      author: "Derek W.",
      place: "Englewood",
      stars: 4,
      job: "Surgery",
      when: "2 months ago",
      body: "Mass removal on our boxer. Estimate was itemised, surgeon phoned the same evening, and the suture check was free. Only note is that the waiting room gets busy around 5pm — worth booking earlier if you can.",
    },
    {
      author: "Marianne L.",
      place: "Berkeley",
      stars: 5,
      job: "Senior pet care",
      when: "3 months ago",
      body: "They helped us say goodbye to our girl of fifteen years, at home, on a Sunday. Dr. Halloran sat on the floor with us and did not once look at the clock. I cannot write about it without crying. They were extraordinary.",
    },
  ],

  reasons: [
    {
      title: "Thirty-minute appointments",
      body: "Long enough to examine your pet properly, answer what you actually came in to ask, and not feel like you are being moved along. It is the whole reason we stayed independent.",
    },
    {
      title: "You see the estimate first",
      body: "Written, itemised, with what is urgent separated from what is optional. If a procedure is heading past the estimate we ring you from theatre rather than putting it on the invoice.",
    },
    {
      title: "Fear Free, whole practice",
      body: "Every member of staff is certified, not just the doctors. Non-slip surfaces, pheromone diffusers, separate cat areas, and treats before anything else happens. Anxious patients get longer slots at no extra cost.",
    },
  ],

  work: [
    {
      title: "Full-mouth dental, 13-year-old cat",
      place: "Cherry Creek",
      body: "Declined elsewhere on age. Pre-anaesthetic screening, tailored protocol, full-mouth radiographs revealing four resorptive lesions. Four extractions with nerve blocks, home the same afternoon.",
    },
    {
      title: "Foreign body retrieval",
      place: "Washington Park",
      body: "Two-year-old retriever, 36 hours of vomiting. In-house radiographs found a sock in the jejunum. Surgery the same afternoon, discharged the next morning, full recovery.",
    },
    {
      title: "Arthritis management programme",
      place: "Littleton",
      body: "Eleven-year-old greyhound written off as 'just old'. Pain scoring, monoclonal antibody therapy and a physio plan. Back to two walks a day within six weeks.",
    },
  ],

  faqs: [
    {
      q: "Are you taking new clients?",
      a: "Yes, we are. New client appointments are usually available within a week, and we will ask your previous clinic for records so you do not have to chase them.",
    },
    {
      q: "What are your prices?",
      a: "A comprehensive wellness exam is $68 and a same-day sick visit is $95. Everything beyond the exam is estimated in writing and agreed with you before it happens. We would rather tell you the number than surprise you with it.",
    },
    {
      q: "Do you take pet insurance?",
      a: "We work with every major insurer. Payment is taken at the time of the visit and we submit the claim paperwork for you the same day, which is usually the part people find fiddly.",
    },
    {
      q: "What if my pet is anxious at the vet?",
      a: "Tell us when you book and we will schedule a longer, quieter slot, often first thing. We are a Fear Free certified practice — no forced restraint, and pre-visit anxiety medication where it helps. Some patients take two or three visits before we do anything at all, and that is fine.",
    },
    {
      q: "Do you see exotics?",
      a: "Rabbits, guinea pigs and ferrets, yes. For birds and reptiles we refer to a colleague in Lakewood who does it better than we would, and we will make the introduction.",
    },
    {
      q: "What happens after hours?",
      a: "Our phone message names the two emergency hospitals we trust and gives directions to both. We are sent their records the next morning and will call you to pick up the follow-up.",
    },
  ],

  jobTypes: [
    "New client — first appointment",
    "Wellness exam or vaccines",
    "Sick or injured — same day",
    "Dental assessment",
    "Surgery consultation",
    "Senior wellness screening",
    "Prescription refill",
    "Something else",
  ],

  cta: {
    action: "Book an appointment",
    short: "Book now",
    formTitle: "Request an appointment",
    formNote:
      "Tell us who we'd be seeing and what's going on, and the front desk will call you back to find a time.",
    jobLabel: "What's the appointment for?",
  },
  pricingNote:
    "Every estimate is itemised and discussed with you before treatment begins. If a procedure would exceed it, we call you first.",

  photos: {
    hero: "/demo/veterinary/beagle.jpg",
    gallery: ["/demo/veterinary/puppy.jpg", "/demo/veterinary/kitten.jpg", "/demo/veterinary/two-dogs.jpg", "/demo/veterinary/frenchie.jpg", "/demo/veterinary/tabby.jpg", "/demo/veterinary/ginger-cat.jpg"],
    feature: "/demo/veterinary/nurse.jpg",
  },
  /* Warm and photographic. A collage hero and photo-topped service tiles. */
  layout: {
    hero: "split",
    services: "photoTiles",
    reviews: "soft",
    areas: "photoList",
    order: ["services", "reasons", "gallery", "reviews", "stats", "areas", "quote", "faq"],
  },

  finance: {
    title: "Wellness plans and CareCredit",
    body: "Monthly wellness plans spread routine care across the year, and we accept CareCredit and Scratchpay for larger treatment. Ask the front desk — it is never an awkward conversation here.",
  },
};
