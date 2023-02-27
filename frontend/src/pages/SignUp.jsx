import React from "react";
import { Link } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { BiLock } from "react-icons/bi";
import { HiOutlineChevronDoubleRight, HiOutlineMail } from "react-icons/hi";
import { BsChevronDoubleRight } from "react-icons/bs";
const SignUp = () => {
  return (
    <div className="w-screen h-screen bg-gray-50 flex justify-center items-center ">
      <div className="w-full md:w-5/12 rounded-md lg:w-4/12 xl:w-3/12 shadow-lg bg-white border border-gray-200  sm:h-5/6 h-full  flex flex-col justify-around">
        <div className="w-10/12    mx-auto flex flex-col gap-10">
          <p className="text-3xl text-gray-700 font-medium mx-auto">SignUp</p>
          <div>
            <p className="font-semibold text-gray-600">Full name</p>
            <div className="flex items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200">
              <span>
                <CgProfile className="text-gray-500" />
              </span>
              <input
                type="text"
                placeholder="enter your name"
                className="outline-none"
              />
            </div>
          </div>
          <div className="hidden flex flex-col gap-10">
            <div>
              <p className="font-semibold text-gray-600">Username</p>
              <div className="flex items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200">
                <span>
                  <CgProfile className="text-gray-500" />
                </span>
                <input
                  type="text"
                  placeholder="Create a username"
                  className="outline-none"
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-600">Email</p>
              <div className="flex items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200">
                <span>
                  <HiOutlineMail className="text-gray-500" />
                </span>
                <input
                  type="text"
                  id="email"
                  placeholder="Type your email"
                  className="outline-none"
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-600">Password</p>
              <div className="flex items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200">
                <span>
                  <BiLock className="text-gray-500" />
                </span>
                <input
                  type="password"
                  placeholder="Create a strong password"
                  className="outline-none w-full"
                />
              </div>
            </div>
          </div>
          <Link to={"/home "}>
            <button className="flex items-center justify-center gap-1 font-sans bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer rounded-md text-white hover:bg-black w-full py-2  font-bold border-black">
              Next
              <HiOutlineChevronDoubleRight />
            </button>
          </Link>
        </div>
        <div className="text-center">
          <p className="py-2 text-gray-600">Have you account yet?</p>
          <Link
            to={"/login"}
            className="font-semibold cursor-pointer underline"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
