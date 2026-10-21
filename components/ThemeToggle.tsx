"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

// html.dark is the single source of truth (the init script in layout.tsx sets it before paint), so the
// label reads it directly instead of keeping a copy in state.
function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
const isDark = () => document.documentElement.classList.contains("dark");

/** Light/dark switch, as on the website. The icon follows html.dark in CSS, so it is right before hydration. */
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

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.theme = next ? "dark" : "light"; } catch { /* storage blocked: the choice lasts for this page only */ }
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>
      <Moon className="theme-icon-moon" size={18} aria-hidden="true" />
      <Sun className="theme-icon-sun" size={18} aria-hidden="true" />
    </button>
  );
}
