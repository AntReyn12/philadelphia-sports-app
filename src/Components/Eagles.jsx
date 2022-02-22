import React from "react";
import "./Eagles.css";
import eaglesLogo from "../img/eagles-logo.png";

const Eagles = () => {
  return (
    <div className="eagles-card">
      <p>Fly Eagles Fly</p>
      <img src={eaglesLogo} alt="Eagles Logo" />
    </div>
  );
};

export default Eagles;
