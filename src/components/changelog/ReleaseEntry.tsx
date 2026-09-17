import { Reveal } from "@/components/motion/Reveal";
import { Pill, type PillTone } from "@/components/ui/Pill";
import { formatReleaseDate, type ChangeTag, type Release } from "@/data/changelog";

const TAG_TONES: Record<ChangeTag, PillTone> = { New: "good", Improved: "accent", Fixed: "warn" };

/** One release: sticky version + date on the left, title and tagged items on the right. */
export function ReleaseEntry({ release }: { release: Release }) {
  const anchor = release.version.replace(/\./g, "-");
  return (
    <Reveal as="article" className="grid gap-4 border-t border-line pt-10 md:grid-cols-[200px_1fr] md:gap-10">
      <div id={anchor} className="md:sticky md:top-24 md:self-start">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 md:grid md:gap-1.5">
          <a href={`#${anchor}`} className="font-mono text-[15px] font-medium text-ink hover:text-accent">
            {release.version}
          </a>
          <time dateTime={release.date} className="font-mono text-[12.5px] text-muted">
            {formatReleaseDate(release.date)}
          </time>
        </div>
      </div>
      <div className="grid gap-5">
        <div className="grid gap-2">
          <h2 className="text-[24px] font-semibold leading-tight text-ink sm:text-[28px]">{release.title}</h2>
          <p className="text-[15.5px] leading-relaxed text-muted">{release.summary}</p>
        </div>
        <ul className="grid gap-3">
          {release.items.map((item) => (
            <li key={item.text} className="grid grid-cols-[76px_1fr] items-start gap-3">
              <Pill tone={TAG_TONES[item.tag]} className="justify-self-start">
                {item.tag}
              </Pill>
              <span className="text-[14.5px] leading-relaxed text-ink">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
