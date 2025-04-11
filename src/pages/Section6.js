import React from "react";
import Section6img from "../assets/Rectangle.png";
export const Section6 = () => {
  return (
    <div
      className="section6_container"
      style={{
        backgroundImage: `url(${Section6img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "calc(100vh - 38px - 74px)",
        display: "flex",
        justifyContent: "start",
        alignItems: "end",
        flexDirection: "column",
      }}
    >
      <div className="section6_box">
        <div className="text1">Play, learn, & grow!</div>
        <div className="text2">
          Crafting smiles with every toy, made for learning, fun, and growth
        </div>
        <button>Shop Now</button>
      </div>
    </div>
  );
};
