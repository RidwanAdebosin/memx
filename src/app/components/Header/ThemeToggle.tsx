"use client";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = ({
  onToggleDarkMode,
  isDark,
}: {
  onToggleDarkMode: () => void;
  isDark: boolean;
}) => {
  return (
    <button
      onClick={onToggleDarkMode}
      className="mr-4 cursor-pointer"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
};
