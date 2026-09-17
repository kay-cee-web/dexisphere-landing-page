import type { PillTone } from "@/components/ui/Pill";

/** One tool call in a scripted agent run. Names are the agent's real tools. */
export type DemoToolCall = {
  name: string;
  detail: string;
  /** Shown as a pill once done, e.g. "42 found". Without it the row just says done. */
  result?: string;
  tone?: PillTone;
};

export type ToolStatus = "queued" | "running" | "done";

export type ReceiptStat = { label: string; value: string | number };
