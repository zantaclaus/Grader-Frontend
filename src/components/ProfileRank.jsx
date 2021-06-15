import React from "react";
// import rank from "../images/rank.png";
import "../css/profileRank.css";

function ProfileRank(props) {
  return (
    <div>
      <div className="card card__profile rank__box">
        <div className="card__title">
          <h1>Your Rank</h1>
        </div>
        <div className="card__content rank__content">
          <div className="rank__order">
            <h3>You are</h3>
            <h1>
              1<sup>st</sup>
            </h1>
            {/* <img src={rank} alt="" /> */}
          </div>
          <div className="rank__score">
            <h3>Your score</h3>
            <h1>14634</h1>
            <h3>points</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileRank;
