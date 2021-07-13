import React from "react";
import Error from "./Error";
import InputForm from "./InputForm";
import { sha256 } from "js-sha256";
import { useState } from "react";
import { useSelector } from "react-redux";
import "../css/managePassword.css";
import axios from "axios";

function ManagePassword(props) {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const user = useSelector((state) => state.user.user);
  const [error, setError] = useState({});

  const handlePasswordSubmit = async () => {
    if (newPassword.length < 8 || confirmPassword.length < 8) {
      const errors = { ...error };
      errors.password = "Password must longer than 8 characters";
      setError(errors);

      return;
    }

    try {
      const token = localStorage.getItem("token");
      const header = {
        headers: {
          Authorization: token,
        },
      };
      const data = {
        oldPassword: sha256(password),
        password: sha256(newPassword),
        password2: sha256(confirmPassword),
      };

      await axios.put(
        `https://api.ceboostup.com/api/password/${user.id}`,
        data,
        header
      );

      window.location = "/logout";
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        window.location = "/logout";
      } else if (ex.response && ex.response.status === 400) {
        const errors = { ...error };
        errors.IncorrectOldPassword = ex.response.data.IncorrectOldPassword;
        errors.password = ex.response.data.password;
        errors.password2 = ex.response.data.password2;
        setError(errors);
      }
    }
  };

  return (
    <div className="password__container">
      <div className="password__box">
        <div className="password__title">Change Password</div>

        <div className="password__inputBx">
          <InputForm
            id="password"
            value={password}
            setValue={setPassword}
            label="Old Password"
            type="password"
          />
        </div>

        <div className="password__inputBx">
          <InputForm
            id="newPassword"
            value={newPassword}
            setValue={setNewPassword}
            label="New Password"
            type="password"
          />
        </div>

        <div className="password__inputBx">
          <InputForm
            id="comfirmPassword"
            value={confirmPassword}
            setValue={setConfirmPassword}
            label="Confirm Password"
            type="password"
          />
        </div>

        <div className="password__validate">
          <Error error={error.IncorrectOldPassword} />
          <Error error={error.password} />
          <Error error={error.password2} />
        </div>

        <div className="password__btn" onClick={handlePasswordSubmit}>
          Submit
        </div>
      </div>
    </div>
  );
}

export default ManagePassword;
