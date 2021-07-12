import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/submission.css";
import { useSelector } from "react-redux";
// import { IoChevronDownOutline } from "react-icons/io5";
import SubmissionCard from "../components/SubmissionCard";
import Loading from "./../components/Loading";

function Submission(props) {
  const user = useSelector((state) => state.user.user);
  const [submission, setSubmission] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const header = {
      headers: {
        Authorization: token,
      },
    };
    const fetch = async () => {
      const submission = await axios.get(
        `https://api.ceboostup.com/api/history?id=${user.id}`,
        header
      );
      console.log("data", submission);
      setSubmission(submission.data);
    };
    if (user) fetch();
  }, [user]);

  // console.log("log", submission);
  return (
    <React.Fragment>
      {submission && (
        <React.Fragment>
          <div className="submission__page">
            <div className="submission__container">
              <div className="submission__bar"></div>
              <div className="tasks__content">
                <div className="tasks__content__container">
                  {submission.map((submit) => (
                    <SubmissionCard
                      key={submit.time}
                      title={submit.title}
                      result={submit.result}
                      time={submit.time}
                    />
                  ))}
                </div>
              </div>
              <div className="submission__bar"></div>
            </div>
          </div>
        </React.Fragment>
      )}
      {!submission && <Loading />}
    </React.Fragment>
  );
}

export default Submission;
