import { BellRing, CreditCard, Hand, Mail, Send, Video, type LucideIcon } from "lucide-react";

export type FlowTone = "warn" | "teal" | "accent" | "violet" | "good" | "pink";

export type FlowNode = {
  id: string;
  label: string;
  detail: string;
  Icon: LucideIcon;
  tone: FlowTone;
  /** Grid placement on large screens: four columns, three rows. */
  place: string;
};

/**
 * The "draft that quote" story from the Connections lede, drawn as Tapotik's
 * workflow builder: the call, the email thread and the payments feed one
 * draft, and nothing sends until you approve it.
 */
export const FLOW_NODES: FlowNode[] = [
  { id: "call", label: "Client call ends", detail: "Notetaker · Google Meet", Icon: Video, tone: "warn", place: "lg:col-start-1 lg:row-start-2" },
  { id: "thread", label: "Read the deal", detail: "Gmail · Northwind thread", Icon: Mail, tone: "teal", place: "lg:col-start-2 lg:row-start-1" },
  { id: "paid", label: "Check what's paid", detail: "Stripe · read-only", Icon: CreditCard, tone: "accent", place: "lg:col-start-2 lg:row-start-3" },
  { id: "approve", label: "Quote drafted", detail: "Waits for your OK", Icon: Hand, tone: "violet", place: "lg:col-start-3 lg:row-start-2" },
  { id: "send", label: "Send it", detail: "From your own inbox", Icon: Send, tone: "good", place: "lg:col-start-4 lg:row-start-1" },
  { id: "remind", label: "Not yet", detail: "Reminder on Friday · Telegram", Icon: BellRing, tone: "pink", place: "lg:col-start-4 lg:row-start-3" },
];

/** Edges as [from, to] node ids; each is drawn from the source's right edge to the target's left. */
export const FLOW_EDGES: [string, string][] = [
  ["call", "thread"],
  ["call", "paid"],
  ["thread", "approve"],
  ["paid", "approve"],
  ["approve", "send"],
  ["approve", "remind"],
];

export const FLOW_CHIPS = ["Your own inbox", "Read-only payments", "Approval gates", "Meeting notes", "Telegram & WhatsApp"];
