import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTask, removeSelectedTasks } from "../redux/actions/taskAction";

import TaskQuestion from "../components/TaskQuestion";
import TaskDetail from "../components/TaskDetail";
import TaskEditor from "../components/TaskEditor";
import BtnUpload from "../components/BtnUpload";
import "../css/task.css";
import TaskSubmit from "../components/TaskSubmit";

function NewTask(props) {
  const [code, setCode] = useState(`#include<stdio.h>
int main() 
{

    return 0;
}`);

  let task = useSelector((state) => state.task);
  const user = useSelector((state) => state.user.user);
  const { id: userId } = user;
  const { id: taskId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (taskId) dispatch(fetchTask(userId, taskId));
    return () => {
      dispatch(removeSelectedTasks());
    };
  }, [dispatch, userId, taskId]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const render = new FileReader();
    render.readAsText(file);
    render.onload = () => {
      setCode(render.result);
    };
  };

  const onInputClick = (event) => {
    event.target.value = ""; // Clear File
  };

  return (
    <form className="task__form">
      <div className="task__grid">
        <div className="task__left">
          <TaskQuestion />
        </div>
        <div className="task__right">
          <div className="detail__container">
            <TaskDetail
              title="Submitted Resulted"
              detail={task.result}
              header="header"
              content="resulted"
            />
            <TaskDetail
              title="Finished"
              detail={task.finished}
              header="header"
              content="finished"
            />
          </div>
          <TaskEditor code={code} setCode={setCode} />
          <div className="btn__container">
            <BtnUpload
              handleFileChange={handleFileChange}
              onInputClick={onInputClick}
            />
            <TaskSubmit />
          </div>
        </div>
      </div>
    </form>
  );
}

export default NewTask;
