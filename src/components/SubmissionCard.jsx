import React from "react";
import "../css/submissionCard.css";

function SubmissionCard({ title, result, time, status }) {
  return (
    <React.Fragment>
      <div className="submission__card">
        <div className="submission__card__title">{title}</div>
        <div className="submission__card__content">
          <div className="submission__card__text">{result}</div>
          <div className="submission__card__text">{time}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SubmissionCard;
