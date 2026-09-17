import { KeyRound, Receipt } from "lucide-react";
import { Eyebrow } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { ACCOUNTS, RECEIPT_LOG, SENDING_COUNTS } from "@/data/features/visuals";
import { SwitchVisual } from "./SwitchVisual";

const panel = "overflow-hidden rounded-[16px] border border-line bg-surface";

/** Receipts log, the sending switch with its 24h counts, and your own accounts and keys. */
export function ControlVisual() {
  return (
    <div className="grid gap-3 rounded-[22px] border border-line bg-raised p-3 shadow-lift sm:grid-cols-2 sm:p-4">
      <div className={`${panel} sm:col-span-2`}>
        <header className="flex items-center gap-2 border-b border-dashed border-line px-4 py-2.5">
          <Receipt aria-hidden className="size-4 text-accent" />
          <Eyebrow>Receipts · today</Eyebrow>
        </header>
        <ul className="divide-y divide-line">
          {RECEIPT_LOG.map((entry) => (
            <li key={entry.time + entry.text} className="flex items-center gap-3 px-4 py-2.5">
              <span className="font-mono text-[11px] text-faint tabular-nums">{entry.time}</span>
              <Pill tone={entry.tone} className="hidden sm:inline-flex">
                {entry.area}
              </Pill>
              <span className="min-w-0 flex-1 truncate text-[13px] text-ink">{entry.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${panel} grid content-start`}>
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="grid min-w-0 flex-1 gap-0.5">
            <p className="text-[13.5px] font-medium text-ink">Sending</p>
            <p className="text-[12px] leading-snug text-muted">Off still researches and drafts</p>
          </div>
          <SwitchVisual on />
        </div>
        <dl className="grid grid-cols-2 divide-x divide-line border-t border-line">
          {[
            { label: "Sent · 24h", value: SENDING_COUNTS.sent, tone: "text-ink" },
            { label: "Blocked · 24h", value: SENDING_COUNTS.blocked, tone: "text-bad" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-2.5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted">{stat.label}</dt>
              <dd className={`mt-1 font-display text-[20px] font-semibold leading-none tabular-nums ${stat.tone}`}>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="flex items-center gap-3 border-t border-line px-4 py-3">
          <div className="grid min-w-0 flex-1 gap-0.5">
            <p className="text-[13.5px] font-medium text-ink">Ask before sending</p>
            <p className="text-[12px] leading-snug text-muted">Draft, recipients and checks first</p>
          </div>
          <SwitchVisual on />
        </div>
      </div>

      <div className={`${panel} grid content-start`}>
        <header className="flex items-center gap-2 border-b border-dashed border-line px-4 py-2.5">
          <KeyRound aria-hidden className="size-4 text-accent" />
          <Eyebrow>Your accounts</Eyebrow>
        </header>
        <ul className="divide-y divide-line">
          {ACCOUNTS.map((account) => (
            <li key={account.label} className="grid gap-0.5 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-medium text-ink">{account.label}</span>
                <Pill tone="good" className="ml-auto">
                  {account.status}
                </Pill>
              </div>
              <span className="truncate font-mono text-[11.5px] text-muted">{account.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
