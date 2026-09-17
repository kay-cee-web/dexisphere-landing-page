"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/cn";
import { useTimeline } from "@/hooks/useTimeline";

const MESSAGES: { from: "me" | "agent"; text: string }[] = [
  { from: "me", text: "LINK 2CPQDL" },
  { from: "agent", text: "Linked. I'm your Roofing leads agent. What do you need?" },
  { from: "me", text: "Move the Hartley job to Negotiation and book a site visit Thursday 10am" },
  { from: "agent", text: "Done. Deal moved to Negotiation and the appointment is booked for Thu 10:00. Want a reminder text sent to them the day before?" },
];

/** A phone-shaped WhatsApp thread that plays message by message. */
export function PhoneChat() {
  const { ref, step } = useTimeline<HTMLDivElement>(MESSAGES.length, { interval: 1400, hold: 5000 });

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[360px]">
      <div aria-hidden className="absolute inset-10 -z-10 rounded-full bg-accent/20 blur-3xl" />
      <div className="overflow-hidden rounded-[40px] border border-line bg-surface p-2.5 shadow-lift">
        <div className="overflow-hidden rounded-[32px] border border-line bg-ground">
          <header className="flex items-center gap-3 border-b border-line bg-surface px-4 pb-3 pt-5">
            <span className="grid size-9 place-items-center rounded-full bg-accent text-accent-ink">
              <MessageCircle aria-hidden className="size-4" />
            </span>
            <span className="grid">
              <span className="text-[14px] font-medium text-ink">Dexisphere agent</span>
              <span className="text-[11.5px] text-good">online</span>
            </span>
          </header>
          <div className="grid min-h-[380px] content-start gap-2.5 p-4" aria-live="polite">
            <AnimatePresence>
              {MESSAGES.slice(0, step).map((message) => (
                <motion.p
                  key={message.text}
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "max-w-[82%] rounded-[16px] px-3.5 py-2.5 text-[13.5px] leading-relaxed",
                    message.from === "me"
                      ? "ml-auto rounded-br-[5px] bg-accent text-accent-ink"
                      : "rounded-bl-[5px] border border-line bg-surface text-ink",
                    message.text.startsWith("LINK") && "font-mono",
                  )}
                >
                  {message.text}
                </motion.p>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
