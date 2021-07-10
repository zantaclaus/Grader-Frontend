import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import "../css/modal.css";

import line from "../images/line.jpg";

function ModalForgot({ modal, toggleModal }) {
  return (
    <div>
      <React.Fragment>
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content modal-content--line">
              <img src={line} alt="P'Pup" className="line__img" />
            </div>
          </div>
        )}
      </React.Fragment>
    </div>
  );
}

export default ModalForgot;
