import React, { useEffect } from "react";
import Aos from "aos";
import team1 from "../images/team1.webp";
import team2 from "../images/team2.webp";
import team3 from "../images/team3.webp";
import "../css/leaderBoard.css";

function LeaderBoard(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="leader__block">
      <div data-aos="zoom-in-up" className="container">
        <header className="leader__header">
          <h1 className="leader__title">Leader Board</h1>
          <p>Top 3 ranking doesn't sort by score.</p>
        </header>
        <div className="leader__content">
          <div className="leader__card">
            <div className="face front">
              <h1>T</h1>
            </div>
            <div className="face back">
              <div className="back__content">
                <img src={team1} alt="" />
                <h1>เทพจ๊ากซ่า1</h1>
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
                <h1>เทพจ๊ากซ่า2</h1>
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
                <h1>เทพจ๊ากซ่า3</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
