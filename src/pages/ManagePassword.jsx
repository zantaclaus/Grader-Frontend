import React from "react";
import { Link } from "react-router-dom";
import "../css/managePassword.css";

function ManagePassword(props) {
  return (
    <div className="password__container">
      <div className="password__box">
        <div className="password__title">Change Password</div>

        <div className="password__inputBx">
          <span className="password__label">Password</span>
          <input className="password__input" type="password" />
        </div>

        <div className="password__inputBx">
          <span className="password__label">New Password</span>
          <input className="password__input" type="password" />
        </div>

        <div className="password__inputBx">
          <span className="password__label">Confirm Password</span>
          <input className="password__input" type="password" />
        </div>

        <Link to="/profile">
          <div className="password__btn">Submit</div>
        </Link>
      </div>
    </div>
  );
}

export default ManagePassword;
