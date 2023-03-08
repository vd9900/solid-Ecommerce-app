import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Carousel from "../components/Slider";

import post1 from "../assets/imgs/post1.jpg";
import post2 from "../assets/imgs/post2.jpg";
import post3 from "../assets/imgs/post3.jpg";
import post4 from "../assets/imgs/post4.jpg";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { TfiControlStop } from "react-icons/tfi";
import { useProductQuery } from "../services/products/productApi";
import { useAddToCartMutation } from "../services/carts/cartApi";
import Loader from "../components/Loder";
import { useAuthUser } from "react-auth-kit";
const posts = [
  {
    id: 1,
    img: post1,
  },
  {
    id: 2,
    img: post2,
  },
  {
    id: 3,
    img: post3,
  },
  {
    id: 4,
    img: post4,
  },
];

const SingleProduct = () => {
  const auth = useAuthUser();
  const { clickedProduct } = useSelector((state) => state.productsStore);
  const { data, isLoading, isSuccess } = useProductQuery(clickedProduct);
  const dispatch = useDispatch();
  const product = {};

  // Add to cart logic
  const [addToCart, { isLoading: addCartLoading, data: cartData, error }] =
    useAddToCartMutation();
  const handleAddCartbtn = () => {
    addToCart({
      product: data.message?._id,
    });
  };
  console.log(error);

  return (
    <div className="max-w-screen bg-gray-50 min-h-screen relative">
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className="pt-14 md:px-2 flex flex-col md:flex-row gap-6 md:gap-2 md:w-12/12
             lg:w-11/12 xl:w-10/12 md:pt-20 md:justify-center md:mx-auto"
        >
          <div className="bg-white md:w-5/12 lg:w-4/12">
            <div className="pb-2 md:p-2 h-auto relative flex">
              <Carousel
                dotColor="bg-white md:bg-black"
                style={["md:w-4/6 w-full h-auto mx-auto max-md:my-auto"]}
              >
                {posts.map(({ id, img }) => {
                  return (
                    <img
                      src={img}
                      alt=""
                      className="w-screen imgHeightforProduct md:w-full"
                      key={id}
                    />
                  );
                })}
              </Carousel>
            </div>
            <div className="px-3 py-6 relative">
              <p className="font-semibold text-2xl">{data?.message?.name}</p>
              <p className="text-sm">{data?.message?.description}</p>
              <div className="py-1 flex items-center">
                <AiFillStar className="text-green-600" fontSize={20} />
                <AiFillStar className="text-green-600" fontSize={20} />
                <AiFillStar className="text-green-600" fontSize={20} />
                <AiFillStar className="text-green-600" fontSize={20} />
                <AiFillStar className="text-green-600" fontSize={20} />
                <span className="pl-1 text-gray-600 text-sm font-medium">
                  1,234
                </span>
              </div>
              <div className="py-2 flex items-center gap-3">
                <p className="font-serif text-lg text-red-600">18% off</p>
                <span className="text-gray-500 text-lg line-through">₹899</span>
                <span className="font-semibold text-2xl">
                  {data?.message?.price}
                </span>
              </div>
              <div className="hidden absolute md:flex w-full  bottom left-0  z-10">
                <button
                  onClick={handleAddCartbtn}
                  className="grow py-3  text-white font-medium text-xl bg-black/95 "
                >
                  Add to cart
                </button>
                <button className="grow text-white font-medium text-xl py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
                  Buy now
                </button>
              </div>
            </div>
          </div>
          {/* Product review */}

          <div className="bg-white  md:hidden">
            <div className="px-6 py-2 ">
              <div className="text-lg py-2 font-serif font-semibold">
                <p>Product Deatils</p>
              </div>
              <div>
                <ul className="list-disc  list-inside text-gray-800 flex flex-col gap-1">
                  <li>long time battery</li>
                  <li>long time battery</li>
                  <li>long time battery</li>
                  <li>long time battery</li>
                  <li>long time battery</li>
                  <li>long time battery</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Product review */}
          <div className="bg-white md:grow">
            <div className=" py-2 ">
              <div className="bg-white hidden md:block ">
                <div className=" ">
                  <div className="text-lg px-6 border-b py-2 font-serif font-semibold">
                    <p>Product Deatils</p>
                  </div>
                  <div className="px-6 py-6">
                    <ul className="list-disc  list-inside text-gray-800 flex flex-col gap-1">
                      <li>long time battery</li>
                      <li>long time battery</li>
                      <li>long time battery</li>
                      <li>long time battery</li>
                      <li>long time battery</li>
                      <li>long time battery</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="px-6 flex items-center justify-between font-serif text-lg py-2 font-semibold">
                <p>Rating & Reviews</p>
                <button className="py-2 px-4 text-sm rounded-md bg-black text-white">
                  Add Review
                </button>
              </div>
              <div className="px-6 py-2">
                <div className="border-4 px-4 flex-col border-black/90 mx-auto w-36 h-36 flex items-center justify-center rounded-full">
                  <span className="text-3xl border-b-2 w-full justify-center py-2   text-gray-800 flex items-center">
                    4.3
                    <AiFillStar />
                  </span>
                  <p className="text-sm font-semibold text-gray-600 text-center">
                    1,321 rating and 134 reviews
                  </p>
                </div>
              </div>
              <div className="py-2">
                <div className="flex flex-col gap-3 border-b-2 py-2">
                  <div className="px-6 flex items-center gap-1 font-medium">
                    <span className="text-white w-7 h-4 bg-green-500 flex items-center justify-center rounded-sm p-1 text-xs">
                      4.3
                    </span>
                    <p>Super!</p>
                  </div>
                  <div className="px-6 ">
                    <p className="textleading-tight text-gray-800">
                      Backup is good. nice color and the delivery was so fast.
                      thank you for this good product
                    </p>
                    <div className="text-sm font-mono text-gray-700 flex gap-2 items-center  ">
                      <span>Vinith</span>•<span className="">2month ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="flex flex-col gap-3 border-b-2 py-2">
                  <div className="px-6 flex items-center gap-1 font-medium">
                    <span className="text-white w-7 h-4 bg-green-500 flex items-center justify-center rounded-sm p-1 text-xs">
                      4.3
                    </span>
                    <p>Super!</p>
                  </div>
                  <div className="px-6 ">
                    <p className="textleading-tight text-gray-800">
                      Backup is good. nice color and the delivery was so fast.
                      thank you for this good product
                    </p>
                    <div className="text-sm font-mono text-gray-700 flex gap-2 items-center  ">
                      <span>Vinith</span>•<span className="">2month ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="flex flex-col gap-3 border-b-2 py-2">
                  <div className="px-6 flex items-center gap-1 font-medium">
                    <span className="text-white w-7 h-4 bg-green-500 flex items-center justify-center rounded-sm p-1 text-xs">
                      4.3
                    </span>
                    <p>Super!</p>
                  </div>
                  <div className="px-6 ">
                    <p className="textleading-tight text-gray-800">
                      Backup is good. nice color and the delivery was so fast.
                      thank you for this good product
                    </p>
                    <div className="text-sm font-mono text-gray-700 flex gap-2 items-center  ">
                      <span>Vinith</span>•<span className="">2month ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="flex flex-col gap-3 border-b-2 py-2">
                  <div className="px-6 flex items-center gap-1 font-medium">
                    <span className="text-white w-7 h-4 bg-green-500 flex items-center justify-center rounded-sm p-1 text-xs">
                      4.3
                    </span>
                    <p>Super!</p>
                  </div>
                  <div className="px-6 ">
                    <p className="textleading-tight text-gray-800">
                      Backup is good. nice color and the delivery was so fast.
                      thank you for this good product
                    </p>
                    <div className="text-sm font-mono text-gray-700 flex gap-2 items-center  ">
                      <span>Vinith</span>•<span className="">2month ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="flex flex-col gap-3 border-b-2 py-2">
                  <div className="px-6 flex items-center gap-1 font-medium">
                    <span className="text-white w-7 h-4 bg-green-500 flex items-center justify-center rounded-sm p-1 text-xs">
                      4.3
                    </span>
                    <p>Super!</p>
                  </div>
                  <div className="px-6 ">
                    <p className="textleading-tight text-gray-800">
                      Backup is good. nice color and the delivery was so fast.
                      thank you for this good product
                    </p>
                    <div className="text-sm font-mono text-gray-700 flex gap-2 items-center  ">
                      <span>Vinith</span>•<span className="">2month ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="flex flex-col gap-3 border-b-2 py-2">
                  <div className="px-6 flex items-center gap-1 font-medium">
                    <span className="text-white w-7 h-4 bg-green-500 flex items-center justify-center rounded-sm p-1 text-xs">
                      4.3
                    </span>
                    <p>Super!</p>
                  </div>
                  <div className="px-6 ">
                    <p className="textleading-tight text-gray-800">
                      Backup is good. nice color and the delivery was so fast.
                      thank you for this good product
                    </p>
                    <div className="text-sm font-mono text-gray-700 flex gap-2 items-center  ">
                      <span>Vinith</span>•<span className="">2month ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed flex w-full bottom-0  z-0 md:hidden">
        <button
          className="grow py-3  text-white font-medium text-xl bg-black/95 "
          onClick={handleAddCartbtn}
        >
          Add to cart
        </button>
        <button className="grow text-white font-medium text-xl py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
