import React, { useEffect } from "react";
import Aos from "aos";

// import { Link } from "react-router-dom";
import user from "../images/user.png";
import "../css/profileBox.css";
import { useSelector } from "react-redux";

function ProfileBox({ toggleModal }) {
  const userDetail = useSelector((state) => state.userDetail.user);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="flip-right">
      <div className="card card__profile profile__box">
        <div className="card__title profile__title">
          <h1>Your Profile</h1>
        </div>
        <div className="card__content profile__content">
          <div className="profile__image">
            <img src={user} alt="" />
          </div>
          <div className="profile__details">
            <h2>
              Username : <span>{userDetail.username}</span>
            </h2>
            <h2>
              Nickname : <span>{userDetail.nickName}</span>
            </h2>
            <h2>
              Team : <span>{userDetail.group}</span>
            </h2>
          </div>
          <div className="profile__btn" onClick={toggleModal}>
            Account Manage
          </div>
          {/* <Link to="/manage" className="profile__btn">
            Account Manage
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default ProfileBox;
