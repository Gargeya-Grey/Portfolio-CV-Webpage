import type { Metadata, Viewport } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import LazyMotionProvider from "@/components/LazyMotionProvider";
import { logo } from "@/lib/logo";
import { SITE } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const editorial = Instrument_Serif({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default: `${SITE.name} | Founder & AI Architect`,
    template: `%s | ${SITE.name}`
  },
  description: "Founder & Lead AI Architect @ Edudojo.ai. Engineering process-based human assessment using Socratic AI, bridging student-centric pedagogy, LLMs, and deep cognitive evaluation.",
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
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.origin,
    title: `${SITE.name} | Founder & AI Architect`,
    description: "Founder & Lead AI Architect @ Edudojo.ai. Engineering process-based human assessment using Socratic AI, bridging student-centric pedagogy, LLMs, and deep cognitive evaluation.",
    siteName: `${SITE.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE.name} | Founder & AI Architect`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Founder & AI Architect`,
    description: "Founder & Lead AI Architect @ Edudojo.ai. Engineering process-based human assessment using Socratic AI, bridging student-centric pedagogy, LLMs, and deep cognitive evaluation.",
    creator: "@GargeyaS",
    images: ["/og-image.png"]
  },
  alternates: {
    canonical: SITE.origin
  },
  icons: {
    // Light/dark favicons follow the user's OS color scheme.
    // app/icon.png + app/apple-icon.png also serve as defaults via the App Router.
    icon: [
      {
        url: logo.light.svg,
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: logo.dark.svg,
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
      { url: "/logo/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/logo/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/logo/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#e9fcfc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${editorial.variable} antialiased`}
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



