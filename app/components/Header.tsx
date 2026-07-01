// app/components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const initial = saved ?? preferred;
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <nav className="flex items-center justify-between px-13 h-16 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors">
      <a href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#9CCA2D] rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 fill-gray-900" viewBox="0 0 24 24">
            <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
          </svg>
        </div>
        <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          FlynGet
        </span>
      </a>

      <ul className="flex items-center gap-8">
        {[
          "How it works",
          "Market place",
          "Trust & safety",
          "For travelers",
        ].map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="w-9 h-9 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-md text-gray-600 dark:text-gray-400 hover:border-gray-500 dark:hover:border-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {theme === "dark" ? (
            // Sun icon
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            // Moon icon
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        <button className="text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 hover:border-gray-500 dark:hover:border-gray-400 transition-colors">
          Sign in
        </button>
        <button className="text-sm font-semibold text-gray-900 bg-[#9CCA2D] rounded-md px-4 py-2 hover:bg-[#8ab826] transition-colors">
          Request a product
        </button>
      </div>
    </nav>
  );
}
