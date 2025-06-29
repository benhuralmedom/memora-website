"use client";

import Image from "next/image";
import { memo } from "react";
import features, { type Feature } from "../data/features";
import styles from "./KeyFeatures.module.css";


function KeyFeatures() {
  return (
    <div className={styles.featuresList}>
      {features.map((feature: Feature, index) => (
        <div key={index} className={styles.featureRow}>
          <Image
            src={feature.icon}
            alt=""
            width={40}
            height={40}
            className={styles.featureIcon}
          />
          <div>
            <div className={styles.featureName}>{feature.name}</div>
            <div className={styles.featureDesc}>{feature.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(KeyFeatures);