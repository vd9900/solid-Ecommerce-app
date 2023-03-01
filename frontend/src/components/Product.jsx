import React from "react";
import ReactStarts from "react-rating-stars-component";

import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const options = {
  edit: false,
  isHalf: true,
  value: 2.5,
  color: "rgb(20,20,20,0.1)",
  size: 25,
  activeColor: "black",
};

const Product = ({ product }) => {
  return (
    <div className="max-sm:w-full  max-sm:mx-auto sm:w-56 sm:h-full flex flex-col bg-white shadow-md cursor-pointer">
      <Link to={`/product/?id=${product._id}`}>
        <div className="p-2 mx-auto">
          <img
            src="https://rukminim1.flixcart.com/image/200/200/krtjgcw0/headphone/d/9/g/au-mh501-maono-original-imag5j35rffkwpac.jpeg?q=70"
            alt=""
            className="max-sm:w-36 hover:scale-105 duration-300"
          />
        </div>
        <div className="text-center text-sm p-2 gap-1 flex flex-col">
          <p className="font-semibold leading-tight">
            {/* product name */}
            {product.name}
          </p>
          <p className="font-semibold leading-tight">
            {/* product discription */}
            {product.description}
          </p>
          <div className="flex justify-center items-center gap-1 ">
            {/* <span className="text-white h-4 bg-green-500 flex items-center justify-center rounded-sm p-1 text-xs">
              4.3
              <AiFillStar fontSize={15} />
            </span>
            {"(246)"} */}
            <ReactStarts {...options} />
            (2,456)
          </div>
          <div>
            <p className="font-medium text-lg">
              {/* price */}₹{product.price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
