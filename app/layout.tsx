import type { Metadata } from "next";
import { Raleway, Lato } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
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
        className={`${raleway.variable} ${lato.variable} text-zinc-900 antialiased selection:bg-teal-500 selection:text-white tracking-tight leading-relaxed relative min-h-screen`}
      >
        <JapaneseGlassBackground />
        <ScrollProgress />
        {children}
        <Navigation />
      </body>
    </html>
  );
}
