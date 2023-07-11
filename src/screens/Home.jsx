import React, { useState } from "react";
import mainPic1 from "../assets/mainPic1.png";
import aboutUs from "../assets/aboutUs.png";
import HomeSwiper from "../components/HomeSwiper";
import galleryPic from "../assets/galleryPic.png";
import TestimonialSwiper from "../components/TestimonialSwiper";

export default function Home() {
  return (
    <>
      <div className="main_container_home">
        <div className="main_container_home_left">
          <div className="main_container_heading">
            Make an order right now. Fast and tasteful.
          </div>
          <button className="main_container_btn">Make order</button>
        </div>
        <div className="main_container_home_right">
          <img
            src={mainPic1}
            alt="mainPic1"
            className="main_container_home_right_img"
          />
        </div>
      </div>
      <div className="main_container_about">
        <div className="main_container_home_left">
          <div className="main_container_heading">About Us</div>
          <div className="main_container_para">
            Our restaurant provides you with the most delicious food in the
            whole city! Our food makes you visit us again and again.. You only
            order food, as the courier will already be at your door! Rather see
            our menu and make the right choice. Sincerely, GRILLZ&MOORE!
          </div>
          <button className="main_container_btn_sec">View Menu</button>
        </div>
        <div className="main_container_home_right">
          <img
            src={aboutUs}
            alt="aboutUs"
            className="main_container_home_right_img"
          />
        </div>
      </div>
      <div className="product_container">
        <div className="product_container_heading">Menu</div>
        <HomeSwiper />
      </div>
      <div className="gallery_container">
        <div className="product_container_heading">Gallery</div>
        <div className="gallery_row">
          <img src={galleryPic} alt="galleryPic" className="gallery_row_pic" />
          <img src={galleryPic} alt="galleryPic" className="gallery_row_pic" />
          <img src={galleryPic} alt="galleryPic" className="gallery_row_pic" />
          <img src={galleryPic} alt="galleryPic" className="gallery_row_pic" />
          <img src={galleryPic} alt="galleryPic" className="gallery_row_pic" />
        </div>
      </div>
      <div className="gallery_container">
        <div className="product_container_heading">Feedback</div>
        <TestimonialSwiper />
      </div>
    </>
  );
}
