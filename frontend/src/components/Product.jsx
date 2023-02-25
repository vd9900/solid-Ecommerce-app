import React from "react";
import { AiFillStar } from "react-icons/ai";

const Product = () => {
  return (
    <div className="w-56 h-80 flex flex-col bg-white shadow-md cursor-pointer">
      <div className="p-2 mx-auto">
        <img
          src="https://rukminim1.flixcart.com/image/200/200/krtjgcw0/headphone/d/9/g/au-mh501-maono-original-imag5j35rffkwpac.jpeg?q=70"
          alt=""
          className="hover:scale-105 duration-300"
        />
      </div>
      <div className="text-center text-sm p-2 gap-1 flex flex-col">
        <p className="font-semibold leading-tight">Max G4-0984 Studio Headphones</p>
        <div className="flex justify-center items-center gap-1 ">
          <span className="text-white h-4 bg-green-500 flex items-center justify-center rounded-sm p-1 text-xs">
            4.3
            <AiFillStar fontSize={15} />
          </span>
          {"(246)"}
        </div>
        <div>
          <p className="font-medium text-lg">₹1,499</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
