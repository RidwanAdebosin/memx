"use client";
import { useEffect, useState } from "react";
import { Header } from "./components/header/Header";
import { Memx } from "./components/memxContentSection/page";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialDark = storedTheme === "dark" || (!storedTheme && prefersDark);
    setIsDark(initialDark);

    document.body.classList.toggle("dark", initialDark);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleDarkMode = () => setIsDark((prev) => !prev);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Header onToggleDarkMode={toggleDarkMode} isDark={isDark} />
      <Memx />
    </div>
  );
}
