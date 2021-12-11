import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button id={props.id} type="submit" onClick={props.onClick}>
      {props.placeholder}
    </button>
  );
};

export default Button;
