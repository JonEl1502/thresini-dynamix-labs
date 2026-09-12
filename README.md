# thresini-dynamix-labs

Marketing site for ThreSiNi Dynamix Labs — a software studio building websites,
mobile applications and SaaS products for businesses worldwide.

## Stack

- Next.js 16 (App Router, Turbopack) with React 19
- TypeScript, CSS Modules, no UI framework
- Archivo variable font, loaded on both the weight and width axes

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Structure

```
src/
  app/
    (site)/      the ThreSiNi corporate site — its own root layout
    (demo)/      the client-facing demo sites — their own root layout
    api/         lead endpoints
  components/
    demo/        the reusable demo kit (see below)
    ...          ThreSiNi UI — orbit mark, tesseract, forms, page furniture
  data/
    demos/       one file per demo business
    verticals.ts the sales page for each industry
  styles/        module CSS shared across inner pages
```

There are two root layouts. `(site)` is ThreSiNi; `(demo)` is the demo sites,
which own their own `<html>`, fonts and theme so none of ThreSiNi's chrome,
palette or type can leak into a page we ask a prospect to imagine as theirs.

Copy and configuration live in `src/data`, not inline in components, so wording
can change without touching layout.

## Design system

The token layer at the top of `src/app/globals.css` is the source of truth:
ground, surface, the three accent colours, spacing and the type scale. Sections
alternate between the indigo ground and inverted paper panels via the global
`.invert` class, and every colour used for text is checked to clear WCAG AA on
the ground it sits on — the ratios are recorded in the comments there.

The brand mark is generated, not an asset. `OrbitMark` draws three rings of
3, 6 and 9 nodes and animates them at a 3:2:1 ratio so they realign exactly
once per cycle; `Tesseract` projects a real 4D hypercube down through 3D, with
its edges coloured by axis. Both respect `prefers-reduced-motion`.

## Demo sites

`/demos` lists five complete, working websites for fictional businesses —
electrical, veterinary, legal, HVAC and plumbing, across the three markets.
They exist so a prospect can click around a finished site in their own line of
work instead of reading a description of one. Each vertical landing page
(`/electricians`, `/veterinary`, `/law-firms`, `/hvac`, `/plumbers`) is a sales
page built around opening its demo.

**They all run on one component kit.** `src/components/demo/` holds the
sections — hero, services, reviews, areas, FAQs, enquiry form, call bar,
schema. None of them knows what industry it is rendering. A demo is:

1. a data file in `src/data/demos/` implementing `DemoSite`;
2. a `[data-theme]` block in `src/app/(demo)/demo.css` — palette, type, radius,
   density;
3. one row in `src/data/verticals.ts` for the landing page that sells it.

That is the whole extension path. No new components, no copied pages.

### Layout variants

Theming alone was not enough: five sites sharing one section order still read
as one template recoloured. So the kit carries real structural variants, and
each demo names one per section plus its own section order in its `layout`
block (`src/components/demo/variants.tsx`):

- **hero** — `cinematic` (full-bleed photograph, copy in the dark of it),
  `split` (copy beside a collage), `editorial` (centred, ruled, a muted band
  beneath), `magazine` (asymmetric card with chips floating off it), `stack`
  (photographic band with an overlapping card).
- **services** — `numbered` (a works schedule), `photoTiles`, `ledger` (ruled
  two-column list with dotted leaders to the price), `alternating` (image and
  copy rows), `iconGrid`.
- **reviews** — `strip`, `soft`, `feature` (one pull quote), `columns`, `quilt`.
- **areas** — `chips`, `photoList`, `textColumns`, `tiles`.

The copy, data and behaviour are identical across variants; only the
arrangement changes. Section tone (plain / tint / inverted panel) falls out of
each demo's own order, so the rhythm differs without anyone placing it by hand.

### Photography

`public/demo/<vertical>/` holds local, optimised stock photography — see
`public/demo/CREDITS.md`. It is stored locally rather than hotlinked so a demo
never depends on a third party being reachable mid-pitch, and served through
`next/image` via `src/components/demo/photo.tsx`. `next.config.ts` narrows the
generated size ladder so a cold page does not sit on grey placeholders.

Stock is a stand-in. A real build uses the client's own premises, team and
finished work, which converts far better — it is the first thing we ask for.

### Rules for a new demo

- **It is fictional, and it says so.** Every page carries a demo ribbon, the
  footer names ThreSiNi, and the enquiry form states that nothing is stored.
  The pages are `noindex`. We do not put a company that does not exist online
  without saying so.
- **Phone numbers come from the ranges regulators reserve for fiction** — US
  `555-01xx`, Ofcom drama blocks, ACMA drama blocks — so a `tel:` link can
  never reach a real person.
- **Match the market.** Spelling, currency, terminology and the statutory body
  a customer actually checks: `ARCtick` and `QBCC` in Queensland, `Gas Safe` in
  Manchester, the state ROC in Arizona, the `SRA` in Leeds. Getting this wrong
  is the first thing a prospect notices.
- **The call to action comes from the data.** A plumber asks for a callback and
  a vet asks for an appointment; `cta` on `DemoSite` drives every button, so no
  component carries trade-specific wording.
- **Invent nothing for a real business.** Demo reviews belong to a labelled
  fiction. We do not publish borrowed reviews on our own site, and we do not
  write any for a client's.
