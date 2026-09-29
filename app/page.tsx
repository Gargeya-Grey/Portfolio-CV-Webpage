import Hero from "@/components/Hero";
import Ventures from "@/components/Ventures";
import Education from "@/components/Education";
import Lab from "@/components/Lab";
import Footer from "@/components/Footer";
import ProfileSummary from "@/components/ProfileSummary";

export default function Home() {
  return (
    <>
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
