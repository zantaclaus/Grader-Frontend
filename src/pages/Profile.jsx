import React from "react";
import ProfileBox from "../components/ProfileBox";
import ProfileRank from "../components/ProfileRank";

function Profile(props) {
  return (
    <div className="profile__container">
      <ProfileBox />
      <ProfileRank />
    </div>
  );
}

export default Profile;
