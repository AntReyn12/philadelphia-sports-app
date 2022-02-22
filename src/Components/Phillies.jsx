import React from "react";
import "./Phillies.css";
import philliesLogo from "../img/phillies-logo.png";

const Phillies = () => {
  return (
    <div className="phillies-card">
      <img src={philliesLogo} alt="Phillies Logo" />
    </div>
  );
};

export default Phillies;
