

import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"; import { Autoplay, Pagination, Navigation } from "swiper/modules"; 
import Slider from "../../img/sidebar.png";
 import Ecommerce from "../../img/ecommerce.png";
  import HOC from "../../img/hoc.png";
   import MusicApp from "../../img/musicapp.png"; 
   import "swiper/css"; import "swiper/css/pagination";
    import "swiper/css/navigation"; 
    import { themeContext } from "../../Context"; 
    import { useContext } from "react";
    

const Portfolio = () => {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
   return (
     <div className="portfolio" id="Portfolio">
       <span style={{ color: darkMode ? "white" : "" }}>Recent Project</span>
       <span>Portfolio</span>
       
<Swiper
   modules={[Autoplay, Pagination, Navigation]}
   spaceBetween={20}
   slidesPerView={3}
   grabCursor={true}
   loop={true}
   autoplay={{ delay: 2500, disableOnInteraction: false }}
   pagination={{ clickable: true }}
   navigation={{
     nextEl: '.custom-next',
     prevEl: '.custom-prev',
   }}
   className="portfolio-slider"
>

         <SwiperSlide>
           <img src={Slider} alt="Sidebar Project" />
         </SwiperSlide>
         <SwiperSlide>
           <img src={Ecommerce} alt="Ecommerce Project" />
         </SwiperSlide>
         <SwiperSlide>
           <img src={MusicApp} alt="Music App" />
         </SwiperSlide>
         <SwiperSlide>
           <img src={HOC} alt="HOC Project" />
         </SwiperSlide>
       </Swiper>

       <div className="portfolio-nav">
   <button className="custom-prev">‹</button>
   <button className="custom-next">›</button>
</div>

     </div>
   );
};

export default Portfolio;

