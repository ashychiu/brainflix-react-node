import React from "react";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import Avatar from "../Avatar/Avatar";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <a href="./">
            <img className="header__logo" src={logo} alt="BrainFlix logo" />
          </a>
        </div>
        <div className="header__item-container">
          <InputField
            className="header__searchbar"
            type="search"
            placeholder="Search"
          />
          <Avatar className="header__avatar-mobile" src={mohan} />
        </div>
        <Button id="uploadButton" placeholder="UPLOAD" />
        <Avatar className="header__avatar-tab-desk" src={mohan} />
      </div>
    </header>
  );
};

export default Header;
