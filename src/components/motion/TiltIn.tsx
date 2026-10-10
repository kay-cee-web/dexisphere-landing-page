"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Leans its content back in 3D, then stands it upright as it scrolls to the middle of the screen. */
export function TiltIn({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [14, 0]);
  const still = useReducedMotion();

  return (
    <div ref={ref} className={cn("perspective-[1000px]", className)}>
      <motion.div style={still ? undefined : { rotateX, transformOrigin: "50% 100%" }}>{children}</motion.div>
    </div>
  );
}
