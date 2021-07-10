import React from "react";
import { useState } from "react";
import "../css/codeBoard.css";

function CodeBoard(props) {
  const [linkActive, setlinkActive] = useState(1);
  const arrCode = [1, 2, 3, 4, 5];

  const toggleLink = (num) => {
    setlinkActive(num);
  };

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
          {linkActive === 1 && <div>1</div>}
          {linkActive === 2 && <div>2</div>}
          {linkActive === 3 && <div>3</div>}
          {linkActive === 4 && <div>4</div>}
          {linkActive === 5 && <div>5</div>}
        </div>
      </div>
    </div>
  );
}

export default CodeBoard;
