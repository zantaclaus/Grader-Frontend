import axios from "axios";
import React from "react";
import _ from "lodash";
import { useState, useEffect } from "react";
import "../css/codeBoard.css";
import { useSelector } from "react-redux";

function CodeBoard(props) {
  const task = useSelector((state) => state.task);
  const [linkActive, setlinkActive] = useState(1);
  const [arrCode, setArrCode] = useState([]);
  const [saveCode, setSaveCode] = useState([]);

  const toggleLink = (num) => {
    setlinkActive(num);
  };

  useEffect(() => {
    const fetch = async () => {
      const result = await axios(
        `https://api.ceboostup.com/api/finish-sub?questionId=${task._id}`
      );

      const arrCode = _.range(1, result.data.length + 1);
      setArrCode(arrCode);

      const saveCode = [];
      for (let i = 0; i < result.data.length; i++) {
        saveCode.push(
          result.data[i].code
            .replaceAll(" ", "&nbsp;")
            .replaceAll("\n", "<br/>")
        );
      }
      setSaveCode(saveCode);
    };
    fetch();
  }, [task._id]);

  return (
    <div className="codeBoard__container">
      <div className="codeBoard__title">TOP 5 FIRST SUBMITTED</div>
      <div className="codeBoard__grid">
        <div className="codeBoard__left">
          <ul className="codeBoard__link__group">
            {arrCode.map((code) => (
              <li
                onClick={() => toggleLink(code)}
                className={
                  code === linkActive
                    ? "codeBoard__link codeBoard__link--active"
                    : "codeBoard__link"
                }
              >
                #{code}
              </li>
            ))}
          </ul>
        </div>
        <div className="codeBoard__right">
          {linkActive === 1 && (
            <div dangerouslySetInnerHTML={{ __html: saveCode[0] }} />
          )}
          {linkActive === 2 && (
            <div dangerouslySetInnerHTML={{ __html: saveCode[1] }} />
          )}
          {linkActive === 3 && (
            <div dangerouslySetInnerHTML={{ __html: saveCode[2] }} />
          )}
          {linkActive === 4 && (
            <div dangerouslySetInnerHTML={{ __html: saveCode[3] }} />
          )}
          {linkActive === 5 && (
            <div dangerouslySetInnerHTML={{ __html: saveCode[4] }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default CodeBoard;
