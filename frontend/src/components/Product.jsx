import React, { memo } from "react";
import ReactStarts from "react-rating-stars-component";

import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const options = {
  edit: false,
  isHalf: true,
  value: 2.5,
  color: "rgb(20,20,20,0.1)",
  size: 25,
  activeColor: "black",
};

const Product = memo(({ product }) => {
  console.log(product);
  return (
    <div className=" bg-gray-50  shadow-md rounded-md   flex flex-col   cursor-pointer">
      <Link to={`/product/?id=${product._id}`}>
        <div className="mx-auto flex flex-col">
          <div className="p-2 mx-auto">
            <img
              src={product.images[0]}
              alt="img"
              className="max-sm:w-full hover:scale-105 w-full duration-300 h-52"
            />
          </div>
          <div className="text-center text-sm p-2 gap-2 flex flex-col">
            <p className="font-semibold leading-tight">
              {/* product name */}
              {product?.name}
            </p>
            <div className="flex justify-center items-center gap-1 ">
              {/* <span className="text-white h-4 bg-green-500 flex items-center justify-center rounded-sm p-1 text-xs">
              4.3
              <AiFillStar fontSize={15} />
            </span>
            {"(246)"} */}
              <Rating
                name="half-rating-read"
                size="medium"
                precision={0.5}
                value={product.ratings}
                readOnly
              />
              ({product.numberOfReviews})
            </div>
            <div>
              <p className="font-medium text-lg">
                {/* price */}₹{product?.price}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
});

export default Product;
