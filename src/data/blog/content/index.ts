import type { ContentBlock } from "@/types/content";
import { blocks as agencyRunsThirtyClients } from "./agency-runs-thirty-clients";
import { blocks as designingAskBeforeSending } from "./designing-ask-before-sending";
import { blocks as howWorkReceiptsWork } from "./how-work-receipts-work";
import { blocks as introducingDexisphereAgents } from "./introducing-dexisphere-agents";
import { blocks as localProspectingPlaybook } from "./local-prospecting-playbook";
import { blocks as verifyBeforeYouSend } from "./verify-before-you-send";

/** Article bodies by post slug. Every slug in `POSTS` needs an entry here. */
const POST_BODIES: Record<string, ContentBlock[]> = {
  "introducing-dexisphere-agents": introducingDexisphereAgents,
  "how-work-receipts-work": howWorkReceiptsWork,
  "designing-ask-before-sending": designingAskBeforeSending,
  "local-prospecting-playbook": localProspectingPlaybook,
  "agency-runs-thirty-clients": agencyRunsThirtyClients,
  "verify-before-you-send": verifyBeforeYouSend,
};

export const postBody = (slug: string): ContentBlock[] | null => POST_BODIES[slug] ?? null;
