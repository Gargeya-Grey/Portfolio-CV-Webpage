"use client";

import { useEffect, useRef } from "react";

/**
 * Top reading-progress bar.
 * Uses compositor-only CSS scroll-driven animation where supported (zero JS during scroll)
 * and falls back to a passive rAF-coalesced transform update elsewhere.
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    if (typeof CSS !== "undefined" && CSS.supports("animation-timeline: scroll()")) {
      return;
    }

    let rafId = 0;
    const update = () => {
      rafId = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      el.style.transform = `scaleX(${progress.toFixed(4)})`;
    };

    const schedule = () => {
      if (!rafId) rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="scroll-progress fixed top-0 left-0 right-0 h-0.5 bg-[var(--leaf)] origin-left z-[100]"
    />
  );
}
