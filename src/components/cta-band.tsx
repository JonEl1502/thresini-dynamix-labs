import Link from "next/link";
import Section from "@/components/section";
import s from "@/styles/inner.module.css";

export function CtaBand({
  index = "09",
  label = "Next step",
  title = "Start a project",
  body = "Tell us what you're building and what's in the way. We'll tell you honestly whether we're the right studio for it.",
  primary = { href: "/contact", label: "Request a quote" },
  secondary,
  id = "cta",
}: {
  index?: string;
  label?: string;
  title?: string;
  body?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  id?: string;
}) {
  return (
    <Section id={id} index={index} label={label}>
      <div className={s.ctaBand} data-reveal>
        <div>
          <h2 id={`${id}-title`} className={s.ctaTitle}>
            {title}
          </h2>
          <p className={s.ctaBody}>{body}</p>
        </div>
        <div className={s.ctaActions}>
          <Link href={primary.href} className="btn btn--primary">
            {primary.label}
          </Link>
          {secondary ? (
            <Link href={secondary.href} className="btn btn--ghost">
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

export default CtaBand;
