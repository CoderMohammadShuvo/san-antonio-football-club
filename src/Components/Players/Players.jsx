import React, { useEffect, useState } from "react";
import "./Players.css";
import fakePlayers from "../../fakeData/fakePlayers.js";
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import Team from "../Team/Team";

const Players = () => {
  let [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(fakePlayers);
  }, []);

  let [teamMembers, setTeamMembers] = useState([]);
  let handleAddPlayers = (member) => {
    if (teamMembers.indexOf(member) === -1) {
      let newTeam = [...teamMembers, member];
      setTeamMembers(newTeam);
    } else {
      removeMember(teamMembers, member);
    }
  };

  let removeMember = (memberArray, currentMember) => {
    let memberIndex = memberArray.indexOf(currentMember);
    console.log("index", memberIndex);
    memberArray.splice(memberIndex, 1);
    setTeamMembers([...memberArray]);
  };

  return (
    <div>
      <Team teamMembers={teamMembers} />
      <div className="players-div">
        <div>
          <h2>Player Profiles</h2>
        </div>
        <div className="players-profile-div">
          {players.map((player) => {
            return (
              <SinglePlayer
                player={player}
                key={player.id}
                handleAddPlayers={handleAddPlayers}
              ></SinglePlayer>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Players;
