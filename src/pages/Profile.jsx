import React from "react";
import ProfileBox from "../components/ProfileBox";
import ProfileRank from "../components/ProfileRank";
import ProfileProgress from "../components/ProfileProgress";
import "../css/profile.css";

function Profile(props) {
  return (
    <div className="profile__background">
      <div className="profile__container">
        <ProfileBox />
        <div className="profile__propoties">
          <ProfileRank />

          <ProfileProgress />
        </div>
      </div>
    </div>
  );
}

export default Profile;
