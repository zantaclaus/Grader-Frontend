import axios from "axios";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import "../css/submission.css";
import { useSelector } from "react-redux";
import SubmissionCard from "../components/SubmissionCard";
import Loading from "./../components/Loading";

function Submission(props) {
  const user = useSelector((state) => state.user.user);
  const userId = user.id;
  const [submission, setSubmission] = useState([]);

  useEffect(() => {
    const fetch = async () => {
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
    };
    if (userId) fetch();
  }, [userId]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <React.Fragment>
      {Object.keys(submission).length === 0 ? (
        <Loading />
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
