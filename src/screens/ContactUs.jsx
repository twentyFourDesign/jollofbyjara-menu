import React, { useState } from "react";
import galleryPic from "../assets/galleryPic.png";

export default function ContactUs() {
  return (
    <>
      <div style={{ marginTop: "5em" }} className="contact_us_container">
        <div className="product_container_heading">Contact Us</div>
        <div className="contact_us_container_content">
          <div className="contact_us_container_content__left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63423.178753939916!2d3.2978507964171078!3d6.528167243054342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1656236201000!5m2!1sen!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="contact_us_container_content__left_map"
            />
          </div>
          <div className="contact_us_container_content__right">
            <div className="contact_us_container_content__right_heading">
              Request a Call
            </div>
            <input
              type="text"
              placeholder="Your Name"
              className="contact_us_container_content_right_input"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="contact_us_container_content_right_input"
            />
            <input
              type="email"
              placeholder="Email"
              className="contact_us_container_content_right_input"
            />
            <button className="main_container_btn_sec contact_btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
