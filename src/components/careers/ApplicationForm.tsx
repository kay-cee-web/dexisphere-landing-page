"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MailCheck, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { buttonStyles } from "@/components/ui/button-styles";
import { Field, Input, Textarea } from "@/components/ui/Field";
import { CONTACT_EMAILS } from "@/lib/config";
import {
  EMPTY_APPLICATION, applicationMailto, validateApplication, type Application, type ApplicationErrors,
} from "./application";

const errorId = (field: keyof Application) => `apply-${field}-error`;

function ErrorText({ field, errors }: { field: keyof Application; errors: ApplicationErrors }) {
  if (!errors[field]) return null;
  return <p id={errorId(field)} className="text-[12.5px] text-bad">{errors[field]}</p>;
}

/** Validates locally, then opens the visitor's email app with the application addressed to the careers inbox. */
export function ApplicationForm({ role }: { role: string }) {
  const [values, setValues] = useState<Application>(EMPTY_APPLICATION);
  const [errors, setErrors] = useState<ApplicationErrors>({});
  const [opened, setOpened] = useState(false);

  const update = (field: keyof Application) => (event: { target: { value: string } }) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const describe = (field: keyof Application) => ({
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? errorId(field) : undefined,
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validateApplication(values);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as (keyof Application)[])[0];
    if (firstInvalid) {
      document.getElementById(`apply-${firstInvalid}`)?.focus();
      return;
    }
    window.location.href = applicationMailto(role, values);
    setOpened(true);
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {opened ? (
        <motion.div
          key="opened"
          role="status"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-3 rounded-[14px] border border-good/30 bg-good-soft p-5"
        >
          <p className="flex items-center gap-2 font-medium text-ink">
            <MailCheck aria-hidden className="size-5 text-good" />
            Your email app should now be open
          </p>
          <p className="text-[14px] leading-relaxed text-muted">
            We&apos;ve pre-filled an email to <span className="font-mono text-ink">{CONTACT_EMAILS.careers}</span> with the
            subject &ldquo;Application: {role}&rdquo;. Attach your CV and press send. Nothing is submitted until you do.
          </p>
          <p className="text-[14px] text-muted">
            Didn&apos;t open?{" "}
            <a href={applicationMailto(role, values)} className="font-medium text-accent hover:underline">
              Try again
            </a>{" "}
            or email us directly.{" "}
            <button type="button" onClick={() => setOpened(false)} className="font-medium text-accent hover:underline">
              Edit application
            </button>
          </p>
        </motion.div>
      ) : (
        <motion.form key="form" noValidate onSubmit={handleSubmit} exit={{ opacity: 0, y: -8 }} className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" htmlFor="apply-name">
              <Input id="apply-name" autoComplete="name" value={values.name} onChange={update("name")} {...describe("name")} />
              <ErrorText field="name" errors={errors} />
            </Field>
            <Field label="Email" htmlFor="apply-email">
              <Input
                id="apply-email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={update("email")}
                {...describe("email")}
              />
              <ErrorText field="email" errors={errors} />
            </Field>
          </div>
          <Field label="Portfolio or LinkedIn URL" htmlFor="apply-link">
            <Input
              id="apply-link"
              type="url"
              inputMode="url"
              placeholder="https://"
              value={values.link}
              onChange={update("link")}
              {...describe("link")}
            />
            <ErrorText field="link" errors={errors} />
          </Field>
          <Field label="Why you?" htmlFor="apply-why">
            <Textarea
              id="apply-why"
              placeholder="What you'd bring to this role, and something you've built or done that you're proud of."
              value={values.why}
              onChange={update("why")}
              {...describe("why")}
            />
            <ErrorText field="why" errors={errors} />
          </Field>
          <button type="submit" className={buttonStyles({ size: "lg", className: "w-full sm:w-fit" })}>
            <Send /> Apply by email
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
