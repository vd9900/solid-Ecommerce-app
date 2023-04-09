import React, { useState } from "react";
import { Link } from "react-router-dom";
import post1 from "../assets/imgs/post1.jpg";
import post2 from "../assets/imgs/post2.webp";
import post3 from "../assets/imgs/post3.jpg";
import post4 from "../assets/imgs/post4.webp";
import Carousel from "../components/Slider";

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

const Starter = () => {
  return (
    <div className="max-w-screen overflow-hidden  h-screen flex md:items-center justify-center bg-gray-50 ">
      <div className="overflow-hidden  md:w-11/12 lg:w-9/12   md:h-4/6 md:bg-blue-50 shadow-lg    flex flex-col md:flex-row ">
        <div className="overflow-hidden  md:w-9/12 md:p-2   relative h-5/6  max-md:bg-blue-50 my-auto  flex md:gap-2">
          <div className=" overflow-hidden w-5/6 max-md:h-5/6  max-md:my-auto  flex flex-col mx-auto">
            <Carousel
              autoSlide={true}
              style={["overflow-hidden md:4/6 w-full mx-auto max-md:my-auto"]}
            >
              {posts.map(({ id, img }) => {
                return (
                  <img src={img} alt="" className="object-cover" key={id} />
                );
              })}
            </Carousel>
          </div>

          {/* <p className="text-2xl md:text-3xl  font-mono font-extralight  pt-5 max-md:pl-5">
            People likes
          </p>
          <div className="md:p-6 p-2 sm:px-10  relative flex items-center justify-center w-full h-full">
            <span className="w-7 cursor-pointer text-center  h-7 hover:scale-95 duration-300">
              <TfiArrowCircleLeft fontSize={25} />
            </span>
            <div className="w-full flex flex-col items-center">
              <div className="w-64 bg-stone-50 h-80 flex flex-col gap-4 p-1">
              <span>
                  <p className="pl-10 font-semibold">Redmi note 8</p>
                  ⭐⭐⭐⭐⭐
                  <span>(234)</span>
                </span>
                <span className="border-2 border-black hover:bg-black hover:text-white hover:border-blue-100 duration-1000 text-center cursor-pointer font-medium">
                  Add cart
                  </span>
                  </div>
                  </div>
                  <span className="w-7 cursor-pointer h-7 rounded-full hover:scale-95 duration-300">
                  <TfiArrowCircleRight fontSize={25} className="" />
            </span>
            <span className="absolute bottom-3 md:bottom-0 flex items-center justify-center gap-2 text-xl">
              <RxDotFilled />
              <RxDot />
              <RxDot />
              <RxDot />
              </span>
            </div> */}
        </div>
        <div className=" z-20  md:w-6/12 max-md:h-2/6 flex flex-col items-center justify-center p-4  gap-5 md:gap-8 bg-white">
          <p className="text-3xl font-semibold">A New Way to Buy</p>
          <p className="text-sm text-gray-500 text-center">
            start your E-commerce shopping with our best user experience,
            Amazing things will happen when you click get started.
          </p>
          <Link
            to={"/login"}
            className="border-2 bg-black text-white  hover:border-black hover:bg-white hover:text-black  
          duration-1000 rounded-md py-2 font-semibold px-4 text-sm"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Starter;
