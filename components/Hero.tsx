import { ArrowDown, ArrowUpRight } from "lucide-react";
import HeroStage from "@/components/HeroStage";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section id="bio" className="cv-hero relative overflow-hidden">
      <HeroStage />

      <div className="hero-content relative z-10">
        <p className="hero-eyebrow hero-enter">
          <span className="hero-eyebrow-rule" aria-hidden="true" />
          <span>AI Engineer</span>
          <span className="hero-eyebrow-sep" aria-hidden="true">·</span>
          <span>Founder</span>
          <span className="hero-eyebrow-sep" aria-hidden="true">·</span>
          <span>Humanist</span>
          <span className="hero-eyebrow-rule" aria-hidden="true" />
        </p>

        <h1 className="hero-enter hero-enter-1">
          Gargeya Sharma<span className="hero-period">.</span>
        </h1>

        <p className="hero-signature hero-enter hero-enter-1">
          Architecting intelligence. <em>Curating art.</em>
        </p>

        <p className="hero-role hero-enter hero-enter-2">
          <span className="status-dot" aria-hidden="true" />
          Founder &amp; Lead AI Architect at{" "}
          <a href={SITE.edudojo} target="_blank" rel="noopener noreferrer">
            Edudojo.ai <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </p>

        <p className="hero-description hero-enter hero-enter-2">
          I build AI systems for learning, assessment, and automation, combining research with product engineering. I started in professional theatre before moving into AI, which is why I care so much about how a system speaks, listens and teaches.
        </p>

        <div className="hero-actions hero-enter hero-enter-3 no-print">
          <a className="button button-primary" href="#ventures">
            Explore my experience <ArrowDown size={15} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#contact">
            Get in touch <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>

      <a href="#ventures" className="hero-scroll no-print">
        <span className="hero-scroll-label">The work, so far</span>
        <span className="hero-scroll-line" aria-hidden="true" />
        <ArrowDown size={13} aria-hidden="true" />
      </a>
    </section>
  );
}
