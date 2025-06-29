"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logo}>M E M O R A</div>
      <nav className={styles.navbar}>
        <Link href="/" className={`${styles.navLink} ${styles.navItem}`}>Hem</Link>
        <Link href="/om-oss" className={`${styles.navLink} ${styles.navItem}`}>Om oss</Link>
        <Link href="/kontakt" className={`${styles.navLink} ${styles.navItem}`}>Kontakt</Link>
        <Link href="/priser" className={`${styles.navLink} ${styles.navItem}`}>Priser</Link>
        <Link href="/funktioner" className={`${styles.navLink} ${styles.navItem}`}>Funktioner</Link>
      </nav>
      <div className={styles.rightArea}>
        {/* Whatever you want on the top right (profile, icon, etc.) */}
      </div>
    </header>
  );
}
