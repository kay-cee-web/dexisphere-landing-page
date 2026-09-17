import { ArrowUpRight, Clock } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { IconTile } from "@/components/ui/IconTile";
import { CONTACT_CHANNELS } from "@/data/contact";

/** Sales, Support and Press cards, each a mailto with a reply-time promise. */
export function ContactChannels() {
  return (
    <Stagger as="ul" className="grid gap-5 md:grid-cols-3">
      {CONTACT_CHANNELS.map((channel) => (
        <StaggerItem as="li" key={channel.title} className="h-full">
          <a
            href={`mailto:${channel.email}`}
            className="group grid h-full content-start gap-4 rounded-[18px] border border-line bg-surface p-6 text-left transition-[border-color,box-shadow] hover:border-accent/40 hover:shadow-float"
          >
            <div className="flex items-start justify-between gap-3">
              <IconTile Icon={channel.Icon} />
              <ArrowUpRight
                aria-hidden
                className="size-4 text-faint transition-colors group-hover:text-accent"
              />
            </div>
            <div className="grid gap-1.5">
              <h2 className="text-[19px] font-semibold text-ink">{channel.title}</h2>
              <p className="text-[14.5px] leading-relaxed text-muted">{channel.description}</p>
            </div>
            <div className="grid gap-2 border-t border-dashed border-line pt-4">
              <span className="break-all font-mono text-[13px] text-accent">{channel.email}</span>
              <span className="inline-flex items-center gap-1.5 text-[12.5px] text-faint">
                <Clock aria-hidden className="size-3.5" />
                {channel.replyTime}
              </span>
            </div>
          </a>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
