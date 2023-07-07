import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const ChallengeSingleSlide = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-3xl w-[500px]">
        {/* header */}
        <div className="flex justify-between p-4">
          {/* right */}
          <div className="flex items-center">
            <div className="ml-4">
              <div class="p-1 relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14">
                <svg
                  viewBox="0 0 74 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-full h-full top-0 left-0 absolute z-1"
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
                  role="img"
                  viewBox="0 0 24 24"
                  class="text-white md:w-9 md:h-9 z-10 w-7 h-7"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="pb-2 text-secondary-800 font-extrabold">
                پیاده‌سازی پروژه فروشگاهی
              </span>
              <div className="flex text-slate-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="w-2 h-2 ml-1 md:h-4 md:w-4"
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
                <span className="text-sm ">۲۳۱ شرکت‌کننده</span>
              </div>
            </div>
          </div>

          {/* left */}
          <div className="flex items-center justify-center w-10 h-10 bg-slate-200 hover:bg-opacity-30 transition-all duration-200 ease-in cursor-pointer rounded-2xl text-blue-500">
            <FaArrowLeft />
          </div>
        </div>

        {/* line dashed */}
        <div className="border-b-2 border-dashed border-gray-200 mt-2 mb-6"></div>

        {/* footer */}
        <div className="flex justify-between px-4 pb-4">
          <div className="flex text-sm items-center gap-1 text-green-500">
            <span>
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="h-5 w-5 md:w-4 md:h-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                ></path>
              </svg>
            </span>
            <span>پاداش چالش</span>
          </div>

          <div className="flex text-sm text-slate-500 items-center gap-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="h-5 w-5 md:w-4 md:h-4"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.5"
                  d="M8.88 15.12v-4.16m6.24 4.16V12M12 14.08v-5.2m-8.647 6.17a13.354 13.354 0 0 1 0-6.1A7.511 7.511 0 0 1 8.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 0 1 5.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 0 1-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 0 1-5.597-5.597Z"
                ></path>
              </svg>
            </span>
            <span>کمی سخت</span>
          </div>

          <div className="flex text-sm text-slate-500 items-center gap-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                class="h-5 w-5 md:w-4 md:h-4"
              >
                <path
                  stroke="currentColor"
                  stroke-width="1.5"
                  d="M3.353 8.95A7.511 7.511 0 0 1 8.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 0 1 5.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 0 1-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 0 1-5.597-5.597 13.354 13.354 0 0 1 0-6.1Z"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m14.5 14.5-2.839-1.806V9"
                ></path>
              </svg>
            </span>
            <span>دو هفته</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSingleSlide;
