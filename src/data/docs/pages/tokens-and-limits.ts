import { MACRID_APP_URL, REDEEM_URL } from "@/lib/config";
import { ROUTES } from "@/data/navigation";
import { PLANS, PLAN_FEATURES, formatAllowance } from "@/data/plans";
import type { DocPage } from "../types";

const planTable = {
  type: "table" as const,
  head: ["Allowance", ...PLANS.map((plan) => `${plan.name} ($${plan.price})`)],
  rows: PLAN_FEATURES.map(({ key, label }) => [label, ...PLANS.map((plan) => `\`${formatAllowance(plan[key])}\``)]),
};

export const TOKENS_AND_LIMITS: DocPage = {
  slug: "tokens-and-limits",
  title: "Tokens and limits",
  description:
    "How chat turns use tokens, where to see usage, using your own AI key, what happens when tokens run out, and every plan allowance and app limit.",
  group: "Platform",
  nextSteps: ["account", "troubleshooting"],
  blocks: [
    { type: "h2", text: "Tokens per turn" },
    {
      type: "p",
      text: "Every chat turn, meaning one message you send and the agent's reply, costs tokens. The cost depends on how much the agent reads and writes, and on the tools it uses along the way: a quick question costs little, a prospect search that files 40 leads costs more. Tokens come from your workspace's plan, so all agents draw on the same balance.",
    },
    { type: "h2", text: "Usage on replies" },
    {
      type: "ul",
      items: [
        "**Beside each reply's time** you'll see what that turn cost, for example `· 1,240 tokens`. Hover it to see how many tokens are left after the reply.",
        "**In the agent header**, a balance like `48.2K tokens` shows what's left as of the last reply. It appears after your first reply in a session, and clicking it opens your plan.",
        "**Settings → Usage** shows the agent's stats and activity.",
      ],
    },
    { type: "h2", text: "Using your own AI key" },
    {
      type: "p",
      text: `You can pay for model usage with your own Anthropic, OpenAI or Google Gemini key. Add it on the [AI Keys page](${MACRID_APP_URL}/settings/ai-keys) in the Macrid app. When your key pays for a turn, the reply shows \`· your API key\` instead of a token count, and no plan tokens are used.`,
    },
    { type: "h2", text: "Running out of tokens" },
    {
      type: "p",
      text: "When the balance hits zero, the header shows **No tokens left** and the next message fails with a note that you've run out, plus an **Upgrade plan** button. You stay signed in and nothing is lost: your agents, instructions and Records are all still there.",
    },
    {
      type: "ol",
      items: [
        `Pick a plan on the [pricing page](${ROUTES.pricing}) and complete checkout.`,
        `Redeem the licence code on [the plans page](${REDEEM_URL}).`,
        "Go back to the chat and press **Retry** on the failed message, or send it again.",
      ],
    },
    { type: "h2", text: "Plan allowances" },
    {
      type: "p",
      text: "Every plan is a one-time lifetime licence, so nothing renews. `Unlimited` means no cap and `0` means the feature isn't on that plan.",
    },
    planTable,
    { type: "h2", text: "App limits" },
    {
      type: "table",
      head: ["Limit", "Value"],
      rows: [
        ["Images per message", "`4`"],
        ["Size per image", "`5 MB`"],
        ["Image formats", "JPG, PNG, WebP, GIF, BMP"],
        ["Channel pairing code", "`6` characters, valid for `15 minutes`"],
        ["Email verification and password reset codes", "`6` digits, new code every `60 seconds`"],
        ["Password length", "At least `8` characters"],
        ["SMS sender ID", "Up to `11` characters, or a +E.164 number"],
        ["Google Places without your own key", "Shared daily limit"],
      ],
    },
    {
      type: "callout",
      tone: "info",
      title: "Stretching your tokens",
      text: "Give agents clear, specific tasks and keep instructions focused. A vague request often takes several turns of back-and-forth, and each turn costs tokens.",
    },
  ],
};
