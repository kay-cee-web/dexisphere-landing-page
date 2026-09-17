/**
 * PLACEHOLDER — company history and offices are invented for layout. Replace
 * the milestones, dates and locations with the real ones before launch.
 */

export type Milestone = { year: string; title: string; description: string };

export const MILESTONES: Milestone[] = [
  {
    year: "2022",
    title: "Started with the busywork",
    description:
      "We watched small sales teams spend their mornings copying leads between tabs and decided the clicking was the problem worth solving.",
  },
  {
    year: "2023",
    title: "One platform for outreach",
    description:
      "Prospect search, email, SMS, WhatsApp, funnels and a CRM landed under one roof, so the work finally lived in one place.",
  },
  {
    year: "2024",
    title: "Lifetime licences",
    description:
      "We dropped subscriptions for one-time licences. Small teams told us a bill that never renews was the feature they wanted most.",
  },
  {
    year: "2025",
    title: "The first agents",
    description:
      "Agents learned to use the platform's own tools: finding prospects, filing leads, moving deals and drafting campaigns from a plain-language task.",
  },
  {
    year: "2026",
    title: "Dexisphere",
    description:
      "Work receipts, ask before sending and channels on WhatsApp, Telegram and the browser. Agents you can hand real work to, and check.",
  },
];

export type Office = { city: string; country: string; timeZone: string; note: string };

export const OFFICES: Office[] = [
  { city: "Lagos", country: "Nigeria", timeZone: "WAT · UTC+1", note: "Engineering and support" },
  { city: "London", country: "United Kingdom", timeZone: "BST · UTC+1", note: "Sales and partnerships" },
  { city: "Austin", country: "United States", timeZone: "CDT · UTC−5", note: "Customer success" },
];

export const REMOTE_NOTE = {
  title: "Remote-first",
  description: "Most of the team works from wherever they do their best work, across nine time zones.",
};
