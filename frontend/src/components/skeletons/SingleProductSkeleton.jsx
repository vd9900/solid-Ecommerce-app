import React from "react";
import Carousel from "../Slider";

const SingleProductSkeleton = () => {
  const data = {};
  return (
    <div
      className="  pt-14 md:px-2 flex flex-col md:flex-row gap-0 md:gap-2 md:w-12/12
       lg:w-11/12 xl:w-10/12 md:pt-20 md:justify-center md:mx-auto animate-pulse"
    >
      <div className="bg-white h-full  md:w-5/12 lg:w-4/12  rounded-md shadow-md">
        <div className="pb-2 md:p-2 relative flex h-full">
          <div className="w-screen md:w-full h-96   bg-gray-200"></div>
        </div>
        <div className="px-3 py-6 relative">
          <p className="h-6 rounded-sm bg-gray-300 w-8/12"></p>
          <p className="h-5 my-1 rounded-sm bg-gray-300 w-10/12"></p>
          <p className="h-5 rounded-sm bg-gray-300 w-10/12"></p>
          <div className="py-1 flex items-center">
            <div className="flex  items-center gap-1 pl-1 text-gray-600 text-sm font-medium">
              <div className=""></div>
            </div>
          </div>
          <div className="py-2 flex items-center gap-3">
            <p className="w-20 bg-gray-200 h-7 rounded-sm"></p>
            <p className="w-20 bg-gray-200 h-7 rounded-sm"></p>
            <p className="w-20 bg-gray-200 h-7 rounded-sm"></p>
          </div>
          <div className="hidden  md:flex w-full px-3 gap-2  z-10">
            <button className="  py-2 bg-gray-200 h-12 rounded-full  w-6/12"></button>
            <button className="  py-2 bg-gray-200 rounded-full  w-6/12"></button>
          </div>
        </div>
      </div>

      {/* Product review */}
      <div className=" bg-white md:grow rounded-md shadow-md h-auto">
        <div className="h-auto pt-2  max-sm:pb-16">
          <div className="relative bg-white flex flex-col gap-2 border-b">
            <div className="relative ">
              <div className="text-lg px-6 border-b py-2 font-serif font-semibold">
                <p className="bg-gray-200 h-8 w-52 rounded-sm"></p>
              </div>
              <div className=" px-6 py-6">
                <ul className="list-none  flex flex-col gap-2">
                  <li className="h-6 bg-gray-200 w-10/12 rounded-sm"></li>
                  <li className="h-6 bg-gray-200 w-10/12 rounded-sm"></li>
                  <li className="h-6 bg-gray-200 w-10/12 rounded-sm"></li>
                  <li className="h-6 bg-gray-200 w-10/12 rounded-sm"></li>
                  <li className="h-6 bg-gray-200 w-10/12 rounded-sm"></li>
                  <li className="h-6 bg-gray-200 w-10/12 rounded-sm"></li>
                </ul>
              </div>
            </div>
            <div className="px-6 flex items-center justify-between  py-2 ">
              <p className="font-medium font-serif text-xl">Rating & Reviews</p>
              <button
                className="bg-black/90
              text-white
py-2  border rounded-full text-sm px-4
                transition duration-200 transform active:scale-95 ease-in-out"
              >
                Add Review
              </button>
            </div>
            <div className=" px-6 py-4 ">
              <div className="border-4 px-4 flex-col border-black/90 mx-auto w-36 h-36 flex items-center justify-center rounded-full">
                <span className="text-4xl border-b-2 w-full justify-center py-2   text-gray-800 flex items-center"></span>
                <p className="text-sm font-semibold text-gray-600 text-center"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductSkeleton;
