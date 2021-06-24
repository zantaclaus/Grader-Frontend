import React from "react";
import "../css/taskSubmit.css";
import { FaLocationArrow } from "react-icons/fa";

function TaskSubmit({ handleCodeSubmit }) {
  return (
    <div className="task__submit">
      <button id="submit" type="submit" onClick={handleCodeSubmit}>
        Submit
      </button>
      <label htmlFor="submit" className="submit__label">
        <FaLocationArrow size="1.8rem" className="submit__icon" />
        Submit
      </label>
    </div>
  );
}

export default TaskSubmit;
