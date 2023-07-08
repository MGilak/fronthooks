import React from "react";

const RoadMapComp = ({ children, info }) => {
  console.log(children);
  return (
    <div className="text-secondary-700 hover:text-blue-500 flex items-center flex-col transition-all duration-200 ease-in">
      <div className="bg-white md:w-24 md:h-24 w-20 h-20 rounded-[41px] flex justify-center items-center">
        {children}
      </div>
      <p className="text-sm mt-4 font-bold">{info}</p>
    </div>
  );
};

export default RoadMapComp;
