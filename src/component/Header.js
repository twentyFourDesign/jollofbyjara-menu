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
        <p className="menu-description" style={{color:"white"}}>Click on the menu text for picture and description</p>
        <p style={{marginTop:"1rem",color:"white"}}>Dishes are served 'family style' designed for sharing!</p>
        <p style={{marginTop:"10px",color:"white"}}>Prices exclude 5% Consumption Tax (LIRS), 7.5% VAT (FIRS) + 2.5% Service Charge</p>
      </div>
    </div>
  );
}

export default Header;
