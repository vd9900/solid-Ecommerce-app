import React from "react";

const CartTotalComSkeleton = () => {
  return (
    <div className="flex flex-col gap-1 animate-pulse">
      <div className="px-4 py-2">
        <div className="h-6 bg-gray-300 w-4/12 rounded-sm"></div>{" "}
      </div>
      <div className="py-2 px-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="bg-gray-300 h-5 rounded-sm w-5/12"></p>
          <p className="bg-gray-300 h-5 rounded-sm w-3/12"></p>
        </div>
        <div className="flex items-center justify-between">
          <p className="bg-gray-300 h-5 rounded-sm w-4/12"></p>
          <p className="bg-gray-300 h-5 rounded-sm w-3/12"></p>
        </div>
        <div className="flex items-center justify-between">
          <p className="bg-gray-300 h-5 rounded-sm w-4/12"></p>
          <p className="bg-gray-300 h-5 rounded-sm w-3/12"></p>
        </div>
      </div>
      {/* place order btn here */}
      <div className="border-t py-2 md:flex pt-5  px-4 justify-end items-center ">
        <div
          className={`
  w-5/12 py-2 px-2 h-9 bg-gray-300 rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default CartTotalComSkeleton;
