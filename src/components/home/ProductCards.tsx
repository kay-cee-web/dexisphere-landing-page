import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Section } from "@/components/ui/Container";
import { HairlineGrid } from "@/components/ui/HairlineGrid";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ROUTES } from "@/data/navigation";
import { productBySlug, type ProductSlug } from "@/data/products/catalog";
import { cn } from "@/lib/cn";

/** Agent output: mono, like everything the agent says. `K` marks the words it emphasises. */
function AgentLog({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <pre
      className={cn(
        "overflow-x-auto whitespace-pre-wrap rounded-[16px] border border-line bg-surface p-5 font-mono text-[12.5px] leading-[1.75] text-muted shadow-float sm:p-6 sm:text-[13.5px]",
        className,
      )}
    >
      {children}
    </pre>
  );
}

function K({ children }: { children: ReactNode }) {
  return <span className="font-medium text-ink">{children}</span>;
}

const SOCIAL_STEPS = [
  {
    title: "It writes the posts",
    body: "Captions in your voice, sized and shaped for each platform. A LinkedIn post doesn't read like an Instagram caption.",
  },
  {
    title: "It briefs the images",
    body: "Each post comes with a description of the picture it needs, so whoever makes it knows what to make.",
  },
  {
    title: "You approve",
    body: "Monday morning the week is drafted and waiting. Nothing goes out in your name that you haven't seen.",
  },
  {
    title: "You publish",
    body: "Approved posts are ready to go. It can post straight to a Telegram channel or Slack you run.",
  },
];

const PLATFORMS = ["Facebook", "Instagram", "LinkedIn", "X", "YouTube", "TikTok"];

const LEDGER = [
  { where: "Free website audit — lead ad", spend: "$180 spent", result: "412 clicks · $0.44 each", won: true },
  { where: "Brand video — broad audience", spend: "$400 spent", result: "96 clicks · $4.17 each", won: false },
  { where: "Retargeting — pricing page", spend: "$95 spent", result: "230 clicks · $0.41 each", won: true },
];

type Job = {
  slug: ProductSlug;
  title: string;
  paragraphs: ReactNode[];
  caption?: string;
  figure: ReactNode;
};

