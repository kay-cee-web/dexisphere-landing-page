export type DeepDiveCopy = {
  id: string;
  eyebrow: string;
  title: string;
  lede: string;
  points: { title: string; body: string }[];
};

/** Copy for the three deep dives on /features. Visual data lives in `visuals.ts`. */
export const DEEP_DIVES = {
  tools: {
    id: "real-tools",
    eyebrow: "Real tools, not advice",
    title: "One task in, the actual work out",
    lede: "A chatbot tells you how to build a prospect list. A Dexisphere agent builds it. Each task fans out into tool calls across your workspace, run on the server.",
    points: [
      { title: "Across every area", body: "Records, lists, pipeline, tasks and calendar, outreach, funnels and automations." },
      { title: "Checks before sends", body: "Addresses are verified and your sending domain is checked before a campaign leaves." },
      { title: "Receipts, not claims", body: "The app compares your records before and after, so you see what really changed." },
    ],
  },
  schedule: {
    id: "scheduled-work",
    eyebrow: "Scheduled work",
    title: "Set it once. It runs every week.",
    lede: "Ask for a task on a schedule and the agent creates the automation. When a run would send something, it can stop at the gate and wait for you.",
    points: [
      { title: "Managed in chat", body: "Ask the agent to create, list or cancel its automations. No builder to learn." },
      { title: "Real tasks, on repeat", body: "Weekly prospect runs, Monday briefs, stalled deal reviews and daily task reminders." },
      { title: "An approval gate", body: "With Ask before sending on, scheduled sends wait for Send, Don't send or your changes." },
    ],
  },
  control: {
    id: "control",
    eyebrow: "You stay in control",
    title: "Agents do the work. You keep the keys.",
    lede: "Every change is on a receipt, every send can wait for you, and one switch stops an agent from sending anything at all.",
    points: [
      { title: "A log of what changed", body: "Receipts list leads added, deals moved, tasks, appointments, campaigns and funnels, including changes made elsewhere during the turn." },
      { title: "A kill switch for sending", body: "Turn sending off and the agent can still research and draft. Settings show what was sent and blocked in the last 24 hours." },
      { title: "Your accounts, your keys", body: "Campaigns go out from the mailboxes and senders you connect, and agents can run on your own AI key." },
    ],
  },
} satisfies Record<string, DeepDiveCopy>;
