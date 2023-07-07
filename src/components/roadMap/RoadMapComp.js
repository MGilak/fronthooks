import React from "react";

const RoadMapComp = ({childer}) => {
  return (
    <div className="text-secondary-700 hover:text-blue-500 flex items-center flex-col transition-all duration-200 ease-in">
      <div className="bg-white w-24 h-24 rounded-[41px] flex justify-center items-center">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          role="img"
          viewBox="0 0 24 24"
          class="h-9 w-9 md:w-10 md:h-10 z-10"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title></title>
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
        </svg>
      </div>
      <p className="text-sm mt-4 font-bold">HTML CSS</p>
    </div>
  );
};

export default RoadMapComp;
