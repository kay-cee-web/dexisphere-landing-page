import { BellRing, MessageSquareText, Plug } from "lucide-react";
import type { Step } from "@/types/marketing";

export const HOW_IT_WORKS: Step[] = [
  {
    title: "Connect what you use",
    description: "Your email, calendar, payment processors, mailing list, store, social and ad accounts. One at a time, with your permission, and switched off again whenever you want.",
    Icon: Plug,
  },
  {
    title: "Say what you want handled",
    description: "In plain language. “Find me customers in Lagos.” “Run my social.” “Sit in my calls.” No flowcharts, no automation builder.",
    Icon: MessageSquareText,
  },
  {
    title: "Get on with your work",
    description: "It runs whether or not you're logged in. When something needs a decision, it messages you. When nothing does, it stays quiet.",
    Icon: BellRing,
  },
];
