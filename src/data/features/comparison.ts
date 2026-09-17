/** A cell is a check (true), a cross (false) or a short qualifier. */
export type ComparisonCell = boolean | string;

export type ComparisonRow = { capability: string; dexisphere: ComparisonCell; manual: ComparisonCell; chatbot: ComparisonCell };

export const COMPARISON_COLUMNS = { dexisphere: "Dexisphere", manual: "Doing it by hand", chatbot: "Generic AI chatbot" };

/** "Dexisphere vs. the alternatives" on /features. */
export const COMPARISON_ROWS: ComparisonRow[] = [
  { capability: "Finds prospects and files them into lists", dexisphere: true, manual: "Hours of copy-paste", chatbot: false },
  { capability: "Sends email, SMS and WhatsApp campaigns", dexisphere: true, manual: true, chatbot: false },
  { capability: "Creates and moves deals, tasks and appointments", dexisphere: true, manual: true, chatbot: false },
  { capability: "Verifies addresses and checks your domain before sending", dexisphere: true, manual: "If you remember", chatbot: false },
  { capability: "Shows exactly what changed", dexisphere: "Work receipts", manual: false, chatbot: false },
  { capability: "Waits for your approval before sending", dexisphere: true, manual: "Not needed", chatbot: false },
  { capability: "Runs on a schedule", dexisphere: true, manual: false, chatbot: false },
  { capability: "Reachable on WhatsApp and Telegram", dexisphere: true, manual: false, chatbot: "Sometimes" },
  { capability: "Choice of model, or your own AI key", dexisphere: "Claude · GPT · Gemini", manual: false, chatbot: "One vendor" },
  { capability: "Drafts copy in your voice", dexisphere: true, manual: true, chatbot: true },
];
