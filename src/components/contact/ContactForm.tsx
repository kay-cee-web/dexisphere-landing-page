"use client";

import { ChevronDown, CircleCheck, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { buttonStyles } from "@/components/ui/button-styles";
import { Field, Input, Select, Textarea } from "@/components/ui/Field";
import { CONTACT_TOPICS } from "@/data/contact";
import { contactMailto, EMPTY_CONTACT, validateContact, type ContactErrors, type ContactValues } from "./contact-message";

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-[12.5px] text-bad">
      {message}
    </p>
  );
}

/**
 * "Send us a message". No backend: on submit it validates, then opens the
 * visitor's email app with a pre-filled message to the topic's inbox.
 */
export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(EMPTY_CONTACT);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sentTo, setSentTo] = useState<string | null>(null);

  const update = (key: keyof ContactValues) => (value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    const { to, href } = contactMailto(values);
    window.location.href = href;
    setSentTo(to);
  };

  const describedBy = (key: keyof ContactValues) => (errors[key] ? `contact-${key}-error` : undefined);

  return (
    <form noValidate onSubmit={submit} className="grid gap-5 rounded-[20px] border border-line bg-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="contact-name">
          <Input id="contact-name" autoComplete="name" value={values.name} onChange={(e) => update("name")(e.target.value)}
            aria-invalid={Boolean(errors.name)} aria-describedby={describedBy("name")} />
          <ErrorText id="contact-name-error" message={errors.name} />
        </Field>
        <Field label="Work email" htmlFor="contact-email">
          <Input id="contact-email" type="email" autoComplete="email" value={values.email}
            onChange={(e) => update("email")(e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={describedBy("email")} />
          <ErrorText id="contact-email-error" message={errors.email} />
        </Field>
        <Field label="Company" htmlFor="contact-company" hint="Optional">
          <Input id="contact-company" autoComplete="organization" value={values.company}
            onChange={(e) => update("company")(e.target.value)} />
        </Field>
        <Field label="Topic" htmlFor="contact-topic">
          <div className="relative">
            <Select id="contact-topic" value={values.topic} onChange={(e) => update("topic")(e.target.value)}
              aria-invalid={Boolean(errors.topic)} aria-describedby={describedBy("topic")} className="pr-10">
              <option value="" disabled>Choose a topic</option>
              {CONTACT_TOPICS.map((topic) => (
                <option key={topic.value} value={topic.value}>{topic.label}</option>
              ))}
            </Select>
            <ChevronDown aria-hidden className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
          </div>
          <ErrorText id="contact-topic-error" message={errors.topic} />
        </Field>
      </div>
      <Field label="Message" htmlFor="contact-message">
        <Textarea id="contact-message" rows={5} value={values.message} placeholder="What are you trying to get done?"
          onChange={(e) => update("message")(e.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={describedBy("message")} />
        <ErrorText id="contact-message-error" message={errors.message} />
      </Field>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <button type="submit" className={buttonStyles({ size: "lg" })}>
          <Mail /> Send message
        </button>
        <p className="text-[12.5px] text-faint">Opens your email app with the message filled in.</p>
      </div>
      {sentTo && (
        <p role="status" className="flex items-start gap-2.5 rounded-[12px] bg-good-soft px-4 py-3 text-[13.5px] text-ink">
          <CircleCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-good" />
          <span>
            Your email app should now have a draft to <span className="font-mono text-[13px]">{sentTo}</span>. Press send there
            and we&apos;ll reply by email. Nothing opened? Write to that address directly.
          </span>
        </p>
      )}
    </form>
  );
}
