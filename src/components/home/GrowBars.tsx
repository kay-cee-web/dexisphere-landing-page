"use client";

import { motion } from "framer-motion";

/** A tiny bar chart whose bars grow in when scrolled into view. Heights are 0–100. */
export function GrowBars({ values, label }: { values: number[]; label: string }) {
  return (
    <div role="img" aria-label={label} className="flex h-32 items-end gap-1.5">
      {values.map((value, index) => (
        <motion.span
          key={index}
          className="flex-1 origin-bottom rounded-t-[4px] bg-accent/80 even:bg-accent/50"
          style={{ height: `${value}%` }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}
