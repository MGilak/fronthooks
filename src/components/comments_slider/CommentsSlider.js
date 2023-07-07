import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleSlide from "./SingleSlide";
import "./commentSlider.css";
import ChallengeSingleSlide from "./ChallengeSingleSlide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

// import required modules
import { Navigation, HashNavigation, EffectCards } from "swiper/modules";

const CommentsSlider = ({
  setEndSlider,
  setBeginSlider,
  sec,
  slide,
  data,
  setVid,
  setVidSrc,
}) => {
  const [changeSize, setChangeSize] = useState(false);

  const handleReachEnd = () => {
    setBeginSlider(true);
    setEndSlider(false);
  };
  const handleReachBegin = () => {
    setEndSlider(true);
    setBeginSlider(false);
  };
  const handleSlideChange = (swiper) => {
    if (!swiper.isBeginning && !swiper.isEnd) {
      setEndSlider(false);
      setBeginSlider(false);
    }
  };
  useEffect(() => {
    setEndSlider(true);
  }, []);

  // for slidesPerView
  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setChangeSize(true);
    } else {
      setChangeSize(false);
    }
  };

  useEffect(() => {
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("load", handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {sec === "cmnt" && (
        <Swiper
          onReachEnd={handleReachEnd}
          onReachBeginning={handleReachBegin}
          onSlideChange={handleSlideChange}
          spaceBetween={10}
          slidesPerView={changeSize ? 1 : 2}
          hashNavigation={{
            watchState: true,
          }}
          navigation={{
            nextEl: ".next-button-cmnt",
            prevEl: ".prev-button-cmnt",
          }}
          modules={[Navigation, HashNavigation]}
          className="mySwiper commentSlider"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <SingleSlide
                item={item}
                sec={sec}
                slide={slide}
                setVid={setVid}
                setVidSrc={setVidSrc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {sec === "emply" && (
        <Swiper
          onReachEnd={handleReachEnd}
          onReachBeginning={handleReachBegin}
          onSlideChange={handleSlideChange}
          spaceBetween={10}
          slidesPerView={1}
          hashNavigation={{
            watchState: true,
          }}
          navigation={{
            nextEl: ".next-button-emply",
            prevEl: ".prev-button-emply",
          }}
          modules={[Navigation, HashNavigation]}
          className="mySwiper commentSlider"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <SingleSlide
                item={item}
                sec={sec}
                slide={slide}
                setVid={setVid}
                setVidSrc={setVidSrc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {sec === "chlg" && (
        // <ChallengeSingleSlide />
        <Swiper
          effect={"cards"}
          spaceBetween={5}
          loop={true}
          navigation={{
            nextEl: ".next-button-chlg",
            prevEl: ".next-button-chlg",
          }}
          grabCursor={true}
          modules={[EffectCards, Navigation]}
          className="mySwiper chlg_slider"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <ChallengeSingleSlide />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default CommentsSlider;
