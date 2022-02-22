import React from "react";
import Eagles from "./Components/Eagles";
import Sixers from "./Components/Sixers";
import Flyers from "./Components/Flyers";
import Phillies from "./Components/Phillies";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>Philadelphia Sports Rosters</header>
      <div className="home">
        <div className="home-intro">
          <h1 className="home-h1">
            The goal of this website is to provide up-to-date rosters for the Eagles, Phillies, Flyers and 76ers. Below you can find all the information you need about who is on the team, their
            position, number and photo. I hope you enjoy. Go Philly.
          </h1>
        </div>
        <div class="teams">
          <Eagles />
          <Phillies />
          <Flyers />
          <Sixers />
        </div>
      </div>
      <footer>Philadelphia Sports Rosters, 2022</footer>
    </div>
  );
};

export default App;
