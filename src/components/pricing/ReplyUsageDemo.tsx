import { ArrowUpRight, Bot, KeyRound } from "lucide-react";
import type { ReactNode } from "react";
import { Card, Eyebrow } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

/** A reply's footer as the app shows it: time, tokens charged and balance left. */
function ReplyFooter({ children }: { children: ReactNode }) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-dashed border-line pt-2.5 font-mono text-[11.5px] text-faint">
      {children}
    </div>
  );
}

function AgentReply({ text, children }: { text: string; children: ReactNode }) {
  return (
    <div className="flex gap-3">
      <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
        <Bot className="size-4" strokeWidth={1.75} />
      </span>
      <div className="min-w-0 flex-1 rounded-[14px] rounded-tl-[4px] border border-line bg-surface px-4 py-3">
        <p className="text-[14px] leading-relaxed text-ink">{text}</p>
        {children}
      </div>
    </div>
  );
}

/** Three replies: a normal turn, a turn on the user's own key, and an out-of-tokens turn. */
export function ReplyUsageDemo() {
  return (
    <Card floating padded={false} className="grid gap-5 bg-raised p-4 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <Eyebrow>Chat · Lead finder</Eyebrow>
        <Pill tone="accent" dot>
          48,760 tokens
        </Pill>
      </div>
      <AgentReply text="Found 38 dental clinics in Austin and added them to the list “Austin dentists”. 31 have a verified email.">
        <ReplyFooter>
          <span>14:02</span>
          <span aria-hidden>·</span>
          <span className="text-ink">−1,240 tokens · 48,760 left</span>
        </ReplyFooter>
      </AgentReply>
      <AgentReply text="Drafted a three-line intro for the list. Say “send” when you're happy with it.">
        <ReplyFooter>
          <span>14:05</span>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1 text-ink">
            <KeyRound aria-hidden className="size-3" /> Your own key
          </span>
        </ReplyFooter>
      </AgentReply>
      <AgentReply text="You've run out of tokens, so I couldn't finish this turn. Nothing was lost: the list and the draft are still here.">
        <ReplyFooter>
          <span>14:09</span>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1 font-sans text-[12.5px] font-medium text-accent">
            Upgrade plan <ArrowUpRight aria-hidden className="size-3.5" />
          </span>
        </ReplyFooter>
      </AgentReply>
    </Card>
  );
}
