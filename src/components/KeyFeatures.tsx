"use client";

import Image from "next/image";
import styles from "./KeyFeatures.module.css";

interface Feature {
  name: string;
  desc: string;
  icon: string;
}

const features: Feature[] = [
  {
    name: "AI-powered search & Q&A",
    desc: "Ask in natural language, whether a quick lookup or a complex query. Text or speech. Fully tailored to your organization.",
    icon: "/icon.svg",
  },
  {
    name: "Connected to all your sources",
    desc: "Pulls answers from your documents, wikis, databases, chat apps, and more - with references for every answer.",
    icon: "/file.svg",
  },
    // {
  //   name: "Source-backed answers",
  //   desc: "Shows references for every answer.",
  //   icon: "/file.svg",
  // },
  // {
  //   name: "Seamless integrations",
  //   desc: "Slack, Notion, Google Drive, Confluence, and more.",
  //   icon: "/globe.svg",
  // },
  {
    name: "Real-time updates",
    desc: "Always up-to-date with your knowledge base.",
    icon: "/icon1.svg",
  },
  {
    name: "Enterprise-grade security",
    desc: "Data encrypted at rest and in transit. Deploy on-premises or in your private cloud.",
    icon: "/window.svg",
  },
  {
    name: "Admin controls and analytics",
    desc: "Monitor usage, manage permissions, track insights.",
    icon: "/icon2.svg",
  },
];

export default function KeyFeatures() {
  return (
    <div className={styles.featuresList}>
      {features.map((feature, index) => (
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
