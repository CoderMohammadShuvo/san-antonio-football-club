import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import logo from "../../images/football logo.png";
import "./Welcome.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Welcome = () => {
  return (
    <div className="welcome-div">
      <div className="slogan-div">
        <h1>
          The Future of <span className="football">Football</span> is Here
        </h1>
        <button className="btn btn-lg learn-button">Learn More  <FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
      <div className="logo-div">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Welcome;
