import React from "react";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import Avatar from "../Avatar/Avatar";
import "./Header.scss";
import InputField from "../InputField/InputField";
import { Link } from "react-router-dom";

//Header section for HomePage & UploadPage

const API_URL = process.env.REACT_APP_API_URL;
const avatar = `${API_URL}/images/Mohan-muruge.jpg`;

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <Link to="/">
            <img className="header__logo" src={logo} alt="BrainFlix logo" />
          </Link>
        </div>
        <div className="header__item-container">
          <InputField
            className="header__searchbar"
            type="search"
            placeholder="Search"
          />
          {/* mobile version avatar position is in the middle */}
          <Avatar className="header__avatar-mobile" src={avatar} />
        </div>
        {/* styling stored at button.scss */}
        <div id="uploadButton">
          <Link to="/upload" className="header__upload-link">
            <p>UPLOAD</p>
          </Link>
        </div>

        {/* tablet/desktop version avatar is at the end*/}
        <Avatar className="header__avatar-tab-desk" src={avatar} />
      </div>
    </header>
  );
};

export default Header;
