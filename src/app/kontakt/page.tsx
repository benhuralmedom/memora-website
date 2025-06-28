import Image from "next/image";
import styles from "./kontakt.module.css";

export default function KontaktPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundEllipse} />
      <div className={styles.backgroundImageWrapper}>
        <Image
          src="/moderngeometricblackbusinessbackground-3@2x.png"
          alt=""
          className={styles.backgroundImage}
          width={1868}
          height={1465}
        />
      </div>
      <h1 className={styles.heading}>
        Har du frågor?
        <br />
        Hör av dig så återkommer
        <br />
        vi inom 24 timmar.
      </h1>
      <div className={styles.robotWrapper}>
        <Image
          src="/3drenderingcuteroboticon-2@2x.png"
          alt="Robot"
          className={styles.robotImage}
          width={331}
          height={331}
        />
      </div>
      <form className={styles.form}>
        <label className={styles.label}>
          Namn
          <input type="text" className={styles.input} />
        </label>
        <label className={styles.label}>
          Företag
          <input type="text" className={styles.input} />
        </label>
        <label className={styles.label}>
          E-post
          <input type="email" className={styles.input} />
        </label>
        <label className={styles.label}>
          Meddelande
          <textarea className={`${styles.input} ${styles.textarea}`} />
        </label>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}