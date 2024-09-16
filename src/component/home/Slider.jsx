import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import slider1 from "../../assets/images/slider1.avif";
import slider2 from "../../assets/images/slider2.avif";
import slider3 from "../../assets/images/slider3.avif";
import slider4 from "../../assets/images/slider4.avif";

import "swiper/css";
import "swiper/css/navigation";



function Slider() {
  return (
 <Swiper   
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      className="slider"
      navigation
    >
      <SwiperSlide>
        <img src={slider1} alt=""  />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider4} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
export default Slider;
