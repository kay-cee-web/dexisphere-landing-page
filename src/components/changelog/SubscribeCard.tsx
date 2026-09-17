import { Mail } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { IconTile } from "@/components/ui/IconTile";
import { SubscribeForm } from "./SubscribeForm";

/** The mid-page "get updates" card between releases. */
export function SubscribeCard() {
  return (
    <Reveal className="relative isolate grid gap-6 overflow-hidden rounded-[20px] border border-line bg-surface p-6 sm:p-8 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-10">
      <div aria-hidden className="bg-glow absolute inset-0 -z-10 opacity-80" />
      <div className="flex items-start gap-4">
        <IconTile Icon={Mail} />
        <div className="grid gap-1.5">
          <h2 className="text-[20px] font-semibold text-ink">Get release notes by email</h2>
          <p className="text-[14px] leading-relaxed text-muted">
            One short email when something ships. No marketing, unsubscribe anytime.
          </p>
        </div>
      </div>
      <SubscribeForm />
    </Reveal>
  );
}
