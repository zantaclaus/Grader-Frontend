import React from "react";
import "../css/taskSubmit.css";
import { FaLocationArrow } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCode } from "../redux/actions/codeAction";
// import { useState } from "react";

function TaskSubmit({ code, taskId, setforceRender, isDone, setIsDone }) {
  const user = useSelector((state) => state.user.user);
  const task = useSelector((state) => state.task);

  // const [inQueue, setInQueue] = useState({});
  const dispatch = useDispatch();

  const refreshPage = () => {
    setTimeout(() => {
      setIsDone(false);
      setforceRender({});
    }, 2000);
  };

  const handleCodeSubmit = async () => {
    setIsDone(true);
    dispatch(setCode(code));

    const data = {
      questionId: taskId,
      userId: user.id,
      code: code,
    };

    await fetch(`https://compiler.ceboostup.com/check_result`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    });

    // const result = await response.json();
    // setInQueue(result);

    refreshPage();
  };

  return (
    <React.Fragment>
      {task.number !== 255 && (
        <div className="task__submit btn--hover">
          <button
            id="submit"
            type="submit"
            onClick={handleCodeSubmit}
            disabled={isDone}
          >
            Submit
          </button>
          <label htmlFor="submit" className="submit__label">
            <FaLocationArrow size="1.8rem" className="submit__icon" />
            Submit
          </label>
        </div>
      )}
      {task.number === 255 && (
        <div className="task__submit btn--hover">
          <button id="submit" type="submit" onClick={handleCodeSubmit}>
            Submit
          </button>
          <span
            id="Disable"
            className="disableSubmit"
            dangerouslySetInnerHTML={{ __html: `<!-- Remove me -->` }}
          ></span>
          <label htmlFor="submit" className="submit__label">
            <FaLocationArrow size="1.8rem" className="submit__icon" />
            Submit
          </label>
        </div>
      )}
    </React.Fragment>
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
