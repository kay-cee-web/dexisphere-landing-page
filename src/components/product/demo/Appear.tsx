"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT } from "@/components/motion/Reveal";

type AppearProps = { shown: boolean; className?: string; children: ReactNode };

/**
 * Fades a demo step in and out without unmounting it, so the panel keeps its
 * height and the page never jumps while the run plays.
 */
export function Appear({ shown, className, children }: AppearProps) {
  return (
    <motion.div
      className={className}
      aria-hidden={!shown}
      initial={false}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
      transition={{ duration: 0.45, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
