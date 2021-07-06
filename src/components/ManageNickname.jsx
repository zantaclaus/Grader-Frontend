import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import "../css/manageNickname.css";

function ManageNickname(props) {
  const [nickname, setNickname] = useState("");
  const user = useSelector((state) => state.user.user);

  const handleInput = (text, setText) => {
    setText(text);
  };

  const handleNicknameSubmit = async () => {
    const data = {
      nickName: nickname,
    };

    await fetch(`https://api.ceboostup.com/api/user/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    });
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
