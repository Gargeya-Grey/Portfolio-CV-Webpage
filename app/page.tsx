import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const Ventures = dynamic(() => import("@/components/Ventures"), {
  loading: () => <div className="min-h-screen" />,
  ssr: true
});

const Lab = dynamic(() => import("@/components/Lab"), {
  loading: () => <div className="min-h-screen" />,
  ssr: true
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true
});

export default function Home() {
  return (
    <main>
      <Hero />
      <Ventures />
      <Lab />
      <Footer />
    </main>
  );
}
