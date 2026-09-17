import { APP_LINKS, CONTACT_EMAILS, REDEEM_URL } from "@/lib/config";
import { ROUTES } from "@/data/navigation";
import type { DocPage } from "../types";

export const ACCOUNT: DocPage = {
  slug: "account",
  title: "Account",
  description: "Sign up, verify your email, sign in, reset a forgotten password, redeem a licence code and sign out.",
  group: "Getting started",
  blocks: [
    {
      type: "p",
      text: "Your Dexisphere account holds your agents, your workspace connections and your plan. Every sign-in flow lives in the app, not on this website.",
    },
    { type: "h2", text: "Sign up" },
    {
      type: "p",
      text: `Go to [${APP_LINKS.register.replace(/^https?:\/\//, "")}](${APP_LINKS.register}) and fill in the form:`,
    },
    {
      type: "table",
      head: ["Field", "Notes"],
      rows: [
        ["Full name", "At least 2 characters."],
        ["Work email", "Where your verification code is sent. It is also your sign-in."],
        ["Licence code", "Optional. Only if you already bought a plan and were given a code."],
        ["Password and Confirm", "At least 8 characters. Both fields must match."],
        ["Privacy policy", "Tick the box to accept it. You can't create an account without it."],
      ],
    },
    {
      type: "p",
      text: "Press **Create account**. You're signed in straight away and taken to email verification.",
    },
    { type: "h2", text: "Verify your email" },
    {
      type: "p",
      text: "A 6-digit code arrives at the address you signed up with. Enter it on the **Check your inbox** screen and press **Verify email** (the form also submits by itself when the sixth digit goes in). Until you verify, the app keeps bringing you back to this screen.",
    },
    {
      type: "ul",
      items: [
        "**No email?** Check spam and promotions, then press **Send a new code**. After each send you wait 60 seconds before asking again.",
        "**\"That code is invalid or has expired\"** means you should request a new code and use the newest email only.",
        "**Wrong address?** Press **Sign out** under the form and sign up again with the right one.",
      ],
    },
    { type: "h2", text: "Sign in" },
    {
      type: "p",
      text: `Sign in at [${APP_LINKS.login.replace(/^https?:\/\//, "")}](${APP_LINKS.login}) with your email and password. You land on your agents. If your session ends while you're working, the app sends you to sign in and then back to the page you were on.`,
    },
    {
      type: "callout",
      tone: "info",
      title: "Separate from Macrid",
      text: "Dexisphere runs on Macrid's platform, so a Macrid account and password work here too. The sessions are separate, though: signing in to one doesn't sign you in to the other.",
    },
    { type: "h2", text: "Forgot your password" },
    {
      type: "ol",
      items: [
        `On the sign-in page, press **Forgot password?** (or go straight to [the reset page](${APP_LINKS.forgotPassword})).`,
        "Enter your account email and press **Send code**.",
        "Enter the 6-digit **Reset code** from the email. **Send a new code** unlocks after 60 seconds.",
        "Choose a **New password** of at least 8 characters, confirm it, and save.",
        "Sign in with the new password.",
      ],
    },
    { type: "h2", text: "Plans and licence codes" },
    {
      type: "p",
      text: `Every account starts on **Free Forever**. Paid plans are lifetime licences: you pay once at checkout, nothing renews, and there are no monthly or yearly charges. Compare them on the [pricing page](${ROUTES.pricing}).`,
    },
    {
      type: "ol",
      items: [
        "Buy a plan from the pricing page. You receive a licence code once checkout completes.",
        `Open [the plans page](${REDEEM_URL}) in the Macrid app, signed in with the same email.`,
        "Paste the licence code and redeem it. Your new allowances apply to your whole workspace, including every agent.",
      ],
    },
    {
      type: "p",
      text: "If you already have a code when you sign up, put it in the **Licence code** field instead. The **Upgrade plan** link that appears when you run out of tokens, and the token balance in an agent's header, both open the same plans page.",
    },
    { type: "h2", text: "Sign out" },
    {
      type: "p",
      text: "Open the account menu at the bottom of the app sidebar and choose **Sign out**. This ends the session in that browser and clears the agents the app had loaded, so the next person to use the device sees nothing of yours.",
    },
    {
      type: "callout",
      tone: "good",
      title: "Need a hand?",
      text: `Email [${CONTACT_EMAILS.support}](mailto:${CONTACT_EMAILS.support}) from the address on your account and we'll help you get back in.`,
    },
  ],
};
