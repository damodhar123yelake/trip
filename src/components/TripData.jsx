import React from "react";
import "./TripStyles.css";

const TripData = ({ heading, text, image,travel }) => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={image} alt="Img" />
      </div>
      <h4>{heading}</h4>
      <p>{text}</p>
    </div>
  );
};

export default TripData;
