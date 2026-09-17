import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Container, Section } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TOKEN_POINTS } from "@/data/pricing";
import { ReplyUsageDemo } from "./ReplyUsageDemo";

/** "How tokens work": the points on the left, real reply footers on the right. */
export function TokensExplainer() {
  return (
    <Section id="tokens">
      <Container width="wide" className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="grid gap-10">
          <SectionHeading
            eyebrow="How tokens work"
            title="Every reply shows its cost"
            lede="Your plan includes AI tokens for chatting with agents. You can see exactly where they go, one turn at a time."
            align="left"
          />
          <Stagger as="ul" className="grid gap-6">
            {TOKEN_POINTS.map((point) => (
              <StaggerItem as="li" key={point.title} className="flex gap-4">
                <IconTile Icon={point.Icon} size="sm" />
                <div className="grid gap-1">
                  <h3 className="text-[16px] font-semibold text-ink">{point.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-muted">{point.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <Reveal delay={0.1}>
          <ReplyUsageDemo />
        </Reveal>
      </Container>
    </Section>
  );
}
