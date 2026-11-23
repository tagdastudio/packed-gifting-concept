import { Host_Grotesk, Kalam, Petrona } from "next/font/google";

// Three voices, each with a job: the printed voice (Petrona), the shop's speaking voice (Host Grotesk),
// and the hand that writes the note (Kalam). A client can replace the families but not the three jobs.
const display = Petrona({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--ff-display",
  display: "swap",
});

const body = Host_Grotesk({
  subsets: ["latin"],
  variable: "--ff-body",
  display: "swap",
});

const hand = Kalam({
  subsets: ["latin"],
  weight: "400",
  variable: "--ff-hand",
  display: "swap",
});

export const fontVariables = [display.variable, body.variable, hand.variable].join(" ");
