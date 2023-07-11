import React from "react";
import userPic from "../assets/userPic.png";

export default function TestimonialCard() {
  return (
    <div className="testmonial_card">
      <img src={userPic} alt="userPic" className="testmonial_card_img" />
      <div>
        <div className="testmonial_card__heading">Ann</div>
        <div className="testmonial_card__para">
          Delivery arrived very fast! The courier was very nice and polite Ve ry
          tasty food, I will definitely order again!
        </div>
      </div>
    </div>
  );
}