const JOBS: Job[] = [
  {
    slug: "new-business",
    title: "Find customers and write to them, from one sentence",
    paragraphs: [
      "It searches. Reads their websites. Scores them. Writes the emails. Checks your sending domain won't put you in spam — and holds the send if it would.",
      "Email, SMS or WhatsApp, from your own numbers and your own addresses. Nothing sends until you say so.",
    ],
    caption:
      "Already have a list in Mailchimp or Brevo? It pulls them in, pushes new leads back out, and never mails anyone who unsubscribed.",
    figure: (
      <AgentLog>
        <K>you</K> find clinics with no online booking and email the best twenty{"\n\n"}
        <K>→</K> searched · 64 clinics found{"\n"}
        <K>→</K> read 64 sites, scored them on fit{"\n"}
        <K>→</K> kept 20, dropped 44 (already book online, closed, duplicate){"\n"}
        <K>→</K> wrote 20 emails, one per clinic{"\n"}
        <K>→</K> checked your domain — SPF, DKIM, DMARC pass{"\n"}
        <K>→</K> ready to send from hello@yourstudio.com{"\n\n"}
        <K>done.</K> Say send when you&apos;re happy.
      </AgentLog>
    ),
  },
  {
    slug: "social-media",
    title: "Your social posts, written for the week",
    paragraphs: [
      "Posting consistently is three jobs — thinking of something to say, making something to look at, and remembering to put it out. Almost nobody does all three.",
      "Dexisphere takes the hardest one. Ask it for a month of content and it plans the month. Ask for one post about what just happened, and it writes that instead.",
    ],
    figure: (
      <div className="grid gap-4">
        <HairlineGrid itemCount={SOCIAL_STEPS.length} columns={2} className="shadow-float">
          {SOCIAL_STEPS.map((step, i) => (
            <div key={step.title} className="grid content-start gap-2 bg-surface p-5">
              <span className="grid size-6 place-items-center rounded-full bg-accent-soft text-[12px] font-semibold text-accent">
                {i + 1}
              </span>
              <h4 className="text-[15.5px] font-semibold text-ink">{step.title}</h4>
              <p className="text-[13.5px] leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
        </HairlineGrid>
        <ul className="flex flex-wrap gap-2">
          {PLATFORMS.map((platform) => (
            <li key={platform} className="rounded-full border border-line bg-surface px-3.5 py-1 text-[13px] text-muted">
              {platform}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    slug: "advertising",
    title: "Know what your ads cost, and what came in",
    paragraphs: [
      "Connect your Meta, TikTok and LinkedIn ad accounts and it watches them — spend, reach, clicks, cost per result — without you opening a single ads manager.",
      "Your ads manager has never seen your sales. Dexisphere reads your payment processors too, so what the ads cost and what actually came in sit side by side.",
    ],
    caption: "It reports. It doesn't spend — changing budgets stays with you.",
    figure: (
      <div className="rounded-[16px] bg-night p-5 font-mono text-[12.5px] shadow-float sm:p-7 sm:text-[14px]">
        <p className="mb-3 text-[11px] uppercase tracking-[0.1em] text-[#9499B5]">This week · by campaign</p>
        <ul>
          {LEDGER.map((row) => (
            <li
              key={row.where}
              className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-white/10 py-3 last:border-b-0"
            >
              <span className="min-w-[150px] flex-1 text-white">{row.where}</span>
              <span className="text-[#9499B5]">{row.spend}</span>
              <span className={row.won ? "text-[#5FD3AC]" : "text-[#FF8E8E]"}>{row.result}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 flex flex-wrap items-baseline gap-x-4 border-t border-white/20 pt-4">
          <span className="flex-1 text-[#9499B5]">Payments in, same week</span>
          <span className="text-white">$4,860</span>
        </p>
      </div>
    ),
  },
  {
    slug: "meetings",
    title: "It remembers what you promised",
    paragraphs: [
      "You're on a call. Dexisphere is in it, listening. Halfway through, you say you'll send the revised proposal by Friday. You'll forget. It won't.",
      "Afterwards you get what was decided and who owes what. Your own promises become tasks with a date, so Friday doesn't arrive without you noticing.",
    ],
    caption: "Zoom, Teams and Google Meet. Your own commitments become tasks, not everyone else's.",
    figure: (
      <AgentLog>
        <K>Call with Northwind Clinics — Tuesday, 34 min</K>
        {"\n\n"}Decided{"\n"}• New site with online booking, live in six weeks{"\n"}• They keep their current domain{"\n\n"}Action items
        {"\n"}
        <K>• You</K> — send revised proposal · Friday{"\n"}• Priya — send brand assets{"\n"}• Daniel — confirm budget with finance
        {"\n\n"}
        <K>→</K> 1 task created. The other two are theirs.
      </AgentLog>
    ),
  },
  {
    slug: "money",
    title: "It watches what comes in",
    paragraphs: [
      "Connected to your payment processors, read-only. It can see your sales. It can't move a cent.",
      "A payment lands, you know. A payment fails, you know. And once a week, the summary you'd never sit down and write yourself.",
    ],
    figure: (
      <AgentLog>
        <K>$4,860</K> came in this week{"\n"}against $3,100 last week{"\n\n"}Stripe   $3,410{"\n"}PayPal   $1,200{"\n"}
        Paddle     $250{"\n\n"}
        <K>→</K> Three of those were the care plan{"\n"}   you nearly stopped offering.
      </AgentLog>
    ),
  },
];

/** The five jobs, each shown the way the agent reports it, with a link to its own page. */
export function ProductCards() {
  return (
    <Section tone="raised" bordered id="products">
      <Container width="wide" className="grid gap-16 sm:gap-24">
        <SectionHeading
          eyebrow="Five jobs, one agent"
          title="The parts of your business you never get to"
          lede="You have a CRM, an inbox, a calendar, a payment dashboard, a mailing list, three social logins and an ads manager. They all work. And every one of them is waiting for you to open it."
          actions={
            <Link href={ROUTES.features} className="inline-flex items-center gap-1 text-[14.5px] font-medium text-accent hover:underline">
              Explore every feature <ArrowRight aria-hidden className="size-4" />
            </Link>
          }
        />
        {JOBS.map((job, i) => {
          const product = productBySlug(job.slug);
          const flip = i % 2 === 1;
          return (
            <div key={job.slug} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className="grid gap-4">
                <div className="flex items-center gap-3">
                  <IconTile Icon={product.Icon} size="sm" />
                  <span className="text-[14.5px] font-medium text-accent">{product.name}</span>
                </div>
                <h3 className="text-[26px] font-semibold leading-[1.12] text-ink sm:text-[34px]">{job.title}</h3>
                {job.paragraphs.map((paragraph, j) => (
                  <p key={j} className="text-[16px] leading-relaxed text-muted sm:text-[17px]">
                    {paragraph}
                  </p>
                ))}
                {job.caption && <p className="max-w-[36em] text-[14.5px] leading-relaxed text-faint">{job.caption}</p>}
                <Link
                  href={ROUTES.product(job.slug)}
                  className="mt-1 inline-flex w-fit items-center gap-1 text-[14.5px] font-medium text-accent hover:underline"
                >
                  More on {product.name.toLowerCase()} <ArrowRight aria-hidden className="size-4" />
                </Link>
              </Reveal>
              <Reveal y={28} delay={0.1} className={cn("min-w-0", flip && "lg:order-first")}>
                {job.figure}
              </Reveal>
            </div>
          );
        })}
      </Container>
    </Section>
  );
}
