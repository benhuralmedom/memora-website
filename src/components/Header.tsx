"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      }
    } catch (e) {}
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-neutral-light dark:bg-neutral-dark bg-opacity-90 dark:bg-opacity-90 backdrop-blur-md sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-primary dark:text-neutral-light mr-8">
        Memora
      </Link>
      <nav className="flex-1">
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={
                  `font-medium ${styles.navLink} ` +
                  (pathname === item.href
                    ? "text-primary dark:text-primary-light"
                    : "text-neutral-dark dark:text-neutral-light")
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className={`ml-4 text-xl ${styles.themeToggle}`}
      >
        {isDark ? "🌞" : "🌙"}
      </button>
    </header>
  );
}
