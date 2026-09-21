import { Reveal } from "@/components/motion/Reveal";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** TODO: Replace with real YouTube video ID. */
const YOUTUBE_VIDEO_ID = "";

export function VideoSection() {
  return (
    <Section>
      <Container width="wide" className="grid gap-12">
        <SectionHeading
          eyebrow="See it in action"
          title="Watch how agents do the work"
          lede="A two-minute walkthrough: from a plain-language task to a finished receipt."
        />
        <Reveal y={24}>
          <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[20px] border border-line bg-ink/5 shadow-lift">
            <div className="relative aspect-video">
              {YOUTUBE_VIDEO_ID ? (
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                  title="Dexisphere demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 size-full"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center text-[14px] text-muted">
                  Video coming soon
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
