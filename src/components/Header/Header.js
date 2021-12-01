import React from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderAvatar from "../HeaderAvatar/HeaderAvatar";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import HeaderUpload from "../HeaderUpload/HeaderUpload";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <HeaderLogo />
        <div className="header__search-container">
          <HeaderSearch />
          <HeaderAvatar />
        </div>
        <HeaderUpload />
      </div>
    </header>
  );
};

export default Header;
