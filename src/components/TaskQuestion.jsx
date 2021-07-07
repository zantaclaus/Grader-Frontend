import React from "react";
import { useSelector } from "react-redux";
import TaskTable from "./TaskTable";
import "../css/taskQuestion.css";

function TaskQuestion(props) {
  const task = useSelector((state) => state.task);
  const jsxQuestion = task.question
    .replaceAll(" ", "&nbsp;")
    .replaceAll("\n", "<br/>");
  const jsxInput1 = task.str_input_1
    .replaceAll(" ", "&nbsp;")
    .replaceAll("\n", "<br/>");
  const jsxInput2 = task.str_input_2
    .replaceAll(" ", "&nbsp;")
    .replaceAll("\n", "<br/>");
  const jsxInput3 = task.str_input_3
    .replaceAll(" ", "&nbsp;")
    .replaceAll("\n", "<br/>");
  const jsxOutput1 = task.str_output_1
    .replaceAll(" ", "&nbsp;")
    .replaceAll("\n", "<br/>");
  const jsxOutput2 = task.str_output_2
    .replaceAll(" ", "&nbsp;")
    .replaceAll("\n", "<br/>");
  const jsxOutput3 = task.str_output_3
    .replaceAll(" ", "&nbsp;")
    .replaceAll("\n", "<br/>");
  const jsxQ_input = task.q_input
    .replaceAll(" ", "&nbsp;")
    .replaceAll("\n", "<br/>");
  const jsxQ_output = task.q_output
    .replaceAll(" ", "&nbsp;")
    .replaceAll("\n", "<br/>");
  const jsxDetail = task.detail
    .replaceAll(" ", "&nbsp;")
    .replaceAll("\n", "<br/>");

  return (
    <div className="pdf__container scrollbar-hidden">
      <div className="title">
        #{task.number} {task.title}
      </div>
      <div className="chaya">{task.chaya}</div>
      <div className="question">
        <div dangerouslySetInnerHTML={{ __html: jsxQuestion }} />
      </div>
      <div className="pattern">
        <div className="task__label">รูปแบบข้อมูลนำเข้า</div>
        <div className="pattern__detail">
          <div dangerouslySetInnerHTML={{ __html: jsxQ_input }} />
        </div>
      </div>
      <div className="pattern">
        <div className="task__label">รูปแบบข้อมูลส่งออก</div>
        <div className="pattern__detail">
          <div dangerouslySetInnerHTML={{ __html: jsxQ_output }} />
        </div>
      </div>
      <div className="tastcase">
        {(task.str_input_1 || task.str_output_1) && (
          <TaskTable number="1" input={jsxInput1} output={jsxOutput1} />
        )}

        {(task.str_input_2 || task.str_output_2) && (
          <TaskTable number="2" input={jsxInput2} output={jsxOutput2} />
        )}

        {(task.str_input_3 || task.str_output_3) && (
          <TaskTable number="3" input={jsxInput3} output={jsxOutput3} />
        )}
      </div>
      <div className="pattern">
        {!(task.detail === "-") && (
          <React.Fragment>
            <div className="task__label">เพิ่มเติม</div>
            <div className="pattern__detail">
              <div dangerouslySetInnerHTML={{ __html: jsxDetail }} />
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default TaskQuestion;
