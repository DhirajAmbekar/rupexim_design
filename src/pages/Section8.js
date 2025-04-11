import React from "react";
import ContactUs from "../assets/contactus.png";
export const Section8 = () => {
  return (
    <div className="section8_container">
      <img src={ContactUs} alt="" />
      <div className="section8_input">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <button>Join</button>
      </div>
    </div>
  );
};
