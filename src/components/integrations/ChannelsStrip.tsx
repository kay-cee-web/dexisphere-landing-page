import { Globe, MessageCircle, Send, Timer } from "lucide-react";
import { CodeBlock } from "@/components/content/CodeBlock";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Section } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { Pill } from "@/components/ui/Pill";
import { CHANNEL_STEPS } from "@/data/integrations-page";

const CHANNELS = [
  { label: "WhatsApp", Icon: MessageCircle },
  { label: "Telegram", Icon: Send },
  { label: "Extension", Icon: Globe },
];

/** "Talk to your agent anywhere": the pairing-code flow for channels. */
export function ChannelsStrip() {
  return (
    <Section id="channels">
      <Container width="wide">
        <Reveal className="grid gap-10 rounded-[24px] border border-line bg-surface p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-14">
          <div className="grid gap-6">
            <div className="flex flex-wrap gap-2">
              {CHANNELS.map(({ label, Icon }) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full border border-line bg-raised py-1 pl-1 pr-3 text-[13px] text-ink">
                  <IconTile Icon={Icon} size="sm" className="size-6 rounded-full [&_svg]:size-3.5" />
                  {label}
                </span>
              ))}
            </div>
            <div className="grid gap-3">
              <Eyebrow className="text-accent">Channels</Eyebrow>
              <h2 className="text-[28px] font-semibold leading-[1.1] text-ink sm:text-[36px]">Talk to your agent anywhere</h2>
              <p className="max-w-[56ch] text-[15.5px] leading-relaxed text-muted">
                Pair an agent with WhatsApp, Telegram or the browser extension and give it tasks from wherever you are.
                Channels are per agent, and pairing takes a code, not a password.
              </p>
            </div>
            <ol className="grid gap-3">
              {CHANNEL_STEPS.map((step, index) => (
                <li key={step} className="flex gap-3 text-[14.5px] leading-relaxed text-muted">
                  <span className="font-mono text-[12px] leading-[1.9] text-accent">{String(index + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="grid gap-3">
            <CodeBlock title="WhatsApp · send this message" code="LINK 2CPQDL" className="shadow-float [&_pre]:text-[22px] [&_pre]:tracking-[0.12em]" />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[13px] text-muted">Waiting for your message…</span>
              <Pill tone="accent">
                <Timer aria-hidden className="size-3" />
                15:00
              </Pill>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
