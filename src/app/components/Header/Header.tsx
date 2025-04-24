"use client";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { Moon, Sun } from "lucide-react";
import { SearchQuery } from "./SearchQuery";
import { HamburgerMenu } from "./HamburgerMenu";
import { ThemeToggle } from "./ThemeToggle";

export type HeaderProps = {
  hamburgerIsOpen: boolean;
  setHamburgerIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onToggleDarkMode: () => void;
  isDark: boolean;
};

export const Header = ({
  onToggleDarkMode,
  isDark,
}: {
  isDark: boolean;
  onToggleDarkMode: () => void;
}) => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>"Welcome to Memx"</title>
        <meta name="description" content="Your home for memes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center  lg:space-x-0 px-2 lg:px-8 py-4 lg:pt-6 z-50 dark:bg-black dark:text-white bg-white text-black transition-colors duration-300 w-full">
        <h1 className="font-extrabold text-2xl lg:text-3xl dark:text-white">
          MEMX
        </h1>
        <SearchQuery />

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle onToggleDarkMode={onToggleDarkMode} isDark={isDark} />
          <Link
            href="login"
            className="bg-black dark:bg-white px-6 py-2 text-white dark:text-black rounded-lg font-medium"
          >
            Login
          </Link>
          <Link
            href="signup"
            className="bg-black dark:bg-white px-6 py-2 text-white dark:text-black rounded-lg font-medium"
          >
            Sign Up
          </Link>
        </div>
        <div className="lg:hidden">
          <button aria-label={hamburgerIsOpen ? "Close menu" : "Open menu"}>
            <Hamburger toggled={hamburgerIsOpen} toggle={setHamburgerIsOpen} />
          </button>
          <HamburgerMenu
            hamburgerIsOpen={hamburgerIsOpen}
            setHamburgerIsOpen={setHamburgerIsOpen}
            onToggleDarkMode={onToggleDarkMode}
            isDark={isDark}
          />
        </div>
      </header>
    </>
  );
};
