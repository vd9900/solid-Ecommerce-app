import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import Product from "../components/Product.jsx";
import ProductViewMore from "../components/ProductViewMore.jsx";
import Carousel from "../components/Slider";
import { DiscountComponent, SmCat } from "../components/SmallDevicecom";

import { Link } from "react-router-dom";

// import { IoIosArrowDroprightCircle } from "react-icons/io";
import { getProducts } from "../actions/productAction";

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
  const dispatch = useDispatch();
  const { loading, products, error, productCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(loading);
  console.log(products);
  
  return (
    <div className="max-w-screen ">
      <Navbar />
      <div className="w-full pt-11 flex flex-col gap-10 sm:gap-16 ">
        {/* ads slide carousel */}
        <div className="w-full h-auto py-3 flex flex-col gap-4">
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
          <div className="w-full bg-gray-400 p-2 sm:hidden ">
            <DiscountComponent />
          </div>
        </div>
        {/* Recommended products */}
        <div className="w-full bg-gray-50  ">
          <div className="sm:w-10/12  sm:mx-auto  p-2 sm:p-6 flex flex-col">
            <p className="font-medium text-lg sm:text-2xl px-2">
              Special for you
            </p>
            <div className="w-full  p-2 gap-3 flex justify-around flex-wrap">
              <ProductViewMore img="Special" />
              {/* <Product />
              <Product />
              <Product />
              <Product /> */}
            </div>
          </div>
        </div>
        {/* fetching from server */}
        <div className="w-full bg-gray-50  ">
          <div className="sm:w-10/12  sm:mx-auto  p-2 sm:p-6 flex flex-col">
            <p className="font-medium text-lg sm:text-2xl px-2">all products</p>
            <div className="w-full  p-2 gap-3 flex justify-around flex-wrap">
              <ProductViewMore img="Special" />
              { products &&
                products.map((product) =>  
                <div>
                  <Product product={product} />
                </div>
                  
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
