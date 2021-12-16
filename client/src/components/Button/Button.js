import React from "react";
import "./Button.scss";

// Receiving props from UploadPage or Header or CommentForm
const Button = (props) => {
  const { id, onSubmit, placeholder } = props;
  return (
    <button id={id} type="submit" onSubmit={onSubmit}>
      {placeholder}
    </button>
  );
};

export default Button;
