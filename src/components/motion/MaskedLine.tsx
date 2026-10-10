"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { introDelay } from "./intro";
import { EASE_OUT } from "./Reveal";

// Opacity is part of it so the no-JS rule in the root layout can show the line.
const LINE: Variants = {
  hidden: { opacity: 0, y: "115%" },
  shown: () => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT, delay: introDelay() } }),
};

/**
 * A heading line that rises from behind its own baseline. It has no trigger of
 * its own: it plays with the Reveal (or Stagger) it sits inside.
 */
export function MaskedLine({ children }: { children: ReactNode }) {
  return (
    // The padding keeps descenders inside the clip; the negative margin gives the space back.
    <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
      <motion.span className="block" variants={LINE}>
        {children}
      </motion.span>
    </span>
  );
}
