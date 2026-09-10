import type { CSSProperties } from "react";

/**
 * Geometry is normalised against the outer ring radius (R = 1).
 *
 * Ring radii were tuned against the 25mm production check: the binding
 * constraint is the RADIAL gap at the three alignment spokes, not the gap
 * between neighbours within a ring. Inner ring sits at 0.32 (not 0.35) so the
 * inner→middle spoke gap clears 1mm with margin at 25mm mark width.
 *
 * Phase is zero for every ring, which is the whole point: 3 | 6 and 3 | 9, so
 * all three rings carry a node at 0°, 120° and 240°. Those three radial
 * alignments are the mark's signature.
 */
const RINGS = [
  { count: 9, radius: 1.0, node: 0.064, spin: 120 },
  { count: 6, radius: 0.66, node: 0.09, spin: 240 },
  { count: 3, radius: 0.32, node: 0.104, spin: 360 },
] as const;

/**
 * Spin degrees are exact integer multiples of each ring's own rotational
 * symmetry (360/3, 240/60, 120/40 = 3, 4, 3), so every ring lands back on
 * itself. The only instant all three are simultaneously home is t = 1, giving
 * exactly one alignment per cycle. Inner ring is fastest — orbits behave that
 * way, and the mark is called Orbit.
 */

export type OrbitVariant = "full" | "reduced" | "minimal";

/** Below ~20mm / 20px the outer ring stops resolving. Below ~14px only the triangle survives. */
export function variantForSize(px: number): OrbitVariant {
  if (px >= 32) return "full";
  if (px >= 20) return "reduced";
  return "minimal";
}

const RING_COUNT: Record<OrbitVariant, number> = { full: 3, reduced: 2, minimal: 1 };

const SYSTEM_COLORS = ["var(--violet)", "var(--green)", "var(--gold)"];

/**
 * Optical node radii, in viewBox units, for small renders.
 *
 * At masthead size (28px) the computed radii — node * R = 2.56 / 3.60 / 4.16 —
 * disappear into the hairline. The shipped masthead keeps all three rings and
 * bumps the nodes to these values instead of dropping to the `reduced`
 * variant, which keeps the mark legible at brand-mark scale. The bump is
 * NOT a uniform scale: the outer ring needs proportionally more weight than
 * the inner one to hold at that size.
 */
const OPTICAL_NODE: Record<number, number> = { 9: 3.4, 6: 4.4, 3: 5.0 };

/** Under this rendered size the nodes get the optical bump. */
const OPTICAL_THRESHOLD = 36;

export type OrbitPalette = "mono" | "system";

export interface OrbitMarkProps {
  /** Rendered width/height in px. Also selects the variant when none is given. */
  size?: number;
  /** Force a ring count instead of deriving it from `size`. */
  variant?: OrbitVariant;
  /** `mono` paints every ring in `color`; `system` paints outer/mid/inner violet/green/gold. */
  palette?: OrbitPalette;
  color?: string;
  /** Arms the eased 3s spin. The drift handoff is driven by a `.drift` ancestor. */
  animated?: boolean;
  /** Seconds for one full realignment once drifting. */
  cycle?: number;
  /** Skip the eased entrance and put the rings straight into the slow linear
      loop. The class goes on the svg itself, which is ancestor enough for the
      `.drift .orbit-ring` rule and keeps `.aside > svg` selectors intact. */
  drift?: boolean;
  /** Force the small-size optical node bump on or off. */
  optical?: boolean;
  /** Render the nodes as lit spheres instead of flat discs. Defaults on at
      display sizes; a 28px masthead mark reads better flat. */
  dimensional?: boolean;
  className?: string;
  /** Supplying a title makes the mark an image; omitting it makes it decorative. */
  title?: string;
  style?: CSSProperties;
}

/** Below this rendered size a lit sphere just reads as a muddy disc. */
const DIMENSIONAL_THRESHOLD = 96;

export function OrbitMark({
  size = 48, variant, palette = "mono", color = "var(--gold)",
  animated = false, cycle = 6, drift = false, className, title,
  optical, dimensional, style,
}: OrbitMarkProps) {
  const resolved = variant ?? variantForSize(size);
  const rings = RINGS.slice(RINGS.length - RING_COUNT[resolved]);
  const R = 40; // viewBox 100 wide, outer ring at radius 40
  /* renders <g class="orbit-ring" style={{animationName:`orbit-spin-${ring.count}`}}>
     with `count` circles at cx=50, cy={50 - radius*R}, r={node*R},
     transform={`rotate(${360/count*n} 50 50)`} */
  const bump = optical ?? size < OPTICAL_THRESHOLD;
  const lit = dimensional ?? size >= DIMENSIONAL_THRESHOLD;
  const paletteOffset = RINGS.length - rings.length;

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={[drift ? "drift" : "", className].filter(Boolean).join(" ") || undefined}
      style={{ "--orbit-cycle": `${cycle}s`, ...style } as CSSProperties}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {rings.map((ring, i) => {
        const fill = palette === "system" ? SYSTEM_COLORS[paletteOffset + i] : color;
        const r = bump ? OPTICAL_NODE[ring.count] : ring.node * R;
        return (
          <g
            key={ring.count}
            className={animated ? "orbit-ring" : undefined}
            style={animated ? { animationName: `orbit-spin-${ring.count}` } : undefined}
          >
            {Array.from({ length: ring.count }, (_, n) => {
              const spoke = `rotate(${(360 / ring.count) * n} 50 50)`;
              const cy = 50 - ring.radius * R;
              return (
                <g key={n} transform={spoke}>
                  {lit ? (
                    <ellipse
                      cx={50}
                      cy={cy + r * 0.5}
                      rx={r * 1.05}
                      ry={r * 0.92}
                      fill="url(#markCast)"
                    />
                  ) : null}
                  <circle cx={50} cy={cy} r={r} fill={fill} />
                  {lit ? (
                    <>
                      <circle cx={50} cy={cy} r={r} fill="url(#markSphere)" />
                      <ellipse
                        cx={50 - r * 0.34}
                        cy={cy - r * 0.4}
                        rx={r * 0.3}
                        ry={r * 0.23}
                        fill="url(#markGloss)"
                        transform={`rotate(-30 ${50 - r * 0.34} ${cy - r * 0.4})`}
                      />
                    </>
                  ) : null}
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

export default OrbitMark;

/**
 * The construction the mark is drawn on: the three orbit paths and the three
 * radial spokes at 0° / 120° / 240° where every ring carries a node. Purely
 * decorative — it exists so the layout can show its own working.
 */
export function OrbitGraticule({
  size = 640, className, style,
}: { size?: number; className?: string; style?: CSSProperties }) {
  const R = 40;
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth={0.22} vectorEffect="non-scaling-stroke">
        {RINGS.map((ring) => (
          <circle key={ring.count} cx={50} cy={50} r={ring.radius * R} />
        ))}
        <circle cx={50} cy={50} r={R * 1.28} strokeDasharray="1.2 2.4" opacity={0.7} />
        {[0, 120, 240].map((deg) => (
          <line
            key={deg}
            x1={50}
            y1={50}
            x2={50}
            y2={50 - R * 1.28}
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
      </g>
    </svg>
  );
}
