import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "../css/scoreBoard.css";
import { getGroup } from "../services/groupService";
import Loading from "../components/Loading";
import { paginate } from "../services/paginateService";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { FaCrown } from "react-icons/fa";
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

  const markClass = (group) => {
    switch (group) {
      case 0:
        return "mark mark--blacktip";
      case 1:
        return "mark mark--mako";
      case 2:
        return "mark mark--hammerhead";
      case 3:
        return "mark mark--whale";
      case 4:
        return "mark mark--lemon";
    }
  };

  const rankUser = (id) => {
    switch (id) {
      case 1:
        return <FaCrown size="2.5rem" className="crown--gold" />;
      case 2:
        return <FaCrown size="2.5rem" className="crown--silver" />;
      case 3:
        return <FaCrown size="2.5rem" className="crown--couper" />;
      default:
        return id;
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await axios.get(`https://api.ceboostup.com/api/leader`);
        console.log(result.data);
        let newScoreBoard = result.data.scoreBoard;
        for (let i = 0; i < result.data.scoreBoard.length; i++) {
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
              <h1 className="leader__title">Scoreboard</h1>
              {/* <p>Top 3 ranking doesn't sort by score.</p> */}
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
                      {/* <td>{user.id}</td> */}
                      <td>{rankUser(user.id)}</td>
                      <td>{user.nickName}</td>
                      <td>
                        <mark className={markClass(user.group)}>
                          {getGroup(user.group)[0].name}
                        </mark>
                      </td>
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
