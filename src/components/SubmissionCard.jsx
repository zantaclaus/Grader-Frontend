import React from "react";
import { Link } from "react-router-dom";
import "../css/submissionCard.css";

function SubmissionCard({ title, result, time, status, questionId }) {
  let statusClass = "";
  if (status === 0) statusClass = "submission__card";
  else if (status === 1) statusClass = "submission__card status--error";
  else if (status === 2) statusClass = "submission__card status--passed";
  return (
    <React.Fragment>
      <div className={statusClass}>
        <Link to={`/tasks/${questionId}`} className="card__link">
          <div className="submission__card__title">{title}</div>
          <div className="submission__card__content">
            <div className="submission__card__text">{result}</div>
            <div className="submission__card__text">{time}</div>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default SubmissionCard;
