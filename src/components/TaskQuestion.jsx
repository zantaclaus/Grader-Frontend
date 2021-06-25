import React from "react";
import { useSelector } from "react-redux";
import TaskTable from "./TaskTable";
import "../css/taskQuestion.css";

function TaskQuestion(props) {
  let task = useSelector((state) => state.task);
  return (
    <div className="pdf__container">
      <div className="title">{task.title}</div>
      <div className="chaya">{task.chaya}</div>
      <div className="question">{task.question}</div>
      <div className="pattern">
        <div className="task__label">รูปแบบข้อมูลนำเข้า</div>
        <div className="pattern__detail">{task.q_input}</div>
      </div>
      <div className="pattern">
        <div className="task__label">รูปแบบข้อมูลส่งออก</div>
        <div className="pattern__detail">{task.q_output}</div>
      </div>
      <div className="tastcase">
        <TaskTable
          number="1"
          input={task.str_input_1}
          output={task.str_output_1}
        />
        <TaskTable
          number="2"
          input={task.str_input_2}
          output={task.str_output_2}
        />
        <TaskTable
          number="3"
          input={task.str_input_3}
          output={task.str_output_3}
        />
      </div>
      <h1>
        <a href={task.linkPDF}>click</a>
      </h1>
    </div>
  );
}

export default TaskQuestion;
