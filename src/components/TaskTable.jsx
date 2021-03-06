import React from "react";
import "../css/taskTable.css";

function TaskTable({ number, input, output }) {
  return (
    <React.Fragment>
      <div className="task__label">ตัวอย่าง {number}</div>
      <div className="tastcase__container">
        <div className="tastcase__table">
          <div className="table table__header header__input">input</div>
          <div className="table table__header header__output">output</div>
        </div>
        <div className="tastcase__table">
          <div className="table table__detail detail__input">
            <div
              className="monospace"
              dangerouslySetInnerHTML={{ __html: input }}
            />
          </div>
          <div className="table table__detail detail__output">
            <div
              className="monospace"
              dangerouslySetInnerHTML={{ __html: output }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TaskTable;
