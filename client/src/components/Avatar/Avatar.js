import React from "react";
import "./Avatar.scss";

// Receiving props from Header or CommentSection
const Avatar = (props) => {
  const { className, src } = props;
  return <img className={className} src={src} alt="avatar" />;
};

export default Avatar;
