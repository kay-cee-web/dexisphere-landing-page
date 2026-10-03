/**
 * PLACEHOLDER — sample case studies. Companies match the placeholder
 * testimonials; figures are invented. Replace with real results before launch.
 */

export type CaseStudy = {
  title: string;
  client: string;
  tags: string[];
  metric: { value: string; label: string; detail: string };
  problem: string;
  approach: string;
  outcome: string;
  /** Card colour, mixed into the surface so it works in both themes. */
  tone: "violet" | "sky" | "teal" | "pink" | "accent";
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "New customers from one sentence",
    client: "Brightlane Studio",
    tags: ["Case study", "New business"],
    metric: { value: "20", label: "practices emailed", detail: "64 found, 44 dropped, from one sentence." },
    problem: "The prospect list that never got past a spreadsheet, and the intro emails that never got written.",
    approach: "'Find dentists in Lagos and email the best twenty.' The agent searched, scored what it found, wrote one email per practice and checked the domain wouldn't land in spam.",
    outcome: "Twenty emails went out from the studio's own address, and every lead filed in a list, ready for the follow-up.",
    tone: "violet",
  },
  {
    title: "A month of posts, actually posted",
    client: "Northpeak",
    tags: ["Case study", "Social media"],
    metric: { value: "1 week", label: "drafted by Monday", detail: "Read, changed and approved over coffee." },
    problem: "They knew they should post consistently. They didn't, because it's three jobs: something to say, something to look at, and remembering to put it out.",
    approach: "The agent writes captions in their voice, shaped for each platform, and queues the whole week for approval every Monday morning.",
    outcome: "Thinking of something to say is no longer the job. Nothing goes out in their name that they haven't seen.",
    tone: "sky",
  },
  {
    title: "Ads that pay for themselves",
    client: "Adeyemi Roofing",
    tags: ["Case study", "Advertising"],
    metric: { value: "₦40k", label: "a week saved", detail: "On a campaign nobody had checked." },
    problem: "The ads had been running all week, across two ads managers, and nobody had checked either of them.",
    approach: "Dexisphere watches spend on every connected ad account, and the payment processor shows what actually came in, without opening a single ads manager.",
    outcome: "Abuja was spending with nothing to show for it. The owner paused it themselves, because changing budgets stays with you.",
    tone: "teal",
  },
  {
    title: "Every promise kept",
    client: "Relay Agency",
    tags: ["Case study", "Meetings"],
    metric: { value: "0", label: "promises dropped", detail: "Your commitments on a call become tasks." },
    problem: "'I'll send the revised quote by Friday.' Said on a call, forgotten by Wednesday, and the quote sat in drafts until it went cold.",
    approach: "The Dexisphere notetaker joins Zoom, Teams and Google Meet calls, writes up what was decided, and turns your own action items into tasks.",
    outcome: "The quote was on Friday's task list before the call had ended. They asked the agent to draft it, said send, and it went from their own email.",
    tone: "pink",
  },
  {
    title: "The money summary nobody writes",
    client: "Fieldnote",
    tags: ["Case study", "Money"],
    metric: { value: "+57%", label: "week on week", detail: "₦486,000 in, against ₦310,000 the week before." },
    problem: "Sales were spread across Stripe, Paystack and Flutterwave, and nobody had time to add them up, let alone spot a failed payment.",
    approach: "Read-only access to every processor. It can see the sales. It can't move a naira. A payment lands or fails, and an alert arrives.",
    outcome: "Every Monday, the revenue summary they'd never sit down and write themselves.",
    tone: "accent",
  },
];
