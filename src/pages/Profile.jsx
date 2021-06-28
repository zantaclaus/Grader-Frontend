import React from "react";
import ProfileBox from "../components/ProfileBox";
import ProfileRank from "../components/ProfileRank";
import ProfileProgress from "../components/ProfileProgress";
import "../css/profile.css";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Profile(props) {
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (user.id) {
      const fetchUser = async () => {
        const response = await axios.get(
          `https://api.ceboostup.com/api/user?id=${user.id}`
        );
        console.log("user", response.data);
      };

      fetchUser();
    }
  });

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
