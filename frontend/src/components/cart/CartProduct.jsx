import { Rating } from "@mui/material";
import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { MdOutlineAdd, MdOutlineDelete } from "react-icons/md";
import { useSelector } from "react-redux";

import {
  selectById,
  useDeleteFromCartMutation,
} from "../../services/carts/cartApi";
const CartProduct = ({ productId }) => {
  const product = useSelector((state) => selectById(state, productId));
  const [deleteFromCart, { error }] = useDeleteFromCartMutation();
  const handleCartDelete = (id) => {
    deleteFromCart(id);
  };
  console.log(error);
  console.log(product);
  return (
    <div className="flex flex-col gap-3 bg-white">
      <div className="flex py-4 gap-2">
        <div className="px-3 w-4/12 sm:w-48">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="w-32"
          />
        </div>
        <div className="flex flex-col">
          {/* product details */}
          <p>{product?.name}</p>
          <div className="py-1 flex items-center">
            <Rating
              name="read-only"
              size="large"
              value={product?.ratings}
              readOnly
            />
            <span className="pl-1 text-orange-800 text-sm font-medium">
              ({product?.numberOfReviews})
            </span>
          </div>
          <div className="py-1 flex items-center gap-3">
            <p className="font-serif text-sm text-red-600">18% off</p>
            <span className="text-gray-500 text-sm line-through">₹899</span>
            <span className="font-semibold text-xl">₹{product?.price}</span>
          </div>
          <div className="flex items-center gap-2 py-2">
            <button className="bg-slate-600 text-white p-1 rounded-md">
              <MdOutlineAdd fontSize={18} />
            </button>
            <input
              type="text"
              value={product?.qty}
              className="border font-semibold text-center font-mono text-xl py-1 w-16 rounded-sm bg-stone-50"
            />
            <button className="bg-slate-600 text-white flex items-center justify-center p-1 rounded-md">
              <BiMinus fontSize={18} />
            </button>
          </div>

          <div className="max-md:hidden flex gap-4 ">
            <button className=" hover:bg-black hover:text-white duration-500 border  rounded-full text-sm  font-semibold  flex items-center justify-center w-6/12 py-2">
              Save for later
            </button>
            <button
              className="hover:bg-black hover:text-white duration-500 flex items-center  text-sm  font-semibold border rounded-full justify-center  grow  w-6/12 py-2"
              onClick={() => handleCartDelete(product?._id)}
            >
              <MdOutlineDelete fontSize={18} />
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden flex border-t border-b">
        <button className="border-r text-sm text-gray-600 font-semibold py flex items-center justify-center w-6/12 py-3">
          Save for later
        </button>
        <button
          className="flex items-center  text-sm text-gray-600 font-semibold justify-center  grow py-3 w-6/12"
          onClick={() => handleCartDelete(product?._id)}
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
