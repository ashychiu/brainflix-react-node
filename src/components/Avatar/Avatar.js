import React from "react";
import "./Avatar.scss";

const Avatar = (props) => {
  return (
    <img className={props.className} src={props.src} alt="profile avatar" />
  );
};

export default Avatar;
