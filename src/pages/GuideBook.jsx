import React from "react";
import PossibleResult from "../components/PossibleResult";
import Bubbles from "../components/Bubbles";
import "../css/guidebook.css";

function GuideBook(props) {
  return (
    <div className="guide__page">
      <Bubbles />
      <PossibleResult />
    </div>
  );
}

export default GuideBook;
