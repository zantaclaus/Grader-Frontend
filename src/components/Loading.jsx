import React from "react";
import "../css/loading.css";
import { IoFishOutline } from "react-icons/io5";

function Loading(props) {
  return (
    <div className="loading__container">
      <div className="spinee">
        <span className="span1"></span>
        <span className="span2"></span>
        <span className="span3"></span>
        <span className="span4"></span>
        <span className="span5"></span>
        <span className="span6"></span>
        <span className="span7"></span>
        <span className="span8"></span>
        <span className="span9"></span>
        <span className="span10"></span>
        <span className="span11"></span>
        <span className="span12"></span>
        <span className="span13"></span>
        <span className="span14"></span>
        <span className="span15"></span>
        <span className="span16"></span>
        <span className="span17"></span>
        <span className="span18"></span>
        <span className="span19"></span>
        <span className="span20"></span>
        <div className="shark">
          <IoFishOutline size="6rem" className="shark__icon" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
