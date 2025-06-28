"use client";

import type { NextPage } from "next";
import Image from "next/image";
import styles from "./hem.module.css";
import Spline from '@splinetool/react-spline';

const Hem: NextPage = () => {
  return (
    <div className={styles.hem}>
      {/* <div className={styles.wrapperModernGeometricBlack}>
        <Image
          className={styles.modernGeometricBlackBusinesIcon}
          width={2053.746}
          height={2053.746}
          sizes="100vw"
          alt=""
          src="/modern-geometric-black-business-background 1 (1).png"
          quality={100}
          priority
        />
      </div> */}
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
      <div className={styles.rectangleDiv} />
      <div className={styles.hemChild8} />
      <div className={styles.hemChild9} />
      <div className={styles.geChatbotenTillgngContainer}>
        <p className={styles.allKunskap}>Ge chatboten tillgång</p>
        <p className={styles.allKunskap}>till dina källor – databaser,</p>
        <p className={styles.allKunskap}>dokument och molnlagring.</p>
      </div>
      <div className={styles.stllFrgorOch}>
        Ställ frågor och få svar direkt i vår konversations-UI eller via er
        befintliga app.
      </div>
      <div className={styles.ocrNlpPreprocessingOch}>
        OCR, NLP-preprocessing och vektorindex skapas sömlöst i bakgrunden.
      </div>
      <div className={styles.sFungerarDet}>Key Features</div>
      <Image
        className={styles.dRenderingCuteRobotIcon2}
        width={346.5}
        height={346.5}
        sizes="100vw"
        alt=""
        src="/3drenderingcuteroboticon-2@2x.png"
      />
      <div className={styles.hemChild10} />
      <div className={styles.samlaFeedbackAnalysera}>
        Samla feedback, analysera användning och träna om modeller för ständig
        förbättring.
      </div>
      <div className={styles.messageSquare}>
        <Image
          className={styles.icon}
          width={36}
          height={36}
          sizes="100vw"
          alt=""
          src="/icon.svg"
        />
      </div>
      <div className={styles.layers}>
        <Image
          className={styles.icon1}
          width={40}
          height={40}
          sizes="100vw"
          alt=""
          src="/icon1.svg"
        />
      </div>
      <Image
        className={styles.alignRightIcon}
        width={48}
        height={48}
        sizes="100vw"
        alt=""
        src="/align-right@2x.png"
      />
      <div className={styles.trendingUp}>
        <Image
          className={styles.icon2}
          width={44}
          height={24}
          sizes="100vw"
          alt=""
          src="/icon2.svg"
        />
      </div>
      <div className={styles.hemChild11} />
      <div className={styles.hemChild12} />
      <div className={styles.hemChild13} />
      <div className={styles.hemChild14} />
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
