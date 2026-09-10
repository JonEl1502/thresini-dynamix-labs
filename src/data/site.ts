export const SITE = {
  company: "ThreSiNi Dynamix Labs",
  wordmark: "THRESINI",
  positioning: "We build websites, mobile apps and SaaS products.",
  email: "hello@thresini.com",
  phone: "+1 (415) 555-0139",
  territories: "Serving the USA, UK and Australia",
  /* Markets lead everywhere above the fold. The base is stated quietly, in the
     footer fine print and on /about — true, and not the headline. */
  base: "Built in Nairobi",
  url: "https://thresini.com",
} as const;

export const NAV = [
  { href: "/solutions", label: "What we build" },
  { href: "/#solutions-now", label: "Solutions" },
  { href: "/#proof", label: "Our products" },
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
    title: "Solutions",
    links: [
      { href: "/hvac", label: "HVAC" },
      { href: "/electricians", label: "Electrical" },
      { href: "/plumbers", label: "Plumbing" },
      { href: "/#solutions-now", label: "Veterinary and more" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/products/leads", label: "ThreSiNi Leads" },
      { href: "/contact", label: "Request a quote" },
    ],
  },
] as const;
