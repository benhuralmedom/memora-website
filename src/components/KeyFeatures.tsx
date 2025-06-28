"use client";

import styles from "./KeyFeatures.module.css";

interface Feature {
  name: string;
  desc: string;
}

const features: Feature[] = [
  {
    name: "AI-powered search & Q&A",
    desc: "Ask in natural language, whether it's a quick lookup or a complex query. Fully tailored to your organization.",
  },
  {
    name: "Source-backed answers",
    desc: "Shows document references for every answer.",
  },
  {
    name: "Seamless integrations",
    desc: "Slack, Notion, Google Drive, Confluence, and more.",
  },
  {
    name: "Real-time document indexing",
    desc: "Always up-to-date with your knowledge base.",
  },
  {
    name: "Enterprise-grade security",
    desc: "Data encryption, access controls, privacy-first design.",
  },
  {
    name: "Admin controls and analytics",
    desc: "Monitor usage, manage permissions, track insights.",
  },
];

export default function KeyFeatures() {
  return (
    <div className={styles.featuresList}>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureRow}>
          <div className={styles.featureName}>{feature.name}</div>
          <div className={styles.featureDesc}>{feature.desc}</div>
        </div>
      ))}
    </div>
  );
}
