"use client";

import { useEffect, useRef, useState } from "react";

const PHRASES = [
  "Find your customers.",
  "Run your outreach.",
  "Draft your content.",
  "Watch your ads.",
  "Sit in your meetings.",
  "Watch your money.",
  "Hear back on WhatsApp.",
];

const TYPE_SPEED = 60;
const DELETE_SPEED = 35;
const HOLD = 2200;

/** Cycles through brand phrases with a typing / deleting animation. */
export function Typewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const phrase = PHRASES[phraseIndex];

    if (!deleting) {
      if (displayed.length < phrase.length) {
        timeout.current = setTimeout(
          () => setDisplayed(phrase.slice(0, displayed.length + 1)),
          TYPE_SPEED,
        );
      } else {
        timeout.current = setTimeout(() => setDeleting(true), HOLD);
      }
    } else {
      if (displayed.length > 0) {
        timeout.current = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          DELETE_SPEED,
        );
      } else {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
      }
    }

    return () => clearTimeout(timeout.current);
  }, [displayed, deleting, phraseIndex]);

  return (
    <span className="text-brand">
      {displayed}
      <span className="animate-blink">|</span>
    </span>
  );
}
