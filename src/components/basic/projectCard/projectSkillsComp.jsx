import React from 'react'

import styles from "./projectCard.module.css"

export default function ProjectSkillsComp({projectSkillImg, skillText}) {
  return (
    <div className={styles.projectSkillImg}>
        <img className={styles.projectSkillImgComp} src={projectSkillImg} alt="" />
        <p className={styles.projectSkillText}>{skillText}</p>
    </div>
  )
}
