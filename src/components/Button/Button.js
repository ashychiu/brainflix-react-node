import React from "react";
import "./Button.scss";

// Receiving props from UploadPage or Header or CommentForm
const Button = (props) => {
  return (
    <button id={props.id} type="submit" onClick={props.onClick}>
      {props.placeholder}
    </button>
  );
};

export default Button;
