import { Check } from "lucide-react";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/cn";
import type { DemoToolCall, ToolStatus } from "@/types/demo";

/** One tool call in a demo run: queued (planned), running (trace) or done (result). */
export function ToolCallRow({ call, status }: { call: DemoToolCall; status: ToolStatus }) {
  const done = status === "done";
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-[10px] border px-3 py-2.5 transition-[opacity,border-color,background-color] duration-300",
        status === "queued" ? "border-dashed border-line bg-transparent opacity-45" : "border-line bg-surface",
        status === "running" && "border-accent/40",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "grid size-6 shrink-0 place-items-center rounded-full transition-colors",
          done ? "bg-good-soft text-good" : status === "running" ? "bg-accent-soft text-accent" : "bg-raised text-faint",
        )}
      >
        {done ? (
          <Check className="size-3.5" />
        ) : (
          <span className={cn("size-1.5 rounded-full bg-current", status === "running" && "animate-pulse")} />
        )}
      </span>
      <span className="grid min-w-0 flex-1 gap-0.5">
        <span className="truncate font-mono text-[12.5px] text-ink">{call.name}</span>
        <span className="truncate text-[12px] text-muted">{call.detail}</span>
      </span>
      {done &&
        (call.result ? (
          <Pill tone={call.tone ?? "good"} className="shrink-0">
            {call.result}
          </Pill>
        ) : (
          <span className="shrink-0 font-mono text-[11px] text-good">done</span>
        ))}
      {status === "running" && (
        <span aria-label="running" className="relative h-0.5 w-14 shrink-0 overflow-hidden rounded-full bg-line">
          <span className="absolute inset-y-0 left-0 w-2/5 animate-trace rounded-full bg-accent" />
        </span>
      )}
      {status === "queued" && <span className="shrink-0 font-mono text-[11px] text-faint">queued</span>}
    </div>
  );
}
