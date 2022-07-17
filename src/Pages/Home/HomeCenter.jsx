import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

function HomeCenter() {
  return (
    <div className="home-center container">
      <h2 className="home-center_heading">the best select:</h2>
      <div className="home-center_slider">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={12}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            540 : {
              slidesPerView : 4 , 
              spaceBetween : 16 , 
            },
            768 : {
              slidesPerView : 5 , 
              spaceBetween : 16 , 
            },
          }}
        >
          <SwiperSlide>slide 1</SwiperSlide>
          <SwiperSlide>slide 2</SwiperSlide>
          <SwiperSlide>slide 3</SwiperSlide>
          <SwiperSlide>slide 4</SwiperSlide>
          <SwiperSlide>slide 5</SwiperSlide>
          <SwiperSlide>slide 6</SwiperSlide>
          <SwiperSlide>slide 7</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeCenter;
