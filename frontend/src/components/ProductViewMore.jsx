import React from "react";
import { Link } from "react-router-dom";

const ProductViewMore = ({ img }) => {
  return (
    <div
      className={`hidden sm:block p-4 w-56 h-80  bg-hero-pattern bg-contain bg-no-repeat relative`}
    >
      <div className="absolute  w-full bottom-0 flex items-center justify-center h-2/5">
        <Link to={"/all"}>
          <button className="px-2 py-1  text-white rounded-md bg-black/90 ">
            View all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductViewMore;
