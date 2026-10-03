import { ChartColumn, Megaphone, UserSearch, Video, Wallet, type LucideIcon } from "lucide-react";
import { ROUTES } from "@/data/navigation";

export type Service = { title: string; description: string; href: string; Icon: LucideIcon };

/** The "What it does" carousel on the home page: the five jobs the agent takes off your plate. */
export const SERVICES: Service[] = [
  {
    title: "Find customers and write to them",
    description: "It searches, scores what it finds and writes the emails. It checks your sending domain won't land you in spam, then sends by email, SMS or WhatsApp from your own addresses.",
    href: ROUTES.product("new-business"),
    Icon: UserSearch,
  },
  {
    title: "Keep your social accounts going",
    description: "Monday morning the week is drafted and waiting: captions in your voice, shaped for each platform. Change what you want and approve. Nothing goes out you haven't seen.",
    href: ROUTES.product("social-media"),
    Icon: Megaphone,
  },
  {
    title: "Keep an eye on your ads",
    description: "Connect your Meta, TikTok and LinkedIn ad accounts and it watches the spend without you opening a single ads manager. It reports. It doesn't spend.",
    href: ROUTES.product("advertising"),
    Icon: ChartColumn,
  },
  {
    title: "Remember what you promised",
    description: "It joins your Zoom, Teams and Google Meet calls, writes up what was decided, and turns the things you said you'd do into tasks.",
    href: ROUTES.product("meetings"),
    Icon: Video,
  },
  {
    title: "Watch what comes in",
    description: "Read-only access to your payment processors. A payment lands, you know. A payment fails, you know. It can see your sales. It can't move money.",
    href: ROUTES.product("money"),
    Icon: Wallet,
  },
];
