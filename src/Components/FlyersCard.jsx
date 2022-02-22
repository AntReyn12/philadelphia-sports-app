import React from "react";
import "./FlyersCard.css";
import flyersLogo from "../img/flyers-logo.png";

const FlyersCard = () => {
  return (
    <div className="flyers-card">
      <img src={flyersLogo} alt="Flyers Logo" />
    </div>
  );
};

export default FlyersCard;
