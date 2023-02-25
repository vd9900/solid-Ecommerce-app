import React from "react";
import { BiHomeSmile, BiMenu } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { BsBell, BsCart3, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="flex bg-gray-100 sm:p-2 py-2">
      <div className="w-full md:w-11/12 lg:w-9/12 xl:w-8/12 md:mx-auto flex   px-4 justify-center md:px-6 gap-3 ">
        <div className=" flex items-center justify-center sm:hidden">
          <BiMenu fontSize={35} />
        </div>
        <div className="w-full md:grow flex items-center justify-between bg-white px-3 py-2  rounded-md ">
          <input
            type="text"
            placeholder="search..."
            className="outline-none bg-transparent w-full"
          />
          <span>
            <BsSearch fontSize={22} className="text-gray-600" />
          </span>
        </div>
        <div className="hidden sm:flex items-center px-2 gap-5 text-gray-700">
          <span>
            <Link to={"/home"}>
            <BiHomeSmile fontSize={25} />
            </Link>
          </span>
          <span>
            <BsCart3 fontSize={22} />
          </span>
          <Link to={"/profile"} className="text-sm ">
            <span className="hidden md:flex w-28 text-center gap-2 p-1 items-center justify-center ">
              <p className=" font-medium">Hey, Vinith</p>
              <CgProfile className="" fontSize={22} />
            </span>
            <CgProfile className="hidden max-md:block" fontSize={22} />
          </Link>
          <Link to={"/logout"}>
            <MdLogout fontSize={22} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
