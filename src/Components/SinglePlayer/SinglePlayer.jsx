import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "./SinglePlayer.css";

const SinglePlayer = (props) => {
  let {
    name,
    age,
    heigth,
    weight,
    current_team,
    position,
    fee,
    img,
    total_goals,
  } = props.player;
  let handleAddPlayers=props.handleAddPlayers;
  return (
    <div className="single-player-div">
      <div>
        <img className="player-img" src={img} alt="" />
        <p className="player-name">{name}</p>
      </div>
      <div className="player-info">
        <div className="personal-info">
          <p><strong>Age : </strong> {age}</p>
          <p><strong>Height :</strong> {heigth} cm</p>
          <p><strong>Weight :</strong> {weight} kg</p>
          <p><strong>Team :</strong> {current_team}</p>
        </div>
        <div className="professional-info">
          <p><strong>Goals :</strong> {total_goals}</p>

          <p><strong>Position :</strong> {position}</p>

          <p><strong>Fee :</strong> € {fee}</p>
        </div>
      </div>
      <div>
        <button onClick={()=>handleAddPlayers(props.player)} className="btn add-button"><FontAwesomeIcon icon={faUser} /> Add </button>
      </div>
    </div>
  );
};

export default SinglePlayer;
