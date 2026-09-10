"use client";

import { useEffect, useRef } from "react";

/**
 * A tesseract — the 4-dimensional analogue of a cube — projected down to the
 * page.
 *
 * 16 vertices at every combination of ±1 in four axes; two vertices share an
 * edge when they differ in exactly one coordinate, which gives 32 edges. The
 * figure is rotated in two 4D planes at once (XW and YZ), then projected
 * 4D → 3D → 2D with a perspective divide at each step. The XW rotation is what
 * produces the familiar turning-inside-out motion: the inner cube swells
 * outward and the outer one collapses through it, because "inner" and "outer"
 * are only an artefact of viewing a 4D object from a fixed w.
 *
 * Edges are coloured by the axis they run along, which is a property of the
 * edge itself and not of where it happens to be pointing — so a given edge
 * keeps its colour for the whole rotation instead of flickering between hues.
 * The three spatial axes take the three brand colours; the w edges, the ones
 * that make this a tesseract rather than two nested cubes, stay neutral so the
 * palette reads as three and the connective geometry recedes.
 *
 * Within each axis the edges are bucketed by depth, so nearer geometry reads
 * brighter and heavier than far geometry without needing a stroke element per
 * edge. One frame writes twelve `d` attributes and touches nothing else.
 */
const VERTICES: number[][] = Array.from({ length: 16 }, (_, i) => [
  i & 1 ? 1 : -1,
  i & 2 ? 1 : -1,
  i & 4 ? 1 : -1,
  i & 8 ? 1 : -1,
]);

/** [from, to, axis] — axis 0..2 are spatial, 3 is w. */
const EDGES: [number, number, number][] = [];
for (let i = 0; i < 16; i++) {
  for (let axis = 0; axis < 4; axis++) {
    const j = i ^ (1 << axis);
    if (j > i) EDGES.push([i, j, axis]);
  }
}

const AXES = [
  { color: "var(--gold)", fade: 1 },
  { color: "var(--green)", fade: 1 },
  { color: "var(--violet)", fade: 1 },
  { color: "currentColor", fade: 0.55 },
] as const;

/** Depth buckets, near to far. */
const DEPTH = [
  { width: 0.22, opacity: 0.9 },
  { width: 0.15, opacity: 0.55 },
  { width: 0.1, opacity: 0.3 },
] as const;

/* Camera distance on each projection, and the scale that maps the result into
   the viewBox. Both divides multiply, so the far corner of the figure lands at
   roughly k4 * k3 * SCALE — keep that inside the 50-unit half-box or the
   geometry clips and the solid stops reading as one object. */
const D4 = 3.4;
const D3 = 5.5;
const SCALE = 16;

function rotate(p: number[], a: number, b: number, angle: number) {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  const x = p[a];
  const y = p[b];
  p[a] = x * c - y * s;
  p[b] = x * s + y * c;
}

export function Tesseract({
  className,
  /** Seconds for one full turn of the slower 4D plane. */
  cycle = 90,
}: {
  className?: string;
  cycle?: number;
}) {
  /* One path per axis per depth bucket, indexed axis * 3 + bucket. */
  const paths = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();

    const draw = (t: number) => {
      const elapsed = still ? cycle * 1000 * 0.14 : t - start;
      const aXW = (elapsed / (cycle * 1000)) * Math.PI * 2;
      const aYZ = aXW * 0.62;
      const aXY = aXW * 0.24;

      const segments: string[][] = Array.from({ length: 12 }, () => []);

      const projected = VERTICES.map((v) => {
        const p = v.slice();
        /* A fixed oblique tilt applied before the animated planes. Without it
           the figure passes through orientations where whole cells are edge-on
           and it collapses to a flat outline. */
        rotate(p, 0, 2, 0.62);
        rotate(p, 1, 2, 0.38);
        rotate(p, 0, 3, aXW);
        rotate(p, 1, 2, aYZ);
        rotate(p, 0, 1, aXY);
        const k4 = D4 / (D4 - p[3]);
        const x = p[0] * k4;
        const y = p[1] * k4;
        const z = p[2] * k4;
        const k3 = D3 / (D3 - z);
        return { x: x * k3 * SCALE, y: y * k3 * SCALE, depth: k3 * k4 };
      });

      for (const [a, b, axis] of EDGES) {
        const p = projected[a];
        const q = projected[b];
        const depth = (p.depth + q.depth) / 2;
        const bucket = depth > 1.12 ? 0 : depth > 0.9 ? 1 : 2;
        segments[axis * 3 + bucket].push(
          `M${p.x.toFixed(2)} ${p.y.toFixed(2)}L${q.x.toFixed(2)} ${q.y.toFixed(2)}`,
        );
      }

      for (let i = 0; i < 12; i++) {
        paths.current[i]?.setAttribute("d", segments[i].join(""));
      }

      if (!still) frame = requestAnimationFrame(draw);
    };

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [cycle]);

  return (
    <svg
      viewBox="-50 -50 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
      fill="none"
      strokeLinecap="round"
    >
      {AXES.map((axis, a) => (
        <g key={a} stroke={axis.color}>
          {DEPTH.map((depth, d) => (
            <path
              key={d}
              ref={(el) => {
                paths.current[a * 3 + d] = el;
              }}
              strokeWidth={depth.width}
              opacity={depth.opacity * axis.fade}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

export default Tesseract;
