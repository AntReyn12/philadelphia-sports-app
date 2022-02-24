import React, {useState} from "react";
import "./TeamCards.css";
import EaglesCard from "./EaglesCard";
import EaglesRoster from "./EaglesRoster";
import SixersCard from "./SixersCard";
import SixersRoster from "./SixersRoster";
import FlyersCard from "./FlyersCard";
import FlyersRoster from "./FlyersRoster";
import PhilliesCard from "./PhilliesCard";
import PhilliesRoster from "./PhilliesRoster";

const TeamCards = () => {
  const [show, setShow] = useState(true);
  const [showEaglesCard, setShowEaglesCard] = useState(true);
  const [showPhilliesCard, setShowPhilliesCard] = useState(true);
  const [showFlyersCard, setShowFlyersCard] = useState(true);
  const [showSixersCard, setShowSixersCard] = useState(true);
  const [showEaglesRoster, setShowEaglesRoster] = useState(false);
  const [showPhilliesRoster, setShowPhilliesRoster] = useState(false);
  const [showFlyersRoster, setShowFlyersRoster] = useState(false);
  const [showSixersRoster, setShowSixersRoster] = useState(false);

  const toggleShowEagles = () => {
    setShow(false);
    setShowEaglesCard(false);
    setShowEaglesRoster(true);
    setShowPhilliesCard(null);
    setShowFlyersCard(null);
    setShowSixersCard(null);
  };
  const toggleShowPhillies = () => {
    setShow(false);
    setShowPhilliesCard(false);
    setShowPhilliesRoster(true);
    setShowFlyersCard(null);
    setShowSixersCard(null);
    setShowEaglesCard(null);
  };
  const toggleShowFlyers = () => {
    setShow(false);
    setShowFlyersCard(false);
    setShowFlyersRoster(true);
    setShowSixersCard(null);
    setShowEaglesCard(null);
    setShowPhilliesCard(null);
  };
  const toggleShowSixers = () => {
    setShow(false);
    setShowSixersCard(false);
    setShowSixersRoster(true);
    setShowFlyersCard(null);
    setShowEaglesCard(null);
    setShowPhilliesCard(null);
  };
  const returnHome = () => {
    setShow(true);
    setShowEaglesRoster(false);
    setShowPhilliesRoster(false);
    setShowFlyersRoster(false);
    setShowSixersRoster(false);
    setShowEaglesCard(true);
    setShowPhilliesCard(true);
    setShowFlyersCard(true);
    setShowSixersCard(true);
  };

  return (
    <div className="teams">
      {show ? (
        <div>
          <div className="teams-intro">
            <h1 className="teams-h1">Click on a team to see their roster.</h1>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={returnHome}>Return to home</button>
        </div>
      )}
      <div className="team-cards">
        {showEaglesCard && <EaglesCard onClick={toggleShowEagles} />}
        {showEaglesRoster && !showEaglesCard && <EaglesRoster />}
        {showPhilliesCard && <PhilliesCard onClick={toggleShowPhillies} />}
        {showPhilliesRoster && !showPhilliesCard && <PhilliesRoster />}
        {showFlyersCard && <FlyersCard onClick={toggleShowFlyers} />}
        {showFlyersRoster && !showFlyersCard && <FlyersRoster />}
        {showSixersCard && <SixersCard onClick={toggleShowSixers} />}
        {showSixersRoster && !showSixersCard && <SixersRoster />}
      </div>
    </div>
  );
};

export default TeamCards;
