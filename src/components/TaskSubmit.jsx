import React from "react";
import "../css/taskSubmit.css";
import { FaLocationArrow } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";

function TaskSubmit({ code, taskId }) {
  const user = useSelector((state) => state.user.user);

  function autoRefresh(t) {
    setTimeout("location.reload(true)", t);
  }

  const handleCodeSubmit = async () => {
    await axios.post(
      `https://api.ceboostup.com/api/submit?userId=${user.id}&questionId=${taskId}`,
      { code: code }
    );
    autoRefresh();
  };

  return (
    <div className="task__submit">
      <button id="submit" type="submit" onClick={handleCodeSubmit}>
        Submit
      </button>
      <label htmlFor="submit" className="submit__label">
        <FaLocationArrow size="1.8rem" className="submit__icon" />
        Submit
      </label>
      {/* {response ? <h1>{response}</h1> : null} */}
    </div>
  );
}

export default TaskSubmit;
