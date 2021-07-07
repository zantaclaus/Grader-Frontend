import React from "react";

import "../css/banned.css";

function Banned({ title, tagline, lists }) {
  return (
    <div className="banned">
      <div className="guideBook__title">{title}</div>
      <div className="guideBook__tagline">{tagline}</div>
      <div
        className={
          title === "Banned Function"
            ? "banned__content banned__last"
            : "banned__content"
        }
      >
        {lists.map((list) => (
          <span key={list.id} className="banned__list">
            {list.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Banned;
