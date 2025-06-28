"use client";

import type { NextPage } from "next";
import styles from "./hem.module.css";
import Spline from '@splinetool/react-spline';

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
        <p className={styles.allKunskap}>All of Your Companys Knowledge</p>
        <p className={styles.allKunskap}>in One Interface</p>
      </b>
      <div className={styles.anslutDinaDokumentContainer}>
        <p className={styles.allKunskap}>
          AI-powered knowledge assistant.
        </p>
        <p className={styles.allKunskap}>
          Instantly search, retrieve, and interact with internal data (like documents, wikis, databases) securely.
        </p>
      </div>
      <div className={styles.vlkommenTillFramtiden}> Save 30% of time. Faster decisions. Secure. Faster onboarding.
      </div>
      <div className={styles.sFungerarDet}>Key Features</div>
      <div className={styles.featuresGrid}>
        <div className={styles.featureBox}>
          Ge chatboten tillgång till dina källor – databaser, dokument och
          molnlagring.
        </div>
        <div className={styles.featureBox}>
          Ställ frågor och få svar direkt i vår konversations-UI eller via er
          befintliga app.
        </div>
        <div className={styles.featureBox}>
          OCR, NLP-preprocessing och vektorindex skapas sömlöst i bakgrunden.
        </div>
        <div className={styles.featureBox}>
          Samla feedback, analysera användning och träna om modeller för
          ständig förbättring.
        </div>
        <div className={styles.featureBox}>Integrera enkelt med era system via API.</div>
        <div className={styles.featureBox}>Anpassningsbar till er verksamhet och processer.</div>
      </div>
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
