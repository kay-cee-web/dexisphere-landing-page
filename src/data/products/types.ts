import type { LucideIcon } from "lucide-react";
import type { PillTone } from "@/components/ui/Pill";
import type { Faq, Feature, Step } from "@/types/marketing";

import type { DemoToolCall } from "@/types/demo";

export type { DemoToolCall };

/** Optional visual the demo shows once the tools finish. */
export type DemoVisual =
  | { kind: "funnel"; title: string; url: string }
  | { kind: "chart"; title: string; bars: { label: string; value: number }[] };

/** A scripted agent run for a product hero. */
export type DemoScript = {
  agent: string;
  /** Mono model label, e.g. "claude-sonnet". */
  model: string;
  task: string;
  tools: DemoToolCall[];
  /** Short assistant reply after the tools finish. */
  reply: string;
  visual?: DemoVisual;
  receipt: {
    area: string;
    badge: { label: string; tone: PillTone };
    stats: { label: string; value: string | number }[];
  };
  /** Ends on the "Ask before sending" bar instead of a finished run. */
  approval?: boolean;
  /** Mono usage line under the reply, e.g. "1,840 tokens". */
  usage: string;
};

/** A real task from the idea library, with what it gets you. */
export type UseCase = { title: string; task: string; outcome: string; Icon: LucideIcon };

type Block<T> = { title: string; lede: string; items: T[] };

export type ProductContent = {
  hero: { headline: string; lede: string; bullets: string[] };
  demo: DemoScript;
  capabilities: Block<Feature>;
  steps: Block<Step>;
  useCases: Block<UseCase>;
  faqs: Faq[];
  cta?: { title: string; lede: string };
  /** Used by the route's metadata. */
  meta: { title: string; description: string };
};
