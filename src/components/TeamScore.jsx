import React from "react";
import "../css/teamScore.css";

function TeamScore(props) {
  return (
    <div>
      <header className="team__header">
        <h1>Team's Score</h1>
        <p>Score wil be refreshed on 23.59 p.m.</p>
      </header>
      <div className="team__content"></div>
    </div>
  );
}

export default TeamScore;
