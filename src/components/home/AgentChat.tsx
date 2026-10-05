"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Copy, Paperclip, RefreshCw, SendHorizontal, Sparkles, ThumbsUp } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTimeline } from "@/hooks/useTimeline";
import { cn } from "@/lib/cn";

const MESSAGES: { from: "me" | "agent"; text: string }[] = [
  { from: "me", text: "LINK 2CPQDL" },
  { from: "agent", text: "Linked. I'm your Roofing leads agent. What do you need?" },
  { from: "me", text: "Move the Hartley job to Negotiation and book a site visit Thursday 10am" },
  { from: "agent", text: "Done. Deal moved to Negotiation and the appointment is booked for Thu 10:00. Want a reminder text sent to them the day before?" },
  { from: "me", text: "Yes please" },
  { from: "agent", text: "Scheduled for Wednesday 10:00, sent from your Twilio number." },
];

/** Tapotik's chat card: header, a thread that plays message by message, and the input bar. */
export function AgentChat() {
  const { ref, step } = useTimeline<HTMLDivElement>(MESSAGES.length, { interval: 1400, hold: 5000 });
  const threadRef = useRef<HTMLDivElement>(null);

  // Keep the newest message in view without scrolling the page.
  useEffect(() => {
    const thread = threadRef.current;
    if (thread) thread.scrollTo({ top: step === 0 ? 0 : thread.scrollHeight, behavior: "smooth" });
  }, [step]);

  return (
    <div ref={ref} className="relative mx-auto flex h-120 w-full max-w-lg flex-col overflow-hidden rounded-[24px] border border-line bg-surface/85 shadow-lift backdrop-blur-xl">
      <header className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <span className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-[8px] bg-brand text-white">
            <Sparkles aria-hidden className="size-4" />
          </span>
          <span className="grid">
            <span className="text-[14px] font-semibold leading-none text-ink">Dexisphere agent</span>
            <span className="mt-1 font-mono text-[10.5px] text-faint">WhatsApp · Roofing leads</span>
          </span>
        </span>
        <span className="rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-[10.5px] font-medium text-teal">● Online</span>
      </header>

      <div ref={threadRef} className="flex flex-1 flex-col gap-4 overflow-y-auto p-5" aria-live="polite">
        <AnimatePresence>
          {MESSAGES.slice(0, step).map((message) => (
            <motion.div
              key={message.text}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={cn("flex", message.from === "me" ? "justify-end" : "items-start gap-2.5")}
            >
              {message.from === "me" ? (
                <p
                  className={cn(
                    "max-w-[80%] rounded-[16px] rounded-br-[4px] bg-accent px-4 py-2.5 text-[14px] leading-relaxed text-accent-ink",
                    message.text.startsWith("LINK") && "font-mono",
                  )}
                >
                  {message.text}
                </p>
              ) : (
                <>
                  <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-[7px] bg-brand text-white">
                    <Sparkles aria-hidden className="size-3" />
                  </span>
                  <div className="grid max-w-[85%] gap-2 rounded-[16px] rounded-tl-[4px] border border-line bg-surface px-4 py-3">
                    <p className="text-[14px] leading-relaxed text-ink">{message.text}</p>
                    <span aria-hidden className="flex gap-3 text-faint">
                      <Copy className="size-3.5" />
                      <RefreshCw className="size-3.5" />
                      <ThumbsUp className="size-3.5" />
                    </span>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div aria-hidden className="border-t border-line p-4">
        <div className="flex items-center gap-3 rounded-[12px] border border-line bg-surface/60 px-3 py-2">
          <Paperclip className="size-4 text-faint" />
          <span className="flex-1 truncate text-[14px] text-faint">Message your agent…</span>
          <span className="grid size-7 place-items-center rounded-[8px] bg-brand text-white opacity-60">
            <SendHorizontal className="size-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}
