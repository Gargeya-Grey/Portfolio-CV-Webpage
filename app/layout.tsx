import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import JapaneseGlassBackground from "@/components/JapaneseGlassBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Gargeya Sharma",
  description: "Personal portfolio of Gargeya Sharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} text-zinc-900 antialiased selection:bg-teal-500 selection:text-white tracking-tight leading-relaxed relative min-h-screen`}
      >
        <JapaneseGlassBackground />
        <ScrollProgress />
        {children}
        <Navigation />
      </body>
    </html>
  );
}
