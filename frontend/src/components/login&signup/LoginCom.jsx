import React from "react";

import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

import logo from "../../assets/imgs/logo.png";
import { BiLock } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";

// input schema validation with YUP

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "password must be more than 8")
    .required("Enter a your password"),
});

const LoginCom = ({ onPagechange }) => {
  console.log(onPagechange)
  const SignIn = useSignIn();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      const { data } = await axios.post("/api/vi/login", values);
      console.log(data.token);
      if (data.sucess) {
        SignIn({
          token: data.token,
          expiresIn: 5 * 24 * 60 * 60 * 10000,
          authState: { email: data.user.email },
          tokenType: "Bearer",
        });
      }
      data.sucess && navigate("/");
      data.error &&
        formik.setErrors({
          email: [data.error?.email],
          password: [data.error?.password],
        });
    } catch (error) {
      formik.setErrors({ email: "user not exist" });
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  console.log(onPagechange)

  return (
    <div className="w-10/12  relative  mx-auto flex flex-col gap-8">
      <div className="flex flex-col  gap-1">
        <div className="mx-auto">
          <p className="text-3xl  font-serif font-medium text-gray-900   mx-auto">
            SignIn
          </p>
        </div>
      </div>
      <form
        action=""
        className="flex flex-col gap-14"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <p className="font-semibold text-gray-700">Email</p>
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
              placeholder="Type your email"
              className="outline-none w-full bg-transparent"
            />
          </div>
          <p className="text-red-600 text-sm">
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Password</p>
          <div className="flex items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200">
            <span>
              <BiLock className="text-gray-500" />
            </span>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              placeholder="Type your password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              className="outline-none w-full"
            />
          </div>
          <p className="text-red-600 text-sm">
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}
          </p>
          <div className="py-1 text-gray-600 text-right text-sm">
            <div onClick={(e) => onPagechange(e, "getEmail")}>
              Forgot password?
            </div>
          </div>
        </div>
        <button
          //   onClick={() => verfiyOTP()}
          className="flex  flex-row cursor-pointer items-center justify-center text-center w-full border rounded-xl outline-none py-2 text-lg bg-black border-none text-white  shadow-sm"
        >
          LogIn
        </button>
      </form>
      <div className="text-center">
        <p className="py-2 text-gray-600">Have not account yet?</p>
        <Link to={"/SignUp"} className="font-semibold cursor-pointer underline">
          SIGNUP
        </Link>
      </div>
    </div>
  );
};

export default LoginCom;
