import React from "react";
import "../css/error.css";
import { RiErrorWarningLine } from "react-icons/ri";

function Error({ error }) {
  return (
    <React.Fragment>
      {error && (
        <React.Fragment>
          <RiErrorWarningLine color="red" />
          <span>{error}</span>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Error;
