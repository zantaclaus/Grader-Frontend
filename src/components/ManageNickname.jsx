import axios from "axios";
import React from "react";
import InputForm from "./InputForm";
import { useState } from "react";
import { useSelector } from "react-redux";

function ManageNickname(props) {
  const [nickname, setNickname] = useState("");
  const user = useSelector((state) => state.user.user);

  const handleNicknameSubmit = async () => {
    const data = {
      nickName: nickname,
    };
    await axios.put(`https://api.ceboostup.com/api/user/${user.id}`, data);
    window.location = "/profile";
  };

  return (
    <div className="password__container">
      <div className="password__box">
        <div className="password__title">Change NIckname</div>

        <InputForm
          id="nickname"
          value={nickname}
          setValue={setNickname}
          label="Nickname"
          type="text"
        />

        <div className="password__btn" onClick={handleNicknameSubmit}>
          Submit
        </div>
      </div>
    </div>
  );
}

export default ManageNickname;
