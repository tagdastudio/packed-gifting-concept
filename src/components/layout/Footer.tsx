import Link from "next/link";
import { site } from "@/content/site";
import { waLink } from "@/lib/links";
import { Logo } from "@/components/ui/Logo";

const shopLinks = [
  { label: "All hampers", href: "/hampers" },
  { label: "Build a hamper", href: "/build" },
  { label: "Corporate & bulk", href: "/corporate" },
  { label: "Weddings", href: "/weddings" },
];

const helpLinks = [
  { label: "Visit the shop", href: "/visit" },
  { label: "Delivery", href: "/delivery" },
  { label: "Questions", href: "/faq" },
  { label: "About us", href: "/about" },
];

export function Footer() {
  return (
    <footer className="bg-paper text-ink">
      <div className="gutter page py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo className="text-ink" />
            <p className="mt-7 max-w-[22ch] font-display text-[clamp(2rem,3.2vw,3.2rem)] leading-[1.02] tracking-[-0.025em]">
              Gifts, packed properly.
            </p>
            <p className="mt-5 max-w-sm text-[0.98rem] leading-relaxed text-ink-soft">
              Hampers, pantry goods and small luxuries, packed by hand in {site.city}. For festivals, weddings, teams and the
              everyday thank-you.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={waLink("Hi Packed, I'd like help with a gift.")} target="_blank" rel="noreferrer" className="btn btn-ink">
                WhatsApp us
                <Arrow />
              </a>
              <Link href="/build" className="btn btn-ink-outline">
                Build a hamper
              </Link>
            </div>
          </div>

          <nav aria-label="Shop" className="lg:col-span-2">
            <p className="label text-ink-soft">Shop</p>
            <ul className="mt-4 grid gap-2.5 text-[0.95rem]">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-line">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Help" className="lg:col-span-2">
            <p className="label text-ink-soft">Help</p>
            <ul className="mt-4 grid gap-2.5 text-[0.95rem]">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-line">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <div className="border border-line-ink p-5">
              <p className="label text-ink-soft">Find us</p>
              <address className="mt-3 not-italic text-[0.95rem] leading-relaxed">
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a href={site.mapUrl} target="_blank" rel="noreferrer" className="link-line mt-2 inline-block text-sm">
                {site.directionsLabel}
              </a>

              <div className="my-4 h-px bg-line-ink" />

              <dl className="grid gap-1.5 text-sm">
                {site.hours.map((entry) => (
                  <div key={entry.day} className="flex justify-between gap-3">
                    <dt className="text-ink-soft">{entry.day}</dt>
                    <dd className="text-right tabular-nums">{entry.time}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <a href={`mailto:${site.email}`} className="link-line">
                  Email
                </a>
                <a href={site.phoneHref} className="link-line">
                  Call
                </a>
                <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="link-line">
                  Instagram
                </a>
              </div>

              <p className="hand mt-5 text-[1.05rem] leading-snug text-ink">Write to us. We write back.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line-ink pt-5 text-xs leading-relaxed text-ink-soft lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-xl">
            {site.concept
              ? "Packed is a fictional gifting house. Names, prices, hours and delivery windows are illustrative. A concept by Tagda Studio."
              : `${site.name}, ${site.city}. All details confirmed before an order is made.`}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/legal/privacy" className="link-line">
              Privacy
            </Link>
            <Link href="/legal/terms" className="link-line">
              Terms
            </Link>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Arrow() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M3 13 13 3M5.5 3H13v7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
