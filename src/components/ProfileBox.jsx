import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import "../css/profileBox.css";

function ProfileBox(props) {
  return (
    <div>
      <div className="profile__box">
        <div className="profile__title">
          <h1>Your Profile</h1>
        </div>
        <div className="profile__content">
          <div className="profile__image">
            <img src={user} alt="" />
          </div>
          <div className="profile__details">
            <h2>
              Username : <span>น้องฉลาม</span>
            </h2>
            <h2>
              Nickname : <span>น้องฉลาม123</span>
            </h2>
            <h2>
              Team : <span>ชาหลามไง</span>
            </h2>
          </div>
          <Link to="/" className="profile__btn">
            Account Manage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileBox;
