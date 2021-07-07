import React, { useEffect } from "react";
import Aos from "aos";
import "../css/profileBox.css";
import ProfileGroup from "./ProfileGroup";
import { getGroup } from "../services/groupService";
import { useSelector } from "react-redux";

function ProfileBox({ toggleModalNickname, toggleModalPassword }) {
  const userDetail = useSelector((state) => state.userDetail.user);
  const group = getGroup(userDetail.group)[0];

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
            <ProfileGroup userDetail={userDetail} />
          </div>
          <div className="profile__details">
            <h2>
              Username : <span>{userDetail.username}</span>
            </h2>
            <h2>
              Nickname : <span>{userDetail.nickName}</span>
            </h2>
            <h2>
              Team : <span>{group.name}</span>
            </h2>
          </div>
          <div className="btn__row">
            <div className="profile__btn" onClick={toggleModalNickname}>
              Nickname
            </div>
            <div className="profile__btn" onClick={toggleModalPassword}>
              Password
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBox;
