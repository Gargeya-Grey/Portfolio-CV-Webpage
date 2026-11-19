"use client";

import { useEffect, useRef } from "react";

const OUTER_TICKS = Array.from({ length: 72 }, (_, i) => {
  const angle = (i * 5 * Math.PI) / 180;
  const isMajor = i % 6 === 0;
  const rOuter = 548;
  const rInner = isMajor ? 532 : 541;
  return {
    key: i,
    isMajor,
    x1: +(600 + rInner * Math.cos(angle)).toFixed(2),
    y1: +(600 + rInner * Math.sin(angle)).toFixed(2),
    x2: +(600 + rOuter * Math.cos(angle)).toFixed(2),
    y2: +(600 + rOuter * Math.sin(angle)).toFixed(2),
  };
});

/**
 * Interactive architectural stage backdrop for the Hero section.
 * Updates CSS custom properties (--mx, --my) on pointer move with rAF damping,
 * skips pointer tracking on touch devices, and pauses orbital animations when off-screen.
 */
export default function HeroStage() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    // Pause continuous orbital rotations whenever the hero scrolls out of view.
    const visibilityObserver =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              const visible = entries[0]?.isIntersecting ?? true;
              el.dataset.paused = visible ? "false" : "true";
            },
            { threshold: 0.01 }
          )
        : null;
    visibilityObserver?.observe(el);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduceMotion || !hasFinePointer) {
      return () => visibilityObserver?.disconnect();
    }

    let targetX = 50;
    let targetY = 34;
    let currentX = 50;
    let currentY = 34;
    let rafId = 0;

    const step = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      el.style.setProperty("--mx", `${currentX.toFixed(2)}%`);
      el.style.setProperty("--my", `${currentY.toFixed(2)}%`);

      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        rafId = window.requestAnimationFrame(step);
      } else {
        rafId = 0;
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" || el.dataset.paused === "true") return;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      targetX = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
      targetY = Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100));
      if (!rafId) {
        rafId = window.requestAnimationFrame(step);
      }
    };

    const onPointerLeave = () => {
      targetX = 50;
      targetY = 34;
      if (!rafId) {
        rafId = window.requestAnimationFrame(step);
      }
    };

    const host = el.parentElement ?? el;
    host.addEventListener("pointermove", onPointerMove, { passive: true });
    host.addEventListener("pointerleave", onPointerLeave, { passive: true });

    return () => {
      visibilityObserver?.disconnect();
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={stageRef} className="hero-stage" aria-hidden="true">
      {/* Overhead theatrical Fresnel beam */}
      <div className="hero-stage-beam" />
      {/* Damped pointer-following ambient spotlight */}
      <div className="hero-stage-spotlight" />
      {/* Precision radial dot matrix (ambient + brighter spotlight-revealed layer) */}
      <div className="hero-stage-dots" />
      <div className="hero-stage-dots-lit" />

      {/* Outer clockwise precision dial with 5-degree Vernier ticks */}
      <svg
        className="hero-stage-orbit hero-stage-orbit-outer"
        viewBox="0 0 1200 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="600" cy="600" r="548" stroke="currentColor" strokeOpacity="0.065" strokeWidth="0.75" />
        <circle
          cx="600"
          cy="600"
          r="492"
          stroke="currentColor"
          strokeOpacity="0.09"
          strokeWidth="0.75"
          strokeDasharray="180 65 40 65"
        />
        {OUTER_TICKS.map((tick) => (
          <line
            key={tick.key}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            stroke="currentColor"
            strokeOpacity={tick.isMajor ? 0.16 : 0.07}
            strokeWidth={tick.isMajor ? 1 : 0.75}
          />
        ))}
        {/* Cardinal amber calibration points */}
        <circle cx="600" cy="52" r="2.5" fill="var(--leaf)" fillOpacity="0.75" />
        <circle cx="600" cy="1148" r="2" fill="currentColor" fillOpacity="0.22" />
      </svg>

      {/* Inner counter-rotating astrolabe arcs */}
      <svg
        className="hero-stage-orbit hero-stage-orbit-inner"
        viewBox="0 0 1200 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="600" cy="600" r="372" stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.75" />
        <circle
          cx="600"
          cy="600"
          r="338"
          stroke="currentColor"
          strokeOpacity="0.11"
          strokeWidth="0.75"
          strokeDasharray="2 12"
        />
        <circle cx="972" cy="600" r="2.5" fill="var(--leaf)" fillOpacity="0.65" />
        <circle cx="228" cy="600" r="2" fill="currentColor" fillOpacity="0.24" />
      </svg>

      {/* Subtle bottom horizon hairline */}
      <div className="hero-stage-horizon" />
      {/* Tactile film grain */}
      <div className="hero-grain" />
    </div>
  );
}
