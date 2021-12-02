import React from "react";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import Avatar from "../Avatar/Avatar";
import "./Header.scss";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="BrainFlix logo" />
        <div className="header__container-mobile">
          <input
            type="search"
            placeholder="Search"
            className="header__searchbar"
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
