"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

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
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, ease: EASE_OUT, delay }}
    >
      {children}
    </Component>
  );
}
