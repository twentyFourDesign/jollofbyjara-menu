import React from "react";
import Logo from "../assets/logoDark.png";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_container_wrapper">
        <div className="footer_container_wrapper_col">
          <img
            src={Logo}
            alt="Logo"
            className="footer_container_wrapper_col_logo"
          />
        </div>
        <div className="footer_container_wrapper_col">
          <a href="" className="footer_container_wrapper_col_entry">
            Home
          </a>
          <a href="" className="footer_container_wrapper_col_entry">
            About Us
          </a>
          <a href="" className="footer_container_wrapper_col_entry">
            Menu
          </a>
          <a href="" className="footer_container_wrapper_col_entry">
            Gallery
          </a>
          <a href="" className="footer_container_wrapper_col_entry">
            Contact
          </a>
        </div>
        <div className="footer_container_wrapper_col">
          <svg
            width="26"
            height="106"
            viewBox="0 0 26 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 106V1M13 1L1 19.5885M13 1L25 19.5885"
              stroke="#E23A3A"
            />
          </svg>
        </div>
        <div className="footer_container_wrapper_col">
          <a href="" className="footer_container_wrapper_col_entry">
            +0808 325 8386
          </a>
          <a href="https://www.instagram.com/grillzandmoore/" className="footer_container_wrapper_col_entry">
            Instagram: GrillzandMoore 
          </a>
          <a  href="mailto:info@grillzandmoore.com.ng" className="footer_container_wrapper_col_entry">
            Info@grillzandmoore.com.ng 
          </a>
          <button className="main_container_btn_sec contact_btn">Order</button>
        </div>
      </div>
    </div>
  );
}
