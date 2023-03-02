import React from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";

const FullName = () => {
  return (
    <div className="">
      <div className="hidden flex flex-col gap-14">
        <div>
          <p className="font-semibold text-gray-600">Full name</p>
          <div className="flex  items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200">
            <span>
              <CgProfile className="text-gray-500" />
            </span>
            <input
              type="text"
              placeholder="enter your name"
              className="outline-none w-full"
            />
          </div>
        </div>
        <div>
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
                className="outline-none w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullName;
