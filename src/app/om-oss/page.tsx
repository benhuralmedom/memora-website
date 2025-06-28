import Image from "next/image";
import styles from "./om-oss.module.css";

export default function OmOssPage() {
    return (
    <div className={styles.container}>
        <div className={styles.backgroundEllipse} />
        <h1 className={styles.mission}>
            Vår mission:
            <br />
            Gör kunskap tillgänglig
            </h1>
            <div className={styles.description}>
                <p>Vi är AI-specialister med mångårig erfarenhet från tech och enterprise-lösningar.</p>
                <p>Vårt mål är att förenkla intern informationssökning och öka produktiviteten.</p>
                </div>
         </div>
  );
  }