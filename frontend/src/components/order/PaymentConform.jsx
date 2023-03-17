import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { Link } from "react-router-dom";
import successGif from "../../assets/imgs/success.gif";

const PaymentConform = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-3 md:gap-6">
        <div>
          <img src={successGif} alt="" className="w-60 md:w-72" />
        </div>
        <div className="text-center">
          <p className="text-2xl font-serif font-medium">
            Thank you for your order
          </p>
          <p className="text-gray-700">We'll foucs all on making you happy</p>
        </div>
        <div className="flex  items-center gap-3 py-3">
          <Link
            to={"/"}
            className="bg-black  text-white px-8 rounded-full py-2
            transition duration-200 transform active:scale-95 ease-in-out
               flex items-center gap-1 "
          >
            <AiOutlineHome fontSize={18} />
            Home
          </Link>
          <Link
            to={"/myorders"}
            className="bg-black  text-white px-8 rounded-full py-2
            transition duration-200 transform active:scale-95 ease-in-out
               flex items-center gap-1 "
          >
            <CgNotes fontSize={18} />
            Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentConform;
