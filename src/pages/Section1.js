import React from "react";
import Slide1 from "../assets/heroimg5.png";
import Slide2 from "../assets/heroimg2.png";
import Slide3 from "../assets/heroimg3.png";
import Slider from "react-slick";
export const Section1 = () => {
  var settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    swipe: true,
  };
  return (
    <div className="section1_container">
      <Slider {...settings}>
        {[Slide1, Slide2, Slide3].map((el, i) => (
          <div className="inner_box_slider" key={i}>
            <div
              className="slider_img"
              style={{
                backgroundImage: `url(${el})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            ></div>
            {/* <img src={el} alt="slider" /> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};
