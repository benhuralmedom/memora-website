"use client";

import type { NextPage } from "next";
import styles from "./hem.module.css";
import Spline from '@splinetool/react-spline';
import KeyFeatures from "../components/KeyFeatures";

const Hem: NextPage = () => {
  return (
    <div className={styles.hem}>
      <div className={styles.splineLeft}>
        <Spline scene="https://prod.spline.design/l6fJ31p8NzHsHjN2/scene.splinecode" />
      </div>
      
      <div className={styles.hemChild} />
      <div className={styles.hemItem} />
      <div className={styles.ellipseDiv} />
      <b className={styles.allKunskapDirektContainer}>
        <p className={styles.allKunskap}>All Company Knowledge.</p>
        <p className={styles.allKunskap}>One Interface.</p>
      </b>
      <div className={styles.anslutDinaDokumentContainer}>
        <p className={styles.allKunskap}>
          Memora is an AI that knows everything about your company - feeds you answers in real time.
        </p>
      </div>
      <div className={styles.vlkommenTillFramtiden}>
          Teams waste 30% of their time searching for information.<br/>
          Memora gives that time back.
      </div>
      <div className={styles.sFungerarDet}>Key Features</div>
      <KeyFeatures />
      <div className={styles.buttonContainer}>
        <div className={styles.component7}>
          <div className={styles.bokaDemo}>BOKA DEMO</div>
        </div>
        <div className={styles.component8}>
          <div className={styles.seFunktioner}>SE FUNKTIONER</div>
        </div>
      </div>
    </div>
  );
};

export default Hem;