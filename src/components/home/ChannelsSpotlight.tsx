import { Globe, MessageCircle, Send } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Section } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhoneChat } from "./PhoneChat";

const CHANNELS = [
  { name: "WhatsApp", Icon: MessageCircle, body: "Send LINK and your code from the phone you want linked. Scan the QR code to skip typing." },
  { name: "Telegram", Icon: Send, body: "Open the bot with the code already attached, then chat like you would with a colleague." },
  { name: "Browser extension", Icon: Globe, body: "Keep your agent in a side panel and ask about the page you're on." },
];

/** Tapotik's product spotlight slot: talking to your agent away from the desk. */
export function ChannelsSpotlight() {
  return (
    <Section tone="raised" bordered>
      <Container width="wide" className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal y={28} className="order-last lg:order-first">
          <PhoneChat />
        </Reveal>
        <div className="grid gap-10">
          <SectionHeading
            align="left"
            eyebrow="Channels"
            title="Your agent, in your pocket"
            lede="Pair a channel with a six-character code that works for 15 minutes. Then message your agent from the road and get the same tools, receipts and approvals."
          />
          <ul className="grid gap-5">
            {CHANNELS.map((channel, index) => (
              <Reveal as="li" key={channel.name} delay={0.05 * index} className="flex gap-4">
                <IconTile Icon={channel.Icon} />
                <div className="grid gap-1">
                  <h3 className="text-[16px] font-semibold text-ink">{channel.name}</h3>
                  <p className="text-[14.5px] leading-relaxed text-muted">{channel.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
