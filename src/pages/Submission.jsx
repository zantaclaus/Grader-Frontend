import axios from "axios";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import "../css/submission.css";
import { useSelector } from "react-redux";
import SubmissionCard from "../components/SubmissionCard";

function Submission(props) {
  const user = useSelector((state) => state.user.user);
  const userId = user.id;
  const [submission, setSubmission] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const token = localStorage.getItem("token");
        const header = {
          headers: {
            Authorization: token,
          },
        };
        const submission = await axios.get(
          `https://api.ceboostup.com/api/history?id=${userId}`,
          header
        );
        setSubmission(submission.data);
        console.log(submission.data);
      } catch (ex) {
        if (ex.response && ex.response.status === 401) {
          window.location = "/logout";
        }
      }
    };
    if (userId) fetch();
  }, [userId]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <React.Fragment>
      {Object.keys(submission).length === 0 ? (
        <div className="submission__loading__page">
          <h1>
            No Submission
            <span className="loadingDot dot1"> .</span>
            <span className="loadingDot dot2">.</span>
            <span className="loadingDot dot3">.</span>
          </h1>
        </div>
      ) : (
        <React.Fragment>
          <div className="submission__page">
            <div className="submission__container">
              <div className="submission__bar submission__header"></div>
              <div className="tasks__content">
                <div
                  data-aos="fade-right"
                  className="tasks__content__container"
                >
                  {submission.map((submit) => (
                    <SubmissionCard
                      key={submit.time}
                      title={submit.title}
                      result={submit.result}
                      time={submit.time}
                      status={submit.status}
                      questionId={submit.questionId}
                    />
                  ))}
                </div>
              </div>
              <div className="submission__bar submission__footer"></div>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Submission;
