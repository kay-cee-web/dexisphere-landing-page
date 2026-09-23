"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { introDelay } from "./intro";
import { EASE_OUT } from "./Reveal";

const container: Variants = {
  hidden: {},
  shown: () => ({ transition: { staggerChildren: 0.07, delayChildren: introDelay() } }),
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
};

type StaggerProps = { children: ReactNode; className?: string; as?: "div" | "ul" | "ol" };

/** Reveals its StaggerItem children one after another when scrolled into view. */
export function Stagger({ children, className, as = "div" }: StaggerProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      variants={container}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = { children: ReactNode; className?: string; as?: "div" | "li" | "article" };

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const Component = motion[as];
  return (
    <Component className={className} variants={item}>
      {children}
    </Component>
  );
}
