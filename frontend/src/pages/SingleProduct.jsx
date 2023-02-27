import React from "react";

import Navbar from "../components/Navbar";
import Carousel from "../components/Slider";

import post1 from "../assets/imgs/post1.jpg";
import post2 from "../assets/imgs/post2.jpg";
import post3 from "../assets/imgs/post3.jpg";
import post4 from "../assets/imgs/post4.jpg";
import { AiFillStar } from "react-icons/ai";

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
  return (
    <div className="max-w-screen  min-h-screen">
      <Navbar />
      <div className="pt-14">
        <div className="bg-gray-50">
          <div className="pb-2 h-96 relative flex">
            <Carousel
              autoSlide={true}
              dotColor="bg-white"
              style={["md:w-4/6 w-full h-96 mx-auto max-md:my-auto"]}
            >
              {posts.map(({ id, img }) => {
                return (
                  <img src={img} alt="" className="object-cover" key={id} />
                );
              })}
            </Carousel>
          </div>
          <div className="px-3 py-2">
            <p className="font-semibold">
              Fire-Bolt Ninija Pro Max,Heart Rate & Ultra hd display
            </p>
            <div className="py-1 flex items-center">
              <AiFillStar className="text-green-600" fontSize={20} />
              <AiFillStar className="text-green-600" fontSize={20} />
              <AiFillStar className="text-green-600" fontSize={20} />
              <AiFillStar className="text-green-600" fontSize={20} />
              <AiFillStar className="text-green-600" fontSize={20} />
              <span className="pl-1 text-gray-600 text-sm font-medium">1,234</span>
            </div>
            <div className="text-xl py-2 flex items-center gap-3">
                <p className="font-serif text-red-600">18% off</p>
                <span className="text-gray-500 text-lg line-through">₹899</span>
                <span className="font-semibold">₹499</span>
            </div>
          </div>
        </div>
        {/* Product details */}
      </div>
    </div>
  );
};

export default SingleProduct;
