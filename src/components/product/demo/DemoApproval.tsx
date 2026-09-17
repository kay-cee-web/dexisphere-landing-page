import { Check, PenLine, X } from "lucide-react";
import { buttonStyles } from "@/components/ui/button-styles";

/** The "Ask before sending" bar, as the app shows it above the composer. Display only. */
export function DemoApproval({ agent }: { agent: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-[12px] border border-warn/30 bg-warn-soft/50 px-3 py-2">
      <p className="min-w-0 flex-1 basis-40 text-[12.5px] text-muted">{agent} is waiting for your go-ahead.</p>
      <span className={buttonStyles({ variant: "ghost", size: "sm", className: "h-7 px-2 text-[12px]" })}>
        <PenLine aria-hidden /> Ask for changes
      </span>
      <span className={buttonStyles({ variant: "secondary", size: "sm", className: "h-7 px-2 text-[12px]" })}>
        <X aria-hidden /> Don&apos;t send
      </span>
      <span className={buttonStyles({ size: "sm", className: "h-7 px-2.5 text-[12px] shadow-none" })}>
        <Check aria-hidden /> Send
      </span>
    </div>
  );
}
