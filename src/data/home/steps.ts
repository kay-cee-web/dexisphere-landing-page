import { MessageSquareText, Plug, Receipt, Workflow } from "lucide-react";
import type { Step } from "@/types/marketing";

export const HOW_IT_WORKS: Step[] = [
  {
    title: "Describe the task",
    description: "Type what you'd do by hand, or pick a ready-made idea. The agent is created from your words, no setup screens.",
    Icon: MessageSquareText,
  },
  {
    title: "Connect your accounts",
    description: "Link your mailbox, Twilio or Google Places once. Every agent in the workspace can use them.",
    Icon: Plug,
  },
  {
    title: "The agent does the work",
    description: "It searches, fills lists, updates deals, drafts messages and schedules follow-ups with real tools.",
    Icon: Workflow,
  },
  {
    title: "Review the receipt",
    description: "Every reply ends with what changed and links to each record. Approve the send, or ask for changes.",
    Icon: Receipt,
  },
];
