import React from "react";
import "./EaglesCard.css";
import eaglesLogo from "../img/eagles-logo.png";

const EaglesCard = (props) => {
  return (
    <div className="eagles-card" onClick={props.onClick}>
      <img src={eaglesLogo} alt="Eagles Logo" />
    </div>
  );
};

export default EaglesCard;
