import type { ReactNode } from "react";
import type { GlyphKey } from "@/data/industries";

/**
 * Industry glyphs — schematic, hairline, drawn on the same 48-unit field as the
 * rest of the system. No emoji: every icon on this site is construction
 * geometry, and each one carries at least one solid node so it reads as part
 * of the orbit family.
 */
const PATHS: Record<GlyphKey, ReactNode> = {
  electrical: (
    <>
      <path d="M26.5 6 14 26h9l-2.5 16L34 22h-9z" />
      <circle cx="24" cy="24" r="17.5" strokeDasharray="1.5 3" opacity=".5" />
    </>
  ),
  hvac: (
    <>
      <circle cx="24" cy="24" r="4.5" fill="currentColor" stroke="none" />
      <path d="M24 12.5a11.5 11.5 0 0 1 9.96 5.75" />
      <path d="M14.04 29.75A11.5 11.5 0 0 1 24 12.5" />
      <path d="M33.96 29.75a11.5 11.5 0 0 1-19.92 0" opacity=".45" />
      <path d="M24 5v4M40.5 33.5l-3.5-2M7.5 33.5l3.5-2" />
    </>
  ),
  plumbing: (
    <>
      <path d="M12 12h10a14 14 0 0 1 14 14v10" />
      <path d="M7 8v8M32 41h8" />
      <path d="M7 8h10M40 36v10" opacity=".45" />
      <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
    </>
  ),
  construction: (
    <>
      <path d="M7 40 24 8l17 32z" />
      <path d="M14 28h20M17.5 34h13" opacity=".5" />
      <circle cx="24" cy="8" r="3" fill="currentColor" stroke="none" />
    </>
  ),
  agriculture: (
    <>
      <circle cx="24" cy="15" r="4" fill="currentColor" stroke="none" />
      <path d="M6 28c6-4 30-4 36 0M6 35c6-4 30-4 36 0" />
      <path d="M24 21v6" opacity=".5" />
    </>
  ),
  veterinary: (
    <>
      <circle cx="24" cy="24" r="16" />
      <path d="M24 16v16M16 24h16" />
      <circle cx="24" cy="24" r="3.2" fill="currentColor" stroke="none" />
    </>
  ),
  home: (
    <>
      <path d="M8 22 24 9l16 13v18H8z" />
      <path d="M19 40V28h10v12" opacity=".55" />
      <circle cx="24" cy="9" r="2.8" fill="currentColor" stroke="none" />
    </>
  ),
  more: (
    <>
      {[12, 24, 36].map((y) =>
        [12, 24, 36].map((x) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2.6" fill="currentColor" stroke="none" />
        )),
      )}
    </>
  ),
};

export function Glyph({
  name,
  size = 44,
  className,
}: {
  name: GlyphKey;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}

export default Glyph;
