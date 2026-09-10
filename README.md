# thresini-dynamix-labs

Marketing site for ThreSiNi Dynamix Labs — a software studio building websites,
mobile applications and SaaS products for businesses in the USA, UK and Australia.

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
  app/           routes; one folder per page, plus the icon/favicon files
  components/    shared UI — the orbit mark, tesseract, forms, page furniture
  data/          all site copy and configuration, kept out of the components
  styles/        module CSS shared across inner pages
```

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
