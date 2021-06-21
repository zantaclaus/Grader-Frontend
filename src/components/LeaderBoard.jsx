import React from "react";
import team1 from "../images/team1.webp";
import team2 from "../images/team2.webp";
import team3 from "../images/team3.webp";
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
          <div className="face front">
            <h1>T</h1>
          </div>
          <div className="face back">
            <div className="back__content">
              <img src={team1} alt="" />
              <h1>zantaclaus</h1>
            </div>
          </div>
        </div>
        <div className="leader__card">
          <div className="face front">
            <h1>O</h1>
          </div>
          <div className="face back">
            <div className="back__content">
              <img src={team2} alt="" />
              <h1>zantaclaus</h1>
            </div>
          </div>
        </div>
        <div className="leader__card">
          <div className="face front">
            <h1>P</h1>
          </div>
          <div className="face back">
            <div className="back__content">
              <img src={team3} alt="" />
              <h1>zantaclaus</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
