import axios from "axios";
import React from "react";
import InputForm from "./InputForm";
import { useState } from "react";
import { useSelector } from "react-redux";

function ManageNickname(props) {
  const [nickname, setNickname] = useState("");
  const user = useSelector((state) => state.user.user);

  const handleNicknameSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const header = {
        headers: {
          Authorization: token,
        },
      };
      const data = {
        nickName: nickname,
      };
      await axios.put(
        `https://api.ceboostup.com/api/user/${user.id}`,
        data,
        header
      );
      window.location = "/profile";
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        window.location = "/logout";
      }
    }
  };

  return (
    <div className="password__container">
      <div className="password__box">
        <div className="password__title">Change Nickname</div>

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
