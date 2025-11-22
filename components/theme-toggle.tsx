"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else if (stored === "light") {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      } else {
        const prefersDark =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDark) {
          document.documentElement.classList.add("dark");
          setIsDark(true);
        } else {
          document.documentElement.classList.remove("dark");
          setIsDark(false);
        }
      }
    } catch (e) {
      setIsDark(false);
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    try {
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch (e) {}
  };

  return (
    <button
      aria-pressed={!!isDark}
      onClick={toggle}
      title={isDark ? "Switch to light" : "Switch to dark"}
      className="inline-flex items-center gap-2 rounded-md border px-2 py-1 text-sm hover:bg-accent/5 dark:hover:bg-accent/20"
    >
      <span className="sr-only">Toggle theme</span>
      <Sun className={`${isDark ? "opacity-30" : ""} h-4 w-4`} />
      <div className="relative h-4 w-8 rounded-full bg-muted p-0.5">
        <div
          className={`absolute top-0.5 left-0.5 h-3 w-3 rounded-full bg-white shadow transition-transform duration-200 ${
            isDark ? "translate-x-4 bg-zinc-900" : "translate-x-0 bg-white"
          }`}
        />
      </div>
      <Moon className={`${isDark ? "opacity-100" : "opacity-30"} h-4 w-4`} />
    </button>
  );
}
