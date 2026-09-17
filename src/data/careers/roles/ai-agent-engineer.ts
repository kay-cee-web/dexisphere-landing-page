/** PLACEHOLDER — job description written for the launch mock-up; replace before launch. */
import type { JobDetail } from "../jobs";

export const detail: JobDetail = {
  intro:
    "Dexisphere agents run server-side with real tools: they find prospects, verify emails, move deals, book appointments and send outreach. Getting a model to do that reliably, safely and cheaply is the core of what we do. As an AI agent engineer you'll work on how agents plan, call tools, ask for approval and recover when things go wrong.",
  responsibilities: [
    "Improve how agents turn a plain-language task into correct sequences of tool calls.",
    "Build evaluations from real workflows, like prospecting runs and campaign sends, and track them over time.",
    "Tune instructions and approval behaviour so agents stop and ask at exactly the right moments.",
    "Compare Claude, GPT and Gemini models on cost, speed and quality for each kind of work.",
    "Investigate failed turns end to end and turn what you learn into fixes and guardrails.",
  ],
  requirements: [
    "3+ years of software engineering, with at least one LLM-powered feature shipped to real users.",
    "Hands-on experience with tool or function calling and structured outputs.",
    "An evaluation mindset: you measure before you believe an improvement.",
    "Solid backend fundamentals: APIs, queues, retries and observability.",
    "Good judgement about when an agent should act and when it should ask.",
  ],
  niceToHave: [
    "Experience with token budgeting and cost controls in production.",
    "Background in sales, marketing or CRM automation.",
    "Contributions to open-source agent or evaluation tooling.",
  ],
};
