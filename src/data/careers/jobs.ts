/** PLACEHOLDER — open roles, locations and types are invented for the launch mock-up; replace before launch. */
export type Department = "Engineering" | "Design" | "Marketing" | "Customer";

export type JobMeta = {
  slug: string;
  title: string;
  department: Department;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  summary: string;
};

/** The body of a job page. */
export type JobDetail = {
  intro: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
};

export const DEPARTMENTS: Department[] = ["Engineering", "Design", "Marketing", "Customer"];

export const JOBS: JobMeta[] = [
  {
    slug: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote · Europe",
    type: "Full-time",
    summary: "Build the agent workspace: chat, receipts, approvals and Records, in Next.js and TypeScript.",
  },
  {
    slug: "ai-agent-engineer",
    title: "AI Agent Engineer",
    department: "Engineering",
    location: "Remote · Europe or Africa",
    type: "Full-time",
    summary: "Make agents reliable at real work: instructions, tool use, evaluations and model choice.",
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    department: "Design",
    location: "Remote · UTC−1 to UTC+3",
    type: "Full-time",
    summary: "Design the moments where people and agents hand work back and forth.",
  },
  {
    slug: "growth-marketer",
    title: "Growth Marketer",
    department: "Marketing",
    location: "Remote · UK or Europe",
    type: "Full-time",
    summary: "Grow Dexisphere using Dexisphere: prospecting, outreach, funnels and content.",
  },
  {
    slug: "customer-success-manager",
    title: "Customer Success Manager",
    department: "Customer",
    location: "Remote · Americas",
    type: "Full-time",
    summary: "Help agencies and sales teams get their first agents doing real work, fast.",
  },
  {
    slug: "support-engineer",
    title: "Support Engineer",
    department: "Customer",
    location: "Remote · Anywhere",
    type: "Full-time",
    summary: "Untangle connectors, channels and deliverability, and turn fixes into docs.",
  },
];

export const jobBySlug = (slug: string) => JOBS.find((job) => job.slug === slug) ?? null;

export const jobsIn = (department: Department) => JOBS.filter((job) => job.department === department);
