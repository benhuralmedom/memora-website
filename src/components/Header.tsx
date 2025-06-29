"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logo}>M E M O R A</div>
      <nav className={`${styles.navbar} ${navOpen ? styles.navbarOpen : ""}`}>
        <Link href="/" className={`${styles.navLink} ${styles.navItem}`} onClick={() => setNavOpen(false)}>Hem</Link>
        <Link href="/om-oss" className={`${styles.navLink} ${styles.navItem}`} onClick={() => setNavOpen(false)}>Om oss</Link>
        <Link href="/kontakt" className={`${styles.navLink} ${styles.navItem}`} onClick={() => setNavOpen(false)}>Kontakt</Link>
        <Link href="/priser" className={`${styles.navLink} ${styles.navItem}`} onClick={() => setNavOpen(false)}>Priser</Link>
        <Link href="/funktioner" className={`${styles.navLink} ${styles.navItem}`} onClick={() => setNavOpen(false)}>Funktioner</Link>
      </nav>
      <div className={styles.rightArea}>
        <button
          aria-label="Toggle navigation menu"
          className={styles.hamburger}
          onClick={() => setNavOpen(!navOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        {/* Whatever you want on the top right (profile, icon, etc.) */}
      </div>
    </header>
  );
}
