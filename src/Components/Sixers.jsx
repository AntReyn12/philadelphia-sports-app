import React from "react";
import "./Sixers.css";
import sixersLogo from "../img/sixers-logo.png";

const Sixers = () => {
  return (
    <div className="sixers-card">
      <img src={sixersLogo} alt="Sixers Logo" />
      <p>Trust The Process</p>
    </div>
  );
};

export default Sixers;
