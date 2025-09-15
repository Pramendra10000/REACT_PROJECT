import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from "../../img/profile2.jpg";
import profilepic3 from "../../img/profile3.jpg";
import profilepic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    { img: profilepic1, review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut pariatur incidunt hic vero id ipsa impedit, modi iusto sint explicabo quo harum exercitationem asperiores quis nobis. Voluptate dolorum aliquid exercitationem." },
    { img: profilepic2, review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut pariatur incidunt hic vero id ipsa impedit" },
    { img: profilepic3, review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut pariatur incidunt hic vero id ipsa impedit, modi iusto sint explicabo quo harum exercitationem asperiores quis nobis. Voluptate dolorum aliquid exercitationem." },
    { img: profilepic4, review: "Lorem ipsum..." },
  ];

  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients Always Get</span>
        <span>Exceptional Work</span>
        <span>From me...</span>
        <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
      
      <div className="blur t-blur2" style={{background: "skyblue"}}></div>
     
      </div>

      {/* Slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.img} alt={`client-${index}`} />
              <span>{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default Testimonial;
