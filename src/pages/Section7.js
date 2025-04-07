import React from "react";
import Pro1 from "../assets/pro1.png";
import Pro2 from "../assets/pro2.png";
import Pro3 from "../assets/pro3.png";

export const Section7 = () => {
  return (
    <div className="section7_container">
      {[
        {
          img: Pro1,
          title: "Leather bags",
          btn: "shop leather bags",
        },
        {
          img: Pro2,
          title: "Toys",
          btn: "SHOP TOYS",
        },
        {
          img: Pro3,
          title: "Clothes",
          btn: "SHOP clothes",
        },
      ].map((el, i) => (
        <div key={i} className="product_item">
          <img src={el.img} alt="product" />
          <div className="product_item_title">{el.title}</div>
          <div className="product_item_btn">{el.btn}</div>
        </div>
      ))}
    </div>
  );
};
