import React from "react";
import "../css/btnUpload.css";
import { AiFillFileAdd } from "react-icons/ai";

function BtnUpload({ handleFileChange, onInputClick }) {
  return (
    <div className="task__btn">
      <input
        type="file"
        id="file"
        onChange={handleFileChange}
        onClick={onInputClick}
        accept=".c, .cpp"
      />
      <label htmlFor="file" className="file__label">
        <AiFillFileAdd size="2rem" className="file__icon" />
        Upload File
      </label>
    </div>
  );
}

export default BtnUpload;
