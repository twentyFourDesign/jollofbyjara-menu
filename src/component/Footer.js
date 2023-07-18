import React from "react";
import logo from "../image/Jollof by Jara 1.png";
import RightLogo from "../image/Compnnay-Logo.png";

function Footer() {
  return (
    <div>
      <div className="small-footer">
        <p>
          <b>OPEN: </b>MONDAY-SUNDAY 10AM-10PM 
        </p>
      </div>
      <div className="footer-container">
        <div className="footer-image-container">
          <img className="footer-image" src={logo} alt="logo" />
        </div>
        <div className="footer-details-container">
          <p>&#64;2023 JOLLOF BY JARA</p>
          <p>Owned and operated by Little Company Nigeria Limited</p>
          <p> RC 1424441 | TIN 2050517</p>
        </div>
        <div className="footer-image-container">
          <img className="footer-rightside-image" src={RightLogo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
