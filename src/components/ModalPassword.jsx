import React from "react";
import "../css/modal.css";
import { IoCloseSharp } from "react-icons/io5";
import ManagePassword from "./ManagePassword";

function ModalPassword({ modal, toggleModal }) {
  return (
    <React.Fragment>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content modal-content--password">
            <ManagePassword />
            <IoCloseSharp
              size="3rem"
              color="black"
              className="close-modal"
              onClick={toggleModal}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default ModalPassword;
