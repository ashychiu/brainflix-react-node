import React from "react";
import "./InputField.scss";

// Receiving props from Header or CommentForm
const InputField = (props) => {
  const { type, placeholder, className, name } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default InputField;
