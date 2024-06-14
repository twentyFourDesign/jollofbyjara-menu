import React from "react";
import logo from "../image/Jollof by Jara 1.png";
import HeaderImage from "../image/header.jpg";

function Header() {
  return (
    <div className="ufff">
      {/* <div className="image-container">
        <a href="https://www.jollofbyjara.com/">
        <img className="header-image" src={logo} alt="logo" />
        </a>
      </div>
      <div className="menu-container">
        <h1 className="menu">MENU</h1>
        <p className="menu-description">Click on the menu text for picture and description</p>
        <p style={{marginTop:"1rem",color:"white"}}>Most dishes are served 'family style' designed for sharing!</p>
        <p style={{marginTop:"10px",color:"white"}}>Prices exclude 5% Consumption Tax (LIRS), 7.5% VAT (FIRS) + 2.5% Service Charge</p>
      </div> */}
      <img src={HeaderImage} alt="header" className="header-image"/>
    </div>
  );
}

export default Header;
