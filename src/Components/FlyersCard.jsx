import React from "react";
import "./FlyersCard.css";
import flyersLogo from "../img/flyers-logo.png";

const FlyersCard = (props) => {
  return (
    <div className="flyers-card" onClick={props.onClick}>
      <img src={flyersLogo} alt="Flyers Logo" />
    </div>
  );
};

export default FlyersCard;
