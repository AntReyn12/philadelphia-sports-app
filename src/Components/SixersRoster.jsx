import React, {useState} from "react";
import sixers from "../Rosters/Sixers";

const SixersRoster = () => {
  const [position, setPosition] = useState("All");
  const filteredPositions = sixers.filter((currentPosition) => {
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
    <div className="sixersRoster">
      <div className="sixers-filter">
        <label>Filter by position</label>
        <select value={position} onChange={handleFilter}>
          <option value="All">All</option>
          <option value="PG">PG</option>
          <option value="SG">SG</option>
          <option value="SF">SF</option>
          <option value="PF">PF</option>
          <option value="C">C</option>
        </select>
      </div>
      {filteredPositions.map((sixer) => {
        const {playerName, playerNumber, playerPosition} = sixer;
        return (
          <div className="sixersPlayer" key={playerNumber}>
            <h1 className="playerName">{playerName}</h1>
            <p className="roster-p">#{playerNumber}</p>
            <p className="roster-p">{playerPosition}</p>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default SixersRoster;
