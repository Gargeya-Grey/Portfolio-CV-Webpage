"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/** Light/dark switch, as on the website. The icon follows html.dark in CSS, so it is right before hydration. */
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    // Without a saved choice, follow a change of the system setting at once.
    const system = window.matchMedia("(prefers-color-scheme: dark)");
    const follow = (event: MediaQueryListEvent) => {
      let saved: string | null = null;
      try { saved = localStorage.getItem("theme"); } catch { /* storage blocked: follow the system */ }
      if (saved) return;
      document.documentElement.classList.toggle("dark", event.matches);
      setDark(event.matches);
    };
    system.addEventListener("change", follow);
    return () => system.removeEventListener("change", follow);
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.theme = next ? "dark" : "light"; } catch { /* storage blocked: the choice lasts for this page only */ }
    setDark(next);
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>
      <Moon className="theme-icon-moon" size={18} aria-hidden="true" />
      <Sun className="theme-icon-sun" size={18} aria-hidden="true" />
    </button>
  );
}
