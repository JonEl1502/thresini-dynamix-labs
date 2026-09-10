import type { ReactNode } from "react";
import Triad from "@/components/triad";
import s from "./section.module.css";

/**
 * Every band on the site is the same construction: a graduated rule, a margin
 * rail carrying the section index and a triad marker, and the content column.
 * The rail is the page's ruler — indices sit in the margin the way measurements
 * sit on a technical drawing.
 */
export function Section({
  id,
  index,
  label,
  invert = false,
  children,
  className,
}: {
  id?: string;
  index: string;
  label: string;
  invert?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      className={[s.section, invert ? `invert ${s.panel}` : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="shell">
        <div className={s.ruleRow}>
          <div className="tick-rule" />
        </div>
        <div className="railed">
          <div className={s.rail}>
            <Triad size={13} />
            <span className={s.index}>{index}</span>
            <span className={s.railTicks} aria-hidden="true" />
            <span className={s.railLabel}>{label}</span>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

export function SectionHead({
  id,
  title,
  lede,
  kicker,
  wide = false,
}: {
  id?: string;
  title: ReactNode;
  lede?: ReactNode;
  kicker?: ReactNode;
  wide?: boolean;
}) {
  return (
    <header className={`${s.head} ${wide ? s.headWide : ""}`} data-reveal>
      {kicker ? <p className={`eyebrow ${s.kicker}`}>{kicker}</p> : null}
      <h2 id={id ? `${id}-title` : undefined} className={s.headTitle}>
        {title}
      </h2>
      {lede ? <p className="lede">{lede}</p> : null}
    </header>
  );
}

export default Section;
