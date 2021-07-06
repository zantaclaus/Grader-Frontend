import React from "react";
import "../css/possibleResult.css";
import BoxList from "./BoxList";

function PossibleResult(props) {
  return (
    <div className="block container possibleResult">
      <div className="possibleResult__title">Possible Result</div>
      <div className="possibleResult__content">
        <BoxList icon="P" title="Pass" content="Pass one testcase." />
      </div>
    </div>
  );
}

export default PossibleResult;
