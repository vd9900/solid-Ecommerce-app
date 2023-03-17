import React from "react";
import { Link } from "react-router-dom";
import { useGetOrderDetailsQuery } from "../../services/orders/ordersApi";
import Navbar from "../Navbar";
import Loader from "../Loder";
import moment from "moment";
const Order = () => {
  const { isLoading, data, error } = useGetOrderDetailsQuery();
  console.log(data);
  console.log("error", error);

  return (
    <div className="max-w-screen h-screen bg-gray-100">
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="pt-16 md:w-9/12 md:mx-auto">
          <div className="p-3">
            <p className="text-2xl font-serif font-medium">My orders</p>
          </div>
          <div className="px-3 py-2 flex flex-col gap-3 ">
            {data.message.map((order) => (
              <div className="flex flex-col gap-3 rounded-md  p-3 border bg-white">
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
                    className="bg-black 
              px-6 py-2 text-sm text-white rounded-full
              transition duration-200 transform active:scale-95 ease-in-out
              "
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
