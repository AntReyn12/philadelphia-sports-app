import React from "react";
import EaglesCard from "./EaglesCard";
import SixersCard from "./SixersCard";
import FlyersCard from "./FlyersCard";
import PhilliesCard from "./PhilliesCard";

const Home = () => {
  return (
    <div className="home">
      <div className="home-intro">
        <h1 className="home-h1">
          The goal of this website is to provide up-to-date rosters for the Eagles, Phillies, Flyers and 76ers. Below you can find all the information you need about who is on the team, their
          position, number and photo. I hope you enjoy. Go Philly.
        </h1>
      </div>
      <div className="teams">
        <EaglesCard />
        <PhilliesCard />
        <FlyersCard />
        <SixersCard />
      </div>
    </div>
  );
};

export default Home;
