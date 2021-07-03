import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/managePassword.css";

function ManagePassword(props) {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInput = (text, setText) => {
    setText(text);
  };

  const handlePasswordSubmit = () => {
    console.log("password:", password);
    console.log("newPassword:", newPassword);
    console.log("confirmPassword:", confirmPassword);
    // window.location = "/profile";
  };

  return (
    <div className="password__container">
      <div className="password__box">
        <div className="password__title">Change Password</div>

        <div className="password__inputBx">
          <span className="password__label">Password</span>
          <input
            className="password__input"
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => handleInput(e.currentTarget.value, setPassword)}
          />
        </div>

        <div className="password__inputBx">
          <span className="password__label">New Password</span>
          <input
            className="password__input"
            type="password"
            value={newPassword}
            placeholder="new password"
            onChange={(e) => handleInput(e.currentTarget.value, setNewPassword)}
          />
        </div>

        <div className="password__inputBx">
          <span className="password__label">Confirm Password</span>
          <input
            className="password__input"
            type="password"
            value={confirmPassword}
            placeholder="confirm new password"
            onChange={(e) =>
              handleInput(e.currentTarget.value, setConfirmPassword)
            }
          />
        </div>

        <Link to="/profile">
          <div className="password__btn" onClick={handlePasswordSubmit}>
            Submit
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ManagePassword;
