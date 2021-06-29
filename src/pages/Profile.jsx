import React from "react";
import ProfileBox from "../components/ProfileBox";
import ProfileRank from "../components/ProfileRank";
import ProfileProgress from "../components/ProfileProgress";
import "../css/profile.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "../redux/actions/userAction";

function Profile(props) {
  const user = useSelector((state) => state.user.user);
  const userDetail = useSelector((state) => state.userDetail.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user.id) {
      dispatch(fetchUserDetail(user.id));
    }
  }, [user.id, dispatch]);

  return (
    <React.Fragment>
      {!userDetail ? (
        <h1>Loading...</h1>
      ) : (
        <div className="profile__background">
          <div className="profile__container">
            <ProfileBox />
            <div className="profile__propoties">
              <ProfileRank />
              <ProfileProgress />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Profile;
