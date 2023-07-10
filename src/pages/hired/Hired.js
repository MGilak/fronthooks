import React, { useState, useRef, useEffect } from "react";
import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import Introduce from "./../../components/introduceSlider/Introduce";
import { employment, employment_title } from "./../../data";

const Hired = () => {
  const [vid, setVid] = useState(false);
  const [vidSrc, setVidSrc] = useState("");

  const videoRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (videoRef.current && !videoRef.current.contains(event.target)) {
        setVid(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (vid) videoEl.play();

    return () => {
      videoEl.pause();
    };
  }, [vid]);

  return (
    <div>
      <Header />

      {/* video */}
      <div
        className={`${
          vid ? "block" : "hidden"
        } z-50 flex justify-center fixed w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.4)] top-0 left-0 bottom-0 right-0`}
      >
        <div className="max-w-3xl max-h-96 rounded-2xl border-2 border-white overflow-hidden mt-28">
          <video
            className="max-w-full max-h-full"
            ref={videoRef}
            src="./videos/آموزش تخصصی برنامه نویسی وب - فرانت اند - فرانت هوکس.mp4"
            controls
          ></video>
        </div>
      </div>

      <section className="py-16">
        <Introduce
          title={employment_title}
          sec="emply"
          slide={1}
          data={employment}
          setVid={setVid}
          setVidSrc={setVidSrc}
        />
      </section>

      <Footer />
    </div>
  );
};

export default Hired;
