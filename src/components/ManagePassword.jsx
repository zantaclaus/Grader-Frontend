import React from "react";
import Error from "./Error";
import InputForm from "./InputForm";
import { encrypts } from "../services/authService";
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
    const token = localStorage.getItem("token");
    try {
      const header = {
        headers: {
          Authorization: token,
        },
      };
      const data = {
        oldPassword: encrypts(password),
        password: encrypts(newPassword),
        password2: encrypts(confirmPassword),
      };

      await axios.put(
        `https://api.ceboostup.com/api/password/${user.id}`,
        data,
        header
      );

      window.location = "/profile";
    } catch (ex) {
      if (ex.response) {
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
          {/* <span className="password__label">Password</span> */}
          {/* <input
            className="password__input"
            type="password"
            value={password}
            placeholder="password"
            autoFocus
            onChange={(e) => handleInput(e.currentTarget.value, setPassword)}
          /> */}
        </div>

        <div className="password__inputBx">
          <InputForm
            id="newPassword"
            value={newPassword}
            setValue={setNewPassword}
            label="New Password"
            type="password"
          />
          {/* <span className="password__label">New Password</span> */}
          {/* <input
            className="password__input"
            type="password"
            value={newPassword}
            placeholder="new password"
            onChange={(e) => handleInput(e.currentTarget.value, setNewPassword)}
          /> */}
        </div>

        <div className="password__inputBx">
          <InputForm
            id="comfirmPassword"
            value={confirmPassword}
            setValue={setConfirmPassword}
            label="Confirm Password"
            type="password"
          />
          {/* <span className="password__label">Confirm Password</span> */}
          {/* <input
            className="password__input"
            type="password"
            value={confirmPassword}
            placeholder="confirm new password"
            onChange={(e) =>
              handleInput(e.currentTarget.value, setConfirmPassword)
            }
          /> */}
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
