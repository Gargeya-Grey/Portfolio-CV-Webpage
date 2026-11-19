"use client";

import { useEffect, useSyncExternalStore, type MouseEvent } from "react";
import { Moon, Sun } from "lucide-react";

// html.dark is the single source of truth (the init script in layout.tsx sets it before paint), so the
// label reads it directly instead of keeping a copy in state.
function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
const isDark = () => document.documentElement.classList.contains("dark");

/** Light/dark switch with a single-phase View Transitions iris reveal from the click point. */
export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribeToTheme, isDark, () => false);

  useEffect(() => {
    // Without a saved choice, follow a change of the system setting at once.
    const system = window.matchMedia("(prefers-color-scheme: dark)");
    const follow = (event: MediaQueryListEvent) => {
      let saved: string | null = null;
      try { saved = localStorage.getItem("theme"); } catch { /* storage blocked: follow the system */ }
      if (saved) return;
      document.documentElement.classList.toggle("dark", event.matches);
    };
    system.addEventListener("change", follow);
    return () => system.removeEventListener("change", follow);
  }, []);

  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    const applyTheme = () => {
      root.classList.toggle("dark", next);
      try { localStorage.theme = next ? "dark" : "light"; } catch { /* storage blocked: the choice lasts for this page only */ }
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || typeof document.startViewTransition !== "function") {
      applyTheme();
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const isPointerClick = event.detail !== 0 && (event.clientX !== 0 || event.clientY !== 0);
    const x = isPointerClick ? event.clientX : rect.left + rect.width / 2;
    const y = isPointerClick ? event.clientY : rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Freeze CSS element transitions before the new-state snapshot so every surface
    // captures in its final theme color with zero post-transition snap.
    const count = Number(root.dataset.themeTransitionCount ?? "0") + 1;
    root.dataset.themeTransitionCount = String(count);
    root.classList.add("theme-transitioning");

    const transition = document.startViewTransition(() => {
      applyTheme();
    });

    transition.ready
      .then(() => {
        root.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 600,
            easing: "cubic-bezier(0.65, 0, 0.35, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })
      .catch(() => { /* ignore aborted transitions on rapid double-clicks */ });

    transition.finished.finally(() => {
      if (root.dataset.themeTransitionCount === String(count)) {
        root.classList.remove("theme-transitioning");
        delete root.dataset.themeTransitionCount;
      }
    });
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Moon className="theme-icon-moon" size={18} aria-hidden="true" />
      <Sun className="theme-icon-sun" size={18} aria-hidden="true" />
    </button>
  );
}
