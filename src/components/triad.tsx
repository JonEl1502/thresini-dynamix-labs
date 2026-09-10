import type { CSSProperties } from "react";

/**
 * The footer glyph and section marker: the mark reduced to its three alignment
 * spokes. Not a slice of OrbitMark's ring geometry — it is the shipped
 * standalone triad, three r=11 nodes on a viewBox of 100.
 *
 * The three nodes carry the three accent colours, clockwise from the top:
 *   top   → gold   → Websites
 *   right → green  → Mobile applications
 *   left  → violet → SaaS applications
 *
 * Lighting one node and dimming the other two is how the page says "you are
 * looking at this one" without a word of copy.
 */
const NODES = [
  { key: "gold", cx: 50, cy: 20 },
  { key: "green", cx: 76, cy: 65 },
  { key: "violet", cx: 24, cy: 65 },
] as const;

export type TriadRing = (typeof NODES)[number]["key"];

const RING_COLOR: Record<TriadRing, string> = {
  gold: "var(--gold)",
  green: "var(--green)",
  violet: "var(--violet)",
};

export interface TriadProps {
  size?: number;
  /** Light exactly one node in its ring colour and dim the other two. */
  lit?: TriadRing;
  /** Paint all three in their own ring colours (the full system key). */
  system?: boolean;
  color?: string;
  dimOpacity?: number;
  /** Render the nodes as lit spheres, with unlit ones dropped to a hairline
      ring. For display-size marks only — at label size it just goes muddy. */
  dimensional?: boolean;
  className?: string;
  title?: string;
  style?: CSSProperties;
}

export function Triad({
  size = 20,
  lit,
  system = false,
  color = "currentColor",
  dimOpacity = 0.28,
  dimensional = false,
  className,
  title,
  style,
}: TriadProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      style={style}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {NODES.map((node) => {
        const isLit = system || lit === node.key;

        /* At display size an unlit node reads better as an empty socket than as
           a grey ball competing with the lit one. */
        if (dimensional && !isLit) {
          return (
            <circle
              key={node.key}
              cx={node.cx}
              cy={node.cy}
              r={10.2}
              fill="none"
              stroke={color}
              strokeWidth={1.6}
              opacity={0.24}
            />
          );
        }

        return (
          <g key={node.key}>
            {dimensional ? (
              <ellipse
                cx={node.cx}
                cy={node.cy + 11 * 0.5}
                rx={11 * 1.05}
                ry={11 * 0.92}
                fill="url(#markCast)"
              />
            ) : null}
            <circle
              cx={node.cx}
              cy={node.cy}
              r={11}
              fill={isLit ? RING_COLOR[node.key] : color}
              opacity={lit && !isLit ? dimOpacity : 1}
            />
            {dimensional ? (
              <>
                <circle cx={node.cx} cy={node.cy} r={11} fill="url(#markSphere)" />
                <ellipse
                  cx={node.cx - 11 * 0.34}
                  cy={node.cy - 11 * 0.4}
                  rx={11 * 0.3}
                  ry={11 * 0.23}
                  fill="url(#markGloss)"
                  transform={`rotate(-30 ${node.cx - 11 * 0.34} ${node.cy - 11 * 0.4})`}
                />
              </>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}

export default Triad;
