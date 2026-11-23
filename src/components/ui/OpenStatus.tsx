"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function formatMinutes(minutes: number) {
  const hour24 = Math.floor(minutes / 60);
  const minute = minutes % 60;
  const suffix = hour24 >= 12 ? "pm" : "am";
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${hour12}:${String(minute).padStart(2, "0")} ${suffix}`;
}

function readMysuruTime() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: site.timezone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  const dayIndex = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day: dayIndex === -1 ? 0 : dayIndex, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

function statusFor(day: number, minutes: number) {
  const today = site.openHours.find((entry) => entry.day === day);
  if (today && minutes >= today.open && minutes < today.close) {
    return { open: true, text: `Open now, until ${formatMinutes(today.close)}` };
  }
  if (today && minutes < today.open) {
    return { open: false, text: `Closed. Opens today at ${formatMinutes(today.open)}` };
  }
  for (let step = 1; step <= 7; step += 1) {
    const nextDay = (day + step) % 7;
    const entry = site.openHours.find((item) => item.day === nextDay);
    if (!entry) continue;
    const when = step === 1 ? "tomorrow" : DAY_NAMES[nextDay];
    return { open: false, text: `Closed. Opens ${when} at ${formatMinutes(entry.open)}` };
  }
  return { open: false, text: "Closed" };
}

export function OpenStatus({ tone = "ink", className = "" }: { tone?: "ink" | "light"; className?: string }) {
  const [status, setStatus] = useState<{ open: boolean; text: string } | null>(null);

  useEffect(() => {
    const update = () => {
      const { day, minutes } = readMysuruTime();
      setStatus(statusFor(day, minutes));
    };
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span
      className={`inline-flex items-center gap-2 text-[0.8rem] ${tone === "light" ? "text-fg/65" : "text-ink-soft"} ${className}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <span
        aria-hidden="true"
        className={`size-1.5 rounded-full ${status?.open ? "bg-[#6f9b5a]" : status ? "bg-vermilion" : "bg-current opacity-40"}`}
      />
      {status?.text ?? "Checking shop hours"}
    </span>
  );
}
