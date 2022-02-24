import React from "react";
import "./SixersCard.css";
import sixersLogo from "../img/sixers-logo.png";

const SixersCard = (props) => {
  return (
    <div className="sixers-card" onClick={props.onClick}>
      <img src={sixersLogo} alt="Sixers Logo" />
    </div>
  );
};

export default SixersCard;
