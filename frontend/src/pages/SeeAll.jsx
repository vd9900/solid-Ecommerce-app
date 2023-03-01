import React, { useState } from "react";
import Navbar from "../components/Navbar";

import { AiFillStar } from "react-icons/ai";
import Product from "../components/Product";
import Sort from "../components/smallDevice/Sort";
import Filter from "../components/smallDevice/Filter";
import { Slider } from "@material-ui/core";

const SeeAll = () => {
  const [toggleSort, setToggleSort] = useState(false);
  const [toggleFilter, setToggleFilter] = useState(false);

  return (
    <div className="max-w-screen relative">
      {/* toggle components */}
      {toggleSort && <Sort />}
      {toggleFilter && <Filter />}

      <Navbar></Navbar>
      <div className="pt-14 bg-gray-100 h-auto ">
        <div className="sm:px-5 sm:py-3 flex gap-3  w-full">
          <aside className="hidden md:block  fixed left-2 md:w-3/12 lg:w-3/12 xl:w-1/5 sm:pr-2 h-full ">
            <div className=" bg-white flex flex-col px-2 ">
              <span className="text-xl font-medium px-4 py-3 border-b border-gray-300">
                Filters
              </span>
              <div className=" h-full">
                <div className="py-3 border-b px-4">
                  <p className="text-xs">CATEGORIES</p>
                  <p className="font-medium ">Applications</p>
                </div>
                <div className="py-3 px-4 border-b">
                  <p>Price</p>

                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={12}
                    // onChange={handleChange}
                    // valueLabelDisplay="auto"
                    getAriaValueText={"good"}
                  />
                </div>
                <div className="py-3 px-4 border-b flex flex-col gap-2">
                  <p>customer ratings</p>
                  <div className="flex flex-col gap-2 px-2">
                    <span className="flex items-center gap-2">
                      <input className="w-4 h-4" type="checkbox" />{" "}
                      <span className="flex items-center">
                        4 <AiFillStar fontSize={12} /> & above
                      </span>
                    </span>

                    <span className="flex items-center gap-2">
                      <input className="w-4 h-4" type="checkbox" />{" "}
                      <span className="flex items-center">
                        3 <AiFillStar fontSize={12} /> & above
                      </span>
                    </span>
                    <span className="flex items-center gap-2">
                      <input className="w-4 h-4" type="checkbox" />{" "}
                      <span className="flex items-center">
                        2 <AiFillStar fontSize={12} /> & above
                      </span>
                    </span>
                    <span className="flex items-center gap-2">
                      <input className="w-4 h-4" type="checkbox" />{" "}
                      <span className="flex items-center">
                        1 <AiFillStar fontSize={12} /> & above
                      </span>
                    </span>
                  </div>
                </div>
                <div className="py-3 px-4 border-b flex flex-col gap-2">
                  <p>Discounts</p>
                  <div className="flex flex-col gap-2 px-2">
                    <span className="flex items-center gap-2">
                      <input className="w-4 h-4" type="checkbox" />{" "}
                      <span className="flex items-center">40% and more</span>
                    </span>

                    <span className="flex items-center gap-2">
                      <input className="w-4 h-4" type="checkbox" />{" "}
                      <span className="flex items-center">30% and more </span>
                    </span>
                    <span className="flex items-center gap-2">
                      <input className="w-4 h-4" type="checkbox" />{" "}
                      <span className="flex items-center">20% and more </span>
                    </span>
                    <span className="flex items-center gap-2">
                      <input className="w-4 h-4" type="checkbox" />{" "}
                      <span className="flex items-center">10% and more </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="w-full relative bg-white md:w-9/12  lg:w-9/12 xl:11/12  md:ml-auto  h-full flex flex-col gap-0">
            <div className="px-3 hidden md:flex gap-3 items-center max-lg:text-xs">
              <span className="font-medium text-center">Sort By</span>
              <span className="py-1 border-b-4  border-black">All Items</span>
              <span className="py-1">Price-Low to High</span>
              <span className="py-1">Price-High to Low</span>
              <span className="py-1">Newest First</span>
              <span className="py-1">Oldest First</span>
            </div>
            <div className="md:hidden  fixed w-full z-10 flex bg-slate-100 border-b ">
              <button
                className="grow border-r py-2"
                onClick={() => {
                  setToggleSort(!toggleSort);
                  setToggleFilter(false);
                }}
              >
                Sort
              </button>
              <button
                className="grow py-2"
                onClick={() => {
                  setToggleSort(false);
                  setToggleFilter(!toggleFilter);
                }}
              >
                Filter
              </button>
            </div>
            <div className="p-3 flex flex-col md:items-center md:justify-center max-sm:pt-10">
              <div className=" sm:w-11/12  md:mx-auto grid grid-cols-2  lg:grid-cols-4 gap-1 md:gap-10 sm:items-center sm:justify-center">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className=" w-11/12 mx-auto p-3 flex flex-wrap  gap-10 items-center justify-center">
                {/* <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeAll;
