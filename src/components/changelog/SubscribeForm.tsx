"use client";

import { CircleCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { buttonStyles } from "@/components/ui/button-styles";
import { Input } from "@/components/ui/Field";
import { isEmail } from "@/lib/text";

/**
 * Changelog email signup.
 * NOTE: not wired to a backend yet. It only validates and shows a local
 * confirmation; nothing is stored or sent. Connect it to the mailing-list
 * provider before launch.
 */
export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isEmail(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError(null);
    setSubscribed(true);
  };

  if (subscribed) {
    return (
      <p role="status" className="flex items-center gap-2.5 rounded-[12px] bg-good-soft px-4 py-3 text-[14px] text-ink">
        <CircleCheck aria-hidden className="size-4 shrink-0 text-good" />
        <span>
          You&apos;re on the list. We&apos;ll email <span className="font-mono text-[13px]">{email.trim()}</span> when
          something ships.
        </span>
      </p>
    );
  }

  return (
    <form noValidate onSubmit={submit} className="grid gap-2">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="changelog-email" className="sr-only">
          Email address
        </label>
        <Input
          id="changelog-email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (error) setError(null);
          }}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "changelog-email-error" : undefined}
          className="sm:flex-1"
        />
        <button type="submit" className={buttonStyles({ size: "lg", className: "h-11" })}>
          Subscribe
        </button>
      </div>
      {error && (
        <p id="changelog-email-error" className="text-[12.5px] text-bad">
          {error}
        </p>
      )}
    </form>
  );
}
