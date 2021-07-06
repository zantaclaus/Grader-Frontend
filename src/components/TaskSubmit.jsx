import React from "react";
import "../css/taskSubmit.css";
import { FaLocationArrow } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCode } from "../redux/actions/codeAction";
import { useState } from "react";

function TaskSubmit({ code, taskId, setforceRender, isDone, setIsDone }) {
  const user = useSelector((state) => state.user.user);
  const [inQueue, setInQueue] = useState({});
  const dispatch = useDispatch();

  const refreshPage = () => {
    setIsDone(true);
    setTimeout(() => {
      setIsDone(false);
      setforceRender({});
    }, 2000);
  };

  const handleCodeSubmit = async () => {
    dispatch(setCode(code));

    const data = {
      questionId: taskId,
      userId: user.id,
      code: code,
    };

    const response = await fetch(
      `https://compiler.ceboostup.com/check_result`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" },
      }
    );

    const result = await response.json();
    setInQueue(result);

    refreshPage();
  };

  return (
    <div className="task__submit btn--hover">
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

// await axios.post(`https://compiler.ceboostup.com/check_result`, {
//   questionId: taskId,
//   userId: user.id,
//   code: code,
//   input: input,
//   output: output,
// });
