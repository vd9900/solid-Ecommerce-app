import React from "react";

const Offline = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen b">
      <div className="w-10/12 text-center">
        <div className="text-center flex items-center justify-center flex-col py-3">
          <img
            src="https://res.cloudinary.com/dtsxq1mlu/image/upload/v1679382409/113125-cat-crying-emojisticker-animation_1_vbanca.gif"
            alt=""
            className="w-44"
          />
          <p className="text-2xl font-serif font-medium">You're Offline</p>
          <p className="text-gray-600 text-sm">
            We'll wait for you because honestly, we don't want anyone else.....
          </p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="mx-auto bg-black m-2 text-white px-10 rounded-full py-2
            transition duration-200 transform active:scale-95 ease-in-out
               flex items-center gap-1 "
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default Offline;
