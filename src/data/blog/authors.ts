/** PLACEHOLDER — author bios are invented for the launch mock-up; replace before launch. */
export type AuthorProfile = { name: string; role: string; bio: string };

const BIOS: Record<string, string> = {
  "Ada Nwosu":
    "Ada leads product at Dexisphere. She spent a decade running outbound for agencies before deciding the busywork should do itself, with a receipt.",
  "Luca Ferrari":
    "Luca works on the agent runtime and the receipts that sit under every reply. He likes boring infrastructure and diffs that explain themselves.",
  "Grace Otieno":
    "Grace designs the moments where people and agents hand work back and forth: approvals, drafts and the sending switch.",
  "Sam Whitfield":
    "Sam runs growth, which mostly means using Dexisphere agents to prospect, verify and follow up, then writing down what worked.",
};

const FALLBACK_BIO = "Writes about agents, outreach and the craft of getting sales work done without the busywork.";

export const authorBio = (name: string) => BIOS[name] ?? FALLBACK_BIO;
