import type { ContentBlock } from "@/types/content";

/** Second half of the Agents page: conversations, managing agents, images and scheduling. */
export const AGENTS_MANAGE_BLOCKS: ContentBlock[] = [
  { type: "h2", text: "New conversations" },
  {
    type: "p",
    text: "Each agent has one continuous chat thread. **New conversation** in the header gives you a clean thread by creating a copy of the agent, named `<name> clone <n>`, with the same instructions, model and sending settings. Your earlier conversation stays on the original agent, which you can reopen from **Recents** or **All agents**.",
  },
  {
    type: "ul",
    items: [
      "Channel links (WhatsApp, Telegram, extension), history and usage stats stay on the original agent. They aren't copied.",
      "A copy you never use is cleaned up: if you open it and leave without sending a message, editing it or pairing a channel, it's removed quietly.",
      "Pressing **New conversation** again on an unused copy opens that same copy instead of making another.",
    ],
  },
  { type: "h2", text: "Clone, rename and delete" },
  {
    type: "p",
    text: "Every agent has an actions menu (the `…` button on its card, or in its header) with:",
  },
  {
    type: "table",
    head: ["Action", "What it does"],
    rows: [
      ["Open chat", "Opens the agent's conversation."],
      ["Rename", "Changes the agent's name. The instructions stay as they are."],
      ["Clone", "Makes `<name> copy` with the same instructions and model, but an empty thread."],
      ["Copy ID", "Copies the agent ID, useful when you contact support."],
      ["Delete", "Asks you to confirm, then permanently removes the agent, its instructions and its conversation. Linked channels stop working."],
    ],
  },
  {
    type: "p",
    text: "**All agents** lists every agent with search, a grid or list view, and sorting by last edited, created, or name A–Z and Z–A.",
  },
  { type: "h2", text: "Attaching images" },
  {
    type: "p",
    text: "Use the image button in the composer to attach screenshots, flyers or photos of business cards. Images upload as soon as you pick them, and the agent receives a link to each one with your message.",
  },
  {
    type: "ul",
    items: [
      "Up to **4 images** per message.",
      "Each image must be under **5 MB**.",
      "Supported formats: JPG, PNG, WebP, GIF and BMP.",
    ],
  },
  {
    type: "p",
    text: "The composer also has a dictation button in browsers that support speech input. Enter sends a message and Shift+Enter adds a new line.",
  },
  { type: "h2", text: "Scheduled work" },
  {
    type: "p",
    text: "Agents can run tasks on a schedule, like a Monday report or daily reminders. There's no separate scheduler screen: you manage it in chat, and the agent's automation tools do the work. The **Scheduled work** panel at the top of **Workflows** has three shortcuts:",
  },
  {
    type: "ul",
    items: [
      "**Show scheduled** asks the agent to list every automation: what it does, how often it runs, when it runs next and its ID.",
      "**Schedule a task** starts a draft that begins \"Set up a recurring task:\" for you to finish.",
      "**Stop one** starts a draft asking the agent to cancel an automation by ID.",
    ],
  },
  {
    type: "code",
    title: "Schedule from chat",
    code: "Set up a recurring task: every weekday at 8am, list the deals that need a next action today and create a task for each.",
  },
  {
    type: "callout",
    tone: "info",
    title: "Automations run on the server",
    text: "Scheduled work keeps running when the app is closed. Use **Show scheduled** now and then to check what's active, and **Stop one** for anything you no longer need. For sends, see [Approvals](/docs/approvals).",
  },
];
