import React from "react";
import "./Flyers.css";
import flyersLogo from "../img/flyers-logo.png";

const Flyers = () => {
  return (
    <div className="flyers-card">
      <img src={flyersLogo} alt="Flyers Logo" />
    </div>
  );
};

export default Flyers;
