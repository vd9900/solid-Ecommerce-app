import React from "react";
import "../../styles/custom/animation.css";

const Sort = ({ sortValue = "all", onSortClick, onTogglesort }) => {
  console.log(sortValue);
  const handleSortValue = (e) => {
    onSortClick(e);
    onTogglesort();
  };
  return (
    <div className="md:hidden slide-top bg-gray-100  w-full h-64 fixed -bottom-0 z-10">
      <p className="font-medium font-serif border-b px-4 py-3 text-xl ">
        Sort By
      </p>
      <div className="flex flex-col px-5 gap-4 py-3 text-sm">
        <span
          onClick={(e) => handleSortValue(e)}
          className=" flex items-center justify-between cursor-pointer   "
        >
          All Items{" "}
          <input
            data-id="all"
            checked={sortValue === "all"}
            type="radio"
            className="h-4 w-4"
            name="sort"
          />
        </span>
        <span
          onClick={(e) => handleSortValue(e)}
          className="flex items-center justify-between cursor-pointer   "
        >
          Price-Low to High
          <input
            data-id="l_h"
            type="radio"
            checked={sortValue === "l_h"}
            className="h-4 w-4"
            name="sort"
          />
        </span>
        <span
          onClick={(e) => handleSortValue(e)}
          className="flex items-center justify-between cursor-pointer   "
        >
          Price-High to Low
          <input
            checked={sortValue === "h_l"}
            type="radio"
            data-id="h_l"
            className="h-4 w-4"
            name="sort"
          />
        </span>
        <span
          onClick={(e) => handleSortValue(e)}
          className="flex items-center justify-between cursor-pointer   "
        >
          Newest First
          <input
            className="w-4 h-4 bg-slate-900 "
            checked={sortValue === "n_o"}
            data-id="n_o"
            type="radio"
            name="sort"
          />
        </span>
      </div>
    </div>
  );
};

export default Sort;
