import React, {useState} from "react";
import flyers from "../Rosters/Flyers";

const FlyersRoster = () => {
  const [position, setPosition] = useState("All");
  const filteredPositions = flyers.filter((currentPosition) => {
    if (position === "All") {
      return currentPosition;
    } else {
      return currentPosition.playerPosition === position;
    }
  });
  const handleFilter = (e) => {
    setPosition(e.target.value);
  };
  return (
    <div className="flyersRoster">
      <div className="flyers-filter">
        <label>Filter by position</label>
        <select value={position} onChange={handleFilter}>
          <option value="All">All</option>
          <option value="C">C</option>
          <option value="LW">LW</option>
          <option value="RW">RW</option>
          <option value="D">D</option>
          <option value="G">G</option>
        </select>
      </div>
      {filteredPositions.map((flyer) => {
        const {playerName, playerNumber, playerPosition} = flyer;
        return (
          <div className="flyersPlayer" key={playerNumber}>
            <h1 className="playerName">{playerName}</h1>
            <p className="roster-p">#{playerNumber}</p>
            <p className="roster-p">{playerPosition}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FlyersRoster;
