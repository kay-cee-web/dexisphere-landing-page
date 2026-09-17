/** PLACEHOLDER — job description written for the launch mock-up; replace before launch. */
import type { JobDetail } from "../jobs";

export const detail: JobDetail = {
  intro:
    "The agent workspace is where people give agents work and check what came back: the chat, work receipts, the approval bar, channels and the Records views. We're looking for a senior frontend engineer who cares about the details that make software feel trustworthy, and who likes turning messy backend realities into calm, clear interfaces.",
  responsibilities: [
    "Own major parts of the agent workspace in Next.js, React and TypeScript, from idea to shipped.",
    "Build the interfaces that make agent work legible: receipts, approvals, token usage and record links.",
    "Keep the app fast and resilient when APIs are slow, inconsistent or occasionally wrong.",
    "Raise the bar on our shared UI kit, accessibility, and light and dark themes.",
    "Work closely with design and the agent team, and review code with care.",
  ],
  requirements: [
    "5+ years building production web apps, with deep React and TypeScript experience.",
    "Strong instincts for state, data fetching and optimistic updates that roll back cleanly.",
    "A good eye for interaction design, motion and typography.",
    "Comfort working with APIs you don't control and documenting their quirks.",
    "Clear async writing: you explain trade-offs in a PR description people enjoy reading.",
  ],
  niceToHave: [
    "Experience with the Next.js App Router and server components.",
    "You've built chat, collaborative or real-time interfaces before.",
    "Familiarity with CRM, email or sales tooling.",
  ],
};
