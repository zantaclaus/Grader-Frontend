import React from "react";
import "../css/inputForm.css";

function InputForm({ id, value, setValue, label, type }) {
  const handleInput = (text, setText) => {
    setText(text);
  };

  return (
    <div className="input__form__container">
      <input
        type={type}
        id={id}
        className="input__form"
        placeholder=" "
        autoComplete="off"
        value={value}
        onChange={(e) => handleInput(e.currentTarget.value, setValue)}
      />
      <label htmlFor={id} className="input__form__label">
        {label}
      </label>
    </div>
  );
}

export default InputForm;
