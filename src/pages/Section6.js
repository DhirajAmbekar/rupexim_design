import React from "react";
import Section6img from "../assets/section5.png";
export const Section6 = () => {
  return (
    <div
      className="section4_container"
      style={{
        backgroundImage: `url(${Section6img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    ></div>
  );
};
