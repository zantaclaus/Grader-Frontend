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
import SubmitAnimation from "../components/SubmitAnimation";
import "../css/task.css";

function Task(props) {
  const [forceRender, setforceRender] = useState({});
  const [isDone, setIsDone] = useState(false);
  // const codeStore = useSelector((state) => state.code);
  //   const codeStater = codeStore
  //     ? codeStore
  //     : `#include<stdio.h>
  // int main()
  // {

  //     return 0;
  // }`;

  const [code, setCode] = useState("");

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

  useEffect(() => {
    if (task.code) {
      setCode(task.code);
    } else {
      setCode(`#include<stdio.h>
int main() 
{
  
  return 0;
}`);
    }
  }, [task.code]);

  return (
    <React.Fragment>
      {Object.keys(task).length === 0 ? (
        <Loading />
      ) : (
        <React.Fragment>
          <div className="task__form">
            <div className="task__grid">
              <div className="task__left">
                <TaskQuestion />
              </div>
              <div className="task__right">
                <div className="detail__container">
                  <TaskDetail
                    title={task.status === 0 ? "Submitted Resulted" : task.time}
                    detail={task.result}
                    header="header header--resulted"
                    content="resulted"
                    setforceRender={setforceRender}
                  />
                  <TaskDetail
                    title="Finished"
                    detail={task.finished}
                    header="header header--finished"
                    content="finished"
                  />
                </div>
                <TaskEditor
                  code={code}
                  setCode={setCode}
                  status={task.status}
                />
                <div className="btn__container">
                  <BtnDownload linkPDF={linkPDF} />
                  <div className="task__btn__right">
                    <BtnUpload
                      handleFileChange={handleFileChange}
                      onInputClick={onInputClick}
                      isDone={isDone}
                    />
                    <TaskSubmit
                      code={code}
                      taskId={taskId}
                      input={task.input}
                      output={task.output}
                      setforceRender={setforceRender}
                      isDone={isDone}
                      setIsDone={setIsDone}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isDone ? <SubmitAnimation /> : null}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Task;
