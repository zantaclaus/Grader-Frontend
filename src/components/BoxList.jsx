import React from "react";
import "../css/boxList.css";

function BoxList({ icon, title, content }) {
  return (
    <div className="boxList">
      <div className="boxList__iconBx">
        <div className="boxList__icon">{icon}</div>
      </div>
      <div className="boxList__content">
        <div className="boxList__content__icon">{icon}</div>
        <h3>{title}</h3>
        <h4>{content}</h4>
      </div>
    </div>
  );
}

export default BoxList;
