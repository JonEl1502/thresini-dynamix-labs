export const SITE = {
  company: "ThreSiNi Dynamix Labs",
  wordmark: "THRESINI",
  positioning: "We build websites, mobile apps and SaaS products.",
  email: "hello@thresini.com",
  phone: "+1 (415) 555-0139",
  territories: "Working with businesses worldwide",
  /* We work remotely and we do not turn work away by postcode, so nothing
     above the fold names a country. The base is stated quietly, in the footer
     fine print and on /about — true, and not the headline. */
  base: "Built in Nairobi",
  url: "https://thresini.com",
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
