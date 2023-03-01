import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/custom/animation.css";

import logo from "../assets/imgs/logo.png";

import { BiHomeSmile, BiMenu } from "react-icons/bi";
import { MdContactSupport, MdLogout } from "react-icons/md";
import { BsBell, BsCart3, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchQuerySubmit = (e) => {
    e.preventDefault();
    navigate(`/products/?s=${searchQuery?searchQuery:"all"}`);
  };

  return (
    <div className="fixed z-20 w-screen h-14 flex bg-gray-800 sm:p-2 py-2">
      {toggle && (
        <div className="slide-right z-50 top-0 -left-28 py-3 pl-3 text-white bg-gray-700 absolute w-8/12 h-screen">
          <div className="border-b flex items-center justify-between p-2 ">
            <div className="w-36">
              <img src={logo} alt="" />
            </div>
            <AiFillCloseCircle
              onClick={() => setToggle(!toggle)}
              fontSize={34}
              className="cursor-pointer"
            />
          </div>
          <div className="py-4 flex flex-col gap-5 pl-4">
            <Link to={"/home"}>
              <span className="font-bold text-white/80 text-lg flex items-center text-justify p-2 gap-1">
                <BiHomeSmile fontSize={24} /> Home page
              </span>
            </Link>
            <Link to={"/myCart"}>
              <span className=" flex  items-center p-2 gap-1">
                <BsCart3 fontSize={24} /> Go to cart
              </span>
            </Link>
            <Link>
              <span className=" flex items-center p-2 gap-1">
                <MdLogout /> Logout
              </span>
            </Link>
            <Link to={"/profile"}>
              <span className=" flex items-center p-2 gap-1">
                <CgProfile fontSize={24} /> My profile
              </span>
            </Link>
            <Link>
              <span className=" flex items-center p-2 gap-1">
                <MdContactSupport fontSize={24} /> Contact Us
              </span>
            </Link>
            <Link to={"/logout"}>
              <span className=" flex items-center p-2 gap-1">
                <MdLogout fontSize={24} /> Logout
              </span>
            </Link>
          </div>
        </div>
      )}
      <div className="w-full md:w-11/12 lg:w-9/12 xl:w-8/12 md:mx-auto flex   px-5 justify-center md:px-6 gap-6 ">
        <div className=" flex items-center justify-center sm:hidden">
          <BiMenu
            fontSize={35}
            onClick={() => setToggle(!toggle)}
            className="text-white"
          />
        </div>
        <div className="hidden sm:flex items-center  w-64">
          <img src={logo} alt="" />
        </div>
        <div className="w-full  flex items-center justify-between   sm:px-3 py-2  shadow-xl ">
          <form
            action=""
            className="flex items-center justify-between w-full gap-3"
            onSubmit={handleSearchQuerySubmit}
          >
            <input
              type="text"
              placeholder="search..."
              className="outline-none bg-transparent w-full rounded-md bg-white py-2  px-3"
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
            <button
              type="submit"
              className="hidden md:flex items-center px-3 py-2 gap-1 rounded-md text-white border-2 border-orange-600"
            >
              <p className="hidden md:block">Search</p>
              <BsSearch fontSize={22} className="sm:hidden" />
            </button>
          </form>
        </div>
        <div className="hidden sm:flex items-center px-2 gap-5 text-white">
          <span>
            <Link to={"/home"}>
              <BiHomeSmile fontSize={25} />
            </Link>
          </span>
          <span>
            <Link to={"/myCart"}>
              <BsCart3 fontSize={22} />
            </Link>
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
