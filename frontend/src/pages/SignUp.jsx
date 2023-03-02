import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { CgProfile } from "react-icons/cg";
import { BiLock } from "react-icons/bi";
import { HiOutlineChevronDoubleRight, HiOutlineMail } from "react-icons/hi";
import { BsChevronDoubleRight } from "react-icons/bs";
import FullName from "../components/login&signup/FullName";
import AddInfo from "../components/login&signup/AddInfo";
import Addavatar from "../components/login&signup/Addavatar";
import { useFormValid } from "../custom/hooks/useValidtor";
import { Avatar } from "@mui/material";

const SignUp = () => {
  const navigate = useNavigate();
  const [onSubmit, onChange, formError, serverError, initialValue] =
    useFormValid(onSucess, "fullname", "username", "email", "password");

  async function onSucess(err) {
    try {
      const url = "http://localhost:5000/api/vi/register";
      const { data } = await axios.post(url, initialValue);
      console.log(data.sucess);
      !data.sucess && err({ email: "alredy exist" });
      data.sucess && navigate("/home");
    } catch (err) {
      console.log(err);
    }
    err({ email: "already exist" });
    // err({ username: "user not found" });
  }

  return (
    <div className="w-screen h-screen bg-gray-50 flex justify-center items-center ">
      <div className="w-full md:w-5/12 rounded-md lg:w-4/12 xl:w-3/12 shadow-lg bg-white border border-gray-200  sm:h-auto py-2 h-full  flex flex-col justify-around">
        <div className="w-10/12    mx-auto flex flex-col gap-10">
          <p className="text-3xl text-gray-800 font-medium font-serif mx-auto">
            SignUp
          </p>
          <form
            action=""
            encType="multipart/form-data"
            className="flex flex-col gap-10"
            autoComplete="off"
          >
            {/* fullname and email */}
            <div className=" flex flex-col gap-14">
              <div>
                <p className="font-semibold text-gray-600">Full name</p>
                <div className="flex  items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200">
                  <span>
                    <CgProfile className="text-gray-500" />
                  </span>
                  <input
                    type="text"
                    placeholder="enter your name"
                    name="fullname"
                    onChange={onChange}
                    className="outline-none w-full"
                  />
                </div>
                <p className="text-red-600 text-xs">
                  {serverError?.fullname || formError.fullname}
                </p>
              </div>
            </div>{" "}
            {/* username and password and avatar */}
            <div className=" flex flex-col gap-10">
              <div>
                <p className="font-semibold text-gray-600">Username</p>
                <div className="flex items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200">
                  <span>
                    <CgProfile className="text-gray-500" />
                  </span>
                  <input
                    type="text"
                    placeholder="Create a username"
                    name="username"
                    className="outline-none w-full"
                    onChange={onChange}
                  />
                </div>
                <p className="text-red-600 text-xs">
                  {serverError?.username || formError.username}
                </p>
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
                      onChange={onChange}
                      name="email"
                    />
                  </div>
                  <p className="text-red-600 text-xs">
                    {serverError?.email || formError.email}
                  </p>
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
                    placeholder="Create a strong password"
                    name="password"
                    className="outline-none w-full"
                    onChange={onChange}
                  />
                </div>
                <p className="text-red-600 text-xs">
                  {serverError?.password || formError.password}
                </p>
              </div>
            </div>
            <button
              onClick={onSubmit}
              className="flex items-center justify-center gap-1 font-sans bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer rounded-md text-white hover:bg-black w-full py-2  font-bold border-black"
            >
              SignUp
              <HiOutlineChevronDoubleRight />
            </button>
          </form>
        </div>
        <div className="text-center">
          <p className="py-2 text-gray-600">Have you account yet?</p>
          <Link
            to={"/login"}
            className="font-semibold cursor-pointer underline"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
