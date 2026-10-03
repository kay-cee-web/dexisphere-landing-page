/** A cell is a check (true), a cross (false) or a short qualifier. */
export type ComparisonCell = boolean | string;

export type ComparisonRow = { capability: string; dexisphere: ComparisonCell; manual: ComparisonCell; chatbot: ComparisonCell };

export const COMPARISON_COLUMNS = { dexisphere: "Dexisphere", manual: "Doing it yourself", chatbot: "ChatGPT and friends" };

/** "Dexisphere vs. the alternatives" on /features. */
export const COMPARISON_ROWS: ComparisonRow[] = [
  { capability: "Finds customers and writes to them", dexisphere: true, manual: "Hours of copy-paste", chatbot: "Writes, can't send" },
  { capability: "Sends from your own email, SMS and WhatsApp", dexisphere: true, manual: true, chatbot: false },
  { capability: "Drafts the week's posts for each platform", dexisphere: true, manual: "If you find the time", chatbot: "One at a time" },
  { capability: "Sits in your calls and remembers what you promised", dexisphere: true, manual: "If you remember", chatbot: false },
  { capability: "Watches your payments and ad spend", dexisphere: "Read-only", manual: "Six dashboards", chatbot: false },
  { capability: "Keeps working when you close the tab", dexisphere: true, manual: false, chatbot: false },
  { capability: "Messages you only when something needs you", dexisphere: true, manual: false, chatbot: false },
  { capability: "Waits for your yes before sending", dexisphere: true, manual: "Not needed", chatbot: false },
  { capability: "Knows your pipeline, inbox and calendar", dexisphere: true, manual: true, chatbot: false },
  { capability: "Choice of model, or your own AI key", dexisphere: "Claude · GPT · Gemini", manual: false, chatbot: "One vendor" },
];
