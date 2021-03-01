import React from "react";
import "./Navbar.css";
import image from "../../images/1622445.jpg";

const Navbar = () => {
  return (
    <div className="navbar-div">
      <div className="nav-image-div">
        <img className="nav-image" src={image} alt="" />{" "}
      </div>
      <div className="navlist-div">
        <ul className="nav-ul">
          <li>
            <a href="">Home</a>{" "}
          </li>
          <li>
            <a href="/news">News</a>{" "}
          </li>
          <li>
            <a href="vedios">Vedios</a>{" "}
          </li>
          <li>
            <a href="matches">Matches</a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
