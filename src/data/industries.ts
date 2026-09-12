export type GlyphKey =
  | "electrical"
  | "hvac"
  | "plumbing"
  | "construction"
  | "agriculture"
  | "veterinary"
  | "legal"
  | "home"
  | "more";

export interface IndustryCard {
  name: string;
  glyph: GlyphKey;
  href?: string;
  body?: string;
  /** Featured cards lead the section; the rest are listed underneath. */
  featured?: boolean;
}

/** Top solutions right now, then everywhere else the same software goes. */
export const INDUSTRIES: IndustryCard[] = [
  {
    name: "Electrical",
    glyph: "electrical",
    href: "/electricians",
    featured: true,
    body: "Electricians, electrical contractors, emergency and commercial electrical, EV and solar installers.",
  },
  {
    name: "Veterinary",
    glyph: "veterinary",
    href: "/veterinary",
    featured: true,
    body: "Clinic websites and practice software — booking, records and reminders, built by people who already run veterinary software in production.",
  },
  {
    name: "Legal",
    glyph: "legal",
    href: "/law-firms",
    featured: true,
    body: "Solicitors and law firms: a page per practice area, costs answered honestly, and enquiries routed to the right team.",
  },
  { name: "HVAC", glyph: "hvac", href: "/hvac" },
  { name: "Plumbing", glyph: "plumbing", href: "/plumbers" },
  { name: "Construction", glyph: "construction" },
  { name: "Agriculture", glyph: "agriculture" },
  { name: "Home services", glyph: "home" },
  { name: "More industries", glyph: "more" },
];

export const INDUSTRIES_NOTE =
  "Every one of these runs on the same component kit — a services section, a reviews section, an enquiry form — rendered from a different row of data. That is why a new industry is days rather than months.";
