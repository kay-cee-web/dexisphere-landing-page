"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";
import { InlineText } from "@/components/content/InlineText";
import { CountUp } from "@/components/motion/CountUp";
import { Pill } from "@/components/ui/Pill";
import { HERO_DEMO } from "@/data/home/demo";
import { useTimeline } from "@/hooks/useTimeline";
import { cn } from "@/lib/cn";

const { url, nav, model, task, steps, reply, tokens, usage } = HERO_DEMO;
const DONE = steps.length;
/** The three "streaming" lines in the reply bubble, at full length. */
const STREAM = [92, 64, 78];
const EASE = [0.22, 1, 0.36, 1] as const;

/** Tapotik's hero window: the agent's chat in an app frame, with two cards floating off its edges. */
export function HeroDemo() {
  const { ref, step } = useTimeline<HTMLDivElement>(DONE, { interval: 900, hold: 6000 });
  const done = step >= DONE;

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-5xl">
      <div aria-hidden className="absolute -inset-x-8 top-8 -z-10 h-full rounded-[40px] bg-linear-to-r from-accent/25 via-violet/20 to-teal/15 blur-3xl" />

      <div className="glass-strong relative overflow-hidden rounded-[20px] shadow-lift">
        <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
          <span className="size-3 rounded-full bg-bad/70" />
          <span className="size-3 rounded-full bg-warn/70" />
          <span className="size-3 rounded-full bg-good/70" />
          <span className="mx-auto flex h-7 w-full max-w-sm items-center justify-center gap-2 rounded-[8px] bg-raised font-mono text-[12px] text-muted">
            <Sparkles aria-hidden className="size-3.5 text-accent" />
            {url}
          </span>
        </div>

        <div className="grid sm:grid-cols-12">
          <aside className="hidden border-r border-line p-4 sm:col-span-3 sm:block">
            <ul className="grid gap-1">
              {nav.map(({ label, Icon }, i) => (
                <li
                  key={label}
                  className={cn(
                    "flex items-center gap-2.5 rounded-[8px] px-3 py-2 text-[12.5px] font-medium",
                    i === 0 ? "bg-accent/15 text-accent" : "text-muted",
                  )}
                >
                  <Icon aria-hidden className="size-4" />
                  {label}
                </li>
              ))}
            </ul>
            <div aria-hidden className="mt-6 grid gap-2">
              <span className="h-2 w-3/4 rounded-full bg-raised" />
              <span className="h-2 w-1/2 rounded-full bg-raised" />
              <span className="h-2 w-2/3 rounded-full bg-raised" />
            </div>
          </aside>

          <div className="flex flex-col gap-4 p-5 sm:col-span-9 sm:p-6 lg:min-h-[340px]" aria-live="polite">
            <p className="ml-auto max-w-[80%] rounded-[16px] rounded-br-[4px] bg-accent px-4 py-2.5 text-[13px] leading-relaxed text-accent-ink sm:text-[14px]">
              {task}
            </p>
            <div className="flex items-start gap-3">
              <span className="grid size-7 shrink-0 place-items-center rounded-[8px] bg-brand text-white">
                <Sparkles aria-hidden className="size-3.5" />
              </span>
              <div className="glass grid max-w-[88%] gap-2.5 rounded-[16px] rounded-tl-[4px] px-4 py-3">
                <AnimatePresence mode="wait" initial={false}>
                  {done ? (
                    <motion.p key="reply" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[13px] leading-relaxed text-ink sm:text-[14px]">
                      <InlineText text={reply} />
                    </motion.p>
                  ) : (
                    <motion.div key="stream" exit={{ opacity: 0 }} className="grid gap-2.5">
                      <p className="text-[13px] text-ink/90 sm:text-[14px]">Working through your morning, one job at a time…</p>
                      <div aria-hidden className="grid gap-1.5">
                        {STREAM.map((width, i) => (
                          <motion.span
                            key={i}
                            className={cn("h-2 rounded-full", i === 0 ? "bg-linear-to-r from-accent/60 to-violet/60" : "bg-raised")}
                            animate={{ width: `${(width * Math.min(step + 1, DONE)) / DONE}%` }}
                            transition={{ duration: 0.8, ease: EASE }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="flex items-center gap-1.5 pt-1 font-mono text-[10.5px] text-faint">
                  <span className={cn("size-1.5 rounded-full bg-teal", !done && "animate-pulse")} />
                  {done ? usage : `${model} · working`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingCards step={step} />
    </div>
  );
}

/** Tokens on the left, the run's checklist on the right; desktop only, like Tapotik's. */
function FloatingCards({ step }: { step: number }) {
  const card = "glass-strong absolute hidden rounded-[14px] p-3.5 shadow-lift lg:block";
  return (
    <div aria-hidden>
      <div className={cn(card, "-left-6 top-1/4 w-44 animate-float")}>
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-[8px] bg-teal/15 text-teal">
            <Zap className="size-4" />
          </span>
          <span className="grid">
            <span className="text-[12px] font-semibold text-ink">Tokens used</span>
            <span className="text-[10.5px] text-muted">this run</span>
          </span>
        </div>
        <CountUp value={tokens} className="mt-2 block font-display text-[24px] font-bold text-gradient" />
      </div>

      <div className={cn(card, "-right-4 top-8 w-52 animate-float-slow")}>
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-semibold text-ink">Agent run</span>
          <Pill tone={step >= DONE ? "good" : "accent"}>{step >= DONE ? "Done" : "Running"}</Pill>
        </div>
        <ul className="mt-2.5 grid gap-1.5">
          {steps.map((label, i) => (
            <li key={label} className="flex items-center gap-2">
              <span className={cn("size-1.5 rounded-full transition-colors", step > i ? "bg-good" : "bg-line")} />
              <span className="text-[10.5px] text-muted">{label}</span>
              <span className="ml-auto h-1 w-16 overflow-hidden rounded-full bg-raised">
                <motion.span
                  className="block h-full rounded-full bg-linear-to-r from-accent to-teal"
                  animate={{ width: step > i ? "100%" : "0%" }}
                  transition={{ duration: 0.6, ease: EASE }}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
