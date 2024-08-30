import React from "react";
import "./basicComponents.css";


export default function MenuButton({ name, imageSrc, onClick }) {
  return <div className="menuButton_container" onClick={onClick}>
    <img className="button_img" src={imageSrc} alt="" />
    <p className="button_title">{name}</p>
  </div>;
}
