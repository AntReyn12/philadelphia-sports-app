import React from "react";
import "./Phillies.css";
import philliesLogo from "../img/phillies-logo.png";

const Phillies = () => {
  return (
    <div className="phillies-card">
      <p>Ring The Bell</p>
      <img src={philliesLogo} alt="Phillies Logo" />
    </div>
  );
};

export default Phillies;
