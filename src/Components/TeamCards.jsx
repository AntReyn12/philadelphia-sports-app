import React from "react";
import EaglesCard from "./EaglesCard";
import SixersCard from "./SixersCard";
import FlyersCard from "./FlyersCard";
import PhilliesCard from "./PhilliesCard";

const TeamCards = () => {
  return (
    <div className="teams">
      <div>
        <div className="teams-intro">
          <h1 className="teams-h1">Click on a team to see their roster.</h1>
        </div>
      </div>
      <div className="team-cards">
        <EaglesCard />
        <PhilliesCard />
        <FlyersCard />
        <SixersCard />
      </div>
    </div>
  );
};

export default TeamCards;
