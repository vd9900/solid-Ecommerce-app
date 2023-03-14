import React from "react";
import { BiLock } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMapPin } from "react-icons/hi2";
import { MdOutlinePlace } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Main from "./Main";

import Payment from "./Payment";

const Address = () => {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <Navbar />
      <div className="w-full h-full flex pt-14 ">
        <div className="w-full  lg:w-11/12 xl:w-10/12 h-auto  md:h-5/6 mx-auto p-4">
          {/* <Payment /> */}
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Address;
