import React from "react";
import SpooneImage from "../image/spoone.png";
import Glove from "../image/glove.png";
import WhatsAppIcon from "../image/WHATSAPP-iamge.png";

export default function TakeOutDeliveryComponent() {
  return (
    <div className="delivery-component-container">
      <div className="delivery-component-header">
        <h2>
          TAKEOUT <br></br>&DELIVERY{" "}
        </h2>
      </div>
      <div className="delivery-component-section">
        <div className="delivery-info">
          <div className="delivery-info-icon">
            <img src={SpooneImage} alt="spoonepicture" />
            <img src={Glove} alt="glove" />
          </div>
          <div className="delivery-info-whatapp">
            Delivery via Bolt Food or GLOVO is available or you can order
            directly for Takeout via <br></br>
            <b>Whatsapp (+234 808 061 0290).</b>
          </div>
        </div>
        <div className="whatsapp-section">
          <div className="user-details">
            <p>Please include the following details when placing your order:</p>
            <b>Full Name</b>
            <b>Email Address</b>
            <b>Telephone Number</b>
            <b>Order</b>
            <b>Date you’d like it (If not immediate)</b>
            <b>Time you’d like to collect it</b>
          </div>
          <div className="whatsapp-logo">
            <img src={WhatsAppIcon} alt="whatsapp-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
