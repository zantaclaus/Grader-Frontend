import React from "react";
import "../css/btnUpload.css";
import { AiFillFileAdd } from "react-icons/ai";

function BtnUpload({ handleFileChange, onInputClick, isDone }) {
  return (
    <div className="task__btn btn--hover">
      <input
        type="file"
        id="file"
        onChange={handleFileChange}
        onClick={onInputClick}
        accept=".c, .cpp"
        disabled={isDone}
      />
      <label htmlFor="file" className="file__label">
        <AiFillFileAdd size="2rem" className="file__icon" />
        Upload File
      </label>
    </div>
  );
}

export default BtnUpload;
