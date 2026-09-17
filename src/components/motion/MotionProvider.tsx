"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** One place for motion defaults: honour the OS "reduce motion" setting everywhere. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </MotionConfig>
  );
}
