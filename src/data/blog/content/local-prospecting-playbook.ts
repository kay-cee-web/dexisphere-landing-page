/** PLACEHOLDER — sample article body written for the launch mock-up; replace before launch. */
import type { ContentBlock } from "@/types/content";

export const blocks: ContentBlock[] = [
  {
    type: "p",
    text: "Local businesses are some of the best prospects there are: easy to find, easy to research, and often underserved. They're also tedious to work by hand. This playbook is the prompt sequence we use to go from a Google Places search to a booked call, with an agent doing the clicking and you making the calls that matter.",
  },
  { type: "h2", text: "Step 1: Find the right businesses" },
  {
    type: "p",
    text: "Start narrow. A niche and a place beat a vague industry every time. Ask the agent to search, and be explicit about what counts as a good fit.",
  },
  {
    type: "code",
    title: "Prompt 1 · find",
    code: "Find physiotherapy clinics within 10 km of central Bristol.\nKeep only ones with a website and a phone number.\nPut them in a new list called \"Bristol physio – Q4\".",
  },
  {
    type: "p",
    text: "The agent uses `find_prospects` to search, `create_list` and `add_to_list` to file the results. Your receipt under the reply shows the new list and how many leads landed in it.",
  },
  {
    type: "callout",
    tone: "info",
    title: "Google Places key",
    text: "Connecting your own Google Places key is optional. Without one, searches use a shared key that has a daily limit, which is fine for trying this out but not for big runs.",
  },
  { type: "h2", text: "Step 2: Clean and score the list" },
  {
    type: "p",
    text: "Raw search results always contain duplicates, chains and businesses you already know. Clean before you contact anyone.",
  },
  {
    type: "code",
    title: "Prompt 2 · clean",
    code: "In \"Bristol physio – Q4\", merge duplicates, remove anyone already\nin my other lists, then score the leads and tell me the top 20 and why.",
  },
  {
    type: "p",
    text: "This leans on `find_duplicates`, `merge_duplicates` and `score_leads`. Read the reasons the agent gives for its top picks. If they're wrong, tell it what matters to you and ask it to score again.",
  },
  { type: "h2", text: "Step 3: Verify, then draft" },
  {
    type: "p",
    text: "Before a single email is drafted, check the addresses. Bounces hurt your sender reputation for every campaign that follows.",
  },
  {
    type: "code",
    title: "Prompt 3 · verify and draft",
    code: "Verify the emails for the top 20 and drop anything invalid.\nCheck my sending domain. Then draft a 90-word intro email\nusing {fullname} and {company}. Show me the draft and recipients.",
  },
  {
    type: "p",
    text: "With Ask before sending on, the agent stops here and shows you the draft, the recipients and the results of `verify_emails`, `check_sending_domain` and `check_email_copy`. Edit until it sounds like you, then say send.",
  },
  {
    type: "quote",
    text: "The agent does the ten tedious steps. You do the one step that needs taste: deciding what's worth sending.",
    cite: "Sam Whitfield, Growth Lead",
  },
  { type: "h2", text: "Step 4: Follow up and book" },
  {
    type: "p",
    text: "Replies are where deals start. Ask the agent to watch for them and turn interest into calendar time.",
  },
  {
    type: "code",
    title: "Prompt 4 · follow up",
    code: "Every weekday at 9am, read my inbox for replies to this campaign.\nFor anyone interested, create a deal in Qualification, and book\na 20-minute call in my first free slot. Text me a summary.",
  },
  {
    type: "p",
    text: "The agent sets this up with `schedule_automation`, then uses `read_inbox`, `create_deal`, `book_appointment` and `send_sms` each morning. You can ask it to list or cancel the automation at any time.",
  },
  { type: "h2", text: "Step 5: Measure and repeat" },
  {
    type: "p",
    text: "After a week, ask for the numbers: \"How did the Bristol physio campaign perform, and what's in my pipeline from it?\" The agent pulls `campaign_performance` and `pipeline_summary`. Keep what worked, change one thing, and run the next town.",
  },
  {
    type: "p",
    text: "Want a head start? The prospecting and outreach categories in the idea library have ready-made versions of each step.",
  },
];
