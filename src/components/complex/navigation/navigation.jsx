import React from 'react'
import MenuButton from '../../basic/menuButton/menuButton';
// import { useNavigate } from "react-router-dom";
import styles from "./navigation.module.css"

// button props
import home_button from '../../../svg_icons/home_button.svg'
import projects_button from '../../../svg_icons/projects_button.svg'
import contact_button from '../../../svg_icons/contact_button.svg'
import triangle_nav from '../../../svg_icons/triangle_nav.svg'
import skills_button from '../../../svg_icons/skill.svg'

export default function Navigation({ scrollToStart, scrollToSkills, scrollToProjects, scrollToContact }) {

  return (
    <div className={styles.nav_container}>
      <img src={triangle_nav} alt="" className={styles.triangle_nav}/>
        <p className={styles.menu_title}>Menu</p>
        <MenuButton name="Frontpage" imageSrc={home_button} type="button" onClick={scrollToStart}></MenuButton>
        <MenuButton name="Skills" imageSrc={skills_button} type="button" onClick={scrollToSkills}></MenuButton>
        <MenuButton name="Projects" imageSrc={projects_button} type="button" onClick={scrollToProjects}></MenuButton>
        <MenuButton name="Contact" imageSrc={contact_button} type="button" onClick={scrollToContact}></MenuButton>
    </div>
  )
}
