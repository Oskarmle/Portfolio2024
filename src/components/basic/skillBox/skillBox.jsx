import React from 'react'
import styles from "./skillBox.module.css"

export default function SkillBox({skillImg, skillBoxText}) {
  return (
    <div className={styles.skillBox}>
      <img src={skillImg} alt="" className={styles.skillImg}/>
      <p className={styles.skillText}>{skillBoxText}</p>
    </div>
  )
}
