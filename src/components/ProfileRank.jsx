import React, { useEffect } from "react";
import Aos from "aos";
import team2 from "../images/team2.webp";
import "../css/profileRank.css";

function ProfileRank(props) {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div data-aos="flip-down">
      <div className="card card__profile rank__box">
        <div className="card__title">
          <h1>Your Rank</h1>
        </div>
        <div className="card__content rank__content">
          <div className="rank__team">
            <h3>You are</h3>
            <img className="team__logo" src={team2} alt="" />
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
