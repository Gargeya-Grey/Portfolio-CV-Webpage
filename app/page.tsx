import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Ventures from "@/components/Ventures";
import Education from "@/components/Education";
import Lab from "@/components/Lab";
import Footer from "@/components/Footer";
import ProfileSummary from "@/components/ProfileSummary";
import { profileStructuredData } from "@/lib/seo";

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <script
        id="profile-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ProfileSummary />
        <Ventures />
        <Education />
        <Lab />
      </main>
      <Footer />
    </>
  );
}
