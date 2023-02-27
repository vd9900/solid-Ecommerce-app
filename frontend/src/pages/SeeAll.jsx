import React from "react";
import Navbar from "../components/Navbar";

import { AiFillStar } from "react-icons/ai";
import Product from "../components/Product";

const SeeAll = () => {
  return (
    <div className="max-w-screen ">
      <Navbar></Navbar>
      <div className="pt-14 bg-gray-100 h-auto ">
        <div className="px-5 py-3 flex gap-3  w-full">
          <aside className="fixed left-2 sm:w-52 lg:w-2/12 sm:pr-2 h-full ">
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

                  <input
                    type="range"
                    min={0}
                    max={5000}
                    className="bg-blue-600 text-blue-700"
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
          <div className="bg-white sm:w-8/12 md:w-8/12  lg:w-10/12 ml-auto  h-full flex flex-col gap-5">
            <div className="px-3 flex gap-3 items-center max-lg:text-xs">
              <span className="font-medium text-center">Sort By</span>
              <span className="py-1 border-b-4  border-black">All Items</span>
              <span className="py-1">Price-Low to High</span>
              <span className="py-1">Price-High to Low</span>
              <span className="py-1">Newest First</span>
              <span className="py-1">Oldest First</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className=" w-11/12 mx-auto p-3 flex flex-wrap  gap-10 items-center justify-center">
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
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeAll;
