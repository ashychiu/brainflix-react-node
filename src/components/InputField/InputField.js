import React from "react";
import "./InputField.scss";

const InputField = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
    />
  );
};

export default InputField;
