import React from "react";
import { useState } from "react";
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
              detail="pppppp--pp"
              header="header"
              content="resulted"
            />
            <TaskDetail
              title="Finished"
              detail="10"
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
