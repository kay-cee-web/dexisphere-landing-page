import { Check, Globe, KeyRound, MessageCircle, Send } from "lucide-react";
import { Pill } from "@/components/ui/Pill";
import { MODEL_ROWS, TOOL_CHIPS } from "@/data/home/platform";
import { ReceiptCard } from "@/components/demo/ReceiptCard";

export function ToolsVisual() {
  return (
    <div className="grid gap-2.5">
      {TOOL_CHIPS.map((group) => (
        <div key={group.area} className="flex flex-wrap items-center gap-2">
          <span className="w-24 shrink-0 text-[12px] text-faint">{group.area}</span>
          {group.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-[8px] border border-line bg-surface px-2 py-1 font-mono text-[11.5px] text-ink transition-colors group-hover:border-accent/30"
            >
              {tool}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function ReceiptsVisual() {
  return (
    <ReceiptCard
      area="CRM"
      badge={<Pill tone="good" dot>Done</Pill>}
      stats={[
        { label: "Leads", value: "31" },
        { label: "Deals moved", value: "4" },
      ]}
      className="shadow-float"
    />
  );
}

export function ApprovalsVisual() {
  return (
    <div className="grid gap-2.5">
      <div className="rounded-[12px] border border-line bg-surface p-3 text-[12.5px]">
        <p className="text-muted">Subject</p>
        <p className="text-ink">Quick question about {"{company}"}</p>
        <p className="mt-2 font-mono text-[11px] text-faint">35 recipients · 35 verified · domain OK</p>
      </div>
      <div className="flex gap-2 text-[12.5px]">
        <span className="rounded-[8px] bg-accent px-3 py-1.5 font-medium text-accent-ink">Send</span>
        <span className="rounded-[8px] border border-line bg-surface px-3 py-1.5 text-muted">Don&apos;t send</span>
        <span className="hidden rounded-[8px] border border-line bg-surface px-3 py-1.5 text-muted sm:inline">Ask for changes</span>
      </div>
    </div>
  );
}

const CHANNELS = [
  { name: "WhatsApp", Icon: MessageCircle, status: "Linked" },
  { name: "Telegram", Icon: Send, status: "Linked" },
  { name: "Extension", Icon: Globe, status: "Code 2CPQDL" },
];

export function ChannelsVisual() {
  return (
    <ul className="grid gap-2">
      {CHANNELS.map(({ name, Icon, status }) => (
        <li key={name} className="flex items-center gap-2.5 rounded-[10px] border border-line bg-surface px-3 py-2">
          <Icon aria-hidden className="size-4 text-accent" />
          <span className="flex-1 text-[13px] text-ink">{name}</span>
          <Pill tone={status === "Linked" ? "good" : "neutral"} dot={status === "Linked"}>
            {status}
          </Pill>
        </li>
      ))}
    </ul>
  );
}

export function ModelsVisual() {
  return (
    <ul className="grid gap-2">
      {MODEL_ROWS.map((row, index) => (
        <li key={row.model} className="flex items-center gap-2.5 rounded-[10px] border border-line bg-surface px-3 py-2">
          <span className="grid min-w-0 flex-1">
            <span className="text-[13px] text-ink">{row.model}</span>
            <span className="text-[11.5px] text-faint">{row.family} · {row.note}</span>
          </span>
          {index === 0 && <Check aria-hidden className="size-4 text-accent" />}
        </li>
      ))}
      <li className="flex items-center gap-2 px-1 pt-1 text-[12px] text-muted">
        <KeyRound aria-hidden className="size-3.5 text-accent" /> Using your own key: no plan tokens used
      </li>
    </ul>
  );
}
