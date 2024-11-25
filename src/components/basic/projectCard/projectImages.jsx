import styles from "./projectCard.module.css"

import React from 'react'

export default function projectImages({projectImg, projectAlt}) {
  return (
    <div className={styles.projectImg}><img src={projectImg} alt={projectAlt} /></div>
  )
}
