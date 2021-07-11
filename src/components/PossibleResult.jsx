import React from "react";
import "../css/possibleResult.css";
import BoxList from "./BoxList";
import { getResults } from "../services/resultSevice";

function PossibleResult(props) {
  const results = getResults();
  return (
    <div className="possibleResult">
      <div className="guideBook__title">Possible Result</div>
      <div className="guideBook__tagline">
        A result you will be received after a code submission. A different
        character means a different result.
      </div>
      <div className="possibleResult__content">
        {results.map((result) => (
          <BoxList
            key={result.id}
            icon={result.icon}
            title={result.title}
            content={result.content}
          />
        ))}
      </div>
    </div>
  );
}

export default PossibleResult;
