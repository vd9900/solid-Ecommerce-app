import React from "react";
import { Link } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { BiLock } from "react-icons/bi";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-gray-50 flex justify-center items-center ">
      <div className="w-full md:w-5/12 rounded-md lg:w-4/12 xl:w-3/12 shadow-lg bg-white border border-gray-200 h-full sm:h-5/6  flex flex-col justify-around">
        <div className="w-10/12    mx-auto flex flex-col gap-10">
          <p className="text-3xl font-medium text-gray-800 font-serif mx-auto">SignIn</p>
          <div>
            <p className="font-semibold text-gray-600">Email</p>
            <div className="flex items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200">
              <span>
                <CgProfile className="text-gray-500" />
              </span>
              <input
                type="text"
                id="email"
                placeholder="Type your email"
                className="outline-none w-full bg-transparent"
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
                placeholder="Type your password"
                className="outline-none w-full"
              />
            </div>
            <div className="py-1 text-gray-600 text-right text-sm">
              <p>Forgot password?</p>
            </div>
          </div>
          <button className="font-sans bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer rounded-md text-white hover:bg-black w-full py-2  font-bold border-black">Login</button>
        </div>
        <div className="text-center">
          <p className="py-2 text-gray-600">Have not account yet?</p>
          <Link to={"/SignUp"} className="font-semibold cursor-pointer underline">SIGNUP</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
