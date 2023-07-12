import React from "react";
import ProfileTemplate from "./../../components/profileTemplate/ProfileTemplate";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <ProfileTemplate>
        <div className="xl:max-w-screen-xl">
          <div class="bg-white rounded-xl p-3 lg:p-6 max-w-xl shadow-lg shadow-gray-100 mb-8">
            <p class="text-secondary-700">
              <span class="font-black text-xl ml-2">محمود گیلک عزیز😍</span>
              <span>به جمع بچه‌های فرانت هوکس خوش آمدی👋🏻</span>
            </p>
          </div>

          <div>
            <h2 class="font-black text-xl lg:text-2xl text-secondary-700 mb-2">
              سوابق من
            </h2>
            <div class="grid grid-cols-3 gap-6">
              <div class="bg-white p-3 col-span-3 md:col-span-2 lg:col-span-1 lg:p-6 rounded-xl shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-200 hover:shadow-gray-200">
                <div class="flex items-center gap-x-3">
                  <div
                    class="flex items-center justify-center text-white p-2 rounded-xl 
               bg-slate-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="w-7 h-7"
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
                  </div>
                  <div class="flex flex-col">
                    <span class="text-secondary-400 text-sm mb-1">
                      تاریخ پیوستن
                    </span>
                    <span class="text-secondary-700 font-bold">۱۴۰۰/۹/۲۵</span>
                  </div>
                </div>
              </div>
              <div class="bg-white p-3 col-span-3 md:col-span-2 lg:col-span-1 lg:p-6 rounded-xl shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-200 hover:shadow-gray-200">
                <div class="flex items-center gap-x-3">
                  <div
                    class="flex items-center justify-center text-white p-2 rounded-xl 
               bg-blue-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="none"
                      class="w-7 h-7"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.667 11.16V3.113c0-.8-.654-1.393-1.447-1.326h-.04c-1.4.12-3.527.833-4.713 1.58l-.114.073a.739.739 0 0 1-.706 0l-.167-.1C6.293 2.6 4.173 1.893 2.773 1.78a1.312 1.312 0 0 0-1.44 1.327v8.053c0 .64.52 1.24 1.16 1.32l.194.027c1.446.193 3.68.926 4.96 1.626l.026.014c.18.1.467.1.64 0 1.28-.707 3.52-1.447 4.974-1.64l.22-.027c.64-.08 1.16-.68 1.16-1.32ZM8 3.66v10m-2.833-8h-1.5m2 2h-2"
                      ></path>
                    </svg>
                  </div>
                  <a class="flex flex-col flex-1" href="/profile/courses">
                    <span class="text-secondary-400 text-sm mb-1">دوره ها</span>
                    <span class="text-secondary-700 font-bold">۴</span>
                  </a>
                </div>
              </div>
              <div class="bg-white p-3 col-span-3 md:col-span-2 lg:col-span-1 lg:p-6 rounded-xl shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-200 hover:shadow-gray-200">
                <div class="flex items-center gap-x-3">
                  <div
                    class="flex items-center justify-center text-white p-2 rounded-xl 
               bg-green-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="w-7 h-7"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="1.5"
                        d="M8 9h4"
                      ></path>
                      <path
                        fill="currentColor"
                        d="m2.885 15.151.728-.18-.728.18Zm0-6.302.728.18-.728-.18Zm18.23 0 .728-.181-.728.18Zm0 6.302-.728-.18.728.18Zm-6 5.508-.162-.732.163.732Zm-6.23 0 .162-.732-.163.732Zm0-17.318.162.732-.163-.732Zm6.23 0 .163-.732-.162.732ZM8.432 20.558l-.163.733.163-.733Zm7.138 0 .163.733-.163-.733Zm0-17.116-.162.732.162-.732Zm-7.138 0-.163-.733.163.733Zm10.262 11.062-.134.738.134-.738Zm-.058-.011.134-.738-.134.738Zm0-4.986.134.738-.134-.738Zm.058-.01-.134-.738.134.737Zm2.307.99a.75.75 0 0 0 .601-1.374L21 10.487Zm.601 4.4A.75.75 0 1 0 21 13.513l.601 1.374Zm-5.023-2.259-.721.206.721-.206Zm0-1.256.721.206-.72-.206ZM8.593 4.174l.454-.1-.325-1.465-.454.1.325 1.465Zm6.36-.1.454.1.325-1.465-.454-.1-.325 1.464Zm.454 15.752-.454.1.325 1.465.454-.1-.325-1.465Zm-6.36.1-.454-.1-.325 1.465.454.1.325-1.464Zm-5.434-4.955a12.326 12.326 0 0 1 0-5.942l-1.455-.361a13.826 13.826 0 0 0 0 6.664l1.455-.362ZM20.387 9.03c.484 1.95.484 3.99 0 5.94l1.456.362a13.827 13.827 0 0 0 0-6.664l-1.456.362Zm-5.434 10.897a13.65 13.65 0 0 1-5.906 0l-.325 1.464c2.16.479 4.397.479 6.556 0l-.325-1.464ZM9.047 4.073a13.651 13.651 0 0 1 5.906 0l.325-1.464a15.151 15.151 0 0 0-6.556 0l.325 1.464Zm-.454 15.753a6.603 6.603 0 0 1-4.98-4.856l-1.455.362a8.103 8.103 0 0 0 6.11 5.959l.325-1.465Zm7.139 1.465a8.103 8.103 0 0 0 6.11-5.959l-1.455-.362a6.603 6.603 0 0 1-4.98 4.856l.325 1.465Zm-.325-17.117a6.603 6.603 0 0 1 4.98 4.856l1.456-.362a8.103 8.103 0 0 0-6.111-5.959l-.325 1.465ZM8.268 2.709a8.103 8.103 0 0 0-6.11 5.959l1.455.361a6.603 6.603 0 0 1 4.98-4.855l-.325-1.465Zm10.56 11.057-.059-.01-.269 1.475.059.01.269-1.475Zm-.059-3.521.059-.01-.27-1.476-.058.01.27 1.476Zm.059-.01a3.743 3.743 0 0 1 2.172.252l.601-1.374a5.244 5.244 0 0 0-3.042-.354l.269 1.475Zm-.27 5.007a5.244 5.244 0 0 0 3.043-.355L21 13.513a3.743 3.743 0 0 1-2.172.253l-.27 1.476Zm-1.259-2.82a1.538 1.538 0 0 1 0-.844l-1.442-.412a3.038 3.038 0 0 0 0 1.668l1.442-.412ZM18.5 8.77a3.38 3.38 0 0 0-2.643 2.397l1.442.412a1.88 1.88 0 0 1 1.47-1.333L18.5 8.769Zm.27 4.986a1.88 1.88 0 0 1-1.47-1.333l-1.443.412a3.38 3.38 0 0 0 2.643 2.397l.27-1.476Z"
                      ></path>
                    </svg>
                  </div>
                  <a class="flex flex-col flex-1" href="/profile/payments">
                    <span class="text-secondary-400 text-sm mb-1">
                      سفارش ها
                    </span>
                    <span class="text-secondary-700 font-bold">۴</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="border-t w-full border-t-gray-200 my-8"></div>

          <div>
            <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center w-full mb-4">
              <h2 className="font-extrabold text-gray-700 text-xl">
                آخرین سفارش‌های من
              </h2>

              <Link
                class="text-secondary-700 font-bold text-sm transition-all duration-200 hover:text-blue-500 flex items-center gap-x-1"
                to="/profile/payments"
              >
                <span> مشاهده همه سفارش ها</span>
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
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>

            <div className="bg-slate-100 border-[1px] border-gray-200 rounded-xl">
              <div className="relative rounded-xl overflow-auto">
                <div className="shadow-sm overflow-auto my-8">
                  <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
                    <thead>
                      <tr className="text-gray-500">
                        <th class="border-b-[1px] text-right pt-0 pr-8 pb-3 pl-4 whitespace-nowrap">
                          شماره پیگیری
                        </th>
                        <th class="border-b-[1px] text-right pt-0 pr-8 pb-3 pl-4 whitespace-nowrap">
                          شرح سفارش
                        </th>
                        <th class="border-b-[1px] text-right pt-0 pr-8 pb-3 pl-4 whitespace-nowrap">
                          لایسنس
                        </th>
                        <th class="border-b-[1px] text-right pt-0 pr-8 pb-3 pl-4 whitespace-nowrap">
                          مبلغ
                        </th>
                        <th class="border-b-[1px] text-right pt-0 pr-8 pb-3 pl-4 whitespace-nowrap">
                          تاریخ
                        </th>
                        <th class="border-b-[1px] text-right pt-0 pr-8 pb-3 pl-4 whitespace-nowrap">
                          وضعیت
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white">
                      <tr>
                        <td class="table__td">ندارد</td>

                        <td class="table__td whitespace-nowrap truncate">
                          <div class="flex flex-col items-start max-w-[280px]">
                            <span class="mb-2 text-sm max-w-full truncate">
                              دوره متخصص ریکت و ریداکس - دوره متخصص Next.js |
                              محمود گیلک
                            </span>
                            <div class="flex items-center gap-x-4 flex-wrap justify-start gap-y-2">
                              <div class="flex items-center gap-y-1 gap-x-1">
                                <img
                                  alt="course icon"
                                  src="/images/reactjs.svg"
                                  width="30"
                                  height="30"
                                />
                                <span class="text-[11px] bg-gray-200 text-gray-600 font-bold py-0.5 px-1 rounded-lg mr-0.5">
                                  دوره متخصص ریکت و ریداکس
                                </span>
                              </div>
                              <div class="flex items-center gap-y-1 gap-x-1">
                                <img
                                  alt="course icon"
                                  src="/images/nextjs.svg"
                                  width="30"
                                  height="30"
                                />
                                <span class="text-[11px] bg-gray-200 text-gray-600 font-bold py-0.5 px-1 rounded-lg mr-0.5">
                                  دوره متخصص Next.js
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td class="table__td max-w-[250px]">
                          <div class="flex items-center flex-col lg:flex-row gap-x-2 w-full gap-y-1">
                            <div className="max-w-[80px]">
                              <span class="truncate block font-bold flex-1">
                                62b4315193290ae12b528f107ff84e2fd785d7b422475e2dc14c4a6516a12ddfe4c037ab4ac646ca0f9f1ab1b039e54f08e9548feb14c9d6941309d403f7ed31a58a46f966513843349528be
                              </span>
                            </div>

                            <button
                              class="bg-blue-500 text-white font-bold px-2 py-2 w-28 flex items-center rounded-xl overflow-y"
                              type="button"
                            >
                              <div class="flex items-center opacity-100">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-width="2"
                                  viewBox="0 0 24 24"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="9"
                                    y="9"
                                    width="13"
                                    height="13"
                                    rx="2"
                                    ry="2"
                                  ></rect>
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                                <span class="whitespace-nowrap mr-2 text-xs">
                                  کپی لایسنس
                                </span>
                              </div>
                            </button>
                          </div>
                        </td>

                        <td class="table__td">۲,۹۷۶,۰۰۰</td>

                        <td class="table__td whitespace-nowrap">
                          ۲:۵۷:۰۳&nbsp; <span class="text-gray-300">|</span>{" "}
                          &nbsp;۱۴۰۱/۱۲/۱۶
                        </td>

                        <td class="table__td">
                          <span class="px-3 py-0.5 text-sm rounded-xl bg-success text-white">
                            موفق
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td class="table__td">ندارد</td>

                        <td class="table__td max-w-[280px] whitespace-nowrap truncate">
                          <div class="flex flex-col items-start">
                            <span class="mb-2 text-sm max-w-full truncate">
                              دوره گیت و گیت هاب | محمود گیلک
                            </span>
                            <div class="flex items-center gap-x-4 flex-wrap justify-start gap-y-2">
                              <div class="flex items-center gap-y-1 gap-x-1">
                                <img
                                  alt="course icon"
                                  src="/images/git.svg"
                                  width="30"
                                  height="30"
                                  class="text-secondary-600"
                                />
                                <span class="text-[11px] bg-gray-200 text-gray-600 font-bold py-0.5 px-1 rounded-lg mr-0.5">
                                  دوره گیت و گیت هاب
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td class="table__td max-w-[250px]">
                          <div class="flex items-center flex-col lg:flex-row justify-between gap-x-2 w-full gap-y-1">
                            <span class="truncate max-w-[80px] block font-bold flex-1">
                              62e39396406da12cd866e8450af9e6b12e6698d99d04412e745f2d94f0eedc41bc72710fe9a92180290a0130cfa0425be60f14e8161ccb43914b999fe870e3da4c9e2db73c5e5e7aaa7583da
                            </span>
                            <button
                              class="bg-blue-500 text-white font-bold px-2 py-2 w-28 flex items-center rounded-xl overflow-y"
                              type="button"
                            >
                              <div class="flex items-center opacity-100">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-width="2"
                                  viewBox="0 0 24 24"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="9"
                                    y="9"
                                    width="13"
                                    height="13"
                                    rx="2"
                                    ry="2"
                                  ></rect>
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                                <span class="whitespace-nowrap  mr-2 text-xs">
                                  کپی لایسنس
                                </span>
                              </div>
                              <span class="MuiTouchRipple-root muirtl-w0pj6f"></span>
                            </button>
                          </div>
                        </td>

                        <td class="table__td">۲,۹۷۶,۰۰۰</td>

                        <td class="table__td whitespace-nowrap">
                          ۲:۵۷:۰۳&nbsp; <span class="text-gray-300">|</span>{" "}
                          &nbsp;۱۴۰۱/۱۲/۱۶
                        </td>

                        <td class="table__td">
                          <span class="px-3 py-0.5 text-sm rounded-xl bg-success text-white">
                            موفق
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProfileTemplate>
    </div>
  );
};

export default Profile;
