import React from "react";
// import logo from "../image/Jollof by Jara 1.png";
import HeroImage from "../image/hero2.jpg";

function Header() {
  return (
    // <div className="header-container">
    //   <div className="image-container">
    //     <a href="https://www.jollofbyjara.com/">
    //     <img className="header-image" src={logo} alt="logo" />
    //     </a>
    //   </div>
    //   <div className="menu-container">
    //     <h1 className="menu">MENU</h1>
    //     <p style={{marginTop:"1rem",color:"white"}}>Jollof By Jara will be reopening for 2024 on Wedenesday 10th January</p>
    //     <p style={{marginTop:"10px",color:"white"}}>While we apologize for any inconvenience, we have Lots of exciting thing for you</p>
    //   </div>
    // </div>

    <div style={{ overflow: "hidden" }}>
      <img src={HeroImage} alt="" style={{ width: "100vw", height: "100%" }} />
      <div style={{display:"flex",justifyContent:"center","alignItems":"center",flexDirection:"column"}}>
        <h1 style={{marginTop:"1rem",textAlign:"center"}}>Click on the Menu text for price and description</h1>
        <p style={{ marginTop: "1rem", color: "black",textAlign:"center" }}>Most dishes are served 'family style' designed for sharing!</p>
        <p style={{ marginTop: "10px", color: "black",textAlign:"center" }}>Price exclude 5% Consumption Tax (LIRS), 7.5% VAT (FIRS) + 2.5% Service Charge</p>
      </div>
    </div>
  );
}

export default Header;



