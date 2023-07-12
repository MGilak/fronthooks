import React from "react";
import ProfileTemplate from "./../../components/profileTemplate/ProfileTemplate";

const MyCourses = () => {
  return (
    <div>
      <ProfileTemplate>
        <div className="xl:max-w-screen-xl">
          <h2 class="font-black text-xl lg:text-2xl text-secondary-700 mb-3">
            دوره های من
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

          <div className="bg-slate-50 rounded-xl">
            <div className="relative rounded-xl overflow-auto">
              <div className="shadow-sm overflow-auto my-8">
                <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
                  <thead>
                    <tr>
                      <th class="table__th whitespace-nowrap">عنوان دوره</th>
                      <th class="table__th whitespace-nowrap">نحوه دسترسی</th>
                      <th class="table__th whitespace-nowrap">
                        کانال تلگرام دوره
                      </th>
                      <th class="table__th whitespace-nowrap">
                        پشتیبانی تلگرام
                      </th>
                      <th class="table__th whitespace-nowrap">مدرس دوره</th>
                      <th class="table__th whitespace-nowrap">مربی دوره</th>
                      <th class="table__th whitespace-nowrap">پیج دانشجویان</th>
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    <tr>
                      <td class="table__td">
                        <a
                          class="font-bold hover:text-blue-500 transition-all whitespace-nowrap duration-200 block"
                          href="/courses/git-github"
                        >
                          دوره گیت و گیت هاب
                        </a>
                      </td>

                      <td class="table__td whitespace-nowrap truncate">
                        <div class="flex items-center gap-x-2">
                          <a href="/guide">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 20 20"
                              class="w-5 h-5 block cursor-pointer hover:text-blue-500 transition-all duration-200"
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
                          </a>
                          <span>اسپات پلیر</span>
                        </div>
                      </td>

                      <td class="table__td ">
                        <span class="text-[11px] text-white bg-gray-600 font-bold py-0.5 rounded-lg mr-0.5 whitespace-nowrap px-2">
                          ندارد
                        </span>
                      </td>

                      <td class="table__td ">
                        <div class="flex items-center gap-x-4">
                          <a
                            href="https://t.me/fronthooks_support"
                            class="hover:text-blue-600 hover:bg-blue-100/70 transition duration-200 block text-[11px] bg-gray-200 text-gray-600 font-bold py-0.5 px-1 rounded-lg mr-0.5 whitespace-nowrap"
                          >
                            پشتیبانی دسترسی
                          </a>
                          <a
                            href="https://t.me/fronthooks_coach"
                            target="_blank"
                            rel="noreferrer"
                            class="hover:text-blue-600 hover:bg-blue-100/70 transition duration-200 block text-[11px] bg-gray-200 text-gray-600 font-bold py-0.5 px-1 rounded-lg mr-0.5 whitespace-nowrap"
                          >
                            پشتیبانی فنی
                          </a>
                        </div>
                      </td>

                      <td class="table__td whitespace-nowrap text-sm">
                        صاحب محمدی
                      </td>

                      <td class="table__td whitespace-nowrap text-sm">
                        صاحب محمدی
                      </td>

                      <td class="table__td ">
                        <a
                          href="https://instagram.com/fronthooks.ir"
                          class="hover:text-blue-600 hover:bg-blue-100/70 transition duration-200 text-xs bg-gray-200 text-gray-600 font-bold py-0.5 px-1 rounded-lg whitespace-nowrap"
                        >
                          صفحه دانشجویان
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td class="table__td">
                        <a
                          class="font-bold hover:text-blue-500 transition-all whitespace-nowrap duration-200 block"
                          href="/courses/react-course"
                        >
                          دوره متخصص ریکت و ریداکس
                        </a>
                      </td>

                      <td class="table__td whitespace-nowrap truncate">
                        <div class="flex items-center gap-x-2">
                          <a href="/guide">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 20 20"
                              class="w-5 h-5 block cursor-pointer hover:text-blue-500 transition-all duration-200"
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
                          </a>
                          <span>اسپات پلیر</span>
                        </div>
                      </td>

                      <td class="table__td ">
                        <a
                          href="https://t.me/joinchat/geCJx6ld_2FjYWY0"
                          class="hover:text-blue-600 hover:bg-blue-100/70 transition duration-200 text-[11px] text-white bg-gray-600 font-bold py-0.5 rounded-lg mr-0.5 whitespace-nowrap px-2"
                        >
                          کانال دوره
                        </a>
                      </td>

                      <td class="table__td ">
                        <div class="flex items-center gap-x-4">
                          <a
                            href="https://t.me/fronthooks_support"
                            class="hover:text-blue-600 hover:bg-blue-100/70 transition duration-200 block text-[11px] bg-gray-200 text-gray-600 font-bold py-0.5 px-1 rounded-lg mr-0.5 whitespace-nowrap"
                          >
                            پشتیبانی دسترسی
                          </a>
                          <a
                            href="https://t.me/fronthooks_coach"
                            class="hover:text-blue-600 hover:bg-blue-100/70 transition duration-200 block text-[11px] bg-gray-200 text-gray-600 font-bold py-0.5 px-1 rounded-lg mr-0.5 whitespace-nowrap"
                          >
                            پشتیبانی فنی
                          </a>
                        </div>
                      </td>

                      <td class="table__td whitespace-nowrap text-sm">
                        صاحب محمدی
                      </td>

                      <td class="table__td whitespace-nowrap text-sm">
                        صاحب محمدی
                      </td>

                      <td class="table__td ">
                        <a
                          href="https://instagram.com/fronthooks.ir"
                          class="hover:text-blue-600 hover:bg-blue-100/70 transition duration-200 text-xs bg-gray-200 text-gray-600 font-bold py-0.5 px-1 rounded-lg whitespace-nowrap"
                        >
                          صفحه دانشجویان
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td class="table__td">
                        <a
                          class="font-bold hover:text-blue-500 transition-all whitespace-nowrap duration-200 block"
                          href="/courses/responsive-web"
                        >
                          دوره طراحی وب رسپانسیو
                        </a>
                      </td>

                      <td class="table__td whitespace-nowrap truncate">
                        <div class="flex items-center gap-x-2">
                          <a href="/guide">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 20 20"
                              class="w-5 h-5 block cursor-pointer hover:text-blue-500 transition-all duration-200"
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
                          </a>
                          <span>اسپات پلیر</span>
                        </div>
                      </td>

                      <td class="table__td ">
                        <a
                          href="https://t.me/joinchat/tapV0-Ou3fM5OTA0"
                          class="hover:text-blue-600 hover:bg-blue-100/70 transition duration-200 text-[11px] text-white bg-gray-600 font-bold py-0.5 rounded-lg mr-0.5 whitespace-nowrap px-2"
                        >
                          کانال دوره
                        </a>
                      </td>

                      <td class="table__td ">
                        <div class="flex items-center gap-x-4">
                          <a
                            href="https://t.me/fronthooks_support"
                            class="hover:text-blue-600 hover:bg-blue-100/70 transition duration-200 block text-[11px] bg-gray-200 text-gray-600 font-bold py-0.5 px-1 rounded-lg mr-0.5 whitespace-nowrap"
                          >
                            پشتیبانی دسترسی
                          </a>
                          <a
                            href="https://t.me/fronthooks_coach"
                            class="hover:text-blue-600 hover:bg-blue-100/70 transition duration-200 block text-[11px] bg-gray-200 text-gray-600 font-bold py-0.5 px-1 rounded-lg mr-0.5 whitespace-nowrap"
                          >
                            پشتیبانی فنی
                          </a>
                        </div>
                      </td>

                      <td class="table__td whitespace-nowrap text-sm">
                        صاحب محمدی
                      </td>

                      <td class="table__td whitespace-nowrap text-sm">
                        صاحب محمدی
                      </td>
                      
                      <td class="table__td ">
                        <a
                          href="https://instagram.com/fronthooks.ir"
                          class="hover:text-blue-600 hover:bg-blue-100/70 transition duration-200 text-xs bg-gray-200 text-gray-600 font-bold py-0.5 px-1 rounded-lg whitespace-nowrap"
                        >
                          صفحه دانشجویان
                        </a>
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

export default MyCourses;
