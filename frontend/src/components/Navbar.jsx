import React, { useContext, useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { SearchContext } from "../SearchContext/searchContext";
import { useSelector, useDispatch } from "react-redux";

import "../styles/custom/animation.css";

import logo from "../assets/imgs/logo.png";

import { BiHomeSmile, BiMenu } from "react-icons/bi";
import { MdContactSupport, MdLogout } from "react-icons/md";
import { BsBell, BsCart3, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";
import Button from "@mui/material/Button";

import { useSignOut } from "react-auth-kit";

const Navbar = ({ onSearch }) => {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const dispatch = useContext(SearchContext);

  const dispatchLogout = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchQuerySubmit = (e) => {
    e.preventDefault();
    navigate("/products");
  };
  const handleLogout = () => {};

  return (
    <div className="fixed z-20 w-screen h-14 flex bg-gray-50 shadow-lg sm:p-2 py-1">
      {toggle && (
        <div className="slide-right z-50 top-0 -left-28 py-3 pl-3 text-white bg-black/95 absolute w-8/12 h-screen">
          <div className="border-b flex items-center justify-between p-2 ">
            <div className="w-36">
              <img src={logo} alt="" />
            </div>
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              fontSize={34}
              className="cursor-pointer font-semibold"
            />
          </div>
          <div className="py-4 flex flex-col gap-5 pl-4">
            <Link to={"/"}>
              <span className="font-bold text-white/80 text-lg flex items-center text-justify p-2 gap-1">
                <BiHomeSmile fontSize={24} /> Home page
              </span>
            </Link>
            <Link to={"/cart"}>
              <span className=" flex  items-center p-2 gap-1">
                <BsCart3 fontSize={24} /> Go to cart
              </span>
            </Link>
            <Link>
              <span className=" flex items-center p-2 gap-1">
                <MdLogout /> Logout
              </span>
            </Link>
            <Link to={"/me"}>
              <span className=" flex items-center p-2 gap-1">
                <CgProfile fontSize={24} /> My profile
              </span>
            </Link>
            <Link>
              <span className=" flex items-center p-2 gap-1">
                <MdContactSupport fontSize={24} /> Contact Us
              </span>
            </Link>
            <Link onClick={() => signOut()}>
              <span className=" flex items-center p-2 gap-1">
                <MdLogout fontSize={24} /> Logout
              </span>
            </Link>
          </div>
        </div>
      )}
      <div className="w-full md:w-11/12 lg:w-9/12 xl:w-8/12 md:mx-auto flex   px-5 justify-center md:px-6 max-sm:gap-3 gap-8 ">
        <div className=" flex items-center justify-center sm:hidden">
          <BiMenu
            fontSize={35}
            onClick={() => setToggle(!toggle)}
            className=""
          />
        </div>
        <div className="hidden sm:flex items-center  w-64">
          <img src={logo} alt="" />
        </div>
        <form
          action=""
          className="flex items-center justify-between w-full gap-2"
          onSubmit={handleSearchQuerySubmit}
        >
          <input
            type="text"
            placeholder="search..."
            className="outline-none bg-transparent w-full rounded-md border-2  bg-white py-1  px-3"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <button
            type="submit"
            className="hidden md:flex items-center px-4 py-1 gap-1 rounded-md  border-2 border-black"
          >
            <p className="hidden md:block">Search</p>
            <BsSearch fontSize={22} className="sm:hidden" />
          </button>
        </form>
        <div className="hidden sm:flex items-center px-2 gap-5 ">
          <span>
            <Link to={"/"}>
              <BiHomeSmile fontSize={25} />
            </Link>
          </span>
          <span>
            <Link to={"/cart"}>
              <BsCart3 fontSize={22} />
            </Link>
          </span>
          <Link to={"/me"} className="text-sm ">
            <span className="hidden md:flex w-28 text-center gap-2 p-1 items-center justify-center ">
              <p className=" font-medium">Hey, Vinith</p>
              <CgProfile className="" fontSize={22} />
            </span>
            <CgProfile className="hidden max-md:block" fontSize={22} />
          </Link>
          <Link onClick={() => signOut()}>
            <MdLogout fontSize={22} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
