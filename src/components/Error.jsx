import React from "react";
import "../css/error.css";

function Error({ error }) {
  return <div>{error && <p>{error}</p>}</div>;
}

export default Error;
