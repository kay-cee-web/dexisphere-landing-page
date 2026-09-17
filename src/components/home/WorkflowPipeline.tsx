"use client";

import { motion } from "framer-motion";
import { Pill } from "@/components/ui/Pill";
import { WORKFLOW_NODES } from "@/data/home/workflow";
import { useTimeline } from "@/hooks/useTimeline";
import { cn } from "@/lib/cn";

/** A vertical pipeline whose steps light up in turn, pausing at the approval gate. */
export function WorkflowPipeline() {
  const { ref, step } = useTimeline<HTMLDivElement>(WORKFLOW_NODES.length, { interval: 1100, hold: 3500 });

  return (
    <div ref={ref} className="rounded-[22px] border border-line bg-surface p-4 shadow-lift sm:p-6">
      <div className="mb-5 flex items-center gap-2">
        <span className="text-[14px] font-medium text-ink">Weekly prospect run</span>
        <Pill tone="good" dot className="ml-auto">
          Active
        </Pill>
      </div>
      <ol className="relative grid gap-3">
        <span aria-hidden className="absolute bottom-6 left-[27px] top-6 w-px bg-line" />
        <motion.span
          aria-hidden
          className="absolute left-[27px] top-6 w-px origin-top bg-accent"
          style={{ height: "calc(100% - 48px)" }}
          animate={{ scaleY: Math.max(0, step - 1) / (WORKFLOW_NODES.length - 1) }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        {WORKFLOW_NODES.map((node, index) => {
          const active = step > index;
          const current = step === index + 1;
          return (
            <li
              key={node.tool}
              className={cn(
                "relative flex items-center gap-3 rounded-[14px] border p-3 transition-colors duration-500",
                active ? "border-line bg-surface" : "border-transparent bg-raised",
                current && (node.gate ? "border-warn/40 bg-warn-soft" : "border-accent/40"),
              )}
            >
              <span
                className={cn(
                  "relative z-10 grid size-8 shrink-0 place-items-center rounded-[10px] transition-colors duration-500",
                  active ? (node.gate ? "bg-warn text-surface" : "bg-accent text-accent-ink") : "bg-surface text-faint ring-1 ring-line",
                )}
              >
                <node.Icon aria-hidden className="size-4" />
              </span>
              <span className="grid min-w-0 flex-1">
                <span className={cn("text-[14px] transition-colors", active ? "text-ink" : "text-muted")}>{node.label}</span>
                <span className="truncate text-[12px] text-faint">{node.detail}</span>
              </span>
              <span className="hidden font-mono text-[11px] text-faint sm:inline">{node.tool}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
