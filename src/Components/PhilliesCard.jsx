import React from "react";
import "./PhilliesCard.css";
import philliesLogo from "../img/phillies-logo.png";

const PhilliesCard = () => {
  return (
    <div className="phillies-card">
      <img src={philliesLogo} alt="Phillies Logo" />
    </div>
  );
};

export default PhilliesCard;
