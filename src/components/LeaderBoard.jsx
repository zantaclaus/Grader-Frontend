import React from "react";
import team4 from "../images/team4.webp";
import team2 from "../images/team2.webp";
import team3 from "../images/team3.webp";
import user from "../images/user.png";
import "../css/leaderBoard.css";

function LeaderBoard(props) {
  return (
    <div className="container">
      <header className="leader__header">
        <h1>Leader Board</h1>
        <p>Ranking wil be refreshed on 23.59 p.m.</p>
      </header>
      <div className="leader__content">
        <div className="leader__card">
          <img src={user} alt="" className="leader__logo" />
          <span className="leader__username">Zantaclaus</span>
        </div>
        <div className="leader__card">
          <img src={user} alt="" className="leader__logo" />
        </div>
        <div className="leader__card">
          <img src={user} alt="" className="leader__logo" />
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
