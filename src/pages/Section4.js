import React from "react";
import Section4img from "../assets/shoping.png";
export const Section4 = () => {
  return (
    <div
      className="section4_container"
      style={{
        backgroundImage: `url(${Section4img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={Section4img} className="section4_img" alt="section4" />
    </div>
  );
};
