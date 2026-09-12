import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Barlow_Condensed, Fraunces, Inter, Nunito, Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import DemoHeader from "@/components/demo/header";
import { DemoCallBar, DemoFooter, DemoRibbon, DemoTopBar } from "@/components/demo/shell";
import { DEMOS, DEMO_BY_SLUG } from "@/data/demos";
import "../../demo.css";

/* This is a ROOT layout — there is no layout above it — which is the whole
   point. A demo site owns its own <html>, its own fonts and its own theme, so
   nothing of ThreSiNi's chrome, palette or type can leak into a page we are
   asking a prospect to imagine as their own. */

const inter = Inter({ subsets: ["latin"], display: "swap", preload: false, variable: "--font-inter" });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["500", "600", "700"], display: "swap", preload: false, variable: "--font-barlow-condensed" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", preload: false, variable: "--font-jakarta" });
const fraunces = Fraunces({ subsets: ["latin"], display: "swap", preload: false, variable: "--font-fraunces" });
const nunito = Nunito({ subsets: ["latin"], display: "swap", preload: false, variable: "--font-nunito" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], display: "swap", preload: false, variable: "--font-source-serif" });

const FONTS = [inter, barlow, jakarta, fraunces, nunito, sourceSerif].map((f) => f.variable).join(" ");

/** Theme key per demo — matches the [data-theme] blocks in demo.css. */
const THEMES: Record<string, string> = {
  "brightwire-electric": "brightwire",
  "coastline-air": "coastline",
  "halden-plumbing": "halden",
  "willow-creek-vet": "willowcreek",
  "marlowe-finch-solicitors": "marlowefinch",
};

const THEME_COLOURS: Record<string, string> = {
  brightwire: "#0F1219",
  coastline: "#FFFFFF",
  halden: "#FBF8F2",
  willowcreek: "#FDFCF8",
  marlowefinch: "#FCFBF9",
};

export function generateStaticParams() {
  return DEMOS.map((demo) => ({ site: demo.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ site: string }> }): Promise<Metadata> {
  const site = DEMO_BY_SLUG[(await params).site];
  if (!site) return {};
  return {
    title: { default: `${site.name} — ${site.tagline}`, template: `%s | ${site.name}` },
    description: site.hero.sub,
    /* A demonstration of a company that does not exist has no business being
       indexed, or being mistaken for a real trading business in a search
       result. Prospects reach these from a link we send them. */
    robots: { index: false, follow: false },
    openGraph: { type: "website", siteName: site.name, title: site.name, description: site.tagline },
  };
}

export default async function DemoLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ site: string }>;
}) {
  const site = DEMO_BY_SLUG[(await params).site];
  if (!site) notFound();

  const theme = THEMES[site.slug] ?? "brightwire";

  return (
    <html lang={site.market === "US" ? "en-US" : site.market === "AU" ? "en-AU" : "en-GB"} data-theme={theme} className={FONTS}>
      <head>
        <meta name="theme-color" content={THEME_COLOURS[theme]} />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <DemoTopBar site={site} />
        <DemoHeader site={site} />
        <main id="main">{children}</main>
        <DemoFooter site={site} />
        <DemoCallBar site={site} />
        <DemoRibbon site={site} />
      </body>
    </html>
  );
}
