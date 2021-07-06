import React from "react";
import Error from "./Error";
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

  const handleInput = (text, setText) => {
    setText(text);
  };

  const handlePasswordSubmit = async () => {
    try {
      const data = {
        oldPassword: password,
        password: newPassword,
        password2: confirmPassword,
      };

      await axios.put(
        `https://api.ceboostup.com/api/password/${user.id}`,
        data
      );

      window.location = "/profile";
    } catch (ex) {
      if (ex.response) {
        console.log("yo");
        const errors = { ...error };
        errors.IncorrectOldPassword = ex.response.data.IncorrectOldPassword;
        errors.password = ex.response.data.password;
        errors.password2 = ex.response.data.password2;
        setError(errors);
      }
    }

    // await fetch(`https://api.ceboostup.com/api/password/${user.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify(data),
    //   headers: { "Content-type": "application/json" },
    // }).catch((ex) => {
    //   if (ex.response) {
    //     const errors = { ...error };
    //     errors.username = ex.response.data.IncorrectOldPassword;
    //     errors.password = ex.response.data.password;
    //     errors.password2 = ex.response.data.password2;
    //     setError(error);
    //   }
    // });
    // console.log("Hello");

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

        <div className="password__validate">
          <Error error={error.IncorrectOldPassword} />
          <Error error={error.password} />
          <Error error={error.password2} />
          {/* {error && <h1> Hello{error.password2}</h1>} */}
        </div>

        <div className="password__btn" onClick={handlePasswordSubmit}>
          Submit
        </div>
      </div>
    </div>
  );
}

export default ManagePassword;
