import React from "react";
import { useState, useEffect } from "react";
import "../css/tooltip.css";

function Tooltip({ detail }) {
  const [tooltip, setTooltip] = useState([]);

  useEffect(() => {
    let result = [];
    if (detail.includes("B")) result.push("B: Built Failed");
    if (detail.includes("C")) result.push("C: Created Failed");
    if (detail.includes("F")) result.push("F: Function is Banned");
    if (detail.includes("L")) result.push("L: Library is Banned");
    if (detail.includes("O")) result.push("O: Out of Buffer");
    if (detail.includes("P")) result.push("P: Pass");
    if (detail.includes("T")) result.push("T: Time out");
    if (detail.includes("W")) result.push("W: Testcase Error");
    if (detail.includes("X")) result.push("X: Runtime Error");
    if (detail.includes("Y")) result.push("Y: Grader Error");
    if (detail.includes("-")) result.push("-: Not Pass");
    setTooltip(result);
  }, [detail]);

  return (
    <div className="tooltip__container">
      {tooltip.map((text) => (
        <div key={text}>{text}</div>
      ))}
    </div>
  );
}

export default Tooltip;
