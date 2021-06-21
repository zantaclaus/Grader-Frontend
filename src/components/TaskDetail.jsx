import React from "react";
import "../css/taskDetail.css";

function TaskDetail({ title, detail, header, content }) {
  return (
    <div className="task__detail">
      <div className={header}>{title}</div>
      <div className={content}>{detail}</div>
    </div>
  );
}

export default TaskDetail;
