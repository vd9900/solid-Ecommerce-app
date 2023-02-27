import React from "react";
import Navbar from "../components/Navbar";
import img from "../assets/imgs/post1.jpg";

const NewCom = ({ children }) => {
  console.log(children);
  return <h1>{children}</h1>;
};

const Profile = () => {
  return (
    <div className="w-screen h-screen bg-gray-50">
      {/* <NewCom>
        <p>home</p>
        <p>logo</p>
      </NewCom> */}
      <Navbar />
      <div className="pt-16 sm:w-11/12 md:w-10/12 lg:w-9/12 sm:h-5/6 mx-auto flex justify-center sm:items-center">
        <div className="w-full md:10/12 lg:w-11/12 xl:w-10/12   sm:h-5/6 flex max-sm:flex-col shadow-md bg-white/80 py-4 rounded-md">
          <div className="sm:w-4/12 px-4 flex flex-col  items-center justify-evenly">
            <div className="flex flex-col gap-5">
              <img
                src={img}
                className="w-52 h-52 sm:w-40 sm:h-40 md:w-48 md:h-48 xl:h-64 xl:w-64 rounded-full object-cover"
                alt=""
              />
              <p className="text-3xl py-2">Mr.IPL</p>
            </div>
            <button className="py-1 max-sm:w-5/12 max-sm:ml-auto hover:text-white hover:bg-black duration-700 rounded-md font-medium w-full border border-black ">
              Edit profile
            </button>
          </div>
          <div className="sm:w-8/12 md:pl-5 flex flex-col   ">
            <div className="flex gap-4 py-2   px-10 border-b-2 border-r-gray-500">
              <span className="hidden sm:block cursor-pointer px-2 p font-medium border-b-4 border-gray-600 text-black/70 text-sm ">
                About
              </span>
              {/* <span className="cursor-pointer font-medium px-2 pb-1 text-black/70 text-sm rounded-md">
                Order Details
              </span> */}
            </div>
            <div className="flex sm:h-5/6 p-4  flex-col justify-around gap-2 ">
              <div className="border rounded-md p-4 flex flex-col gap-2 ">
                <p className="text-gray-500 border-b-2 font-medium w-fit">
                  Personal Details
                </p>
                <span
                className="">
                  <p className="text-sm  text-gray-700">username</p>
                  <p className="p-0 m-0 leading-4 font-medium  text-gray-800">mr.Ipl9900</p>
                </span>
                <span
                className="">
                  <p className="text-sm  text-gray-700">email</p>
                  <p className="p-0 m-0 leading-4 font-medium  text-gray-800">vini@gmail.com</p>
                </span>
                
              </div>
              <div className="border rounded-md p-4 flex flex-col gap-2 ">
                <p className="text-gray-500 border-b-2 font-medium w-fit">
                  Histroy
                </p>
                <span
                className="">
                  <p className="text-sm p-0 text-gray-700">Last login</p>
                  <p className="p-0 m-0 leading-4 font-medium font-mono text-gray-800">5 hours ago</p>
                </span>
                <span
                className="">
                  <p className="text-sm p-0 text-gray-700">joined</p>
                  <p className="p-0 m-0 leading-4 font-medium font-mono text-gray-800">01-Dec-2022</p>
                </span>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
