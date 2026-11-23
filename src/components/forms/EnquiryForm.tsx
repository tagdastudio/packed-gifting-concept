"use client";

import { useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { mailLink, waLink } from "@/lib/links";

type Variant = "corporate" | "wedding" | "general";

type Props = {
  variant: Variant;
  submitLabel?: string;
};

type Values = {
  company: string;
  name: string;
  email: string;
  phone: string;
  quantity: string;
  budget: string;
  date: string;
  city: string;
  delivery: string;
  note: string;
};

const empty: Values = {
  company: "",
  name: "",
  email: "",
  phone: "",
  quantity: "",
  budget: "",
  date: "",
  city: "",
  delivery: "One office",
  note: "",
};

export function EnquiryForm({ variant, submitLabel = "Prepare the brief" }: Props) {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [result, setResult] = useState<{ whatsapp: string; email: string } | null>(null);

  const corporate = variant === "corporate";
  const wedding = variant === "wedding";
  const general = variant === "general";

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setResult(null);
  }

  function compose() {
    if (general) {
      return [
        "A note for Packed",
        "",
        `Name: ${values.name.trim()}`,
        `Email: ${values.email.trim()}`,
        values.phone.trim() ? `Phone: ${values.phone.trim()}` : "",
        "",
        values.note.trim(),
      ]
        .filter(Boolean)
        .join("\n");
    }

    if (wedding) {
      return [
        "Wedding gifting brief",
        "",
        `Names: ${values.name.trim()}`,
        `Email: ${values.email.trim()}`,
        values.phone.trim() ? `Phone: ${values.phone.trim()}` : "",
        values.date ? `Date: ${values.date}` : "",
        values.quantity ? `Guests: ${values.quantity}` : "",
        values.budget ? `Budget per box: ${values.budget}` : "",
        values.city ? `City / venue: ${values.city}` : "",
        "",
        values.note.trim(),
      ]
        .filter(Boolean)
        .join("\n");
    }

    return [
      "Corporate gifting brief",
      "",
      `Company: ${values.company.trim()}`,
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      values.phone.trim() ? `Phone: ${values.phone.trim()}` : "",
      values.quantity ? `Quantity: ${values.quantity}` : "",
      values.budget ? `Budget per box: ${values.budget}` : "",
      values.date ? `Date needed: ${values.date}` : "",
      `Delivery: ${values.delivery}`,
      values.city ? `City: ${values.city}` : "",
      "",
      values.note.trim(),
    ]
      .filter(Boolean)
      .join("\n");
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Partial<Record<keyof Values, string>> = {};
    if (!values.name.trim()) next.name = "Tell us who we are writing to.";
    if (!values.email.trim()) next.email = "We need an email to reply to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "That email does not look complete.";
    if (general && !values.note.trim()) next.note = "Add a line about what you need.";
    if (corporate && !values.company.trim()) next.company = "Add the company name.";
    if (wedding && !values.date) next.date = "Add the wedding date.";
    if (Object.keys(next).length) {
      setErrors(next);
      setResult(null);
      const first = Object.keys(next)[0];
      document.getElementById(`field-${first}`)?.focus();
      return;
    }
    const body = compose();
    const subject = corporate ? "Corporate gifting brief — Packed" : wedding ? "Wedding gifting brief — Packed" : "A note for Packed";
    setResult({ whatsapp: waLink(body), email: mailLink(subject, body) });
  }

  const input = (key: keyof Values) => ({
    id: `field-${key}`,
    value: values[key],
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      update(key, event.target.value),
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `error-${key}` : undefined,
  });

  return (
    <div>
      <form onSubmit={submit} noValidate className="grid gap-5">
        {corporate ? (
          <Field label="Company" error={errors.company} id="company">
            <input {...input("company")} type="text" autoComplete="organization" className="field" placeholder="The company" />
          </Field>
        ) : null}

        <div className={`grid gap-5 ${general ? "" : "sm:grid-cols-2"}`}>
          <Field label={wedding ? "Your names" : "Your name"} error={errors.name} id="name">
            <input {...input("name")} type="text" autoComplete="name" className="field" placeholder="Full name" />
          </Field>
          <Field label="Email" error={errors.email} id="email">
            <input {...input("email")} type="email" autoComplete="email" className="field" placeholder="you@example.com" />
          </Field>
        </div>

        {!general ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Phone (optional)" error={errors.phone} id="phone">
              <input {...input("phone")} type="tel" autoComplete="tel" className="field" placeholder="+91" />
            </Field>
            <Field label={wedding ? "Guest count" : "Quantity"} error={errors.quantity} id="quantity">
              <input {...input("quantity")} type="number" inputMode="numeric" min={1} className="field" placeholder={wedding ? "120" : "50"} />
            </Field>
          </div>
        ) : null}

        {!general ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={wedding ? "Budget per box" : "Budget per box"} error={errors.budget} id="budget">
              <input {...input("budget")} type="text" className="field" placeholder="₹2,500" />
            </Field>
            <Field label={wedding ? "Wedding date" : "Date needed"} error={errors.date} id="date">
              <input {...input("date")} type="date" className="field" />
            </Field>
          </div>
        ) : null}

        {corporate ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Delivery" error={errors.delivery} id="delivery">
              <select {...input("delivery")} className="field">
                <option>One office</option>
                <option>Several offices</option>
                <option>Individual homes</option>
                <option>Not sure yet</option>
              </select>
            </Field>
            <Field label="City" error={errors.city} id="city">
              <input {...input("city")} type="text" autoComplete="address-level2" className="field" placeholder="Mysuru" />
            </Field>
          </div>
        ) : null}

        {wedding ? (
          <Field label="City or venue" error={errors.city} id="city">
            <input {...input("city")} type="text" autoComplete="address-level2" className="field" placeholder="Mysuru" />
          </Field>
        ) : null}

        <Field
          label={general ? "What do you need?" : wedding ? "Anything we should know?" : "Anything we should know?"}
          error={errors.note}
          id="note"
        >
          <textarea
            {...input("note")}
            rows={general ? 6 : 5}
            className="field resize-y"
            placeholder={
              corporate
                ? "Who the boxes are for, the occasion, and anything the recipients should feel."
                : wedding
                  ? "The palette, the invitation, the venue, the thing you do not want."
                  : "A person, a date, a budget, or a question."
            }
          />
        </Field>

        <div className="flex flex-wrap items-center gap-4">
          <button type="submit" className="btn btn-ink">
            {submitLabel}
            <Arrow />
          </button>
          <p className="text-[0.75rem] leading-relaxed text-ink-soft">
            Nothing is sent automatically. We prepare the message and you choose how to send it.
          </p>
        </div>
      </form>

      {result ? (
        <div role="status" className="mt-6 border border-line-ink bg-paper-2 p-5">
          <p className="font-display text-[1.35rem]">Your brief is ready.</p>
          <p className="mt-1 max-w-[38rem] text-[0.9rem] leading-relaxed text-ink-soft">
            Nothing has been sent from this page. Send it on WhatsApp or open it in your email app; we will reply with a
            shortlist and a price.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={result.whatsapp} target="_blank" rel="noreferrer" className="btn btn-ink">
              Send on WhatsApp
              <Arrow />
            </a>
            <a href={result.email} className="btn btn-ink-outline">
              Open in email
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={`field-${id}`} className="label mb-1.5 block text-ink-soft">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`error-${id}`} className="mt-1 text-[0.78rem] text-vermilion-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}
