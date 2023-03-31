import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "../styles/custom/animation.css";

import logo from "../assets/imgs/logo.png";

import { BiHomeSmile, BiMenu } from "react-icons/bi";
import { MdContactSupport, MdLogout } from "react-icons/md";
import { BsBell, BsCart3, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CgNotes, CgProfile } from "react-icons/cg";
import {
  AiOutlineCloseCircle,
  AiOutlineHome,
  AiOutlineSearch,
} from "react-icons/ai";

import { useSignOut } from "react-auth-kit";
import { addSearchValue, clearFilter } from "../services/products/productSlice";
import MyModal from "./modals/MyModal";

const Navbar = ({ onSearch }) => {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  // const dispatch = useContext(SearchContext);
  const { UserAvatar } = useSelector((state) => state.productsStore);
  // console.log(UserAvatar);

  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchQuerySubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilter());
    dispatch(addSearchValue(searchQuery));
    navigate(`/products`);
  };
  const handleLogout = () => {};
  return (
    <div className="fixed z-20 w-screen h-14 flex  bg-white border-b border-black/20 shadow-md sm:p-2 py-0">
      <MyModal onClose={() => setToggle(!toggle)} isOpen={toggle}>
        <div className="slide-left z-50 top-0 left-52 py-3 border-l bg-gray-50 border-black/20 absolute w-9/12 h-screen">
          <div className="border-b flex items-center justify-between p-2 ">
            <AiOutlineCloseCircle
              onClick={() => setToggle(!toggle)}
              fontSize={34}
              className="cursor-pointer font-semibold"
            />
            <div className="px-4 w-36">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="py-4 flex flex-col  gap-5 pl-6">
            <Link to={"/"}>
              <span className="font-medium text-lg flex items-center text-justify p-2 gap-1">
                <AiOutlineHome fontSize={24} /> Home page
              </span>
            </Link>
            <Link to={"/cart"}>
              <span className="font-medium flex  rounded-full  items-center   p-2 gap-1">
                <BsCart3 fontSize={24} /> Go to cart
              </span>
            </Link>
            <Link to={"/myorders"}>
              <span className="font-medium flex items-center p-2 gap-1">
                <CgNotes fontSize={24} />
                Orders
              </span>
            </Link>
            <Link to={"/me"}>
              <span className="font-medium flex items-center p-2 gap-1">
                <CgProfile fontSize={24} /> My profile
              </span>
            </Link>
            <Link to={"/contact"}>
              <span className="font-medium flex items-center p-2 gap-1">
                <MdContactSupport fontSize={24} /> Contact Us
              </span>
            </Link>
            <Link onClick={() => signOut()}>
              <span className="font-medium flex items-center p-2 gap-1">
                <MdLogout fontSize={24} /> Logout
              </span>
            </Link>
          </div>
        </div>
      </MyModal>
      <div className="w-full  lg:w-10/12 xl:w-8/12 md:mx-auto flex   px-2 justify-center md:px-6 max-sm:gap-3 gap-8 ">
        <div className="hidden sm:flex items-center  w-64">
          <img src={logo} alt="" />
        </div>
        <form
          action=""
          className="flex items-center   max-md:justify-between w-full gap-2"
          onSubmit={handleSearchQuerySubmit}
        >
          <div className=" w-full flex items-center px-3 max-md:shadow-md border-black/20 max-md:border max-md:bg-white md:pl-4 rounded-full">
            <AiOutlineSearch
              fontSize={24}
              className="md:hidden text-gray-400"
            />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none bg-transparent w-full  md:rounded-full md:border-2   max-sm:py-2 py-2  px-4"
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
            <div className="  sm:hidden">
              <img
                src={UserAvatar.url || logo}
                onClick={() => setToggle(!toggle)}
                className="rounded-full object-cover  w-10 h-8 overflow-hidden"
              />
            </div>
          </div>
          <button
            type="submit"
            className="hidden 
            lg:flex
            bg-black/90
            text-white
items-center gap-1 px-5 py-2  border rounded-full
              transition duration-200 transform active:scale-95 ease-in-out"
          >
            <BsSearch fontSize={18} className="" />
            <p className="hidden md:block">Search</p>
          </button>
        </form>
        <div className="hidden sm:flex items-center px-2 gap-5 ">
          <span>
            <Link to={"/"}>
              <AiOutlineHome fontSize={25} />
            </Link>
          </span>
          <span>
            <Link to={"/cart"}>
              <BsCart3 fontSize={22} />
            </Link>
          </span>
          <span>
            <Link to={"/myorders"}>
              <CgNotes fontSize={22} />
            </Link>
          </span>
          <span>
            <Link to={"/contact"}>
              <MdContactSupport fontSize={22} />
            </Link>
          </span>
          <Link to={"/me"} className="text-sm ">
            <span className="hidden md:flex w-10 text-center  items-center justify-center ">
              <img
                src={UserAvatar.url || logo}
                onClick={() => setToggle(!toggle)}
                className="rounded-full object-cover  w-10 h-10 overflow-hidden"
              />
            </span>
            {/* <CgProfile className="hidden max-md:block" fontSize={22} /> */}
          </Link>
          <button onClick={() => signOut()}>
            <MdLogout fontSize={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
