import React, {useState} from "react";
import "./EaglesCard.css";
import eaglesLogo from "../img/eagles-logo.png";

const EaglesCard = () => {
  return (
    <div className="eagles-card">
      <img src={eaglesLogo} alt="Eagles Logo" />
    </div>
  );
};

export default EaglesCard;
