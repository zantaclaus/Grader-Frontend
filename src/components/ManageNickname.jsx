import React from "react";
import { useState } from "react";

import "../css/manageNickname.css";

function ManageNickname(props) {
  const [nickname, setNickname] = useState("");

  const handleInput = (text, setText) => {
    setText(text);
  };

  const handleNicknameSubmit = () => {
    window.location = "/profile";
  };

  return (
    <div className="nickname__container">
      <div className="nickname__box">
        <div className="form">
          <input
            type="text"
            id="nickname"
            className="nickname__input"
            placeholder=" "
            autoComplete="off"
            value={nickname}
            onChange={(e) => handleInput(e.currentTarget.value, setNickname)}
          />
          <label htmlFor="nickname" className="nickname__label">
            Nickname
          </label>

          <div className="nickname__btn" onClick={handleNicknameSubmit}>
            Submit
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageNickname;
