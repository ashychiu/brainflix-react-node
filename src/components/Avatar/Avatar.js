import React from "react";
import "./Avatar.scss";

// Receiving props from Header or CommentSection
const Avatar = (props) => {
  return <img className={props.className} src={props.src} alt="avatar" />;
};

export default Avatar;
