import Image from "next/image";
import styles from "./funktioner.module.css";

export default function FunktionerPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundEllipse} />
      <h1 className={styles.heading}>Hur vi fungerar</h1>
      <div className={styles.card}>
        <div className={styles.arrowLeft}>
          <Image src="/Arrow-left-circle.svg" alt="" width={40} height={40} />
        </div>
        <div className={styles.arrowRight}>
          <Image src="/Arrow-right-circle.svg" alt="" width={40} height={40} />
        </div>
        <h2 className={styles.cardTitle}>ANSLUT DATA SNABBT</h2>
        <p className={styles.cardText}>
          Koppla enkelt CRM, intranät, PDF-arkiv och molntjänster – vi hanterar
          OCR, API-integrationer och metadata.
        </p>
      </div>
    </div>
  );
}