import React from "react";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./HeaderAvatar.scss";

const HeaderAvatar = () => {
  return <img className="header__avatar" src={avatar} alt="profile avatar" />;
};

export default HeaderAvatar;
