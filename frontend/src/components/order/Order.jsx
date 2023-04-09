import React from "react";
import { Link } from "react-router-dom";
import { useGetOrderDetailsQuery } from "../../services/orders/ordersApi";
import Navbar from "../Navbar";
import noOrderGif from '../../assets/imgs/noorder.gif'
import Loader from "../Loder";
import moment from "moment";
import { BsChevronDoubleRight } from "react-icons/bs";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
const Order = () => {
  const { isLoading, data, error,isFetching } = useGetOrderDetailsQuery();
  console.log(data);
  console.log("error", error);

  return (
    <div className="max-w-screen h-screen bg-gray-100">
      <Navbar />
      {isFetching ? (
        <Loader />
      ) : (
        <div className="pt-16 md:w-8/12 md:mx-auto">
          <div className="p-3">
            <p className="text-2xl font-serif font-medium">My orders</p>
          </div>
          <div className="px-3 py-2 flex flex-col gap-3 ">
            {data.message.length > 0 ? (
              data.message?.map((order) => (
                <div
                  key={order._id}
                  className="flex flex-col gap-3 rounded-md  p-3 border bg-white"
                >
                  <div>
                    <p className="">
                      <span className="font-medium">Order Id:</span> {order._id}
                    </p>
                  </div>
  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">Customer </p>
                      <p className="font-medium">{order.fullname}</p>
                    </div>
                    <div>
                      <p className="text-sm">Ordered On</p>
                      <p>
                        {moment(order.createdAt).format("MMM DD YYYY h:mm:ssa")}
                      </p>
                    </div>
                  </div>
                  <div className="text-right p-2">
                    <Link
                      to={`/order/?order=${order._id}`}
                      className="bg-black  flex items-center ml-auto gap-2 w-32
                px-4 py-2 text-sm text-white rounded-full
                transition duration-200 transform active:scale-95 ease-in-out
                "
                    >
                      Read more <HiOutlineChevronDoubleRight />
                    </Link>
                  </div>
                </div>
              ))
            ) :(
              <div className="relative flex flex-col items-center justify-center h-80 w-full">
                <img src={noOrderGif} alt="" className="w-60" />
                <p className="absolute top-60 mr-3 text-lg text-gray-700 font-sans">
                No Order's Yet.
                </p>
              </div>
            )} 
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
