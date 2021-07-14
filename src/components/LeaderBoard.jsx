import React, { useEffect, useState } from "react";
import Aos from "aos";
import ProfileGroup from "./ProfileGroup";
import Loading from "./Loading";
import "../css/leaderBoard.css";
import axios from "axios";

function LeaderBoard(props) {
  const [leader, setLeader] = useState([]);
  const [index, setIndex] = useState([0, 1, 2]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await axios.get(`https://api.ceboostup.com/api/leader`);
        // console.log(result);
        const scoreBoard = result.data.scoreBoard;
        const topLeader =
          scoreBoard.length <= 1
            ? []
            : [scoreBoard[0], scoreBoard[1], scoreBoard[2]];
        setLeader(topLeader);
      } catch (ex) {
        if (ex.response && ex.response.status === 401) {
          window.location = "/logout";
        }
      }
    };
    fetch();
    const array = index.sort(() => Math.random() - 0.5);
    setIndex(array);
  }, [index]);
  // console.log(index);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <React.Fragment>
      {Object.keys(leader).length === 0 ? (
        <Loading />
      ) : (
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
                    <ProfileGroup userDetail={leader[index[0]]} />
                    <h1>{leader[index[0]].nickName}</h1>
                  </div>
                </div>
              </div>
              <div className="leader__card">
                <div className="face front">
                  <h1>O</h1>
                </div>
                <div className="face back">
                  <div className="back__content">
                    <ProfileGroup userDetail={leader[index[1]]} />
                    <h1>{leader[index[1]].nickName}</h1>
                  </div>
                </div>
              </div>
              <div className="leader__card">
                <div className="face front">
                  <h1>P</h1>
                </div>
                <div className="face back">
                  <div className="back__content">
                    <ProfileGroup userDetail={leader[index[2]]} />
                    <h1>{leader[index[2]].nickName}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default LeaderBoard;
