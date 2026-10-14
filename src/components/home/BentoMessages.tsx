import { Globe, Hand } from "lucide-react";
import Image from "next/image";
import { Pill } from "@/components/ui/Pill";
import { MARKS } from "@/data/home/platform";
import { BentoStage, MarkImage, MarkTile } from "./BentoStage";

/** A draft held for review: the Gmail compose window with the agent's checks and your two buttons. */
export function ApprovalsVisual() {
  return (
    <BentoStage>
      <div className="absolute inset-x-5 top-6 overflow-hidden rounded-[14px] border border-line bg-surface shadow-float transition-transform duration-500 group-hover:-translate-y-1">
        <header className="flex items-center gap-2 border-b border-line px-3.5 py-2.5">
          <MarkImage mark={MARKS.gmail} className="size-4" />
          <span className="text-[12.5px] font-medium text-ink">New message</span>
          <Pill tone="warn" className="ml-auto">Draft</Pill>
        </header>
        <div className="grid gap-1.5 px-3.5 py-3 text-[12.5px]">
          <p className="truncate text-muted">
            To <span className="text-ink">35 clinics</span> · Subject <span className="text-ink">Quick question about {"{company}"}</span>
          </p>
          <span aria-hidden className="mt-1 h-1.5 w-11/12 rounded-full bg-raised" />
          <span aria-hidden className="h-1.5 w-3/4 rounded-full bg-raised" />
          <p className="mt-1.5 font-mono text-[10.5px] text-faint">35 verified · domain OK</p>
        </div>
        <footer className="flex gap-2 border-t border-line px-3.5 py-2.5 text-[12px]">
          <span className="rounded-[8px] bg-accent px-3 py-1.5 font-medium text-accent-ink">Send</span>
          <span className="rounded-[8px] border border-line px-3 py-1.5 text-muted">Don&apos;t send</span>
        </footer>
      </div>
      <span className="glass-strong absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 animate-float items-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 text-[12px] text-ink shadow-surface">
        <Hand aria-hidden className="size-3.5 text-warn" /> Waiting for your OK
      </span>
    </BentoStage>
  );
}

/** A WhatsApp chat with the agent, with the other paired channels docked underneath. */
export function ChannelsVisual() {
  return (
    <BentoStage>
      <div className="absolute inset-x-5 top-5 overflow-hidden rounded-[14px] border border-line bg-surface shadow-float">
        <header className="flex items-center gap-2 border-b border-line px-3 py-2">
          <span className="grid size-6 place-items-center rounded-full bg-raised">
            <Image src="/image/dexisphere-icon100.png" alt="" width={16} height={16} />
          </span>
          <span className="text-[12.5px] font-medium text-ink">Dexisphere agent</span>
          <MarkImage mark={MARKS.whatsapp} className="ml-auto size-4" />
        </header>
        <div className="grid gap-2 px-3 py-3 text-[12px] leading-snug">
          <p className="ml-auto max-w-[80%] rounded-[12px] rounded-br-[4px] bg-accent px-2.5 py-1.5 text-accent-ink">
            Anything need me today?
          </p>
          <p className="max-w-[85%] rounded-[12px] rounded-bl-[4px] bg-raised px-2.5 py-1.5 text-ink">
            Two follow-ups are ready to send. Want to see them?
          </p>
        </div>
      </div>
      <div className="absolute inset-x-5 bottom-4 flex justify-center gap-2">
        <span className="glass-strong inline-flex items-center gap-1.5 rounded-full py-1 pl-1 pr-2.5 text-[11.5px] text-ink shadow-surface">
          <MarkTile mark={MARKS.telegram} className="size-6 rounded-full" imageClassName="size-3.5" />
          Linked
        </span>
        <span className="glass-strong inline-flex items-center gap-1.5 rounded-full py-1 pl-1 pr-2.5 font-mono text-[11px] text-muted shadow-surface">
          <span className="grid size-6 place-items-center rounded-full border border-line bg-surface">
            <Globe aria-hidden className="size-3.5 text-accent" />
          </span>
          2CPQDL
        </span>
      </div>
    </BentoStage>
  );
}
