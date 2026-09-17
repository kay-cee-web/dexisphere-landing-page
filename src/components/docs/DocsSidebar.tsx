import type { DocSearchEntry } from "@/data/docs/types";
import { DocsNavList } from "./DocsNavList";
import { DocsSearch } from "./DocsSearch";

/** Desktop sidebar: search (which owns the ⌘K shortcut) above the page list. */
export function DocsSidebar({ entries }: { entries: DocSearchEntry[] }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 grid max-h-[calc(100dvh-7rem)] content-start gap-6 overflow-y-auto pb-8 pr-1">
        <DocsSearch entries={entries} hotkey />
        <DocsNavList />
      </div>
    </aside>
  );
}
