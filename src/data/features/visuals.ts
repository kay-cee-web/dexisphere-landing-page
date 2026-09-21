/**
 * PLACEHOLDER — sample runs, schedules, log entries, counts and account names
 * for the /features visuals. Illustrative only; replace before launch.
 */
import { CalendarClock, ListPlus, Radar, Send, type LucideIcon } from "lucide-react";
import type { PillTone } from "@/components/ui/Pill";

export type FanOutBranch = { area: string; Icon: LucideIcon; tools: string[]; status: { label: string; tone: PillTone } };

export const FAN_OUT: { task: string; branches: FanOutBranch[]; receipt: string[] } = {
  task: "Every Monday, find new gyms in Leeds, file them into a list and draft an intro email for me to approve.",
  branches: [
    { area: "Prospecting", Icon: Radar, tools: ["find_prospects", "find_duplicates"], status: { label: "24 found", tone: "good" } },
    { area: "Lists", Icon: ListPlus, tools: ["create_list", "add_to_list"], status: { label: "+24 leads", tone: "good" } },
    { area: "Outreach", Icon: Send, tools: ["verify_emails", "check_sending_domain"], status: { label: "Draft held", tone: "warn" } },
    { area: "Automation", Icon: CalendarClock, tools: ["schedule_automation"], status: { label: "Mon 09:00", tone: "accent" } },
  ],
  receipt: ["+24 leads", "1 list", "1 draft", "1 automation"],
};

export type Automation = { schedule: string; title: string; next: string };

export const AUTOMATIONS: Automation[] = [
  { schedule: "Every Monday 09:00", title: "Weekly prospect run", next: "Mon 22 Sep" },
  { schedule: "Every Monday 08:30", title: "Monday performance brief", next: "Mon 22 Sep" },
  { schedule: "Every day 08:00", title: "Daily task reminders", next: "Thu 18 Sep" },
  { schedule: "1st of the month", title: "Monthly contact cleanup", next: "Wed 1 Oct" },
];

export const APPROVAL_GATE = {
  run: "Weekly prospect run",
  draft: "Intro email · Leeds gyms · week 38",
  recipients: 22,
  held: 2,
};

export type ReceiptLogEntry = { time: string; area: string; tone: PillTone; text: string };

export const RECEIPT_LOG: ReceiptLogEntry[] = [
  { time: "09:02", area: "Lists", tone: "good", text: "Added 24 leads to Leeds gyms · week 38" },
  { time: "09:03", area: "Outreach", tone: "warn", text: "Drafted Intro email, waiting for approval" },
  { time: "11:40", area: "CRM", tone: "accent", text: "Moved Harbor Physio to Proposal" },
  { time: "11:41", area: "Calendar", tone: "violet", text: "Booked Northside Dental, Thu 10:00" },
];

export const SENDING_COUNTS = { sent: 142, blocked: 9 };

export type ConnectedAccount = { label: string; value: string; status: string };

export const ACCOUNTS: ConnectedAccount[] = [
  { label: "Gmail", value: "hello@yourstudio.com", status: "Connected" },
  { label: "Twilio SMS", value: "+1 512 ••• 0147", status: "Connected" },
  { label: "Anthropic key", value: "sk-ant-••••4f2a", status: "Your key" },
];
