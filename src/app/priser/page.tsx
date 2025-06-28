import Image from "next/image";
import styles from "./priser.module.css";

export default function PriserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundEllipse} />
      <h1 className={styles.heading}>{`Priser & paket`}</h1>
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.cardStarter}`}>
          <h2 className={styles.cardTitle}>STARTER</h2>
          <ul className={styles.features}>
            <li>Plan inkluderar</li>
            <li>Upp till 5 användare</li>
            <li>Grundläggande connectors</li>
          </ul>
          <p className={styles.price}>1 990 SEK</p>
          <button className={styles.button}>KOM IGÅNG</button>
        </div>
        <div className={`${styles.card} ${styles.cardProfessional}`}>
          <h2 className={styles.cardTitle}>PROFESSIONAL</h2>
          <ul className={styles.features}>
            <li>Plan inkluderar</li>
            <li>Upp till 20 användare</li>
            <li>Avancerade integrations</li>
            <li>Analytics</li>
          </ul>
          <p className={styles.price}>4 990 SEK</p>
          <button className={styles.button}>BOKA DEMO</button>
        </div>
        <div className={`${styles.card} ${styles.cardEnterprise}`}>
          <Image
            src="/3drenderingcuteroboticon-2-1@2x.png"
            alt=""
            width={237}
            height={237}
            className={styles.robotImage}
          />
          <h2 className={styles.cardTitle}>ENTERPRISE</h2>
          <ul className={styles.features}>
            <li>Plan inkluderar</li>
            <li>Obegränsat</li>
            <li>SLA</li>
            <li>On-prem</li>
            <li>Prioriterad support</li>
          </ul>
          <p className={styles.price}>OFFERT</p>
          <button className={styles.button}>BE OM OFFERT</button>
        </div>
      </div>
    </div>
  );
}