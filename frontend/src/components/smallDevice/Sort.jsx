import React from "react";

const Sort = () => {
  return (
    <div className="md:hidden slide-top bg-gray-100  w-full h-72 fixed -bottom-28 z-10">
      <p className="font-semibold border-b px-4 py-3 text-xl text-gray-600 ">
        Sort By
      </p>
      <div className="flex flex-col px-5 gap-5 py-3">
        <span className=" flex items-center justify-between font-serif  ">
          All Items <input type="radio" className="h-4 w-4" name="sort" />
        </span>
        <span className="flex items-center justify-between font-serif  ">
          Price-Low to High{" "}
          <input type="radio" className="h-4 w-4" name="sort" />
        </span>
        <span className="flex items-center justify-between font-serif  ">
          Price-High to Low{" "}
          <input type="radio" className="h-4 w-4" name="sort" />
        </span>
        <span className="flex items-center justify-between font-serif  ">
          Newest First <input type="radio" className="h-4 w-4" name="sort" />
        </span>
        <span className="flex items-center justify-between font-serif  ">
          Oldest First{" "}
          <input className="w-4 h-4 bg-slate-900 " type="radio" name="sort" />
        </span>
      </div>
    </div>
  );
};

export default Sort;
