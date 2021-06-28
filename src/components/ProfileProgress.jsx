import React, { useEffect } from "react";
import Aos from "aos";

import "../css/profileProgress.css";
import { useSelector } from "react-redux";

function ProfileProgress(props) {
  const userDetail = useSelector((state) => state.userDetail.user);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div data-aos="flip-up">
      <div className="card card__profile progress__box">
        <div className="card__title">
          <h1>Your Progress</h1>
        </div>
        <div className="card__content progress__content">
          <div className="bar__container">
            <div className="bar__title">Progress</div>
            <div className="bar__percent">{userDetail.progress}%</div>
            <div className="bar">
              <span style={{ width: `${userDetail.progress}%` }}></span>
            </div>
          </div>
          <div className="submitted__container">
            <div className="submitted__title">Submitted</div>
            <div className="submitted__count">{userDetail.commit}</div>
            <div className="submitted__unit">submit</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileProgress;
