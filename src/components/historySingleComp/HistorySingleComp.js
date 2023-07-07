import React from "react";

const HistorySingleComp = ({ children, history }) => {
  return (
    <div className="bg-white md:w-[33%] lg:w-[26%] w-[90%] rounded-xl lg:shrink-0 flex flex-row sm:flex-col items-center sm:justify-between lg:justify-center py-3 px-5 text-secondary-800">
      {/* header */}
      <div className="flex items-center gap-1">
        <span>{children}</span>
        <span className="font-extrabold sm:text-xl">{history.num}</span>
      </div>

      {/* footer */}
      <div className="sm:pt-3 pr-4 sm:pr-0 font-bold text-sm sm:text-[15px]">
        {history.info}
        {/* <span className=" font-bold text-[15px]">{history.info}</span> */}
      </div>
    </div>
  );
};

export default HistorySingleComp;
