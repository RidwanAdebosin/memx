"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { HeaderProps } from "./Header";
import { ThemeToggle } from "./ThemeToggle";

export const HamburgerMenu: React.FC<HeaderProps> = ({
  hamburgerIsOpen,
  setHamburgerIsOpen,
  onToggleDarkMode,
  isDark,
}) => {
  return (
    <AnimatePresence>
      {hamburgerIsOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setHamburgerIsOpen(false)}
          />

          <motion.div
            // ref={menuRef}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 bg-white z-50 h-screen"
          >
            <button
              className="w-full flex justify-end pt-5 pr-2 dark:bg-black"
              onClick={() => setHamburgerIsOpen(false)}
            >
              <X size={44} />
            </button>
            <ul className="flex flex-col space-y-6 p-6 pt-10 h-full w-full dark:bg-black">
              {[
                { label: "Login", href: "login" },
                { label: "Sign Up", href: "sign-up" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="text-base font-semibold  cursor-pointer transition-colors duration-200 hover:underline focus:outline-none focus:text-black dark:text:white "
                >
                  {item.label === "Login" || "Sign Up" ? (
                    <Link
                      className="flex items-center justify-between cursor-pointer mb-0"
                      aria-label={item.label}
                      href={item.href}
                    >
                      <span>{item.label}</span>
                      {/* <ChevronRight /> */}
                    </Link>
                  ) : (
                    item.label
                  )}
                </li>
              ))}

              <ThemeToggle
                onToggleDarkMode={onToggleDarkMode}
                isDark={isDark}
              />
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
