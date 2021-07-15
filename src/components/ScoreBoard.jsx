import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "../css/scoreBoard.css";
import { getGroup } from "../services/groupService";
import Loading from "../components/Loading";

function ScoreBoard() {
  const [scoreBoard, setScoreBoard] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await axios.get(`https://api.ceboostup.com/api/leader`);
        let newScoreBoard = result.data;
        for (let i = 0; i < result.data.length; i++) {
          newScoreBoard[i] = { ...newScoreBoard[i], id: i + 1 };
        }
        setScoreBoard(newScoreBoard);
        // console.log(newScoreBoard);
      } catch {
        alert("Fetch Scoreboard error");
      }
    };
    fetch();
  }, []);

  return (
    <React.Fragment>
      {Object.keys(scoreBoard).length === 0 ? (
        <Loading />
      ) : (
        <div className="leader__block">
          <div className="container">
            <header className="leader__header">
              <h1 className="leader__title">Score Board</h1>
              <p>Top 3 ranking doesn't sort by score.</p>
            </header>
            <div className="leader__content scoreboard__content">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {scoreBoard.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.nickName}</td>
                      <td>{getGroup(user.group)[0].name}</td>
                      <td>{user.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default ScoreBoard;
