import React from "react";
import "./Testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="t-heading">
        <span>Clients Alyes Get</span>
        <span>Exceptional Work</span>
        <span>From me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* Slider */}
      <Swiper></Swiper>
    </div>
  );
};

export default Testimonial;
