import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import Masthead from "@/components/masthead";
import Footer from "@/components/footer";
import ScrollReveal from "@/components/scroll-reveal";
import MarkDefs from "@/components/mark-defs";
import { SITE } from "@/data/site";
import "./globals.css";

/* Archivo is variable on both wght (300–700) and wdth (62–125). The width axis
   is the type system's whole idea: expanded 125% display against condensed 85%
   labels. Loading the wdth axis is what makes font-stretch real here. */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.company} — Websites, mobile apps and SaaS products`,
    template: `%s — ${SITE.wordmark}`,
  },
  description:
    "We build websites, mobile applications and SaaS products for businesses in the USA, UK and Australia. Every project quoted against a written scope.",
  openGraph: {
    type: "website",
    siteName: SITE.company,
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#1B2149",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <MarkDefs />
        <Masthead />
        <main id="main">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
