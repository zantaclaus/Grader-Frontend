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

function Profile(props) {
  const user = useSelector((state) => state.user.user);
  const userDetail = useSelector((state) => state.userDetail.user);

  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    console.log("modal:", modal);
    setModal(!modal);
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
            <ProfileBox toggleModal={toggleModal} />
            <div className="profile__propoties">
              <ProfileRank />
              <ProfileProgress />
            </div>
          </div>
          <ModalNickname modal={modal} toggleModal={toggleModal} />
        </div>
      )}
    </React.Fragment>
  );
}

export default Profile;
