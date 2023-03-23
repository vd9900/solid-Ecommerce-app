import React from "react";
//components
import Loader from "../../login&signup/LoginCom";

import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

import { BiLock } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import { useSendEmailMutation } from "../../../services/updatePassword/forgotPasswordApi";
import { useDispatch } from "react-redux";
import { UserEmail } from "../../../services/products/productSlice";

// input schema validation with YUP

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

const ResetEmail = () => {
  const SignIn = useSignIn();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    dispatch(UserEmail(values.email));
    sendEmail(values.email).catch((err) => console.log(err));
  };
  const formik = useFormik({
    initialValues: { email: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  const [sendEmail, { isSuccess, isError, error, data: emailData }] =
    useSendEmailMutation();
  console.log(emailData);

  //   !error?.data?.sucess && formik.setErrors({ email: "user not exist" });

  if (isSuccess) {
    navigate("/forgot_password/otp");
  }
  return (
    <div className="w-screen h-screen bg-gray-50 flex justify-center items-center ">
      {false ? (
        <Loader />
      ) : (
        <div className=" w-full md:w-5/12 rounded-md lg:w-4/12 xl:w-3/12 shadow-lg bg-white border border-gray-200 h-full sm:h-5/6  flex flex-col justify-around">
          <div className="w-10/12  mx-auto flex flex-col gap-14">
            <div className="flex flex-col  gap-1">
              <div className=" mx-auto">
                <p className="text-2xl font-medium text-gray-800 font-serif mx-auto">
                  Forgot password
                </p>
              </div>
            </div>
            <form
              action=""
              className="flex flex-col gap-14"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <p className="font-semibold text-gray-600">Email</p>
                <div className="flex items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200">
                  <span>
                    <CgProfile className="text-gray-500" />
                  </span>
                  <input
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your email"
                    className="outline-none w-full bg-transparent"
                  />
                </div>
                <p className="text-red-600 text-sm">
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ""}
                </p>
              </div>
              <button
                type="submit"
                className=" 
                font-serif  bg-black text-white
                 cursor-pointer rounded-full font-medium
                  w-11/12 mx-auto py-2  border-black
                  transition duration-200 transform active:scale-95 ease-in-out"
              >
                Next
              </button>
            </form>
            <div className="text-center">
              <p className="py-2 text-gray-600">Have not account yet?</p>
              <Link
                to={"/SignUp"}
                className="font-semibold cursor-pointer underline"
              >
                SIGNUP
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetEmail;
