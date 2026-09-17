"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type TimelineOptions = {
  /** Milliseconds between steps. */
  interval?: number;
  /** Milliseconds to hold the finished state before looping. */
  hold?: number;
  loop?: boolean;
};

/**
 * Drives scripted demos: counts 0 → `total` while the element is on screen,
 * holds, then starts over. With reduced motion it jumps straight to the end.
 */
export function useTimeline<T extends Element>(total: number, { interval = 900, hold = 5000, loop = true }: TimelineOptions = {}) {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { margin: "0px 0px -120px 0px" });
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce) {
      if (step === total) return;
      const id = setTimeout(() => setStep(total), 0);
      return () => clearTimeout(id);
    }
    if (!inView) return;
    if (step >= total && !loop) return;
    const id = setTimeout(() => setStep((current) => (current >= total ? 0 : current + 1)), step >= total ? hold : interval);
    return () => clearTimeout(id);
  }, [step, inView, reduce, total, interval, hold, loop]);

  return { ref, step };
}
