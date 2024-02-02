import React from "react";
import "./HeroStyles.css";
import { NavLink } from "react-router-dom";
const Hero = ({ cName, heroImg, title, url, text, btnClass, buttonText }) => {
  return (
    <>
      <div className={cName}>
        <img src={heroImg} alt="HeroImg" />
        <div className="hero-text">
          <h1>{title}</h1>
          <p>{text}</p>
          <NavLink href={url} className={btnClass}>
            {buttonText}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Hero;
