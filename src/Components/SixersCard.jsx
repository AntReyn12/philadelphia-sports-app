import React from "react";
import "./SixersCard.css";
import sixersLogo from "../img/sixers-logo.png";

const SixersCard = () => {
  return (
    <div className="sixers-card">
      <img src={sixersLogo} alt="Sixers Logo" />
    </div>
  );
};

export default SixersCard;
