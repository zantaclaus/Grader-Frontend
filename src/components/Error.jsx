import React from "react";
import "../css/error.css";
import { RiErrorWarningLine } from "react-icons/ri";

function Error({ error }) {
  return (
    <React.Fragment>
      {error && (
        <div className="error__container">
          <RiErrorWarningLine
            color="red"
            size="2.5rem"
            className="error__icon"
          />
          <span className="error__content">{error}</span>
        </div>
      )}
    </React.Fragment>
  );
}

export default Error;
