import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import CardImage from "../../Components/CardImage";
import "swiper/css";
import "swiper/css/autoplay";

function HomeCenter() {
  const configureSwiper = {};

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
            768: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            991: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
          }}
        >
          <SwiperSlide>
            <CardImage />
          </SwiperSlide>
          <SwiperSlide>
            <CardImage />
          </SwiperSlide>
          <SwiperSlide>
            <CardImage />
          </SwiperSlide>
          <SwiperSlide>
            <CardImage />
          </SwiperSlide>
          <SwiperSlide>
            <CardImage />
          </SwiperSlide>
          <SwiperSlide>
            <CardImage />
          </SwiperSlide>
          <SwiperSlide>
            <CardImage />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeCenter;
