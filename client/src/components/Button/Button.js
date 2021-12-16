import React from "react";
import "./Button.scss";

// Receiving props from UploadPage or Header or CommentForm
const Button = (props) => {
  const { id, onsubmit, placeholder } = props;
  return (
    <button id={id} type="submit" onsubmit={onsubmit}>
      {placeholder}
    </button>
  );
};

export default Button;
