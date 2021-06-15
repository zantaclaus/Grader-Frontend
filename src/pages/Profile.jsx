import React from "react";
import ProfileBox from "../components/ProfileBox";
import ProfileRank from "../components/ProfileRank";
// import ProfileProgress from "../components/ProfileProgress";

function Profile(props) {
  return (
    <div className="profile__container">
      <ProfileBox />
      <ProfileRank />
      <ProfileRank />
      {/* <ProfileProgress /> */}
    </div>
  );
}

export default Profile;
