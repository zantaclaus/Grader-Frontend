import React from "react";
import { Link, Redirect } from "react-router-dom";
import { BiImageAlt } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import { BiKey } from "react-icons/bi";
import "../css/manage.css";

function Manage(props) {
  const linkClick = () => {
    console.log("click");
    window.location = "/";
  };

  return (
    <div className="manage__container">
      <div className="manage__box" onClick={linkClick}>
        <div className="manage__iconBx">
          <BiImageAlt size="20rem" color="black" />
        </div>
        <div className="manage__content content__bx1">
          <div className="manage__content__icon">
            <BiImageAlt size="15rem" />
          </div>
          <h3>Change User Image</h3>
        </div>
      </div>

      <div className="manage__box" onClick={linkClick}>
        <div className="manage__iconBx">
          <BiUserPin size="20rem" />
        </div>
        <div className="manage__content content__bx2">
          <div className="manage__content__icon">
            <BiUserPin size="15rem" />
          </div>
          <h3>Change Nickname</h3>
        </div>
      </div>

      <div className="manage__box" onClick={linkClick}>
        <div className="manage__iconBx">
          <BiKey size="20rem" />
        </div>
        <div className="manage__content content__bx3">
          <div className="manage__content__icon">
            <BiKey size="15rem" />
          </div>
          <h3>Change Password</h3>
        </div>
      </div>
    </div>
  );
}

export default Manage;
