import React, { useState } from "react";
// import { useHistory } from "react-router-dom"
import { json, Link, useNavigate } from "react-router-dom";
import { FormikContext, useFormik } from "formik";
import axios from "axios";

import { CgProfile } from "react-icons/cg";
import { BiLock } from "react-icons/bi";
import { HiOutlineChevronDoubleRight, HiOutlineMail } from "react-icons/hi";
import { BsChevronDoubleRight } from "react-icons/bs";
import FullName from "../components/login&signup/FullName";
import { Avatar, Input } from "@mui/material";
import * as yup from "yup";

const validationSchema = yup.object({
  username: yup
    .string()
    .min(3, "Please enter your name")
    .required("Username is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "password must be more than 8")
    .required("Enter a strong password"),
});

const SignUp = () => {
  // const histroy = useHistory();
  const navigate = useNavigate();
  const [goNext, setGoNext] = useState(false);
  const onSubmit = async (value) => {
    const url = "/api/vi/register";
    try {
      const { data } = await axios.post(url, { ...value });
      // console.log(data);
      if (data.sucess) {
        formik.resetForm();
        console.log(data);
        navigate("/home");
      } else {
        formik.setErrors({ email: "email already exist" });
      }
    } catch (error) {
      console.log(error);
      formik.setErrors({ email: "email already exist" });
      // console.log(formik.errors);
    }
  };

  const formik = useFormik({
    initialValues: { username: "", email: "", password: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  return (
    <div className="w-screen h-screen bg-gray-50 flex justify-center items-center ">
      <div className="w-full md:w-5/12 rounded-md lg:w-4/12 xl:w-3/12 shadow-lg bg-white border border-gray-200  sm:h-5/6 h-full  flex flex-col justify-around">
        <div className="w-10/12    mx-auto flex flex-col max-sm:gap-10">
          <p className="text-3xl text-gray-800 font-medium font-serif mx-auto">
            SignUp
          </p>
          <form
            encType="multipart/form-data"
            className="flex flex-col gap-10"
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            {/* fullname and email */}
            {/* <div className=" flex flex-col gap-14">
              <div className={`hidden`}>
                <p className="font-semibold text-gray-600">Full name</p>
                <div className="flex  items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200">
                  <span>
                    <CgProfile className="text-gray-500" />
                  </span>
                  <input
                    type="text"
                    placeholder="enter your name"
                    name="fullname"
                    required={true}
                    className="outline-none w-full"
                  />
                </div>
                <p className="text-red-600 text-sm">{inputError?.fullname}</p>
              </div>
            </div> */}
            {/* username and password and avatar */}
            <div className={`${true ? "flex" : "hidden"} flex-col gap-10`}>
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
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <p className="text-red-600 text-sm">
                  {formik.touched.username && formik.errors.username
                    ? formik.errors.username
                    : ""}
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
                      placeholder="Type your email"
                      className="outline-none w-full"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      name="email"
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <p className="text-red-600 text-sm">
                    {formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : ""}
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
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <p className="text-red-600 text-sm">
                  {formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : ""}
                </p>
              </div>
            </div>
            {goNext ? (
              <button
                // onClick={handleFormSubmit}
                type="button"
                className="flex items-center justify-center gap-1 font-sans bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer rounded-md text-white hover:bg-black w-full py-2  font-bold border-black"
              >
                SignUp
                <HiOutlineChevronDoubleRight />
              </button>
            ) : (
              <button
                // onClick={(e) => {
                //   e.preventDefault();
                //   true ? setGoNext(true) : null;
                // }}
                className="flex items-center justify-center gap-1 font-sans bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer rounded-md text-white hover:bg-black w-full py-2  font-bold border-black"
              >
                next
                <HiOutlineChevronDoubleRight />
              </button>
            )}
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
