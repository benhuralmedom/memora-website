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
      <div className={styles.vlkommenTillFramtiden}>
          Teams waste 30% of their time searching for information.<br/>
          Memora gives that time back. Faster decisions. Faster onboarding.
      </div>
      <div className={styles.sFungerarDet}>Key Features</div>
      <div className={styles.featuresSection}>
        <div className={styles.featureItem}>
          <div>
            <div className={styles.featureName}>AI-powered search & Q&A</div>
            <div className={styles.featureDesc}>Ask in natural language, whether it&apos;s a quick lookup or a complex query. Fully tailored to your organization.</div>
          </div>
        </div>
        <div className={styles.featuresSection}>
          <div>
            <div className={styles.featureName}>Source-backed answers</div>
            <div className={styles.featureDesc}>Shows document references for every answer.</div>
          </div>
        </div>
        <div className={styles.featuresSection}>
          <div>
            <div className={styles.featureName}>Seamless integrations </div>
            <div className={styles.featureDesc}>Slack, Notion, Google Drive, Confluence, and more.</div>
          </div>
        </div>
        <div className={styles.featuresSection}>
          <div>
            <div className={styles.featureName}>Real-time document indexing </div>
            <div className={styles.featureDesc}>always up-to-date with your knowledge base.</div>
          </div>
        </div>
        <div className={styles.featuresSection}>
          <div>
            <div className={styles.featureName}>Enterprise-grade security</div>
            <div className={styles.featureDesc}>data encryption, access controls, privacy-first design.</div>
          </div>
        </div>
        <div className={styles.featuresSection}>
          <div>
            <div className={styles.featureName}>Admin controls and analytics </div>
            <div className={styles.featureDesc}>monitor usage, manage permissions, track insights.</div>
          </div>
        </div>
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
