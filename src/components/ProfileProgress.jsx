import React, { useEffect } from "react";
import Aos from "aos";

import "../css/profileProgress.css";

function ProfileProgress(props) {
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
            <div className="bar__percent">80%</div>
            <div className="bar">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
          <div className="submitted__container">
            <div className="submitted__title">Submitted</div>
            <div className="submitted__count">123</div>
            <div className="submitted__unit">submit</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileProgress;
