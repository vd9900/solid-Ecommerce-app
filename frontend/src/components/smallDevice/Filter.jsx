import React from "react";

const Filter = () => {
  return (
    <div className="md:hidden slide-top bg-gray-100  w-full h-72 fixed -bottom-28 z-10">
      <p className="font-medium border-b px-4 py-3 text-lg text-gray-600 ">
        Filter By
      </p>
      <div className="flex h-4/5 justify-between flex-col px-5 gap-5 py-3">
        <div className="flex  items-center gap-3 ">
          <p className="font-serif font-semibold w-36 pl-3 " >Price</p>
          <input type="range" min={0} max={5000} className="w-8/12 " />
        </div>
        <div className="flex  items-center gap-3 ">
          <p className="font-serif font-semibold w-36 pl-3 ">Ratings</p>
          <input type="range" min={0} max={5} className="w-8/12 " />
        </div>
        <div className="flex  items-center gap-3 ">
          <p className="font-serif font-semibold w-36 pl-3 ">Discounts</p>
          <input type="range" min={0} max={50} className="w-8/12 " />
        </div>
        <div className="text-right">
          <button className=" py-2 px-8 font-semibold bg-black text-white rounded-sm">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
