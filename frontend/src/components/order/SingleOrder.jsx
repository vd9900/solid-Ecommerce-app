import moment from "moment";
import React from "react";
import { useLocation } from "react-router-dom";
import { useGetSignaleOrderDetailsQuery } from "../../services/orders/ordersApi";
import Navbar from "../Navbar";

const SingleOrder = () => {
  const search = useLocation().search;
  const order = new URLSearchParams(search).get("order");
  const { data, error } = useGetSignaleOrderDetailsQuery(order);
  console.log(data);
  return (
    <div className="bg-gray-100 w-screen h-screen">
      <Navbar />
      <div className="pt-16 px-1">
        <div className="md:w-10/12 lg:w-9/12 xl:w-9/12 mx-auto">
          <p className="text-3xl   py-3 font-serif font-medium">
            Order Details
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <div class=" rounded-lg bg-white shadow-md overflow-hidden">
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
                    <th scope="col" class="px-3 py-4 font-medium ">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                  <tr class="w-full">
                    <th class="flex gap-3 px-2 py-4 font-normal items-center text-gray-900">
                      <div class="relative h sm:w-28 md:w-36 lg:w-44 xl:w-56  ">
                        <img
                          class="h-full w-full  object-cover object-center"
                          src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/b/p/s/-original-imaggsuemmztbghp.jpeg?q=70"
                          alt=""
                        />
                      </div>
                      <div class="max-sm:text-xs">
                        <div class="font-medium text-black">
                          Google Pixels 7pro
                        </div>
                        <div class="text-gray-400 text-xs">256GB/8GB black</div>
                      </div>
                    </th>
                    <td class="px-3 py-4 font-medium">₹128</td>
                    <td class="px-3 py-4 max-sm:text-xs">Product Designer</td>
                    <td class="px-3 py-4">
                      <div class="flex gap-2 text-black font-medium"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* payment info */}
            <div>
              <div className="rounded-md shadow-md bg-white">
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
                <button
                  className="bg-black px-8 py-2 text-sm text-white rounded-full
                transition duration-200 transform active:scale-95 ease-in-out"
                >
                  Need Help?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
