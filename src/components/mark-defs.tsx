/**
 * Paint servers for the lit marks, defined once per document.
 *
 * SVG paint servers resolve by id across the whole document, so every orbit
 * mark and triad on the page can reference these rather than each carrying its
 * own <defs> — which would put duplicate ids in the DOM the moment two lit
 * marks appear on the same route.
 *
 * Everything here is a gradient and nothing is a filter. That is deliberate:
 * an feDropShadow forces the browser to rasterize the whole ring group into a
 * size-capped texture, and once the mark is scaled up — a big display, or page
 * zoom — that texture is upscaled, which frays the node edges and blurs the
 * specular away to nothing. Gradients stay vector at any size.
 *
 * A node is built in four passes, all in objectBoundingBox units so one set of
 * gradients lights a node of any radius:
 *   1. `markCast`   — a soft shadow blob, offset below, seating it in space
 *   2. the flat brand colour
 *   3. `markSphere` — key light up and left, through a hard terminator to a
 *                     near-black edge at the lower right
 *   4. `markGloss`  — a small tight specular, which is what actually reads as
 *                     "glossy" rather than merely shaded
 */
export function MarkDefs() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        {/* r is 0.78, not 1: the focus sits up and left of centre, so the far
            edge of the node is only ~0.77 away from it. A larger radius parks
            the darkest stop outside the node and the terminator never lands. */}
        <radialGradient id="markSphere" cx="0.34" cy="0.28" r="0.78">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.46" />
          <stop offset="14%" stopColor="#FFFFFF" stopOpacity="0.16" />
          <stop offset="34%" stopColor="#05060F" stopOpacity="0" />
          <stop offset="62%" stopColor="#05060F" stopOpacity="0.26" />
          <stop offset="84%" stopColor="#05060F" stopOpacity="0.58" />
          <stop offset="100%" stopColor="#05060F" stopOpacity="0.86" />
        </radialGradient>

        <radialGradient id="markGloss" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.96" />
          <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="markCast" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#05060F" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#05060F" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#05060F" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default MarkDefs;
