import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/SkipLink";
import { site } from "@/content/site";
import { fontVariables } from "@/lib/fonts";
import { INDEXABLE, SITE_URL } from "@/lib/site";
import { RouteRefresh } from "@/motion/RouteRefresh";
import { SmoothScroll } from "@/motion/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: site.title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_IN",
  },
};

export const viewport: Viewport = { themeColor: site.themeColor };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.lang} className={fontVariables} suppressHydrationWarning>
      <body>
        <SkipLink />
        <RouteRefresh />
        <SmoothScroll anchorOffset={88}>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
