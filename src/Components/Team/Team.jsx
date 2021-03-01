import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import "./Team.css";

const Team = (props) => {
  console.log(props.teamMembers);
  let team = props.teamMembers;
  let fee = 0;
  for (let i = 0; i < team.length; i++) {
    fee += Number(team[i].fee);
  }
  console.log(fee);

  return (
    <div className="team-div">
      <div className="team-info">
        <div>
          <h2>Team Member: {team.length}</h2>
        </div>
        <div className="football-icon"><FontAwesomeIcon icon={faFutbol} /></div>
        <div>
          <h3>Total Budget : € {fee}</h3>
        </div>
      </div>
      <div className="all-members">
        {team.map((member) => {
          return (
            <div className="member-name">
              <h5><strong>{member.name}</strong></h5>
              <h5>Salary : € {member.fee}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
