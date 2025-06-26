"use client";

import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>MEMORA</div>
      <nav className={styles.nav}>
        <Link href="/">Hem</Link>
        <Link href="/om-oss">Om oss</Link>
        <Link href="/kontakt">Kontakt</Link>
        <Link href="/priser">Priser</Link>
        <Link href="/funktioner">Funktioner</Link>
      </nav>
    </header>
  );
}
