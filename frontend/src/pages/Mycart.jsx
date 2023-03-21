import React, { useEffect } from "react";
import { HiOutlineCursorArrowRays } from "react-icons/hi2";
import { FaAt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import emptyCartGif from "../assets/imgs/emptycart.gif";
import {
  useCartsQuery,
  useDeleteFromCartMutation,
} from "../services/carts/cartApi";
import Loader from "../components/Loder";
import CartProduct from "../components/cart/CartProduct";
import {
  AddToCart,
  calucalteToltal,
  ClearTheCart,
} from "../services/carts/cartSplice";
import { Link } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import CartProductSkeleton from "../components/skeletons/CartProductSkeleton";
import CartTotalComSkeleton from "../components/skeletons/CartTotalComSkeleton";
const Mycart = () => {
  const {
    data: carts,
    isLoading,
    isError,
    isSuccess,
    error,
    refetch,
  } = useCartsQuery();
  const [deleteFromCart] = useDeleteFromCartMutation();

  //storing cart in gobal store
  const dispatch = useDispatch();
  if (isError) {
    throw new Error(JSON.stringify(error));
  }
  useEffect(() => {
    if (isSuccess && carts.length > 0) {
      dispatch(ClearTheCart());
      const newCarts = carts.map((product) => ({
        id: product._id,
        price: product.price,
        name: product.name,
        quantity: 1,
      }));
      const totalValue = newCarts.reduce((a, v) => {
        return a + v.price;
      }, 0);

      console.log(totalValue);
      const cartInfo = {
        total: totalValue,
        products: newCarts,
      };
      dispatch(AddToCart(cartInfo));
    }
  }, [carts, dispatch, isSuccess]);

  // console.log(carts);
  //total price of the products
  const productQty = useSelector((state) => state.cartsStore.products);

  const totalAmout = productQty.reduce((a, product) => {
    return a + product.price * product.quantity;
  }, 0);
  dispatch(calucalteToltal(totalAmout));

  return (
    <div className="max-w-screen bg-gray-50 min-h-screen">
      <Navbar />
      <div className="pt-16 pb-4 flex flex-col gap-3 h-full">
        <div className="sm:w-9/12 sm:mx-auto">
          <p className="px-3 font-serif font-medium text-3xl">My cart</p>
        </div>
        <div className=" flex md:w-11/12 lg:w-10/12 xl:w-9/12 md:gap-3 md:mx-auto h-full">
          <div className="md:w-8/12 w-full ">
            {isLoading ? (
              <>
                {[...Array(6).keys()].map((i) => (
                  <CartProductSkeleton key={i} />
                ))}
              </>
            ) : (
              <div className="mx-auto flex flex-col gap-3 h-full">
                {/* all carts here */}
                <div className="flex flex-col pb-16 px-2 gap-2">
                  {isSuccess &&
                    carts.map((product) => (
                      <CartProduct
                        key={product._id}
                        product={product}
                        refetch={refetch}
                      />
                    ))}
                  {isError && (
                    <div>
                      <img src={emptyCartGif} alt="" className="w-56" />
                    </div>
                  )}
                  {carts?.length === 0 && (
                    <div className="bg-white rounded-md h-96 flex flex-col items-center justify-center">
                      <img src={emptyCartGif} alt="" className="w-56" />
                      <p className="text-gray-700 font-medium">
                        Life would be empty without a item in cart
                      </p>
                    </div>
                  )}
                </div>
                {/* place order btn here */}
                <div className="w-full fixed bottom-0 flex md:hidden  border-black/80 py-2 px-2 bg-gray-200 justify-between items-center">
                  <div className="px-3 py-1 flex items-center gap-1">
                    <span className="flex gap-1 text-lg font-semibold items-center">
                      <AiOutlineInfoCircle fontSize={28} />
                      Total :
                    </span>
                    <p className="font-mono font-semibold text-2xl">
                      ₹{totalAmout}
                    </p>
                  </div>
                  <Link
                    to={`${totalAmout > 0 ? "address" : ""}`}
                    className={`${
                      totalAmout > 0 ? "bg-black/90" : "bg-black/70"
                    } flex  gap-1 text-lg  font-medium border items-center w-5/12 py-2 px-2 justify-center  text-white  rounded-full`}
                  >
                    Check out
                    <HiOutlineCursorArrowRays fontSize={25} />
                  </Link>
                </div>
              </div>
            )}
            {/* Save for later here */}
          </div>
          {/* payment here */}
          <div className="hidden md:block md:w-4/12  bg-white shadow-md rounded-md max-h-56">
            {isLoading ? (
              <CartTotalComSkeleton />
            ) : (
              <div className="flex flex-col gap-1 ">
                <div>
                  <p className="py-2 px-4 border-b font-serif">Price Detials</p>
                </div>
                <div className="py-2 px-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <p>Cart items</p>
                    <p>{carts?.length}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>Delivery Charges</p>
                    <p className="text-green-700">Free</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Total Amount </p>
                    <p className="text-xl font-semibold">₹{totalAmout}</p>
                  </div>
                </div>
                {/* place order btn here */}
                <div className="border-t py-2 md:flex mb-auto  px-4 justify-end items-center ">
                  <Link
                    to={`${totalAmout > 0 ? "address" : ""}`}
                    className={`${
                      totalAmout > 0 ? "bg-black/90" : "bg-black/70"
                    } flex  gap-1   font-medium border items-center w-5/12 py-2 px-2 justify-center  text-white  rounded-full`}
                  >
                    Check out
                    <HiOutlineCursorArrowRays fontSize={25} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mycart;
