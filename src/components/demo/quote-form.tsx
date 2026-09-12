"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useId, useState } from "react";
import { Check } from "./icons";
import type { DemoSite } from "@/data/demos";
import s from "./demo.module.css";

type Status = "idle" | "sending" | "error" | "done";

interface Values {
  name: string;
  phone: string;
  email: string;
  postcode: string;
  jobType: string;
  details: string;
}

const EMPTY: Values = { name: "", phone: "", email: "", postcode: "", jobType: "", details: "" };

/**
 * The quote form every demo uses. Field labels adapt to the market — a UK
 * customer is asked for a postcode, an Australian one for a suburb — because
 * asking an American for their "postcode" is exactly the kind of detail that
 * makes a site feel imported.
 */
export function QuoteForm({ site }: { site: DemoSite }) {
  const uid = useId();
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const areaLabel =
    site.market === "UK" ? "Postcode" : site.market === "AU" ? "Suburb" : "ZIP code";
  const areaPlaceholder =
    site.market === "UK" ? "M20 2RN" : site.market === "AU" ? "Coorparoo" : "85017";

  const set =
    (key: keyof Values) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: event.target.value }));
      setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
    };

  function validate(v: Values) {
    const found: Partial<Record<keyof Values, string>> = {};
    if (!v.name.trim()) found.name = "Please tell us your name.";
    if (!v.phone.trim()) found.phone = "We need a number to call you back on.";
    if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
      found.email = "That email doesn't look right.";
    if (!v.jobType) found.jobType = "Pick the closest one.";
    return found;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById(`${uid}-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/demo-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, site: site.slug }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className={s.form}>
        <div className={s.success} role="status">
          <span className={s.successMark} aria-hidden="true">
            <Check size={32} />
          </span>
          <h3 className={s.successTitle}>Thanks — we&rsquo;ve got it.</h3>
          <p className={s.successBody}>
            One of the team will call you on {values.phone || "the number you gave"} shortly. If
            it&rsquo;s urgent, ring us on {site.phoneDisplay} and we&rsquo;ll pick up.
          </p>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => {
              setValues(EMPTY);
              setStatus("idle");
            }}
          >
            Send another
          </button>
        </div>
        <p className={s.demoFlag}>
          This is a demonstration website. Nothing was sent and no details were stored.
        </p>
      </div>
    );
  }

  return (
    <form className={s.form} id="quote-form" onSubmit={onSubmit} noValidate>
      <div className={s.formTop}>
        <span className={s.formTitle}>{site.cta.formTitle}</span>
        <span className={s.formNote}>{site.cta.formNote}</span>
      </div>

      {status === "error" ? (
        <p className={s.formAlert} role="alert">
          <strong>That didn&rsquo;t send.</strong> Please try again, or call us on{" "}
          {site.phoneDisplay}.
        </p>
      ) : null}

      <div className={s.formGrid}>
        <Field uid={uid} name="name" label="Your name" value={values.name} error={errors.name} onChange={set("name")} autoComplete="name" />
        <Field uid={uid} name="phone" label="Phone" type="tel" inputMode="tel" value={values.phone} error={errors.phone} onChange={set("phone")} autoComplete="tel" />
        <Field uid={uid} name="email" label="Email" type="email" inputMode="email" value={values.email} error={errors.email} onChange={set("email")} autoComplete="email" optional />
        <Field uid={uid} name="postcode" label={areaLabel} value={values.postcode} error={errors.postcode} onChange={set("postcode")} placeholder={areaPlaceholder} optional />

        <div className={`${s.field} ${s.fieldWide}`}>
          <label className={s.label} htmlFor={`${uid}-jobType`}>
            {site.cta.jobLabel}
          </label>
          <select
            id={`${uid}-jobType`}
            name="jobType"
            className={`${s.control} ${errors.jobType ? s.invalid : ""}`}
            value={values.jobType}
            onChange={set("jobType")}
            aria-invalid={errors.jobType ? true : undefined}
          >
            <option value="">Choose one…</option>
            {site.jobTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.jobType ? <p className={s.error}>{errors.jobType}</p> : null}
        </div>

        <div className={`${s.field} ${s.fieldWide}`}>
          <label className={s.label} htmlFor={`${uid}-details`}>
            Anything else? <span className={s.optional}>· optional</span>
          </label>
          <textarea
            id={`${uid}-details`}
            name="details"
            className={s.control}
            value={values.details}
            onChange={set("details")}
            placeholder="A sentence is plenty — what's happening and when suits you."
          />
        </div>
      </div>

      <div className={s.formFoot}>
        <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : site.cta.action}
        </button>
        <p className={s.consent}>
          We&rsquo;ll only use your details to answer this enquiry. No marketing lists, ever.
        </p>
      </div>

      <p className={s.demoFlag}>
        Demonstration website — this form is fully working, but nothing is sent and no details are
        stored.
      </p>
    </form>
  );
}

function Field({
  uid,
  name,
  label,
  value,
  error,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
  inputMode,
  optional,
}: {
  uid: string;
  name: keyof Values;
  label: string;
  value: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "tel" | "email" | "text";
  optional?: boolean;
}) {
  const id = `${uid}-${name}`;
  return (
    <div className={s.field}>
      <label className={s.label} htmlFor={id}>
        {label}
        {optional ? <span className={s.optional}> · optional</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        inputMode={inputMode}
        className={`${s.control} ${error ? s.invalid : ""}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
      />
      {error ? <p className={s.error}>{error}</p> : null}
    </div>
  );
}

export default QuoteForm;
