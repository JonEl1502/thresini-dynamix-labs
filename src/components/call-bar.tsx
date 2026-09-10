import { SITE } from "@/data/site";
import s from "./call-bar.module.css";

export function CallBar({ reviewHref = "#review" }: { reviewHref?: string }) {
  const tel = SITE.phone.replace(/[^\d+]/g, "");
  return (
    <>
      <div className={s.spacer} aria-hidden="true" />
      <div className={s.bar}>
        <a className={`${s.action} ${s.primary}`} href={`tel:${tel}`}>
          <PhoneIcon />
          Call now
        </a>
        <a className={`${s.action} ${s.secondary}`} href={reviewHref}>
          Free site review
        </a>
      </div>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 3h4l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export default CallBar;
