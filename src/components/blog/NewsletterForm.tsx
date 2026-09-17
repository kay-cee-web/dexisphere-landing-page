"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MailCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { buttonStyles } from "@/components/ui/button-styles";
import { Input } from "@/components/ui/Field";
import { isEmail } from "@/lib/text";

/**
 * Newsletter signup with client-side validation and a local confirmation.
 * NOTE: not wired to a backend or email platform yet. Nothing is stored or sent;
 * connect `handleSubmit` to the real list provider before launch.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();
    if (!isEmail(value)) {
      setError("Enter a valid email address, like you@company.com.");
      return;
    }
    setError(null);
    setSubscribed(value);
    setEmail("");
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {subscribed ? (
        <motion.div
          key="done"
          role="status"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-3 rounded-[14px] border border-good/30 bg-good-soft p-4 text-left"
        >
          <MailCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-good" />
          <div className="grid gap-1 text-[14px]">
            <p className="font-medium text-ink">You&apos;re on the list.</p>
            <p className="text-muted">
              We&apos;ll send new posts to <span className="font-mono text-ink">{subscribed}</span>.{" "}
              <button type="button" onClick={() => setSubscribed(null)} className="font-medium text-accent hover:underline">
                Use another address
              </button>
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.form key="form" noValidate onSubmit={handleSubmit} exit={{ opacity: 0, y: -8 }} className="grid gap-2">
          <div className="flex flex-col gap-2 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <Input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "newsletter-error" : undefined}
              className="sm:flex-1"
            />
            <button type="submit" className={buttonStyles({ size: "lg", className: "h-11" })}>
              Subscribe
            </button>
          </div>
          {error && (
            <p id="newsletter-error" className="text-left text-[13px] text-bad">
              {error}
            </p>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
