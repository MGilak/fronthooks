import React, { useState } from "react";

const Introduction = ({ children, title, hover, isHover }) => {
  const [big, setBig] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        isHover && setBig(true);
      }}
      onMouseLeave={() => setBig(false)}
      className={`${
        isHover && "hover:shadow-lg hover:shadow-gray-300/50 cursor-pointer"
      } rounded-2xl flex flex-col 
    items-center justify-center col-span-5 sm:col-span-3 md:col-span-2 transition-all duration-200 ease-in w-full h-full ${
      big && "transform scale-105 bg-white"
    }`}
    >
      <div
        className={`${
          !isHover && "md:p-2 lg:p-6"
        } p-3 md:p-6 rounded-3xl duration-300 transition-all flex flex-col justify-between flex-1 gap-y-4`}
      >
        <div
          className={`${
            !isHover
              ? "md:p-0 md:w-12 md:h-12 lg:p-5 lg:w-full lg:h-full w-[45px] sm:w-[50px] h-[45px] sm:h-[50px]"
              : "p-5"
          } relative flex items-center justify-center`}
        >
          {children}
        </div>
        <p class="flex-1 font-bold text-xs sm:text-sm text-center">{title}</p>
      </div>

      {hover && (
        <p
          className={`${
            big
              ? "opacity-100 transform scale-1"
              : " opacity-0 transform scale-0"
          } transition-all absolute top-44 w-[110%] duration-100 p-1 ease-in text-[11px] font-light text-white bg-gray-600 rounded-md text-center`}
        >
          {hover}
        </p>
      )}
    </div>
  );
};

export default Introduction;
