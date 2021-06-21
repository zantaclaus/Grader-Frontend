import React from "react";
import "../css/taskSubmit.css";

function TaskSubmit({ handleCodeSubmit }) {
  return (
    <div className="task__submit">
      <button id="submit" type="submit" onClick={handleCodeSubmit}>
        Submit
      </button>
      <label htmlFor="submit" className="submit__label">
        Submit
      </label>
    </div>
  );
}

export default TaskSubmit;
