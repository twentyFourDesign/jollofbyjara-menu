import React from "react";
import logo from "../image/Jollof by Jara 1.png";

function Header() {
  return (
    <div className="header-container">
      <div className="image-container">
        <a href="https://www.jollofbyjara.com/">
        <img className="header-image" src={logo} alt="logo" />
        </a>
      </div>
      <div className="menu-container">
        <h1 className="menu">MENU</h1>
        <p className="menu-description">Click on the menu text for picture and description</p>
      </div>
    </div>
  );
}

export default Header;
