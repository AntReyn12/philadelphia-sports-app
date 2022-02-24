import React from "react";
import "./PhilliesCard.css";
import philliesLogo from "../img/phillies-logo.png";

const PhilliesCard = (props) => {
  return (
    <div className="phillies-card" onClick={props.onClick}>
      <img src={philliesLogo} alt="Phillies Logo" />
    </div>
  );
};

export default PhilliesCard;
