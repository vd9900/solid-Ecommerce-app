import moment from "moment";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetSignaleOrderDetailsQuery } from "../../services/orders/ordersApi";
import Navbar from "../Navbar";
import Loader from "../Loder";
import { Alert, Collapse, IconButton } from "@mui/material";

const SingleOrder = () => {
  const search = useLocation().search;
  const order = new URLSearchParams(search).get("order");
  const { data, error, isLoading } = useGetSignaleOrderDetailsQuery(order);
  console.log(data);

  return (
    <div className="bg-gray-100 max-w-screen h-screen">
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="pt-16 px-1 w-full">
          <div className="md:w-10/12 lg:w-9/12 xl:w-9/12 mx-auto ">
            <p className="text-3xl   py-3 font-serif font-medium">
              Order Details
            </p>
            <div className="flex flex-col md:flex-row gap-5 w-full">
              <div class="md:w-10/12 rounded-lg bg-white shadow-md overflow-hidden">
                <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                  <thead class="bg-black/90 text-white">
                    <tr>
                      <th scope="col" class="px-3 py-4 font-medium ">
                        Product name
                      </th>
                      <th scope="col" class="px-3 py-4 font-medium ">
                        price
                      </th>
                      <th scope="col" class="px-3 py-4 font-medium ">
                        qty
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                    {data?.message?.orderItems.map((item, i) => (
                      <tr key={i} class="w-full">
                        <th class="flex gap-3 px-2 py-4 font-normal items-center text-gray-900">
                          <div class="relative w-20 sm:w-28 ">
                            <img
                              class="h-full w-full  object-cover object-center"
                              src={item?.image}
                              alt="pro"
                            />
                          </div>
                          <div class="max-sm:text-xs">
                            <div class="font-medium text-black">
                              {item?.name}
                            </div>
                            <div class="text-gray-400 text-xs">
                              256GB/8GB black
                            </div>
                          </div>
                        </th>
                        <td class="px-3 py-4 font-medium">{item?.price}</td>
                        <td class="px-3 py-4 max-sm:text-xs">
                          {item?.quantity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* payment info */}
              <div className="md:w-5/12 flex flex-col gap-4">
                <div className="rounded-md shadow-md bg-white ">
                  <div className="rounded-md p-3 bg-black text-white font-medium">
                    <p>Payment Info</p>
                  </div>
                  <div className="p-3 flex ">
                    <p className="font-medium w-3/6">Address</p>
                    <div className="flex flex-col  ">
                      <span>{data?.message?.shippingInfo?.address}</span>
                      <span>{data?.message?.shippingInfo?.city}</span>
                      <span>{data?.message?.shippingInfo?.country}</span>
                    </div>
                  </div>
                  <div className="p-3 flex ">
                    <p className="font-medium w-2/6">Shipping Status</p>
                    <div className="flex flex-col px-2">
                      <span>{data?.message?.orderStatus}</span>
                    </div>
                  </div>
                  <div className="p-3 flex ">
                    <p className="font-medium w-2/6">Paid on</p>
                    <div className="flex flex-col px-2">
                      <span>
                        {moment(order?.message?.createdAt).format(
                          "MMM DD YYYY h:mm:ssa"
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="p-3 flex ">
                    <p className="font-medium w-2/6">Customer</p>
                    <div className="flex flex-col px-2">
                      <span> {data?.message?.fullname}</span>
                    </div>
                  </div>
                  <div className="p-3 flex ">
                    <p className="font-semibold w-2/6">Total Price</p>
                    <div className="flex flex-col px-2">
                      <span className="font-medium text-lg">
                        ₹{data?.message?.totalPaid}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-3 text-right">
                  <Link
                    to={"/contact"}
                    className="bg-black px-8 py-3 text-sm text-white rounded-full
                transition duration-200 transform active:scale-95 ease-in-out"
                  >
                    Need Help?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleOrder;
