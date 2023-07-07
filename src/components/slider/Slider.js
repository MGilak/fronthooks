import React from "react";
import SingleSlide from "./SingleSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
import { newest } from "./../../data";

// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        draggable={true}
        centeredSlides={true}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // modules={[Autoplay]}
        className="mySwiper flex latest_courses"
      >
        {newest.map((course) => (
          <SwiperSlide key={course.id}>
            <SingleSlide course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
