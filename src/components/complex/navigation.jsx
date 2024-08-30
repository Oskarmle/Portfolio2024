import React from 'react'
import MenuButton from '../basic/menuButton';
import "./complexComponents.css";
import { useNavigate } from "react-router-dom";

// button props
import home_button from '../../svg_icons/home_button.svg'
import projects_button from '../../svg_icons/projects_button.svg'
import contact_button from '../../svg_icons/contact_button.svg'

export default function Navigation() {

  let navigate = useNavigate();

  function handleFrontpageClick(){
    navigate("/")
  }

  function handleProjectsClick(){
    navigate("/projects")
  }

  function handleContactClick(){
    navigate("/contact")
  }


  return (
    <div className='nav_container'>
        <p className='menu_title'>Menu</p>
        <MenuButton name="Frontpage" imageSrc={home_button} type="button" onClick={handleFrontpageClick}></MenuButton>
        <MenuButton name="Projects" imageSrc={projects_button} type="button" onClick={handleProjectsClick}></MenuButton>
        <MenuButton name="Contact" imageSrc={contact_button} type="button" onClick={handleContactClick}></MenuButton>
    </div>
  )
}
