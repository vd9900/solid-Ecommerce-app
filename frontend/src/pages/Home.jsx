import React from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product.jsx";
import ProductViewMore from "../components/ProductViewMore.jsx";

const Home = () => {
  return (
    <div className="max-w-screen ">
      <Navbar />
      <div className="w-full flex flex-col gap-10 ">
        <div className="w-full bg-gray-50 ">
          {/* Recommended products */}
          <div className="w-10/12 mx-auto p-6 flex flex-col">
            <p className="font-medium text-2xl">Special for you</p>
            <div className="p-2 flex justify-around flex-wrap">
              <ProductViewMore img="Special" />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-50 ">
          {/* Tech  products  */}
          <div className="w-10/12 mx-auto p-6 flex flex-col">
            <p className="font-medium text-2xl">Special for you</p>
            <div className="p-2 flex justify-around flex-wrap">
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
