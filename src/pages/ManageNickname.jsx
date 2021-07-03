import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../css/manageNickname.css";

function ManageNickname(props) {
  const [nickname, setNickname] = useState("");

  const handleInput = (text, setText) => {
    setText(text);
  };

  const handlePasswordSubmit = () => {
    // console.log("password:", password);
    // console.log("newPassword:", newPassword);
    // console.log("confirmPassword:", confirmPassword);
    // window.location = "/profile";
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
          <Link to="/profile">
            <div className="nickname__btn" onClick={handlePasswordSubmit}>
              Submit
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ManageNickname;
