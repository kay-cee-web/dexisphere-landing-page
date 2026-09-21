"use client";

import { MailCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { buttonStyles } from "@/components/ui/button-styles";
import { controlStyles } from "@/components/ui/Field";
import { cn } from "@/lib/cn";
import { isEmail } from "@/lib/text";

/**
 * Compact newsletter form for the footer.
 * NOTE: not wired to a backend yet — connect `handleSubmit` before launch.
 */
export function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();
    if (!isEmail(value)) {
      setError("Enter a valid email address.");
      return;
    }
    setError(null);
    setSubscribed(true);
    setEmail("");
  }

  if (subscribed) {
    return (
      <p className="flex items-center gap-2 text-[14px] text-good">
        <MailCheck aria-hidden className="size-4 shrink-0" />
        You&apos;re on the list!
      </p>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-1.5">
      <div className="flex gap-2">
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={error ? true : undefined}
          className={cn(controlStyles, "h-10 flex-1 text-[13px]")}
        />
        <button type="submit" className={buttonStyles({ size: "md" })}>
          Subscribe
        </button>
      </div>
      {error && <p className="text-[12px] text-bad">{error}</p>}
    </form>
  );
}
