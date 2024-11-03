import React from "react";
import styles from "./menuButton.module.css";

export default function MenuButton({ name, imageSrc, onClick }) {
  return (
    <div className={styles.menuButton_container} onClick={onClick}>
      <img className={styles.button_img} src={imageSrc} alt={name || "Menu button"} />
      <p className={styles.button_title}>{name}</p>
    </div>
  );
}
