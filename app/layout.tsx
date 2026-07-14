import type { Metadata, Viewport } from "next";
import { Raleway, Lato } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import LazyMotionProvider from "@/components/LazyMotionProvider";
import JapaneseGlassBackground from "@/components/JapaneseGlassBackground";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Gargeya Sharma | Founder & AI Architect",
    template: "%s | Gargeya Sharma"
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
  authors: [{ name: "Gargeya Sharma" }],
  creator: "Gargeya Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cv.sgargeya.com",
    title: "Gargeya Sharma | Founder & AI Architect",
    description: "Founder & Lead AI Architect @ Edudojo.ai. Engineering process-based human assessment using Socratic AI, bridging student-centric pedagogy, LLMs, and deep cognitive evaluation.",
    siteName: "Gargeya Sharma Portfolio",
    images: [
      {
        url: "https://cv.sgargeya.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gargeya Sharma | Founder & AI Architect"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Gargeya Sharma | Founder & AI Architect",
    description: "Founder & Lead AI Architect @ Edudojo.ai. Engineering process-based human assessment using Socratic AI, bridging student-centric pedagogy, LLMs, and deep cognitive evaluation.",
    creator: "@GargeyaGrey",
    images: ["https://cv.sgargeya.com/og-image.png"]
  },
  alternates: {
    canonical: "https://cv.sgargeya.com"
  }
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
        className={`${raleway.variable} ${lato.variable} text-zinc-900 antialiased selection:bg-teal-500 selection:text-white tracking-tight leading-relaxed relative min-h-dvh`}
      >
        <LazyMotionProvider>
          <JapaneseGlassBackground />
          <ScrollProgress />
          {children}
          <Navigation />
        </LazyMotionProvider>
      </body>
    </html>
  );
}



