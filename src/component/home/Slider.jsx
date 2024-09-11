import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import image6 from "../../assets/images/slider1.avif";
import image7 from "../../assets/images/slider2.avif";
import image8 from "../../assets/images/slider3.avif";
import image9 from "../../assets/images/slider4.avif";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
        <img src={image6} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image7} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image8} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image9} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
export default Slider;
