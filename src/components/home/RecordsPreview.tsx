import { ChartColumn } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";
import { TiltIn } from "@/components/motion/TiltIn";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RECORD_POINTS } from "@/data/home/records";
import { RecordsWindow } from "./RecordsWindow";

/** Tapotik's "Total visibility" dashboard section, as the app's Records views. */
export function RecordsPreview() {
  return (
    <Section id="records">
      <Container width="wide" className="grid gap-14">
        <SectionHeading
          eyebrow="Records & analytics"
          icon={ChartColumn}
          title="See everything your agents touched"
          highlight="everything your agents touched"
          lede="Lists, leads, deals, tasks, appointments, campaigns and funnels, in one place with the numbers that matter."
        />
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_2fr]">
          <Stagger className="grid gap-6 lg:pt-6">
            {RECORD_POINTS.map((point) => (
              <StaggerItem key={point.title} className="grid gap-1.5 border-l-2 border-line pl-5 transition-colors hover:border-accent">
                <h3 className="text-[17px] font-semibold text-ink">{point.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-muted">{point.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal y={28} className="relative isolate">
            <div aria-hidden className="absolute -inset-x-8 top-8 -z-10 h-full rounded-[40px] bg-linear-to-r from-accent/20 via-violet/15 to-teal/10 blur-3xl" />
            <TiltIn>
              <RecordsWindow />
            </TiltIn>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
