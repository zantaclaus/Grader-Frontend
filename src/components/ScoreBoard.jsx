import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "../css/scoreBoard.css";
import { getGroup } from "../services/groupService";
import Loading from "../components/Loading";
import { paginate } from "../services/paginateService";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useSelector } from "react-redux";

function ScoreBoard() {
  const userDetail = useSelector((state) => state.user.user);
  const [scoreBoard, setScoreBoard] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const pageIncreaseHandle = () => {
    setCurrentPage(currentPage + 1);
  };

  const pageDecreaseHandle = () => {
    setCurrentPage(currentPage - 1);
  };

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

  const sliceProblems = paginate(scoreBoard, currentPage, pageSize);
  const lastPage = Math.ceil(scoreBoard.length / pageSize);

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
              <table className="noselect">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {sliceProblems.map((user) => (
                    <tr
                      key={user.id}
                      className={
                        userDetail.nickName === user.nickName
                          ? "scoreboard__highlight"
                          : ""
                      }
                    >
                      <td>{user.id}</td>
                      <td>{user.nickName}</td>
                      <td>{getGroup(user.group)[0].name}</td>
                      <td>{user.score}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={4}>
                      <div className="scoreboard__arrow__container">
                        {currentPage !== 1 && (
                          <IoMdArrowDropleftCircle
                            size="3.4rem"
                            className="scoreboard__arrow"
                            onClick={() => pageDecreaseHandle()}
                          />
                        )}
                        {currentPage !== lastPage && (
                          <IoMdArrowDroprightCircle
                            size="3.4rem"
                            className="scoreboard__arrow"
                            onClick={() => pageIncreaseHandle()}
                          />
                        )}
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default ScoreBoard;
