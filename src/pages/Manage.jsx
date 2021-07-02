import React from "react";
import { IoKeyOutline } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import "../css/manage.css";

function Manage(props) {
  const linkClick = (path) => {
    console.log("click");
    window.location = `/${path}`;
  };

  return (
    <div className="manage__container">
      <div className="manage__box" onClick={() => linkClick("managePassword")}>
        <div className="manage__iconBx">
          <IoImageOutline size="17rem" color="black" />
        </div>
        <div className="manage__content content__bx1">
          <div className="manage__content__icon">
            <IoImageOutline size="15rem" color="white" />
          </div>
          <h3>Change Image</h3>
        </div>
      </div>

      <div className="manage__box" onClick={() => linkClick("manageNickname")}>
        <div className="manage__iconBx">
          <FiUser size="17rem" />
        </div>
        <div className="manage__content content__bx2">
          <div className="manage__content__icon">
            <FiUser size="15rem" color="white" />
          </div>
          <h3>Change Nickname</h3>
        </div>
      </div>

      <div className="manage__box" onClick={() => linkClick("managePassword")}>
        <div className="manage__iconBx">
          <IoKeyOutline size="17rem" />
        </div>
        <div className="manage__content content__bx3">
          <div className="manage__content__icon">
            <IoKeyOutline size="15rem" color="white" />
          </div>
          <h3>Change Password</h3>
        </div>
      </div>
    </div>
  );
}

export default Manage;
