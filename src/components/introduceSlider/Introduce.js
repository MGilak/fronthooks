import React, { useState } from "react";
import Introduction from "../Introduction/Introduction";
import CommentsSlider from "../comments_slider/CommentsSlider";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import HistorySingleComp from "./../historySingleComp/HistorySingleComp";
import { history } from "./../../data";

const Introduce = ({
  title,
  sec,
  slide,
  employment,
  data,
  setVid,
  setVidSrc,
}) => {
  const [endSlider, setEndSlider] = useState(false);
  const [beginSlider, setBeginSlider] = useState(false);

  return (
    <div
      className={`${
        sec === "hstry" ? "mx-3" : "container"
      }  mx-auto xl:max-w-screen-xl`}
    >
      <div className="mx-auto flex md:flex-row flex-col items-center">
        {/* title */}
        <div
          className={`${
            sec === "hstry" ? "w-[100%] md:w-[33%]" : ""
          } relative mb-12 sm:mb-0 lg:w-[37%] md:w-[52%] sm:w-[100%] px-4 md:px-0 mt-5`}
        >
          <div className="flex items-center lg:gap-2">
            <div className="drop-shadow-[5px_20px_30px_rgba(0,0,0,0.25)]">
              <Introduction isHover={false}>
                <svg
                  viewBox="0 0 74 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-full h-full top-0 left-0 absolute "
                >
                  <path
                    d="M73.302 36.65c0 24.435-12.217 36.652-36.651 36.652C12.217 73.302 0 61.085 0 36.65 0 12.217 12.217 0 36.65 0c24.435 0 36.652 12.217 36.652 36.65Z"
                    fill="url(#warranty-holder_svg__a)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="warranty-holder_svg__a"
                      x1="0.099"
                      y1="0"
                      x2="73.212"
                      y2="73.413"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#7EB5F9"></stop>
                      <stop offset="1" stop-color="#6475FF"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="w-7 h-7 lg:w-11 lg:h-11 text-white z-10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M8.696 9.058h6.032m-6.032 3.456h3.839m.576 6.413h1.061c2.887 0 5.398-2.077 6.076-5.025a9.955 9.955 0 0 0 0-4.455l-.09-.386c-.652-2.841-2.781-5.049-5.494-5.698l-.381-.092a9.853 9.853 0 0 0-4.593 0l-.224.054c-2.81.672-5.014 2.959-5.69 5.901-.37 1.61-.367 3.303.003 4.912.687 2.989 2.708 5.476 5.419 6.635l.118.05c1.173.502 2.517-.102 2.998-1.333a.866.866 0 0 1 .797-.563Z"
                  ></path>
                </svg>
              </Introduction>
            </div>
            <div>
              <h1 className="font-extrabold md:2xl text-secondary-800 lg:text-3xl">
                {title[0]}
              </h1>
            </div>
          </div>

          <div className="pr-4 text-xs sm:text-xs w-[70%] md:w-[60%] lg:w-[80%] lg:text-[17px] md:text-[16px] text-stone-600">
            <p className="leading-relaxed">{title[1]}</p>
          </div>

          {/* btn prev & next */}
          {sec !== "hstry" && (
            <div className="flex gap-8 md:mt-4 sm:mt-2 lg:mt-14 mt-4 justify-center">
              <button
                className={`${
                  sec !== "chlg" && beginSlider
                    ? "bg-[#f0f0f0] text-slate-600"
                    : "bg-white text-black"
                } transition duration-200 ease-in-out ${
                  sec === "cmnt"
                    ? "next-button-cmnt"
                    : sec === "emply"
                    ? "next-button-emply"
                    : "next-button-chlg"
                } shadow-lg text-sm  font-bold flex items-center justify-center w-9 h-9 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-[50%]`}
              >
                <BsChevronRight />
              </button>
              <button
                className={`${
                  sec !== "chlg" && endSlider
                    ? "bg-[#f0f0f0] text-slate-600"
                    : "bg-white text-black"
                } transition duration-200 ease-in-out ${
                  sec === "cmnt"
                    ? "prev-button-cmnt"
                    : sec === "emply"
                    ? "prev-button-emply"
                    : "next-button-chlg"
                } shadow-lg text-sm font-bold flex items-center justify-center w-9 h-9 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-[50%]`}
              >
                <BsChevronLeft />
              </button>
            </div>
          )}
        </div>

        {/* silder */}
        <div className="flex-1 overflow-x-hidden sm:mt-4 overflow-hidden w-full sm:w-full">
          {sec === "hstry" ? (
            <div className="flex justify-center w-full lg:shrink-0">
              <div className="flex md:flex-row flex-col justify-end gap-6 w-full items-center md:items-stretch">
                <HistorySingleComp history={history[0]} className="lg:shrink-0">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="h-4 sm:w-5 w-4 sm:h-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </HistorySingleComp>
                <HistorySingleComp history={history[1]} className="lg:shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="w-5 h-5 "
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="M3 18.433a4.074 4.074 0 0 1 3.432-4.023l.178-.029a15.163 15.163 0 0 1 4.78 0l.178.029A4.074 4.074 0 0 1 15 18.433c0 .865-.702 1.567-1.567 1.567H4.567A1.567 1.567 0 0 1 3 18.433ZM12.5 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="1.5"
                      d="M15 11a3.5 3.5 0 1 0 0-7m2.39 16h2.043c.865 0 1.567-.702 1.567-1.567a4.074 4.074 0 0 0-3.432-4.023v0a2.28 2.28 0 0 0-.359-.029h-.968"
                    ></path>
                  </svg>
                </HistorySingleComp>
                <HistorySingleComp history={history[2]} className="lg:shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="w-5 h-5"
                  >
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="m15.875 19.487.18-.124c.566-.391.849-.587 1.101-.796a7.495 7.495 0 0 0 2.603-4.476c.056-.323.086-.664.144-1.346l.03-.353A17.996 17.996 0 0 0 19.906 9l-.036-.349a5.75 5.75 0 0 0-3.205-4.574 10.642 10.642 0 0 0-9.328 0A5.75 5.75 0 0 0 4.13 8.65L4.094 9a17.993 17.993 0 0 0-.029 3.391l.03.353c.06.682.089 1.023.145 1.346a7.495 7.495 0 0 0 2.603 4.476c.253.21.535.405 1.1.796l.18.124c.769.532 1.153.797 1.538.982a5.41 5.41 0 0 0 4.676 0c.385-.185.77-.45 1.537-.982Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="m9.25 11.75 2 2 3.5-3.75"
                    ></path>
                  </svg>
                </HistorySingleComp>
              </div>
            </div>
          ) : (
            <CommentsSlider
              setEndSlider={setEndSlider}
              setBeginSlider={setBeginSlider}
              sec={sec}
              slide={slide}
              employment={employment}
              data={data}
              setVid={setVid}
              setVidSrc={setVidSrc}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Introduce;
