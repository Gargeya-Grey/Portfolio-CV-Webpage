import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section id="bio" className="cv-hero relative overflow-hidden">
      {/* Preserve the original glass columns, light field, grain, and ambient motion. */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#e9fcfc]" aria-hidden="true">
        <div className="hero-columns absolute inset-0 z-10" />
        <div aria-hidden className="absolute left-1/2 top-1/2 z-[15] h-[68%] w-[min(92vw,56rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/45 blur-3xl" />
        <div aria-hidden className="absolute left-1/2 top-1/2 z-[16] h-[60%] w-[min(88vw,52rem)] -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] backdrop-blur-[3px]" />
        <div className="absolute inset-0 z-20 opacity-[0.07] mix-blend-overlay" aria-hidden>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
            <filter id="mosaicNoise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#mosaicNoise)" />
          </svg>
        </div>
        <div className="absolute inset-0 z-0">
          <div className="ambient-blob ambient-blob-a" />
          <div className="ambient-blob ambient-blob-b" />
        </div>
      </div>

      <div className="hero-content relative z-10">
        <p className="hero-eyebrow hero-enter">AI engineer <span aria-hidden="true">·</span> Founder <span aria-hidden="true">·</span> Theatre artist</p>
        <h1 className="hero-enter hero-enter-1">Gargeya Sharma<span className="hero-period">.</span></h1>
        <p className="hero-signature hero-enter hero-enter-1">Architecting intelligence. <em>Curating art.</em></p>
        <p className="hero-role hero-enter hero-enter-2">
          <span className="status-dot" aria-hidden="true" />
          Founder &amp; Lead AI Architect at <a href={SITE.edudojo} target="_blank" rel="noopener noreferrer">Edudojo.ai <ArrowUpRight size={14} aria-hidden="true" /></a>
        </p>
        <p className="hero-description hero-enter hero-enter-2">I build AI systems for learning, assessment, and automation, combining research with product engineering.</p>
        <div className="hero-actions hero-enter hero-enter-3 no-print">
          <a className="button button-primary" href="#ventures">Explore my experience <ArrowDown size={16} aria-hidden="true" /></a>
          <a className="button button-secondary" href="#contact">Get in touch <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
      <a href="#ventures" className="hero-scroll no-print">The work, so far <ArrowDown size={14} aria-hidden="true" /></a>
    </section>
  );
}
