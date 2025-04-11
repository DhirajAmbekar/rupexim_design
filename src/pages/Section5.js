import React from "react";
import Section5img from "../assets/section4.png";
export const Section5 = () => {
  return (
    <div
      className="section4_container"
      style={{
        backgroundImage: `url(${Section5img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: "100px",
      }}
    >
      <button>Shop Now</button>
    </div>
  );
};
