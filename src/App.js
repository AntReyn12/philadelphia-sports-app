import React from "react";
import eaglesLogo from "./img/eagles-logo.png";
import philliesLogo from "./img/phillies-logo.png";
import flyersLogo from "./img/flyers-logo.png";
import sixersLogo from "./img/sixers-logo.png";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>Philadelphia Sports Rosters</header>
      <div className="home">
        <div className="home-intro">
          <h1 className="home-h1 left">
            As a die-hard Philadelphia sports fan, there's few things in this world I love more than my favorite teams. But it can be hard to keep track of every player on the roster, especially after
            an active off-season. That's where my website can help.
          </h1>
          <h1 className="home-h1 right">
            The goal of this website is to provide up-to-date rosters for the Eagles, Phillies, Flyers and 76ers. Below you can find all the information you need about who is on the team, their
            position, number and photo. I hope you enjoy. Go Philly.
          </h1>
        </div>
        <div class="teams">
          <img src={eaglesLogo} alt="Eagles Logo" />
          <img src={philliesLogo} alt="Phillies Logo" />
          <img src={flyersLogo} alt="Flyers Logo" />
          <img src={sixersLogo} alt="Sixers Logo" />
        </div>
      </div>
      <footer>Philadelphia Sports Rosters, 2022</footer>
    </div>
  );
};

export default App;
