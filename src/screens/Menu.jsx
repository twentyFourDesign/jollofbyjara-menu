import React, { useState } from "react";
import tabIcon from "../assets/tabIcon.png";

import ProductCard from "../components/ProductCard";

function MenuTab({ title, setSelected, isselected }) {
  return (
    <button
      onClick={() => {
        setSelected(title);
      }}
      className="tab_container"
    >
      <img src={tabIcon} alt="tabIcon" className="tab_container_img" />
      <span>{title}</span>
    </button>
  );
}

export default function Menu() {
  const [isselected, setSelected] = useState("Spiced Chiken");
  return (
    <>
      <div className="menu_container">
        <div className="menu_container__heading">Menu</div>
        <div className="menu_container__wrapper">
          <MenuTab
            title="Spiced Chiken"
            isselected={isselected}
            setSelected={setSelected}
          />
          <MenuTab
            title="Tasty Sides"
            isselected={isselected}
            setSelected={setSelected}
          />
          <MenuTab
            title="Burgers"
            isselected={isselected}
            setSelected={setSelected}
          />
          <MenuTab
            title="Sweet treats"
            isselected={isselected}
            setSelected={setSelected}
          />
          <MenuTab
            title="Best choice"
            isselected={isselected}
            setSelected={setSelected}
          />
        </div>
        {isselected === "Spiced Chiken" ? (
          <div className="menu_card_container">
            <div className="menu_card_heading">Spiced Chiken</div>
            <div className="menu_card_wrapper">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        ) : isselected === "Tasty Sides" ? (
          <div className="menu_card_container">
            <div className="menu_card_heading">Tasty Sides</div>
            <div className="menu_card_wrapper">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        ) : isselected === "Burgers" ? (
          <div className="menu_card_container">
            <div className="menu_card_heading">Burgers</div>
            <div className="menu_card_wrapper">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        ) : isselected === "Sweet treats" ? (
          <div className="menu_card_container">
            <div className="menu_card_heading">Sweet treats</div>
            <div className="menu_card_wrapper">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        ) : isselected === "Best choice" ? (
          <div className="menu_card_container">
            <div className="menu_card_heading">Best choice</div>
            <div className="menu_card_wrapper">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
