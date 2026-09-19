"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useId, useState } from "react";
import OrbitMark from "@/components/orbit-mark";
import Triad from "@/components/triad";
import { NEED_OPTIONS } from "@/data/plan";
import { SITE } from "@/data/site";
import s from "./lead-form.module.css";

type Status = "idle" | "submitting" | "error" | "done";

interface Values {
  name: string;
  business: string;
  email: string;
  phone: string;
  businessType: string;
  website: string;
  need: string;
}

const EMPTY: Values = {
  name: "",
  business: "",
  email: "",
  phone: "",
  businessType: "",
  website: "",
  need: "",
};

function validate(values: Values) {
  const errors: Partial<Record<keyof Values, string>> = {};
  if (!values.name.trim()) errors.name = "Tell us who you are.";
  if (!values.business.trim()) errors.business = "Business name, please.";
  if (!values.email.trim()) errors.email = "We need an email to reply to.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "That address doesn't look right.";
  if (!values.need) errors.need = "Pick the closest one.";
  return errors;
}

/**
 * PRD §13 — the short lead form. Posts to /api/lead, which is the single
 * integration point for whatever CRM this ends up in.
 */
export function LeadForm({ heading = "Lead form" }: { heading?: string }) {
  const uid = useId();
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof Values) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [key]: event.target.value }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.getElementById(`${uid}-${Object.keys(found)[0]}`);
      first?.focus();
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className={s.success} role="status">
        <OrbitMark size={56} palette="system" variant="full" />
        <h3 className={s.successTitle}>Got it. We&rsquo;ll be in touch.</h3>
        <p className={s.successBody}>
          One of us reads every one of these. Expect a reply within one working day
          with what we would change first — whether or not you hire us.
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
    );
  }

  const busy = status === "submitting";

  return (
    <form className={s.form} onSubmit={onSubmit} noValidate>
      <div className={s.formHead}>
        <span className={s.formHeadTitle}>{heading}</span>
        <Triad size={16} system />
      </div>

      {status === "error" ? (
        <p className={s.formError} role="alert">
          <strong>That didn&rsquo;t send.</strong> Try again, or email us directly at{" "}
          {SITE.email}.
        </p>
      ) : null}

      <div className={s.grid}>
        <Field
          uid={uid}
          name="name"
          label="Name"
          value={values.name}
          error={errors.name}
          onChange={set("name")}
          autoComplete="name"
          required
        />
        <Field
          uid={uid}
          name="business"
          label="Business name"
          value={values.business}
          error={errors.business}
          onChange={set("business")}
          autoComplete="organization"
          required
        />
        <Field
          uid={uid}
          name="email"
          label="Email"
          type="email"
          inputMode="email"
          value={values.email}
          error={errors.email}
          onChange={set("email")}
          autoComplete="email"
          required
        />
        {/* Deliberately NOT marked optional, although it is — the validator
            never asks for it and the form submits fine without one. Labelling a
            phone number as skippable is an invitation to skip it, and it is the
            contact detail that turns an enquiry into a conversation fastest. */}
        <Field
          uid={uid}
          name="phone"
          label="Phone"
          type="tel"
          inputMode="tel"
          value={values.phone}
          error={errors.phone}
          onChange={set("phone")}
          autoComplete="tel"
        />
        <Field
          uid={uid}
          name="businessType"
          label="Business type"
          placeholder="HVAC, electrical, veterinary…"
          value={values.businessType}
          error={errors.businessType}
          onChange={set("businessType")}
          optional
        />
        <Field
          uid={uid}
          name="website"
          label="Website"
          placeholder="Leave blank if you don't have one"
          value={values.website}
          error={errors.website}
          onChange={set("website")}
          autoComplete="url"
          optional
        />

        <div className={`${s.field} ${s.wide}`}>
          <label className={s.label} htmlFor={`${uid}-need`}>
            What do you need?
          </label>
          <select
            id={`${uid}-need`}
            name="need"
            className={`${s.control} ${s.select} ${errors.need ? s.invalid : ""}`}
            value={values.need}
            onChange={set("need")}
            aria-invalid={errors.need ? true : undefined}
            aria-describedby={errors.need ? `${uid}-need-error` : undefined}
            required
          >
            <option value="">Choose one…</option>
            {NEED_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.need ? (
            <p className={s.error} id={`${uid}-need-error`}>
              {errors.need}
            </p>
          ) : null}
        </div>
      </div>

      <div className={s.footer}>
        <button type="submit" className="btn btn--primary" disabled={busy}>
          {busy ? "Sending" : "Request a quote"}
        </button>
        {busy ? (
          <span className={s.status}>
            <span className={s.spinner} aria-hidden="true" />
            Sending
          </span>
        ) : (
          <p className={s.consent}>
            No sequence, no drip campaign. One human reply.
          </p>
        )}
      </div>
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
  required,
  optional,
}: {
  uid: string;
  name: keyof Values;
  label: string;
  value: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "email" | "tel" | "text" | "url";
  required?: boolean;
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
        aria-describedby={error ? `${id}-error` : undefined}
        required={required}
      />
      {error ? (
        <p className={s.error} id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default LeadForm;
