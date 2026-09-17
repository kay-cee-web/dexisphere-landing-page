import { Pill, type PillTone } from "@/components/ui/Pill";
import type { Department } from "@/data/careers/jobs";

const TONES: Record<Department, PillTone> = {
  Engineering: "accent",
  Design: "iris",
  Marketing: "good",
  Customer: "neutral",
};

export function DepartmentPill({ department, className }: { department: Department; className?: string }) {
  return (
    <Pill tone={TONES[department]} dot className={className}>
      {department}
    </Pill>
  );
}
