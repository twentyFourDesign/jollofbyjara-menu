import React from "react";
import FoodImage from "../image/food.png";

export default function FoodDetails() {
  return (
    <div className="Details-component-container">
      <div className="food-image-container">
        <img className="food-image" src={FoodImage} alt="foodpicture" />
      </div>
      <div className="food-details-container">
        <h2>
          PUTTING THE <span>jara</span> IN THE JOLLOF
        </h2>
        <p>
          Little Company Nigeria Limited is committed to providing great-value,
          memorable experiences. For those of you familiar with our brands,
          you’ll know we do things a little differently. Jollof is no exception.
        </p>
        <p>
          Jollof by Jara customers are welcome to FREE Wi-Fi (access token
          available at the Bar), FREE drinking water! It’s table water, the kind
          from a dispenser - clean and safe (alternatively branded bottled water
          is available to purchase through SABIS) and we even offer an
          experienced member of staff to entertain your little ones in the
          playground while you relax at NO EXTRA COST!
        </p>
      </div>
    </div>
  );
}
