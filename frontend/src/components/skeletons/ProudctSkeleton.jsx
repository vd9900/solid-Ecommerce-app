import React from "react";

const ProudctSkeleton = () => {
  const product = {};
  return (
    <div className=" bg-gray-50  shadow-md rounded-md   flex flex-col   cursor-pointer">
      <div className="mx-auto flex flex-col animate-pulse w-full p-2">
        <div className="p-2 mx-auto h-40 w-full bg-slate-200 rounded-md"></div>
        <div className="text-center text-sm py-3 gap-2 flex flex-col">
          <p className="font-semibold leading-tight h-5 rounded-sm bg-gray-300 w-full">
            {/* product name */}
            {product?.name}
          </p>
          <span className="flex flex-col gap-1">
            <p className="font-semibold leading-tight h-4 w-11/12   bg-gray-300"></p>
            <p className="font-semibold leading-tight h-4 w-10/12  bg-gray-300"></p>
          </span>
          <div className="">
            <p className="font-medium text-lg bg-gray-300 w-full h-4 rounded-sm"></p>
          </div>
          <div className="">
            <p className="font-medium text-lg bg-gray-300  h-6 rounded-sm w-8/12"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProudctSkeleton;
