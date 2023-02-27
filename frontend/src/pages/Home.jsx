import React from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product.jsx";
import ProductViewMore from "../components/ProductViewMore.jsx";
import Carousel from "../components/Slider";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

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
            <div className="flex flex-col gap-2">
              <div className="flex ">
                <span className="grow flex flex-col items-center justify-center">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
                    alt=""
                    className="object-cover w-24"
                  />
                  <p className="text-sm font-medium text-center leading-tight">
                    Special for you
                  </p>
                </span>
                <span className="grow flex flex-col items-center justify-center">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                    alt=""
                    className="object-cover w-24"
                  />
                  <p className="text-sm font-medium">Mobiles</p>
                </span>
                <span className="grow flex flex-col items-center justify-center">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
                    alt=""
                    className="object-cover w-24"
                  />
                  <p className="text-sm font-medium">Fashion</p>
                </span>
                <span className="grow flex flex-col items-center justify-center">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
                    alt=""
                    className="object-cover w-24"
                  />
                  <p className="text-sm font-medium">Grocery</p>
                </span>
              </div>
              <div className="flex ">
                <span className="grow flex flex-col items-center justify-center">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
                    alt=""
                    className="object-cover w-24"
                  />
                  <p className="text-sm font-medium">Electronics</p>
                </span>
                <span className="grow flex flex-col items-center justify-center">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
                    alt=""
                    className="object-cover w-24"
                  />
                  <p className="text-sm font-medium">Home</p>
                </span>
                <span className="grow flex flex-col items-center justify-center">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
                    alt=""
                    className="object-cover w-24"
                  />
                  <p className="text-sm font-medium">Toys & More</p>
                </span>
              </div>
            </div>
          </div>
          {/* Discounts component*/}
          <div className="w-full bg-gray-400 p-2 sm:hidden ">
            <div className="flex items-center justify-between p-1">
              <p className="text-white pb-2 text-lg">Discounts for you</p>
              <IoIosArrowDroprightCircle
                className="text-gray-700"
                fontSize={25}
              />
            </div>
            <div className="flex flex-col px-2 gap-2">
              <div className="flex gap-2 items-center">
                <div className="grow flex bg-white flex-col gap-1 p-2">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
                    alt=""
                    className="w-32 object-cover mx-auto"
                  />
                  <span>
                    <p>Men's Night Suits</p>
                    <p className="font-medium text-green-600 text-sm">
                      Min 50% Off
                    </p>
                  </span>
                </div>
                <div className="grow flex bg-white flex-col gap-1 p-2">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
                    alt=""
                    className="w-32 object-cover mx-auto"
                  />
                  <span>
                    <p>Men's Night Suits</p>
                    <p className="font-medium text-green-600 text-sm">
                      Min 50% Off
                    </p>
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="grow flex bg-white flex-col gap-1 p-2">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
                    alt=""
                    className="w-32 object-cover mx-auto"
                  />
                  <span>
                    <p>Men's Night Suits</p>
                    <p className="font-medium text-green-600 text-sm">
                      Min 50% Off
                    </p>
                  </span>
                </div>
                <div className="grow flex bg-white flex-col gap-1 p-2">
                  <img
                    src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
                    alt=""
                    className="w-32 object-cover mx-auto"
                  />
                  <span>
                    <p>Men's Night Suits</p>
                    <p className="font-medium text-green-600 text-sm">
                      Min 50% Off
                    </p>
                  </span>
                </div>
              </div>
            </div>
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
              <Product width={["w-40", "sm:w-56", "sm:h-80"]} />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
        {/* Recommended products */}
        <div className="w-full bg-gray-50  ">
          <div className="sm:w-10/12  sm:mx-auto  p-2 sm:p-6 flex flex-col">
            <Link to={"/all"} className="font-medium text-lg sm:text-2xl px-2">
              Special for you
            </Link>
            <div className="w-full  p-2 gap-3 flex justify-around flex-wrap">
              <ProductViewMore img="Special" />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
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
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
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
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
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
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
