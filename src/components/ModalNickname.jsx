import React from "react";
import "../css/modal.css";
import { IoCloseSharp } from "react-icons/io5";
import ManageNickname from "./ManageNickname";

function ModalNickname({ modal, toggleModal }) {
  return (
    <React.Fragment>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content modal-content--nickname">
            <ManageNickname />
            <IoCloseSharp
              size="3rem"
              color="white"
              className="close-modal"
              onClick={toggleModal}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default ModalNickname;
