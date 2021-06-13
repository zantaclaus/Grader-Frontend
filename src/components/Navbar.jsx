import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="logo">
        <h3>CE BOOTSUP</h3>
      </div>
      <div className="nav-list">
        <ul>
          <li className="nav-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/home">Tasks</Link>
          </li>
          <li className="nav-item">
            <Link to="/home">GruideBook</Link>{" "}
          </li>
          <li className="nav-item">
            <Link to="/home">Profile</Link>
          </li>
          <li className="nav-item">
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
