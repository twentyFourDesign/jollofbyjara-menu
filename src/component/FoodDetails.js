import React from "react";
import FoodImage from "../image/food.png";

export default function FoodDetails() {
  return (
    <div className="Details-component-container">
      <div className="food-image-container">
        <img className="food-image" src={FoodImage} alt="foodpicture" />
      </div>
      <div className="food-details-container">
        <h2>Catering (for External Events)

        </h2>
        <p>
          This mouth-watering array of catering trays applies to external orders requested 24 hours in advance - only. Perfect for your at-home celebration, office lunch, meal prep at home and many more! Catering options are served in trays and discounted for that extra jara value. <br />
          Please note, this menu cannot be used for in-restaurant dining.

        </p>

        <p>
          We ask for a minimum of 24 hours notice for your catered order to be collected / delivered. Order via <br/> Whatsapp (+234 808 061 0290),<br/> Email (bookings@jollofbyjara.com) or <br/> phone (+234 808 061 0290).
        </p>
      </div>
    </div>
  );
}
