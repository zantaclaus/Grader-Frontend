import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "../css/managePassword.css";

function ManagePassword(props) {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const user = useSelector((state) => state.user.user);

  const handleInput = (text, setText) => {
    setText(text);
  };

  const handlePasswordSubmit = async () => {
    const data = {
      oldPassword: password,
      password: newPassword,
      password2: confirmPassword,
    };

    await fetch(`https://api.ceboostup.com/api/password/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    });

    window.location = "/profile";
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

        <div className="password__btn" onClick={handlePasswordSubmit}>
          Submit
        </div>
      </div>
    </div>
  );
}

export default ManagePassword;
