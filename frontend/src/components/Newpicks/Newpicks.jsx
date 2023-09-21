import React, { useState, useEffect } from "react";
import "./newpicks.css";
import Slider from "react-slick";
import { one, two, three, four, five, six } from "../../assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Newpicks = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIsVisible(true);
      }, 3000);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  return (
    <section className="container__container newpicks__container">
      <div className="container">
        <div className="newpicks__content">
          <p>SHOP OUR</p>
          <h2>NEW DESIGNER PICKS</h2>
          <div className="slider__content">
            <div
              className={`image-container ${isVisible ? "visible" : "hidden"}`}
            >
              <img src={one} alt="" />
              <p className="newpicks__text-img">HOME</p>
            </div>
            <div
              className={`image-container ${isVisible ? "visible" : "hidden"}`}
            >
              <img className="otherimage" src={two} alt="" />
              <p className="newpicks__text-img">DECORATION</p>
            </div>
            <div
              className={`image-container ${isVisible ? "visible" : "hidden"}`}
            >
              <img className="otherimage" src={three} alt="" />
              <p className="newpicks__text-img">FURNITURE</p>
            </div>
            <div
              className={`image-container ${isVisible ? "visible" : "hidden"}`}
            >
              <img className="otherimage" src={four} alt="" />
              <p className="newpicks__text-img">ECO</p>
            </div>
          </div>

          <div className="slider">
            <Slider {...settings}>
              <div className="image-container-slider">
                <img src={one} alt="" />
                <p className="newpicks__text-img">HOME</p>
              </div>
              <div className="image-container-slider">
                <img className="otherimage" src={two} alt="" />
                <p className="newpicks__text-img">DECORATION</p>
              </div>
              <div className="image-container-slider">
                <img className="otherimage" src={three} alt="" />
                <p className="newpicks__text-img">FURNITURE</p>
              </div>
              <div className="image-container-slider">
                <img className="otherimage" src={four} alt="" />
                <p className="newpicks__text-img">ECO</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newpicks;
