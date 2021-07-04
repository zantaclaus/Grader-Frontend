import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTask, removeSelectedTasks } from "../redux/actions/taskAction";
import TaskQuestion from "../components/TaskQuestion";
import TaskDetail from "../components/TaskDetail";
import TaskEditor from "../components/TaskEditor";
import BtnUpload from "../components/BtnUpload";
import TaskSubmit from "../components/TaskSubmit";
import BtnDownload from "../components/BtnDownload";
import Loading from "../components/Loading";
import "../css/task.css";

function Task(props) {
  const [forceRender, setforceRender] = useState({});
  const codeStore = useSelector((state) => state.code);
  const codeStater = codeStore
    ? codeStore
    : `#include<stdio.h>
int main() 
{
    
    return 0;
}`;
  const [code, setCode] = useState(codeStater);

  let task = useSelector((state) => state.task);
  const { linkPDF } = task;

  const user = useSelector((state) => state.user.user);
  const { id: userId } = user;
  const { id: taskId } = useParams();
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (taskId && userId) dispatch(fetchTask(userId, taskId));
    return () => {
      dispatch(removeSelectedTasks());
    };
  }, [dispatch, userId, taskId, forceRender]);

  return (
    <React.Fragment>
      {Object.keys(task).length === 0 ? (
        <Loading />
      ) : (
        <div className="task__form">
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
                  setforceRender={setforceRender}
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
                <BtnDownload linkPDF={linkPDF} />
                <div className="task__btn__right">
                  <BtnUpload
                    handleFileChange={handleFileChange}
                    onInputClick={onInputClick}
                  />
                  <TaskSubmit
                    code={code}
                    taskId={taskId}
                    input={task.input}
                    output={task.output}
                    setforceRender={setforceRender}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Task;
