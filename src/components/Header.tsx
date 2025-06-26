"use client";

import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <b className={styles.mEM}>{`M E M O R A `}</b>
      <div className={styles.component2}>
        <div className={styles.component2Child} />
        <div className={`${styles.component21} ${styles.navItem}`}>
          <Link href="#" className={`${styles.omOss} ${styles.navLink}`}>Hem</Link>
        </div>
        <div className={`${styles.component3} ${styles.navItem}`}>
          <Link href="#" className={`${styles.omOss} ${styles.navLink}`}>Om oss</Link>
        </div>
        <div className={`${styles.component4} ${styles.navItem}`}>
          <Link href="#" className={`${styles.omOss} ${styles.navLink}`}>Kontakt</Link>
        </div>
        <div className={`${styles.component5} ${styles.navItem}`}>
          <Link href="#" className={`${styles.omOss} ${styles.navLink}`}>Priser</Link>
        </div>
        <div className={`${styles.component1} ${styles.navItem}`}>
          <Link href="#" className={`${styles.omOss} ${styles.navLink}`}>Funktioner</Link>
        </div>
      </div>
    </>
  );
}