import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Session = () => {
  return (
    <div className="mb-2 flex justify-between w-full border-2 border-gray-200 p-3 rounded-2xl">
      <div className="text-secondary-700 font-bold">
        <p>فصل اول: بررسی routing در nextjs</p>
      </div>

      <div className="flex text-sm items-center gap-1 bg-blue-100 text-blue-600 rounded-2xl py-1 px-2">
        <span>۹ جلسه</span>
        <span>
          <FaAngleDown />
        </span>
      </div>
    </div>
  );
};

export default Session;
