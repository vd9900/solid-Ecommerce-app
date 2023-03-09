// small device categorey component

import React from "react";

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addClickedCategoryValueOfProduct } from "../services/products/productSlice";

export const SmCat = () => {
  const dispatch = useDispatch();
  const naviagate = useNavigate();
  const handleClickCategory = (e) => {
    const value = e.target.name || e.target.parentElement.name;
    dispatch(addClickedCategoryValueOfProduct(value));
    naviagate("/products");
  };
  return (
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
        <Link
          name="mobile"
          to={"products/?category=mobile"}
          className="grow flex flex-col items-center justify-center"
        >
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
            alt=""
            className="object-cover w-24"
          />
          <p className="text-sm font-medium">Mobiles</p>
        </Link>
        <Link
          name="fashion"
          to={"products/?category=fashion"}
          className="grow flex flex-col items-center justify-center"
        >
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
            alt=""
            className="object-cover w-24"
          />
          <p className="text-sm font-medium">Fashion</p>
        </Link>
        <Link
          name="grocery"
          to={"products/?category=grocery"}
          className="grow flex flex-col items-center justify-center"
        >
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
            alt=""
            className="object-cover w-24"
          />
          <p className="text-sm font-medium">Grocery</p>
        </Link>
      </div>
      <div className="flex ">
        <Link
          name="electronics"
          to={"products/?category=electronics"}
          className="grow flex flex-col items-center justify-center"
        >
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
            alt=""
            className="object-cover w-24"
          />
          <p className="text-sm font-medium">Electronics</p>
        </Link>
        <Link
          name="home"
          to={"products/?category=home"}
          className="grow flex flex-col items-center justify-center"
        >
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
            alt=""
            className="object-cover w-24"
          />
          <p className="text-sm font-medium">Home</p>
        </Link>
        <Link
          name=""
          to={"products/?category=toys_more"}
          className="grow flex flex-col items-center justify-center"
        >
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
            alt=""
            className="object-cover w-24"
          />
          <p className="text-sm font-medium">Toys & More</p>
        </Link>
      </div>
    </div>
  );
};

export const DiscountComponent = () => {
  return (
    <>
      <div className="flex items-center justify-between p-1">
        <p className="text-white pb-2 text-lg">Discounts for you</p>
        <IoIosArrowDroprightCircle className="text-gray-700" fontSize={25} />
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
              <p className="font-medium text-green-600 text-sm">Min 50% Off</p>
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
              <p className="font-medium text-green-600 text-sm">Min 50% Off</p>
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
              <p className="font-medium text-green-600 text-sm">Min 50% Off</p>
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
              <p className="font-medium text-green-600 text-sm">Min 50% Off</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
