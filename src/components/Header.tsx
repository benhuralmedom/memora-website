"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const closeMenu = () => setNavOpen(false);

  return (
    <>
      <header className={styles.headerWrapper}>
        <div className={styles.leftSpacer}></div>
        <div className={styles.logo}>M E M O R A</div>
        <div className={styles.centerSpacer}></div>
        <nav className={styles.navbar}>
          <Link href="/" className={`${styles.navLink} ${styles.navItem}`} onClick={closeMenu}>Home</Link>
          <Link href="/funktioner" className={`${styles.navLink} ${styles.navItem}`} onClick={closeMenu}>Key features</Link>
          <Link href="/funktioner" className={`${styles.navLink} ${styles.navItem}`} onClick={closeMenu}>How it works</Link>
          <Link href="/om-oss" className={`${styles.navLink} ${styles.navItem}`} onClick={closeMenu}>About us</Link>
          <Link href="/kontakt" className={`${styles.navLink} ${styles.navItem}`} onClick={closeMenu}>Contact</Link>
          {/* <Link href="/priser" className={`${styles.navLink} ${styles.navItem}`} onClick={closeMenu}>Priser</Link> */}
        </nav>
        <div className={styles.centerSpacer}></div>
        <div className={styles.rightArea}>
          <span className={styles.rightText}>M E M O R A</span>
          <button
            aria-label="Toggle navigation menu"
            className={`${styles.hamburger} ${navOpen ? styles.hideHamburger : ""}`}
            onClick={() => setNavOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={styles.rightSpacer}></div>
      </header>
      {navOpen && (
        <div className={styles.overlayMenu}>
          <div className={styles.overlayHeader}>
            <div className={styles.logo}>M E M O R A</div>
            <button
              aria-label="Close navigation menu"
              className={styles.closeButton}
              onClick={closeMenu}
            >
              x
            </button>
          </div>
          <nav className={styles.overlayNav}>
            <Link href="/" className={styles.overlayLink} onClick={closeMenu}>
              Hem
            </Link>
            <Link href="/om-oss" className={styles.overlayLink} onClick={closeMenu}>
              Om oss
            </Link>
            <Link href="/kontakt" className={styles.overlayLink} onClick={closeMenu}>
              Kontakt
            </Link>
            <Link href="/priser" className={styles.overlayLink} onClick={closeMenu}>
              Priser
            </Link>
            <Link href="/funktioner" className={styles.overlayLink} onClick={closeMenu}>
              Funktioner
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}