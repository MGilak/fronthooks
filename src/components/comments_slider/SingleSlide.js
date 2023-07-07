import React, { useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";

const SingleSlide = ({ item, slide, sec, setVid, setVidSrc }) => {
  const playVideo = () => {
    setVidSrc(item.video);
    setVid(true);
  };

  return (
    <div>
      <div
        className={`${
          slide === 1
            ? "w-[97%] mr-3"
            : "lg:w-[279px] xl:w-[370px] md:w-[370px] mt-4 mb-4 lg:mr-4 w-full sm:w-full "
        } bg-white rounded-2xl p-4 px-6 h-[380px] shadow-[0_0_30px_10px_rgba(0,0,0,0.05)]`}
      >
        <div className="flex items-center gap-1 text-green-500 mb-4">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            class="ml-1"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path>
          </svg>
          <p className="">پیشنهاد می‌کنم</p>
        </div>

        <div className="mb-6">
          <h2 className="font-bold text-secondary-700">{item.title}</h2>
        </div>

        <div
          className={`${
            sec === "emply" ? "h-[49%]" : "h-[55%]"
          }  text-secondary-800 leading-6 text-sm overflow-x-hidden pl-4`}
        >
          <p>{item.content}</p>

          {sec === "emply" && (
            <div className="w-full">
              <div className="flex justify-center">
                <div className="rounded-2xl  w-[74%] border-[3px] border-blue-500 relative">
                  <img
                    className="rounded-2xl w-full border-[3px] border-white object-cover"
                    src={item.image}
                    alt=""
                  />

                  <span
                    onClick={playVideo}
                    className="rounded-full w-8 h-8 absolute bottom-[-5px] right-[-14px] bg-white cursor-pointer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 20 20"
                      class="text-primary-900 h-full w-full"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* notes */}
          <div className="mt-5">
            {item.note1 && (
              <div className="flex gap-4 items-center">
                <span className="text-green-500 text-lg">
                  <BsPlus />
                </span>
                <p>{item.note1}</p>
              </div>
            )}
            {item.note2 && (
              <div className="flex gap-4 items-center">
                <span className="text-green-500 text-lg">
                  <BsPlus />
                </span>
                <p>{item.note2}</p>
              </div>
            )}
            {item.note3 && (
              <div className="flex gap-4 items-center">
                <span className="text-green-500 text-lg">
                  <BsPlus />
                </span>
                <p>{item.note3}</p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full h-[2px] bg-gray-200 mt-2 mb-3"></div>

        {/* footer */}
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="border-2 overflow-hidden shadow-[0_0_7px_0_rgba(0,0,0,0.3)] border-white flex items-center justify-center md:w-10 w-8 md:h-10 h-8 bg-gray-400 rounded-[50%]">
              {item.img ? (
                <img
                  className="w-full h-full opacity-100 object-cover"
                  src={item.img}
                  alt=""
                />
              ) : (
                <p className="opacity-100 text-white">م</p>
              )}
            </div>

            <div className="pr-3">
              <div className="flex items-center ">
                <span className="font-extrabold text-sm text-secondary-900">
                  {item.name}
                </span>
                <span class="mr-1 font-normal text-[10px] lg:text-xs text-gray-400">
                  {item.date}
                </span>
              </div>
              <div>
                <span class="opacity-80 text-[11px] whitespace-nowrap">
                  {item.course}
                </span>
              </div>
            </div>
          </div>

          <div className="text-[#ff9900] text-sm flex mr-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSlide;
