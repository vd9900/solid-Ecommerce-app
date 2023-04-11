import React, { useEffect, useRef, useState } from "react";

import Navbar from "../components/Navbar";
import Product from "../components/Product.jsx";
// import ProductViewMore from "../components/ProductViewMore.jsx";
import Carousel from "../components/Slider";
import { SmCat } from "../components/SmallDevicecom";

// apis
import {
  useLazyProductsQuery,
  useProductsQuery,
} from "../services/products/productApi";

// loader
import ProudctSkeleton from "../components/skeletons/ProudctSkeleton";

const AdsImg = [
  {
    id: 1,
    url: "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/dc73c139056a23b8.jpg?q=50",
  },
  {
    id: 2,
    url: "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/c7e1ee22bd4e906b.jpeg?q=50",
  },
  {
    id: 3,
    url: "https://rukminim1.flixcart.com/flap/844/120/image/75a15c3e19c3f7de.jpg?q=50",
  },
  {
    id: 4,
    url: "https://rukminim1.flixcart.com/flap/844/140/image/a6c01a03797c9dbb.jpg?q=50",
  },
];
const Home = () => {
  const categoryList = [
    "fashion",
    "mobile",
    "grocery",
    "electronics",
    "toys_more",
  ];

  const [count, setCount] = useState(0);
  const [category, setCategory] = useState(categoryList[count]);
  const elementRef = useRef();

  const { data, isLoading, isSuccess } = useProductsQuery({
    keepUnusedData: true,
  });
  console.log(data);

  return (
    <div className="max-w-screen ">
      <Navbar />

      <div className="w-full pt-14 flex flex-col  ">
        {/* ads slide carousel */}
        <div className="w-full h-auto flex flex-col gap-0">
          <div className="relative">
            <Carousel autoSlide={true} hideTools={true} style={["w-full "]}>
              {AdsImg.map(({ id, url }) => {
                return (
                  <img
                    src={url}
                    alt=""
                    className="w-full object-cover h-36 sm:h-40 md:h-56 lg:h-72"
                    key={id}
                  />
                );
              })}
            </Carousel>
          </div>
          <div className="p-2 sm:hidden ">
            <SmCat />
          </div>
          {/* Discounts component*/}
          {/* <div className="w-full bg-gray-400 p-2 sm:hidden ">
              {/* <DiscountComponent /> */}
          {/* </div> */}
        </div>
        {/* Recommended products */}

        {/* fetching from server */}
        {isLoading ? (
          <div className="sm:w-10/12  sm:mx-auto  p-2 sm:p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 justify-around ">
            {[...Array(6).keys()].map((i) => (
              <ProudctSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div ref={elementRef} className="w-full bg-gray-50 h-auto ">
            <div className="sm:w-10/12  sm:mx-auto  p-2 sm:p-6 flex flex-col">
              <p className="font-medium font-serif text-3xl p-2">Fashion</p>
              <div className="w-full  p-2  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 justify-around ">
                {/* <ProductViewMore img="Special" /> */}
                {isSuccess &&
                  data.products
                    .filter((pro) => pro.category === "fashion")
                    .map((cate) =>
                      cate.products.map((product) => (
                        <Product key={product._id} product={product} />
                      ))
                    )}
                {/* {isError && <div>{error}</div>} */}
              </div>
            </div>
            <div className="sm:w-10/12  sm:mx-auto  p-2 sm:p-6 flex flex-col">
              <p className="font-medium font-serif text-3xl p-2">Mobiles</p>
              <div className="w-full  p-2  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 justify-around ">
                {/* <ProductViewMore img="Special" /> */}
                {isSuccess &&
                  data.products
                    .filter((pro) => pro.category === "mobile")
                    .map((cate) =>
                      cate.products.map((product) => (
                        // <div key={product._id} className="bg-pink-100">
                        <Product key={product._id} product={product} />
                        // </div>
                      ))
                    )}
                {/* {isError && <div>{error}</div>} */}
              </div>
            </div>
            <div className="sm:w-10/12  sm:mx-auto  p-2 sm:p-6 flex flex-col">
              <p className="font-medium font-serif text-3xl p-2">Grocery</p>
              <div className="w-full  p-2  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 justify-around ">
                {isSuccess &&
                  data.products
                    .filter((pro) => pro.category === "grocery")
                    .map((cate) =>
                      cate.products.map((product) => (
                        // <div key={product._id} className="bg-pink-100">
                        <Product key={product._id} product={product} />
                        // </div>
                      ))
                    )}
                {/* <ProductViewMore img="Special" /> */}
                {/* {isError && <div>{error}</div>} */}
              </div>
            </div>
            <div className="sm:w-10/12  sm:mx-auto  p-2 sm:p-6 flex flex-col">
              <p className="font-medium font-serif text-3xl p-2">Electronics</p>
              <div className="w-full  p-2  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 justify-around ">
                {isSuccess &&
                  data.products
                    .filter((pro) => pro.category === "electronics")
                    .map((cate) =>
                      cate.products.map((product) => (
                        // <div key={product._id} className="bg-pink-100">
                        <Product key={product._id} product={product} />
                        // </div>
                      ))
                    )}
                {/* <ProductViewMore img="Special" /> */}
                {/* {isError && <div>{error}</div>} */}
              </div>
            </div>
            <div className="sm:w-10/12  sm:mx-auto  p-2 sm:p-6 flex flex-col">
              <p className="font-medium font-serif text-3xl p-2">Home</p>
              <div className="w-full  p-2  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 justify-around ">
                {isSuccess &&
                  data.products
                    .filter((pro) => pro.category === "home")
                    .map((cate) =>
                      cate.products.map((product) => (
                        // <div key={product._id} className="bg-pink-100">
                        <Product key={product._id} product={product} />
                        // </div>
                      ))
                    )}
                {/* <ProductViewMore img="Special" /> */}
                {/* {isError && <div>{error}</div>} */}
              </div>
            </div>
            <div className="sm:w-10/12  sm:mx-auto  p-2 sm:p-6 flex flex-col">
              <p className="font-medium font-serif text-3xl p-2">Books</p>
              <div className="w-full  p-2  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 justify-around ">
                {/* <ProductViewMore img="Special" /> */}
                {isSuccess &&
                  data.products
                    .filter((pro) => pro.category === "toys_more")
                    .map((cate) =>
                      cate.products.map((product) => (
                        // <div key={product._id} className="bg-pink-100">
                        <Product key={product._id} product={product} />
                        // </div>
                      ))
                    )}
                {/* {isError && <div>{error}</div>} */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
