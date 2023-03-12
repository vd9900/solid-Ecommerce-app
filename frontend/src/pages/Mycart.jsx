import React from "react";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineCursorArrowRays } from "react-icons/hi2";
import { FaAt } from "react-icons/fa";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import {
  MdOutlineAdd,
  MdOutlineDelete,
  MdOutlineMinimize,
  MdOutlineWatchLater,
} from "react-icons/md";
import { BiMinus } from "react-icons/bi";
import {
  useCartsQuery,
  useDeleteFromCartMutation,
} from "../services/carts/cartApi";
import Loader from "../components/Loder";
import CartProduct from "../components/cart/CartProduct";
const Mycart = () => {
  const {
    data: carts,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useCartsQuery(undefined, { refetchOnMountOrArgChange: true });
  const [deleteFromCart] = useDeleteFromCartMutation();
  const handleCartDelete = (id) => {
    alert(id);
    deleteFromCart(id);
  };

  return (
    <div className="max-w-screen bg-gray-50 min-h-screen">
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="pt-16 pb-4 flex flex-col gap-3">
          <div className="">
            <p className="px-3 font-serif font-medium text-3xl">My cart</p>
          </div>
          <div className="border-t flex md:w-11/12 lg:w-10/12 xl:w-9/12 md:gap-3 md:mx-auto ">
            <div className="md:w-8/12 w-full">
              <div className=" md:mx-auto flex flex-col gap-3">
                {/* all carts here */}
                {isSuccess &&
                  carts.ids?.map((productId) => (
                    <CartProduct key={productId} productId={productId} />
                  ))}
                {isError && <div>Cart is empty</div>}
                {carts?.ids.length === 0 && <div>Cart is empty</div>}
                {/* place order btn here */}
                <div className="flex md:hidden p-2 bg-gray-50 justify-between items-center">
                  <div className="px-3 py-1 flex items-center gap-1">
                    <span className="flex gap-1 text-lg font-semibold items-center">
                      Total
                      <FaAt fontSize={24} />
                    </span>
                    <p className="font-mono font-semibold text-2xl">₹12,842</p>
                  </div>
                  <button className="flex  gap-1 shadow-lg  font-medium text-white items-center w-5/12 py-2 px-2 justify-center bg-black/95  rounded-full">
                    Place order
                    <HiOutlineCursorArrowRays fontSize={25} />
                  </button>
                </div>
              </div>
              {/* Save for later here */}
            </div>
            {/* payment here */}
            <div className="hidden md:block md:w-4/12 h-60 bg-white ">
              <div className="flex flex-col gap-1">
                <div>
                  <p className="py-2 px-4 border-b font-serif">Price Detials</p>
                </div>
                <div className="py-2 px-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <p>Price(2 items)</p>
                    <p>₹899</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>You saved</p>
                    <p className="text-green-700">₹999</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>Delivery Charges</p>
                    <p className="text-green-700">Free</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Total Amount </p>
                    <p className="text-xl font-semibold">₹899</p>
                  </div>
                </div>
                {/* place order btn here */}
                <div className="border-t py-1 md:flex mb-auto  px-4 justify-end items-center ">
                  <button className="w-32 text-white flex items-center p-2 rounded-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <span className="font-semibold">Place order</span>
                    <HiOutlineCursorArrowRays fontSize={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mycart;
