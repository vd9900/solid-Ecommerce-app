import React from "react";

import Navbar from "../components/Navbar";
import Product from "../components/Product.jsx";
// import ProductViewMore from "../components/ProductViewMore.jsx";
import Carousel from "../components/Slider";
import { SmCat } from "../components/SmallDevicecom";

// apis
import { useProductsQuery } from "../services/products/productApi";

// loader
import ProudctSkeleton from "../components/skeletons/ProudctSkeleton";

const AdsImg = [
  {
    id: 1,
    url: "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/c7e1ee22bd4e906b.jpeg?q=50",
  },
  {
    id: 2,
    url: "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/c7e1ee22bd4e906b.jpeg?q=50",
  },
  {
    id: 3,
    url: "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/c7e1ee22bd4e906b.jpeg?q=50",
  },
  {
    id: 4,
    url: "https://rukminim1.flixcart.com/fk-p-flap/50/50/image/16d15dd63bfa885a.jpg?q=50",
  },
];

const Home = () => {
  const { data, isLoading, isFetching, isSuccess, isError, error } =
    useProductsQuery();

  // error handling with  errorboundary
  if (isError) {
    throw new Error(JSON.stringify(error));
  }

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
          <div className="w-full bg-gray-50  ">
            <div className="sm:w-10/12  sm:mx-auto  p-2 sm:p-6 flex flex-col">
              <p className="font-medium font-serif text-3xl p-2">Fashion</p>
              <div className="w-full  p-2  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 justify-around ">
                {/* <ProductViewMore img="Special" /> */}
                {isSuccess &&
                  data.products
                    .filter((pro) => pro.category === "fashion")
                    .map((product) => (
                      // <div key={product._id} className="bg-pink-100">
                      <Product key={product._id} product={product} />
                      // </div>
                    ))}
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
                    .map((product) => (
                      // <div key={product._id} className="bg-pink-100">
                      <Product key={product._id} product={product} />
                      // </div>
                    ))}
                {/* {isError && <div>{error}</div>} */}
              </div>
            </div>
            <div className="sm:w-10/12  sm:mx-auto  p-2 sm:p-6 flex flex-col">
              <p className="font-medium font-serif text-3xl p-2">Grocery</p>
              <div className="w-full  p-2  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 justify-around ">
                {/* <ProductViewMore img="Special" /> */}
                {isSuccess &&
                  data.products
                    .filter((pro) => pro.category === "grocery")
                    .map((product) => (
                      // <div key={product._id} className="bg-pink-100">
                      <Product key={product._id} product={product} />
                      // </div>
                    ))}
                {/* {isError && <div>{error}</div>} */}
              </div>
            </div>
            <div className="sm:w-10/12  sm:mx-auto  p-2 sm:p-6 flex flex-col">
              <p className="font-medium font-serif text-3xl p-2">Electronics</p>
              <div className="w-full  p-2  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 justify-around ">
                {/* <ProductViewMore img="Special" /> */}
                {isSuccess &&
                  data.products
                    .filter((pro) => pro.category === "electronics")
                    .map((product) => (
                      // <div key={product._id} className="bg-pink-100">
                      <Product key={product._id} product={product} />
                      // </div>
                    ))}
                {/* {isError && <div>{error}</div>} */}
              </div>
            </div>
            <div className="sm:w-10/12  sm:mx-auto  p-2 sm:p-6 flex flex-col">
              <p className="font-medium font-serif text-3xl p-2">Toys & more</p>
              <div className="w-full  p-2  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 justify-around ">
                {/* <ProductViewMore img="Special" /> */}
                {isSuccess &&
                  data.products
                    .filter((pro) => pro.category === "toys_more")
                    .map((product) => (
                      // <div key={product._id} className="bg-pink-100">
                      <Product key={product._id} product={product} />
                      // </div>
                    ))}
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
