import React from "react";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import Avatar from "../Avatar/Avatar";
import "./Header.scss";
import Button from "../Button/Button";
import InputForm from "../InputForm/InputForm";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="BrainFlix logo" />
        <div className="header__container-mobile">
          <InputForm
            className="header__searchbar"
            type="search"
            placeholder="Search"
          />
          <Avatar className="header__avatar-mobile" />
        </div>
        <Button id="uploadButton" placeholder="UPLOAD" />
        <Avatar className="header__avatar-tab-desk" />
      </div>
    </header>
  );
};

export default Header;
