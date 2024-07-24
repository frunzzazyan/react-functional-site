import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "/src/SimpleSlider.css"

import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div className="item">
        <img src="https://media.istockphoto.com/id/980940618/photo/modern-gradient-abstract-background.jpg?s=612x612&w=0&k=20&c=bkni2R8OMYuzl4VsUcC_QYa4OVStW-z9jgLI8XGjEAw="/>
      </div>
      <div className="item">
        <img src="https://media.istockphoto.com/id/980940618/photo/modern-gradient-abstract-background.jpg?s=612x612&w=0&k=20&c=bkni2R8OMYuzl4VsUcC_QYa4OVStW-z9jgLI8XGjEAw="/>
      </div>
      <div className="item">
        <img src="https://media.istockphoto.com/id/980940618/photo/modern-gradient-abstract-background.jpg?s=612x612&w=0&k=20&c=bkni2R8OMYuzl4VsUcC_QYa4OVStW-z9jgLI8XGjEAw="/>
      </div>
      <div className="item">
        <img src="https://media.istockphoto.com/id/980940618/photo/modern-gradient-abstract-background.jpg?s=612x612&w=0&k=20&c=bkni2R8OMYuzl4VsUcC_QYa4OVStW-z9jgLI8XGjEAw="/>
      </div>
      <div className="item">
        <img src="https://media.istockphoto.com/id/980940618/photo/modern-gradient-abstract-background.jpg?s=612x612&w=0&k=20&c=bkni2R8OMYuzl4VsUcC_QYa4OVStW-z9jgLI8XGjEAw="/>
      </div>
      <div className="item">
        <img src="https://media.istockphoto.com/id/980940618/photo/modern-gradient-abstract-background.jpg?s=612x612&w=0&k=20&c=bkni2R8OMYuzl4VsUcC_QYa4OVStW-z9jgLI8XGjEAw="/>
      </div>
    </Slider>
  );
}