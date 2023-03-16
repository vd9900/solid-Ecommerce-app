import React from "react";

const Filter = () => {
  return (
    <div className="md:hidden slide-top bg-gray-100  w-full h-56 fixed bottom-0 z-10">
      <p className="font-medium  font-serif border-b px-4 py-3 text-lg  ">
        Filter By
      </p>
      <div className="flex   h-4/5 justify-between flex-col px-5 gap-5 py-3">
        <div className="flex  items-center gap-3 ">
          <p className=" w-36 pl-3 ">Price</p>
          <input type="range" min={0} max={5000} className="w-8/12 " />
        </div>
        <div className="flex  items-center gap-3 ">
          <p className=" w-36 pl-3 ">Ratings</p>
          <input type="range" min={0} max={5} className="w-8/12 " />
        </div>
        <div className="text-right py-2">
          <button
            className=" bg-black 
              px-8 py-2 text-sm text-white rounded-full
              transition duration-200 transform active:scale-95 ease-in-out"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
