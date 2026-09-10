import s from "./clinic-panel.module.css";

const NAV = ["Appointments", "Patients", "Records", "Billing", "Marketing"];
const BARS = [42, 58, 71, 49, 88, 63, 35];
const ROWS = [
  { time: "09:15", name: "Mabel · Border Collie", tag: "Vaccination" },
  { time: "10:00", name: "Otis · Domestic Shorthair", tag: "Dental" },
  { time: "11:30", name: "Rufus · Labrador", tag: "Post-op check" },
  { time: "13:45", name: "Juno · Cockatiel", tag: "Consult" },
];

/**
 * Illustrative product interface, not a screenshot and not a claim: it shows
 * what VetHubCore is shaped like — one system holding appointments, patients,
 * records, billing and marketing.
 */
export function ClinicPanel() {
  return (
    <figure>
      <div className={s.frame}>
        <div className={s.chrome}>
          <span className={s.dots} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className={s.chromeTitle}>VetHubCore · Practice</span>
          <span className={s.chromeTag}>Live</span>
        </div>

        <div className={s.body}>
          <nav className={s.side} aria-hidden="true">
            {NAV.map((item, i) => (
              <span
                key={item}
                className={`${s.sideItem} ${i === 0 ? s.sideItemActive : ""}`}
              >
                {item}
              </span>
            ))}
          </nav>

          <div className={s.main}>
            <div className={s.stats}>
              <div className={s.stat}>
                <span className={s.statKey}>Today</span>
                <span className={s.statValue}>14</span>
              </div>
              <div className={s.stat}>
                <span className={s.statKey}>Waiting</span>
                <span className={s.statValue}>03</span>
              </div>
              <div className={s.stat}>
                <span className={s.statKey}>Unbilled</span>
                <span className={s.statValue}>07</span>
              </div>
            </div>

            <div className={s.chart}>
              <div className={s.chartHead}>
                <span>Appointments · week</span>
                <span>Mon — Sun</span>
              </div>
              <div className={s.bars} aria-hidden="true">
                {BARS.map((h, i) => (
                  <span
                    key={i}
                    className={`${s.bar} ${h === Math.max(...BARS) ? s.barPeak : ""}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <div className={s.rows}>
              {ROWS.map((row) => (
                <div key={row.time} className={s.row}>
                  <span className={s.rowTime}>{row.time}</span>
                  <span className={s.rowName}>{row.name}</span>
                  <span className={s.rowTag}>{row.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <figcaption className={s.caption}>
        VetHubCore — illustrative interface
      </figcaption>
    </figure>
  );
}

export default ClinicPanel;
