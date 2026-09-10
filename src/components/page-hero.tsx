import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import s from "./page-hero.module.css";

export interface Crumb {
  href?: string;
  label: string;
}

/**
 * The inner-page counterpart to the home hero: same construction, a third of
 * the height. The aside slot takes whichever piece of the mark the page owns —
 * a lit triad for an offering, the full mark for everything else.
 */
export function PageHero({
  crumbs = [],
  title,
  lede,
  actions,
  aside,
  readouts,
  accent,
  titleId = "page-title",
}: {
  crumbs?: Crumb[];
  title: ReactNode;
  lede?: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  readouts?: { key: string; value: string }[];
  accent?: string;
  titleId?: string;
}) {
  return (
    <section
      className={s.hero}
      aria-labelledby={titleId}
      style={accent ? ({ "--accent": accent } as CSSProperties) : undefined}
    >
      <div className="shell">
        <div className={s.grid}>
          <div className={s.copy}>
            {crumbs.length > 0 ? (
              <nav className={s.crumbs} aria-label="Breadcrumb">
                {crumbs.map((crumb, i) => (
                  <span key={crumb.label} className={s.crumbItem}>
                    {i > 0 ? (
                      <span className={s.sep} aria-hidden="true">
                        /{" "}
                      </span>
                    ) : null}
                    {crumb.href ? (
                      <Link href={crumb.href}>{crumb.label}</Link>
                    ) : (
                      <span aria-current="page">{crumb.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            ) : null}

            <h1 id={titleId} className={s.title}>
              {title}
            </h1>
            {lede ? <p className={`lede ${s.lede}`}>{lede}</p> : null}
            {actions ? <div className={s.actions}>{actions}</div> : null}
          </div>

          {aside ? (
            <div className={s.aside}>
              <span className={s.asidePlate} aria-hidden="true" />
              {aside}
            </div>
          ) : null}
        </div>

        {readouts && readouts.length > 0 ? (
          <dl className={s.readouts}>
            {readouts.map((item) => (
              <div key={item.key} className={s.readout}>
                <dt className={s.readoutKey}>{item.key}</dt>
                <dd className={s.readoutValue}>{item.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}

export default PageHero;
