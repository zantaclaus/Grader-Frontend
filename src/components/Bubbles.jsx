import React from "react";
import bubble from "../images/bubble.webp";
import "../css/bubble.css";

function Bubbles(props) {
  return (
    <div className="bubbles">
      <img src={bubble} alt="" />
      <img src={bubble} alt="" />
      <img src={bubble} alt="" />
      <img src={bubble} alt="" />
      <img src={bubble} alt="" />
      <img src={bubble} alt="" />
      <img src={bubble} alt="" />
    </div>
  );
}

export default Bubbles;
