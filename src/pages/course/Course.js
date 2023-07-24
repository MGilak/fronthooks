import React, { useState, useRef, useEffect } from "react";
import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import { BsHeart } from "react-icons/bs";
import { FaStar, FaEye, FaEyeSlash, FaAngleDown } from "react-icons/fa";
import Session from "./../../components/sessions/Session";
import { useParams } from "react-router-dom";
import { newest } from "./../../data";

const Course = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [openSessions, setOpenSessions] = useState(false);
  const [categoryQus, setCategoryQus] = useState(false);
  const [category, setCategory] = useState("");
  const [inputBG, setInputBG] = useState(false);
  const [showQus, setShowQus] = useState(false);

  const toUpDetailRef = useRef();
  const toUpSessionRef = useRef();
  const inpurRef = useRef();
  const questionsRef = useRef();
  const qusBoxRef = useRef();

  const { id } = useParams();

  const myCourse = newest.find((item) => item.id === Number(id));

  const handleDetails = () => {
    setOpenDetails(!openDetails);
    toUpDetailRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSession = () => {
    setOpenSessions(!openSessions);
    toUpSessionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inpurRef.current && !inpurRef.current.contains(event.target)) {
        setInputBG(false);
        // setCategoryQus(false);
      }

      if (
        questionsRef.current &&
        !questionsRef.current.contains(event.target)
      ) {
        setCategoryQus(false);
      }

      if (qusBoxRef.current && !qusBoxRef.current.contains(event.target)) {
        setShowQus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inpurRef, questionsRef]);

  return (
    <div>
      <Header />
      {/* register fixed */}
      <div class="sm:hidden z-20 bg-white flex justify-center p-4 fixed bottom-0 left-0 right-0">
        <button
          class="flex-1 bg-blue-500 rounded-xl text-white font-bold py-[10px] shadow-[0_6px_15px_-8px_rgba(82,122,255,1)]"
          type="button"
        >
          ثبت نام دوره
        </button>
      </div>

      <div className="container mx-auto mt-10 xl:max-w-screen-xl">
        {/* title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-x-14 bg-white rounded-2xl p-3 py-6 lg:p-5 mb-10">
          {/* right */}
          <div className="col-span-1 lg:col-span-7 xl:col-span-6">
            <div>
              <h1 className="text-gray-900 font-extraBlack text-2xl mb-2">
                {myCourse.name}
              </h1>

              <p className="text-gray-400 text-sm md:text-base leading-7 font-bold md:leading-8 mb-7">
                {myCourse.desc}
              </p>
            </div>

            <div className="flex flex-col gap-y-7 mb-8 lg:justify-between lg:flex-row">
              <div className="flex justify-between lg:justify-start lg:gap-x-20 items-center">
                <div className="flex flex-col items-center gap-y-3">
                  <div className="shhadow_center_blue p-4 lg:p-[17px] relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16">
                    <svg
                      viewBox="0 0 74 74"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full top-0 left-0 absolute"
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
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      className="text-white z-10 h-6 w-6"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"></path>
                      <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"></path>
                      <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-bold">۴۴:۱۱:۰۰ </span>
                </div>

                <div className="flex flex-col items-center gap-y-3">
                  <div className="shhadow_center_blue p-4 lg:p-[17px] relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16">
                    <svg
                      viewBox="0 0 74 74"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full top-0 left-0 absolute"
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
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 20 20"
                      class="text-white z-10 h-7 w-7"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-secondary-700 font-bold">
                    ۴۴:۱۱:۰۰{" "}
                  </span>
                </div>

                <div className="flex flex-col items-center gap-y-3">
                  <div className="shhadow_center_blue p-4 lg:p-[17px] relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16">
                    <svg
                      viewBox="0 0 74 74"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full top-0 left-0 absolute"
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
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="text-white z-10 w-7 h-7"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <desc></desc>
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                    </svg>
                  </div>
                  <span className="text-secondary-700 font-bold">
                    ۶۶۹ دانشجو
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between lg:flex-col lg:items-end gap-y-4">
                <button className="flex items-center gap-x-1 text-gray-500 hover:text-rose-500">
                  <BsHeart className="text-lg" />
                  <span>۱۱۶</span>
                </button>

                <button className="flex items-center gap-x-1 text-gray-500 hover:text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M9.317 3.325a8.005 8.005 0 0 0-6.025 5.901 10.413 10.413 0 0 0 .004 4.912 9.63 9.63 0 0 0 5.737 6.635l.125.05a2.454 2.454 0 0 0 3.175-1.333.916.916 0 0 1 .843-.563H14.3c3.056 0 5.715-2.077 6.433-5.025a9.416 9.416 0 0 0 0-4.455l-.094-.386a7.73 7.73 0 0 0-5.818-5.698l-.404-.092a11.03 11.03 0 0 0-4.863 0l-.237.054Zm-.815 5.042a.694.694 0 0 0-.697.69c0 .383.312.692.697.692h6.386c.385 0 .697-.31.697-.691a.694.694 0 0 0-.697-.691H8.502Zm1.161 3.456a.694.694 0 0 0-.697.691c0 .382.312.691.697.691h4.064c.385 0 .697-.31.697-.69a.694.694 0 0 0-.697-.692H9.663Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>۶</span>
                </button>

                <div className="flex flex-col items-center gap-y-1">
                  <span className="flex gap-[1px] text-sm text-[#ff9900]">
                    <FaStar className="cursor-pointer" />
                    <FaStar className="cursor-pointer" />
                    <FaStar className="cursor-pointer" />
                    <FaStar className="cursor-pointer" />
                    <FaStar className="cursor-pointer" />
                  </span>

                  <span className="flex items-center text-xs font-bold text-gray-400">
                    ۵&nbsp; از &nbsp;۹&nbsp; رای
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-y-2 gap-x-3 flex-col md:flex-row md:items-center flex-wrap text-xs">
              <div className="flex items-center gap-x-1 p-1.5 rounded-lg bg-gray-200/70 text-gray-500">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.948 11.112C18.511 7.67 15.563 5 12.004 5c-2.756 0-5.15 1.611-6.243 4.15-2.148.642-3.757 2.67-3.757 4.85 0 2.757 2.243 5 5 5h1v-2h-1c-1.654 0-3-1.346-3-3 0-1.404 1.199-2.757 2.673-3.016l.581-.102.192-.558C8.153 8.273 9.898 7 12.004 7c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-2v2h2c2.206 0 4-1.794 4-4a4.008 4.008 0 0 0-3.056-3.888z"></path>
                  <path d="M13.004 14v-4h-2v4h-3l4 5 4-5z"></path>
                </svg>
                <span className="font-bold">روش دریافت: اسپات پلیر</span>
              </div>

              <div className="flex items-center gap-x-1 p-1.5 rounded-lg bg-gray-200/70 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M8.07 3v2.514M15.93 3v2.514M3.833 15.249a13.202 13.202 0 0 1 0-5.896c.616-2.684 2.664-4.78 5.287-5.41a12.33 12.33 0 0 1 5.76 0c2.623.63 4.671 2.726 5.287 5.41a13.2 13.2 0 0 1 0 5.896c-.616 2.684-2.664 4.78-5.287 5.41a12.33 12.33 0 0 1-5.76 0c-2.623-.63-4.671-2.726-5.287-5.41Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m10 12.4 1.454 1.6L14 11"
                  ></path>
                </svg>
                <span className="font-bold">تاریخ انتشار :</span>
                <span className="font-bold">۱۴۰۱/۱۱/۱۵</span>
              </div>

              <div className="flex items-center gap-x-1 p-1.5 rounded-lg bg-gray-200/70 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5"
                >
                  <path
                    fill="currentColor"
                    d="m3.353 15.05-.73.17.73-.17Zm0-6.1-.73-.17.73.17Zm17.294 0-.73.172.73-.172Zm0 6.1-.73-.172.73.172Zm-5.597 5.597-.172-.73.172.73Zm-6.1 0 .172-.73-.172.73Zm0-17.294.172.73-.172-.73Zm6.1 0-.172.73.172-.73Zm-7.193 8.87a.75.75 0 0 0 1.004 1.115l-1.004-1.115Zm2.209-.979.501.558-.501-.558Zm1.561.197.624-.417-.624.417Zm.746 1.118-.624.417.624-.417Zm1.561.197-.501-.558.501.558Zm2.209-.979a.75.75 0 0 0-1.004-1.115l1.004 1.115Zm-3.068 1.51-.094.745.094-.745Zm-2.15-2.575-.093.745.093-.745Zm-6.842 4.166a12.604 12.604 0 0 1 0-5.756l-1.46-.343a14.104 14.104 0 0 0 0 6.442l1.46-.343Zm15.834-5.756a12.603 12.603 0 0 1 0 5.756l1.46.343a14.104 14.104 0 0 0 0-6.442l-1.46.343Zm-5.039 10.795a12.603 12.603 0 0 1-5.756 0l-.343 1.46c2.119.497 4.323.497 6.442 0l-.343-1.46ZM9.122 4.083a12.604 12.604 0 0 1 5.756 0l.343-1.46a14.103 14.103 0 0 0-6.442 0l.343 1.46Zm0 15.834a6.761 6.761 0 0 1-5.039-5.039l-1.46.343a8.261 8.261 0 0 0 6.156 6.156l.343-1.46Zm6.099 1.46a8.261 8.261 0 0 0 6.156-6.156l-1.46-.343a6.761 6.761 0 0 1-5.039 5.039l.343 1.46Zm-.343-17.294a6.761 6.761 0 0 1 5.039 5.039l1.46-.343a8.261 8.261 0 0 0-6.156-6.156l-.343 1.46ZM8.78 2.623a8.261 8.261 0 0 0-6.156 6.156l1.46.343a6.761 6.761 0 0 1 5.039-5.039l-.343-1.46Zm.082 10.715 1.706-1.536-1.003-1.115-1.707 1.536 1.004 1.115Zm2.142-1.481.746 1.119 1.248-.833-.746-1.119-1.248.833Zm3.433 1.456 1.707-1.536-1.004-1.115-1.706 1.536 1.003 1.115Zm-2.687-.338c.143.214.292.442.443.611.165.185.415.399.79.446l.186-1.489a.356.356 0 0 1 .142.05c.026.016.027.024.001-.005a1.838 1.838 0 0 1-.118-.155 13.848 13.848 0 0 1-.196-.29l-1.248.832Zm1.684-.777c-.106.096-.19.17-.262.232-.073.063-.12.1-.153.121-.032.021-.029.015 0 .005a.356.356 0 0 1 .15-.013l-.187 1.489c.374.047.67-.099.875-.237.188-.126.39-.31.58-.482l-1.003-1.115Zm-2.866-.396c.106-.096.19-.17.262-.232.073-.063.12-.1.153-.121.032-.021.029-.015 0-.005a.356.356 0 0 1-.15.013l.187-1.489c-.374-.047-.67.099-.875.237-.188.126-.39.31-.58.482l1.003 1.115Zm1.684-.777c-.143-.214-.292-.442-.443-.611-.165-.185-.415-.399-.79-.446l-.186 1.489a.356.356 0 0 1-.142-.05c-.026-.016-.027-.024-.001.005.025.03.062.076.118.155.055.078.117.17.196.29l1.248-.832Z"
                  ></path>
                </svg>
                <span className="font-bold">آخرین بروزرسانی:</span>
                <span className="font-bold">۱۴۰۲/۴/۲۰</span>
              </div>

              <div className="flex items-center gap-x-1 px-[5px] py-[7px] rounded-lg bg-gray-200/70 text-gray-500">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  className="w-5 h-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"></path>
                </svg>
                <span className="font-bold">پشتیبانی: دائمی تلگرام</span>
              </div>
            </div>
          </div>

          {/* left */}
          <div className="flex justify-center h-[100%] lg:pt-[21%] xl:pt-[3%] col-span-1 lg:col-span-5 xl:col-span-6 order-1 md:order-2 self-center">
            <div className="relative">
              <video
                controls
                poster={myCourse.img}
                className="object-cover rounded-xl h-[54%] sm:h-[330px] md:h-[400px] lg:h-[200px] xl:h-[321px] w-[745px] lg:w-[700px]"
              >
                <source src="/videos/nextjs.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* body */}
        <div
          ref={toUpDetailRef}
          className="grid grid-cols-12 gap-y-8 md:gap-x-8"
        >
          <div className="col-span-12 md:col-span-8 lg:col-span-9 order-2 md:order-1 space-y-8">
            <div className="relative rounded-xl overflow-hidden max-h-[100%]">
              <div
                className={`transition-all duration-200 ${
                  openDetails ? "max-h-[2000px]" : "max-h-[400px]"
                } bg-white rounded-xl p-3 lg:p-6`}
              >
                <h2 class="text-2xl font-bold text-primary-900 mb-5">
                  توضیحات دوره
                </h2>

                <div className="prose prose-p:text-secondary-700 prose-headings:text-secondary-800 prose-headings:font-black lg:prose-lg prose-p:leading-9 max-w-none prose-strong:text-secondary-800 prose-strong:font-bold prose-blockquote:before:none prose-ul:list-inside prose-ol:list-inside prose-li:text-base prose-li:text-secondary-700 prose-img:rounded-xl prose-img:max-w-sm">
                  <p>
                    آموزش پروژه محور نکست (Next.js) به همراه نکست 13 در قالب
                    پروژه های متنوع ارائه شده است. هدف ما درک عملکرد نکست در
                    پروژه پیچیده دوره است.
                  </p>

                  <div>
                    <h3>نکست جی اس (Next.js) چیست ؟</h3>

                    <p>
                      js یک فریمورک فول استک مبتنی بر ریکت هست برای تولید وبسایت
                      ها و وب اپلیکیشن های تحت وب با سرعت و عملکرد بهتر. به طور
                      خلاصه، Next.js همان ریکت هست به علاوه چندین ویژگی قدرتمند
                      دیگر، یعنی تمام مفاهیم React.js همچنان در Next.js هم
                      استفاده می شود. برخلاف کتابخانه ریکت، نکست یک فریمورک هست
                      و اکثر ابزارهایی را که نیاز داریم، خود نکست آماده دارد. به
                      کمک نکست میتوان همزمان بک اند را هم توسعه داد و این ویژگی
                      نکست را خیلی متمایز کرده است.
                    </p>

                    <h3>آیا با یادگیری نکست، از ریکت بی نیاز میشیم ؟</h3>

                    <p>
                      قطعا خیر! تمام مفاهیم ریکت مثل (کامپوننت، life cylcle
                      کامپوننت ها، هوک ها، استیت و...) همچنان در Next.js استفاده
                      میشه. پس ریکت دقیقا پیش نیاز Next.js هست و برای تسلط خوب
                      در Next.js باید ابتدا ریکت را خوب فرا بگیرید.{" "}
                    </p>

                    <h3>آیا باید همیشه از نکست استفاده بشه ؟</h3>

                    <p>
                      خیر! هدف مهم نکست جی اس بهبود عملکرد برنامه (performance)
                      و بهینه سازی برای موتور های جست و جو (SEO) هست. از آنجایی
                      که سئو هدف مهم هر کسب و کاری هست، پس هر برنامه ای که نیاز
                      به سئو داشته باشه، اولین انتخاب شما قطعا نکست خواهد بود.
                      اما در برنامه های داخل سازمانی یا پنل های ادمین و کاربر و
                      یا هر برنامه ای که نیازی به سئو نداشته باشه، استفاده از
                      ریکت مشکلی ایجاد نخواهد کرد.
                    </p>

                    <h3>چرا باید Next.js را یاد بگیریم؟</h3>

                    <p>
                      همانطور که بالاتر اشاره کردم، هدف هر برنامه ای ارائه خدمات
                      به کاربراش هست و باید برنامه شما به دست کاربر هدف برسه.
                      بهینه سازی در موتورهای جست و جو مثل گوگل، قطعا بهترین
                      کانال برای پیدا کردن مخاطب هدف هست و این یعنی سئو. یکی از
                      هدف های استفاده از نکست جی اس بهبود سئو و عملکرد برنامه
                      هست و این جذابیت این فریمورک را روز به روز بیشتر میکند.
                    </p>

                    <h3>چرا این دوره آماده شد؟</h3>

                    <p>
                      مطالب ارائه شده در این دوره حاصل تجربه بیش از 5 سال فعالیت
                      تخصصی در برنامه نویسی وب و انجام پروژه ها و چالش های متنوع
                      هست. در تمام این مدت خلا های یادگیری حوزه فرانت و چالش های
                      پروژه های واقعی را شناسایی کرده ام. بنابراین یک دوره کاملا
                      پروژه محور و حرفه ای برای شما آماده شده است تا بتوانید هم
                      در شرکت ها به سطح حرفه ای تری برسید و هم اینکه پروژه های
                      با عدد های بالاتری انجام دهید.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div
                class={`${
                  !openDetails && "bg-gradient-to-t from-white via-white/70"
                } flex items-end justify-center absolute bottom-0 left-0 w-full  h-60`}
              >
                <button
                  onClick={handleDetails}
                  class="flex text-gray-700 items-center gap-2 text-[14px] font-bold bg-gray-200 rounded-lg px-3 py-[5px] mb-2"
                  type="button"
                >
                  <span className="text-lg text-gray-700">
                    {openDetails ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {openDetails ? "بستن" : "ادامه مطالب"}
                </button>
              </div>
            </div>

            <div
              ref={toUpSessionRef}
              className="relative rounded-xl overflow-hidden"
            >
              <div
                className={`transition-all duration-200 ${
                  openSessions ? "max-h-[2000px]" : "max-h-[400px]"
                } bg-white rounded-xl p-3 lg:p-6`}
              >
                <h2 class="text-2xl font-extraBlack text-primary-900 mb-5">
                  جلسات دوره
                </h2>
                <Session />
                <Session />
                <Session />
                <Session />
                <Session />
                <Session />
                <Session />
                <Session />
                <Session />
                <Session />
                <Session />
                <Session />
                <Session />
              </div>

              <div
                class={`${
                  !openSessions && "bg-gradient-to-t from-white via-white/70"
                } flex items-end justify-center absolute bottom-0 left-0 w-full  h-60`}
              >
                <button
                  onClick={handleSession}
                  class="flex text-gray-700 items-center gap-2 text-[14px] font-bold bg-gray-200 rounded-lg px-3 py-[5px] mb-2"
                  type="button"
                >
                  <span className="text-lg text-gray-700">
                    {openSessions ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {openSessions ? "بستن" : "ادامه مطالب"}
                </button>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl py-6 px-3 lg:px-6">
                <div className="flex flex-col items-center lg:flex-row justify-between gap-y-3 mb-8">
                  <h2 class="text-[23px] font-bold text-blue-600">
                    پرسش‌های شما
                  </h2>

                  <button
                    onClick={() => setShowQus(true)}
                    class="ring-2 hover:bg-blue-50/30 ring-blue-400 hover:ring-blue-600 transition-all duration-150 text-blue-600 px-6 py-2 rounded-xl flex items-center text-sm font-bold w-full lg:w-auto"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="w-4 h-4 ml-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>ثبت پرسش جدید</span>
                  </button>
                </div>

                {/* comments */}
                <div className="space-y-8">
                  <div>
                    {/* header */}
                    <div className="border z-20 border-gray-200 rounded-xl p-2 sm:p-4 mb-3">
                      <div className="flex items-center justify-between mb-5 border-b border-b-gray-200/60 pb-2">
                        <div class="flex items-center">
                          <div class="border-2 ml-2 bg-gray-400/70 text-2xl pb-1 shrink-0 rounded-[50%] text-white w-10 h-10 flex items-center justify-center">
                            ه
                          </div>
                          <div class="text-sm w-full text-gray-600">
                            <span class="font-bold block mb-1">
                              هادی بابایی
                            </span>
                            <span class="block text-secondary-500 text-xs">
                              ۳ هفته پیش
                            </span>
                          </div>
                        </div>

                        <div>
                          <button class="flex items-center hover:bg-gray-100 transition-all duration-150 bg-gray-200 text-[14px] px-2 py-[5px] rounded-lg text-gray-600 bg-secondary-100/50">
                            <span class="ml-1">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 20 20"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <span>پاسخ</span>
                          </button>
                        </div>
                      </div>

                      <p class="text-gray-600 leading-loose lg:leading-8 text-xs lg:text-base">
                        سلام و خسته نباشید استاد من دوره طراحی ریسپانسیو شما رو
                        گرفتم و فکر کردم لایسنس رو هم رو سیستم هم موبایل میشه زد
                        چون من هر دوره ای خریدم اینطوری بود، من الان لایسنس رو
                        در اسپات پلیر گوشی زدم ولی دیگ وقتی رو سیستم میزنم میگ
                        دفعات زیادی زدی!! اخ من میخاستم رو هر دو پلتفرم باشه{" "}
                      </p>
                    </div>

                    {/* body */}
                    <div className="relative">
                      <div className="course-comments__answer mr-2 sm:mr-8 space-y-3">
                        <div className="relative">
                          <div className="answer-item border border-gray-100 bg-gray-50/80 rounded-xl p-2 sm:p-4 last-item">
                            <div className="flex items-center justify-between mb-5 border-b border-b-gray-200/60 pb-2">
                              <div className="flex items-center ">
                                <div className="rounded-[50%] shrink-0 border-2 ml-2">
                                  <img
                                    alt="صاحب محمدی"
                                    src="/images/saheb.webp"
                                    class="w-10 h-10 rounded-[50%] object-cover"
                                  />
                                </div>

                                <div class="text-sm w-full text-gray-600">
                                  <span class="font-bold block mb-1">
                                    صاحب محمدی
                                  </span>
                                  <span class="block text-gray-500 text-xs">
                                    ۳ هفته پیش
                                  </span>
                                </div>
                              </div>
                            </div>

                            <p class="text-secondary-700 leading-loose lg:leading-8 text-xs lg:text-base">
                              سلام وقت بخیر به پشتیبانی تلگرام پیام بدین لطفا.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* side */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 order-1 lg:order-2 space-y-4">
            <div class="rounded-xl p-3 lg:p-5 bg-white">
              <div class="flex md:flex-col md:gap-y-1 items-center justify-between mb-3">
                <div class="font-bold  flex-1 flex items-center justify-center">
                  <span class="text-3xl text-gray-800 font-bold ml-2 lg:text-4xl">
                    ۲,۵۸۹,۰۰۰
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 2"
                    viewBox="0 0 51.29 27.19"
                    width="51"
                    height="27"
                    class="text-gray-200 opacity-50 w-5 h-5 lg:w-6 lg:h-6"
                  >
                    <path
                      d="M36.48 22.85c1.78-.83 2.93-1.81 3.45-2.94h-1.65c-2.53 0-4.69-.66-6.47-1.97-.59.68-1.23 1.2-1.93 1.55s-1.54.53-2.5.53c-1.03 0-1.87-.18-2.51-.53-.65-.35-1.14-.96-1.5-1.83-.35-.87-.56-2.08-.63-3.62-.02-.28-.04-.6-.04-.97s-.01-.72-.04-1.07c-.14-3.42-.28-6.26-.42-8.51l-5.8 1.37c.73 1.64 1.34 3.34 1.83 5.08.49 1.75.74 3.58.74 5.5 0 1.6-.37 3.12-1.11 4.57-.74 1.46-1.85 2.64-3.32 3.57-1.48.93-3.27 1.39-5.38 1.39s-3.82-.45-5.21-1.34C2.61 22.74 1.6 21.6.96 20.22c-.63-1.38-.95-2.84-.95-4.36 0-1.2.13-2.28.4-3.25.27-.97.63-1.93 1.07-2.87l2.39 1.34c-.38.92-.65 1.71-.83 2.39-.18.68-.26 1.48-.26 2.39 0 1.76.49 3.19 1.48 4.29s2.63 1.65 4.92 1.65c1.55 0 2.87-.32 3.96-.95 1.09-.63 1.9-1.44 2.43-2.43.53-.98.79-1.98.79-2.99 0-2.65-.82-5.82-2.46-9.5l1.69-3.52L22.38.79c.16-.05.39-.07.67-.07.54 0 .98.19 1.32.56s.53.88.58 1.51c.14 2.04.27 5.02.39 8.94.02.38.04.75.04 1.13s.01.71.04 1.02c.05 1.03.22 1.78.53 2.25s.81.7 1.51.7c.84 0 1.52-.18 2.04-.53.52-.35.97-1 1.37-1.93.75-1.71 1.33-2.96 1.74-3.75.41-.79.94-1.46 1.58-2.04.64-.57 1.44-.86 2.37-.86 1.83 0 3.27.94 4.31 2.83s1.69 4.06 1.95 6.53c1.57-.02 2.77-.13 3.61-.33.83-.2 1.41-.49 1.72-.88.32-.39.47-.89.47-1.5 0-.75-.16-1.67-.49-2.76-.33-1.09-.69-2.1-1.09-3.04l2.43-1.23c1.22 3.1 1.83 5.44 1.83 7.04 0 1.83-.67 3.18-2 4.04-1.34.87-3.53 1.34-6.58 1.41-.49 2.21-1.8 3.93-3.92 5.19-2.12 1.25-4.68 1.98-7.69 2.16l-1.2-2.88c2.6-.14 4.8-.63 6.58-1.46ZM10.38 5.66l.11 3.31-3.2.28-.46-3.31 3.55-.28Zm25.1 10.83c.88.28 1.81.42 2.8.42h1.93c-.16-1.67-.55-3.08-1.16-4.26-.61-1.17-1.38-1.76-2.32-1.76-.75 0-1.42.45-2.02 1.34-.6.89-1.11 1.92-1.53 3.1.66.49 1.42.88 2.3 1.16ZM43.64.21C45.06.07 46.43 0 47.74 0c.96 0 1.67.02 2.11.07l-.21 2.81c-.42-.05-1.08-.07-1.97-.07-1.2 0-2.44.07-3.73.21s-2.44.32-3.45.53L39.86.81c1.1-.26 2.36-.46 3.78-.6Z"
                      data-name="Layer 1"
                    ></path>
                  </svg>
                </div>
              </div>
              <div>
                <button class="w-full py-3 rounded-xl text-lg hover:bg-blue-500/90 transition-all duration-200 bg-blue-500 text-white font-bold">
                  ثبت‌نام دوره
                </button>
              </div>
            </div>

            <div class="rounded-xl p-3 lg:p-5 bg-white sticky top-20 z-10 shadow-xl">
              <ul class="flex items-center justify-between text-sm text-gray-300">
                <li class="flex items-center">
                  <span class="w-1 h-1 rounded-full bg-blue-500 block ml-1 block"></span>
                  <button class="hover:text-gray-600 transition-all duration-200 ease-in text-blue-500 font-bold">
                    توضیحات
                  </button>
                </li>
                <li class="flex items-center">
                  <span class="w-1 h-1 rounded-full bg-blue-500 block ml-1 hidden"></span>
                  <button class="hover:text-gray-600 transition-all duration-200 ease-in ">
                    جلسات
                  </button>
                </li>
                <li class="flex items-center">
                  <span class="w-1 h-1 rounded-full bg-blue-500 block ml-1 hidden"></span>
                  <button class="hover:text-gray-600 transition-all duration-200 ease-in ">
                    دیدگاه و پرسش
                  </button>
                </li>
              </ul>
            </div>

            <div className="rounded-xl p-3 lg:p-5 bg-white">
              <div className="flex flex-col items-center">
                <div class="w-16 h-16 relative overflow-hidden ring ring-gray-200 rounded-full mb-2">
                  <img
                    src="/images/saheb.webp"
                    alt="صاحب محمدی"
                    class="rounded-full hover:scale-110 w-full h-full absolute transition-all duraton-200 ease-in"
                  />
                </div>

                <div class="text-center mb-2">
                  <p class="font-black text-gray-700/90 leading-tight">
                    صاحب محمدی
                  </p>
                  <span class="text-sm text-gray-500 block -mt-0.5">
                    مدرس دوره
                  </span>
                </div>

                <p class="justify-center leading-6 text-sm text-gray-600">
                  داستان برنامه نویس شدن من برمیگرده به سال 93. همون موقع که
                  برای پروژه های دانشگاه (رشته مهندسی نفت) برنامه نویسی میکردم.
                  کم کم با MATLAB آشنا شدم و بعدا وارد حوزه برنامه نویسی وب شدم
                  و الان حدود 7 ساله که شغل تخصصی من برنامه نویسی وب هست.
                  <strong> علاقه من جاوااسکریپت و خاندانش است. </strong>به همین
                  دلیل فرانت هوکس رو بنا کردم تا تجربه چند ساله رو در قالب دوره
                  های پروژه محور به علاقه مندان این حوزه انتقال بدم ☘️🤍.
                </p>
              </div>
            </div>

            <div className="rounded-xl p-3 lg:p-5 bg-white">
              <p class="text-gray-600 text-xs mb-4">
                میتوانید دیدگاه خود را ثبت کنید
              </p>

              <button class="ring ring-blue-300 hover:ring-blue-500 hover:bg-blue-100/30 px-6 py-3 rounded-xl flex items-center justify-center text-blue-500 transition-all duration-200 text-sm font-bold w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="w-5 h-5 ml-1"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M8.696 9.058h6.032m-6.032 3.456h3.839m.576 6.413h1.061c2.887 0 5.398-2.077 6.076-5.025a9.955 9.955 0 0 0 0-4.455l-.09-.386c-.652-2.841-2.781-5.049-5.494-5.698l-.381-.092a9.853 9.853 0 0 0-4.593 0l-.224.054c-2.81.672-5.014 2.959-5.69 5.901-.37 1.61-.367 3.303.003 4.912.687 2.989 2.708 5.476 5.419 6.635l.118.05c1.173.502 2.517-.102 2.998-1.333a.866.866 0 0 1 .797-.563Z"
                  ></path>
                </svg>
                <span>ثبت دیدگاه</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* question */}
      <div
        className={`${
          showQus ? "flex" : "hidden"
        } z-50 justify-center items-center fixed w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.4)] top-0 left-0 bottom-0 right-0 text-gray-700`}
      >
        <div
          ref={qusBoxRef}
          className="bg-white w-[600px] min-h-[500px] py-4 px-6 rounded-lg"
        >
          <h2 class="">
            <div class="flex justify-between items-center pb-3 border-b border-gray-200">
              <div>
                <p class="text-gray-800 text-sm lg:text-base">پرسش جدید</p>
                <p class="text-gray-400 text-sm lg:text-base">
                  پرسش خود را وارد کنید
                </p>
              </div>

              <button onClick={() => setShowQus(false)}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-gray-400"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </h2>

          <div className="flex justify-center mt-6">
            <div className="max-w-md bg-white w-full">
              <form>
                <div>
                  <label class="flex items-center text-gray-600 text-sm mb-2">
                    <span>دسته‌بندی پرسش</span>
                    <span class="text-red-500 translate-y-[5px] mr-[2px] text-[16px]">
                      *
                    </span>
                  </label>

                  <div
                    ref={questionsRef}
                    onClick={() => {
                      setCategoryQus(!categoryQus);
                      setInputBG(true);
                    }}
                    className={`${
                      inputBG &&
                      "bg-white ring-[1px] ring-blue-300 shadow-[0_15px_42px_-15px_rgba(23,23,233,0.6)]"
                    } transition-all duration-100 box-border bg-gray-100 hover:ring-[1px] hover:ring-gray-200 rounded-xl h-12 flex items-center justify-between relative`}
                  >
                    <input
                      ref={inpurRef}
                      className="placeholder-gray-400 focus:ring-0 border-none text-sm focus:border-none outline-none focus:outline-none bg-transparent"
                      type="text"
                      placeholder="انتخاب دسته‌بندی پرسش"
                      value={category}
                    />

                    <div className="ml-3 flex items-center">
                      <div className="w-[1px] h-5 bg-gray-300 ml-3"></div>
                      <FaAngleDown
                        className={`${
                          inputBG && "text-gray-700"
                        } text-gray-300 text-lg transition-all duration-150 hover:text-gray-400`}
                      />
                    </div>

                    <div
                      className={`${
                        categoryQus ? "block" : "hidden"
                      } bg-white absolute top-14 shadow-md rounded-xl w-full py-2 px-1 z-30`}
                    >
                      <div
                        onClick={() => setCategory("پشتیبانی")}
                        className="px-3 py-2 hover:bg-gray-100 rounded-lg mb-1"
                      >
                        پشتیبانی
                      </div>
                      <div
                        onClick={() => setCategory("دسترسی به دوره")}
                        className="px-3 py-2 hover:bg-gray-100 rounded-lg mb-1"
                      >
                        دسترسی به دوره
                      </div>
                      <div
                        onClick={() => setCategory("سرفصل‌های دوره")}
                        className="px-3 py-2 hover:bg-gray-100 rounded-lg mb-1"
                      >
                        سرفصل‌های دوره
                      </div>
                      <div
                        onClick={() => setCategory("مربی دوره")}
                        className="px-3 py-2 hover:bg-gray-100 rounded-lg"
                      >
                        مربی دوره
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label class="flex items-center text-gray-600 text-sm mb-2">
                    <span>متن پرسش</span>
                    <span class="z-10 text-red-500 translate-y-[5px] mr-[2px] text-[16px]">
                      *
                    </span>
                  </label>

                  <textarea class="focus:shadow-[0_15px_30px_-11px_rgba(23,23,233,0.4)] focus:bg-white focus:ring-blue-300 transition-all duration-100 hover:ring-[1px] hover:ring-blue-300 w-full border-none bg-gray-100 rounded-xl mt-2 min-h-[150px] leading-8 text-right text-[17px]"></textarea>
                </div>

                <div class="mt-8">
                  <button class="bg-blue-500 hover:bg-blue-500/90 transition-all duration-150 text-white py-3 px-4 rounded-xl w-full">
                    ثبت پرسش
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Course;
