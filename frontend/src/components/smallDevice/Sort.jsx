import React from "react";
import "../../styles/custom/animation.css";

const Sort = () => {
  return (
    <div className="md:hidden slide-top bg-gray-100  w-full h-64 fixed -bottom-0 z-10">
      <p className="font-medium font-serif border-b px-4 py-3 text-xl ">
        Sort By
      </p>
      <div className="flex flex-col px-5 gap-4 py-3 text-sm">
        <span className=" flex items-center justify-between   ">
          All Items <input type="radio" className="h-4 w-4" name="sort" />
        </span>
        <span className="flex items-center justify-between   ">
          Price-Low to High
          <input type="radio" className="h-4 w-4" name="sort" />
        </span>
        <span className="flex items-center justify-between   ">
          Price-High to Low
          <input type="radio" className="h-4 w-4" name="sort" />
        </span>
        <span className="flex items-center justify-between   ">
          Oldest First
          <input className="w-4 h-4 bg-slate-900 " type="radio" name="sort" />
        </span>
      </div>
    </div>
  );
};

export default Sort;
