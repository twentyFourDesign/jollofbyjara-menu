import React from "react";
import galleryPic from "../assets/galleryPic.png";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";


export default function Gallery() {
  const handleInstagramFollow = () => {
    window.open("https://www.instagram.com/grillzandmoore/");
  };

  return (
    <>
      <div style={{ marginTop: "5em" }} className="gallery_container">
        <div className="product_container_heading">Gallery </div>

        <h2 style={{ textAlign: "center", marginBottom: "1em" }}>
          Captured Moments at GrillzandMoore
        </h2>

        <div style={{ width: "250px", margin: "auto", marginBottom: "2em"  }}>
          <button
            className="main_container_btn_sec"
            onClick={handleInstagramFollow}
          >
            Follow on Instagram
          </button>
        </div>

        <div className="gallery_row">
          <img src={food2} alt="galleryPic" className="gallery_row_pic" />
          <img src={food1} alt="galleryPic" className="gallery_row_pic" />
          <img src={food3} alt="galleryPic" className="gallery_row_pic" />
          <img src={food4} alt="galleryPic" className="gallery_row_pic" />
          <img src={food2} alt="galleryPic" className="gallery_row_pic" />
        </div>
      </div>
    </>
  );
}
