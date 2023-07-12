import React from "react";
import ProfileTemplate from "./../../components/profileTemplate/ProfileTemplate";

const Payments = () => {
  return (
    <div>
      <ProfileTemplate>
        <div className="xl:max-w-screen-xl">
          <h2 class="font-black text-xl lg:text-2xl text-secondary-700 mb-3">
            سفارش های موفق من
          </h2>

          <p class="text-sm text-gray-500 mb-2">
            - دوره های رایگان نیازی به لایسنس نداره و از صفحه همان دوره قابل
            مشاهده است.
          </p>

          <a
            class="font-bold flex items-center text-sm text-gray-500 mb-4 hover:text-blue-500 transition-all duration-200"
            href="/guide"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              class="h-5 w-5 ml-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            راهنمای استفاده از لایسنس های دوره
          </a>

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
      </ProfileTemplate>
    </div>
  );
};

export default Payments;
