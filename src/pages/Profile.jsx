import React from "react";
import ProfileBox from "../components/ProfileBox";
import ProfileRank from "../components/ProfileRank";
import ProfileProgress from "../components/ProfileProgress";
import "../css/profile.css";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail, setUserDetail } from "../redux/actions/userAction";

function Profile(props) {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.id) {
      dispatch(fetchUserDetail(user.id));
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
