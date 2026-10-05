import { CircleCheck, Repeat } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WORKFLOW_POINTS } from "@/data/home/workflow";
import { WorkflowPipeline } from "./WorkflowPipeline";

/** Tapotik's "visual workflows" section, told as scheduled agent work with approval gates. */
export function WorkflowShowcase() {
  return (
    <Section tone="raised" bordered>
      <Container width="wide" className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="grid gap-8">
          <SectionHeading
            align="left"
            eyebrow="Get on with your work"
            icon={Repeat}
            title="It runs whether or not you're logged in"
            highlight="whether or not you're logged in"
            lede="Ask once and it repeats the job: new customers every Monday, the follow-up on Thursday, the revenue summary before the week starts. When something needs a decision, it messages you."
          />
          <Reveal delay={0.1}>
            <ul className="grid gap-3">
              {WORKFLOW_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] text-ink">
                  <CircleCheck aria-hidden className="mt-0.5 size-[18px] shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.1} y={24}>
          <WorkflowPipeline />
        </Reveal>
      </Container>
    </Section>
  );
}
