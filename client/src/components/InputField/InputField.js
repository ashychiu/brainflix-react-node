import React from "react";
import "./InputField.scss";

// Receiving props from Header or CommentForm
const InputField = (props) => {
  const { type, placeholder, className } = props;
  return <input type={type} placeholder={placeholder} className={className} />;
};

export default InputField;
