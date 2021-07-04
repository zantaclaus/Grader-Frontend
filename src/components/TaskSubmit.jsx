import React from "react";
import "../css/taskSubmit.css";
import { FaLocationArrow } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCode } from "../redux/actions/codeAction";
// import axios from "axios";

function TaskSubmit({ code, taskId, input, output, setforceRender }) {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const refreshPage = () => {
    setforceRender({});
    // window.location.reload();
  };

  const handleCodeSubmit = async () => {
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
    // await axios.post(`https://compiler.ceboostup.com/check_result`, {
    //   questionId: taskId,
    //   userId: user.id,
    //   code: code,
    //   input: input,
    //   output: output,
    // });
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
      {/* {response ? <h1>{response}</h1> : null} */}
    </div>
  );
}

export default TaskSubmit;
