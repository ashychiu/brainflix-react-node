import React from "react";
import "./InputForm.scss";

const InputForm = (props) => {
  return (
    <input
      row={props.row}
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
    />
  );
};

export default InputForm;
