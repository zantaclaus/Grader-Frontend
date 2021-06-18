import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import "../css/card.css";

function Card({ task }) {
  const blackStar = _.range(1, task.rank + 1);
  const whiteStar = _.range(task.rank + 1, 6);

  return (
    <div>
      <div className="card__task">
        <Link to={`/tasks/${task._id}`} className="card__link">
          <div className="card__task__title">{task.number}</div>
          <div className="card__task__content">
            <div className="unit">{task.unit}</div>
            <div className="passed">{task.finished}</div>
            <div className="star">
              {blackStar.map((rank) => (
                <AiFillStar key={rank} size="2.3rem" />
              ))}
              {whiteStar.map((rank) => (
                <AiOutlineStar key={rank} size="2.3rem" />
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
