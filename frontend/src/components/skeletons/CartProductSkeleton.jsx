import { Rating } from "@mui/material";
import React from "react";

const CartProductSkeleton = () => {
  const product = {};
  return (
    <div className="flex flex-col gap-1 bg-white rounded-md shadow-md">
      <div className="flex py-4 gap-2 animate-pulse px-2">
        <div className="w-56 bg-gray-200 h-32 rounded-md px-3 "></div>
        <div className="flex flex-col w-full font-medium gap-2">
          {/* product details */}
          <p className="h-5 rounded-sm w-10/12 bg-gray-300">{product?.name}</p>
          <div className="py-1 flex items-center w-8/12 h-6 bg-gray-300 rounded-sm"></div>
          <div className="py-1 flex items-center gap-3 h-4">
            <p className="bg-gray-300 h-4 rounded-sm w-10"></p>
            <p className="bg-gray-300 h-4 rounded-sm w-10"></p>
            <p className="bg-gray-300 h-6 rounded-sm w-14"></p>
          </div>
          {/* for large device */}
          <div className="max-md:hidden flex items-center justify-evenly px-4 gap-5 md:py-3">
            <div className="flex items-center gap-3">
              <button
                className="bg-black/10 font-medium  p-3 rounded-full
            transition duration-100 transform active:scale-95 ease-in-out
            "
              ></button>
              <div
                type="text"
                className="px-4 rounded-lg bg-gray-200  py-1 w-14 h-10  "
              ></div>
              <div />
              <button
                className="bg-black/10  flex items-center justify-center p-3 rounded-full
            transition duration-100 transform active:scale-95 ease-in-out
            "
              ></button>
            </div>

            <div className=" flex gap-4  w-5/12 items-center ">
              <div className="rounded-full bg-gray-300 h-8 grow  w-5/12 py-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 md:hidden flex items-center justify-around  px-4 gap-5 md:py-3">
        {/* qty edit for small device  */}
        <div className="flex items-center gap-3">
          <div
            className="bg-black/10  p-3 rounded-full
            "
          ></div>
          <div
            type="text"
            className="px-2 w-24  rounded-lg bg-gray-200  h-10  "
          ></div>
          <button className="bg-gray-300  flex items-center justify-center p-3 rounded-full"></button>
        </div>

        <div className=" flex gap-4 w-9/12 items-center justify-end">
          <div className="h-9 bg-gray-300 rounded-full   w-9/12 py-3"></div>
        </div>
      </div>
    </div>
  );
};

export default CartProductSkeleton;
