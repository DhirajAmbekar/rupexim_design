import React from "react";
import Brand1 from "../assets/brand1.png";
import Brand2 from "../assets/brand2.png";
import Brand3 from "../assets/Company logo.png";
import Brand4 from "../assets/brand4.png";
import Brand5 from "../assets/brand5.png";

export const Section3 = () => {
  return (
    <div className="section3_container">
      <div className="section3_title">Brands</div>
      <div className="section3_brands">
        {[Brand1, Brand2, Brand3, Brand4, Brand5].map((el, i) => (
          <div className="section3_brand" key={i}>
            <img src={el} alt="brand" />
          </div>
        ))}
      </div>
    </div>
  );
};
