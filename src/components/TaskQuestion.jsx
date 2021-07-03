import React from "react";
import { useSelector } from "react-redux";
import TaskTable from "./TaskTable";
import "../css/taskQuestion.css";

function TaskQuestion(props) {
  const task = useSelector((state) => state.task);
  const arrQuestion = task.question.replaceAll(" ", "&nbsp;").split("\n");
  const arrInput1 = task.str_input_1.replaceAll(" ", "&nbsp;").split("\n");
  const arrInput2 = task.str_input_2.replaceAll(" ", "&nbsp;").split("\n");
  const arrInput3 = task.str_input_3.replaceAll(" ", "&nbsp;").split("\n");
  const arrOutput1 = task.str_output_1.replaceAll(" ", "&nbsp;").split("\n");
  const arrOutput2 = task.str_output_2.replaceAll(" ", "&nbsp;").split("\n");
  const arrOutput3 = task.str_output_3.replaceAll(" ", "&nbsp;").split("\n");
  const arrQ_input = task.q_input.replaceAll(" ", "&nbsp;").split("\n");
  const arrQ_output = task.q_output.replaceAll(" ", "&nbsp;").split("\n");

  return (
    <div className="pdf__container">
      <div className="title">{task.title}</div>
      <div className="chaya">{task.chaya}</div>
      <div className="question">
        {arrQuestion.map((line) => (
          <div dangerouslySetInnerHTML={{ __html: line }} />
        ))}
      </div>
      <div className="pattern">
        <div className="task__label">รูปแบบข้อมูลนำเข้า</div>
        <div className="pattern__detail">
          {arrQ_input.map((line) => (
            <div dangerouslySetInnerHTML={{ __html: line }} />
          ))}
        </div>
      </div>
      <div className="pattern">
        <div className="task__label">รูปแบบข้อมูลส่งออก</div>
        <div className="pattern__detail">
          {arrQ_output.map((line) => (
            <div dangerouslySetInnerHTML={{ __html: line }} />
          ))}
        </div>
      </div>
      <div className="tastcase">
        {(task.str_input_1 || task.str_output_1) && (
          <TaskTable number="1" input={arrInput1} output={arrOutput1} />
        )}

        {(task.str_input_2 || task.str_output_2) && (
          <TaskTable number="2" input={arrInput2} output={arrOutput2} />
        )}

        {(task.str_input_3 || task.str_output_3) && (
          <TaskTable number="3" input={arrInput3} output={arrOutput3} />
        )}
      </div>
    </div>
  );
}

export default TaskQuestion;
