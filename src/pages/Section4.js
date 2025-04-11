import React from "react";
import Section4img from "../assets/shoping1.png";
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
        alignItems: "start",
        flexDirection: "column",
      }}
    >
      <div className="text1">☀️ Summer’s Coming...</div>
      <div className="text2">
        Get ready for sunshine and good vibes! ☀️ Refresh your wardrobe, upgrade
        your gadgets, and snag the hottest deals of the season. Shop now before
        the heat—and the discounts—disappear! 🔥🛍️
      </div>
      <button>Shop Now</button>
    </div>
  );
};
