import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { IoSkullSharp } from "react-icons/io5";
import { BsStar } from "react-icons/bs";
import "../css/card.css";

function Card({ task, titleColor }) {
  let blackStar = [];
  let halfStar = [];
  let whiteStar = [];

  const godModeStar = [1, 2, 3, 4, 5];
  const rank = task.rank / 2.0;
  const isGodMode = task.unit.trim() === "God Mode" ? true : false;

  const isInt = (n) => {
    return n % 1 === 0;
  };

  if (isInt(rank)) {
    blackStar = _.range(1, rank + 1);
    whiteStar = _.range(rank + 1, 6);
  } else {
    blackStar = _.range(1, rank - 0.5 + 1);
    halfStar = [1];
    whiteStar = _.range(rank - 0.5 + 1, 5);
  }

  return (
    <React.Fragment>
      {task.status === 0 && (
        <div>
          {!isGodMode && (
            <div className={titleColor}>
              <Link to={`/tasks/${task._id}`} className="card__link">
                <div className="card__task__title">{task.title}</div>
                <div className="card__task__content">
                  <div className="unit">{task.unit}</div>
                  <div className="passed">{task.finished}</div>
                  <div className="star">
                    {blackStar.map((rank) => (
                      <BsStarFill key={rank} size="2rem" />
                    ))}
                    {halfStar.map((rank) => (
                      <BsStarHalf key={rank} size="2rem" />
                    ))}
                    {whiteStar.map((rank) => (
                      <BsStar key={rank} size="2rem" />
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          )}

          {isGodMode && (
            <div className={titleColor}>
              <Link to={`/tasks/${task._id}`} className="card__link">
                <div className="card__task__title">{task.title}</div>
                <div className="card__task__content">
                  <div className="unit">{task.unit}</div>
                  <div className="passed">{task.finished}</div>
                  <div className="star">
                    {godModeStar.map((rank) => (
                      <IoSkullSharp key={rank} size="2.5rem" />
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      )}
      {task.status === 1 && (
        <div>
          {!isGodMode && (
            <div className={titleColor}>
              <Link
                to={`/tasks/${task._id}`}
                className="card__link status--error"
              >
                <div className="card__task__title">{task.title}</div>
                <div className="card__task__content">
                  <div className="unit">{task.unit}</div>
                  <div className="passed">{task.finished}</div>
                  <div className="star">
                    {blackStar.map((rank) => (
                      <BsStarFill key={rank} size="2rem" />
                    ))}
                    {halfStar.map((rank) => (
                      <BsStarHalf key={rank} size="2rem" />
                    ))}
                    {whiteStar.map((rank) => (
                      <BsStar key={rank} size="2rem" />
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          )}

          {isGodMode && (
            <div className={titleColor}>
              <Link
                to={`/tasks/${task._id}`}
                className="card__link status--error"
              >
                <div className="card__task__title">{task.title}</div>
                <div className="card__task__content">
                  <div className="unit">{task.unit}</div>
                  <div className="passed">{task.finished}</div>
                  <div className="star">
                    {godModeStar.map((rank) => (
                      <IoSkullSharp key={rank} size="2.5rem" />
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      )}
      {task.status === 2 && (
        <div>
          {!isGodMode && (
            <div className={titleColor}>
              <Link
                to={`/tasks/${task._id}`}
                className="card__link status--passed"
              >
                <div className="card__task__title">{task.title}</div>
                <div className="card__task__content">
                  <div className="unit">{task.unit}</div>
                  <div className="passed">{task.finished}</div>
                  <div className="star">
                    {blackStar.map((rank) => (
                      <BsStarFill key={rank} size="2rem" />
                    ))}
                    {halfStar.map((rank) => (
                      <BsStarHalf key={rank} size="2rem" />
                    ))}
                    {whiteStar.map((rank) => (
                      <BsStar key={rank} size="2rem" />
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          )}

          {isGodMode && (
            <div className={titleColor}>
              <Link
                to={`/tasks/${task._id}`}
                className="card__link status--passed"
              >
                <div className="card__task__title">{task.title}</div>
                <div className="card__task__content">
                  <div className="unit">{task.unit}</div>
                  <div className="passed">{task.finished}</div>
                  <div className="star">
                    {godModeStar.map((rank) => (
                      <IoSkullSharp key={rank} size="2.5rem" />
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
}

export default Card;
