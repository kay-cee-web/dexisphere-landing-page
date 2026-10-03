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
    eyebrow: "Say what you want handled",
    title: "One sentence in, the actual work out",
    lede: "In plain language. “Find me customers in Austin.” “Plan this week's posts.” “Sit in my calls.” No flowcharts, no automation builder. Each job fans out into real work across the accounts you've connected.",
    points: [
      { title: "Across what you already use", body: "Your lists and pipeline, your mailbox, your calendar, your social and ad accounts, your payments." },
      { title: "Checks before sends", body: "Addresses are verified and your sending domain is checked. If a send would land in spam, it holds it." },
      { title: "Receipts, not claims", body: "The app compares your records before and after, so you see what really changed." },
    ],
  },
  schedule: {
    id: "scheduled-work",
    eyebrow: "Get on with your work",
    title: "It runs whether or not you're logged in.",
    lede: "Ask for a job every Monday or every morning and it sets it up. When something needs a decision, it messages you. When nothing does, it stays quiet.",
    points: [
      { title: "Managed in chat", body: "Ask it to set up, list or cancel what it runs on a schedule. No builder to learn." },
      { title: "Real jobs, on repeat", body: "A weekly prospect run, Monday's revenue summary, the week's posts drafted, stalled deals flagged." },
      { title: "It waits at the gate", body: "With Ask before sending on, a scheduled send waits for Send, Don't send or your changes." },
    ],
  },
  control: {
    id: "control",
    eyebrow: "You stay in control",
    title: "You stay in control of all of it",
    lede: "It does the work. You keep the keys, the last word and the off switch.",
    points: [
      { title: "Your accounts, your permission", body: "Every connection is authorised by you, one service at a time, and can be disconnected in a click. It only sees what you've granted." },
      { title: "It drafts, you approve", body: "Emails, posts and replies are written for you to check. Nothing goes out in your name that you haven't said yes to." },
      { title: "It can see money, not move it", body: "Payment and ad connections are read-only. It reports what happened. It cannot send, refund, charge, or change a budget." },
    ],
  },
} satisfies Record<string, DeepDiveCopy>;
