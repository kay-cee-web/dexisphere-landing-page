/** PLACEHOLDER — team facts, perks and hiring timeline are invented for the launch mock-up; replace before launch. */
import {
  Baby, Coins, Globe, GraduationCap, Hand, HeartPulse, Laptop, Leaf, MessageSquare, Plane, Receipt, Rocket, Search, Users,
  Wrench,
} from "lucide-react";
import type { Feature, Step } from "@/types/marketing";

export const TEAM_FACTS: { value: string; label: string }[] = [
  { value: "14", label: "people" },
  { value: "9", label: "countries" },
  { value: "100%", label: "remote" },
  { value: "2 wks", label: "to an offer" },
];

export const PERKS: Feature[] = [
  { Icon: Coins, title: "Meaningful equity", description: "Everyone owns part of what we're building, with a long exercise window." },
  { Icon: Globe, title: "Remote-first", description: "Work from where you do your best work. Async by default, a few overlap hours." },
  { Icon: HeartPulse, title: "Health cover", description: "Private health insurance for you and your dependants, or a stipend where that fits better." },
  { Icon: GraduationCap, title: "Learning budget", description: "$1,500 a year for courses, books and conferences. No approval form." },
  { Icon: Laptop, title: "Home office stipend", description: "$1,000 to set up a desk you like, plus a new laptop of your choice." },
  { Icon: Plane, title: "Flexible time off", description: "Take the time you need, with a 25-day minimum we actually check." },
  { Icon: Baby, title: "Parental leave", description: "16 weeks fully paid for every new parent, however your family grows." },
  { Icon: Users, title: "Team offsites", description: "Twice a year we meet in person somewhere worth the trip." },
];

export const VALUES: Feature[] = [
  {
    Icon: Receipt,
    title: "Show the receipt",
    description: "Our agents prove what they changed, and so do we. Decisions, numbers and mistakes get written down where everyone can see them.",
  },
  {
    Icon: Hand,
    title: "Humans hold the send button",
    description: "Autonomy is earned, not assumed. We build for the moment a person says yes, and we make saying no just as easy.",
  },
  {
    Icon: Wrench,
    title: "Real tools, not advice",
    description: "We ship things that do the work, not things that describe the work. If it doesn't change a record, it isn't done.",
  },
  {
    Icon: Leaf,
    title: "Calm software",
    description: "No dark patterns, no fake urgency, no midnight pages for things that can wait. Calm products come from calm teams.",
  },
];

export const HIRING_STEPS: Step[] = [
  { Icon: MessageSquare, title: "Intro call", description: "30 minutes with the hiring manager about the role, your work and what you want next." },
  { Icon: Search, title: "Work session", description: "A paid, time-boxed exercise close to the real job, reviewed together. No trick questions." },
  { Icon: Users, title: "Meet the team", description: "Two short conversations with future teammates. Ask us anything, including the hard stuff." },
  { Icon: Rocket, title: "Offer", description: "A written offer with salary and equity explained. The whole process takes about two weeks." },
];
