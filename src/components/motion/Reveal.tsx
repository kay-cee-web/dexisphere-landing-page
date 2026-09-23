"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { introDelay } from "./intro";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds before the reveal starts. */
  delay?: number;
  /** Distance travelled upward, in px. */
  y?: number;
  as?: "div" | "li" | "section" | "article";
};

/** Fades and lifts its content the first time it scrolls into view. */
export function Reveal({ children, className, delay = 0, y = 16, as = "div" }: RevealProps) {
  const Component = motion[as];
  // `shown` is a function so the intro delay is read when the reveal starts.
  const variants: Variants = {
    hidden: { opacity: 0, y },
    shown: () => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT, delay: delay + introDelay() } }),
  };
  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
    >
      {children}
    </Component>
  );
}
