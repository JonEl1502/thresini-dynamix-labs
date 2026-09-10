import {
  LEADS_CAPTION,
  LEADS_FILTERS,
  LEADS_ROWS,
  LEADS_STRAPLINE,
  LEADS_TABS,
  type LeadRow,
} from "@/data/products";
import s from "./leads-console.module.css";

/**
 * ThreSiNi Leads — the working console, rebuilt.
 *
 * Structure is the shipped screen: two tabs, the status filters, the search /
 * add / import actions, and the PRACTICE / WHERE / CONTACT / SCORE / STATUS
 * columns. Every row of data is invented — the live queue holds real
 * businesses' contact details and is never reproduced.
 */
export function LeadsConsole({
  rows = LEADS_ROWS,
  compact = false,
  caption = true,
}: {
  rows?: LeadRow[];
  compact?: boolean;
  caption?: boolean;
}) {
  return (
    <figure>
      <div className={s.console}>
        <div className={s.bar} role="presentation">
          {LEADS_TABS.map((tab) => (
            <span
              key={tab.label}
              className={`${s.tab} ${tab.active ? s.tabActive : ""}`}
            >
              {tab.label}
              <span className={s.count}>{tab.count}</span>
            </span>
          ))}
        </div>

        {!compact ? (
          <div className={s.controls}>
            <div className={s.filters}>
              {LEADS_FILTERS.map((filter) => (
                <span
                  key={filter.label}
                  className={`${s.filter} ${filter.active ? s.filterActive : ""}`}
                >
                  {filter.label}
                  {filter.count !== null ? <span>({filter.count})</span> : null}
                </span>
              ))}
            </div>
            <div className={s.actions}>
              <span className={s.search}>
                <SearchIcon />
                Search prospects
              </span>
              <span className={s.action}>+ Add one</span>
              <span className={s.action}>Import list</span>
            </div>
          </div>
        ) : null}

        <p className={s.strapline}>{LEADS_STRAPLINE}</p>

        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th scope="col">Practice</th>
                <th scope="col">Where</th>
                <th scope="col">Contact</th>
                <th scope="col">Score</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <span className={s.practice}>
                      <span className={s.practiceName}>{row.practice}</span>
                      <span className={s.meta}>
                        <span>{row.type}</span>
                        <span className={s.recordId}>{row.id}</span>
                      </span>
                    </span>
                  </td>
                  <td>
                    <span className={s.where}>
                      <span>{row.town}</span>
                      <span className={s.country}>{row.country}</span>
                    </span>
                  </td>
                  <td>
                    <span className={s.contact}>
                      {row.email ? (
                        <span className={s.email}>{row.email}</span>
                      ) : (
                        <span className={s.noEmail}>No email yet</span>
                      )}
                      <span className={s.phone}>{row.phone}</span>
                    </span>
                  </td>
                  <td>
                    <span className={s.scoreCell}>
                      <span className={s.scoreValue}>{row.score}</span>
                      <span
                        className={`${s.band} ${
                          row.band === "HIGH" ? s.bandHigh : s.bandMedium
                        }`}
                      >
                        {row.band}
                      </span>
                    </span>
                  </td>
                  <td>
                    <span className={s.statusChip}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Under 760px the table collapses to one card per prospect. */}
        <div className={s.cards}>
          {rows.map((row) => (
            <div key={row.id} className={s.card}>
              <div className={s.cardTop}>
                <span className={s.practice}>
                  <span className={s.practiceName}>{row.practice}</span>
                  <span className={s.meta}>
                    <span>{row.type}</span>
                    <span className={s.recordId}>{row.id}</span>
                  </span>
                </span>
                <span className={s.scoreCell}>
                  <span className={s.scoreValue}>{row.score}</span>
                  <span
                    className={`${s.band} ${
                      row.band === "HIGH" ? s.bandHigh : s.bandMedium
                    }`}
                  >
                    {row.band}
                  </span>
                </span>
              </div>
              <div className={s.cardFacts}>
                <div className={s.cardFact}>
                  <span className={s.cardKey}>Where</span>
                  <span>
                    {row.town} · {row.country}
                  </span>
                </div>
                <div className={s.cardFact}>
                  <span className={s.cardKey}>Contact</span>
                  <span className={s.contact}>
                    {row.email ? (
                      <span className={s.email}>{row.email}</span>
                    ) : (
                      <span className={s.noEmail}>No email yet</span>
                    )}
                    <span className={s.phone}>{row.phone}</span>
                  </span>
                </div>
                <div className={s.cardFact}>
                  <span className={s.cardKey}>Status</span>
                  <span>
                    <span className={s.statusChip}>{row.status}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {caption ? <figcaption className={s.caption}>{LEADS_CAPTION}</figcaption> : null}
    </figure>
  );
}

function SearchIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="10.5" cy="10.5" r="7" />
      <path d="m21 21-5.5-5.5" />
    </svg>
  );
}

export default LeadsConsole;
