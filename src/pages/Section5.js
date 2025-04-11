import React from "react";
import Section5img from "../assets/bag.png";
export const Section5 = () => {
  return (
    <div
      className="section5_container"
      style={{
        backgroundImage: `url(${Section5img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="slider_box">
        <div className="slider_text1">Elevate Your Style with Every Step</div>
        <div className="slider_text2">
          Discover our exclusive collection of premium handbags — where elegance
          meets everyday functionality. From casual outings to grand events,
          carry confidence with designs that define modern fashion.
        </div>
        <button>Shop Now</button>
      </div>
    </div>
  );
};
