import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AgentChat } from "./AgentChat";

const CHANNELS = [
  { name: "WhatsApp", body: "Send LINK and your code from the phone you want linked. Scan the QR code to skip typing." },
  { name: "Telegram", body: "Open the bot with the code already attached, then chat like you would with a colleague." },
  { name: "Browser extension", body: "Keep your agent in a side panel and ask about the page you're on." },
];

/** Tapotik's "AI Chat" spotlight: the chat card on the left, heading and a dotted list on the right. */
export function ChannelsSpotlight() {
  return (
    <Section className="overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/3 size-96 rounded-full bg-accent/12 blur-3xl" />
      <Container width="wide" className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal y={28} className="order-last lg:order-first">
          <AgentChat />
        </Reveal>
        <div className="grid gap-8 lg:gap-12">
          <SectionHeading
            align="left"
            eyebrow="Channels"
            icon={MessageCircle}
            title="It only speaks when there's something to say"
            highlight="when there's something to say"
            lede="A few things a morning, not thirty, on WhatsApp or Telegram. Message it back from the road and get the same tools, receipts and approvals. Pairing takes a six-character code."
          />
          <Reveal delay={0.1}>
            <ul className="grid gap-4">
              {CHANNELS.map((channel) => (
                <li key={channel.name} className="flex gap-3.5">
                  <span aria-hidden className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-teal/15">
                    <span className="size-1.5 rounded-full bg-teal" />
                  </span>
                  <div>
                    <h3 className="text-[14.5px] font-semibold text-ink">{channel.name}</h3>
                    <p className="text-[14px] leading-relaxed text-muted">{channel.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
