import { Hand, Leaf, Receipt, Wrench } from "lucide-react";
import type { Feature } from "@/types/marketing";

/** What we hold ourselves to. Each one maps to something the app actually does. */
export const VALUES: Feature[] = [
  {
    Icon: Receipt,
    title: "Show the receipt",
    description:
      "An agent that says “done” isn't enough. After every turn the app compares your records before and after and lists what changed, with a link to each one.",
    meta: "work receipts",
  },
  {
    Icon: Hand,
    title: "Humans hold the send button",
    description:
      "Agents research and draft freely, but you decide what goes out. Ask before sending shows the draft, recipients and checks, and one switch stops all sending.",
    meta: "ask before sending",
  },
  {
    Icon: Wrench,
    title: "Real tools, not advice",
    description:
      "We don't ship a chatbot that tells you what to do next. Agents run real tools that find prospects, move deals, book appointments and send campaigns.",
    meta: "find_prospects · move_deal_stage",
  },
  {
    Icon: Leaf,
    title: "Calm software",
    description:
      "No dashboards screaming for attention and no subscriptions quietly renewing. Tell the agent what you need, check the receipt, get on with your day.",
    meta: "lifetime licences",
  },
];
