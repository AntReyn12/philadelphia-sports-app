import React, {useState} from "react";
import eagles from "../Rosters/Eagles";

const EaglesRoster = () => {
  const [position, setPosition] = useState("All");
  const filteredPositions = eagles.filter((currentPosition) => {
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
    <div className="eaglesRoster">
      <div className="eagles-filter">
        <label>Filter by position</label>
        <select value={position} onChange={handleFilter}>
          <option value="All">All</option>
          <option value="QB">QB</option>
          <option value="RB">RB</option>
          <option value="WR">WR</option>
          <option value="TE">TE</option>
          <option value="C">C</option>
          <option value="G">G</option>
          <option value="T">T</option>
          <option value="DE">DE</option>
          <option value="DT">DT</option>
          <option value="LB">LB</option>
          <option value="CB">CB</option>
          <option value="S">S</option>
          <option value="K">K</option>
          <option value="P">P</option>
          <option value="LS">LS</option>
        </select>
      </div>
      {filteredPositions.map((eagle) => {
        const {playerName, playerNumber, playerPosition} = eagle;
        return (
          <div className="eaglesPlayer" key={playerNumber}>
            <h1 className="playerName">{playerName}</h1>
            <p className="roster-p">#{playerNumber}</p>
            <p className="roster-p">{playerPosition}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EaglesRoster;
