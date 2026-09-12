"use client";

import { useId, useState } from "react";
import Photo from "./photo";
import QuoteForm from "./quote-form";
import { ArrowRight, Check, Clock, Phone } from "./icons";
import { telHref } from "@/data/demos";
import type { DemoSite } from "@/data/demos";
import s from "./demo.module.css";

/* --------------------------------------------------------------------------
   The booking panel.

   Adapted from the "Book an appointment" bar on Westlands Paws: the form sits
   shut and opens when someone asks to book, rather than a screen of fields
   every visitor scrolls past. The collapse uses grid-template-rows 0fr → 1fr
   rather than a max-height, because the panel's height depends on validation
   messages and the viewport — a guessed max-height either clips the last field
   or leaves dead space under it.

   Each demo declares its own way in (`layout.booking`), because the decision
   each business is asking for is different: an emergency electrician triages,
   a solicitor asks what the matter is about, an HVAC firm asks which job.
   -------------------------------------------------------------------------- */

export function BookingPanel({ site }: { site: DemoSite }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={s.booking}>
      <button
        type="button"
        className={s.bookBar}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={s.bookIcon} aria-hidden="true">
          <Clock size={22} />
        </span>
        <span className={s.bookBarText}>
          <span className={s.bookBarTitle}>{site.cta.action}</span>
          <span className={s.bookBarHint}>
            {open ? site.cta.formNote : hintFor(site)}
          </span>
        </span>
        <span className={s.bookChevron} aria-hidden="true">
          <Chevron />
        </span>
      </button>

      <div className={s.bookReveal} data-open={open} id={panelId}>
        <div className={s.bookRevealInner}>
          <div className={s.bookGrid}>
            <div>
              <Mechanism site={site} />
            </div>
            <aside className={s.bookAside}>
              {site.photos.feature ? (
                <div className={s.bookShot}>
                  <Photo src={site.photos.feature} alt="" sizes="(max-width:900px) 100vw, 35vw" />
                </div>
              ) : null}

              <div className={s.bookCard}>
                <h3 className={s.bookCardTitle}>What happens next</h3>
                <ul className={s.bookList}>
                  {site.expect.map((item) => (
                    <li key={item} className={s.bookListItem}>
                      <span className={s.bookDot} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={s.bookCard}>
                <div className={s.bookCall}>
                  <span className={s.bookCallIcon} aria-hidden="true">
                    <Phone size={22} />
                  </span>
                  <span>
                    <span className={s.bookCallLabel}>
                      {site.trade === "legal" ? "Rather talk it through?" : "Urgent? Call instead:"}
                    </span>
                    <a className={s.bookCallNumber} href={telHref(site.phoneDisplay)}>
                      {site.phoneDisplay}
                    </a>
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

function hintFor(site: DemoSite) {
  switch (site.layout.booking) {
    case "steps":
      return "Two questions, then your number. Takes about thirty seconds.";
    case "chips":
      return "Tell us what it is about — your first conversation is free.";
    case "tabs":
      return "Quote, service or breakdown — pick one and we will call you back.";
    case "split":
      return "Ring you back, or book a visit. Whichever suits.";
    default:
      return "Tell us who we would be seeing and a time that suits you.";
  }
}

/* ---------------- the five mechanisms ---------------- */

function Mechanism({ site }: { site: DemoSite }) {
  switch (site.layout.booking) {
    case "steps":
      return <Steps site={site} />;
    case "chips":
      return <Matters site={site} />;
    case "tabs":
      return <Tabs site={site} />;
    case "split":
      return <Split site={site} />;
    default:
      return <QuoteForm site={site} />;
  }
}

/** Brightwire — triage first, details second. */
function Steps({ site }: { site: DemoSite }) {
  const [step, setStep] = useState(0);
  const [job, setJob] = useState("");

  return (
    <div>
      <div className={s.stepRail}>
        <span className={`${s.stepPip} ${s.stepPipOn}`}>
          <span className={s.stepNum}>1</span>
          What&rsquo;s wrong
        </span>
        <span className={s.stepBar}>
          <span className={s.stepBarFill} style={{ width: step === 0 ? "0%" : "100%" }} />
        </span>
        <span className={`${s.stepPip} ${step === 1 ? s.stepPipOn : ""}`}>
          <span className={s.stepNum}>2</span>
          Your details
        </span>
      </div>

      {step === 0 ? (
        <>
          <div className={s.stepChoices}>
            {site.jobTypes.map((type) => (
              <button
                key={type}
                type="button"
                className={`${s.stepChoice} ${job === type ? s.stepChoiceOn : ""}`}
                onClick={() => setJob(type)}
              >
                <span className={s.stepChoiceMark} aria-hidden="true" />
                {type}
              </button>
            ))}
          </div>
          <div className={s.stepFoot}>
            <button
              type="button"
              className="btn btn--primary"
              disabled={!job}
              onClick={() => setStep(1)}
            >
              Continue <ArrowRight size={18} />
            </button>
          </div>
        </>
      ) : (
        <>
          <p className={s.matterChosen}>
            <Check size={17} />
            <strong>{job}</strong>
            <button type="button" className={s.matterChange} onClick={() => setStep(0)}>
              change
            </button>
          </p>
          <QuoteForm site={site} presetJobType={job} hideJobType chrome={false} />
          <div className={s.stepFoot}>
            <button type="button" className={s.stepBack} onClick={() => setStep(0)}>
              Back
            </button>
          </div>
        </>
      )}
    </div>
  );
}

/** Marlowe & Finch — a ruled list of matters; choosing one opens the form. */
function Matters({ site }: { site: DemoSite }) {
  const [matter, setMatter] = useState<string | null>(null);

  if (matter) {
    return (
      <div>
        <p className={s.matterChosen}>
          <Check size={17} />
          <strong>{matter}</strong>
          <button type="button" className={s.matterChange} onClick={() => setMatter(null)}>
            choose another
          </button>
        </p>
        <QuoteForm site={site} presetJobType={matter} hideJobType chrome={false} />
      </div>
    );
  }

  return (
    <div>
      <p className={s.bookBarHint} style={{ marginBottom: "1rem" }}>
        {site.cta.jobLabel}
      </p>
      <div className={s.matterList}>
        {site.jobTypes.map((type) => (
          <button key={type} type="button" className={s.matterRow} onClick={() => setMatter(type)}>
            {type}
            <span className={s.matterGo} aria-hidden="true">
              <ArrowRight size={18} />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/** Coastline — three intents as tabs, each with its own note. */
const TAB_NOTES: Record<string, string> = {
  "New installation": "We come out, measure the room and quote a fixed price in writing. Free, no obligation.",
  "Service or repair": "Breakdown line runs seven days until 9pm through summer. Most faults are fixed on the first visit.",
  Commercial: "Site assessment, heat-load design and after-hours installation at no premium.",
};

function Tabs({ site }: { site: DemoSite }) {
  const groups = [
    { label: "New installation", types: site.jobTypes.slice(0, 3) },
    { label: "Service or repair", types: site.jobTypes.slice(3, 5) },
    { label: "Commercial", types: site.jobTypes.slice(5) },
  ].filter((g) => g.types.length > 0);
  const [active, setActive] = useState(0);
  const group = groups[active];

  return (
    <div>
      <div className={s.tabRow} role="tablist">
        {groups.map((g, i) => (
          <button
            key={g.label}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`${s.tab} ${i === active ? s.tabOn : ""}`}
            onClick={() => setActive(i)}
          >
            {g.label}
          </button>
        ))}
      </div>
      <p className={s.tabNote}>{TAB_NOTES[group.label]}</p>
      <QuoteForm
        key={group.label}
        site={site}
        presetJobType={group.types[0]}
        hideJobType
        chrome={false}
      />
    </div>
  );
}

/** Halden — call me back, or book a visit. */
function Split({ site }: { site: DemoSite }) {
  const [mode, setMode] = useState<0 | 1>(0);

  return (
    <div>
      <div className={s.switchRow}>
        <button
          type="button"
          className={`${s.switchBtn} ${mode === 0 ? s.switchOn : ""}`}
          onClick={() => setMode(0)}
        >
          Ring me back
        </button>
        <button
          type="button"
          className={`${s.switchBtn} ${mode === 1 ? s.switchOn : ""}`}
          onClick={() => setMode(1)}
        >
          Book a visit
        </button>
      </div>
      <p className={s.switchHint}>
        {mode === 0
          ? "Leave a number and we will ring you back, usually within the hour during working hours. No call-out charge, and the price is agreed before we start."
          : "Tell us what the job is and the office will come back with a date and a two-hour arrival window. Nothing is charged for looking."}
      </p>
      <QuoteForm key={mode} site={site} chrome={false} />
    </div>
  );
}

function Chevron() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default BookingPanel;
