import React from "react";
import { AiFillStar } from "react-icons/ai";
import "../css/card.css";

function Card(props) {
  return (
    <div>
      <div className="card__task">
        <div className="card__task__title">Trapezoid</div>
        <div className="card__task__content">
          <div className="unit">Condition</div>
          <div className="passed">20</div>
          <div className="star">
            <AiFillStar size="2.3rem" />
            <AiFillStar size="2.3rem" />
            <AiFillStar size="2.3rem" />
            <AiFillStar size="2.3rem" />
            <AiFillStar size="2.3rem" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
