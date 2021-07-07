import React from "react";
import "../css/taskDetail.css";
import { IoRefreshOutline } from "react-icons/io5";

function TaskDetail({ title, detail, header, content, setforceRender }) {
  return (
    <div className="task__detail">
      <div className={header}>{title}</div>
      <div className={content}>{detail}</div>
      {title !== "Finished" && (
        <IoRefreshOutline
          className="refresh"
          size="3rem"
          onClick={() => setforceRender({})}
        />
      )}
    </div>
  );
}

export default TaskDetail;
