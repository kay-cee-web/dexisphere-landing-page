"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, useSyncExternalStore, type ReactNode } from "react";

/** Each card sticks this much lower than the one before, so their top edges fan out. */
const TOP_STEP_REM = 1.6;
/** How much a buried card shrinks per card stacked on top of it. */
const SCALE_STEP = 0.05;

const DESKTOP = "(min-width: 768px)";
const subscribe = (onChange: () => void) => {
  const query = window.matchMedia(DESKTOP);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};

/**
 * Tapotik's "four steps" stack: every card is sticky, the next one slides up
 * over it, and the ones underneath shrink back as the stack grows.
 * Stacks flat (no sticking, no scaling) on phones and with reduced motion.
 */
export function ScrollStack({ items }: { items: ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const desktop = useSyncExternalStore(subscribe, () => window.matchMedia(DESKTOP).matches, () => false);
  const reduce = useReducedMotion();
  const animate = desktop && !reduce;

  return (
    <div ref={ref} className="flex flex-col gap-6">
      {items.map((item, i) => (
        <div key={i} className="md:sticky" style={{ top: `calc(6rem + ${i * TOP_STEP_REM}rem)` }}>
          <StackLayer progress={scrollYProgress} index={i} total={items.length} animate={animate}>
            {item}
          </StackLayer>
        </div>
      ))}
    </div>
  );
}

type StackLayerProps = { progress: MotionValue<number>; index: number; total: number; animate: boolean; children: ReactNode };

function StackLayer({ progress, index, total, animate, children }: StackLayerProps) {
  const target = 1 - (total - 1 - index) * SCALE_STEP;
  const scale = useTransform(progress, [index / total, 1], [1, target]);
  return (
    <motion.div className="origin-top" style={animate ? { scale } : undefined}>
      {children}
    </motion.div>
  );
}
