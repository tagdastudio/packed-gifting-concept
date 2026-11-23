import { site } from "@/content/site";

/**
 * A prefilled WhatsApp message. On the concept, open WhatsApp's share sheet rather than a dead number; a client sets
 * `site.concept` to false and `site.whatsapp` to the studio number.
 */
export function waLink(message: string) {
  const text = encodeURIComponent(message);
  if (site.concept) return `https://wa.me/?text=${text}`;
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export function mailLink(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function formatRupees(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}
