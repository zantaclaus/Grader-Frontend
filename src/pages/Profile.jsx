import React from "react";
import ProfileBox from "../components/ProfileBox";
import ProfileRank from "../components/ProfileRank";
import ProfileProgress from "../components/ProfileProgress";
import "../css/profile.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "../redux/actions/userAction";
import Loading from "../components/Loading";
import ModalNickname from "../components/ModalNickname";
import { useState } from "react";
import ModalPassword from "../components/ModalPassword";

function Profile(props) {
  const user = useSelector((state) => state.user.user);
  const userDetail = useSelector((state) => state.userDetail.user);

  const dispatch = useDispatch();

  const [modalNickname, setModalNickname] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);

  const toggleModalNickname = () => {
    console.log("Nickname");
    setModalNickname(!modalNickname);
  };

  const toggleModalPassword = () => {
    console.log("Password");
    setModalPassword(!modalPassword);
  };

  useEffect(() => {
    if (user.id) {
      dispatch(fetchUserDetail(user.id));
    }
  }, [user.id, dispatch]);

  return (
    <React.Fragment>
      {!userDetail ? (
        <Loading />
      ) : (
        <div className="profile__background">
          <div className="profile__container">
            <ProfileBox
              toggleModalNickname={toggleModalNickname}
              toggleModalPassword={toggleModalPassword}
            />
            <div className="profile__propoties">
              <ProfileRank />
              <ProfileProgress />
            </div>
          </div>
          <ModalNickname
            modal={modalNickname}
            toggleModal={toggleModalNickname}
          />
          <ModalPassword
            modal={modalPassword}
            toggleModal={toggleModalPassword}
          />
        </div>
      )}
    </React.Fragment>
  );
}

export default Profile;
