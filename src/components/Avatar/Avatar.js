import React from "react";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Avatar.scss";

const Avatar = (props) => {
  return <img className={props.className} src={avatar} alt="profile avatar" />;
};

export default Avatar;
