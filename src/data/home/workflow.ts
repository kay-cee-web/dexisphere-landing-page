import { CalendarClock, Hand, MailCheck, Radar, Send, type LucideIcon } from "lucide-react";

export type WorkflowNode = {
  label: string;
  tool: string;
  detail: string;
  Icon: LucideIcon;
  /** Approval gates render in the warn tone. */
  gate?: boolean;
};

/** The "weekly prospect run" idea from the app's idea library, as a scheduled automation. */
export const WORKFLOW_NODES: WorkflowNode[] = [
  { label: "Every Monday, 9:00", tool: "schedule_automation", detail: "Runs weekly until you cancel it", Icon: CalendarClock },
  { label: "Search my niche and area", tool: "find_prospects", detail: "Scores businesses and files the best", Icon: Radar },
  { label: "Clean the list", tool: "verify_emails", detail: "Drops invalid and risky addresses", Icon: MailCheck },
  { label: "Wait for my OK", tool: "approval", detail: "Draft, recipients and checks", Icon: Hand, gate: true },
  { label: "Send the intro", tool: "send_email", detail: "From your own mailbox", Icon: Send },
];

export const WORKFLOW_POINTS = [
  "Ask in chat to create, list or cancel automations",
  "Approval gates pause before anything is sent",
  "A sending switch stops outreach instantly; research and drafts carry on",
  "Every run leaves a receipt in Records",
];
