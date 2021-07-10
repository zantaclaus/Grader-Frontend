import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import CodeBoard from "./CodeBoard";
import "../css/modal.css";

function ModalCodeBoard({ modal, toggleModal }) {
  return (
    <React.Fragment>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content modal-content--codeBoard">
            <CodeBoard />
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

export default ModalCodeBoard;
