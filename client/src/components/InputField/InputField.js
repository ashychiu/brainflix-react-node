import React from "react";
import "./InputField.scss";

// Input field for search or comment, receiving props from Header or CommentForm
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
