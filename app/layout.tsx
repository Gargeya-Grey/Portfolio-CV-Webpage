import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import { SITE } from "@/lib/site";
import { SEO } from "@/lib/seo";

// Editorial typography: Instrument Sans for precision UI & body, Instrument Serif for poetic
// display counterpoints, and IBM Plex Mono for dates, indices, and telemetry.
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// Runs before the first paint, so the page never flashes the wrong theme. Same rule as the website:
// a saved choice wins, otherwise the system setting.
// Storage can be blocked, so it has its own try: the system setting still decides then.
const themeInitScript = `(function(){var s=null;try{s=localStorage.theme}catch(_){}if(s==='dark'||(s!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')})()`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default: SEO.title,
    template: `%s | ${SITE.name}`
  },
  description: SEO.description,
  keywords: [
    "Gargeya Sharma",
    "AI Architect",
    "Edudojo.ai",
    "Machine Learning Engineer",
    "Computer Vision",
    "LLMs",
    "Agentic Systems",
    "Theatre Artist Turned AI Engineer",
    "Portfolio",
    "CV"
  ],
  authors: [{ name: SITE.name, url: SITE.website }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.origin,
    title: SEO.title,
    description: SEO.description,
    siteName: `${SITE.name} | Digital CV`,
    images: [SEO.image],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    creator: "@GargeyaS",
    images: [SEO.image],
  },
  alternates: {
    canonical: SITE.origin
  },
  // app/icon.svg (ink follows the colour scheme) and app/apple-icon.png come from the App Router.
  icons: {
    icon: [
      { url: "/logo/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/logo/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/logo/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${plexMono.variable} antialiased`}
      >
        <a className="skip-link" href="#main-content">Skip to content</a>
        <ScrollProgress />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
