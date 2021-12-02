import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button id={props.id} type="submit">
      {props.placeholder}
    </button>
  );
};

export default Button;
