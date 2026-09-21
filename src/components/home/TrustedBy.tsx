import { Container } from "@/components/ui/Container";

/**
 * PLACEHOLDER — sample company names. Replace with real customer logos
 * (with permission) before launch.
 */
const COMPANIES = [
  { name: "Northpeak", color: "bg-accent" },
  { name: "Relay Agency", color: "bg-violet" },
  { name: "Fieldnote", color: "bg-teal" },
  { name: "Brightlane Studio", color: "bg-pink" },
  { name: "Adeyemi Roofing", color: "bg-warn" },
  { name: "Mbeki Advisory", color: "bg-sky" },
  { name: "Greenline Digital", color: "bg-good" },
  { name: "Summit Partners", color: "bg-accent" },
  { name: "ClearPath HR", color: "bg-violet" },
  { name: "Apex Dental Group", color: "bg-teal" },
];

function LogoChip({ name, color }: { name: string; color: string }) {
  return (
    <li className="flex shrink-0 items-center gap-2.5 px-5">
      <span
        aria-hidden
        className={`grid size-7 place-items-center rounded-[7px] text-[13px] font-bold text-white ${color}`}
      >
        {name[0]}
      </span>
      <span className="whitespace-nowrap text-[14px] font-medium text-muted">{name}</span>
    </li>
  );
}

/** Scrolling company logos, shown right after the hero. */
export function TrustedBy() {
  return (
    <section className="border-y border-line bg-raised py-10">
      <Container width="wide">
        <p className="mb-6 text-center text-[13px] font-medium uppercase tracking-[0.12em] text-faint">
          Trusted by growing teams at
        </p>
      </Container>
      <div
        aria-hidden
        className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
      >
        <ul className="flex w-max animate-marquee gap-0 group-hover:[animation-play-state:paused]">
          {[...COMPANIES, ...COMPANIES].map((company, index) => (
            <LogoChip key={`${company.name}-${index}`} {...company} />
          ))}
        </ul>
      </div>
      <p className="sr-only">Trusted by: {COMPANIES.map((c) => c.name).join(", ")}.</p>
    </section>
  );
}
