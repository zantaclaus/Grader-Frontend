import React, { useEffect } from "react";
import { setEasterEgg } from "./../redux/actions/easterEggAction";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "../css/banned.css";

function Banned({ title, tagline, lists }) {
  const dispatch = useDispatch();
  const swap = useSelector((state) => state.swap);
  const [classSwap, setClassSwap] = useState("banned__list");

  const swaphanddle = () => {
    dispatch(setEasterEgg());
  };

  useEffect(() => {
    if (swap) {
      setClassSwap("banned__list swap");
    } else {
      setClassSwap("banned__list");
    }
  }, [swap]);

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
          <span
            key={list.id}
            className={list.name === "swap" ? classSwap : "banned__list"}
            onClick={list.name === "swap" ? swaphanddle : null}
          >
            {list.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Banned;
