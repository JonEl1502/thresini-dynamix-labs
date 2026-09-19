export const SITE = {
  company: "ThreSiNi Dynamix Labs",
  wordmark: "THRESINI",
  positioning: "We build websites, mobile apps and SaaS products.",
  /* thresini.com is not registered/pointed anywhere yet (confirmed via dig —
     it does not resolve), so hello@thresini.com cannot receive mail. Left
     as-is rather than guessing a replacement inbox; swap for a real address
     once a domain is registered, or point this at another live inbox. */
  email: "hello@thresini.com",
  phone: "+1 (415) 555-0139",
  territories: "Working with businesses worldwide",
  /* We work remotely and we do not turn work away by postcode, so nothing
     above the fold names a country. The base is stated quietly, in the footer
     fine print and on /about — true, and not the headline. */
  base: "Built in Nairobi",
  /* thresini.com is the aspirational domain — not registered/pointed yet
     (confirmed via dig: it does not resolve). Using the actual live Vercel
     URL here so the site stops asserting a domain it doesn't own. Swap back
     to "https://thresini.com" the moment it's registered and pointed — one
     line, nothing else needs to change since everything reads from SITE.url. */
  url: "https://thresinidynamixlabs.vercel.app",
} as const;

export const NAV = [
  { href: "/solutions", label: "What we build" },
  { href: "/demos", label: "Live demos" },
  { href: "/#solutions-now", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_GROUPS = [
  {
    title: "What we build",
    links: [
      { href: "/products/websites", label: "Websites" },
      { href: "/products/mobile-apps", label: "Mobile applications" },
      { href: "/products/saas", label: "SaaS applications" },
      { href: "/solutions", label: "All of it" },
    ],
  },
  {
    title: "Industries",
    links: [
      { href: "/electricians", label: "Electrical" },
      { href: "/veterinary", label: "Veterinary" },
      { href: "/law-firms", label: "Legal" },
      { href: "/hvac", label: "HVAC" },
      { href: "/plumbers", label: "Plumbing" },
    ],
  },
  {
    title: "Live demos",
    links: [
      { href: "/demos", label: "All five demos" },
      { href: "/demo/brightwire-electric", label: "Brightwire Electric" },
      { href: "/demo/willow-creek-vet", label: "Willow Creek Veterinary" },
      { href: "/demo/marlowe-finch-solicitors", label: "Marlowe & Finch" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      /* { href: "/products/leads", label: "ThreSiNi Leads" }, — held back */
      { href: "/contact", label: "Request a quote" },
    ],
  },
] as const;
