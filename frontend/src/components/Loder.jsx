import { CircularProgress } from "@mui/material";
import React from "react";
import loader from "../assets/imgs/loder.gif";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white ">
      <img src={loader} alt="" className="w-10"/>
      {/* <CircularProgress className="text-black" /> */}
    </div>
  );
};

export default Loader;
