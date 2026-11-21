import { SITE } from "@/data/site";
import s from "./contact-links.module.css";

/* Call and WhatsApp, side by side. Used next to the email on the home
   contact section and the contact page. */
export function ContactLinks() {
  return (
    <div className={s.row}>
      <a href={SITE.phoneHref} className={s.link}>
        <PhoneIcon />
        <span>
          <span className={s.key}>Call</span>
          {SITE.phone}
        </span>
      </a>
      <a href={SITE.whatsappHref} className={s.link} target="_blank" rel="noopener noreferrer">
        <ChatIcon />
        <span>
          <span className={s.key}>WhatsApp</span>
          {SITE.phone}
        </span>
      </a>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
      <path d="M5 3h4l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
      <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.2A8.5 8.5 0 1 1 21 12z" />
    </svg>
  );
}

export default ContactLinks;
