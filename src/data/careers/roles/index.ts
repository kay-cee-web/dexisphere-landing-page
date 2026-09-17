import type { JobDetail } from "../jobs";
import { detail as aiAgentEngineer } from "./ai-agent-engineer";
import { detail as customerSuccessManager } from "./customer-success-manager";
import { detail as growthMarketer } from "./growth-marketer";
import { detail as productDesigner } from "./product-designer";
import { detail as seniorFrontendEngineer } from "./senior-frontend-engineer";
import { detail as supportEngineer } from "./support-engineer";

/** Job page bodies by slug. Every slug in `JOBS` needs an entry here. */
const JOB_DETAILS: Record<string, JobDetail> = {
  "senior-frontend-engineer": seniorFrontendEngineer,
  "ai-agent-engineer": aiAgentEngineer,
  "product-designer": productDesigner,
  "growth-marketer": growthMarketer,
  "customer-success-manager": customerSuccessManager,
  "support-engineer": supportEngineer,
};

export const jobDetail = (slug: string): JobDetail | null => JOB_DETAILS[slug] ?? null;
