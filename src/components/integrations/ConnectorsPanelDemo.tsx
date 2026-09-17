import { Bot, Plus } from "lucide-react";
import { Card, Eyebrow } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { Pill } from "@/components/ui/Pill";
import { PANEL_AGENTS, PANEL_ROWS, type ConnectorStatus } from "@/data/integrations-page";

function StatusBadge({ status }: { status: ConnectorStatus }) {
  if (status === "ready") {
    return (
      <Pill tone="good" dot>
        Ready
      </Pill>
    );
  }
  if (status === "shared") {
    return (
      <Pill tone="warn" dot>
        Shared
      </Pill>
    );
  }
  return (
    <span className="inline-flex h-7 items-center gap-1 rounded-[8px] border border-line bg-surface px-2.5 text-[12px] font-medium text-ink">
      <Plus aria-hidden className="size-3.5" /> Connect
    </span>
  );
}

/** A static copy of the Plugins → Connectors panel, as a product visual. */
export function ConnectorsPanelDemo() {
  return (
    <Card floating padded={false} className="overflow-hidden" aria-label="Example connectors panel" role="img">
      <div className="flex items-center justify-between gap-3 border-b border-line bg-raised px-4 py-3">
        <Eyebrow>Workspace connectors</Eyebrow>
        <span className="font-mono text-[11.5px] text-faint">2 ready · 2 shared</span>
      </div>
      <ul className="divide-y divide-line">
        {PANEL_ROWS.map((row) => (
          <li key={row.name} className="flex items-center gap-3 px-4 py-3">
            <IconTile Icon={row.Icon} size="sm" tone="neutral" />
            <div className="grid min-w-0 flex-1">
              <span className="truncate text-[14px] font-medium text-ink">{row.name}</span>
              <span className="truncate font-mono text-[11.5px] text-faint">{row.detail}</span>
            </div>
            <StatusBadge status={row.status} />
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap items-center gap-2 border-t border-dashed border-line bg-raised px-4 py-3">
        <span className="text-[12.5px] text-muted">Used by</span>
        {PANEL_AGENTS.map((agent) => (
          <span
            key={agent}
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2 py-1 text-[12px] text-ink"
          >
            <Bot aria-hidden className="size-3.5 text-accent" />
            {agent}
          </span>
        ))}
        <span className="font-mono text-[11.5px] text-faint">+ every new agent</span>
      </div>
    </Card>
  );
}
