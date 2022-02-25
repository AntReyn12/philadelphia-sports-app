import React, {useState} from "react";
import phillies from "../Rosters/Phillies";

const PhilliesRoster = () => {
  const [position, setPosition] = useState("All");
  const filteredPositions = phillies.filter((currentPosition) => {
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
    <div className="philliesRoster">
      <div className="phillies-filter">
        <label>Filter by position</label>
        <select value={position} onChange={handleFilter}>
          <option value="All">All</option>
          <option value="RP">RP</option>
          <option value="SP">SP</option>
          <option value="C">C</option>
          <option value="1B">1B</option>
          <option value="2B">2B</option>
          <option value="3B">3B</option>
          <option value="SS">SS</option>
          <option value="RF">RF</option>
          <option value="CF">CF</option>
          <option value="LF">LF</option>
        </select>
      </div>
      {filteredPositions.map((phillie) => {
        const {playerName, playerNumber, playerPosition} = phillie;
        return (
          <div className="philliesPlayer" key={playerNumber}>
            <h1 className="playerName">{playerName}</h1>
            <p className="roster-p">#{playerNumber}</p>
            <p className="roster-p">{playerPosition}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PhilliesRoster;
