import type { DocPage } from "../types";
import { AGENTS_MANAGE_BLOCKS } from "./agents-manage";

export const AGENTS: DocPage = {
  slug: "agents",
  title: "Agents",
  description:
    "Create an agent from a task, shape its instructions, pick its model, start new conversations, attach images and schedule recurring work.",
  group: "Using agents",
  nextSteps: ["work-receipts", "approvals"],
  blocks: [
    {
      type: "p",
      text: "An agent is a name, a set of instructions and a model. You give it work in chat, and it runs on the server with real tools: it searches and updates your Records, builds funnels and, when you allow it, sends outreach.",
    },
    { type: "h2", text: "Create an agent from a task" },
    {
      type: "p",
      text: "On the home screen, describe the job in the composer and press **Create agent**. The task becomes the agent's instructions, the agent is named for you, and its chat opens with the task already typed so you can send it or adjust it first.",
    },
    {
      type: "code",
      title: "A good first task",
      code: "Every Monday, find 40 dental clinics in Austin with no website and draft a WhatsApp opener for each.",
    },
    {
      type: "p",
      text: "You can also press **Create agent** on the **All agents** page without a task. The new agent starts with no brief: describe the job in chat and it writes its own instructions from the conversation.",
    },
    { type: "h3", text: "The idea library" },
    {
      type: "p",
      text: "Below the composer, the idea library offers ready-made tasks in seven categories: Prospecting, Funnels, Outreach, CRM, Deliverability, Analytics and Business. Clicking a card fills the composer. Each card shows how ready it is for your workspace:",
    },
    {
      type: "table",
      head: ["Label", "Meaning"],
      rows: [
        ["`Ready`", "Works end to end today with what you have connected."],
        ["`Connect X`", "The agent can do it, but a platform it needs isn't connected yet."],
        ["`Partly`", "The agent can't do every step of this yet. It will do what it can."],
        ["`Not available`", "Waiting on an integration Dexisphere doesn't have yet."],
      ],
    },
    { type: "h2", text: "The agent workspace" },
    {
      type: "p",
      text: "Opening an agent shows its name, a **Sending on** or **Sending off** pill, your token balance, and four tabs:",
    },
    {
      type: "ul",
      items: [
        "**Chat**: the conversation. Replies render as formatted text, with copy and read-aloud buttons.",
        "**Workflows**: idea cards for this agent, plus **Scheduled work**.",
        "**Plugins**: workspace connectors and skills.",
        "**Settings**: sending, Ask before sending, model, channels and usage.",
      ],
    },
    { type: "h2", text: "Instructions" },
    {
      type: "p",
      text: "Instructions are the brief the agent follows on every task: what it's for, who it works for and how it should behave. Press **Instructions** in the agent header to edit the **Name** and **Brief**, then **Save instructions**. Plain language is fine, and Markdown works too.",
    },
    {
      type: "p",
      text: "You don't have to open the editor to change them. Tell the agent in chat and it can rewrite its own instructions. When that happens, the reply carries an **Updated its instructions** badge; click it to read the new version.",
    },
    {
      type: "code",
      title: "Change the brief from chat",
      code: "From now on, write every email in British English and keep it under 120 words. Save that to your instructions.",
    },
    { type: "h2", text: "Choosing a model" },
    {
      type: "p",
      text: "Each agent thinks with one AI model. Open **Settings → General → Model** and pick from the Anthropic Claude, OpenAI and Google Gemini families, or leave it on **Workspace default**. Each option notes what it's good at, such as most powerful, best balance or fastest and cheapest. The change applies from the next message.",
    },
    ...AGENTS_MANAGE_BLOCKS,
  ],
};
