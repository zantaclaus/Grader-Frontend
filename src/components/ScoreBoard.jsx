import React from "react";
import "../css/scoreBoard.css";
import { getGroup } from "../services/groupService";

function ScoreBoard({ data }) {
  let number = 1;
  //   const team = data.map((user) => getGroup(user.group)[0]);
  //   console.log(team);
  return (
    <div className="leader__block">
      <div className="container">
        <header className="leader__header">
          <h1 className="leader__title">Score Board</h1>
          <p>Top 3 ranking doesn't sort by score.</p>
        </header>
        <div className="leader__content scoreboard__content">
          <table>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Team</th>
              <th>Score</th>
            </tr>
            {/* {data.map((user) => (
              <tr key={user.nickName}>
                <td>{number}</td>
                <td>{user.nickName}</td>
                <td>getGroup(user.group)[0}</td>
                <td>{user.score}</td>
              </tr>
            ))} */}
          </table>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
