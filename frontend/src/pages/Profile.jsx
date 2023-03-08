import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import Loader from "../components/Loder";

import img from "../assets/imgs/post1.jpg";
import { useUserInfoQuery } from "../services/userApi";
import { useAuthUser } from "react-auth-kit";

const Profile = () => {
  const auth = useAuthUser();
  const { isLoading, data, isSuccess } = useUserInfoQuery(auth().email);

  const userData = data?.message;
  //edit username& email logic
  const [toggleEdit, setToggleEdit] = useState(false);
  const [isEditDisable, setIsEditDisable] = useState(true);
  const [usernameEditValue, setUsernameEditValue] = useState(
    userData?.username
  );
  const [emailEditValue, setEmailEditValue] = useState(userData?.email);
  const handleDetailsEdit = () => {
    if (emailEditValue === userData?.email) return;
    if (emailEditValue === userData?.username) return;

    console.log(emailEditValue);
    console.log(usernameEditValue);
  };
  const addAgainEditValue = () => {
    setToggleEdit(false);
    setUsernameEditValue(userData?.username);
    setEmailEditValue(userData?.email);
    setIsEditDisable(true);
  };
  const handleInputOnChange = (e) => {
    console.log(e.target.name);

    if (
      (usernameEditValue === userData?.username &&
        emailEditValue === userData?.email) ||
      e.target.value === ""
    ) {
      setIsEditDisable(true);
    } else {
      setIsEditDisable(false);
    }
    if (e.target.name === "email") {
      setEmailEditValue(e.target.email);
    }
    if (e.target.name === "username") {
      setUsernameEditValue(e.target.username);
    }
  };

  return (
    <div className=" max-w-screen h-screen bg-gray-50">
      {/* <NewCom>
        <p>home</p>
        <p>logo</p>
      </NewCom> */}
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="relative pt-16 sm:w-11/12 md:w-10/12 lg:w-9/12 sm:h-5/6 mx-auto flex justify-center sm:items-center">
          <div className=" sm:relative w-full md:10/12 lg:w-11/12 xl:w-10/12   sm:h-5/6 flex max-sm:flex-col shadow-md bg-white/80 py-4 rounded-md">
            {/* edit toggel component */}
            <div
              className={`${
                toggleEdit ? "flex" : "hidden"
              } shadow-md flex flex-col duration-300  justify-between bg-gray-50 rounded-md py-2 gap-5  w-9/12  h-auto   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
            >
              <div>
                <div className="border-b py-2">
                  <p className="px-3 font-serif  text-xl">Edit profile</p>
                </div>
                <div className="px-4 flex flex-col gap-3">
                  <div className="p-2">
                    <p className="text-lg py-1">Username</p>
                    <input
                      type="text"
                      className="border bg-gray-100 outline-none py-1 w-full sm:w-6/12 px-3 rounded-sm "
                      name="username"
                      value={usernameEditValue}
                      onChange={handleInputOnChange}
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-lg py-1">Email</p>
                    <input
                      type="text"
                      className="border bg-gray-100 outline-none py-1 w-full sm:w-6/12 px-3 rounded-sm "
                      name="email"
                      value={emailEditValue}
                      onChange={handleInputOnChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 px-3">
                <button
                  onClick={handleDetailsEdit}
                  className="disabled:opacity-75 bg-black text-white  px-8 rounded-md py-1 "
                  disabled={isEditDisable}
                >
                  Edit
                </button>
                <button
                  onClick={addAgainEditValue}
                  className="bg-black text-white  px-8 rounded-md py-1 "
                >
                  cancel
                </button>
              </div>
            </div>

            <div className="sm:w-4/12 px-6 flex flex-col  items-center justify-evenly">
              <div className="flex flex-col gap-5 w-full">
                <img
                  src={img}
                  className="mx-auto w-52 h-52 sm:w-40 sm:h-40 md:w-48 md:h-48 xl:h-64 xl:w-64 rounded-full object-cover"
                  alt=""
                />
                <p className="text-3xl py-2 mr-auto">
                  {" "}
                  {data.message?.username}
                </p>
              </div>
              <button
                onClick={() => setToggleEdit(true)}
                className="py-1 max-sm:w-5/12 max-sm:ml-auto hover:text-white hover:bg-black duration-700 rounded-md font-medium w-full border border-black "
              >
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
                  <span className="">
                    <p className="text-sm  text-gray-700">username</p>
                    <p className="p-0 m-0 leading-4 font-medium  text-gray-800">
                      {/* name */}
                      {data.message?.username}
                    </p>
                  </span>
                  <span className="">
                    <p className="text-sm  text-gray-700">email</p>
                    <p className="p-0 m-0 leading-4 font-medium  text-gray-800">
                      {/* email */}
                      {data.message?.email}
                    </p>
                  </span>
                </div>
                <div className="border rounded-md p-4 flex flex-col gap-2 ">
                  <p className="text-gray-500 border-b-2 font-medium w-fit">
                    Histroy
                  </p>
                  <span className="">
                    <p className="text-sm p-0 text-gray-700">Last login</p>
                    <p className="p-0 m-0 leading-4 font-medium font-mono text-gray-800">
                      {Date(data.message?.updatedAt)}
                    </p>
                  </span>
                  <span className="">
                    <p className="text-sm p-0 text-gray-700">joined</p>
                    <p className="p-0 m-0 leading-4 font-medium font-mono text-gray-800">
                      {Date(data.message?.createdAt)}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
