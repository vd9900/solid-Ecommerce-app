import { CircularProgress, Rating } from "@mui/material";
import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { MdOutlineAdd, MdOutlineDelete } from "react-icons/md";
import { RiCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useDeleteFromCartMutation } from "../../services/carts/cartApi";
import {
  decrementQty,
  deleteTheCartQty,
  incrementQty,
} from "../../services/carts/cartSplice";
// for discount percentage
const randomDiscount = Math.floor(Math.random() * 30);

const CartProduct = ({ product, refetch }) => {
  const [deleteFromCart, { error, isLoading }] = useDeleteFromCartMutation();

  // add qty to product logic
  const productQty = useSelector((state) => state.cartsStore.products);

  const totalAmout = productQty.reduce((a, product) => {
    return a + product.price * product.quantity;
  }, 0);
  console.log("totalAmout", totalAmout);
  const findProductIndex = productQty.findIndex(
    (pro) => pro.id === product._id
  );
  const Qty = productQty[findProductIndex]?.quantity;

  // console.log(Qty);
  // // console.log(Qty);
  // console.log(productQty);
  const dispatch = useDispatch();
  const increment_Qty = (id) => {
    dispatch(incrementQty(id));
  };
  const decrement_Qty = (id) => {
    dispatch(decrementQty(id));
  };

  const handleCartDelete = async (id) => {
    await deleteFromCart(id);
    dispatch(deleteTheCartQty(id));
    refetch();
  };

  return (
    <div className="flex flex-col gap-1 bg-white rounded-md shadow-md">
      <div className="flex py-4 gap-2">
        <div className="px-3 ">
          <Link to={`/product/?id=${product._id}`}>
            <img
              src={product?.image}
              alt=""
              className="w-52 object-cover"
            />
          </Link>
        </div>
        <div className="flex flex-col w-full font-medium">
          {/* product details */}
          <p>{product?.name}</p>
          <div className="py-1 flex items-center">
            <Rating
              name="read-only"
              size="large"
              value={product?.rating}
              readOnly
            />
            <span className="pl-1 text-orange-800 text-sm font-medium">
              ({product?.numberOfReviews})
            </span>
          </div>
          <div className="py-1 flex items-center gap-3">
            <p className="font-serif text-sm text-red-600">
              {randomDiscount}% off
            </p>
            <span className="text-gray-500 text-sm line-through">
              ₹
              {Math.floor(
                product?.price + product?.price * (randomDiscount / 100)
              )}
            </span>
            <span className="font-semibold text-xl">₹{product?.price}</span>
          </div>
          {/* for large device */}
          <div className="max-md:hidden flex items-center justify-evenly px-4 gap-5 md:py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => increment_Qty(product._id)}
                className="bg-black/10 font-medium  p-2 rounded-full
              transition duration-100 transform active:scale-95 ease-in-out
              "
              >
                <MdOutlineAdd fontSize={18} />
              </button>
              <input
                type="text"
                value={Qty || 1}
                className="px-2 rounded-lg bg-transparent text-2xl border border-black/70 font-semibold text-center font-mono py-1 w-14 h-10  "
                readOnly={true}
              />
              <button
                onClick={() => decrement_Qty(product._id)}
                className="bg-black/10  flex items-center justify-center p-2 rounded-full
              transition duration-100 transform active:scale-95 ease-in-out
              "
              >
                <BiMinus fontSize={18} />
              </button>
            </div>

            <div className=" flex gap-4  w-5/12 items-center">
              <button
                className="hover:bg-black hover:text-white duration-500 flex items-center  text-sm  font-semibold border rounded-full justify-center grow  w-5/12 py-3"
                disabled={isLoading}
                onClick={() => handleCartDelete(product?._id)}
              >
                <CircularProgress
                  size={16}
                  style={{
                    color: "white",
                    display: `${isLoading ? "inline-block" : "none"}`,
                  }}
                  className="text-black"
                />
                Remove
                <MdOutlineDelete fontSize={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 md:hidden flex items-center justify-evenly px-4 gap-5 md:py-3">
        {/* qty edit for small device  */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => increment_Qty(product._id)}
            className="bg-black/10 font-medium  p-2 rounded-full
              transition duration-100 transform active:scale-95 ease-in-out
              "
          >
            <MdOutlineAdd fontSize={18} />
          </button>
          <input
            type="text"
            value={Qty || 1}
            className="px-2 w-24  rounded-lg bg-transparent text-2xl border border-black/70 font-semibold text-center font-mono py-1  h-10  "
            readOnly={true}
          />
          <button
            onClick={() => decrement_Qty(product._id)}
            className="bg-black/10  flex items-center justify-center p-2 rounded-full
              transition duration-100 transform active:scale-95 ease-in-out
              "
          >
            <BiMinus fontSize={18} />
          </button>
        </div>

        <div className=" flex gap-4  w-5/12 items-center">
          <button
            className="hover:bg-black hover:text-white duration-500 flex items-center  text-sm  font-semibold border rounded-full justify-center grow  w-5/12 py-3"
            onClick={() => handleCartDelete(product?._id)}
          >
            Remove
            <MdOutlineDelete fontSize={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
