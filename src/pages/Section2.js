import React from "react";
import Section2img from "../assets/section2.png";

export const Section2 = () => {
  return (
    <div className="section2_container">
      <img src={Section2img} alt="Section2img" />
      <div className="apparel">Apparel</div>
      <div className="toys">Toys</div>
      <div className="bags">Bags</div>
    </div>
  );
};
