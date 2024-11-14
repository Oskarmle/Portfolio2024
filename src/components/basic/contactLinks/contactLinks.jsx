import React from "react";
import styles from "./contactLinks.module.css";

export default function ContactLinks({imageSrc, skillText, url}) {
  return (
    <div className={styles.socials} onClick={() => window.open(url, '_blank')}>
      <img className={styles.image} src={imageSrc} alt="" />
      <p>{skillText}</p>
    </div>
  );
}
