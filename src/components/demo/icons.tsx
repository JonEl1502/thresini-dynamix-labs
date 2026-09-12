/* Small line icons shared across the demo kit. One weight, one grid, so a
   services grid in any vertical reads as a single set. */

type P = { size?: number; className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Svg({ size = 20, className, children }: P & { children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} {...base}>
      {children}
    </svg>
  );
}

export const Check = (p: P) => (
  <Svg {...p}>
    <path d="m4 12.5 5 5L20 6.5" strokeWidth="2.4" />
  </Svg>
);

export const ArrowRight = (p: P) => (
  <Svg {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </Svg>
);

export const Phone = (p: P) => (
  <Svg {...p}>
    <path d="M5 3h4l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />
  </Svg>
);

export const Shield = (p: P) => (
  <Svg {...p}>
    <path d="M12 3l7 3v6c0 4.4-3 7.9-7 9-4-1.1-7-4.6-7-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

export const Clock = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.5l3.5 2" />
  </Svg>
);

export const Pin = (p: P) => (
  <Svg {...p}>
    <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </Svg>
);

export const Star = ({ size = 16, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
    <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
  </svg>
);

/* Service-tile icons, keyed by the scene each service declares. Anything
   unmapped falls back to a neutral mark rather than breaking the grid. */
const SERVICE_ICONS: Record<string, React.ReactNode> = {
  panel: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 7h6M9 11h6M9 15h3" /></>,
  ev: <><rect x="4" y="4" width="9" height="13" rx="2" /><path d="M13 9h4a3 3 0 0 1 3 3v5M8 8l-1 3h3l-1 3" /></>,
  wiring: <><path d="M3 8h4c3 0 3 8 6 8s3-8 6-8h2" /><circle cx="3" cy="8" r="1.4" /><circle cx="21" cy="16" r="1.4" /></>,
  lighting: <><path d="M12 3v2M5 8l1.5 1M19 8l-1.5 1" /><path d="M8 16a5 5 0 1 1 8 0z" /><path d="M10 20h4" /></>,
  commercial: <><rect x="3" y="8" width="8" height="13" rx="1" /><rect x="13" y="3" width="8" height="18" rx="1" /><path d="M6 12h2M6 16h2M16 7h2M16 11h2M16 15h2" /></>,
  split: <><rect x="3" y="5" width="18" height="7" rx="2" /><path d="M7 16c1 1.2 1 2.8 0 4M12 16c1 1.2 1 2.8 0 4M17 16c1 1.2 1 2.8 0 4" /></>,
  ducted: <><path d="M3 5h8v5H3zM11 7h6v12" /><path d="M6 10v4M14 19h6" /><path d="M7 18v2M17 12v3" /></>,
  repair: <><path d="M14 7a4 4 0 0 0 5.2 5.2L21 14l-7 7-4-4 7-7z" /><path d="M9 3 3 9l3 3 6-6z" /></>,
  service: <><circle cx="12" cy="12" r="8" /><path d="m8.5 12 2.5 2.5L16 9.5" /></>,
  boiler: <><rect x="5" y="3" width="14" height="14" rx="2" /><path d="M8 6h8M9 11h1M14 11h1M8 17v4M16 17v4" /></>,
  leak: <><path d="M3 7h9a3 3 0 0 1 3 3v3" /><path d="M15 16c1.4 1.9 2 2.8 2 3.6a2 2 0 1 1-4 0c0-.8.6-1.7 2-3.6z" /><path d="M4 21h8" /></>,
  bathroom: <><path d="M3 12h18v2a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6z" /><path d="M7 12V6a2.5 2.5 0 0 1 5 0" /><path d="M8 20v2M16 20v2" /></>,
  drain: <><circle cx="12" cy="12" r="8" /><path d="M8 8v8M12 6v12M16 8v8" /></>,
  checkup: <><path d="M4.5 9.5a3 3 0 0 1 6 0c0 2-3 4.5-3 4.5s-3-2.5-3-4.5z" /><circle cx="17" cy="8" r="3" /><path d="M6 17h12a2 2 0 0 1 0 4H6a2 2 0 0 1 0-4z" /></>,
  clinic: <><path d="M4 21V9l8-6 8 6v12z" /><path d="M12 9v6M9 12h6" /></>,
  dental: <><path d="M12 5c2.5-2 7-1 7 3.5 0 4-2 5-2.5 8.5-.4 2.8-2.5 2.8-3 .3-.3-1.8-.3-2.8-1.5-2.8s-1.2 1-1.5 2.8c-.5 2.5-2.6 2.5-3-.3C7 13.5 5 12.5 5 8.5 5 4 9.5 3 12 5z" /></>,
  surgery: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M6 12h3l1.5-3 2.5 6 1.5-3H18" /></>,
  imaging: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M9 17V9a3 3 0 0 1 6 0v8M9 12h6M12 9v8" /><path d="M8 21h8" /></>,
  senior: <><path d="M5 10a3 3 0 0 1 6 0c0 2-3 4.5-3 4.5S5 12 5 10z" /><circle cx="17" cy="8" r="3" /><path d="M6 17h12a2 2 0 0 1 0 4H6a2 2 0 0 1 0-4z" /></>,
  family: <><circle cx="8" cy="7" r="2.6" /><circle cx="16.5" cy="8" r="2.2" /><path d="M3.5 20v-4a4.5 4.5 0 0 1 9 0v4M13.5 20v-3.5a3.8 3.8 0 0 1 7 0V20" /></>,
  property: <><path d="M4 20V10l8-6 8 6v10z" /><path d="M10 20v-6h4v6" /></>,
  scales: <><path d="M12 4v16M7 20h10" /><path d="M4 9h16M4 9l-2 5h4zM20 9l2 5h-4z" /></>,
  consult: <><circle cx="8" cy="9" r="3" /><path d="M3 19v-1a5 5 0 0 1 10 0v1" /><path d="M15 8h6M15 12h6M15 16h4" /></>,
  documents: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h4" /></>,
  courthouse: <><path d="M3 9 12 4l9 5" /><path d="M5 9v9M10 9v9M14 9v9M19 9v9M3 21h18" /></>,
};

export const ServiceIcon = ({ name, size = 26 }: { name: string; size?: number }) => (
  <Svg size={size}>{SERVICE_ICONS[name] ?? <><circle cx="12" cy="12" r="8" /><path d="M12 8v8M8 12h8" /></>}</Svg>
);
