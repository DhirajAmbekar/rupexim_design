import React from "react";
import Slide1 from "../assets/hero4.png";
import Slide2 from "../assets/hero2.png";
import Slide3 from "../assets/hero3.png";
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
        {[
          {
            img: Slide1,
            title: (
              <>
                Style Meets Play: <br></br>Carry Life in Color
              </>
            ),
            desc: "Discover everyday essentials that spark joy — from trendsetting clothes and timeless bags to toys that bring imagination to life. Curated with care, crafted for every kind of day.",
          },
          {
            img: Slide2,
            title: "Carry What Matters",
            desc: "Discover everyday essentials that spark joy — from trendsetting clothes and timeless bags to toys that bring imagination to life. Curated with care, crafted for every kind of day.",
          },
          {
            img: Slide3,
            title: (
              <>
                Toys Hero Image: <br></br> Play Has No Age
              </>
            ),
            desc: "Discover everyday essentials that spark joy — from trendsetting clothes and timeless bags to toys that bring imagination to life. Curated with care, crafted for every kind of day.",
          },
        ].map((el, i) => (
          <div className="inner_box_slider" key={i}>
            <div
              className="slider_img"
              style={{
                backgroundImage: `url(${el.img})`,
                backgroundSize: "cover",
              }}
            >
              <div className="slider_box">
                <div className="slider_text1">{el.title}</div>
                <div className="slider_text2">{el.desc}</div>
                <button>Shop Now</button>
              </div>
            </div>

            {/* <img src={el} alt="slider" /> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};
