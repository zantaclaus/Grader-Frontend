import React from "react";
import "../css/possibleResult.css";
import BoxList from "./BoxList";
import { getResults } from "../services/resultSevice";

function PossibleResult(props) {
  const results = getResults();
  return (
    <div className="container possibleResult">
      <div className="possibleResult__title">Possible Result</div>
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
