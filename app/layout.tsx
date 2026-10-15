import type { Metadata, Viewport } from "next";
import { Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import LazyMotionProvider from "@/components/LazyMotionProvider";
import { SITE } from "@/lib/site";
import { SEO } from "@/lib/seo";

// The personal website's type family (Edudojo design family). Instrument Sans carries headings,
// text and UI. IBM Plex Mono marks real data only: dates.
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
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
const themeInitScript = `try{if(localStorage.theme==='dark'||(!('theme' in localStorage)&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(_){}`;

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
    { media: "(prefers-color-scheme: light)", color: "#f7f6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#151413" },
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
        className={`${instrumentSans.variable} ${plexMono.variable} antialiased`}
      >
        <a className="skip-link" href="#main-content">Skip to content</a>
        <LazyMotionProvider>
          <ScrollProgress />
          <Navigation />
          {children}
        </LazyMotionProvider>
      </body>
    </html>
  );
}
