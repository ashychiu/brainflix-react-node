import React from "react";
import "./Button.scss";

// Receiving props from UploadPage or Header or CommentForm
const Button = (props) => {
  const { id, onClick, placeholder } = props;
  return (
    <button id={id} type="submit" onClick={onClick}>
      {placeholder}
    </button>
  );
};

export default Button;
