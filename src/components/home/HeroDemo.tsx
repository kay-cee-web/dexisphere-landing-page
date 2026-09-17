"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Paperclip, Mic, ArrowUp } from "lucide-react";
import { InlineText } from "@/components/content/InlineText";
import { ReceiptCard } from "@/components/demo/ReceiptCard";
import { ToolCallRow } from "@/components/demo/ToolCallRow";
import { Pill } from "@/components/ui/Pill";
import { HERO_DEMO } from "@/data/home/demo";
import { useTimeline } from "@/hooks/useTimeline";

const { agent, model, task, tools, reply, receipt, usage } = HERO_DEMO;
const REPLY_STEP = tools.length + 1;
const RECEIPT_STEP = tools.length + 2;
const fade = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 } };

/** A scripted agent run: task → tool calls → reply → receipt, looping while on screen. */
export function HeroDemo() {
  const { ref, step } = useTimeline<HTMLDivElement>(RECEIPT_STEP, { interval: 1000, hold: 6000 });

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-5xl">
      <div aria-hidden className="absolute -inset-x-8 -top-8 bottom-0 -z-10 rounded-[40px] bg-accent/10 blur-3xl" />
      <div className="overflow-hidden rounded-[22px] border border-line bg-surface/90 shadow-lift backdrop-blur">
        <header className="flex items-center gap-3 border-b border-line px-4 py-3">
          <span className="grid size-8 place-items-center rounded-[9px] bg-ink text-ground">
            <Bot aria-hidden className="size-4" />
          </span>
          <span className="grid min-w-0">
            <span className="truncate text-[14px] font-medium text-ink">{agent}</span>
            <span className="font-mono text-[11px] text-faint">{model}</span>
          </span>
          <Pill tone="warn" dot className="ml-auto hidden sm:inline-flex">
            Ask before sending
          </Pill>
        </header>

        <div className="grid lg:grid-cols-[1.45fr_1fr]">
          <div className="grid content-start gap-4 p-4 sm:p-6 lg:min-h-[500px]" aria-live="polite">
            <div className="ml-auto max-w-[85%] rounded-[16px] rounded-br-[6px] bg-accent px-4 py-3 text-[14px] leading-relaxed text-accent-ink">
              {task}
            </div>
            <ul className="grid gap-2">
              {tools.map((tool, index) => (
                <li key={tool.name}>
                  <ToolCallRow call={tool} status={step > index + 1 ? "done" : step === index + 1 ? "running" : "queued"} />
                </li>
              ))}
            </ul>
            <AnimatePresence>
              {step >= REPLY_STEP && (
                <motion.div {...fade} className="grid gap-2">
                  <p className="max-w-[92%] rounded-[16px] rounded-bl-[6px] border border-line bg-raised px-4 py-3 text-[14px] leading-relaxed text-ink">
                    <InlineText text={reply} />
                  </p>
                  <span className="font-mono text-[11px] text-faint">{usage}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <aside className="grid content-start gap-4 border-t border-line bg-raised p-4 sm:p-6 lg:border-l lg:border-t-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">Work receipt</p>
            <AnimatePresence mode="wait">
              {step >= RECEIPT_STEP ? (
                <motion.div key="receipt" {...fade} className="grid gap-4">
                  <ReceiptCard {...receipt} badge={<Pill tone="accent">This turn</Pill>} className="shadow-float" />
                  <div className="flex items-center gap-2 rounded-[12px] border border-warn/30 bg-warn-soft p-3 text-[12.5px] text-ink">
                    <span className="flex-1">Send the intro to 35 clinics?</span>
                    <span className="rounded-[7px] bg-accent px-2.5 py-1 font-medium text-accent-ink">Send</span>
                    <span className="rounded-[7px] border border-line bg-surface px-2.5 py-1 text-muted">Don&apos;t send</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="waiting" {...fade} className="grid place-items-center gap-3 rounded-[14px] border border-dashed border-line px-4 py-12 text-center">
                  <span className="relative h-0.5 w-24 overflow-hidden rounded-full bg-line">
                    <span className="absolute inset-y-0 left-0 w-2/5 animate-trace rounded-full bg-accent" />
                  </span>
                  <span className="text-[12.5px] text-muted">Comparing your records before and after this turn…</span>
                </motion.div>
              )}
            </AnimatePresence>
          </aside>
        </div>

        <footer className="flex items-center gap-2 border-t border-line px-4 py-3">
          <span className="flex-1 truncate text-[13.5px] text-faint">Tell your agent what to do next…</span>
          <Paperclip aria-hidden className="size-4 text-faint" />
          <Mic aria-hidden className="size-4 text-faint" />
          <span className="grid size-8 place-items-center rounded-[9px] bg-accent text-accent-ink">
            <ArrowUp aria-hidden className="size-4" />
          </span>
        </footer>
      </div>
    </div>
  );
}
