"use client";

import { Bot } from "lucide-react";
import { ReceiptCard } from "@/components/demo/ReceiptCard";
import { ToolCallRow } from "@/components/demo/ToolCallRow";
import { IconTile } from "@/components/ui/IconTile";
import { Pill } from "@/components/ui/Pill";
import type { DemoScript } from "@/data/products/types";
import { useTimeline } from "@/hooks/useTimeline";
import { Appear } from "./Appear";
import { DemoApproval } from "./DemoApproval";
import { DemoVisual } from "./DemoVisual";

/**
 * A scripted agent run built from the app's own pieces: the task, tool calls
 * ticking from running to done, the reply and its work receipt. Plays while
 * on screen, holds on the result, then loops.
 */
export function AgentRunDemo({ script }: { script: DemoScript }) {
  const count = script.tools.length;
  const replyAt = count + 1;
  const receiptAt = count + 2;
  const approvalAt = script.approval ? count + 3 : receiptAt;
  const { ref, step: tick } = useTimeline<HTMLDivElement>(approvalAt, { interval: 1100, hold: 5200 });

  const status =
    tick < receiptAt
      ? { label: "Working", tone: "accent" as const }
      : script.approval
        ? { label: "Needs you", tone: "warn" as const }
        : { label: "Done", tone: "good" as const };

  return (
    <div
      ref={ref}
      role="figure"
      aria-label={`Example run: ${script.task}`}
      className="relative overflow-hidden rounded-[20px] border border-line bg-surface shadow-lift"
    >
      <header className="flex items-center gap-3 border-b border-line px-4 py-3">
        <IconTile Icon={Bot} size="sm" />
        <div className="min-w-0">
          <p className="truncate text-[14px] font-medium text-ink">{script.agent}</p>
          <p className="truncate font-mono text-[11px] text-faint">{script.model}</p>
        </div>
        <Pill tone={status.tone} dot className="ml-auto">
          {status.label}
        </Pill>
      </header>

      <div className="grid gap-3 bg-raised/60 p-4 sm:p-5">
        <p className="ml-auto max-w-[88%] rounded-[14px] rounded-br-[4px] bg-accent-soft px-3.5 py-2.5 text-[13.5px] leading-relaxed text-ink">
          {script.task}
        </p>

        {/* Every planned call is visible from the start (queued), so the panel is never empty. */}
        <div className="grid gap-1.5">
          {script.tools.map((call, index) => (
            <ToolCallRow
              key={call.name + index}
              call={call}
              status={tick >= index + 2 ? "done" : tick === index + 1 ? "running" : "queued"}
            />
          ))}
        </div>

        <Appear shown={tick >= replyAt} className="grid gap-3">
          <p className="text-[13.5px] leading-relaxed text-ink">{script.reply}</p>
          {script.visual && <DemoVisual visual={script.visual} />}
        </Appear>

        <Appear shown={tick >= receiptAt}>
          <ReceiptCard
            area={script.receipt.area}
            stats={script.receipt.stats}
            badge={<Pill tone={script.receipt.badge.tone}>{script.receipt.badge.label}</Pill>}
          />
        </Appear>

        {script.approval && (
          <Appear shown={tick >= approvalAt}>
            <DemoApproval agent={script.agent} />
          </Appear>
        )}

        <Appear shown={tick >= receiptAt}>
          <p className="font-mono text-[11px] text-faint">{script.usage}</p>
        </Appear>
      </div>
    </div>
  );
}
