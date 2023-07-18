import React from "react";
import machineImage from "../image/machine.png";
import LabelImage from "../image/label-logo.png";

export default function MachineInfoComponent() {
  return (
    <div className="machine-info-container">
      <div className="machine-container">
        <img src={machineImage} alt="machine" />
      </div>
      <div className="label-container">
        <img src={LabelImage} alt="label" />
        <div className="label-container-text">
          Jollof by Jara is completely cashless. Our custom software puts the
          power in your hands. No more waiting for the bill!
          <b>Order. Purchase. Enjoy</b>
        </div>
      </div>
      <div className="selection-container">
        <ul>
          <li>
            <p className="cricle"></p> Make your selection(s) from the drinks,
            food, or the shop. Secure your
          </li>
          <li>
            <p className="cricle"></p>
            order with instant payment or via POS. All payments are confirmed
          </li>

          <li>
            <p className="cricle"></p>instantly, your receipt will be sent to
            your email address.
          </li>
        </ul>
        <div className="price-box">
          <p>
            All pricing excludes: 5% Consumption Tax (LIRS), 7.5% VAT (FIRS) and
            2.5% Service Charge
          </p>
        </div>
      </div>
    </div>
  );
}
