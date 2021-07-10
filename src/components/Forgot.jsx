import React from "react";
import { useState } from "react";
import ModalForgot from "./ModalForgot";
import "../css/modal.css";

function Forgot(props) {
  const [modalForgot, setModalForgot] = useState(false);

  const toggleModalForgot = () => {
    setModalForgot(!modalForgot);
  };

  return (
    <React.Fragment>
      <div className="forgot" onClick={toggleModalForgot}>
        Forgot Password?
      </div>
      <ModalForgot modal={modalForgot} toggleModal={toggleModalForgot} />
    </React.Fragment>
  );
}

export default Forgot;
